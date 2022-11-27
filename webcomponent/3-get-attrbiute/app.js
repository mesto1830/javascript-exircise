const template = document.createElement('template')
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
</style>
<h1></h1>
<img src="" alt=""></img>
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