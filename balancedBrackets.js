// Time complexity: O(n) * O(8)
// space complexity: O(m + 12)

const balancedBrackets = (string) => {
    let ch, i;
    let len = string.length;
    let temp = [];

    let bracketsMap = new Map();
    bracketsMap.set(']', '[');
    bracketsMap.set(')', '(');
    bracketsMap.set('}', '{');
    bracketsMap.set('|', '|');

    let closingBrackes = [...bracketsMap.keys()];
    let openingBrackets = [...bracketsMap.values()];

    for (i = 0; i < len; i++) {
        ch = string[i]

        if (openingBrackets.indexOf(ch) > -1) {
            temp.push(ch);
        }
        if (closingBrackes.indexOf(ch) > -1) {
            let expectedBracket = bracketsMap.get(ch);
            if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
                return false
            }
        }
        else {
            continue;
        }
    };
    return (temp.length === 0);
}
    
    console.log(balancedBrackets('[(])')); // false
    console.log(balancedBrackets('foo(bar)baz')); // true
    console.log(balancedBrackets('{{||[]||}}')); // true
    console.log(balancedBrackets('I am happy to take your donation; any amount will be greatly appreciated.')); // true
    console.log(balancedBrackets('I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me.')); // true
    console.log(balancedBrackets('This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]')); // false