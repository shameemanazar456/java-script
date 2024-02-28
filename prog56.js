const arr=[[2,49],[34,24],[3,5],[67,15]]

//w.a.p to find numbers greater than 25

/* for(i of arr)
{
    for(j of i){
        if(j>25){
            console.log(j);
        }
    }
} */

console.log(arr);
a=arr.flat()
console.log(a);
for(n of a){
    if(n>25){
        console.log(n);
    }
}

