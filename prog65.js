//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highestpos=covid_data.reduce((x,y)=>x[2]>y[2]?x:y)
console.log(highestpos[1]);
console.log('----------------------------');
//2. district having Highest 1st dose vaccine
highestfirstdose=covid_data.reduce((x,y)=>x[5]>y[5]?x:y)
console.log(highestfirstdose[1]);
console.log('-----------------------');
//3. district having lowest death rate
console.log('district having lowest death rate :');
lowestdeathrate=covid_data.reduce((x,y)=>x[3]<y[3]?x:y)
console.log(lowestdeathrate[1]);
console.log('------------------------------------------');
//4. sort data with +ve case in descending order
//console.log(covid_data.sort((x,y)=>y[2]-x[2]));
console.log('+ve case in descending order');
sortarr=covid_data.sort((x,y)=>y[2]-x[2])
sortarr.forEach(x=>console.log(x[1]));
console.log('----------------------------------------');
//5. is district with +ve cases > 15000
positive=covid_data.some(x=>x[2]>15000)
console.log(positive?'yes':'no');
console.log('---------------------------------------');
//6. sort data with 1st dose vaccine ascending order
sortarr=covid_data.sort((x,y)=>x[5]-y[5])
sortarr.forEach(x=>console.log(x[1]))
console.log('---------------------------------------');

//7. Print Thrissur details
thrissure=covid_data.find(x=>x[1]=='Thrissur')
thrissure.forEach(x=>console.log(x))

console.log('---------------------------------------');

//8. Print total number of positive cases
positivecase=covid_data.map((x)=>x[2])
totalpositive=positivecase.reduce((x,y)=>x+y)
console.log(totalpositive);
console.log('---------------------------------------');

//9. Print total number of curred cases

curredcases=covid_data.map((x)=>x[4])
totalcured=curredcases.reduce((x,y)=>x+y)
console.log(totalcured);
console.log('---------------------------------------');


//10. Print curred cases in Idukki

idukki=covid_data.find(x=>x[1]=='Idukki')
console.log(idukki[4]);