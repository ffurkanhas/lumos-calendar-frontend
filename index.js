
var baseUrl = "https://lumos-calendar-api.herokuapp.com/calendar/api/v1/events";

function sendData() {

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var start_date = document.getElementById("s_date").value;
  var end_date = document.getElementById("e_date").value;
  var reminder = document.getElementById("reminder").value;
  var myObject = {"userid":"null",
                  "title":title,
                  "description":description,
                  "start_date":start_date,
                  "end_date":end_date,
                  "reminder":reminder,
                  "recurring":"null"};

$.ajax({

    url:baseUrl,
    type:'POST',
    dataType:'json',
    data : JSON.stringify(myObject),
     contentType: "application/json; charset=utf-8",
    success:function(data) {
      console.log(data.title);
    }

});
}

function getData() {
$.get(baseUrl, function( data ) {
return data;
  });
}

function search(key) {

  $.get(baseUrl + "/search/" + key, function( data ) {
return data;
  });

}

function send() {

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var start_time = document.getElementById("start_time").value;
  var end_time = document.getElementById("end_time").value;
  var reminder = document.getElementById("reminder").value;
  var recurring = document.getElementById("recurring").value;

    var myObject = {"user_id":null,
                  "title":title,
                  "description":description,
                  "start_time":start_time,
                  "end_time":end_time,
                  "reminder":reminder,
                  "recurring":null};
    console.log(myObject);

$.ajax({

    url:baseUrl,
    type:'POST',
    dataType:'json',
    data : JSON.stringify(myObject),
     contentType: "application/json; charset=utf-8",
    success:function(data) {
      
    }

});

}
