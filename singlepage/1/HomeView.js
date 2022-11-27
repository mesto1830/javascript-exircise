const HomeView = {
  render: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {'Content-Type':'application/json'}
    })
    if(!result){
      return `<div>No Data</div>`
    }
    const final = await result.json()

    return `
      ${final.map((item) => `
        <div class="list">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <a href="#/post/${item.id}">Details</a>
        </div>
        `).join('\n')
      }
    `
  }
}

export default HomeView