//import logger,{appName, dummyFunction} from './tools.js'

//logger("Welcome! We are now having fun with modularity")

//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

//use template literal to rewrite our logger output above 
//logger( `Welcome! The application name is ${appName}.
//There is a function the returns ${dummyFunction()}`);
import logger, {appName, dummyFunction, genericFunction3, genericFunction5, multiplier, genericFunction6, Person, CustomMath, User, promiseAwareTimeout} from './tools.js'
logger(`Welcome! The application name is "${appName}". There is a function
that returns "${dummyFunction()}".` );

logger(`${genericFunction3()}`);

logger(`${genericFunction5(4)}`);

try{
    logger(multiplier(3,3,4,5,10,23,20202,300));
}catch(error){
    logger(error)
}

logger(genericFunction6(5,-1,4,5,6,1,3,8));

//class declarations 
let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);

logger(`Person 1 is ${person1.firstName} whose height is ${person1.height}.
Person 2 is ${person2.firstName} whose height is ${person2.height}`);
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter
logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.

CustomMath.sqrt(10)



//promises
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
        resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second. 
}).then((data) => { 
    logger(`${data}`);//This should output "Timeout is over" 
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    logger(`${error}`); 
}); 

//inheritance
let user1 = new User("stephanieugbe","mypassword","Stephanie","Ugbe","Female",undefined);
logger(`The username of ${user1.firstName} ${user1.lastName} is ${user1.username}`);




setTimeout(() => {
    logger("Timeout is over again")
}, 1000)

new Promise((resolve, reject)=>{
    setTimeout(() => {
//callback
       // resolve ("Timeout is over. Promise do something!")
        reject ("false alarm!")
    }, 3000)
}).then(
    (data) => {
    logger(`The positive feedback from Promise is: ${data}.`);
}).catch(
    (error) => {
    logger(`There was a problem reported to promise: ${error}`);
});

promiseAwareTimeout(3000)
.then(
   (data) => {
    logger(`the positive feedback from promise is: ${data}.`);
   },
   (error) =>{
    logger(`there was a problem reported to promise: ${error}`);
   });

   //using promise aware functions defined by others
   const url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
   fetch(url) 
    .then(response => response.json()) //convert data returned to json 
    .then(data => logger(`Data: Id = ${data.id},
     Name = ${data.name},
      Email = ${data.email},
      Lat = ${data.address.geo.lat},
      lng = ${data.address.geo.lng}`)

      ) 
      //use the json data 
      .catch(error => logger(`Error: ${error}`));

let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()) 
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json()) 
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json()) 
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array. 
.then((data)=>{ 
 logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array 
})