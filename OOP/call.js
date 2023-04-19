function showLoading(){
    console.log("1. Loading screen appeared");
}
function hideLoading(){
    console.log("4. Loading screen hidden");
}
function getData(callback){
    console.log("2. start pulling data");
    setTimeout(()=>{
        console.log("3. finished pulling data");
        callback();
    }, 2000);
}
showLoading();
getData(hideLoading);