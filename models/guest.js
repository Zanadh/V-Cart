'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guest.belongsToMany(models.Product, { through: models.Cart })
      // Guest.hasMany(,{foreignKey:'GuestId'})
      // Guest.hasMany(models.Cart, { as: 'Carts' })
    }
  };
  Guest.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};