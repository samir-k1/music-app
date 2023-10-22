console.log("welcome to spotify");
let songIndex=0;

let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName:"yo yo",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    
]
//Handle  play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
  }
})

myProgressBar.addEventListener('timeupdate',()=>{
console.log('timeupdate');
})

