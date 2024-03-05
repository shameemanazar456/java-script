
employee = {
    Id:1000,
    Name:'Neel',
    Desig:'Developer',
    Location:'Kochi'
}
/* console.log(employee);
console.log(employee["Name"]);
console.log(employee.Name);
employee["salary"]=25000
console.log(employee);
Object.assign(employee,{'experience':3})
console.log(employee);
Object.assign(employee,{'isVaccinated':true})
console.log(employee);
delete employee.isVaccinated
console.log(employee);

employee["Name"]="Neel Jhon"
console.log(employee);

employee["experience"]+=2
console.log(employee);

for(let x in employee)
{
    console.log(x);
}
 */

//w.a.p to check whether location key is present or not

/* if('Location' in employee){
   console.log('present');
}
else{
    console.log('Not present');
} */


//console.log('Location' in employee?'present': 'not present');

//w.a.p to check whether gender is presnt in the object employee if present print prese else add new key as gender with value as male


'Gender' in employee? console.log('present'):(employee["Gender"]='Male',console.log(employee));

'Gender' in employee? console.log('present'):employee["Gender"]='Male';

