

// Creating our Day1 model
module.exports = function(sequelize, DataTypes) {
  var Day1 = sequelize.define("Day1", {
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

  return Day1;
};

    // createdAt: {
    //     type:DataTypes.Date,
    //     allowNull:true,
    //     defaultValue: sequelize.literal("NOW()")
    // },
    // updatedAt: {
    //         type:DataTypes.Date,
    //         allowNull:true,
    //         defaultValue: sequelize.literal("NOW()")
    // }
    
  