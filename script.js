let btn=document.querySelector(".searchBtn");
let searchWord=document.querySelector("h4");
let searchMeaning=document.querySelector("p");
let syn1=document.querySelector(".one");
let syn2=document.querySelector(".two");


btn.addEventListener("click",async()=>{
    let word=document.querySelector(".searchSpace").value;
    searchWord.innerText=word;
    let data= await getMeaning(word);
    searchMeaning.innerText=data[0].meanings[0].definitions[0].definition;
    syn1.innerText=data[0].meanings[0].synonyms[1];
    syn2.innerText=data[0].meanings[0].synonyms[2];
    
})

let url="https://api.dictionaryapi.dev/api/v2/entries/en/"
async function getMeaning(word){
    try{
        let res=await fetch(url+word);
        let res1=await res.json();
        console.log(res1);
        return res1;
    }catch{
      console.log("Error occured");
    }
 }

 