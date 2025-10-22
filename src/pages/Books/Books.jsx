import "./Books.css";

function Books() {
  const nonFictionBooksSheetShareUrl =
    "https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view";
  const nonFictionBooksSheetEmbedUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ2nXgRanaeo6HCcP2VSZYpTjPPU4OwcRWd8rvb_bSr4z8H7tIiQfRAIgKky8pNIdNNLk43dR21YeC/pubhtml?widget=true&amp;headers=false";
  const fictionBooksSheetShareUrl =
    "https://docs.google.com/spreadsheets/d/13D3mh1jt1iYxR1FC1Dbi0fdxguFoRBHTGjRi1_vPe7U/view";
  const fictionBooksSheetEmbedUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSA4l-8bGV6y4HgU12-lJlF8-WN9_zPYzw4FfVk34zDvqzsAfaqthfIitOPbcs0soXC6EPaunaU88vx/pubhtml?widget=true&amp;headers=false";

  return (
    <div className="Books Container">
      <div>
        <p>
          An evergrowing list of{" "}
          <a
            className="VisibleLink Link"
            href={nonFictionBooksSheetShareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            my favourite nonfiction books
          </a>
          :
        </p>
      </div>
      <div className="w-full GoogleDoc">
        <iframe
          src={nonFictionBooksSheetEmbedUrl}
          width="100%"
          height="350px"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        >
          Loading...
        </iframe>
      </div>
      <div>
        <p>
          An evergrowing list of{" "}
          <a
            className="VisibleLink Link"
            href={fictionBooksSheetShareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            my favourite novels
          </a>
          :
        </p>
      </div>
      <div className="w-full GoogleDoc">
        <iframe
          src={fictionBooksSheetEmbedUrl}
          width="100%"
          height="350px"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default Books;
