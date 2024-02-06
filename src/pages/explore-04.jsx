import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ExploreProductArea from "../containers/explore-product/layout-08";

// Demo data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore Simple" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Explore Simple" currentPage="Simple" />
            <ExploreProductArea
                data={{
                    products: productData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
