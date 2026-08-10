function validadEmail(email) {
    const emailLimpio = email.trim().toLowerCase();
    console.log(emailLimpio);

    if(emailLimpio.includes("@utn.edu.ar")){
        return "Registro exitoso";
    } else{
        return "Error";
    }
}

console.log(validadEmail("       alumno123@utn.edu.AR       "));
console.log(validadEmail("      alumno456@GMAIL.com.AR     "));

const baseDeDatosEmails = [
    "juan@GMAIL.com  ",
    "jorge@UTN.EDU.AR    ",
    "lucas@utn.edu.ar",
    "     pepe@gmail.com   "
];

const emailsValidados = baseDeDatosEmails.map((email) =>{
    return validadEmail(email);
})

console.log(emailsValidados);
