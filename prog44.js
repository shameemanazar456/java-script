//basic array operations
//push()

const weekdays = ['mon','Tue','Wed']
console.log(weekdays);
weekdays.push('Thur')
console.log(weekdays);

//unshift - add data to the begining
weekdays.unshift('sun')
console.log(weekdays);

//array can hold values of different data type
weekdays.push(3)
console.log(weekdays);

//to remove an item -pop method
weekdays.pop()
console.log(weekdays);

//shift() - to remove an item from front
weekdays.shift()
console.log(weekdays);