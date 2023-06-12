/*
Classical JavaScript function defition uses 
the keyword function
*/
/*
var logger = function(output){
    console.log(output);
}*/
//Arrow functions
//Lets rewrite our logger function in a way that is moe ES6 compliant, using arrow
//function
const logger = output => {
    console.log(output);
}

export const appName = "ES6 Review";

/*
export var dummyFunction = function(){
    return "I am a dummy function";
    }*/
//Lets rewrite our dummy function in arrow 

export const dummyFunction = () => {
    let feedback = "I am a dummy function"; //mutable variable
    feedback =  "I am still a dummy function";//value changed
    return feedback;
}
    
export const genericFunction3 = () => {
    const languages = ['Python', 'Javascript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLangs] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLangs}`
}

//es6 allows us to export declarations
export default logger;

/*logger("Print me to the console");
logger("print me again")
*/

export const genericFunction4 = () => {  //declare an object literal 
    const personalInformation = { 
    firstName : 'Pius', 
    lastName : 'Onobhayedo', 
    gender : 'Male', 
    religion : 'Christianity (Catholic)', fathersName : 'John', mothersName : 'Patricia'
    } 
    //deconstruct into new variables firstName, last name and otherPersonalInfo 
    const {firstName, lastName, ...otherPersonalInfo} = personalInformation; 
    return `The first name is ${firstName} and the lastName is ${lastName}. 
    Others are: gender = ${otherPersonalInfo.gender}; 
    religion = ${otherPersonalInfo.religion}; etc.`; 
   }

   export const genericFunction5 = (a, b=1) => { 
    //This function multiplies any two numbers 
    //if only one argument is sent as argument when function is called, b will default to 1. 
    return (a * b); 
   }

   export const multiplier = (...numbers)=> {
        
        if (numbers.length < 2)
            throw new Error("number of arguments must be greater than 1") 
            
        let product = 1;
        /*for (let i=0; i<numbers.length; i++){
            product*=numbers[i]
        }*/
        for (let number of numbers){
            product *= number;
        }
        return product;
   }

   export const genericFunction6 = (m, c, ...x) => { 
    //This function returns an array of {x,y} objects for all the x arguments passed. 
    //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
        let coordinates = x.map((x) => { 
            return {'x': x, 'y': (m*x) + c};
        })
        return coordinates;
     //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below 
        let output = 'The (x,y) values are as follows: ' 
        for (let coordinate of coordinates){ 
        let xy = `(${coordinate.x},${coordinate.y})` 
        output+=xy; 
    }
       return output; 
    }

    //Class declarations
    const toTitleCase = (str) => {
        str.toLowerCase();//first set the whole string to lowercase in case
        return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
       } 

   export const Person = class {
        constructor(firstName, lastName, gender, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        }
       

       getFirstName(){
        return toTitleCase(this.firstName)
       }
   };


   export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a, b){
        return Math.pow(a, b);
    }
   }


   //inheritance
   export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height);
    this.username = username;
    this.password = password;
    }
   } 

   //promise 
  export const promiseAwareTimeout = (milliseconds) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
              resolve("Timeout is over. Promise, do something!")
            //reject ("False alarm!") 
         }, milliseconds)
        })
}