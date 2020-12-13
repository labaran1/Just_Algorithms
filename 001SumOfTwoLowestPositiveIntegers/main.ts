function sumTwoSmallestNumbers(arr:Array<number>):Number{
let a:number = Math.min(...arr);
arr.splice(arr.indexOf(a),1);

let b:number = Math.min(...arr);
arr.splice(arr.indexOf(b),1);






return a+b;
    
}



console.log(sumTwoSmallestNumbers([1,2,3,4,5,6,7]))