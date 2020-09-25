'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Guest, { through: models.Cart })

    }
  };
  Product.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{ 
        notEmpty: {
          msg: 'name cannot be null'
        } 
      }
    },
    type: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{  
        notEmpty: {
          msg: 'type cannot be null'
        } 
      }
    },
    stock: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate:{  
        isPlus(value) {
          if(value<0) throw new Error('Please Input the right Stock!');
        }  
      }
    },
    price: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate:{ 
        notEmpty: {
          msg: 'Please input the right price!'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};