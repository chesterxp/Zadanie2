$(document).ready(function(){
  var pokaz = document.getElementById('pokaz');
 
  
  
  pokaz.addEventListener('click',function(){
    var wojewodztwo = document.getElementById('wojewodztwo').value;
    var wojewodztwo2 = document.getElementById('wojewodztwo2');
    wojewodztwo2.textContent = wojewodztwo;
    
    var rynek = document.getElementById('rynek').value;
    var rynek2 = document.getElementById('rynek2');
    rynek2.textContent = rynek;
    
    var powierzchnia = document.getElementById('powierzchnia').value;
    var powierzchnia2 = document.getElementById('powierzchnia2');
    powierzchnia2.textContent = powierzchnia;
    
    var powiat = document.getElementById('powiat').value;
    var powiat2 = document.getElementById('powiat2');
    powiat2.textContent = powiat;
    
    var miejscowosc = document.getElementById('miejscowosc').value;
    var miejscowosc2 = document.getElementById('miejscowosc2');
    miejscowosc2.textContent = miejscowosc;    
    
    var dzielnica = document.getElementById('dzielnica').value;
    var dzielnica2 = document.getElementById('dzielnica2');
    dzielnica2.textContent = dzielnica;
    
  });
  
});




var myJSON = '{ "name":"John", "age":30, "city":"New York"}';
//var myObj = JSON.parse(myJSON);
//document.getElementById("demo").innerHTML = myObj.age+ " "+myObj.city +" Moje hobby to "+ myObj.hobby;
var object = JSON.parse(myJSON);
console.log(object.name);




var xml = new XMLHttpRequest();
xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json.txt", true);
xmlhttp.send();

