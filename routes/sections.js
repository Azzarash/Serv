var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'Vbhdfhrhfanf1',
    database: 'appdb'
});

/* GET sections page. */
exports.display = function (req, res) {
    var transfer = {
        index: 0,
        names: []
    }

    pool.getConnection(function (err, connection) {
        query = connection.query('SELECT * from articles ORDER BY article_date DESC, article_id DESC');
        query.on('error', function (err) {
            throw err;
        });
        query.on('result', function (row) {
            //console.log('The solution is: ', row);
            transfer.names[transfer.index] = row.article_name;
            transfer.index++;
        });
        query.on('end', function (result) {
            console.log("OK");
            console.log(transfer.names);
            res.render('sections', {
                index: transfer.index,
                names: transfer.names
            });
        });
    });
};
