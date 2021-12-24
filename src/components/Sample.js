let arr = ["red", "blue", "green"];
let [blue] = arr;

function checkPalindrome(str){
    let srtArray = str.split("")
    let newArray = str.split("").reverse()
    if (srtArray === newArray) {
        return 'palidrome'
    }else{
        return 'Not palindrome'
    }
}