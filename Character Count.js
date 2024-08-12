function ct(s) {
    var c = {};
    for (var ch of s) {
        c[ch] = c[ch]+1||1;
    }
    console.log(c);
}
ct(prompt("Enter String: "));
