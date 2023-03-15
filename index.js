let random=Math.trunc(Math.random()*1000+1);
console.log(random);

let input=document.querySelector("#input");
console.log(input.value);



let btn_check=document.getElementById("check");
let again=document.getElementById("again")
console.log(again,btn_check);
let container=document.getElementsByClassName("container");
let score=document.getElementsByClassName("score");
let high=document.getElementsByClassName("high");


let respons=document.querySelector("#response");
console.log(respons);
let h=0;
let s=51;

let use=0;
high[0].innerHTML=`${h}`
score[0].innerHTML=`${0}`

// declaration related overlap

let modal=document.querySelector(".show_model");
console.log(modal);
let overlap=document.querySelector("#overlap");
let close=document.querySelector(".close");
console.log(close);
console.log(overlap);
// 
close.addEventListener("click",function(){
    modal.classList.add('hidden');
    overlap.classList.add("hidden");
})

// function used to run all work
function pravee(){
    console.log(random);
   
    do {
        btn_check.addEventListener('click',()=>{
            s-=1;
            use=input.value;
            if(use==random){
                respons.innerHTML="wow you guessed the number 🥳🥳";
                container[0].innerHTML=random;
               
                document.body.style.backgroundColor="green";
                if(h<s) h=s;
                high[0].innerHTML=`${h}`;
                console.log();
                score[0].innerHTML=`${s}`;
                score[1].innerHTML=`${s}`;
                modal.classList.remove('hidden');
                overlap.classList.remove("hidden");
                s=51;
              
                
            } else if(use<random){
                respons.innerHTML="higer number please";
    
            }else{
                respons.innerHTML="lower number please";
            }
            setTimeout(() => {
                input.value=""; 
                
            }, 400);
           
        })
        
        if(use==random){
       
            break;
        }
       
        
    } while (use==random);
    
}

pravee();
//again button implementation
again.addEventListener('click',function(){
    s=51;
    random=Math.trunc(Math.random()*1000+1);
    high[0].innerHTML=`${h}`
    score[0].innerHTML=`${0}`;
    score[1].innerHTML=`${0}`;
    container[0].innerHTML='?';
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.458)";
    respons.innerHTML="guessing started 🤯🤯";
    pravee();
})



