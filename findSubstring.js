// Using indexOf method
const findSubstring = (substring, string) => {
    if (string.indexOf(substring) >= 0) {
        return string.indexOf(substring);
    } else {
        return -1;
    }
}

// kmp search which I don't fully understand
// function kmpSearch(substring, string) {
//     if (substring.length == 0)
//       return 0; // Immediate match
  
//     // Compute longest suffix-prefix table
//     var lsp = [0]; // Base case
//     for (var i = 1; i < substring.length; i++) {
//       var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
//       while (j > 0 && substring.charAt(i) != substring.charAt(j))
//         j = lsp[j - 1];
//       if (substring.charAt(i) == substring.charAt(j))
//         j++;
//       lsp.push(j);
//     }
  
//     // Walk through string string
//     var j = 0; // Number of chars matched in substring
//     for (var i = 0; i < string.length; i++) {
//       while (j > 0 && string.charAt(i) != substring.charAt(j))
//         j = lsp[j - 1]; // Fall back in the substring
//       if (string.charAt(i) == substring.charAt(j)) {
//         j++; // Next char matched, increment position
//         if (j == substring.length)
//           return i - (j - 1);
//       }
//     }
//     return -1; // Not found
//   }

console.log(findSubstring('ab', 'abbcdabbbbbck'));
console.log(findSubstring('bck', 'abbcdabbbbbck'));
console.log(findSubstring('bbbck', 'abbcdabbbbbck'));
console.log(findSubstring('asdf', 'abbcdabbbbbck'));


