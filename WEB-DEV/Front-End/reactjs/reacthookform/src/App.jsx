import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Form Data: ");
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <br />
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? "error" : ""}
          type="text"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "First Name should have at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "First Name should not exceed 20 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First Name should contain only alphabets",
            },
          })}
        />
        {errors.firstName && (
          <p className="errorMsg">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          className={errors.lastName ? "error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name should contain only alphabets",
            },
          })}
        />
        {errors.lastName && (
          <p className="errorMsg">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  );
}

export default App;
