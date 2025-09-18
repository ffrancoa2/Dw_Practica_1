document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');
    const nombreInput = document.getElementById('nombre');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contrasena = contrasenaInput.value;
        
        
        if (!nombre || !correo || !contrasena) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        if (!validarCorreo(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        if (!validarContrasena(contrasena)) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        
        alert('Registrado.');
        
        
        form.reset();
    });
    
    function validarCorreo(correo) {
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
    
    function validarContrasena(contrasena) {
        return contrasena.length >= 8;
    }
});