import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ProductArea from "../containers/product/layout-02";

// Demo data
import productData from "../data/products-02.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore List Column Two" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore Style Column Two"
                currentPage="Explore Style Column Two"
            />
            <ProductArea
                data={{
                    section_title: {
                        title: "OUR All NFT'S",
                    },
                    products: productData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
