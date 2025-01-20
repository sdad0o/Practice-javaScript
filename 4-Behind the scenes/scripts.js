'use strict'; 
function calcAge (birthYear)
{
    // Function scope
    const age = 2025 -birthYear;
    function printAge()
    {
        let output = `you are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996)
        {
            // Block scope 

            const firstName ='jhonas';
            output ='New output';
            // the first name will get the first pearnt
            const str =`Oh , and you're a millenial, ${firstName}`;
            var millenial =true; // this VAR can be accesed every where !  -- var  haven't any scope --
            
            function add (a,b)
            {
                return a+b;
            }
            
        }
    }
    printAge();
    return age;
}
// Global scope
const firstName ='sdad';
calcAge(2001);

// ------------- Hoisting and TDZ -----------------------
// console.log(me);
// console.log(job);
// console.log(year);

var me ='sdad';
let job ='developer';
const year =2001;

// Functions

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b)
{
    return a+b;
}
var addExpr=function(a,b)
{
    return a+b;
}
var addArrow =(a,b)=>a+b;

// +++++++++++ this Keyword ++++++++++
console.log(this);
const calcAge = function (birthYear){
    console.log(2025 - birthYear)
    // console.log(this);
}
calcAge(2001);
const calcAgeArrow = birthYear=>{
    console.log(2025 - birthYear)
    console.log(this);
}
calcAgeArrow(2001);
