p=[10,11,12,20,30]
q=[11,20,25,30,33]
//w.a.p to find the common numbers between the given two array

ispresent=false
for(i of p){
    for(j of q){
        if(i==j)
        {
            console.log(j);
            ispresent=true;
        }
    }
}
!ispresent && console.log('no common elements');