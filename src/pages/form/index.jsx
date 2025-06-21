import { Box, Button, TextField, MenuItem, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const Form = ({ handleAddUser }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isSmallScreen = useMediaQuery("(max-width:480px)");

  const handleFormSubmit = (values, { resetForm }) => {
    const newUser = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      age: values.age,
      phone: values.contact,
      access: values.accessLevel,
    };
    handleAddUser(newUser);
    resetForm();
  };

  return (
    <Box m={isSmallScreen ? "10px" : "20px"}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap={isSmallScreen ? "20px" : "30px"}
              gridTemplateColumns={
                isNonMobile
                  ? "repeat(4, minmax(0, 1fr))"
                  : "repeat(2, minmax(0, 1fr))"
              }
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: isNonMobile ? "span 2" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: isNonMobile ? "span 2" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{
                  gridColumn: isNonMobile ? "span 4" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: isNonMobile ? "span 4" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: isNonMobile ? "span 4" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              />
              <TextField
                select
                fullWidth
                variant="filled"
                label="Access Level"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accessLevel}
                name="accessLevel"
                error={!!touched.accessLevel && !!errors.accessLevel}
                helperText={touched.accessLevel && errors.accessLevel}
                sx={{
                  gridColumn: isNonMobile ? "span 4" : "span 2",
                  gridColumn: isSmallScreen ? "span 2" : undefined,
                }}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </TextField>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  age: yup.number().required("required").positive().integer(),
  accessLevel: yup
    .string()
    .oneOf(["user", "manager", "admin"])
    .required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  age: "",
  accessLevel: "user",
};

export default Form;
