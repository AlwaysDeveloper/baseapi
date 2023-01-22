'use strict';
const {
  Model
} = require('sequelize');
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserRole, Country }) {
      // define association here
      this.hasOne(UserRole, { foreignKey: "userRole" });
      this.hasOne(Country, { foreignKey: "country" });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userRole: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        isIn: [[1, 2]]
      },
      defaultValue: 2
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    hooks: {
      beforeCreate: (user) => {
        user.password = crypto.createHash("md5").update(user.password).digest("hex");
        return user;
      }
    }
  });
  return User;
};