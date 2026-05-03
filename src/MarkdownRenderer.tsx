import Markdown from "markdown-to-jsx";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return <Markdown>{content}</Markdown>;
};

export default MarkdownRenderer;
