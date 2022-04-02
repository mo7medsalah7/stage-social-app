import gql from "graphql-tag";
import useForm from "./../../utils/useForm";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../../utils/useUser";
import InputItem from "./InputItem";
import { useContext } from "react";
import SignMePageContext from "../../context";
import Loader from "react-loader-spinner";
import router from "next/router";

const SIGN_iN_MUTATION = gql`
  mutation SIGN_iN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

function SignIn() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: "",
    password: "",
  });

  const { accessState, setAccessState } = useContext(SignMePageContext);

  const [login, { data, loading }] = useMutation(SIGN_iN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login();
    resetForm();
    router.push("/");
  };

  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <div className="ml-0">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className=" flex flex-col space-y-8"
        >
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
            label="email"
            inputName="email"
            inputType="text"
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

          <div>
            <button
              onClick={() => setAccessState("signIn")}
              className="bg-red-500 text-white p-2 w-full hover:bg-white hover:text-red-500 hover:shadow-md transform duration-300 transition-all"
            >
              Sign In
            </button>
          </div>
          <div>
            <button
              onClick={() => setAccessState("signUp")}
              className="bg-white text-red-500 p-2 w-full hover:bg-white hover:text-red-500 hover:shadow-md transform duration-300 transition-all"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex flex-col sm:justify-between md:justify-evenly text-center">
          <div className="bg-blue-400 cursor-pointer  p-2 shadow-lg">
            <span className="uppercase text-white font-semibold">
              sign in using facebook
            </span>
          </div>
          <div className="bg-white cursor-pointer  p-2 shadow-lg">
            <span className="uppercase text-red-500 font-semibold">
              sign in using google
            </span>
          </div>
          <div className="bg-gray-600 cursor-pointer  p-2 shadow-lg">
            <span className="uppercase  text-white font-semibold">
              sign in using linkedin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
