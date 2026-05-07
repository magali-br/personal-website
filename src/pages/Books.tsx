export const Books = () => {
  const nonFictionBooksSheetShareUrl =
    "https://docs.google.com/spreadsheets/d/11qa-sXCDfMki8rj4OEC3aWGPZcHtS7Ka9keVDM9krj0/view";
  const nonFictionBooksSheetEmbedUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ2nXgRanaeo6HCcP2VSZYpTjPPU4OwcRWd8rvb_bSr4z8H7tIiQfRAIgKky8pNIdNNLk43dR21YeC/pubhtml?widget=true&amp;headers=false";
  const fictionBooksSheetShareUrl =
    "https://docs.google.com/spreadsheets/d/13D3mh1jt1iYxR1FC1Dbi0fdxguFoRBHTGjRi1_vPe7U/view";
  const fictionBooksSheetEmbedUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSA4l-8bGV6y4HgU12-lJlF8-WN9_zPYzw4FfVk34zDvqzsAfaqthfIitOPbcs0soXC6EPaunaU88vx/pubhtml?widget=true&amp;headers=false";

  return (
    <div className="Container">
      <p>
        I love to read, both fiction and nonfiction. As a child, I devoured
        books. I have always loved stories, words, the ability each one of us
        has to express something in our own unique way. When I became an adult,
        I grew afraid that I was wasting my time reading fiction, and strived to
        engage with the real world instead. This was a good goal, until it
        became a I tried to live it out 24/7. Then came the burnouts.
      </p>
      <p>
        I now understand that I actually <i>need</i> reading.
      </p>
      <p>
        Nonfiction is my favourite way to engage with new ideas: it's
        slow-paced, quiet, allows for reflection, creates space for me to engage
        deeply with the topic. But fiction soothes me, calms me down, transports
        me into lives I'll never have the chance to live. It also brings me
        emotions, excitement, and novelty in a way that real life can't compete
        with.
      </p>
      <p>
        Fiction, and well-written nonfiction, teaches us about the world:
        through storytelling, through other people's errors and explorations,
        we, too, grow and gather experience we can use to choose how to interact
        with the world.{" "}
      </p>
      <p>
        Here is my evergrowing list of{" "}
        <a
          className="VisibleLink Link"
          href={nonFictionBooksSheetShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          favourite nonfiction books
        </a>
        :
      </p>
      <div className="w-full">
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
      <p>
        And here's my terribly incomplete, evergrowing list of{" "}
        <a
          className="VisibleLink Link"
          href={fictionBooksSheetShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          favourite works of fiction
        </a>{" "}
        (mostly novels) :
      </p>
      <div className="w-full">
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
};
