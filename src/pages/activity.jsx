import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import ActivityArea from "../containers/activity";

// Demo Data
import activityData from "../data/activity.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => (
    <Wrapper>
        <SEO pageTitle="Acivity" />
        <Header />
        <main id="main-content">
            <ActivityArea data={{ activities: activityData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
