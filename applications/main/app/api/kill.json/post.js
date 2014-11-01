module.exports = function(client, callback) {
	console.log(JSON.parse(client.data));
    //var connection = pgsqlConnection.connection;
    
    send();

    function send() {
        var response = {
            code: 200,
            response: 'POST_OK'
        }
        client.context.data = response;
        callback();
    }
}
