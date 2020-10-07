// Creating our Day7 model
module.exports = function(sequelize, DataTypes) {
    var Day7 = sequelize.define("Day7", {
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
  
    return Day7;
  };
  