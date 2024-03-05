student={
    "id":1,
    "name":'sneha',
    "cource":'cs',
    "grade":'a',
}

//to add new key year 2020

student["year"]=2020
Object.assign(student,{"mark":95})
console.log(student);

//display student name
console.log(student["name"]);

//display student mark

console.log(student.mark);

//check whether grade is pesent if no add garde

('grade' in student)?console.log('present'):student['grade']=a;

//to delete key mark

delete student.mark
student["mark"]=[34, 44, 45]
console.log(student);
student.mark.push(49)
console.log(student);