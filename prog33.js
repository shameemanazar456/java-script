//w-a-p to print amstrong number btw 8-500
for(i=8; i<=500;i++)
{
    s=0
    for(j=i; j>0;)
    {
        rem=j%10
        s=s+(rem**3)
        j=parseInt(j/10)
    }
if(s==i)
{
    console.log(i);
}
}