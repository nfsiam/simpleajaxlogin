var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    if (username == 'siam' && password == '1234') {
        res.cookie('logAdmin', req.body.username);
        res.json({ status: 'valid' });
    } else {
        res.json({ status: 'invalid' });
    }
});

module.exports = router;