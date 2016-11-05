var minutesOfScrolling = 10;
var readingPauseInMilliseconds = 2500;
var startTime = Date.now();
var endTime = startTime + 1000*60*minutesOfScrolling;

var intervalId = window.setInterval(() => {
    var timeToStopScrolling = Date.now() > endTime;
    
    if(timeToStopScrolling){
        clearInterval(intervalId);
    }
    
    window.scrollTo(0,document.body.scrollHeight);
    
}, readingPauseInMilliseconds);