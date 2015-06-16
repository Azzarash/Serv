var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'Vbhdfhrhfanf1',
    database: 'appdb'
});

/* GET sections page. */
exports.display = function (req, res) {
    res.render('feedback', {});
};
