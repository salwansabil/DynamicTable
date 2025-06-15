document.getElementById('tableInput').addEventListener('submit', function(event){
    event.preventDefault();
    //getting ids from the form
    var vMin = parseInt(document.getElementById('multiplicandMin').value, 10);
    var vMax = parseInt(document.getElementById('multiplicandMax').value, 10);
    var hMin = parseInt(document.getElementById('multiplierMin').value, 10);
    var hMax = parseInt(document.getElementById('multiplierMax').value, 10);

    const errorBox = document.getElementById('errorBox');
    errorBox.textContent = '';

  //error handling
  if ([vMin, vMax, hMin, hMax].some(Number.isNaN)) {
    errorBox.textContent = 'Please fill out all four boxes with numbers.';
    return;
  }
  if ([vMin, vMax, hMin, hMax].some(n => n <= -50 || n > 50)) {
    errorBox.textContent = 'All numbers must be between -50 and 50.';
    return;
  }
  if (vMin > vMax || hMin > hMax) {
    errorBox.textContent = 'Minimum values must be ≤ their maximums.';
    return;
  }
  const totalCells = (vMax - vMin + 1) * (hMax - hMin + 1);
  if (totalCells > 10000) {
    errorBox.textContent = 'Table too large. Please reduce range.';
    return;
  }

    //build table
    let html = '<table class="table table-bordered table-sm text-center">';
  html += '<thead><tr><th></th>';
  for (let h = hMin; h <= hMax; h++) html += `<th>${h}</th>`;
  html += '</tr></thead><tbody>';

  for (let v = vMin; v <= vMax; v++) {
    html += `<tr><th>${v}</th>`;
    for (let h = hMin; h <= hMax; h++) html += `<td>${v * h}</td>`;
    html += '</tr>';
  }
  html += '</tbody></table>';
  document.getElementById('tableContainer').innerHTML=html;
});




