const text = "Data-Driven Financial Analyst";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,60);
  }
}
typing();
