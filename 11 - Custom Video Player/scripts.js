 //get elemets
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

 //build out function
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this.value);
    console.log(this.name);
}
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis= `${percent}`
    console.log(`${percent}`);
}
 //event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('progress', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(button => button.addEventListener('change', handleRangeUpdate))
ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate))
