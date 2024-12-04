import React from "react";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";

const MarkdownRenderer = ({ content }) => {
    return <Markdown>{content}</Markdown>;
};

MarkdownRenderer.propTypes = {
    content: PropTypes.string.isRequired,
};

export default MarkdownRenderer;
