var baseUrl = "https://lumos-calendar-api.herokuapp.com/calendar/api/v1/events";
var datas;
var data_length;
var lgt_search ;
var arananDatas;

function getData() {
  $.ajax({
      url:baseUrl,
      type:'GET',
      dataType:'json',
      contentType: "application/json; charset=utf-8",
      success:function(data) {
        data_length = data.length;
        datas = data;
      }
  });
}

function search(key) {
  $.get(baseUrl + "/search/" + key, function( data ) {
    lgt_search= data.length;
    arananDatas = data;
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
  var myObject = {"user_id":"1",
                  "title":title,
                  "description":description,
                  "start_time": date + "T" + start_time,
                  "end_time": date + "T" + end_time,
                  "reminder":reminder,
                  "recurring":null};
  $.ajax({
      url:baseUrl,
      type:'POST',
      dataType:'json',
      data : JSON.stringify(myObject),
      contentType: "application/json; charset=utf-8",
      success:function(data) {
        alert(data.title + " is added");
      }
  });
}

function showAppointment() {
        var div = document.getElementById("appointments");

        div.innerHTML="";
        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'table table-striped');
        tbl.setAttribute('id', 'table');
        var thead = document.createElement('thead');
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

        var tbody= document.createElement('tbody');

        var tr2= document.createElement('tr');

        tbody.appendChild(tr2);

        tbl.appendChild(tbody);

        div.appendChild(tbl);

        var table = document.getElementById("table");

        var date = document.getElementById("date").value;

        for(var i =0;i<data_length;i++) {
          var str = datas[i].start_time;
          var str_split = str.split("T");
          var tarih = str_split[0];
          var row = tbl.insertRow(-1);

          if(tarih == date) {
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = datas[i].title;
            cell2.innerHTML = datas[i].description;
            cell3.innerHTML = datas[i].start_time;
            cell4.innerHTML = datas[i].end_time;
          }
        }
}

function searchTable() {

  var key = document.getElementById("searchKey").value;

  search(key);

  var div = document.getElementById("onHere");

  div.innerHTML="";
  var tbl = document.createElement('table');
  tbl.setAttribute('class', 'table table-striped');
  tbl.setAttribute('id', 'table');

  var thead = document.createElement('thead');
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

  var tbody= document.createElement('tbody');
  var tr2= document.createElement('tr');
  tbody.appendChild(tr2);

  var date = document.getElementById("date").value;

  tbl.appendChild(tbody);
  div.appendChild(tbl);
  var table = document.getElementById("table");

  for(var i =0;i<lgt_search;i++) {
    var str = arananDatas[i].start_time;
    var str_split = str.split("T");

    var tarih = str_split[0];
    //console.log(tarih);
    var row = tbl.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = arananDatas[i].title;
    cell2.innerHTML = arananDatas[i].description;
    cell3.innerHTML = arananDatas[i].start_time;
    cell4.innerHTML = arananDatas[i].end_time;
  }
}
