
let startTime;

function appStart(){
    startTime = new Date();
    console.log("app started");
    
}

function timestamp(){
    console.log(`${new Date() - startTime} ms passed`);
    
}

appStart();
setTimeout (() => {
    timestamp();
}, 3000)
