function lw(s) {
    var ar = s.split(' ');
    var l = ar[0];
    for(var a of ar) {
        if (a.length > ar.length) {
            l = a;
        }
    }
    console.log("Longest Word : "+l);
}
lw(prompt("Enter the String: "));
