import React, { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     TidyCal: any;
//   }
// }

// function CalendarEmbed() {
//   const embedRef = useRef < HTMLDivElement > null;

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://asset-tidycal.b-cdn.net//js/embed.js";
//     script.async = true;
//     script.onload = () => {
//       // window.TidyCal.init(embedRef.current);
//     };

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [embedRef.current]);

//   return (
//     <div
//       id="tidycal-embed"
//       data-path={"offbeatcoaching/15-minute-meeting"}
//       ref={embedRef}
//     />
//   );
// }

// const CalendarEmbed = (url) => {
//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url]);
// };

const calendarWidgetScript = "calendarWidgetScript";
const calendarDivId = "calendarForm";

const Calendar = ({ minWidth, height, url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("id", calendarWidgetScript);
    script.setAttribute("src", "https://asset-tidycal.b-cdn.net/js/embed.js");
    head.appendChild(script);

    return () => {
      if (document.getElementById(calendarWidgetScript) && head) {
        const script = document.getElementById(calendarWidgetScript);
        script?.remove();
        const calendar = document.getElementById(calendarDivId);
        calendar?.remove();
      }
    };
  }, []);

  return (
    <div id={calendarDivId}>
      <div
        className="tidycal-embed"
        data-url={url}
        style={{ minWidth, height }}
      />
    </div>
  );
};

export default Calendar;
