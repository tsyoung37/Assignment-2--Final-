var hour = 0;
var minute=0;
var second=0;
var msecond=0;
var a;

function time(){
	
	msecond += 1;
	if(msecond == 100){
		
		msecond = 0;
		second += 1;
		
	}
	
	if(second==60){
		
		second = 0;
		minute +=1;
	}
	
	if (minute == 60){
		
		minute = 0;
		hour += 1;
	}
	
	a = setTimeout(time,1);
	
    
    document.getElementById("stoppa").innerHTML = hour + ":" + minute + ":" + second + ":" + msecond ;
	
};
var ef;
function stop() {
    clearInterval(a);
    var ab = minute*60
    var bc = hour*60*60
    ef = ab+bc+second
    localStorage.setItem("string",ef)
}

function reset() {
	stop();
    clearTimeout(a);
    var hour =0;
    var minute=0;
    var second=00;
    var msecond=00;
    document.getElementById("stoppa").innerHTML = hour + ":" + minute + ":" + second + ":" + msecond ;

}
