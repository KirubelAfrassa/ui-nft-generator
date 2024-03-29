import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ServiceArea from "../containers/services/layout-01";
import SupportArea from "../containers/support";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Support = () => (
    <Wrapper>
        <SEO pageTitle="Support" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Support Center"
                currentPage="Support Center"
            />
            <ServiceArea />
            <SupportArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Support;
