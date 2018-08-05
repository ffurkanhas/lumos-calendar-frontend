var baseUrl = "https://lumos-calendar-api.herokuapp.com/calendar/api/v1/events";
var datas;
var data_length;
var lgt_search ;
var arananDatas;
var buttons = new Array();
var ids = new Array();
var map = new Map();


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

function deleteData(id) {
  $.ajax({
      url:baseUrl + "/" + id,
      type:'DELETE',
      contentType: "application/json; charset=utf-8",
      success:function(data) {
        console.log(id)
        location.reload();
      }
  });
}

function search(key,callback) {


  $.ajax({
      url:baseUrl + "/search/" + key,
      type:'GET',
      dataType:'json',
      contentType: "application/json; charset=utf-8",
      success:function(data) {
        lgt_search= data.length;
        arananDatas = data;

        var div = document.getElementById("onHere");

        div.innerHTML="";
        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'table table-striped');
        tbl.setAttribute('id', 'search_table');

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');

        var th0 = document.createElement('th');
        var th0_text = document.createTextNode("ID");
        th0.appendChild(th0_text);
        tr.appendChild(th0);

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

        var date = document.getElementById("date").value;

        tbody.appendChild(tr2);
        tbl.appendChild(tbody);
        div.appendChild(tbl);




        for(var i = 0; i < lgt_search; i++) {
          var id = arananDatas[i].id;
 


          var start_time = arananDatas[i].start_time;
          var start_time_split = start_time.split("T");

          var end_time = arananDatas[i].end_time;
          var end_time_split = end_time.split("T");

          var row = tbl.insertRow(-1);

          var cell0 = row.insertCell(0);
          var cell1 = row.insertCell(1);
          var cell2 = row.insertCell(2);
          var cell3 = row.insertCell(3);
          var cell4 = row.insertCell(4);


          cell0.innerHTML = arananDatas[i].id;
          cell1.innerHTML = arananDatas[i].title;
          cell2.innerHTML = arananDatas[i].description;
          cell3.innerHTML = start_time_split[0] + " " + start_time_split[1];
          cell4.innerHTML = end_time_split[0] + " " + end_time_split[1];

        }

      }
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
                  "recurring":recurring};
  $.ajax({
      url:baseUrl,
      type:'POST',
      dataType:'json',
      data : JSON.stringify(myObject),
      contentType: "application/json; charset=utf-8",
      success:function(data) {
        alert(data.title + " is added");
        location.reload();
      }
  });
}

function showAppointment(callback) {
        var div = document.getElementById("appointments");

        div.innerHTML="";
        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'table table-striped');
        tbl.setAttribute('id', 'table');
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');

        var th0 = document.createElement('th');
        var th0_text = document.createTextNode("ID");
        th0.appendChild(th0_text);
        tr.appendChild(th0);

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
        var th5 = document.createElement('th');
        var th5_text = document.createTextNode("Delete");
        th5.appendChild(th5_text);
        tr.appendChild(th5);

        var tbody= document.createElement('tbody');

        var tr2= document.createElement('tr');

        tbody.appendChild(tr2);

        tbl.appendChild(tbody);

        div.appendChild(tbl);

        var table = document.getElementById("table");

        var date = document.getElementById("date").value;

        var button = new Array();
        var id_current = new Array();

        for(var i =0;i<data_length;i++) {
          var str = datas[i].start_time;
          var str_split = str.split("T");
          var tarih = str_split[0];

          var btn = document.createElement('BUTTON');
          btn.className = "btn btn-danger";
          btn.innerHTML = "Delete";

          


          if(tarih == date) {
            var start_time = datas[i].start_time;
            var start_time_split = start_time.split("T");

            var end_time = datas[i].end_time;
            var end_time_split = end_time.split("T");

            var row = tbl.insertRow(-1);

            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            cell5.appendChild(btn);
            button.push(btn);

            cell0.innerHTML = datas[i].id;
            cell1.innerHTML = datas[i].title;
            cell2.innerHTML = datas[i].description;
            cell3.innerHTML = start_time_split[0] + " " + start_time_split[1];
            cell4.innerHTML = end_time_split[0] + " " + end_time_split[1];
            id_current.push(datas[i].id)

            map.set(datas[i].id,btn)
           // map[datas[i].id] =btn;
          }
        }

        buttons = button;
        ids = id_current;
        callback();
}

function addListener() {

  console.log("Fonksiyona girdim");

console.log(buttons)
console.log(ids)

for(var i =0 ; i<buttons.length; i++) {

    
    my_id = ids[i];
    btn = map.get(ids[i])
    btn.addEventListener("click",function(){
      console.log("EKLIYORUM"+my_id);
      deleteData(int(my_id));
    });

    console.log("EKLENEN ID"+my_id)

    
}

}
