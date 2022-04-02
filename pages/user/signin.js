import Head from "next/head";
import SignIn from "../../components/Account/SignIn";

import Menu from "./../../components/Menu/Menu";
import { useState } from "react";
import SignMePageContext from "../../context";
import SignUp from "../../components/Account/SignUp";

function Signin() {
  const [accessState, setAccessState] = useState("signIn");

  return (
    <>
      <Head>
        <title>{accessState === "signIn" ? "Sign In" : "Sign Up"}</title>
      </Head>
      <SignMePageContext.Provider value={{ accessState, setAccessState }}>
        <div className="flex flex-row justify-center items-center ">
          <Menu />
          <div className=" p-8 my-0 flex-grow mx-auto ">
            <header className="text-center">
              <h2>{accessState === "signIn" ? "Sign In" : "Sign Up"} </h2>
            </header>
            {accessState === "signUp" ? <SignUp /> : <SignIn />}
          </div>
        </div>
      </SignMePageContext.Provider>
    </>
  );
}

export default Signin;
