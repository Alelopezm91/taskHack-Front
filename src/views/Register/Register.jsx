import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputGroup from "../../components/InputGroup/InputGroup";
import { register as registerRequest } from "../../services/AuthService";

const schema = yup
  .object({
    email: yup.string().email().required(),
    userName: yup.string().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().min(8).required(),
    city: yup.string().required(),
    postalCode: yup.number().required(),
    street: yup.string(),
  })
  .required();

const Register = () => {
  const [backErrors, setBackErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setBackErrors({});
    setIsSubmitting(true);

    const bodyFormData = new FormData();

    const { image, ...rest } = data;

    Object.keys(rest).forEach((key) => {
      bodyFormData.append(key, rest[key]);
    });

    if (image[0]) {
      bodyFormData.append("image", image[0]);
    }

    registerRequest(bodyFormData)
      .then((user) => {
        navigate("/login");
      })
      .catch((err) => {
        setBackErrors(err?.response?.data?.errors);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="Register">
      <h1 className="mt-3" style={{ height: "100vh" }}>
        Register
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          label="Email"
          id="email"
          register={register}
          error={backErrors?.email || errors.email?.message}
          type="email"
        />
        <InputGroup
          label="User Name"
          id="userName"
          register={register}
          error={backErrors?.userName || errors.userName?.message}
        />
        <InputGroup
          label="Name"
          id="name"
          register={register}
          error={backErrors?.name || errors.name?.message}
        />
        <InputGroup
          label="Last Name"
          id="lastName"
          register={register}
          error={backErrors?.LastName || errors.lastName?.message}
        />
        <InputGroup
          label="Password"
          id="password"
          register={register}
          error={backErrors?.password || errors.password?.message}
          type="password"
        />
        <InputGroup
          label="City"
          id="city"
          register={register}
          error={backErrors?.city || errors.city?.message}
          type="city"
        />
        <InputGroup
          label="Street"
          id="street"
          register={register}
          error={backErrors?.street || errors.street?.message}
          type="street"
        />
        <InputGroup
          label="Postal code"
          id="postalCode"
          register={register}
          error={backErrors?.postalCode || errors.postalCode?.message}
          type="postalCode"
        />
        <InputGroup
          label="User image"
          id="image"
          register={register}
          error={backErrors?.image || errors.image?.message}
          type="file"
        />
        <button className={`btn btn-${isSubmitting ? "secondary" : "primary"}`}>
          {isSubmitting ? "Creating user..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Register;
