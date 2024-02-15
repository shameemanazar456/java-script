//w.a.p to  check a given person is eligible for vote
//age>=18

age=10
if(age>=18)
{
    console.log('person is eligible for vote');
}
else{
    console.log('person is not eligible for vote');
}

//w.a.p to check whether a given ni is positive or negative

num1=0
if(num1>0)
{
    console.log('positive number');
}
else if(num1==0)
{
    console.log('zero niether positive nor negative');
}
else{
    console.log('negative number');
}



//w.a.p to find the largest number amoung given two numbers

num1=102
num2=102
if(num1>num2)
{
    console.log(`${num1} is greater `);
}
else if(num1==num2)
{
    console.log('both are equal');
}
else{
    console.log(`${num2} is the largest number`);
}

//w.a.p to find the second largest number from the given 3 numbers and sort the given 3 numbers in desending order

num1=65
num2=99
num3=105

l=0
sl=0
tl=0

if(num1>num2 && num1>num3)
{
    l=num1
    if(num2<num3)
    {
        sl=num3
        tl=num2
    }
    else{
        sl=num2
        tl=num3
    }
}
else if(num2>num1 && num2>num3)
{
    l=num2
    if(num3<num1)
    {
        sl=num1
        tl=num3
    }
    else{
        sl=num3
        tl=num1
    }
}
else if(num3>num1 && num3>num2)
{
    l=num3;
    if(num1<num2)
    {
        sl=num2
        tl=num1
    }
    else{
        sl=num1
        tl=num2
    }
}
else{
    console.log('All numbers are equal');
}
console.log(`Sorting in decending order ${l}  ${sl} ${tl}`);
console.log(`second largest number is ${sl}`);