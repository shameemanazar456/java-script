//      
//      *
//    *    *
//   *       *
// * * * * * * * 


for(i=1;i<=4;i++){
    str=''
    for(j=1;j<=7;j++)
    {
        if(i+j==5 || j-i==3 || i==4)
        {
            str=str+' *'
        }
        
        else{
            str=str+'  '
        }
    }
    console.log(str );
}


// * * * * * 
// *       * 
// *       * 
// *       * 
// *       * 
// * * * * * 
console.log('------------------');

for(i=1; i<=8;i++)
{
    str=""
    for(j=1;j<=5;j++)
    {
        if(j==1 || i== 1 || j==5 || i==8)
        {
            str=str+' *'
        }
        else{
            str=str+'  '
        }

    }
    console.log(str);
}



//1
//0 1
//1 0 1
//0 1 0 1


for(i=1;i<=4;i++)
{
    str=''
    for(j=1; j<=i; j++)
    {
        if( (i+j)%2==0 )
        {
            str=str+' 1'
        }
        else
        {
            str=str+' 0'
        }
    }
    console.log(str);
}