const table = document.getElementById('multiplication-table');

// سطر عنوان (اعداد 1 تا 10 در بالای جدول)
const headerRow = document.createElement('tr');
const cornerCell = document.createElement('th');
cornerCell.textContent = '*';
headerRow.appendChild(cornerCell);

for (let i = 1; i <= 10; i++) {
  const th = document.createElement('th');
  th.textContent = i;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);

// ساخت سطرهای جدول ضرب
for (let i = 1; i <= 10; i++) {
  const row = document.createElement('tr');

  const rowHeader = document.createElement('th');
  rowHeader.textContent = i;
  row.appendChild(rowHeader);

  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td');
    cell.textContent = i * j;
    row.appendChild(cell);
  }

  table.appendChild(row);
}

