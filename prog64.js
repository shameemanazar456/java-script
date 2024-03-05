//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(element => {
    console.log(element[1]);
});
//2. display product whose price < Rs.50
console.log('--------------------------------------');
products.filter(item=>item[2]<50).forEach(x=>console.log(x[1]))
//3. print price of oreo

console.log('------------------------');
oreo=products.find(x=>x[1]=='oreo')
console.log(oreo[2]);
//4. print costly product name

console.log('------------------------');
costly=products.reduce((x,y)=>x[2]>y[2]?x:y)
console.log(costly[1]);
//5. display out of stock product
console.log('------------------------');
products.filter(x=>x[3]==0).forEach(x=>console.log(x[1]))


//6. sort products based on stock in decsending order
console.log('------------------------');
products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))

//7. print product having maximum available stock

console.log('------------------------');
maxstock=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
console.log(maxstock[1]);

//8. is there any product can be purchased by Rs. 10

console.log('------------------------');
ans=products.some(pro=>pro[2]<=10)
console.log(ans?'yes':'no');

//9. Is there any product in the range of 10 to 30
console.log('------------------------');
ans=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(ans?'yes':'no');

//10. print all products in the range of 10 to 30

console.log('------------------------');
products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>console.log(item[1]))