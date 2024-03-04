const express = require('express');
const router = express.Router();
const Payment = require('../models/payment.model');

// Method: GET
// Description: View all payments by patient
router.get ('/payments', async (req, res) => {
  try {
    const payments = await Payment.find({ patientId: req.patientId });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
// Description: patient making a payment
router.post ('/makepayments', async (req, res) => {
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
});

module.exports = router
