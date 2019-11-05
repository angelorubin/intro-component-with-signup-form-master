import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Paper,
  makeStyles,
  Button,
  InputAdornment,
  Link
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { useFormik } from "formik";
import { object, string, email } from "yup";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#FF7978",
    padding: "1.4rem"
  },
  learnText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  seeHow: {
    color: "white",
    textAlign: "center"
  },
  tryButton: {
    backgroundColor: "#5D54A3",
    minWidth: "100%",
    color: "white"
  },
  trySevenDays: {
    fontSize: 11
  },
  tryThen: {
    fontSize: 11
  },
  paperForm: {
    backgroundColor: "white",
    padding: "1rem"
  },
  inputLabelProps: {
    fontSize: "0.9rem",
    fontWeight: "700"
  },
  inputProps: {
    fontSize: "0.9rem",
    fontWeight: "700"
  },
  submitButton: {
    backgroundColor: "#37cc8a",
    color: "white",
    fontSize: 11
  },
  byClicking: {
    fontSize: 11,
    textAlign: "center",
    color: grey[400],
    padding: "0.8rem"
  },
  terms: {
    color: "#FF7978",
    fontWeight: "bold",
    textDecoration: "none"
  }
});

const SigninSchema = object().shape({
  firstname: string()
    .min(3)
    .required(),
  lastname: string()
    .min(3)
    .required(),
  email: string()
    .email()
    .required(),
  password: string()
    .min(6)
    .max(12)
    .required()
});

const SignUp = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    validationSchema: SigninSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <Grid container className={classes.root} spacing={0} alignItems="center">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} xl={6} sm={6}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              spacing={2}
            >
              {/* LEARN ... */}
              <Grid item>
                <Typography className={classes.learnText} variant="h5">
                  Learn to code by watching others
                </Typography>
              </Grid>
              {/* SEE HOW ... */}
              <Grid item>
                <Typography
                  className={classes.seeHow}
                  variant="subtitle2"
                  component="h6"
                >
                  See how experienced developers solve problems in real-time.
                  Watching scripted tutorials is great, but understanding how
                  developers think is invaluable.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={6} sm={6}>
            <Grid
              container
              justify="center"
              direction="row"
              alignItems="center"
              spacing={2}
            >
              {/* TRY IT ...*/}
              <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                <Button
                  fullWidth
                  className={classes.tryButton}
                  variant="contained"
                >
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item>
                      <strong className={classes.trySevenDays}>
                        Try it free 7 days
                      </strong>
                    </Grid>
                    <Grid item>
                      <span className={classes.tryThen}>
                        then $20/mo. there after
                      </span>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
              {/* FORM ...*/}
              <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                <Paper elevation={4} className={classes.paperForm}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                        margin="dense"
                        variant="outlined"
                        InputLabelProps={{
                          classes: {
                            root: classes.inputLabelProps
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: classes.inputProps
                          },
                          endAdornment: (
                            <InputAdornment position="start">
                              {formik.errors.firstname ? (
                                <Error color="error" />
                              ) : null}
                            </InputAdornment>
                          )
                        }}
                        helperText={formik.errors.firstname}
                        error={
                          formik.touched.firstname && formik.errors.firstname
                            ? true
                            : null
                        }
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                        margin="dense"
                        variant="outlined"
                        InputLabelProps={{
                          classes: {
                            root: classes.inputLabelProps
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: classes.inputProps
                          },
                          endAdornment: (
                            <InputAdornment position="start">
                              {formik.errors.lastname ? (
                                <Error color="error" />
                              ) : null}
                            </InputAdornment>
                          )
                        }}
                        helperText={formik.errors.lastname}
                        error={
                          formik.touched.lastname && formik.errors.lastname
                            ? "error"
                            : null
                        }
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        variant="outlined"
                        label="Email Address"
                        margin="dense"
                        InputLabelProps={{
                          classes: {
                            root: classes.inputLabelProps
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: classes.inputProps
                          },
                          endAdornment: (
                            <InputAdornment position="start">
                              {formik.errors.email ? (
                                <Error color="error" />
                              ) : null}
                            </InputAdornment>
                          )
                        }}
                        helperText={formik.errors.email}
                        error={
                          formik.touched.email && formik.errors.email
                            ? true
                            : null
                        }
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        variant="outlined"
                        label="Password"
                        margin="dense"
                        InputLabelProps={{
                          classes: {
                            root: classes.inputLabelProps
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: classes.inputProps
                          },
                          endAdornment: (
                            <InputAdornment position="start">
                              {formik.errors.password ? (
                                <Error color="error" />
                              ) : null}
                            </InputAdornment>
                          )
                        }}
                        helperText={formik.errors.password}
                        error={
                          formik.touched.password && formik.errors.password
                            ? true
                            : null
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.submitButton}
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                      >
                        claim your free trial
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.byClicking}>
                        By clicking the button, you are agreeing to our{" "}
                        <Link
                          className={classes.terms}
                          href="/terms-and-services"
                        >
                          Terms and Services
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUp;
