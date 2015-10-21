var caloriesburning;
var weight;
var age;
var height;
var d1;


function caloriesBurnt(){
        caloriesburning = (weight)*(0.63)*(d1);
    
        document.getElementById("cburnt").innerHTML = "" + caloriesburning + "cal";
}

function saveCalories()
{
    document.getElementById("saveCalories")
    localStorage.setitem("caloriesBurn","caloriesburnt")
}