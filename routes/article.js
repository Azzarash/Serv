var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'Vbhdfhrhfanf1',
    database: 'appdb'
});

/* GET article page. */
exports.display = function (req, res) {
    var transfer = {
        aid: req.params.aid,
        name: undefined,
        promo: undefined,
        cover: undefined,
        text: undefined
    }


    pool.getConnection(function (err, connection) {
        query = connection.query('SELECT * from articles WHERE article_id='+transfer.aid);
        query.on('error', function (err) {
            throw err;
        });
        query.on('result', function (row) {
            //console.log('The solution is: ', row);
            transfer.name = row.article_name;
            transfer.promo = row.article_promo;
            transfer.cover = row.article_cover;
            transfer.text = row.article_text;
        });
        query.on('end', function (result) {
            console.log("OK");
            //console.log(transfer);
            res.render('article', {
                name: transfer.name,
                promo: transfer.promo,
                cover: transfer.cover,
                text: transfer.text
            });
        });
    });
};
