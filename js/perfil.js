const email = localStorage.getItem("userEmail");
const phone = localStorage.getItem("userPhone");

document.getElementById("userEmail").textContent =
    email ?? "No disponible";

document.getElementById("userPhone").textContent =
    phone ? `+502 ${phone}` : "No disponible";
