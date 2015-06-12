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
    name1: undefined,
    name2: undefined,
    name3: undefined,
    name4: undefined,
    name5: undefined,
    name6: undefined,
    name7: undefined,
    name8: undefined,
    promo0: undefined,
    promo1: undefined,
    promo2: undefined,
    promo3: undefined,
    promo4: undefined,
    promo5: undefined,
    promo6: undefined,
    promo7: undefined,
    promo8: undefined,
    cover0: undefined,
    cover1: undefined,
    cover2: undefined,
    cover3: undefined,
    cover4: undefined,
    cover5: undefined,
    cover6: undefined,
    cover7: undefined,
    cover8: undefined,
};


/* GET home page. */
exports.index = function (req, res, next) {
    pool.getConnection(function (err, conn) {
        query = conn.query('SELECT * from articles ORDER BY article_date DESC, article_id DESC');
        query.on('error', function (err) {
            throw err;
        });
        query.on('result', function (row) {
            //console.log('The solution is: ', row);
            switch (transfer.index) {
            case 0:
                transfer.name0 = row.article_name;
                transfer.promo0 = row.article_promo;
                transfer.cover0 = row.article_cover;
                transfer.index += 1;
                break
            case 1:
                transfer.name1 = row.article_name;
                transfer.promo1 = row.article_promo;
                transfer.cover1 = row.article_cover;
                transfer.index += 1;
                break
            case 2:
                transfer.name2 = row.article_name;
                transfer.promo2 = row.article_promo;
                transfer.cover2 = row.article_cover;
                transfer.index += 1;
                break
            case 3:
                transfer.name3 = row.article_name;
                transfer.promo3 = row.article_promo;
                transfer.cover3 = row.article_cover;
                transfer.index += 1;
                break
            case 4:
                transfer.name4 = row.article_name;
                transfer.promo4 = row.article_promo;
                transfer.cover4 = row.article_cover;
                transfer.index += 1;
                break
            case 5:
                transfer.name5 = row.article_name;
                transfer.promo5 = row.article_promo;
                transfer.cover5 = row.article_cover;
                transfer.index += 1;
                break
            case 6:
                transfer.name6 = row.article_name;
                transfer.promo6 = row.article_promo;
                transfer.cover6 = row.article_cover;
                transfer.index += 1;
                break
            case 7:
                transfer.name7 = row.article_name;
                transfer.promo7 = row.article_promo;
                transfer.cover7 = row.article_cover;
                transfer.index += 1;
                break
            case 8:
                transfer.name8 = row.article_name;
                transfer.promo8 = row.article_promo;
                transfer.cover8 = row.article_cover;
                transfer.index += 1;
                break
            default:
                break
            }
        });
        query.on('end', function (result) {
            console.log("OK");
            res.render('index', {
                title: 'Отдых и развлечения',
                name0: transfer.name0,
                name1: transfer.name1,
                name2: transfer.name2,
                name3: transfer.name3,
                name4: transfer.name4,
                name5: transfer.name5,
                name6: transfer.name6,
                name7: transfer.name7,
                name8: transfer.name8,
                promo0: transfer.promo0,
                promo1: transfer.promo1,
                promo2: transfer.promo2,
                promo3: transfer.promo3,
                promo4: transfer.promo4,
                promo5: transfer.promo5,
                promo6: transfer.promo6,
                promo7: transfer.promo7,
                promo8: transfer.promo8,
                cover0: transfer.cover0,
                cover1: transfer.cover1,
                cover2: transfer.cover2,
                cover3: transfer.cover3,
                cover4: transfer.cover4,
                cover5: transfer.cover5,
                cover6: transfer.cover6,
                cover7: transfer.cover7,
                cover8: transfer.cover8
            });
        });
    });

};
