import { Link } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children?: string }) {
  const renderers = {
    link: Link,
  };
  return <ReactMarkdown renderers={renderers} source={children} />;
}