import { useEffect, useState } from "react";
import Joi from "joi";
const formData = [
  {
    label: "Name",
    name: "name",
    value: "",
    type: "text",
    validate: ["required"],
  },
  {
    label: "Email",
    name: "email",
    value: "",
    type: "text",
    validate: ["required", "emailCheck"],
  },
  {
    label: "Password",
    name: "password",
    value: "",
    type: "text",
    validate: ["required"],
  },
];
const RegisterForm = () => {
  const [registerDate, setRegisterDate] = useState();
  const [errors, setErrors] = useState<any>();
  useEffect(() => {
    const initialValue: any = formData.reduce(
      (acc: { [key: string]: any }, field) => {
        acc[field.name] = field.value;
        return acc;
      },
      {}
    );

    setRegisterDate(initialValue);
  }, []);
  const schema = {
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,27}$")),
  };
  const validaters = () => {
    const joiSchema = Joi.object(schema);
    const res = joiSchema.validate(registerDate, { abortEarly: false });
    if (!res.error) {
      setErrors(null);
      return;
    }
    const errorPath = res.error.details;
    const newErrors: { [key: string]: string } = {};
    for (const err of errorPath) {
      newErrors[err.path as string] = err.message;
    }
    setErrors(newErrors);
    console.log(newErrors);
  };
  const handkeSubmit = (formValue: any) => {
    formValue.preventDefault();
    validaters();
    console.log("click submit =>", formValue);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Anime Zee
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handkeSubmit}>
              {formData?.filter(Boolean).map((field: any) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    onChange={(e) =>
                      setRegisterDate((prev: any) => ({
                        ...(prev || {}),
                        [field.name]: e.target.value,
                      }))
                    }
                    placeholder={`Please enter your ${field.label}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors[field.name] && (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
