import { musicLibrary } from './data.js';
console.log("script loaded successfully!");
if(screen.width>400){
    alert('Website made only for smartphones, Kindly use dev tools.');
}
var mood, select_id;

const moodWindow = document.getElementById("mood-screen");
const feedWindow = document.getElementById("app-feed");
const player= document.getElementById("audio-player");
const hi = document.getElementById("hindi-btn");
const pub = document.getElementById("punjabi-btn");
const hary = document.getElementById("haryanvi-btn");
const lofi = document.getElementById("lofi-btn");
const backbtn = document.getElementById("back-btn");
const musicposter = document.getElementById("music-poster");
const musicname = document.getElementById("music-name");
const artistname = document.getElementById("artist-name");
const nextbtn = document.getElementById("next");
nextbtn.addEventListener("click", function() {
    fetchMusic();
});
backbtn.addEventListener("click", function() {
    moodWindow.classList.remove("hidden");
    feedWindow.classList.add("hidden");
});
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        moodWindow.classList.remove("hidden");
        feedWindow.classList.add("hidden");
    }
});

// Mood Selection Logic
hi.addEventListener("click", function() {
    mood = "hindi";
    setupApp();
});
pub.addEventListener("click", function() {
    mood = "punjabi";
    setupApp();
});
hary.addEventListener("click", function() {
    mood = "haryanvi";
    setupApp();
});

function setupApp() {
    moodWindow.classList.add("hidden");
    feedWindow.classList.remove("hidden");
    fetchMusic();
}

function fetchMusic() {
    getRandomInt(62); 
    const selectedSong = musicLibrary.find(function(song) {
        if (song.id === select_id) {
            return true;
        } else {
            return false;
        }
    });
    if (selectedSong && selectedSong.tags.includes(mood)) {
        musicposter.src = selectedSong.cover; 
        musicname.textContent = selectedSong.title; 
        artistname.textContent = selectedSong.artist;
        player.src=selectedSong.src;
        player.play();
        console.log("Match Found: " + selectedSong.title);
    } else {
        console.log("Mood mismatch for ID " + select_id + ". Trying again...");
        fetchMusic(); 
    }
}
function getRandomInt(max) {
    select_id = Math.floor(Math.random() * max) + 1;
}
