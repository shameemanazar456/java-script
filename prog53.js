const arr=[11,10,2,4,3,12]


//algorithm
//1)sort the given array
//2)find the mid = low+up/2
//3)mid == serchitem = found
//4) mid>serachitem
        //up=mid-1
//5)mid<searchitem
        //low = mid+1
//6) repeat still low=up

arr.sort((a,b)=>a-b);
low=0;
item=3
up=arr.length-1
isPresent=false
while(low<=up)
{
    mid=parseInt((up+low)/2)
    if(arr[mid]==item)
    {
        isPresent=true
        console.log(`${item} found at location: ${mid} `);
        break;
    }
    else if(arr[mid]>item)
    {
        up=mid-1
    }
    else{
        low=mid+1
    }

}
!isPresent && console.log('Item not found');