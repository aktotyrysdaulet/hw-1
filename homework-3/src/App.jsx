import './App.css'
import Article from "./components/Article.jsx";

function App() {
  const articles = [
    {
      title: "Breaking news 1",
      content: "Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 Kairat wins! 1 ",
      author: "Aktoty Rysdaulet 1",
      publishedDate: new Date().toDateString()
    },
    {
      title: "Breaking news 2",
      content: "Kairat wins! 2",
      author: "Aktoty Rysdaulet 2",
      publishedDate: new Date().toDateString()
    },
    {
      title: "Breaking news 3",
      content: "Kairat wins! 3",
      author: "Aktoty Rysdaulet 3",
      publishedDate: new Date().toDateString()
    },
  ]
  return (
    <>
      {articles.map(article => (
        <Article key={article.title} title={article.title} author={article.author}
        content={article.content} publishedDate={article.publishedDate} />
      ))}
    </>
  )
}

export default App
