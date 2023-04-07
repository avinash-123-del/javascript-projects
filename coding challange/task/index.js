var form = `<div class="container">

            <div class="form-group">
            <div class="search">
              <input type="text" class="form-control" id="searchName" onkeyup="search()" value = "" aria-describedby="ContactHelp" placeholder="Search here..">
             <button type="submit" class="btn btn-success" >Search</button><br/>
            </div>
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="ContactHelp" placeholder="Enter Your Name">
            </div>
            <div class="form-group mt-3">
              <label for="conatct">Contact</label>
              <input type="text" class="form-control" id="contact" placeholder="Enter Your Contact" value="">
            </div>
            <div style="display: flex; gap:10px;" id='submit'>
            <button  class="btn btn-primary mt-3" onclick="save(),duplicate()">Save</button>
            <button type="submit" class="btn btn-primary mt-3" onclick="filterName()">Filter Name</button>
            <button type="submit" class="btn btn-primary mt-3" onclick="filterContact()">Filter Contact</button>
          </div>`;
let filterArrayName = []
let filterArrayContact = []

function table() {
  let table = `<table class="table" id="myTable">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Name</th>
      <th class="col-4">Contact</th>
      <th class="col-2">Edit</th>
      <th class="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < details.length; i++) {
    table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name[0].toUpperCase()+details[i].name.slice(1)}</td>
      <td>${details[i].contact}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    filterArrayName.push((details[i].name[0].toUpperCase() + details[i].name.slice(1)))
    filterArrayContact.push(details[i].contact)
  };
  table = table + `</tbody>
    </table>`;
  document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();

// console.log(filterArrayName.sort());
// console.log(filterArrayContact);
function getData() {
  let Data = localStorage.getItem("details");
  if (Data) {
    details = JSON.parse(Data);
  } else {
    setData();
  };
};
function setData() {
  localStorage.setItem("details", JSON.stringify(details));
};
function save() {
  let name = document.getElementById("name");
  let contact = document.getElementById("contact");

  if (name.value == 0) {
    alert("name is Empty");
    return
  }
  // console.log(details[0].contact);
  
  let data = {
    name: name.value,
    contact: contact.value
  };
  details.push(data);


  setData();

  // console.log(details)
  // console.log(contact.value)
  table();
  name.value = "";
  contact.value = "";

};
function deleteData(index) {
  details.splice(index, 1);
  setData();
  table();

  // console.log('delete work')
  // console.log(details)
};

function edit(index) {
  let editForm = `<div>
  <div class="form-group">
    <label for="name">Update Name</label>
    <input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="ContactHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="contact">Contact</label>
    <input type="contact" value="${details[index].contact}" class="form-control" id="newContact" placeholder="Update Your contact">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
  document.getElementById("form").innerHTML = editForm;
  // console.log('edit work');
};
function update(index) {
  let newName = document.getElementById('newName');
  let newContact = document.getElementById('newContact');

  details[index] = {
    name: newName.value,
    contact: newContact.value
  };

  setData();
  table();
  document.getElementById("form").innerHTML = form;
  // console.log('update work')
  // console.log(details)
}
function filterName(){
    let tableName = `<table class="table">
    <thead>
      <tr>
        <th clsaa="col-1">NO</th>
        <th clsaa="col-3">Name</th>
      </tr>
    </thead>
    <tbody>`;
    for (let i = 0; i < filterArrayName.length; i++) {
      tableName = tableName + `<tr>
        <td>${i + 1}</td>
        <td>${filterArrayName[i]}</td>
        <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      </tr> `;
      // filterArrayName.push((details[i].name[0].toUpperCase() + details[i].name.slice(1)))
    };
    tableName = tableName + `</tbody>
      </table>`;
    document.getElementById("table").innerHTML = tableName;
}

function filterContact() {
  let tableContact = `<table class="table">
    <thead>
      <tr>
        <th clsaa="col-1">NO</th>
        <th clsaa="col-3">Contact</th>
      </tr>
    </thead>
    <tbody>`;
    for (let i = 0; i < filterArrayContact.length; i++) {
      tableContact = tableContact + `<tr>
        <td>${i + 1}</td>
        <td>${filterArrayContact[i]}</td>
        <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      </tr> `;
      // filterArrayName.push((details[i].name[0].toUpperCase() + details[i].name.slice(1)))
    };
    tableContact = tableContact + `</tbody>
      </table>`;
    document.getElementById("table").innerHTML = tableContact;
}

function search(){
  let find = document.getElementById("searchName").value.toUpperCase()
  let myTable = document.getElementById("myTable")
  let tr = document.getElementsByTagName("tr")
  let td,txtValue;
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(find) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
}

