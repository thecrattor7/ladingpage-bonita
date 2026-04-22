document.addEventListener("DOMContentLoaded", function () {

  var video = document.getElementById("meuVideo");
  var videos = ["teclado.mp4", "mouseanim.mp4", "padanim.mp4", "monitooranim.mp4", "foneaim.mp4"];
  var indice = 0;

  video.onended = function () {
    indice++;

    if (indice >= videos.length) {
      indice = 0;
    }

    video.src = videos[indice];
    video.load();
    video.play();
  };

});
