import  { useState } from 'react'
import './s.css'
import Markdown from './Markdown'
import  ReactMarkdown  from 'react-markdown'
export default function LiveMarkdown() {
  const [markdownInput, setMarkdownInput] = useState('')
  return (
    <div className="App">
      <div className="wrapper">
        <div className="head text-black">
       
          MARKDOWN
        </div>
        <textarea
          autoFocus
          className="textarea"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.currentTarget.value)}
/>
      </div>
      <div className="wrapper text-black">
        <div className="head">

          PREIVEW
        </div >
      <Markdown content={markdownInput} />
      {/* <ReactMarkdown
          children={markdownInput}

        /> */}
      </div>
    </div>
  )
}
