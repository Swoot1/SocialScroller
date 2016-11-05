window.SocialScrolling = {
    intervalId: null,
    startScrolling: function (minutesOfScrolling, readingPauseInMilliseconds){
        var startTime = Date.now();
        var endTime = startTime + 1000*60*minutesOfScrolling;
        minutesOfScrolling = minutesOfScrolling || 10;
        readingPauseInMilliseconds = readingPauseInMilliseconds || 2500;

        this.intervalId = window.setInterval(() => {
            var timeToStopScrolling = Date.now() > endTime;

            if(timeToStopScrolling){
                this.stopScrolling();
            }

            window.scrollTo(0,document.body.scrollHeight);

        }, readingPauseInMilliseconds);
    },
    stopScrolling: function(){
        clearInterval(this.intervalId);
    }
};
