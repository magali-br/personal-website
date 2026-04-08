import "./Coaching.css";
// import Calendar from "./Calendar";

function Coaching() {
  const fictionBooksSheetEmbedUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSd6t-RtpoJajc7flzHLep92ICEs2UvaOvpqUlUOK92pgkBLVw/viewform?embedded=true";
  // "https://docs.google.com/spreadsheets/d/e/2PACX-1vSA4l-8bGV6y4HgU12-lJlF8-WN9_zPYzw4FfVk34zDvqzsAfaqthfIitOPbcs0soXC6EPaunaU88vx/pubhtml?widget=true&amp;headers=false";

  return (
    <div className="Coaching Container">
      <h1 className="Subtitle">What is coaching?</h1>
      <div className="TextContent">
        <b>
          Coaching is a space for you to reflect, process, and express
          yourself.{" "}
        </b>
        It amplifies your voice and helps surface what is already inside of you.{" "}
        <b>
          It gives you the tools to design and step into a life that you
          actually want, to unblock yourself, and to pursue your dreams.
        </b>
        <p>
          I am passionate about the coaching modality because I don't think any
          of us need to be told what to do, and I know that for change to last,
          it must come from within.
        </p>
        <p>
          <b>Coaching is not mentoring</b>: as a coach, I never assume that the
          solutions that worked for me are going to work with you. However, I
          may sometimes ask for permission to put on my mentor hat if I feel
          that sharing my past experience could be useful to you.
        </p>
        <p>
          <b>Coaching is not therapy</b>: I am not a licensed therapist, and I
          cannot take on that responsibility. However, coaching can be a great
          companion to therapy because it empowers us and gives us agency over
          our life. I have experienced a lot of mental health setbacks in my
          life, and coaching is what gave me the tools to finally pull myself
          forwards.
        </p>
        <p>
          Our coaching sessions together will involve a lot of talking and
          digging deep into what's going on in your life, heart, gut, and mind.
          If you're open to it, we might also try visualizations, meditations,
          or grounding dance and movement practices. But you get to decide every
          step of the way what feels good and what you need and want.
        </p>
        <img
          className="CoachingImageHorizontal"
          src={"/img/walking_through_iceland_enhanced.jpg"}
          alt={"A photo of Magali walking down a road towards the horizon."}
        />
      </div>
      <h1 className="Subtitle">My vision</h1>
      <div className="TextContent">
        I founded my coaching business with a big mission. I dream of a world in
        which empathy is the norm, and in which we recognize every one of our
        strengths and celebrate every difference.{" "}
        <p>
          <b>
            I want every person on this planet to:
            <ul>
              <li>wholeheartedly embrace who they are</li>
              <li>feel safe and deserving enough to share it with the world</li>
              <li>create and step into their own unique path</li>
              <li>pursue their passions and live with purpose</li>{" "}
            </ul>
          </b>
        </p>
        <p>
          For some people this comes easy; for many others, it doesn't. I think
          of those of us who are highly sensitive or neurodivergent and were
          always made to feel we were "too much". Of those of us in oppressive
          cultures or societies, who face threats simply for being who they are
          or loving who they do. But this is the world I dream of.{" "}
        </p>
      </div>

      <h1 className="Subtitle">Interested?</h1>
      <div className="TextContent">
        If you'd like to try working with me as a coach, fill out the following
        form (
        <a
          className="VisibleLink Link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6t-RtpoJajc7flzHLep92ICEs2UvaOvpqUlUOK92pgkBLVw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          external link
        </a>
        ):
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd6t-RtpoJajc7flzHLep92ICEs2UvaOvpqUlUOK92pgkBLVw/viewform?embedded=true"
        width="100%"
        height="800"
        style={{ border: "none" }}
      >
        Loading…
      </iframe>
      <p></p>
      <div className="TextContent">
        You can also message me on{" "}
        <a
          className="VisibleLink Link"
          href="https://www.linkedin.com/in/magali-br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          className="VisibleLink Link"
          href="https://www.instagram.com/offbeatcoaching/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </div>
      {/* <h1 className="Subtitle">Interested?</h1>
      <div className="flex flex-col items-center justify-start flex-grow w-full px-[8%] mt-[92px]">
        <iframe
          src="https://tidycal.com/magalibr/intro-call"
          width="100%"
          height="800px"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="TextContent">
        You can also message me on{" "}
        <a
          className="VisibleLink Link"
          href="https://www.instagram.com/offbeatcoaching/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </div> */}
      {/* <h2 className="Subsubtitle">Coaching is... witnessing.</h2>
      <div className="TextContent">
        I spent so long repressing so many parts of me that in order to heal, I
        needed to welcome back everything I had labelled as negative: all my
        dark or "wrong" emotions, my indecisiveness, my needs, my frustrations
        with my life. But there were times when I couldn't move forward alone.
        When I needed someone to hear me, witness what I'd been through, and
        feel the pain with me. I've been through a lot, but I wasn't able to
        validate that in myself until my coach did.
      </div>
      <h2 className="Subsubtitle">Coaching is... freeing.</h2>
      <div className="TextContent">
        My vision is for every single one of us to set ourselves free from any
        expectations that are causing us pain - society's, our family's, our
        job's, our inner critic's. I help my clients distinguish between what
        they actually want and what they think they want; to hear what their
        heart and gut are actually saying, underneath all the noise. Because
        it's a noisy world we live in, and as empaths, our own voice gets
        drowned out.
      </div>
      <h2 className="Subsubtitle">Coaching is... empowering.</h2>
      <div className="TextContent">
        Coaching empowers you to design and create a life that you want and to
        generate your own solutions. I hold space for you to dig deep within
        yourself and come up with ideas and solutions that fit you on a
        fundamental level.
      </div>
      <h2 className="Subsubtitle">Coaching is... mentoring (sometimes).</h2>
      <div className="TextContent">
        As your coach, I might sometimes mentor you and something I think might
        help, but I always ask you to be radically honest about how my idea sits
        with you. Once we find an idea that feels good, I'll ask you to
        experiment with implementing them and come back and tell me what worked
        and what didn't so that we can dig even deeper and find paths that
        really work for you.
      </div>
      <h2 className="Subsubtitle">Coaching is... changing.</h2>
      <div className="TextContent">
        Coaching is about digging deep into how you see yourself and any
        limiting beliefs you hold about yourself or the world. If you choose it,
        this allows you to rewrite how you see yourself and how you interact
        with the world. Awareness is always the first step to change... and
        sometimes it's enough.
      </div> */}
    </div>
  );
}

export default Coaching;
