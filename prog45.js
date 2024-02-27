let fruits=['Apple','Orange','Kiwi','Pineapple']
console.log(fruits);
for(index=0;index<=fruits.length-1;index++)
{
    console.log(fruits[index]);
}
console.log('-------------------');

let stud=['Rima','Kiran',"Mariya",'Tina']
console.log(stud);
for(i=0;i<=stud.length-1;i++)
{
    console.log(stud[i]);
}

console.log('-------------------');

for(let y in fruits)
{
    console.log(fruits[y]);
}
console.log('------------------');
for(let z of fruits){
    console.log(z);
}