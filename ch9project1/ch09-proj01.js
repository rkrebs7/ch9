const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

document.addEventListener("DOMContentLoaded", function()  {
  let videoNode = document.querySelector("#vidPlayer");
  let stopNode = document.querySelector("#stop");
  let videoSource = document.querySelector("source");
  let playPauseNode = document.querySelector("#play");
  let forwardNode = document.querySelector("#forward");
  let backwardNode = document.querySelector("#backward");
  let asideNode = document.querySelector("aside");

for (let i = 0; i < files.length; i++)  {
  let newNode = document.createElement("img");
  newNode.setAttribute("src", 'images/' + files[i] + '.jpg');
  newNode.setAttribute("alt", files[i]);

  asideNode.appendChild(newNode);

  newNode.addEventListener("click", function(){
    //stop current video
    videoNode.pause();
    //load new video
    videoSource.setAttribute("src", 'videos/' + files[i] + '.mp4');
    videoSource.setAttribute("type", 'video/mp4');
    videoNode.load();
    videoNode.currentTime = 0;
    videoNode.play();
    playPauseNode.innerHTML = symbolPause;
  })  //end image click event listener
}//end for loop
  stopNode.addEventListener("click", function() {
  videoNode.pause();
  videoNode.currentTime = 0;
  playPauseNode.innerHTML = symbolPlay;
}) //end stop play button  

  playPauseNode.addEventListener("click", function()  {
    if(playPauseNode.innerHTML == symbolPlay) {
       videoNode.play();
       playPauseNode.innerHTML = symbolPause;
    }
    else  {
      videoNode.pause();
      playPauseNode.innerHTML = symbolPlay;
    }
  }) //end play/pause button click event listener

  forwardNode.addEventListener("click", function()  {
    videoNode.pause();
    let newTime = parseFloat(forwardNode.getAttribute("data-skip")) + videoNode.currentTime;

    videoNode.currentTime = newTime;
    videoNode.play();
  }) // end forward button

  backwardNode.addEventListener("click", function() {
    videoNode.pause();
    let newTime = parseFloat(backwardNode.getAttribute("data-skip")) + videoNode.currentTime;
    videoNode.currentTime = newTime;
    videoNode.play();
  }) //end backward button
}); //end contentloaded brace