function fact(n) {
    if (n=== 0||n===1){
        return 1;
    }
    var r = 1;
    for (let i = 2; i <= n; i++) {
        r*= i;
    }
    return r;
}
console.log("Fcatorial : "+fact(parseInt(prompt("Enter the number:"))));
