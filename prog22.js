//w.a.p to check whether the given no is amstrong or not
//153=1**3+5**3+3*3= 1+125+27=153

num=155
temp=num
s=0
while(num>0)
{
    rem=num%10
    s=s+(rem**3)
    num=parseInt(num/10)
}
console.log(s==temp?'amstrong':'not amstrong');