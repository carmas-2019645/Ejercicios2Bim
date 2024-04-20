/*-----------------------------------VALIDACION DE CORREO--------------------------------*/ 
export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

/*-----------------------------------VALIDACION DE CORREO--------------------------------*/

/*-----------------------------------VALIDACION DE UN NOMBRE DE USUARIO--------------------------------*/
export const validateUsername = (username) =>{
    const regex = /^\S{6,12}$/
    return regex.test(username)
}

/*-----------------------------------VALIDACION DE UN NOMBRE DE USUARIO--------------------------------*/

/*-----------------------------------VALIDACION DE CONTRASEÑA------------------------------------*/
export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

/*-----------------------------------VALIDACION DE CONTRASEÑA------------------------------------*/

/*-----------------------------------VALIDACION DE CONFIRMAR CONTRASEÑA----------------------------*/
export const validatePassConfirm = (password, passConfirm) => {
    return password === passConfirm
}

/*-----------------------------------VALIDACION DE CONFIRMAR CONTRASEÑA----------------------------*/

/*-----------------------------------MENSAJES----------------------------*/
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe ser entre 3 y 8 caracteres, sin espacio'
export const passwordVlidateMessage = 'La contraseña debe tener entre 6 y 12 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
/*-----------------------------------MENSAJES----------------------------*/

