const admin = require('firebase-admin');

function isAuthenticated(req, res, next) {
    console.log(req.headers.authorization);
    if (!req.headers.authorization) {
        res.status(401).json({message: 'Not authorized'});
        return;
    }

    admin.auth()
        .verifyIdToken(req.headers.authorization)
        .then((decodedToken) => {
            req.user = decodedToken;

            next();
        })
        .catch(err => {
            res.status(404).json({ok: false});
            console.log(err)
        });
};

module.exports = isAuthenticated;