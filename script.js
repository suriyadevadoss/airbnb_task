
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-options");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(value) {
  document.getElementById("selected").innerText = value;
  document.getElementById("dropdown-options").style.display = "none";
}
