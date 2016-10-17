var myVideo = document.getElementById("video1");
myVideo.play();
function playersize(){
    if ($(window).width() > 1400) {
        $(".headerInfo").css("height", $(window).height()*.8);
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

var cb=1;
function changebackground(){
	cb=cb+1;
	if(cb>4){
		cb=1;
	}
	setTimeout(function(){
		$("#meetTheHost").css('background-image','url(assets/img/bg/dog-'+cb+'.jpg)');
		changebackground();
	},10000);	
}
changebackground();