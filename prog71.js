var car ={
    name:"boleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and its manufacturer name and price
console.log(`car name is ${car.name}\n car manufacturer is ${car.manufacturer} \n Price${car.price}`);

console.log('--------------------');
//check model key is available in car, if yes then display its value
"model" in car? console.log(`Car model is ${car["model"]}`):console.log('No such key');;
console.log('--------------------');


//add "varient" key to car with value as "manuel"
car["varient"]=["manuel"]
console.log(car);

console.log('--------------------');

//insert another value to "varient" key to car with value as "automatic"
car["varient"].push('automatic')
console.log(car);
//add "colour" key to car with value as "red","white","blue"

car["color"]=["red","white","blue"]
console.log(car);