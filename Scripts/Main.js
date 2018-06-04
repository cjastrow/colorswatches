var sab = 0;
var sound = 1;
var open = document.getElementById("open");
var close = document.getElementById("close");
var steadyOn = document.getElementById("steadyOn");
var themeMusic = document.getElementById("themeMusic");
themeMusic.volume = .5;

var jason = JSON.parse(colors);

$("#button").click(function(){
	var rand = Math.floor(Math.random()*6);
	if(sab == 0){
		open.play();
		$("#saberColor").animate({top:"3px"},500);
		$("#saberColor").css("background-color",jason[0].swatchColors[rand]);
		$("#saberColor").css("box-shadow","0px 0px 15px " + jason[0].swatchColors[rand])
		sab = 1;
		steadyOn.play();
	}
	else if(sab == 1){
		close.play();
		$("#saberColor").animate({top:"900px"},500);
		sab = 0;
		steadyOn.pause();
	}

});

$("#mute").click(function(){
	if(sound == 1){
		$("#mute").css("width","60px");
		$("#mute").html("UNMUTE");
		themeMusic.pause();
		sound = 0;
	}
	else if(sound == 0){
		$("#mute").css("width","40px");
		$("#mute").html("MUTE");
		themeMusic.currentTime = 0;
		themeMusic.play();
		sound = 1;
	}
});

$("#enter").click(function(){
	themeMusic.play();
	$("#enter").css("display","none");
	$("#mute").css("display","inline-block");
	$("#button").css("display","inline-block");
	$("#saberColor").css("display","inline-block");
	$("#saber").css("display","inline-block");
});