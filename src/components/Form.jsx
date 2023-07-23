import { useForm } from "react-hook-form";
import { useState } from "react";
import FormButton from "./FormButton";
import ErrorMessage from "./ErrorMessage";
import Message from "./Message";

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const defaultErrMsg = "Something went wrong";
  const submitData = async (data) => {
    setError(null);
    setIsSuccess(false);
    if (data.email.trim() && data.firstName.trim()) {
      try {
        return new Promise((res) => {
          setTimeout(() => {
            setIsSuccess(true);
            reset();
            res();
          }, 1000);
        });
      } catch (error) {
        setError(error);
      }
    }
    return null;
  };
  return (
    <div>
      <h4>Изпрати запитване:</h4>
      <form onSubmit={handleSubmit(submitData)}>
        <div>
          <div>
            <input
              {...register("firstName", {
                required: defaultErrMsg,
              })}
              type="text"
              placeholder="Име"
            ></input>
            {errors.firstName && (
              <ErrorMessage message={errors?.firstName?.message} />
            )}
          </div>
          <div>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Фамилия"
            ></input>
          </div>
        </div>
        <div>
          <div>
            <input
              {...register("email", { required: defaultErrMsg })}
              type="email"
              placeholder="E-mail"
            ></input>
            {errors.email && <ErrorMessage message={errors?.email?.message} />}
          </div>
          <div>
            <input
              {...register("phone")}
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Телефон"
            ></input>
          </div>
        </div>
        <div>
          <input {...register("theme")} type="text" placeholder="Тема"></input>
        </div>
        <div className="flex w-[100%] ">
          <textarea {...register("request")} placeholder="Запитване"></textarea>
        </div>

        <FormButton />
      </form>
      {isSuccess && <Message isSuccess={true} />}
      {error && <Message isSuccess={false} errorMessage={error.message} />}
    </div>
  );
};

export default Form;
