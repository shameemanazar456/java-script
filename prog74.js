//w.a.p to find first recursive letter
pattern = "ABCBACCBAAD"
obj = {}
chara = Array.from(pattern);
rec={}
for(let c of chara){
    if(c in obj){
    
        obj[c]==1&&console.log(c)
        obj[c]+=1
       
    }
    else{
        obj[c]=1
    }
}