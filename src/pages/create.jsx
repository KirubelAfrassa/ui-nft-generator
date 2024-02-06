import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import CreateNewArea from "../containers/create-new";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => (
    <Wrapper>
        <SEO pageTitle="Create New" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Create New File" />
            <CreateNewArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
