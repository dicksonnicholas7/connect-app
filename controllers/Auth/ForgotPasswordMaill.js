const nodeMailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const {client_id, client_secret, refresh_token} = require('../../config/keys');

//set up google OAuth2 client
const oauth2Client = new OAuth2(
    client_id, // ClientID
    client_secret, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

//set credentials to get access token
oauth2Client.setCredentials({
    refresh_token: refresh_token
});
const accessToken = oauth2Client.getAccessToken();

//send email for reset password
module.exports.SendMailResetPassword = (emailReceiver, token, hostname)=>{
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "amalitechconnect@gmail.com",
            clientId: client_id,
            clientSecret: client_secret,
            refreshToken: refresh_token,
            accessToken: accessToken
        }  
    });


    let data = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width" name="viewport"/>
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style type="text/css">
            body {
                margin: 0;
                padding: 0;
            }
            table,
            td,
            tr {
                vertical-align: top;
                border-collapse: collapse;
            }
            * {
                line-height: inherit;
            }
            a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
            }
        </style>
    <style id="media-query" type="text/css">
            @media (max-width: 520px) {
                .block-grid,
                .col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }
                .block-grid {
                    width: 100% !important;
                }
                .col {
                    width: 100% !important;
                }
                .col>div {
                    margin: 0 auto;
                }
                img.fullwidth,
                img.fullwidthOnMobile {
                    max-width: 100% !important;
                }
                .no-stack .col {
                    min-width: 0 !important;
                    display: table-cell !important;
                }
                .no-stack.two-up .col {
                    width: 50% !important;
                }
                .no-stack .col.num4 {
                    width: 33% !important;
                }
                .no-stack .col.num8 {
                    width: 66% !important;
                }
                .no-stack .col.num4 {
                    width: 33% !important;
                }
                .no-stack .col.num3 {
                    width: 25% !important;
                }
                .no-stack .col.num6 {
                    width: 50% !important;
                }
                .no-stack .col.num9 {
                    width: 75% !important;
                }
                .video-block {
                    max-width: none !important;
                }
                .mobile_hide {
                    min-height: 0px;
                    max-height: 0px;
                    max-width: 0px;
                    display: none;
                    overflow: hidden;
                    font-size: 0px;
                }
                .desktop_hide {
                    display: block !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff;">
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;" valign="top" width="100%">
    <tbody>
    <tr style="vertical-align: top;" valign="top">
    <td style="word-break: break-word; vertical-align: top;" valign="top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ffffff"><![endif]-->
    <div style="background-color:#ffffff;">
    <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #0068a5;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#0068a5;">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#0068a5"><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="125" style="background-color:#0068a5;width:125px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
    <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 123px; width: 125px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
    <div style="font-size:1px;line-height:5px"> </div><img align="center" alt="logo" border="0" class="center autowidth" src="cid:logo@amalitech.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 125px; display: block; margin-left: 15px;" title="logo" width="125"/>
    <!--[if mso]></td></tr></table><![endif]-->
    </div>
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td><td align="center" width="375" style="background-color:#0068a5;width:375px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
    <div class="col num9" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 369px; width: 375px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#0068a5;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
    <div style="line-height: 1.2; font-size: 12px; color: #0068a5; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
    <p style="line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"><span style="color: #0068a5;"></span></p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>
    <div style="background-color:transparent;">
    <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px;"><![endif]-->
    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Banner" border="0" class="center autowidth" src="cid:backdrop@amalitech.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 500px; display: block;" title="Banner Image" width="500"/>
    <!--[if mso]></td></tr></table><![endif]-->
    </div>
    <div align="center" class="button-container" style="padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:27.75pt; width:147pt; v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#a21200"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]-->
    <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#a21200;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:auto; width:auto;border-top:1px solid #a21200;border-right:1px solid #a21200;border-bottom:1px solid #a21200;border-left:1px solid #a21200;padding-top:0px;padding-bottom:5px;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all; margin-top: -30%;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;cursor: pointer;"><a style="text-decoration:none;color:white;"  href="http://`+hostname+`/reset-password/`+token+`/`+emailReceiver+`">Click here to reset password</a></span></span></div>
    <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
    </div>
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
    <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
    <p style="line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"> </p>
    <p style="line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"> </p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
    <tbody>
    <tr style="vertical-align: top;" valign="top">
    <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" valign="top" width="100%">
    <tbody>
    <tr style="vertical-align: top;" valign="top">
    <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
    <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
    <p style="line-height: 1.2; word-break: break-word; font-size: 16px; mso-line-height-alt: 19px; margin: 0;margin-left: 15px;"><span style="font-size: 16px;">Need Help?</span></p>
    <p style="line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"> </p>
    <p style="line-height: 1.2; word-break: break-word; font-size: 12px; mso-line-height-alt: 17px; margin: 0;margin-left: 15px;"><span style="font-size: 12px;">Feel free to send us an email or call to talk to our support. We will be </span></p>
    <p style="line-height: 1.2; word-break: break-word; font-size: 12px; mso-line-height-alt: 17px; margin: 0;margin-left: 15px;"><span style="font-size: 12px;">happy to resolve all your issues.</span></p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
    </body>
    </html>`



    const mailOptions = {
        to: emailReceiver,
        from: 'Connect',
        subject: 'Reset Password',
        html: data,
        attachments:[{
            filename:'logo-email-template.png',
            path:__dirname + '../../../public/vendors/img/logo-email-template.png',
            cid:'logo@amalitech.com'
        },
        {
            filename:'reset.png',
            path:__dirname + '../../../public/vendors/img/reset.png',
            cid:'backdrop@amalitech.com'
        }
    ]
    };
    transporter.sendMail(mailOptions)
        .then(() => {
            console.log("Email sent successfully");
            return 1;
        }).catch((err) => {
        console.log(err.message);
        return (err.message);
    });

};

hashPassword = (password) =>{
    return crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
};