import { musicLibrary } from './data.js';
console.log("script loaded successfully!");

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
lofi.addEventListener("click", function() {
    mood = "lofi";
    setupApp();
});

function setupApp() {
    moodWindow.classList.add("hidden");
    feedWindow.classList.remove("hidden");
    fetchMusic();
}

function fetchMusic() {
    getRandomInt(62); 
    const selectedSong = musicLibrary.find(song => song.id === select_id);

    if (selectedSong && selectedSong.tags.includes(mood)) {
        musicposter.src = selectedSong.cover; // data.js mein 'cover' hai, 'poster' nahi
        musicname.textContent = selectedSong.title; // data.js mein 'title' hai, 'name' nahi
        artistname.textContent = selectedSong.artist;
        player.src = selectedSong.src;
        player.play();
        console.log("Found matching song:", selectedSong.title);
    } else {
        console.log("Mood mismatch for ID:", select_id, ". Retrying...");
        fetchMusic(); 
    }
}

function getRandomInt(max) {
    select_id = Math.floor(Math.random() * max) + 1;
}