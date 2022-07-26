const { Room, UserRoom, GameHistory } = require("../models");

class RoomController {
  static async createRoom(req, res, next) {
    try {
      const { name } = req.body;
      await Room.create({ name });
      res.status(200).json({ msg: "Success create room" });
    } catch (error) {
      console.log(error);
    }
  }

  static async registerRoom(req, res, next) {
    try {
      const { id } = req.headers.userLogin;
      const room_id = req.params.id;
      const input = req.body;

      await UserRoom.create({ UserId: id, RoomId: room_id });
      const room = await GameHistory.findOne({
        where: {
          RoomId: room_id,
        },
      });

      const player1 = room.dataValues.player1Choosen;

      if (player1) {
        const player1 = room.dataValues.player1Choosen;
        console.log(player1);
      } else {
        await GameHistory.create({
          RoomId: room_id,
          player1Choosen: input,
        });
      }

      res.status(200).json({ msg: `Welcome to room ${room_id}` });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = RoomController;
