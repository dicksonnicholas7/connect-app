$(document).ready(function(){

    console.log('profile');


    function moveProgress(num) {
        let num_html = 440 - (440 * num) / 100;
        document.getElementById("html").style.setProperty("stroke-dashoffset",num_html);
        document.getElementById("circle").style.stroke = "#62B55D";
        document.getElementById("percentage").textContent = num;       
    }


    $("#resend_link").click(function(event){

        window.location = ''

    });


    $('#country').change(function(){
        var countryCode = "";
        var code = $("#country option:selected").text();
    
        
    $.ajax({ type: "GET",   
             url: "https://restcountries.eu/rest/v2/name/"+code+"/?fields=callingCodes",   
             async: false,
             success : function(text)
             {

                 var arr = text; 
                 var arrayToString = JSON.stringify(Object.assign({}, arr));  // convert array to string
                 var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json 
    
                var res = $.map(text, function(stringToJsonObject, i){
                    countryCode = stringToJsonObject.alpha2code;
                    return stringToJsonObject.callingCodes;
                 });
 
    
                 $("#country_code").val(res);
    
                 console.log(res);
                 console.log(countryCode);
    
             }
    });    
    });
   

    
    $("#btnSubmitClientProfile").click(function(event){
        event.preventDefault();  
		var formData = new FormData($('form#fmProfileClient')[0]);

            $.ajax({
                url:'/user/update-profile',
				type:'post',
				contentType: false,
                processData: false,
                cache:false,
                data:formData,
                success:function(response){
                    window.location = '/user/client-profile-view'
                }
            }); 
    });


    

    $("#editProfileButton").click(function(event){
        $("#free-profile-view").hide();
        $("#fmProfile").show();
    });


    


    $("#btnAddNewEdu").click(function(event){

        $("#show-education").hide();
        $(".edit-profile").show();

    });

    
    

    
    

    $("#editfreebutton").click(function(event){

        $("#viewFreeProfile").hide();
        $(".edit-profile").show();


    });
    

    
    $("#btnEditFreelancerProfile").click(function(event){
        event.preventDefault();
        var formData = new FormData($('form#freeEditData')[0]);
        
        var fn = $("#firstname").val();
        var ln = $("#lastname").val();
        var jt = $("#jobtitle").val();
        var gp = $("#golden_paragraph").val();
        var av = $("#availability option:selected").val();
        var cty = $("#city").val();
        var coun = $("#country option:selected").val();

            $.ajax({
                url:'/user/update-profile',
				type:'post',
				contentType: false,
                processData: false,
                cache:false,
                data:formData,
                success:function(response){

                        $("#freeEditData").hide();

                        
                        $("").addClass("");

                        $("#view_name").text(fn + "  " + ln);
                        $("#view_jobtitle").text(jt);
                        $("#view_coun_city").html(`<i class="fa fa-map-marker mb-3" ></i>&nbsp;${cty}, ${coun}<i class="pl-5 fa fa-map-marker">${av}</i>`);
                        $("#view_para").text(gp);

                        $("#viewFreeProfile").show(); 
                }
            }); 
    });

    $("#btnSubmitProfile").click(function(event){
        event.preventDefault();
        var formData = new FormData($('form#fmProfile')[0]);
        
        var fn = $("#firstname").val();
        var ln = $("#lastname").val();
        var jt = $("#jobtitle").val();
        var gp = $("#golden_paragraph").val();
        var av = $("#availability option:selected").val();
        var cty = $("#city").val();
        var coun = $("#country option:selected").val();

            $.ajax({
                url:'/user/update-profile',
				type:'post',
				contentType: false,
                processData: false,
                cache:false,
                data:formData,
                success:function(response){


                        $("#fmProfile").hide();                       
                        $("#view_name").text(fn + "  " + ln);
                        $("#view_jobtitle").text(jt);
                        $("#view_coun_city").html(`<i class="fa fa-map-marker mb-3" ></i>&nbsp;${cty}, ${coun}<i class="pl-5 fa fa-map-marker">${av}</i>`);
                        $("#view_para").text(gp);

                        moveProgress(30);
                        document.querySelector(".profile_icon").classList.add("profile_done");
                        document.getElementById("profile1").classList.add("profile_done");
                        $("#free-profile-view").show(); 
       
                }
            }); 
    });
});
