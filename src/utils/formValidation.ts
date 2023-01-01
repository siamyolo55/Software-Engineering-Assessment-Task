import * as EmailValidator from 'email-validator'
import type { FormData } from './types'

export const validateForm = (formData: FormData): boolean => {
    if(formData.name.length < 3){
        alert("Name should be atleast 3 characters")
        return false
    }

    if(formData.username.length < 3){
        alert("Username should be atleast 3 characters")
        return false
    }

    if(!EmailValidator.validate(formData.email)){
        alert('Invalid Email');
        return false
    }

    if(formData.password === ""){
        alert("Password can't be empty")
        return false
    }

    if(formData.password !== formData.passwordConfirm){
        alert("Passwords don't match")
        return false
    }

    return true
}