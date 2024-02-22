//w.a.p to check whether a given no is prime or not

num=25
isPrime=true
for(i=2; i<= (num/2); i++)
{
    if(num%i==0)
    {
       isPrime=false
        break;
    }
}
console.log(isPrime==true?'prime number':'not prime number');