const Comments = {
  render: (props) => {
    if(!props.value){
      return '<div></div>'
    }
    return `
      <div>
        <span>${props.value ? `<p>Populer</p>` : `<p>Not Populer</p>`} : </span>
      </div>
    `
  }
}

export default Comments