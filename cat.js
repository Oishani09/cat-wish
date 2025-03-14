document.getElementById("playButton").addEventListener("click", function() {
    this.style.display = "none"; // Hide the button
    const videoContainer = document.getElementById("videoContainer");
    const video = document.getElementById("myVideo");
    videoContainer.style.display = "block";
    video.play(); // Start playing the video
});