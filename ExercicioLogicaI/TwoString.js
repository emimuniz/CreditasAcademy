//Two String
const TwoString = (s, b) => {
    s = s.split('');
    console.log(s)  
    if(s.filter((word) => b.includes(word)).length >= 1){
        return "YES"
    }
    return "NO"
}       


console.log(TwoString("hello", "world"))
// console.log(teste3("hi", "he"))