const Editor1 = () => {
    return (
        <div className="form-wrapper-one">
            <h4>Start Project</h4>
            <form>
                <div className="mb-5">
                    <label htmlFor="exampleForName" className="form-label">
                        Collection Name
                    </label>
                    <input
                        type="text"
                        id="exampleForName"
                        name="exampleInputEmail1"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="exampleForDescription"
                        className="form-label"
                    >
                        Description
                    </label>
                    <textarea
                        id="exampleForDescription"
                        name="exampleInputPassword1"
                    />
                </div>
            </form>
        </div>
    );
};

export default Editor1;
