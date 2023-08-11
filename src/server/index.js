const express = require('express');
const admin = require("firebase-admin");
const cors = require('cors');
const PORT = 5001;

const isAuthenticated = require('./authMiddleware');
var serviceAccount = require("./*.json"); // service account json. Go to project settings, then service account and click generate. Download the file and the path to it. DO NOT commit it!
const app = express();
app.use(cors());

app.get('/', isAuthenticated, (req, res) => {
    if (req.user.email != 'admin@adminsomething.com') {
        //
    }
    res.json({ ok: true });
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

app.listen(PORT, console.log.bind(console, `Server is running on port ${PORT}`));