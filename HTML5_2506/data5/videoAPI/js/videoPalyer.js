var video
//비디오 변경
function changeVideo(linkBtn){
	video=document.getElementById('testVideo');
	video.src=linkBtn.href;
	video.load();
	video.type='video/ogg';
	playVideo();
	return false;
}
//비디오 재생
function playVideo(){
	if(!video){
		alert("재생할 비디오 버튼을 선택하세요")	
	}
	video.className="play";
	video.play();
}
//비디오 멈춤
function stopVideo(){
	if(!video){
		alert("재생중인 비디오가 없습니다.")	
	}
	video.className="";
	video.pause();
}