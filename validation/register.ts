import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().min(4).max(10).required(),
  email: Yup.string().email().min(10).max(30).required(),
});

export { registerSchema };
