//w.a.p to display a number in reverse order

num=567
rev=''
while(num>0)
{
    rem=num%10
    rev=rev + rem
    num=Math.floor(num/10)
}
console.log(rev);