//w.a.p to print prime numbers between 2-50

for(i=2; i<=50;i++)
{
    isPrime=true
    for(j=2; j<= (i/2); j++)
    {
        if(i%j==0)
        {
             isPrime=false
             break;
        }
    }
    if(isPrime==true)
    {
        console.log(i);
    }
}