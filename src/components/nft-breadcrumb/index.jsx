import PropTypes from "prop-types";
import clsx from "clsx";

const Breadcrumb = ({
    pageTitle,
    currentPage,
    className,
    space,
    sliderIndex,
}) => (
    <div
        className={clsx(
            "nft-rn-breadcrumb-inner",
            className,
            space === 1 && "ptb--30"
        )}
    >
        <div className="container">
            <div className="row align-items-center d-flex flex-column">
                <div className="col-lg-6 col-md-6 col-12">
                    <h5 className="pageTitle text-center text-md-start">
                        {pageTitle}
                    </h5>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <ul className="breadcrumb-list">
                        <li
                            className={
                                sliderIndex === 0 ? "item current" : "item "
                            }
                        >
                            Metadata
                        </li>

                        <li className="separator">
                            <i className="feather-chevron-right" />
                        </li>

                        <li
                            className={
                                sliderIndex === 1 ? "item current" : "item "
                            }
                        >
                            Assets
                        </li>

                        <li className="separator">
                            <i className="feather-chevron-right" />
                        </li>

                        <li
                            className={
                                sliderIndex === 2 ? "item current" : "item "
                            }
                        >
                            Preview
                        </li>

                        <li className="separator">
                            <i className="feather-chevron-right" />
                        </li>

                        <li
                            className={
                                sliderIndex === 3 ? "item current" : "item "
                            }
                        >
                            Generate
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

Breadcrumb.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    currentPage: PropTypes.string,
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

Breadcrumb.defaultProps = {
    space: 1,
};

export default Breadcrumb;
