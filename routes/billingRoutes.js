const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SEC_KEY);
const requireLogin  =require('../middlewares/requireLogin');

module.exports = app => {

  app.post('/api/stripe', requireLogin, async (req, res) => {

    //  stripe API
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    //  OnSuccess save to DB
    req.user.credits += 5;
    const user = await req.user.save();

    //  Return updated user
    res.send(user);
    
  });

};