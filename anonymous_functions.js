//Print odd numbers in an array
( ()=>{
    let n=4;
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
})();

//Convert all the strings to title caps in a string array
var title = function(str){
    return str.toLowerCase().split(' ').map(function(word){
        return(word.charAt(0).toUpperCase()+word.slice(1));
    }).join(' ');
}
console.log(title("hello guvi"));

//Sum of all numbers in an array
var abc = function(arr){
    let ans=0;
    for(let i=0;i<arr.length;i+=1){
        ans+=arr[i];
    }
    return(ans);
}
console.log(abc([3,4,5,6]));

//Return all the prime numbers in an array
var abc = function(arr){
    let ans=new Array();
    for(let i = 0; i<=arr.length;i++){
        for(let j=2;j<i;j++){
            if(arr[i]%j !=0){
                ans.push(arr[i]);
            }
            
        }        
    }
    return(ans);
}
console.log(abc([3,4,5,6]));

//Return all the palindromes in an array
var aa=function(str){
    let arr=new Array();
    //console.log(str);
    for(let i=0; i<str.length;i++){
        str[i]=str[i].toLowerCase();
        let rev=str[i].split("").reverse().join("");
        //console.log(rev);
        if(str[i]===rev){
            arr.push(str[i]);
        }
    }
    return(arr);
}
console.log(aa(["aba", "car", "racecar"]));

//Return median of two sorted arrays of the same size
( ()=>{
    arr1=[2,6,3,4];
    arr2=[6,5,3,1];
    arr=arr1.concat(arr2);
    if(arr.length%2 == 0){
        even=(arr.length)/2;
        console.log(arr[even-1]);
    }
    else{
        odd=((arr.length)+1)/2;
        console.log(arr[odd]);
    }
})();

//Remove duplicates from an array
(()=>{
    arr=[1,1,2,3,3,4];
    console.log(arr.filter((item,index)=>arr.indexOf(item)===index));
})();

//Rotate an array by k times
(()=>{
    arr=[1,2,3,4];
    ans=new Array();
    for(let i=0;i<arr.length-1;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})();
