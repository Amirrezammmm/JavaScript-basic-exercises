let values = [];

function save() {
    let pname = document.getElementById("pname").value;
    let price = document.getElementById("price").value;

    if (pname && price) {
        values.push({ name: pname, price: price });
    }

    values = values.map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price
    }));

    let container = document.getElementById("pnameTable");
    container.innerHTML = "";

    if (values.length === 0) return;

    const table = document.createElement("table");
    table.border = "1";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    Object.keys(values[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    const statusTh = document.createElement("th");
    statusTh.textContent = "status";
    headerRow.appendChild(statusTh);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    values.forEach((item, index) => {
        const row = document.createElement("tr");

        Object.values(item).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        const actionTd = document.createElement("td");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.onclick = function () {
            values.splice(index, 1);
            save();
        };
        actionTd.appendChild(deleteBtn);

        // دکمه ویرایش
        const editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        editBtn.onclick = function () {
            row.innerHTML = "";

            const idTd = document.createElement("td");
            idTd.textContent = item.id;
            row.appendChild(idTd);

            const nameInput = document.createElement("input");
            nameInput.value = item.name;
            const nameTd = document.createElement("td");
            nameTd.appendChild(nameInput);
            row.appendChild(nameTd);

            const priceInput = document.createElement("input");
            priceInput.type = "number";
            priceInput.value = item.price;
            const priceTd = document.createElement("td");
            priceTd.appendChild(priceInput);
            row.appendChild(priceTd);

            const updateTd = document.createElement("td");
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "update";
            updateBtn.onclick = function () {
                values[index].name = nameInput.value;
                values[index].price = priceInput.value;
                save();
            };
            updateTd.appendChild(updateBtn);
            row.appendChild(updateTd);
        };

        actionTd.appendChild(editBtn);
        row.appendChild(actionTd);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);

    document.getElementById("pname").value = "";
    document.getElementById("price").value = "";
}

function search() {
    let searchValue = document.getElementById("search").value.trim().toLowerCase();
    if (!searchValue) {
        save();
        return;
    }

    const filtered = values.filter(item =>
        item.name.toLowerCase().includes(searchValue)
    );

    
    const originalValues = [...values]; 
    values = filtered;
    save(); 
    values = originalValues; 
}
