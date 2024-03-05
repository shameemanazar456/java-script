//w.a.p to check whether the given number is mobile number or not

str='96452243162'
console.log(str.length==10?'mobile number':'not mobile number')

const validate =(num)=>{
    return num.length==10?'mobile number':'not mobile number'
}
console.log(validate('9645224316'));
//w.a.p  to check ehether an email id is gmail or not

email="abc@gmail.com"
console.log(email.endsWith('@gmail.com')?'Gmail Account':'Not gmail account');
const gamilvalidate = (mail)=>{return mail.endsWith('gmail.com')?"Gmail account":'not gmail'}
console.log(gamilvalidate('abc@gmail.com'));

//w.a.p to check whether a given string starts withletter q or not

str= 'quick'
console.log(str.startsWith('q') || str.startsWith('Q')? 'Starts with q':'not start with q');