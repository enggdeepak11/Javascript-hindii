const accountId = 144553
let accountEmail = "deepak@gmail.com" 
var accountPassword = "12345"
accountCity = "Jaipur" // sometimes variable define this type

//accountId  = 2 //const not change ,it is not allowed  

accountEmail  = "rajaram@google.com"
accountPassword = "1212345"
accountCity = "indore"
//let values are change, if you can define second time another value
/*
please please don't use var , use let
because of issue in block scope and funcitonal scope
*/

console.log(accountId);

/*console.table is  providing a table type output in many variable 
define in table */ 
console.table([accountEmail, accountId, accountPassword, accountCity])