const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp()

exports.addWorkerRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email)
        .then(user => admin.auth().setCustomUserClaims(user.uid, {
            worker: true
        }))
        .then(() => ({message: `${data.email} has been made a worker`}))
        .catch(error => error)
});

exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email)
        .then(user => admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        }))
        .then(() => ({message: `${data.email} has been made an admin`}))
        .catch(error => error)
});