//w.a.p to print ythe following output for the given input
//input 2 ->24
//3->369
//4 ->4936
//pattern 1
num=5
i=1
p=0
while(i<=num)
{
    p=p*10+(num*i)
    i++
}
console.log(p);

//pattern2
num=5
i=1
str=''
while(i<=num)
{
    str=str+i
    i++
}
console.log(num*str);

//patter3
num=5
i=1
str=''
sum=0
while(i<=num)
{
    str=str+num
    i++
    sum=sum+Number(str)
}
console.log(sum);