localStorage.setItem('nitlixis-ui-open', 'closed');
if (localStorage.getItem("nitlixis-light") == null) {
    localStorage.setItem("nitlixis-light", "ON");
}
if (localStorage.getItem('nitlixis-developer-mode') == null){
    localStorage.setItem('nitlixis-developer-mode', 'OFF')
}
if (localStorage.getItem("nitlixis-preloader") == null) {
    localStorage.setItem("nitlixis-preloader", "ON");
}
if (localStorage.getItem("nitlixis-times-visited") != null) { 
    var temptimesvisited = parseInt(localStorage.getItem("nitlixis-times-visited")) + 1;
    localStorage.setItem("nitlixis-times-visited", temptimesvisited);
}
if (localStorage.getItem("nitlixis-times-visited") == null) {
    localStorage.setItem("nitlixis-times-visited", 1); 
}


//Theme Styles
var lightbackground = 'linear-gradient(210deg, #ff00e1, #00fff7)';
var darkbackground = 'linear-gradient(210deg, #4f0046, #003836)';
var lightuibackground = 'white'
var darkuibackground_dark = '#121212'
var darkuibackground_medium = '#1b262c'



var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];



//Functions 

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


function uishow(id){
    if (localStorage.getItem('nitlixis-ui-open') == "closed"){
        $(id).fadeIn('slow');
        localStorage.setItem('nitlixis-ui-open',id);
    }
}
function uihide(id){
    $(id).fadeOut('slow');
    localStorage.setItem('nitlixis-ui-open', "closed");
}
function toggleui(id) {
    if (localStorage.getItem('nitlixis-ui-open') == "closed"){
        $(id).fadeIn('slow');
        localStorage.setItem('nitlixis-ui-open', id);
    }
    if (localStorage.getItem('nitlixis-ui-open') == id){
        $(id).fadeOut('slow');
        localStorage.setItem('nitlixis-ui-open', "closed");
    }
}
function thememode() {
    if (localStorage.getItem("nitlixis-light") == "OFF") {
        localStorage.setItem("nitlixis-light", "ON");
    }
    else{
        localStorage.setItem("nitlixis-light", "OFF");
    }
    window.location.reload();
}

function togglepreloader() {
    if (localStorage.getItem("nitlixis-preloader") == "OFF") {
        localStorage.setItem("nitlixis-preloader", "ON");
    }
    else{
        localStorage.setItem("nitlixis-preloader", "OFF");
    }
    window.location.reload();
}
function registervisit(object, reminder = null, normalsrc = null) {
    if (localStorage.getItem("visited-"+object) == null) {
        localStorage.setItem("visited-"+object, "VISITED");
        document.getElementById(reminder).src = normalsrc;
    }
    
}
function checkvisit(object) {
    if (localStorage.getItem("visited-"+object) == "VISITED") {
        return true;
    }
    else {
        return false;
    }
}

function memoryclean() {
    localStorage.clear();
    window.location.reload();
}

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27){
        if (localStorage.getItem('nitlixis-ui-open') != 'closed'){
            $(localStorage.getItem('nitlixis-ui-open')).fadeOut('slow');
            localStorage.setItem('nitlixis-ui-open','closed');
        }
    }
});
//On load style set
window.onload=function(){
    
    if (localStorage.getItem("nitlixis-times-visited") > 10){
        if (checkvisit('hidden-settings') == false) {
            document.getElementById('settings-button').src = 'img/UI/settings-reminder.png';

        }
    }
    if (localStorage.getItem("nitlixis-preloader") == "OFF"){
        document.getElementById("preloader").style.display = 'none';
    }
    var windowheight = window.innerHeight;
    var windowwidth = window.innerWidth;
    var screen = window.innerWidth / window.innerHeight;
    if (localStorage.getItem('nitlixis-developer-mode') == "ON"){
        alert(screen);
    }
    if (localStorage.getItem("nitlixis-light") == "ON"){
        //document.getElementById("switch").src ='img/UI/activate-darkmode.png';
        document.getElementById("preload-switch").src = "img/ns/nitlixis-purple.png";
        document.getElementById("reset-switch").src = "img/UI/reset-purple.png";
        document.body.style.background = lightbackground;
        footer.style.backgroundColor = lightuibackground;
        preloader.style.background = lightbackground;
        document.getElementById('hidden-settings').style.backgroundColor = lightuibackground;
        //document.getElementById("switch").style.filter = 'drop-shadow(0px 0px 15px white)';
        document.getElementById('hidden-settings').style.color = 'black';
    }
    else{	       		
        //document.getElementById("switch").src = "img/UI/deactivate-darkmode.png";
        document.body.style.background = darkbackground;
        footer.style.backgroundColor = darkuibackground_medium;
        document.getElementById("footer-text").style.color ='white';
        preloader.style.background = darkbackground;
        document.getElementById('hidden-settings').style.backgroundColor = darkuibackground_medium;
        //document.getElementById("switch").style.filter = 'drop-shadow(0px 0px 15px rgba(255,0,140,0.3))';
        document.getElementById("reset-switch").src = "img/UI/reset.png";
        document.getElementById("visitstatimg").src = "img/UI/visitstat-light.png";


    }

    if (screen > 1) {
        var set = windowwidth * 0.1
        //document.getElementById('switch').style.width = set + 'px';
        document.getElementById('preload-switch').style.width = set + 'px';
        document.getElementById('reset-switch').style.width = set + 'px';
        document.getElementById('visitstatimg').style.width = set + 'px';
    }
    if (screen < 1.54){

        if (screen > 0.9){
            document.getElementById('menu').style.paddingTop = windowheight * 0.07 + 'px';
        }

        else {
            if (screen > 0.764){
                document.getElementById('menu').style.paddingTop = windowheight * 0.07 + 'px';
                document.getElementById('menu').style.fontSize = "80%";
            }
            else {
                //Usually Phones
                document.getElementById('logo').style.float = 'none';
                document.getElementById('menu').style.fontSize = "80%";
                document.getElementById('menu').style.width = '100%';
                document.getElementById('menu').style.paddingRight = '0px';
                //document.getElementById('switch').style.display = 'block';
                //document.getElementById('switch').style.marginLeft = 'calc(50% - 10px)';
                document.getElementById('menu').style.textAlign = 'center';
                //document.getElementById('switch').style.paddingTop = windowheight * 0.05 + 'px';
            }
        }

    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == 'cps.html'){
        document.getElementById('cpsteststatdisplay').style.display = 'none';
        document.getElementById('endcpstestbutton').style.display = 'none';
        document.getElementById('cpsatav').innerHTML = 'All-Time Average: ' + localStorage.getItem('nitlixis-cps-test-av');
    }
    document.getElementById('visitstattxt').innerHTML = localStorage.getItem('nitlixis-times-visited') + ' Site Visits';
    if (screen < 0.5){
        document.getElementById('footer-text').style.fontSize = '80%';
    }
    if (localStorage.getItem("nitlixis-preloader") == "ON"){
        $('#status').delay(950).fadeOut('fast');
        $('#preloader').delay(1050).fadeOut('slow');
    }
    $('body').delay(1050).css({'overflow':'visible'});
}

