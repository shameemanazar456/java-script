//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name

console.log('Employee Name');
employee.forEach(emp => {
    console.log(emp[1]);
});
//print total numbers of employee
console.log('--------------------');
console.log(`Number of employees = ${employee.length}`);


console.log('---------------------');

//print developer employee details

console.log('details of Developer Employee');
m=employee.filter(x=>x[2]=='developer')
console.log(m);

console.log('---------------------------------');

//print employee whose salary > 30000
console.log('Employee whose salary greter than 30000' );
m=employee.filter(emp=>emp[4]>30000)
console.log(m);

// print details of employee Laisha
console.log('------------------------------------');
console.log('details of employee Laisha');
m=employee.find(x=>x[1]=='Laisha')
console.log(m);
console.log('----------------------------------------------');
//sort employee based on their salary in descending order
//sort((a,b)=>b-a)

console.log('--------------------------------------------------------------------------------------');
console.log(employee.sort((emp1,emp2)=>emp2[4]-emp1[4]))




//sort employee based on their experience in ascending order
console.log('-----------------------------------------------------------------------------------');
console.log('sort employee based on their experience in ascending order');
console.log(employee.sort((emp1,emp2)=>emp1[5]-emp2[5]))


//print the employ name whose have the higest salary

console.log('-----------------------------------------------');
console.log('employ name whose have the higest salary');
hig=employee.reduce((x,y)=>x[4]>y[4]?x:y)
console.log(hig[1]);




