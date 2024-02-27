let arr=[10,23,11,2,5,3]
//w.a.p to check whether 2 is present in the array
flag=0
for(let num of arr)
{
   if(num==2)
   {
    flag=1
    break;
   }

}
console.log(flag==1?'2 is present':'2 is not present in tha array');
