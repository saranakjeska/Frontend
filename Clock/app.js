const countdown = () => {
    const countDate = new Date('December 1,2023 22:55:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    //kako funkcionira vremeto
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    //presmetka
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSeconds;




};

setInterval(countdown, 1000);
