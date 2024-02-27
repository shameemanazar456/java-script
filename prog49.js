//w.a.p to print dupilcate element from the given array
//a=[10,20,30,20,30,40,50,60,10]
//10 20 30

a=[10,20,30,200,300,40,50,60,100]
dup=false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            console.log(a[j]);
            dup=true
            break;
        }
    }
}

!dup && console.log('No duplicate');

//truthy operator - if only no else part

