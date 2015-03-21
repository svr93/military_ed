module.exports = function(client, callback) {
	var connection = pgsqlConnection.connection;
    
    connection.query('SELECT * FROM objects', function(err, result) {
		if (err) throw err;
    console.log('!!!');
    console.log(result.rows);
    console.log('!!!');
		
		send(result.rows);
	});
	
	function send(data) {       
        client.context.data = data;
        callback();
    }
}
