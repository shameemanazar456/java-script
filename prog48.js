
//ip=[4,5,6]
//op=[11, 10, 9]
//15-4
//15-5

let arr=[4,5,6]
temp=0
x=[]
for(i of arr)
{
    temp=temp+i
}
for(num of arr)
{
x.push(temp-num)
}

console.log(x);