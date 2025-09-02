let people = ["Amirreza", "Ali", "Sogand", "AmirAli", "Reza"];

let peoplediv = document.getElementById("people");
peoplediv.innerHTML = `first person:  ${people[0]} <br/> second person: ${people[1]}`;

function searchName() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();
  let resultDiv = document.getElementById("result");
  let foundPeople = people.filter(person => person.toLowerCase().includes(searchInput));
  
  if (foundPeople.length > 0) {
    resultDiv.innerHTML = `Found: ${foundPeople.join(", ")}`;
  } else {
    resultDiv.innerHTML = "No matches found.";
  }
}