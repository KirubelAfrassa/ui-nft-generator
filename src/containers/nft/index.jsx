import Breadcrumb from "../../components/nft-breadcrumb";
import Editor1 from "../../components/nft/editor1";
import Editor2 from "../../components/nft/editor2";
import Editor3 from "../../components/nft/editor3";
import Footer from "../../components/nft/footer";

import React, { useState } from "react";

const index = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const increment = () => {
        setSlideIndex(slideIndex + 1);
    };

    const decrement = () => {
        setSlideIndex(slideIndex - 1);
    };

    return (
        <div>
            <Breadcrumb
                pageTitle="Nft Generate Editor"
                currentPage="Nft Generate Editor"
                sliderIndex={slideIndex}
            />

            <div
                className="col-lg-12 col-md-12 col-sm-12 col-12 sal-animate"
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
            >
                <div className="rn-address">
                    <div style={{ display: slideIndex === 0 ? " " : "none" }}>
                        <Editor1 />
                    </div>

                    <div style={{ display: slideIndex === 1 ? " " : "none" }}>
                        <Editor2 />
                    </div>

                    <div style={{ display: slideIndex === 2 ? " " : "none" }}>
                        <Editor3 />
                    </div>
                </div>

                <Footer
                    onClickIncrement={increment}
                    onClickDecrement={decrement}
                    sliderIndex={slideIndex}
                />
            </div>
        </div>
    );
};

export default index;
