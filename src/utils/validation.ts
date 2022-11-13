import { RE_EMAIL_VALIDATOR, RE_PASSWORD_VALIDATOR } from '../constants'

const isEmailValid = (email: string) => RE_EMAIL_VALIDATOR.test(email)

const isPasswordValid = (password: string) =>
    RE_PASSWORD_VALIDATOR.test(password)

export { isEmailValid, isPasswordValid }
