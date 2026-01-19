const phoneInput = document.getElementById("phone");
const form = document.querySelector(".contact-form");

phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");

    if (value.startsWith("502")) {
        value = value.slice(3);
    }

    if (value.length > 4) {
        value = value.slice(0,4) + "-" + value.slice(4,8);
    }

    phoneInput.value = "+502 " + value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envío real

    alert("Contacto guardado, no funcional por instrucciones.");

    window.location.href = "../contactos.html";
});
