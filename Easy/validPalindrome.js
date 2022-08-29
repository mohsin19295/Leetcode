// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    let res = ''
    for (let i = s.length - 1; i >= 0; i--) {
        // We know that ASCII value for 0 to 9 has from 48 to 57, A to Z has it's ASCII value from 65 to 90 and a to z has 97 to 122. With knowing that we can filter and store all alphanumaric characters
        if (
            ((s[i].toLowerCase().charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) || s[i].charCodeAt(0) >=48 && s[i].charCodeAt(0) <=57)
            ) {
                res+=s[i].toLowerCase()
    }
    }
    let ans = ''
    for (let i = res.length - 1; i >= 0; i--) {
        ans+=res[i]
    }

    return ans === res
};
// console.log(isPalindrome("0p"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

