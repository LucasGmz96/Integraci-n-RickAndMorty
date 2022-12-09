
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
var passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

export default function validation(inputs){
    const error = {}
    if (!regexEmail.test(inputs.username)) {
        error.username = 'Dato incorrecto'
    }else if(!passwordRegex.test(inputs.password)){
        error.password = 'La contraseña debe tener una longitud de entre 6 y 10 caracteres, y al menos un número, una mayúscula y una minúscula'
    }
}
