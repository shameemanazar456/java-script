a=[10,5,2,13,58,1]
//w.a.p to print even numbers in the given array
even=a.filter(num=>num%2==0)
console.log(even);

//w.a.p to find all numbers greater than 10

op=a.filter(n=>n>10)
console.log(op);

//w.a.p to print is there any no greater than 10
x=a.some(num=>num>10)
console.log(x?'yes':'no');

