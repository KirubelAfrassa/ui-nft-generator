import Breadcrumb from "../components/nft-breadcrumb";
import Editor from "@containers/nft";

import React from "react";

import SEO from "../components/seo";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/header-01";
import Footer from "../layouts/footer/footer-01";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const nft = () => (
    <Wrapper>
        <SEO pageTitle="Editor" />
        <Header />
        <br />
        <Editor />

        <Footer />
    </Wrapper>
);

export default nft;
