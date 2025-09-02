const select = document.getElementById("colorSelect");
const result = document.getElementById("result");
const boxColor = document.getElementById("boxColor");

boxColor.style.width = "100px";
boxColor.style.height = "100px";
boxColor.style.display = "inline-block";
boxColor.style.border = "1px solid #000";
boxColor.style.marginLeft = "10px";

function showColorCode(color) {
  let code = "";
  switch(color){
    case "black":
      code = "#000000";
      break;
    case "white":
      code = "#ffffff";
      break;
    case "red":
      code = "#ff0000";
      break;
    case "green":
      code = "#00ff00";
      break;
    case "blue":
      code = "#0000ff";
      break;
    default:
      code = "#000000";
    
  }

  result.textContent = `کد رنگ ${color}: ${code}`;
  boxColor.style.backgroundColor = code;
}

select.addEventListener("change", () => {
  const selectedColor = select.value;
  showColorCode(selectedColor);
});

showColorCode(select.value);