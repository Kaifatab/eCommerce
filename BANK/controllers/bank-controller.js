const account = require("../models/account");
const { hash_pin, compare_pin } = require("../utils/hash_pin");

const bankController = {};

bankController.createAccount = async (req, res, next) => {
  const { pin } = req.body;
  const hashed_pin = await hash_pin(pin);
  console.log(hashed_pin);
  const created_account = await account.create({
    ...req.body,
    pin: hashed_pin,
  });
  res.json(created_account);
};

bankController.make_payment = async (req, res, next) => {
  const { from, to, amount } = req.body;
  //   console.log("hello");
  console.log(from);

  const from_acc = await account.findOne({
    acc_number: from,
  });

  if (from_acc.balance < amount) {
    res.status(400).json({
      message: "Not enough balance",
    });
    return;
  }

  await account.findOneAndUpdate(
    { acc_number: from },
    {
      $inc: {
        balance: -amount,
      },
    }
  );

  await account.findOneAndUpdate(
    { acc_number: to },
    {
      $inc: {
        balance: amount,
      },
    }
  );

  res.json({
    status: "successful",
  });
};

module.exports = bankController;
