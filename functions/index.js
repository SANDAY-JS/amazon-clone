const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IVyf7EYd2Cfb727ZsdI1r8WF8efZZuTfgWeUYuvbfSWQikXpVe6fTHOVHbbfh5S3CbgaASfdjJT9XW4K7VJjX4E00rKr7OHfW"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listaen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-bc279/us-central1/api
