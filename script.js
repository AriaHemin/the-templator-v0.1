let templateInput = document.getElementById("templateInput");
let templateNameInput = document.getElementById("templateNameInput");
let createButton = document.getElementById("createButton");
let outputArea = document.getElementById("templateOutPut");
let templateSafe = document.getElementById("templateSafe");
let templatorWorkshop = document.getElementById("templatorWorkshop");
let template;
let templateWords = [];
let inputFeildsArray = [];
createButton.addEventListener("click", () => {
  let outputAreaBoxArea = document.createElement("div");
  let userInput = templateInput.value;
  template = userInput.split(" ");
  let templatorBox = document.createElement("div");
  let templatorName = document.createElement("div");
  templatorBox.className = "templatorBox"
  templatorName.className = "templatorName"
  templatorName.innerText = templateNameInput.value ;
  outputAreaBoxArea.id = "outputAreaBoxArea";
  templatorBox.appendChild(outputAreaBoxArea);
  templatorBox.appendChild(templatorName);
  for(let word of template){
    if(templateWords.includes(word)){
      continue
    }
    wordArray = word.split("");
    if ( wordArray[0] == "t" && wordArray[1] == "-"){
      let nameOfInputFeild = word.replace("t-", "");
      let inputFeild = document.createElement("input");
      let inputFeildName = document.createElement("div");
      inputFeild.id = `${word}`
      inputFeildName.textContent = nameOfInputFeild + " ::";
      inputFeildName.className = "inputName";
      templatorBox.appendChild(inputFeildName);
      templatorBox.appendChild(inputFeild);
      templateWords.push(word)
    }
  }
  templateNameInput.remove()
  templateInput.remove()
  createButton.remove()
  let makeTemplateButton = document.createElement("button");
  makeTemplateButton.textContent = "make";
  makeTemplateButton.addEventListener("click", () => {
    let output = template;
    output = output.join(" ");
    let name;
    for (let word of template){
      name = document.getElementById(`${word}`);
      console.log(name);
      if(name === null){
        continue
      }else{
        console.log("name: ", name.id)
        if(word == name.id){
          output = output.replace(`${word}`, `${name.value}`);
        }else(
          console.log(word)
        )
      }
    }
    let outputAreaBox = document.createElement("textarea");
    outputAreaBox.setAttribute("readonly", "");
    outputAreaBox.value = output;
    outputAreaBoxArea.appendChild(outputAreaBox);
  })  
  templatorBox.appendChild(makeTemplateButton);
  templatorWorkshop.appendChild(templatorBox);
});