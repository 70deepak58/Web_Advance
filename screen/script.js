let wakeLock=null;
function start(){
wakeLock=await navigator.wakeLock.request('screen');
}
function stop(){
wakeLock.release().then(()=>{
    wakeLock=null;
});
}