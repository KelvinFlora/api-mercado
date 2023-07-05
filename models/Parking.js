import mongoose from "mongoose";

const ParkingInfo = new mongoose.Schema({
  licenseplate: { type: String, required: true },
  entrytime: { type: Date },
  exittime: { type: Date },
  carname: { type: String, required: true },
  totalTime: { type: Number },
  totalPrice: { type: Number },
});

const ParkingEntrance = mongoose.model("parkingregisters", ParkingInfo);

export default ParkingEntrance;
