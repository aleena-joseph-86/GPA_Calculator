const subjectlist = document.getElementById("subjectlist");

let i=1;
function addsubject(){
    
    let li= document.createElement("li");
    li.classList.add("subject");
    subjectlist.appendChild(li);

    let deletesub=document.createElement("span");
    deletesub.innerHTML="x";
    li.appendChild(deletesub);

    deletesub.addEventListener('click',()=>{
        deletesub.parentElement.remove(); 
    });



    let subname=document.createElement("p");
    subname.classList.add("subjectname");
    i+=1;
    subname.innerHTML=`subject${i}`;
    li.appendChild(subname);

    let creditbox = document.createElement("input");
    creditbox.setAttribute("type","text");
    creditbox.classList.add("inputbox");
    li.appendChild(creditbox);

    let scorebox = document.createElement("input");
    scorebox.setAttribute("type","text");
    scorebox.classList.add("inputbox");
    li.appendChild(scorebox);

    let addsub=document.createElement("span");
    addsub.innerHTML="+";
    li.appendChild(addsub);

    addsub.addEventListener('click',addsubject);
}

function calculateGPA(){
    
}

