const subjectmainlist = document.getElementById("subjectlist");
const gpabtn = document.getElementById("gpa");

let i=1;
let totalcredit=0;
let wgpa;

    
function addsubject(){
    //creation of subject
    let li= document.createElement("li");
    li.classList.add("subject");
    subjectmainlist.appendChild(li);

    //delete btn
    let deletesub=document.createElement("span");
    deletesub.innerHTML="x";
    li.appendChild(deletesub);

    deletesub.addEventListener('click',()=>{
        deletesub.parentElement.remove(); 
    });


    //subject name
    let subname=document.createElement("p");
    subname.classList.add("subjectname");
    i+=1;
    subname.innerHTML=`subject${i}`;
    li.appendChild(subname);

    //credit 
    let creditbox = document.createElement("input");
    creditbox.setAttribute("type","number");
    creditbox.classList.add("credit");
    li.appendChild(creditbox);

    //score
    let scorebox = document.createElement("input");
    scorebox.setAttribute("type","number");
    scorebox.classList.add("score");
    li.appendChild(scorebox);

    //add btn
    let addsub=document.createElement("span");
    addsub.innerHTML="+";
    li.appendChild(addsub);

    addsub.addEventListener('click',addsubject);
    
}


function updatetotal(){
    totalcredit=0;
    wgpa=0;

    const listitems = document.querySelectorAll(".subject");
    listitems.forEach((item,index)=>{
    const creditboxnew=item.querySelector('.credit');
    const scoreboxnew=item.querySelector('.score');

    if(creditboxnew && scoreboxnew){
    const creditvalue = parseFloat(creditboxnew.value) || 0;
    const scorevalue = parseFloat(scoreboxnew.value) || 0;
    

    totalcredit+=creditvalue;
    wgpa+=creditvalue*scorevalue;
    }
});
const gpa= totalcredit===0 ? 0 : wgpa/totalcredit;
alert(gpa.toFixed(2));
}


gpabtn.addEventListener('click',updatetotal);




   



        



