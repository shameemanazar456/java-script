//check whether a given no is palindrome or not

num=125
rev=''
test=num
while(num>0)
{
    rem=num%10
    rev=rev + rem
    num=Math.floor(num/10)
}
console.log(test==rev?'palindrome':'not palindrome');