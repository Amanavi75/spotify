console.log("Welcome to Spotify");
let songIndex= 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: " salam-e-ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg"}

]

//audioElement.play();
// listen to Events
myProgressBar.addEventListener('time', ()=>{

})

