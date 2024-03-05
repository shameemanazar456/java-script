//w.a.p to find the number count from an array
arr=[10,20, 50,20,30,80,10,20,70,50,20,10] //{10:3,20:4,50:2,30:1,80:1,70:1}
numcou={}
arr.map(e => e in numcou?numcou[e]+=1:numcou[e]=1)
console.log(numcou);




