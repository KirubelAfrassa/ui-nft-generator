import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Button from "../components/ui/button";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ErrorPage = () => (
    <Wrapper>
        <SEO pageTitle="404" />
        <Header />
        <div className="rn-not-found-area rn-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-not-found-wrapper">
                            <h2 className="large-title">404</h2>
                            <h3 className="title">Page not found!</h3>
                            <p>The page you are looking for not available.</p>
                            <Button path="/">Go Back To Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </Wrapper>
);

export default ErrorPage;
