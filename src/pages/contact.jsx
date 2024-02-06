import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ContactTopArea from "../containers/contact-top";
import ContactFormArea from "../containers/contact-form";
import GoogleMapArea from "../containers/google-map";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = () => (
    <Wrapper>
        <SEO pageTitle="Contact" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Contact With Us"
                currentPage="Contact With Us"
            />
            <ContactTopArea />
            <ContactFormArea />
            <GoogleMapArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Contact;
