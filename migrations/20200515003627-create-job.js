'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id:{
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references:{ 
          model: 'UserAccounts',
          key:'user_account_id'
        }
      },
      job_category_id:{
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references:{
          model: 'JobCategories',
          key:'id'
        }
      },
      job_title: {
        type: Sequelize.STRING
      },
      job_details: {
        type: Sequelize.STRING
      },
      job_timeLength: {
        type: Sequelize.STRING
      },
      job_price: {
        type: Sequelize.DECIMAL(6, 2)
      },
      job_status: {
        type: Sequelize.STRING
      },
      job_jobType: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};