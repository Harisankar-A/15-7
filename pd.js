function pal(str) {
    let s1="maam";
    let s2= "";
    for (let i = 0; i < s1.length; i++) {
        s2=s1[i]+s2;
        }
    if(s1===s2){
    console.log("Palindrome");}
    else{console.log("Not a Palindrome");}
}
pal((prompt("Enter the String:")))