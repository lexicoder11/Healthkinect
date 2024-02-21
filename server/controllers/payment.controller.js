

const Payment = require('../models/payment.model');

// GET payments
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ patientId: req.patientId });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST make payments
exports.makePayment = async (req, res) => {
  try {
    const { amount } = req.body;
    const newPayment = new Payment({
      patientId: req.patientId,
      amount,
      date: new Date(),
      status: 'Pending',
    });
    await newPayment.save();
    res.json({ message: 'Payment made successfully', newPayment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPayments, makePayment };
