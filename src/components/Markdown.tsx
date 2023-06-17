import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


const dark =  {
  "code[class*=\"language-\"]": {
    "color": "white",
    "background": "none",
    "textShadow": "0 -.1em .2em black",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "white",
    "background": "hsl(30, 20%, 25%)",
    "textShadow": "0 -.1em .2em black",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "border": ".3em solid hsl(30, 20%, 40%)",
    "borderRadius": ".5em",
    "boxShadow": "1px 1px .5em black inset"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "hsl(30, 20%, 25%)",
    "padding": ".15em .2em .05em",
    "borderRadius": ".3em",
    "border": ".13em solid hsl(30, 20%, 40%)",
    "boxShadow": "1px 1px .3em -.1em black inset",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "hsl(30, 20%, 50%)"
  },
  "prolog": {
    "color": "hsl(30, 20%, 50%)"
  },
  "doctype": {
    "color": "hsl(30, 20%, 50%)"
  },
  "cdata": {
    "color": "hsl(30, 20%, 50%)"
  },
  "punctuation": {
    "Opacity": ".7"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "hsl(350, 40%, 70%)"
  },
  "tag": {
    "color": "hsl(350, 40%, 70%)"
  },
  "boolean": {
    "color": "hsl(350, 40%, 70%)"
  },
  "number": {
    "color": "hsl(350, 40%, 70%)"
  },
  "constant": {
    "color": "hsl(350, 40%, 70%)"
  },
  "symbol": {
    "color": "hsl(350, 40%, 70%)"
  },
  "selector": {
    "color": "hsl(75, 70%, 60%)"
  },
  "attr-name": {
    "color": "hsl(75, 70%, 60%)"
  },
  "string": {
    "color": "hsl(75, 70%, 60%)"
  },
  "char": {
    "color": "hsl(75, 70%, 60%)"
  },
  "builtin": {
    "color": "hsl(75, 70%, 60%)"
  },
  "inserted": {
    "color": "hsl(75, 70%, 60%)"
  },
  "operator": {
    "color": "hsl(40, 90%, 60%)"
  },
  "entity": {
    "color": "hsl(40, 90%, 60%)",
    "cursor": "help"
  },
  "url": {
    "color": "hsl(40, 90%, 60%)"
  },
  ".language-css .token.string": {
    "color": "hsl(40, 90%, 60%)"
  },
  ".style .token.string": {
    "color": "hsl(40, 90%, 60%)"
  },
  "variable": {
    "color": "hsl(40, 90%, 60%)"
  },
  "atrule": {
    "color": "hsl(350, 40%, 70%)"
  },
  "attr-value": {
    "color": "hsl(350, 40%, 70%)"
  },
  "keyword": {
    "color": "hsl(350, 40%, 70%)"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "deleted": {
    "color": "red"
  }
};
export default function Markdown({ content }: { content: string  }) {
  return <ReactMarkdown className="text-black w-full max-w-none prose-img:rounded prose-sm sm:prose-base lg:prose-lg xl:prose-2xl px-3 prose-img:w-full prose-img:h-full prose-img:border-4 prose-img:border-black prose prose-headings:text-black prose-a:text-blue-900 prose-a:no-underline hover:prose-a:text-blue-700 prose-table:table-auto prose-p:w-full" components={{
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, '')}
          style={dark}
          customStyle={{
            backgroundColor: "ButtonShadow",
            borderColor: "ButtonFace"
          }}
          language={match[1]}
          PreTag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      )
    }
  }}>{content}</ReactMarkdown>;
}
