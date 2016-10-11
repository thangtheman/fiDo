var myVideo = document.getElementById("video1");
myVideo.play();
function playersize(){
    if ($(window).width() > 1400) {
        $(".headerInfo").css("height", $(window).height()*.9);
    }
    else {
        $(".headerInfo").css("height", $(window).width()*0.5625);
    }
}
playersize();
//Resize To Fit Frame
$(window).on('load, resize',function(){
    playersize();
});
setTimeout(function(){playersize();},500);
