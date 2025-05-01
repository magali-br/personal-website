import "./Books.css";

function Books() {
    return (
        <div className="Books Container">
            <div>
                <p>An evergrowing list of  {" "}
                    <a
                        className="VisibleLink Link"
                        href="https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        my favourite nonfiction books
                    </a>
                    :</p>
            </div>
            <div className="GoogleDoc">
                <iframe src="https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view?embedded=true" className="GoogleDoc" width="100%" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div>
                <p>An evergrowing list of {" "}
                    <a
                        className="VisibleLink Link"
                        href="https://docs.google.com/spreadsheets/d/13D3mh1jt1iYxR1FC1Dbi0fdxguFoRBHTGjRi1_vPe7U/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        my favourite novels
                    </a>
                    :</p>
            </div>
            <div className="GoogleDoc">
                <iframe src="https://docs.google.com/spreadsheets/d/13D3mh1jt1iYxR1FC1Dbi0fdxguFoRBHTGjRi1_vPe7U/view?embedded=true" className="GoogleDoc" width="100%" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div >
    );
}

export default Books;
