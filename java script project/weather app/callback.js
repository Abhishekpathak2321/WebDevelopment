function alive (name, Callback){
    document.write("Hii " + name);
    Callback()
}

function me(){
setTimeout(() => {
    document.write("waiting  The Men Behind The Power")
}, 3000);
    document.write("");
}
alive("Abhishek", me)


//synchronous Math Function.

function add (a,b,callback){
    let result = a+b;
callback(result)
}

function addition (sum){
    document.write("the sum of the two number" + sum)
}
add(100,20,addition);


function task (callback) {
    setTimeout(()=>{
        
    })
}

