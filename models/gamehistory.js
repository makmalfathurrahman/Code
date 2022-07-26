"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GameHistory extends Model {
    static associate(models) {
      GameHistory.belongsTo(models.Room, { foreignKey: "RoomId" });
      GameHistory.belongsTo(models.User, { foreignKey: "winner" });
    }
  }
  GameHistory.init(
    {
      RoomId: DataTypes.INTEGER,
      winner: DataTypes.INTEGER,
      player1Choosen: DataTypes.STRING,
      player2Choosen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GameHistory",
    }
  );
};
