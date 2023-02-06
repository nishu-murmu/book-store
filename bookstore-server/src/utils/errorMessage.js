const ErrorMessage = (message) => {
  const error = new Error()
  error.message = message
  return error
}
export default ErrorMessage
