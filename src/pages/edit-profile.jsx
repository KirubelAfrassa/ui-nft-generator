import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";
import Breadcrumb from "../components/breadcrumb";
import EditProfileArea from "../containers/edit-profile";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const EditProfile = () => (
    <Wrapper>
        <SEO pageTitle="Edit Profile" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Edit Profile" currentPage="Edit Profile" />
            <EditProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default EditProfile;
