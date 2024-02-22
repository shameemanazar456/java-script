
//w.a.p to find the gcd/hcf of given number
//12-1,2,3 4 6 12
//28 - 1 2 4 7 14 28
//cf 124
//hcf 4

num1=24
num2=29
gcd=0
for(i=2; i<=num1 && i<=num2; i++)
{
    if(num1%i==0 && num2%i==0)
    {
        gcd=i
    }
}
console.log(gcd);