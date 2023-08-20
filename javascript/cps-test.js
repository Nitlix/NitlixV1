if (localStorage.getItem('nitlixis-cps-test-av') == null) {
    localStorage.setItem('nitlixis-cps-tests-done', 0);
    localStorage.setItem('nitlixis-cps-test-av', 0);
}
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
var cps = 0.0;
var time = 0.0;
var clicks = 0;
var avcps = 0;
var timecps = 0;
timeId = null;
cpsId = null;
updatecpshalfsecond = null;
clickslasthalfsecond = 0;
clickslastsecond = 0;
startTime = 0;
function registerclick(){
    clicks += 1;
}
function updatetime() {
    timecps = (new Date().getTime() - startTime) / 1000 + 's';
    document.getElementById('cpstime').innerHTML = 'Time: ' + timecps;
}

function updatecps() {
    avcps = (clicks / ((new Date().getTime() - startTime) / 1000)).toFixed(2);
    document.getElementById('cpscps').innerHTML = 'Average CPS: ' + avcps;
    
}
function updatecpslasthalfsecond() {
    var clicksthishalfsecond = clicks - clickslasthalfsecond;
    clickslasthalfsecond = clicks;
    clickslastsecond = clicksthishalfsecond;
    document.getElementById('cpshalfsec').innerHTML = 'Current CPS: ' + clicksthishalfsecond;

}
function clicklistener() {
    document.getElementById('cpsbox').addEventListener('click', registerclick);
}
function startcpstest(){
    document.getElementById('cpsbox').innerHTML = 'CPS TEST WILL START IN 5 SECONDS';
    document.getElementById('cpsbox').onclick = '';
    setTimeout(() => {$(document.getElementById('startcpstestbutton')).fadeOut('slow')}, 1000);
    setTimeout(() => {$(document.getElementById('cpsteststatdisplay')).fadeIn('slow')}, 2000);
    setTimeout(() => {$(document.getElementById('cpsteststatdisplay')).fadeIn('slow')}, 2000);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '300%'}, 2500);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = '3'}, 2500);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '100%'}, 3400);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '300%'}, 3500);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = '2'}, 3500);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '100%'}, 4400);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '300%'}, 4500);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = '1'}, 4500);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '500%'}, 5500);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = 'GO!'}, 5500);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = ''}, 6000);
    setTimeout(() => {startTime = new Date().getTime()},6000);
    setTimeout(() => {document.getElementById('cpsbox').addEventListener('click',registerclick)} ,6000);
    setTimeout(() => {timeId = setInterval(updatetime, 100)}, 6000);
    setTimeout(() => {cpsId = setInterval(updatecps, 100)}, 5990);
    setTimeout(() => {updatecpshalfsecond = setInterval(updatecpslasthalfsecond, 1000)}, 6000);
    setTimeout(() => {$(document.getElementById('endcpstestbutton')).fadeIn('slow')}, 6000);
    setTimeout(() => {
        if (clicks == 1){
            clicks = 0
        }
    }, 5800);
}
function registerresult(){
    if (localStorage.getItem('nitlixis-cps-tests-done') == 0) {
        localStorage.setItem('nitlixis-cps-test-av', avcps);
        localStorage.setItem('nitlixis-cps-tests-done', 1);
    } 
    else {
        avhistory = parseInt(localStorage.getItem('nitlixis-cps-test-av'));
        
        calctimes = parseInt(localStorage.getItem('nitlixis-cps-tests-done')) + 1;
        localStorage.setItem('nitlixis-cps-tests-done', calctimes);
        localStorage.setItem('nitlixis-cps-test-av', (avhistory + (avcps - avhistory) / parseInt(localStorage.getItem('nitlixis-cps-tests-done'))).toFixed(2));
    }
    testav = parseFloat(localStorage.getItem('nitlixis-cps-test-av'));
    document.getElementById('cpsatav').innerHTML = 'All-Time Averagee: ' + testav.toFixed(1);
}
function endcpstest() {
    //setTimeout(() => {document.getElementById('cpsteststatdisplay').style.display = 'none'}, 0);
    registerresult();
    setTimeout(() => {clearInterval(timeId)}, 0);
    setTimeout(() => {clearInterval(cpsId)}, 0);
    setTimeout(() => {clearInterval(updatecpshalfsecond)}, 0);
    setTimeout(() => {$(document.getElementById('endcpstestbutton')).fadeOut('slow')}, 0);
    setTimeout(() => {clicks = 0;},10);
    setTimeout(() => {document.getElementById('cpsbox').style.fontSize = '100%'},0);
    setTimeout(() => {document.getElementById('cpsbox').innerHTML = 'RESTART CPS TEST'},500);
    setTimeout(() => {document.getElementById('cpsbox').onclick = startcpstest},500);
}
