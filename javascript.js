function orangeChange(e) {

  let name = e.name;

  if(name == "orange"){
    let change = document.getElementById("picChange");
    change.src = "/image/orange.png";
  }

  if (name == "pink"){
    let change = document.getElementById("picChange");
    change.src = "/image/pink.png";
  }

  if (name == "red"){
    let change = document.getElementById("picChange");
    change.src = "/image/red.jpg";
  }

 
}