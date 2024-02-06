import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import AuthorIntroArea from "../containers/author-intro";
import AuthorProfileArea from "../containers/author-profile";

// Demo data
import authorData from "../data/author.json";
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <AuthorIntroArea data={authorData} />
            <AuthorProfileArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Author;
