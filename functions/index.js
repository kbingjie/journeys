const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin')
admin.initializeApp();

exports.checkinvite = functions.https.onCall((data, context) => {
    if(data == 'chypre') {
        return true
    } else {
        return false
    }

})