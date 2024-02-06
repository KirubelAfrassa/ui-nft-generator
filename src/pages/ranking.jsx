import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import RankingArea from "../containers/ranking";

// Demo data for the ranking page
import rankingData from "../data/ranking.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Top NFT" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Our Top NFTs" currentPage="Ranking" />
            <RankingArea data={{ ranking: rankingData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
