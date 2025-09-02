function report_card(){
    let name = document.getElementById("name").value;
    let Lastname = document.getElementById("Lastname").value;
    let math = document.getElementById("math").value;
    let english = document.getElementById("english").value;
    let physics = document.getElementById("physics").value;

    let summery = parseInt(math) + parseInt(english) + parseInt(physics);
    let average = summery / 3;

    const resultDiv = document.getElementById("table-container");
    resultDiv.innerHTML = ""; 

    let table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.marginTop = "20px";
    table.style.borderCollapse = "collapse";

    let caption = document.createElement("caption");
    caption.innerText = `Report Card of ${name} ${Lastname}`;
    caption.style.fontWeight = "bold";
    table.appendChild(caption);

    let headerRow = document.createElement("tr");

    let subjectHeader = document.createElement("th");
    subjectHeader.innerText = "Subject";

    let gradeHeader = document.createElement("th");
    gradeHeader.innerText = "Grade";

    headerRow.appendChild(subjectHeader);
    headerRow.appendChild(gradeHeader);
    table.appendChild(headerRow);

    let mathRow = document.createElement("tr");
    mathRow.innerHTML = `<td>Math</td><td>${math}</td>`;
    table.appendChild(mathRow);

    let englishRow = document.createElement("tr");
    englishRow.innerHTML = `<td>English</td><td>${english}</td>`;
    table.appendChild(englishRow);

    let physicsRow = document.createElement("tr");
    physicsRow.innerHTML = `<td>Physics</td><td>${physics}</td>`;
    table.appendChild(physicsRow);

    let summaryRow = document.createElement("tr");
    summaryRow.innerHTML = `<td>Total</td><td>${summery}</td>`;
    table.appendChild(summaryRow);

    let averageRow = document.createElement("tr");
    averageRow.innerHTML = `<td>Average</td><td>${average}</td>`;   
    table.appendChild(averageRow);
    

    resultDiv.appendChild(table);


    document.getElementById("input-section").style.display = "none";
    document.getElementById("back-to-form").style.display = "block";

    resultDiv.style.display = "flex";
    resultDiv.style.justifyContent = "center";
    resultDiv.style.alignItems = "center";
    resultDiv.style.height = "100vh";
    resultDiv.style.backgroundColor = "lightblue";

    table.style.width = "50%";
    caption.style.fontSize = "24px";
    caption.style.textAlign = "center";
    caption.style.marginBottom = "20px";

    table.style.textAlign = "center";
}

function goBack() {

    document.getElementById("input-section").style.display = "block";

    document.getElementById("table-container").style.display = "none";

    document.getElementById("back-to-form").style.display = "none";
}
