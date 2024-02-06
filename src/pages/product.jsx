import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ProductArea from "../containers/explore-product/layout-01";

// Demo Data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Product" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Our Product" currentPage="Our Product" />
            <ProductArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
