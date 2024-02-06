var runningNum = null;
var operation = null;

function clear(){
   document.getElementsByClassName('output')[0].innerHTML = '';
   runningNum = null;
   operation = null;
}

function divide(){
   if(runningNum === null) return;
   operation = function(num){
      return num === 0 ? Number.NaN : (runningNum / num).toFixed(4);
   }
}

function multiply(){
   operation = function(num){
      return runningNum * num;
   }
}

function subtract(){
   operation = function(num){
      return runningNum - num;
   }
}

function add(){
   if(runningNum === null) return;
   operation = function(num){
      return runningNum + num;
   }
}

function equals(){

}

function numberSetup(){
   const numDivs = Array.from(document.getElementsByClassName('num-row'));
   const numButtons = numDivs.map( nd =>  Array.from(nd.children)).flat(Infinity);

   numButtons.forEach( (button) => {
      button.addEventListener('click', function() {
         if(operation !== null){
            runningNum = operation(parseInt(button.innerHTML));
            operation = null;
            document.getElementsByClassName('output')[0].innerHTML = runningNum;
         }
         else if(runningNum === null){
            runningNum = parseInt(button.innerHTML);
            document.getElementsByClassName('output')[0].innerHTML = runningNum;
         }
      });
   });
   
}

function operatorSetup(){
   const operators = Array.from(document.getElementsByClassName('operators')[0].children);

   operators.forEach( (button) => {
      let callBackFunc = null;
      switch(button.innerHTML){
         case 'c':
            callBackFunc = clear;
            break;
         case '÷':
            callBackFunc = divide;
            break;
         case '×':
            callBackFunc = multiply;
            break;
         case '-':
            callBackFunc = subtract;
            break;
         case '+':
            callBackFunc = add;
            break;
         case '=':
            callBackFunc = equals;
            break;
         default:
            return;
      }
      button.addEventListener('click', callBackFunc);
   })
   console.log(operators);
}

function initAll(){
   numberSetup();
   operatorSetup();
}

initAll();