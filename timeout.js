function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout(() => {
//     console.log('lazyy and waiting')
// }, 5000)
setInterval(function(){
    console.log('doing it')
},3000)
setTimeout(doSomething, 40000)
console.log(44444);