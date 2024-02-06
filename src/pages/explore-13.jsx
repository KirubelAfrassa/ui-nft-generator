import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import LiveExploreArea from "../containers/live-explore/layout-02";
import LiveExploreCarouselArea from "../containers/live-explore/layout-01";

// Demo data
import productData from "../data/products-02.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => {
    const liveAuctionData = productData.filter(
        (prod) =>
            prod?.auction_date && new Date() <= new Date(prod?.auction_date)
    );
    return (
        <Wrapper>
            <SEO pageTitle="Live With Place Bid" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Live With Place Bid"
                    currentPage="Live With Place Bid"
                />
                <LiveExploreArea
                    data={{
                        products: liveAuctionData.slice(0, 5),
                        placeBid: true,
                    }}
                />
                <LiveExploreCarouselArea
                    data={{
                        section_title: {
                            title: "Live Bidding With Carousel",
                        },
                        products: liveAuctionData,
                        placeBid: true,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
