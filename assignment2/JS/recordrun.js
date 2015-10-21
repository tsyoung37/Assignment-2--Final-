window.onload=function ini(){
 x = document.getElementById("demo");
 running = false;

    lan3=0;
    lon3=0;
    lan2=0;
    lon2=0;    
lan1 = 0 , lon1 = 0;   
};

var marker;
function getLocation() {
    
    running = ~running;
    
    if (running) {
        
        document.getElementById("myButton1").value="STOP";
        
    if (navigator.geolocation) { 
        id=navigator.geolocation.watchPosition(showPosition);
        time();
        alert("Start Recording...");
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }
    else {
        
        document.getElementById("myButton1").value="START";
        stop();
        alert("Stop Recording...")
        
         //stopGetLocation();
        navigator.geolocation.clearWatch(id);

        
    }
}

function clearRoute(){
    document.getElementById("myButton3");
    marker.setMap(null);
    reset();
    alert("Record Cleared");
    
}
    
function stopGetLocation(){
     navigator.geolocation.clearWatch(navigator.geolocation.watchPosition(showPosition));
}
    
 
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); //Makes a latlng
    map.panTo(latLng); //Make map global
        lan2=position.coords.latitude;
        lon2=position.coords.longitude;
        lan3 = lan2;
        lon3 = lon2;

    console.log(lan2)
console.log(lan3)
    
    if (lan1 == 0)
    {
      lan1= position.coords.latitude
      lon1 = position.coords.longitude
      
      marker = new google.maps.Marker({
    position: {lat: position.coords.latitude, lng: position.coords.longitude},
    map: map,
    title: 'Current Location'
            });
    }
    else 
    {
    
  flightPlanCoordinates = [
    {lat: position.coords.latitude, lng: position.coords.longitude},
    {lat: lan1, lng: lon1}
  ];

    lan1 = position.coords.latitude
    lon1 = position.coords.longitude
    
    var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
    }
}


var d1 = 0;


function distanceCalculate(lan1,lon1,lan3,lon3)
{
    
    var R = 6378.137;
    var dLat = (lan3 - lan1) * Math.PI / 180;
    var dLon = (lon3 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lan1 * Math.PI / 180) * Math.cos(lan3 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    
    d1 = d*1000;
    
    return d1; // meters
    
}
console.log(d1)
var spd2=0;

function Speed()
{
    var spd1;

    spd1 = d1/ef
    
    spd2 = spd1
    return spd1
    
}

var value1,value2,value3;

value2 = d1

value3 = spd2

function Save()
{
     document.getElementById("myButton2")
     
     askForName();

     
    if (typeof(Storage)!=="undefined")
    {
        
         saveRun = { speed:value3,
                    
                     distance:value2
                    };
        localStorage.setItem("savedRunName", JSON.stringify(saveRun))
                        
    }
    else
    {
        console.log("storage is not supported by browser")
    }
}
function askForName() 
{
    var saver = prompt("Please enter a name for the record", "Record...");
    if (saver != null) {
        alert("Done!");
    }
    localStorage.setItem("abcd",JSON.stringify(saver))
}   