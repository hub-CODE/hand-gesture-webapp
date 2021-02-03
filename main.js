Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function (datauri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OwP3OpkMp/model.json',modelLoaded);