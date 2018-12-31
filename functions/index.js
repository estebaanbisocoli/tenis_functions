const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.freeMonth = functions.https.onRequest((request, response) => {
  const date = request.params;
  throw new Error("Holas");
  response.json({
    date: "1/2018",
    days: {
      1: {
        count: 2,
        appointments: [{ from: 8, to: 10 }, { from: 11, to: 12 }]
      }
    }
  });
});
