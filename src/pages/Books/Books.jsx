import "./Books.css";

function Books() {
    return (
        <div className="Books Container">
            <div>
                <p>Here is an evergrowing list of my favourite nonfiction books (->{" "}
                    <a
                        className="BoldUnderlined Link"
                        href="https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        link to the spreadsheet
                    </a>
                    ).</p>
            </div>
            <div className="GoogleDoc">
                <iframe src="https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view?embedded=true" className="GoogleDoc" width="100%" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div >
    );
}

export default Books;
