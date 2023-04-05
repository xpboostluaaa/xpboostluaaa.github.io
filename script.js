let rawlink = document.querySelector("#rawlink");
let parsedlink = document.querySelector("#parsedlink");

let button = document.querySelector("#mainbutton");

function clickHandler() {

  let skinInspect = rawlink.value.split("%20")[1];

  if (skinInspect){
  parsedlink.value =
    "csgo_econ_action_preview " + skinInspect;
  }
  else{
    parsedlink.value = " ";
  }
}

button.onclick = clickHandler;
