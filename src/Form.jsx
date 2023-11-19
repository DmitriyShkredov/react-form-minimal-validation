import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Используйте буквы")
    .min(2, "Минимум 2 буквы")
    .max(10, "Максимум 10 букв")
    .required("Введите имя"),
});

export const CustomForm = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={schema}
      onSubmit={() => alert("Success")}
    >
      <Form className="form">
        <label>Имя</label>
        <Field name="name" placeholder="Введите имя" />
        <ErrorMessage name="name" />
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
