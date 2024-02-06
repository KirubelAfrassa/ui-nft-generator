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
        <SEO pageTitle="Explore With Place Bid" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore With Place Bid"
                currentPage="Explore With Place Bid"
            />
            <ExploreProductArea
                data={{
                    products: productData.slice(0, 10),
                    placeBid: true,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
