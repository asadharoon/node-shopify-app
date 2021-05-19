import * as Yup from "yup";
export const createCustSchema = Yup.object().shape({
  firstName: Yup.string().min(4).required(),
  lastName: Yup.string().min(4).required(),
  email: Yup.string().email("Invalid Email").required(),
  phone: Yup.string().required(),
});
