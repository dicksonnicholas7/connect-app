'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobSkills = sequelize.define('JobSkills', {
    job_skills_name: DataTypes.STRING
  }, {});
  JobSkills.associate = function(models) {
    // associations can be defined here
    JobSkills.belongsTo(models.Job,{
      foreignKey: 'job_id',
      onDelete:'CASCADE'
    });
  }; 
  return JobSkills;
};