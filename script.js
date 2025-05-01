
function showSurprise() {
  const modal = document.getElementById("messageModal");
  modal.style.display = "block";
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}
function closeModal() {
  document.getElementById("messageModal").style.display = "none";

}
function toggleMusic() {
  const music = document.getElementById("birthdayAudio");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
