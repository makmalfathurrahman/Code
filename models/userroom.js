"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRoom extends Model {
    static associate(models) {
      UserRoom.belongsToMany(models.Room, { through: "UserRooms" });
    }
  }
  UserRoom.init(
    {
      UserId: DataTypes.INTEGER,
      RoomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserRoom",
    }
  );
  return UserRoom;
};
