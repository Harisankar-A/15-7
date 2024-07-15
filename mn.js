function mn(ar) {
    var n = ar.length+1 ;
    var s = (n * (n + 1)) / 2;
    var s1=0;
    for(var i of ar){
        s1+=i;
    }
    console.log("Missing Number: "+(s-s1));
    
}
mn([1,2,3,4,5,9,8,6]);