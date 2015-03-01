var pg = require('pg');
var connString = 'postgres://mil_svr93:39rvs_lim@localhost/mil_svr93';
 
var client = new pg.Client(connString);

var UPD_DELAY = 500;

client.connect(function(err) {
  if (err) {
    return console.log(err);
  }
  
  startUpdates();
});

function startUpdates() {
  setTimeout(function upd() {
  
    client.query('UPDATE objects SET azimuth_angle_ec =\
    (azimuth_angle_ec + 0.01) % 6.28', function(err) {
    
      if (err) {
        return console.log(err);
      }
      
      setTimeout(upd, UPD_DELAY);
    });
  }, UPD_DELAY);
}
