(function test() {
  var data = {
    'area': [50, 60, 70, 80, 90],
    'objects': ['drones', 'helicopters']
  }
  sendGet ("/info", data);
  
  data = {
    'coords': [50, 60, 70]
  }
  sendPost("/kill", data);
}());

function sendGet(url, data) {
  var params = "?";
  for (var key in data) {
    if (!(data[key] instanceof Array)) {
      params += (key + "=" + data[key] + "&");
    } else {
      params += (key + "=%5B");
      if (data[key].length) {
        data[key].forEach(function(elem) {
          params += ("'" + elem + "', ");
        });
        params = params.substr(0, params.length - 2);
      }
      params += "%5D&";
    }
  }
  params = params.substr(0, params.length - 1);
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(this.response);
    }
  }     
  xhr.open("GET", url + params, true);
  xhr.send();
}

function sendPost(url, data) {
  data = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(this.response);
    }
  }     
  xhr.open("POST", url, true);
  xhr.send(data);
}
