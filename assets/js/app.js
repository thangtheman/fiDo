var myVideo = document.getElementById("video1");
myVideo.play();
function playersize(){
    if ($(window).width() > 1400) {
        // $(".headerInfo").css("height", $(window).height()*.8);
    }
    else {
        // $(".headerInfo").css("height", $(window).width()*0.5625);
    }
}
playersize();
//Resize To Fit Frame
$(window).on('load, resize',function(){
    playersize();
	signupFormResize();
});
setTimeout(function(){playersize();},500);

var cb=1;
function changebackground(){

	if ($(window).width() > 767) {
		cb=cb+1;
		if(cb>4){
			cb=1;
		}
		setTimeout(function(){
			$("#meetTheHost").css('background-image','url(assets/img/bg/dog-'+cb+'.jpg)');
			changebackground();
		},10000);	}
	else {
	}

}
changebackground();
function signupFormResize() {
	$('.footer-signup .form').css('width', $('.view-btn').width()+20);
	$('img.player-preview').css('height', $('.widget-2').height());
	$('.widget-3 .wrap').css('height', $('.widget-2').height());
	$('#info .signUpForm input').css('width', $('#info .signUpForm').width()-97);
}
signupFormResize();
$('img.player-preview').css('height', $('.widget-2').height()+51);
$('.widget-3 .wrap').css('height', $('.widget-2').height()+51);
