var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
  
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
   
    if(content=="take my selfie"){
        console.log("taking selfie...");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
    take_selfie();
    save();
    },5000);
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';

        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';

        }

    });
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
});
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();

}