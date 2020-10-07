// Creating our Day4 model
module.exports = function(sequelize, DataTypes) {
    var Day4 = sequelize.define("Day4", {
      // The email cannot be null, and must be a proper email before creation
      breakfast: {
        type: DataTypes.STRING,
        allowNull: false,
          
      },
      // The password cannot be null
      lunch: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dinner:{
          type: DataTypes.STRING,
        allowNull: false
      }
  
    },{
      freezeTableName: true
    }
    );
  
    return Day4;
  };
  