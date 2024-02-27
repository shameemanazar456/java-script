//w.a.p to find the pair whose sum is 6 with binary search

const arr=[2,3,4,5]
searchsum=7
low=0
up=arr.length-1
isPresent=false
while(low<up){
    if(arr[low]+arr[up]==searchsum)
    {
        isPresent=true
        console.log(`(${arr[low]},${arr[up]})`);
        up--
        low++
    }
    else if(arr[up]+arr[low]>searchsum){
        up--
    }
    else{
        low++
    }
}

!isPresent && console.log('no such pair');