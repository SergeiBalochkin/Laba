const ButtonAdd1 = document.querySelector('.buttonAdd1')
const ButtonAdd2 = document.querySelector('.buttonAdd2')
const tableaddchange = document.querySelector('.addchange')
const submit1 = document.querySelector('.submit1')
const buttonClosedOkno1 = document.querySelector('.btnClosedOkno1')
const buttonClosedOkno2 = document.querySelector('.btnClosedOkno2')
function openAddNewElement() {
    document.getElementById('addchange').style.display = 'block';
}
function closeAddNewElement() {
    document.getElementById('addchange').style.display = 'none';
}
ButtonAdd1.addEventListener('click', openAddNewElement)
ButtonAdd2.addEventListener('click', openAddNewElement)
submit1.addEventListener('click', closeAddNewElement)
buttonClosedOkno1.addEventListener('click', closeAddNewElement)
buttonClosedOkno2.addEventListener('click', closeAddNewElement)




var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Group"] = document.getElementById("Group").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Group;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)"><center><button style="background-color: blue; color: white; cursor: pointer">Изменить</button></center></a>
                       <a onClick="onDelete(this)"><center><button style="background-color: red; color: white; cursor: pointer">Удалить</button></center></a>`;
    
    }


function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Group").value = "";
    selectedRow = null;
}

function onEdit(td) {
    openAddNewElement()
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Group").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Age;
    selectedRow.cells[2].innerHTML = formData.Group;
}

function onDelete(td) {
    if (confirm('Вы действительно хотите удалить данные?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

