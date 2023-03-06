import GlobalStyle from "../styles";
import Header from "../components/Header";
import { LargeContextProvider } from "../context/LargeConext";

import Main from "../components/Main";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <LargeContextProvider>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </LargeContextProvider>
    </>
  );
}
