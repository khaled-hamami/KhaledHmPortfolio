import * as yup from "yup"

const contactSchema = yup.object({
  name: yup
    .string("Name can only be composed of characters")
    .required("Name is required")
    .max(50, "Name is maximum 50 characters")
    .min(2, "Name is minimum 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .max(100, "Email is maximum 100 characters")
    .min(4, "Email is minimum 4 characters")
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9.@ éèà]+$/,
      "Email can only be composed of 'letters,' 'numbers,' '@,' and '.'"
    ),
  subject: yup
    .string()
    .max(50, "Subject is maximum 50 letters")
    .min(2, "Subject is minimum 2 letters"),
  message: yup
    .string()
    .required("Message is required")
    .max(300, "Message is maximum 300 characters"),
});

export default contactSchema;
