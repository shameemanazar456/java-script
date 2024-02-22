// *
// * *
// * * * 
// * * * * 

for(row=1;row<=4;row++)
{
    str=''
    for(col=1;col<=row;col++)
    {
        str=str+' *'
    }
    console.log(str);
}

console.log('---------------------');

// 1
// 1 2 
// 1 2 3
// 1 2 3 4

for(row=1;row<=5;row++)
{
    str=''
    for(col=1;col<=row;col++)
    {
        str=str+col+' '
    }
    console.log(str);
}
console.log('------------');

// 1
// 2 2 
// 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++)
{
    str=''
    for(j=1;j<=row;j++)
    {
        str= str+row+' '
    }
    console.log(str);
}

console.log('---------------');

// * * * * 
// * * * 
// * *
// *

for(row=4;row>=1;row--)
{
    str=''
    for(col=1;col<=row;col++)
    {
        str=str+' *'
    }
    console.log(str);
}


// *
// * *
// * * * 
// * * * *
// * * * * *
// * * * *
// * * * 
// * *
// *
console.log('--------------');
for(i=1;i<=5;i++)
{
    str=""
    
    for(j=1; j<=i; j++)
    {
        str=str+' *'

    }
    console.log(str);
}
for(i=4;i>=1;i--)
{
    str=""
    
    for(j=1; j<=i; j++)
    {
        str=str+' *'
    }
    console.log(str);
}

//    *
//   * *
//  * * *
// * * * * 
console.log('-----------');

for(i=1,sp=3;i<=4;i++,sp--)
{
    str=''
    for(j=sp; j>=1;j--)
    {
        str=str+' '
    }
    for(s=1; s<=i;s++)
    {
        str=str+' *'
    }
    console.log(str);
}

console.log('-----------');

for(i=1;i<=4;i++)
{
    str=''
    for(j=4; j>=i;j--)
    {
        str=str+' '
    }
    for(s=1; s<=i;s++)
    {
        str=str+' *'
    }
    console.log(str);
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * * 
//   * * * 
//    * *
//     * 



console.log('-----------');

for(i=1;i<=4;i++)
{
    str=''
    for(j=4; j>=i;j--)
    {
        str=str+' '
    }
    for(s=1; s<=i;s++)
    {
        str=str+' *'
    }
    console.log(str);
}


for(i=4;i>=1;i--)
{
    str=''
    for(j=4; j>=i;j--)
    {
        str=str+' '
    }
    for(s=1; s<=i;s++)
    {
        str=str+' *'
    }
    console.log(str);
}