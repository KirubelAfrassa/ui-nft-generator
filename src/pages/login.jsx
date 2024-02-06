import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import LoginArea from "../containers/login";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Login = () => (
    <Wrapper>
        <SEO pageTitle="Log In" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Nft Guru Login"
                currentPage="Nft Guru Login"
            />
            <LoginArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Login;
