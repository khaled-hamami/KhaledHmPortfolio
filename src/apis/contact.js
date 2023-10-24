const contact = async (name, email, subject, message, setFetching) => {
  //a state to disable the submit button to prevent multiple requests
  try {
    setFetching(true)
    setFetching(false)
  } catch (err) {
    setFetching(false)
  }
}

export default contact
