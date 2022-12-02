import { Button, FormControl, OutlinedInput, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';


const validationSchema = yup.object({
  userName: yup
    .string('Enter your UserName')

    .required('User Name is required'),
  password: yup
    .string('Enter your Password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = ({
  loginUser
}) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (values) => {
    setLoading(true)
    await loginUser(values).then((res) => {
      setLoading(false)
      if (res?.success) {
        navigate('/dashboard')

      }

    })
  }
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleSubmit(values)
    },
  });

  return (
    <div className='login_container'>
      <Box
        className="login_box"

      >
        <Typography variant="h5"> Login </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <OutlinedInput
              id="email"
              name="userName"
              placeholder="Username"
              sx={{ mt: "10px" }}
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
            />
            {formik.touched.userName && Boolean(formik.errors.userName) && <span className="error">
              {formik.touched.userName && formik.errors.userName}  </span>}
          </FormControl>

          <FormControl fullWidth>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              variant="outlined"
              placeholder="Password"
              sx={{ mt: "10px" }}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {formik.touched.password && Boolean(formik.errors.password) && <span className="error">
              {formik.touched.password && formik.errors.password}  </span>}
          </FormControl>


          <Button sx={{ mt: "10px" }} disabled={loading} color="primary" variant="contained" fullWidth type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;