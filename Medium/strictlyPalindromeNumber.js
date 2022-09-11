// https://leetcode.com/problems/strictly-palindromic-number/

var isStrictlyPalindromic = function (n) {
    const isPalindrome = (str) =>{
        return str === str.split('').reverse().join('') ? true : false
    }
    
    for (let i = 2; i<=n-2; i++){
        let base = n.toString(i)
        
        if (!isPalindrome(base)) return false
    }
    return true
};

console.log(isStrictlyPalindromic(3))
console.log(isStrictlyPalindromic(4))