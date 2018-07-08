

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
  console.log(data);
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
  var start_time = document.getElementById("start_time_hour").value+":"+document.getElementById("start_time_min").value;
  var end_time = document.getElementById("end_time_hour").value+":"+document.getElementById("end_time_min").value;
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

function tableCreate() {
    var body = document.getElementById("appointments");
    var tbl = document.createElement('table');
    tbl.setAttribute('class', 'table');
    var thead = document.createElement('thead');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '0');
    var tbdy = document.createElement('tbody');

    var date = document.getElementById("date").value;
    var dates = search("deneme");
    console.log(dates)

    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th1_text = document.createTextNode("Title");
    th1.appendChild(th1_text);
    tr.appendChild(th1);

      var th2 = document.createElement('th');
    var th2_text = document.createTextNode("Descripton");
    th2.appendChild(th2_text);
    tr.appendChild(th2);
      var th3 = document.createElement('th');
    var th3_text = document.createTextNode("Start Time");
    th3.appendChild(th3_text);
    tr.appendChild(th3);
      var th4 = document.createElement('th');
    var th4_text = document.createTextNode("End Time");
    th4.appendChild(th4_text);
    tr.appendChild(th4);
    thead.appendChild(tr);
    tbl.appendChild(thead);
    tbl.appendChild(tbdy);
     body.appendChild(tbl);


}
