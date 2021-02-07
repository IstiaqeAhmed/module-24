var name = 'pranky';
function add (num1, num2){
    result = num1 + num2;
    console.log('name inside', name);
    function double (num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log('name outside', name);
var sum = add(13, 21);
console.log(sum);
console.log('result outside', result);
// window = running environment
// The javascript variable window is an object representing a window containing a DOM Document.
// Global variable = function er bahir theke declare kora
