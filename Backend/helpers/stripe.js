const stripe = require("stripe-rest-sdk");

stripe.configure({
  mode: "",
  client_id: "",
  client_secret: "",
});

module.exports = stripe;
