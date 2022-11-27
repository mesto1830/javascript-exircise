const template = document.createElement('template')
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
</style>
<h1></h1>
`

class TestHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))

    //add h1 content
    this.shadowRoot.querySelector('h1').innerHTML = 'Shadow Component'
  }
}

window.customElements.define('test-header', TestHeader)