import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import HtmlEditorComponent from "./HtmlEditorComponent";
import { createTask } from "../../../services/TaskService";
import { useAuthContext } from "../../../contexts/AuthContext";
import InputGroup from "../../../components/InputGroup/InputGroup";

const NewTask = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    const { content, title, city, category } = data;

    if (!content || !title || !city || !category) {
      setErrors(true);
    } else {
      createTask({ ...data, user })
        .then((task) => {
          getUser();
          navigate("/profile");
        })
        .catch((err) => {
          setErrors(err?.response?.data?.errors);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="mt-2">
        <h1 className="mb-2">Create your Task!</h1>
        {errors && (
          <div className="alert alert-dark" role="alert">
            Check all fields!
          </div>
        )}
        <form onSubmit={onSubmit}>
          <InputGroup
            label="Título"
            id="title"
            register={methods.register}
            type="text"
          />
          <InputGroup
            label="Categoría"
            id="category"
            register={methods.register}
            type="select"
            options={[
              "Gardening",
              "Moving",
              "Mounting",
              "Cleaning",
              "Delivery",
              "Cooking",
            ]}
          />
          <InputGroup
            label="Ciudad"
            id="city"
            register={methods.register}
            type="select"
            options={["Madrid", "Barcelona", "Valencia"]}
          />

          {/* <InputGroup
            label="Descripción"
            id="content"
            register={methods.register}
            type="text"
            style={{ height: "45px"}}
          /> */}

          <HtmlEditorComponent
            name="content"
            onFocusCb={() => setErrors(false)}
          />
          <div className="text-center wv-100  mt-4 ">
            <button
              className={`btn w-100 btn-${
                isSubmitting ? "secondary" : "primary"
              }`}
            >
              {isSubmitting ? "Creating user..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default NewTask;
