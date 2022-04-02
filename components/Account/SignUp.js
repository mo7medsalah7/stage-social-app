import InputItem from "./InputItem";
import useForm from "./../../utils/useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Loader from "react-loader-spinner";

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
  ) {
    createUser(
      data: { email: $email, username: $username, password: $password }
    ) {
      id
      email
    }
  }
`;

function SignUp() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { loading, error, data }] = useMutation(
    SIGN_UP_MUTATION,
    {
      variables: inputs,
    }
  );

  const handleSubmit = async () => {
    const res = await registerUser();
    resetForm();

    console.log(res);
  };

  return (
    <div>
      <form
        className=" flex flex-col space-y-8 lg:w-4/6 mx-auto"
        onSubmit={handleSubmit}
        method="POST"
      >
        {data ? <quote>Signed Up with ${data?.createUser.email}</quote> : null}
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : null}

        <InputItem
          label="username"
          inputName="username"
          inputType="text"
          inputValue={inputs.username}
          handleChange={handleChange}
        />
        <InputItem
          label="email"
          inputName="email"
          inputType="email"
          inputValue={inputs.email}
          handleChange={handleChange}
        />

        <InputItem
          label="password"
          inputName="password"
          inputType="password"
          inputValue={inputs.password}
          handleChange={handleChange}
        />
        <InputItem
          label="confirmPassword"
          inputName="confirmPassword"
          inputType="password"
          inputValue={inputs.confirmPassword}
          handleChange={handleChange}
        />

        <div>
          <button
            onClick={() => setAccessState("signIn")}
            className="bg-red-500 text-white p-2 w-full hover:bg-white hover:text-red-500 hover:shadow-md transform duration-300 transition-all"
          >
            Register
          </button>
        </div>
        <div>
          <button
            onClick={() => setAccessState("signUp")}
            className="bg-red-500 text-white p-2 w-full hover:bg-white hover:text-red-500 hover:shadow-md transform duration-300 transition-all"
          >
            Have An Account? Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
