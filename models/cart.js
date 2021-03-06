'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Guest,{foreignKey:'GuestId'})
      Cart.belongsTo(models.Product,{foreignKey:'ProductId'}) 
    }

    // static composeId(pId,gId){
    //   return
    // }
  };


  Cart.init({
    GuestId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    paymentStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};