//w.a.p to display FIZZ when the no is divisible by 3 BUZZ if the number is divisible by 5 and fizzbuzz when number is divisible by 15

num=27

if(num%15 == 0)
{
    console.log('FIZZ BUZZ');
}
else if(num%5 == 0)
{
    console.log('BUZZ');
}
else if(num%3 == 0)
{
    console.log('FIZZ');
}
else{
    console.log('Not divisible by 3, 5 and 15');
}
