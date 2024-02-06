import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ConnectArea from "../containers/connect";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Connect = () => (
    <Wrapper>
        <SEO pageTitle="Connect" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Make your payment easier"
                currentPage="Make your payment easier"
            />
            <ConnectArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Connect;
