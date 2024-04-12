import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "اسم باید حداقل 4 کلمه باشد")
    .max(10)
    .required("اسم را پر کنید"),
  email: Yup.string().email().min(10).max(30).required(),
});

export { registerSchema };
