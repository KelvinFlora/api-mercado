import ParkingEntrance from "./models/Parking";
/*
class TestController {
  static registerExit = (req, res) => {
    const id = req.params.id;
    const { exitTime, entryTime } = req.body;
    const price = 0.16;
    console.log(price);
    const entry = new Date(entryTime);
    const exit = new Date(exitTime);
    const timeDiff = exit.getTime() - entry.getTime();
    const payment = (timeDiff / 60000) * price;

    const UpdatedExit = ParkingEntrance.findByIdAndUpdate(
      id,
      { entrytime: entry, exittime: exit, totalPrice: payment },
      { new: true }
    );
    res
      .status(200)
      .json({ message: `O valor a ser pago é de ${payment} reais.` });
  };
}
*/
