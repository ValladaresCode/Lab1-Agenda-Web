const form = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const errorMsg = document.getElementById("error");
const phoneInput = document.getElementById("phone");

// Mostrar / ocultar contraseña
toggleBtn.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});

// Formato automático del teléfono
phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");

    if (value.length > 4) {
        value = value.slice(0,4) + "-" + value.slice(4,8);
    }

    phoneInput.value = value;
});

// Envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = passwordInput.value;
    const phone = phoneInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{4}-\d{4}$/;

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

    if (!emailRegex.test(email)) {
        errorMsg.textContent = "Correo electrónico no válido";
        return;
    }

    if (!phoneRegex.test(phone)) {
        errorMsg.textContent = "El teléfono debe tener el formato 0000-1111";
        return;
    }

    if (!passwordRegex.test(password)) {
        errorMsg.textContent =
        "La contraseña debe tener mayúsculas, minúsculas, números, símbolos y mínimo 8 caracteres";
        return;
    }

    // Guardar datos
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userPassword", password);

    // Redirigir
    window.location.href = "contactos.html";
});
