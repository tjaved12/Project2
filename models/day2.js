// Creating our Day2 model
module.exports = function(sequelize, DataTypes) {
    var Day2 = sequelize.define("Day2", {
      // The email cannot be null, and must be a proper email before creation
      breakfast: {
        type: DataTypes.STRING,
        allowNull: false,      
      },
      // The password cannot be null
      amsnack: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lunch: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pmsnack: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dinner:{
          type: DataTypes.STRING,
        allowNull: false
      }
  
    },{
      freezeTableName: true
    }
    );
  
    return Day2;
  };
  