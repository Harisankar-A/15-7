function lg(ar) {
    let l = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > l) {
            l = ar[i];
        }
    }
    console.log(l);
}
lg([20,60,30,50,100]);