import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { getTask, updateTask } from "../../../services/TaskService";
import { useAuthContext } from "../../../contexts/AuthContext";
import HtmlEditorComponent from "../NewPost/HtmlEditorComponent";
import InputGroup from "../../../components/InputGroup";

const EditTask = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [task, setTask] = useState(null);
  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();
  const { getUser } = useAuthContext();
  const { id } = useParams();
  const methods = useForm();

  useEffect(() => {
    getTask(id).then((task) => {
      setTask(task);
      methods.reset({ content: task.content, title: task.title });
    });
  }, []);

  const onSubmit = methods.handleSubmit((data) => {
    const { content, title } = data;

    if (!content || !title) {
      setErrors(true);
    } else {
      updateTask(task.id, data)
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
      <div className="mt-4">
        <h1 className="mb-4">Edit your task!</h1>
        <form onSubmit={onSubmit}>
          {errors && (
            <div className="alert alert-dark" role="alert">
              You must include some content!
            </div>
          )}
          <InputGroup
            label="Título"
            id="title"
            register={methods.register}
            type="text"
          />
          <HtmlEditorComponent
            initialValue={task ? task.content : null}
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

export default EditTask;
