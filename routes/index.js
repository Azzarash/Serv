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
        query = conn.query('SELECT * from test_table');
        query.on('error', function (err) {
            throw err;
        });
        query.on('result', function (row) {
            console.log('The solution is: ', row);
            transfer.name0 = row.name_test_table;
            transfer.about0 = row.about_test_table;
            transfer.img0 = row.img_test_table;
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
