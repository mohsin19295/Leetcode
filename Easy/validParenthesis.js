var isValid = function (s) {
      let stack = [];
      for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
          stack.push(s[i]); // Push all opening brackets into stack
        }

        switch (
          s[i] // Applying switch case in all close brackets
        ) {
          case "}": // If closing bracket is 'curli bracket', it means top element of the stack should be opening 'curli bracket'
            if (stack.pop() !== "{") return false;
            break;

          case ")": // same as previous
            if (stack.pop() !== "(") return false;
            break;

          case "]": // same as previous
            if (stack.pop() !== "[") return false;
            break;
        }
      }
      return stack.length === 0; // if all the above checks does not returning false value, it means given string is meeting the condition for parenthesis check. And if it is meeting the condition, it should have the length, otherwise it will return false for empty string
};


console.log(isValid("()[]{}"));
console.log(isValid("(})"));
console.log(isValid("({})"));