let song;
let button;
let amp;

function preload() {
    song = loadSound('./assets/bubbles_1.mp3');
    // Create the play button in preload() function
    button = createButton("Play");
    button.position(150, 100,); // Adjust the position as needed
    button.mousePressed(togglePlaying);
}

function setup() {
    createCanvas(600, 600);
    amp = new p5.Amplitude();
    background(0);
    // Call the loaded function when the sound is loaded
    song.onended(loaded);
}

function loaded() {
    console.log("Sound loaded");
}

function draw() {
    background(255);
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.5, 50, 200);
    fill(190, 216, 206);
    ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("Pause");
    } else {
        song.pause();
        button.html("Play");
    }
}
