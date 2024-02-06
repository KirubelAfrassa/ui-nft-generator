import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import ExploreCarouselArrowArea from "../containers/explore-product/layout-05";
import ExploreCarouselDotsArea from "../containers/explore-product/layout-06";
import ExploreCarouselBothArea from "../containers/explore-product/layout-07";

// Demo data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore Carousel" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Place Bid With Carousel"
                currentPage="Place Bid With Carousel"
            />
            <ExploreCarouselArrowArea
                space={2}
                data={{
                    section_title: {
                        title: "Explore Carousel With Arrow",
                    },
                    products: productData.slice(0, 8),
                    placeBid: true,
                }}
            />
            <ExploreCarouselDotsArea
                space={3}
                data={{
                    section_title: {
                        title: "Explore Carousel Dots",
                    },
                    products: productData.slice(0, 8),
                    placeBid: true,
                }}
            />
            <ExploreCarouselBothArea
                space={4}
                data={{
                    section_title: {
                        title: "Explore Carousel Both",
                    },
                    products: productData.slice(0, 8),
                    placeBid: true,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
