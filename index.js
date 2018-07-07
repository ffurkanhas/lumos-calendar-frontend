

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

    url:'https://lumos-calendar-api-deneme.herokuapp.com/api/v1/calendars',
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
$.get( "https://lumos-calendar-api-deneme.herokuapp.com/api/v1/calendars", function( data ) {
return data;
  });
}

function search(key) {

  $.get( "https://lumos-calendar-api-deneme.herokuapp.com/api/v1/calendars/search/"+key, function( data ) {
return data;
  });

}

function send() {

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var date = document.getElementById("date").value;
  var start_time = document.getElementById("start_time").value;
  var end_time = document.getElementById("end_time").value;
  var reminder = document.getElementById("reminder").value;
  var recurring = document.getElementById("recurring").value;

    var myObject = {"userid":"null",
                  "title":title,
                  "description":description,
                  "date":date,
                  "start_time":start_time,
                  "end_time":end_time,
                  "reminder":reminder,
                  "recurring":"null"};

$.ajax({

    url:'https://lumos-calendar-api-deneme.herokuapp.com/api/v1/calendars',
    type:'POST',
    dataType:'json',
    data : JSON.stringify(myObject),
     contentType: "application/json; charset=utf-8",
    success:function(data) {
      
    }

});

}
