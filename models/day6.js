// Creating our Day6 model
module.exports = function(sequelize, DataTypes) {
    var Day6 = sequelize.define("Day6", {
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
  
    return Day6;
  };
  