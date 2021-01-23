const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Post extends Model {}

// define table columns and configuration
Post.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE
    sequelize,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'post'
  }
);

module.exports = Post;