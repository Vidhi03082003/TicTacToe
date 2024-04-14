let audio=new Audio("sounds/s8.mp3")


let turn="X";

let iswin=false;


const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//checking if win
const checkwin=()=>{
    let wins=[
        [0,1,2,0,0,50],
        [3,4,5,0,0,190],
        [6,7,8,0,0,350],
        [0,4,8,45, 150 ,150],   
        [2,4,6,135,170,-140],
        [0,3,6,90,180,170],  
        [1,4,7,90,180,0],
        [2,5,8,90,180,-170]

    ]
    let box=document.querySelectorAll(".box");
    wins.forEach((element)=>{
        if((box[element[0]].innerHTML==box[element[1]].innerHTML)&&(box[element[1]].innerHTML==box[element[2]].innerHTML)&&(box[element[0]].innerHTML!=="")){
            iswin=true;
            turn=changeTurn()
            document.getElementsByTagName("h2")[0].innerHTML=turn+" wins";
            
            winaudio=new Audio("sounds/s1.mp3");
            winaudio.play();[0]
            document.querySelector(".image").style.width="300px";
            document.querySelector(".line").style.width="40%"
            document.querySelector(".line").style.transform=`rotate(${element[3]}deg) translate(${element[4]}px,${element[5]}px)`;

            

        }
    })
}


//eventListener for click
let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach((element)=>{
    element.addEventListener("click",()=>{
        audio.play()
        if(element.innerHTML==""){
        element.innerHTML=turn;
        turn=changeTurn();
        checkwin()
        }
       
        if(!iswin){
        
        document.getElementsByTagName("h2")[0].innerHTML="Turn for "+turn;
        }
        
    })
})



//reset event listener
document.querySelector(".reset").addEventListener("click",()=>{
    let boxes=document.querySelectorAll(".box");
    Array.from(boxes).forEach((element)=>{
        element.innerHTML=""
        turn="X"
        document.getElementsByTagName("h2")[0].innerHTML="Turn for X";
        document.querySelector(".image").style.width="0px";
        document.querySelector(".line").style.width="0px";

    })
    
    
})