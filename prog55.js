p=[10,11,12,20,30]
q=[11,20,25,30,33]
i1=0
i2=0
isPresent=false
while(i1<p.length && i2<q.length){
    if(p[i1]==q[i2]){
        isPresent=true
        console.log(p[i1]);
        i1++
        i2++
    }
    else if(p[i1]<q[i2]){
        i1++
    }
    else{
        i2++
    }
}

!isPresent && console.log('no common numbers');