//w.a.p to find the square of each items in the qiven array
a=[10,11,12,13,14,15]
for(n of a){
    console.log(n**2);
}
console.log('-------------------');

a.forEach(item => {
    console.log(item**2);
});
console.log('-------------------');
sq=a.map((item1)=>item1**2)
console.log(sq);

//w.a.p to find the cube of each items in the given array
console.log('----------------');
cu=a.map((item)=>item**3)
console.log(cu);

//w.a.p to create a new array with numbers <=13 then incriment the number or number > 13 decrement gthe value
//op=[11,12,13,14,13,14]

console.log('----------------');
n=a.map((item)=>item<=13?++item:--item)
console.log(n);

/* n=a.map((item)=>if(item<=13){++item}else{--item})
console.log(n); */
