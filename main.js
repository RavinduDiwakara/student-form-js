window.onload = function () {
    const addBtn = document.getElementById("addBtn");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const tableBody = document.querySelector("#studentTable tbody");
  
    addBtn.onclick = function () {
      const name = nameInput.value;
      const age = ageInput.value;
  
      if (!name || !age) {
        alert("Please enter both name and age.");
        return;
      }
  
      const row = tableBody.insertRow();
      row.insertCell(0).innerText = name;
      row.insertCell(1).innerText = age;
  
      nameInput.value = ""; // for again empty to form
      ageInput.value = "";// for again empty to form
      
    };
  };
  

