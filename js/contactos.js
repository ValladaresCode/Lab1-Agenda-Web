const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#contactsTable tr");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(value) ? "" : "none";
    });
});

function verDetalle() {
    window.location.href = "../detalle-contacto.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "Lab1-Agenda-Web/index.html";
}
