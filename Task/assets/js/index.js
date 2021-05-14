import { toWords} from "../../../node_modules/@asimrza/pyp-numbertoword-asimrza/app.js";
let numberInput=document.querySelector("#word");
let word=document.querySelector("#outputWord");
let trbtn=document.querySelector("#btnTr");


trbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let number=numberInput.value;
    let result=toWords(number)
    word.innerHTML=result;
    
})

