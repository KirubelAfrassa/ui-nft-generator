import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "../redux/reducer";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

const moralisAppId = "yG1tgf76IvAxPdWGzlJzXkzFbqjaPSZxU3V4dIsi";
const moralisServerURL = "https://yjwwppxkcgpm.usemoralis.com:2053/server";
const store = createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
            <ThemeProvider defaultTheme="dark">
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </MoralisProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
