x=0;
y=0;
drawcircle="";
drawrectangle="";
var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening please speak"
    recognition.start
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been recognized as:"+content;
    if(content=="circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        drawcircle = "set";
    }
    if(content =="rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        drawrectangle = "set";
    }
}
    function setup() { 
    canvas = createCanvas(900, 600);
     }
     function draw(){
        if(drawcircle=="set"){
            radius=Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="Circle is Drawn."
            drawcircle=""; 
        }
        if(drawrectangle=="set"){
            
            rect(x,y,70,50);
            document.getElementById("status").innerHTML="Rectangle is Drawn."
            drawrectangle=""; 
        }
     }


