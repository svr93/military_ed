module.exports = function(client, callback) {
	
	
	
    var connection = pgsqlConnection.connection;
    
    
    
send();



connection.connectionParameters.port = 4444;
console.log(connection.connectionParameters.port);
console.log("bbbb");
console.log(pgsqlConnection.connection.connectionParameters.port);
console.log("aaaa");
    //selectUser();
    
    /*function selectUser() {
        connection.queryRow('SELECT MAX(b) FROM a',
        [], function (err, row) {
            console.dir({queryRow:row});
            if (err) {
                //sendError(err);
            } else {
                send(row);
            }
        });
    }*/
      
    function send() {
		console.log(pgsqlConnection.connection);
		console.log(connection.query);
		connection.query('SELECT MAX(b) FROM a',
        [], function (err, row) {
            console.dir({queryRow:row});
            if (err) {
                //sendError(err);
            } else {
                //send(row);
            }
        });
        var response = {
            code: 0,
            response: 1
        }
        client.context.data = response;
        callback();
    }
}
