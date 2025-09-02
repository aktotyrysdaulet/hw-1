import './Article.css'
import {useState} from "react";

function Article({ title, author, content, publishedDate }) {
  const [contentText, setContentText] = useState(content.slice(0, 100))

  return (
    <div className="article_card">
      <h1>{title}</h1>
      <div>{contentText}
        {contentText.length !== content.length && (
          <a onClick={() => setContentText(content)}> show more </a>
        )}
      </div>
      <div>
        <p>{author}, <small>{publishedDate}</small></p>
      </div>
    </div>
  )
}

export default Article
