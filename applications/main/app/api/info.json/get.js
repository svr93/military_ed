module.exports = function(client, callback) {
	console.log(client.query);
    //var connection = pgsqlConnection.connection;
    
    send();

    function send() {
        var response = {
            code: 200,
            response: 'OK'
        }
        client.context.data = response;
        callback();
    }
}
