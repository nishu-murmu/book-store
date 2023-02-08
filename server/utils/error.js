export const errorMessage = (name, message) => {
    const error = new Error()
    error.message = message
    error.name = name
    return error
}
