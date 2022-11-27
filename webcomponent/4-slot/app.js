const template = document.createElement('template')
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
  div{
    width:610px;
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
  }
</style>
<h1></h1>
<img src="" alt=""></img>
<div>
  <slot />
</div>
`

class TestHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))

    //add h1 content
    this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('title')
    this.shadowRoot.querySelector('img').src = this.getAttribute('poster')
  }
}

window.customElements.define('test-header', TestHeader)