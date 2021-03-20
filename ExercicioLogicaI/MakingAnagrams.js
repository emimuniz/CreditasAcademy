const MakingAnagrams2 = (a, b) => {
    a = a.split('')
    b = b.split('')
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] == b[j]) {
               a.splice(i, 1)
               b.splice(j, 1)
               i = i - 1;
            }
        }
    }
    return a.length + b.length
}


// console.log(MakingAnagrams2("de", "abc"))
// console.log(MakingAnagrams2('cde', 'abc'))
// console.log(MakingAnagrams2("hello", "world"))
// console.log(MakingAnagrams2("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))
console.log(MakingAnagrams2("showman", "showman"))