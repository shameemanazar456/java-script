let expence=[12000, 23000, 40000, 34000, 55000, 22000, 10000]
//find the lowest expence
//find the highest expence
//find the total expence
lowest=expence[0]
highest=expence[0]
total=0
for(let i of expence){
    if(i<=lowest)
    {
        lowest=i
    }
    if(highest<i)
    {
        highest=i
    }
    total=total+i
}

console.log(`lowest expence is: ${lowest}`);
console.log(`highest expence is :${highest}`);
console.log(`total expence is :${total}`);