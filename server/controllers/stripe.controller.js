const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/charge', async (req, res) => {
  try {
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'Payment for services',
    });

    res.status(200).json({ message: 'Payment successful', charge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

module.exports = router;

