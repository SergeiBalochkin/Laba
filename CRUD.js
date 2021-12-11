const ButtonAdd1 = document.querySelector('.buttonAdd1')
const ButtonAdd2 = document.querySelector('.buttonAdd2')
const buttonClosedOkno1 = document.querySelector('.btnClosedOkno1')
const buttonClosedOkno2 = document.querySelector('.btnClosedOkno2')
const buttonClosedOkno3 = document.querySelector('.btnClosedOkno3')
const buttonClosedOkno4 = document.querySelector('.btnClosedOkno4')
const buttonClosedOkno5 = document.querySelector('.btnClosedOkno5')
const buttonClosedOkno6 = document.querySelector('.btnClosedOkno6')
const buttonClosedOkno7 = document.querySelector('.btnClosedOkno7')
const buttonClosedOkno8 = document.querySelector('.btnClosedOkno8')

const addNewElement = document.querySelector('.addNewElement')
const addNewElement2 = document.querySelector('.addNewElement2')
const ChangeElement = document.querySelector('.ChangeElement')
const DeleteElement = document.querySelector('.DeleteElement')

function closeAddNewElement() {
    document.getElementById('addNewElement').style.display = 'none';
}
function openAddNewElement() {
    document.getElementById('addNewElement').style.display = 'block';
}
function closeAddNewElement2() {
    document.getElementById('addNewElement2').style.display = 'none';
}
function openAddNewElement2() {
    document.getElementById('addNewElement2').style.display = 'block';
}
function closeChangeElement() {
    document.getElementById('ChangeElement').style.display = 'none';
}
function closeDeleteElement() {
    document.getElementById('DeleteElement').style.display = 'none';
}



ButtonAdd1.addEventListener('click', openAddNewElement)
ButtonAdd2.addEventListener('click', openAddNewElement2)
buttonClosedOkno1.addEventListener('click', closeAddNewElement)
buttonClosedOkno2.addEventListener('click', closeAddNewElement)
buttonClosedOkno7.addEventListener('click', closeAddNewElement2)
buttonClosedOkno8.addEventListener('click', closeAddNewElement2)



const AddNewElement1 = document.querySelector('.AddNewElement1')
const AddNewElement3 = document.querySelector('.AddNewElement3')
const ChangeElement1 = document.querySelector('.ChangeElement1')






  
function myFunc() {
    var AddName = document.querySelector("#AddName").value
    var AddGroup = document.querySelector("#AddGroup").value
    var AddAge = document.querySelector("#AddAge").value
    var table = document.getElementById('table');    
    var faucet1 = 1;    
    var tr = document.createElement("tr");
    if (faucet1 == 1) {        
        tr.innerHTML = '<td><center>' + AddName + '</center></td><td><center>' + AddGroup + '</center></td><td><center>' + AddAge + '</center></td><td><center><button class="buttonChange1">Изменить</button><button class="buttonDelete1">Удалить</button></center></td>';
        table.appendChild(tr);

    } else {

        console.log('error');

    }
    const buttonOpenedChange = document.querySelector('.buttonChange1')
    buttonOpenedChange.addEventListener('click', openChangeElement)
    const buttonOpenedDelete = document.querySelector('.buttonDelete1')
    buttonOpenedDelete.addEventListener('click', openDeleteElement)

    const DeleteElement = document.querySelector('.DeleteElement1')
    function DeletedElement() {
        table.removeChild(tr)
    }
    DeleteElement.addEventListener('click', DeletedElement)
    DeleteElement.addEventListener('click', closeDeleteElement)

    function Change() {
        table.removeChild(tr)
        var AddName1 = document.querySelector("#AddName1").value
        var AddGroup1 = document.querySelector("#AddGroup1").value
        var AddAge1 = document.querySelector("#AddAge1").value
        if (faucet1 == 1) {
            tr.innerHTML = '<td><center>' + AddName1 + '</center></td><td><center>' + AddGroup1 + '</center></td><td><center>' + AddAge1 + '</center></td><td><center><button class="buttonChange1">Изменить</button><button class="buttonDelete1">Удалить</button></center></td>';
            table.appendChild(tr);

        } else {

            console.log('error');

        }
        const buttonOpenedChange = document.querySelector('.buttonChange1')
        buttonOpenedChange.addEventListener('click', openChangeElement)
        const buttonOpenedDelete = document.querySelector('.buttonDelete1')
        buttonOpenedDelete.addEventListener('click', openDeleteElement)

        const DeleteElement = document.querySelector('.DeleteElement1')
        function DeletedElement() {
            table.removeChild(tr)
        }
        DeleteElement.addEventListener('click', DeletedElement)
        DeleteElement.addEventListener('click', closeDeleteElement)
    }
    ChangeElement1.addEventListener('click', Change)
    ChangeElement1.addEventListener('click', closeChangeElement)
};

function openChangeElement() {
    document.getElementById('ChangeElement').style.display = 'block';
}
function openDeleteElement() {
    document.getElementById('DeleteElement').style.display = 'block';
}
AddNewElement1.addEventListener('click', myFunc)
AddNewElement1.addEventListener('click', closeAddNewElement)
AddNewElement3.addEventListener('click', myFunc)
AddNewElement3.addEventListener('click', closeAddNewElement2)
buttonClosedOkno3.addEventListener('click', closeChangeElement)
buttonClosedOkno4.addEventListener('click', closeChangeElement)
buttonClosedOkno5.addEventListener('click', closeDeleteElement)
buttonClosedOkno6.addEventListener('click', closeDeleteElement)

