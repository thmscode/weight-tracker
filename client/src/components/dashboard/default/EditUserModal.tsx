import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { USER_DATA_VALIDATION } from "../../../yup-schemas";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {
  renderErrorToast,
  renderInfoToast,
  renderSuccessToast,
} from "../../../utils/toasts";

type Props = {
  open: boolean;
  handleClose: () => void;
  data: { height: number | null; weight: number | null };
};

const EditUserModal: React.FC<Props> = ({ open, handleClose, data }) => {
  const { user, getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (height: number, weight: number) => {
    const token = await getAccessTokenSilently();

    return await axios.post(
      "/api/user/dashboard/updateUserData",
      { height, weight },
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { email: user!.email, id: user!.sub },
      }
    );
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box p="2rem">
        <Typography variant="h5" pb="0.75rem">
          Edit Information
        </Typography>
        <Formik
          initialValues={{
            height: data.height ? data.height : 0,
            weight: data.weight ? data.weight : 0,
          }}
          validationSchema={USER_DATA_VALIDATION}
          onSubmit={(values) => {
            if (
              values.height !== data.height ||
              values.weight !== data.weight
            ) {
              handleSubmit(values.height, values.weight)
                .then((response) => {
                  const { error, msg } = response.data;
                  if (!error) {
                    renderSuccessToast(msg);
                    handleClose();
                    setTimeout(() => window.location.reload(), 1500);
                  } else renderErrorToast(msg);
                })
                .catch((e) => renderErrorToast(e.response.data.msg));
            } else renderInfoToast("Please enter new values.");
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form className="user-form">
              <Box>
                <Field
                  label="Height (in)"
                  id="height"
                  name="height"
                  as={TextField}
                  variant="standard"
                />
                {errors.height && touched.height ? (
                  <div className="error-message">{errors.height}</div>
                ) : null}
              </Box>
              <Box>
                <Field
                  label="Weight (lbs)"
                  id="weight"
                  name="weight"
                  as={TextField}
                  variant="standard"
                />
                {errors.weight && touched.weight ? (
                  <div className="error-message">{errors.weight}</div>
                ) : null}
              </Box>
              <Box display="flex" justifyContent="center" gap="0.75rem">
                <Button type="submit" variant="contained" disabled={!isValid}>
                  Submit
                </Button>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default EditUserModal;
