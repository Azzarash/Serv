var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'Vbhdfhrhfanf1',
    database: 'appdb'
});

var transfer = {
    index: 0,
    name0: undefined,
    about0: undefined,
    img0: undefined
};


/* GET home page. */
exports.index = function (req, res, next) {
    pool.getConnection(function (err, conn) {
        query = conn.query('SELECT * from articles ORDER BY article_date DESC, article_id DESC');
        query.on('error', function (err) {
            throw err;
        });
        query.on('result', function (row) {
            console.log('The solution is: ', row);
            transfer.name0 = row.article_name;
            transfer.about0 = row.article_promo;
            transfer.img0 = row.article_cover;
            transfer.index += 1;
        });
        query.on('end', function (result) {
            console.log("OK");
            console.log(transfer.name0);
            console.log(transfer.about0);
            console.log(transfer.index);
            res.render('index', {
                title: 'Отдых и развлечения',
                name0: transfer.name0,
                about0: transfer.about0,
                img0: transfer.img0
            });
        });
    });
};
