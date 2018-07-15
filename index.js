var baseUrl = "https://lumos-calendar-api.herokuapp.com/calendar/api/v1/events";
var  datas;
var lgt ;
var lgt_search ;
var arananDatas;

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
  lgt =data.length;
  datas= data;
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
                "recurring":"null"};

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
      

      for(var i =0;i<lgt;i++) {

      var str = datas[i].start_time;
      var str_split = str.split("T");
      console.log(str_split[0]);
      console.log(str_split[1]);   
      var tarih = str_split[0];
      console.log(tarih);
      var row = tbl.insertRow(i);
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

function setEvents() {

  getData();

  var event = new Object();
  

  var Events = [];
  for(var i =0; i<lgt;i++) {

      var titles = datas[i].title;
      var description = datas[i].description;
      var str = datas[i].start_time;
      var str_split = str.split("T");
      var tarih = str_split[0];
      var badge = "00";
      var classname = "purple-event";

      var oject = new Object();

      object.title = titles;
      object.description = description;
      object.date = tarih;
      object.badge = badge;
      object.classname = classname;
      object.footer ="";
      object.body = "";

 

      var string = JSON.stringify(object);
      Events.push(string);



  }

  return Events;
}

function searchTable() {

  var key = document.getElementById("searchhKey").value;

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

        tbl.appendChild(tbody);

        div.appendChild(tbl);

        var table = document.getElementById("table");



        var date = document.getElementById("date").value;
      

      for(var i =0;i<lgt_search;i++) {

      var str = arananDatas[i].start_time;
      var str_split = str.split("T");
   
      var tarih = str_split[0];
      console.log(tarih);
      var row = tbl.insertRow(i);
     
        
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


