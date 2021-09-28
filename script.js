var scentence = document.getElementById("scentence");
var toShow = document.getElementById("show");
var startScentence = scentence.innerHTML;
var successPercent = document.getElementById("error_num");
var amountOfErrs = 1;
var accessAmount = 0;
var isStarted = true;


document.onkeypress = function(evt) 
{
    if(isStarted)
    {
        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
        var keyPressed = String.fromCharCode(key);
        var scentenceString = `${scentence.innerHTML}`;
        var firstWordScentence = scentenceString.charAt(0);
        var scentenceLength = (document.getElementById("hidden_scentence").innerHTML).length;
        successPercent.innerHTML = amountOfErrs;
        if(keyPressed == firstWordScentence) 
        {

            scentence.innerHTML = scentenceString.slice(1);
            toShow.innerHTML += keyPressed;
            accessAmount += 1;
            document.getElementById("success_num").innerHTML = accessAmount;
        } 
        else 
        {
            amountOfErrs += 1;
            console.log(amountOfErrs);
            document.getElementById("close").style.display = "block";
            setTimeout(() => {
                document.getElementById("close").style.display = "none";
            }, 300);
        }
        if(scentence.innerHTML == "")
        {
            document.getElementById("check").style.display = "block";
            setTimeout(() => {
                document.getElementById("check").style.display = "none";
                toShow.innerHTML = "";
                scentence.innerHTML = startScentence;
                ms = 0;
                amountOfErrs = 1;
                accessAmount = 0;
            }, 3000); 
            document.getElementById("close").style.display = "none";
        }
    }
};    

document.getElementById("restart").addEventListener('click', () => {
    document.getElementById("check").style.display = "none";
    toShow.innerHTML = "";
    scentence.innerHTML = startScentence;
    ms = 0;
    amountOfErrs = 1;
    accessAmount = 0;
});

// var currentChar = document.getElementById("currentchar");


function msToTime(ms)
{  
    var sec = Math.floor(ms / 1000);
    var hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    var min = Math.floor(sec / 60);
    sec -= min * 60;

    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
    min = '' + min;
    min = ('00' + min).substring(min.length);
    hrs = '' + hrs;
    hrs = ('00' + hrs).substring(hrs.length);

    if(hrs > 0)
    {

        return hrs + ":" + min + ":" + sec;
    }
    else
    {
        return min + ":" + sec;
    }
}

var ms = 0;
var timer = setInterval(() => {

    ms += 1000;
    document.getElementById("timer").innerHTML = msToTime(ms);

}, 1000);

document.getElementById("pause").addEventListener(('click'), () => {
    isStarted = false;

    window.clearInterval(timer);
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";

});

document.getElementById("play").addEventListener(('click'), () => {
    isStarted = true;

    timer = setInterval(() => {

        ms += 1000;
        document.getElementById("timer").innerHTML = msToTime(ms);
    
    }, 1000);
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";

});