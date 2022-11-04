var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition

function start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;

    document.getElementById("textarea").innerHTML= content
    if(content =="take my selfie."||content=="Take my selfie.") {
        speak(); 
    }
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data= "Taking Selfie in 5 seconds";
    var utterTHIS= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterTHIS);
    Webcam.attach(Camera);
    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById("result1").innerHTML='<img id="img_1" src="'+data_uri+'">'
        });
        save();
    },5000);
    var synth= window.speechSynthesis;
    speak_data= "Taking next Selfie";
    var utterTHIS= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterTHIS);
    Webcam.attach(Camera);
    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById("result2").innerHTML='<img id="img_2" src="'+data_uri+'">'
        });
        save();
    },9000);
    var synth= window.speechSynthesis;
    speak_data= "Taking next selfie";
    var utterTHIS= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterTHIS);
    Webcam.attach(Camera);
    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById("result3").innerHTML='<img id="img_3" src="'+data_uri+'">'
        });
        save();
    },15000);

  
}
Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90,
})
Camera=document.getElementById("camera");

function save(){
link=document.getElementById("link");
image=document.getElementById("img_1").src;
image=document.getElementById("img_2").src;
image=document.getElementById("img_3").src;
link.href=image;
link.click()
}


