//Print odd numbers in an array
let even_odd=()=>{
    let n=4;
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
};
even_odd();

//Convert all the strings to title caps in a string array
let caps=(str)=>{
    console.log(str.toLowerCase().split(' ').map(function(word){
        return(word.charAt(0).toUpperCase()+word.slice(1));
    }).join(' '));
};
caps("hello guvi");

//Sum of all numbers in an array
let sum_aray=(arr)=>{
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans+=arr[i];
    }
    console.log(ans);
};
sum_aray([3,4,5,6]);

//Return all the prime numbers in an array
let prime=(arr)=>{
    let ans=new Array();
    for(let i = 0; i<=arr.length;i++){
        for(let j=2;j<i;j++){
            if(arr[i]%j !=0){
                ans.push(arr[i]);
            }           
        }        
    }
    console.log(ans);
};
prime([3,4,5,6]);

//Return all the palindromes in an array
let palindrome=(str)=>{
    let arr=new Array();
    for(let i=0; i<str.length;i++){
        str[i]=str[i].toLowerCase();
        let rev=str[i].split("").reverse().join("");
        if(str[i]===rev){
            arr.push(str[i]);
        }
    }
    console.log(arr);
};
palindrome(["aba", "car", "racecar"]);
