//word = 'good morning'
/* // returns an array of letters
l=word.split('')
console.log(l);
//returns an array of words
w=word.split(' ')
console.log(w);
e=word.split('e')
console.log(e); */

//w.a.p to print all vowels in the given string


str='Good Evening All'
vowel = ['a','e','i','o','u','A','E','I','O','U']
p=[]
char=str.split('')
for(let c of char){
    if(vowel.includes(c) && !p.includes(c.toUpperCase())){
        p.push(c.toUpperCase())
    }
}
console.log(p);

//a=Array.from(str).filter(item=>vowel.includes(item));
q=[]
a=Array.from(str.toLowerCase()).filter(x=>(vowel.includes(x)&& !q.includes) && q.push(x))
console.log(a);