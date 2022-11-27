import { urlParse } from './util.js'
import Comments  from './components/Comments.js'

const getDetail = async (id) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if(result){
    const final = result.json()
    return final
  }
}

const getComment = async (id) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  if(result){
    const final = result.json()
    return final
  }
}

const DetailView = {
  render: async () => {
    const request = urlParse()
    const detail = await getDetail(request.id)
    const commentsLength = await getComment(request.id)
    return `
    <h3>${detail.title}</h3>
    <p>${detail.body}</p>
    <h2>${Comments.render({value:commentsLength.length})}</h2>
    `
  }
}

export default DetailView