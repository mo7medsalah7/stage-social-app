import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import withData from "../utils/withData";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withData(MyApp);
