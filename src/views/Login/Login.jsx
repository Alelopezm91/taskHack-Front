import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputGroup from "../../components/InputGroup/InputGroup";
import { useState } from "react";
import { login as loginRequest } from "../../services/AuthService";
import { useAuthContext } from "../../contexts/AuthContext";
import {useLocation, useNavigate} from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const Login = () => {
  const navigate=useNavigate()
  let location= useLocation();

  let from = location.state?.from?.pathname || "/profile";

  const { login } = useAuthContext();

  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setError(undefined);
    setIsSubmitting(true);

    loginRequest(data)
      .then((response) => {
        login(response.access_token, () => navigate(from, { replace: true }));
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div className="Login" style={{ height: "100vh" }}>
      <h1 className="mt-3">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          label="Email"
          id="email"
          register={register}
          error={errors.email?.message}
          type="email"
        />
        <InputGroup
          label="Password"
          id="password"
          register={register}
          error={error || errors.password?.message}
          type="password"
        />

        <button className={`btn btn-${isSubmitting ? "secondary" : "primary"}`}>
          {isSubmitting ? "Login..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
