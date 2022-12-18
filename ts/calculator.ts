

let currentVal:string = '';
let binoperator:string = '';
let cantype:boolean = true;
let scientificModeFlag:boolean = false;
let operatorcount:number = 0;

const digits = document.querySelectorAll('.digits');
function addToCurrentVal(value){
    currentVal = currentVal + (String(value.id));
    // alert(state.currentVal);
    console.log(currentVal);
    printing(currentVal)
}

digits.forEach(digit => {
    digit.addEventListener('click', function handleClick(event) {
        console.log(currentVal, event);
        
        
        if (scientificModeFlag ===true){
                //digit input in scientific mode
        
        if (currentVal === '' && cantype===true){
            addToCurrentVal(digit);
                cantype = true;
                printing(currentVal)
            }       
            else {
                if (binoperator != '') {
                    currentVal = currentVal+binoperator;
                    operatorcount +=1

                    addToCurrentVal(digit)
                    printing(currentVal)
                    binoperator = '';
                    cantype = true;

                   
            
                } else{
                    if (cantype===true){
                        addToCurrentVal(digit);
                    printing(currentVal)
                    cantype = true;

                    }
                    
            }       
            }
        }

        //digit inpus in simple mode 
        else{
            if (currentVal === '' && cantype===true){
                addToCurrentVal(digit);
                    cantype = true;
                    printing(currentVal)
                }       
                else {
                    if (binoperator != '') {
                        currentVal = currentVal+binoperator;
                        operatorcount +=1
                        addToCurrentVal(digit)
                        printing(currentVal)
                        binoperator = '';
                        cantype = true;
    
                                      
                    } else{
                        
                        if (cantype===true){
                            addToCurrentVal(digit);
                        printing(currentVal)
                        cantype = true;
    
                        }
                        
                }       
                }

        }
        })
        

  },);


function updateFirstOperator(value){
    binoperator = value.id;
        console.log(value.id);
        
}

const boperators = document.querySelectorAll('.boperator');
boperators.forEach(boperator => {
    boperator.addEventListener('click', function handleClick(event) {
        console.log(binoperator, event);
        //oparators simple mode
        if (scientificModeFlag===false){
        
            if ((operatorcount == 1) && (cantype===true )){
                updateFirstOperator(boperator);
                evalClicked();
                binoperator = '';
                addToCurrentVal(boperator)
                printing(currentVal);
                cantype=true;
                }
            else {
       
                    updateFirstOperator(boperator); 
                    printing(boperator.id)
                    }
                }
        
            //oparators scientific mode
            if ((operatorcount ==2) && (cantype==true)){
                    updateFirstOperator(boperator);
                    evalClicked();
                    binoperator = '';
                    addToCurrentVal(boperator);
                    printing(currentVal);
                    cantype=true;

            }
            if (scientificModeFlag ===true){
                    if (operatorcount == 1){
                        updateFirstOperator(boperator); 
                        printing(boperator.id);
                    }
                    else {
                        updateFirstOperator(boperator); 
                        printing(boperator.id);
                    }
                    
                }
            
                
  });

});

const decpoint = document.getElementById('.');
decpoint.addEventListener('click', function decpointpressed(event) {
    if (currentVal.length === 0 ){
        currentVal = '0.'
        printing(currentVal)
    }
    else{
        if (currentVal.includes('.')) {
                alert('invalid')
            }
            else {
                currentVal = currentVal + '.'
                printing(currentVal)
            }
    }
    
});
const evalBtn = document.getElementById('=');


function evalClicked (){
    currentVal = eval(currentVal);
    console.log(currentVal);
    printing(currentVal);
    binoperator = '';
    cantype = false
    operatorcount =0;

}

evalBtn.addEventListener('click', evalClicked);

let thescreen = document.getElementById("thescreen");

function printing(text:string){
    thescreen.innerHTML = text;
}

function Cclicked(){
    currentVal = '';
    printing(currentVal);
    binoperator = ''
    cantype=true;
    operatorcount = 0;

}
const cbtn = document.querySelector('#c');
cbtn.addEventListener('click', Cclicked);

function backfunc(val){
    currentVal = currentVal.slice(0,-1);
    printing(currentVal)

};
let back = document.getElementById('back');

back.addEventListener('click', backfunc)
