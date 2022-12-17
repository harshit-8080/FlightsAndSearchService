'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.city,{
        foreignKey:'cityID',
        onDelete:'CASCADE',
        onUpdate:"CASCADE"
      });

    }
  }
  airport.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address: {
      type:DataTypes.STRING
    },
    cityID: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};