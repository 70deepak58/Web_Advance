let sl;
function start(){
navigator.wakeLock.request('screen').then(lock=>{
    sl=lock;
});
}
function stop(){
// wakeLock.release().then(()=>{
//     wakeLock=null;
//await lock.release();
// });
sl.release().then(()=>{
    sl=null;
});
}