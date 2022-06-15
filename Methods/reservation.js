import reservationModel from "../models/reservationmodel";

class ReservationController {
  constructor() {
    //
  }

  async create(req, res) {
    const { customer_id, hotel_id, room_id, check_in, check_out } = req.body;

    try {
      await reservationModel.create({
        customer_id,
        hotel_id,
        room_id,
        check_in,
        check_out,
      });
      res
        .status(200)
        .json({ status: 200, message: "Booking confirmed..."});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const reservation = await reservationModel.find();
      res.status(200).json({ status: 200, message: "Here's a list of bookings", data: reservation });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const reservation = await reservationModel.findById(id);
      if (reservation) {
        res.status(200).json({ status: 200, message: "Here's your search", data: reservation });
      } else {
        throw new Error("Reservation with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    // get the id from request
    try {
      let reservationId = req.params.id;
      const reservation = await reservationModel.findByIdAndDelete(reservationId, req.body);
      if (reservation) {
        res.status(200).json({ status: 200, message: `Reservation deleted` });
      } else {
        throw new Error("Reservation with this ID not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      let reservationId = req.params.id;
      const reservation = await reservationModel.findByIdAndUpdate(reservationId, req.body);
      if (reservation) {
        res.status(200).json({ status: 200, message: "Update successful!!" });
      } else {
        throw new Error("Reservation with this ID does not exist");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
 
  async getallresrvationsofuser(req, res){
    // All Bookings of customer
    try{
        let userId = req.params.customer_id;
        const reservations = await db.reservationModel.find({status: userId});
        if (reservation) {
            res.status(200).json({ status: 200, message: "all reservations of yours" });
          } else {
            throw new Error("Reservation with this ID does not exist");
          }
        } catch (error) {
          res.status(500).json(error.message);
        }
    
   }
}

export default ReservationController;