const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
//seconds
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    if (seconds == 0) {
        secondHand.style.transition = 0;
    }else{
        secondHand.style.transition = 'all 0.05s';
    }

//minutes
    const min = now.getMinutes();
    const minDegree = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
//hours
    const hour = now.getHours();
    const hourDegree = ((hour / 12)* 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    console.log(hour + ':'+ min + ':' + seconds);
}

 setInterval(setDate, 1000);
