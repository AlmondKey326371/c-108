function startClassification()
{
          navigator.mediaDevices.getUserMedia({
                    audio: true
          });
          classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0DblbF8JO/model.json', modelReady);
} 
function modelReady()
{
          classifier.classify(gotResults);
}
function gotResults(error,results)
{
          if(error)
          {
                    console.error(error);
          }
          else
          {
                    console.log(results);
                    randomNumberR = Math.floor(Math.random() * 255) + 1;
                    randomNumberG =  Math.floor(Math.random() * 255) + 1;
                    randomNumberB = Math.floor(Math.random() * 255) + 1;

                    document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
                    document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence * 100).toFixed(2) + '%';
                    document.getElementById("result_label").style.color = "rgb(" + randomNumberR + "," + randomNumberG + "," + randomNumberB + ")";
                   
                    document.getElementById("result_confidence").style.color = "rgb(" + randomNumberR + "," + randomNumberG + "," + randomNumberB + ")";

                    img = document.getElementById('alien_1');
                    img1 = document.getElementById('alien_2');
                    img2 = document.getElementById('alien_3');
                    img3 = document.getElementById('alien_4');

                    if(results[0].label == "clap")
                    {
                              img.src = 'alien-01.gif';
                              img1.src = 'alien-02.png';
                              img2.src = 'alien-03.png';
                              img3.src = 'alien-04.png';
                    }
                    else if(results[0].label == "snap")
                    {
                              img.src = 'alien-01.png';
                              img1.src = 'alien-02.gif';
                              img2.src = 'alien-03.png';
                              img3.src = 'alien-04.png';
                    }
                    else if(results[0].label == "BackdroundNoise")
                    {
                              img.src = 'alien-01.png';
                              img1.src = 'alien-02.png';
                              img2.src = 'alien-03.png';
                              img3.src = 'alien-04.gif';
                    }
                    else
                    {
                              img.src = 'alien-01.png';
                              img1.src = 'alien-02.png';
                              img2.src = 'alien-03.gif';
                              img3.src = 'alien-04.png';
                    }
          }
}