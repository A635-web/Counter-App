// const countvalue=document.querySelector('#counter');


// const increment=()=>{
//     //get value from ui
//     let value=parseInt(countvalue.innerText);
//     value=value+1;
//     countvalue.innerText=value;
// };



// const decrement=()=>{
// let value=parseInt(countvalue.innerText);
// value=value-1;
// countvalue.innerText=value;

// }



const countvalue=document.getElementById('counter');


function increment(){
    //get value from ui
    let value=parseInt(countvalue.innerText);
    value=value+1;
    countvalue.innerText=value;
};



function decrement(){
let value=parseInt(countvalue.innerText);
value=value-1;
countvalue.innerText=value;

}



