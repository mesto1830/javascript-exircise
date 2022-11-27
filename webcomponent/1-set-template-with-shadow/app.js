const template = document.createElement('template')
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
</style>
<h1>Shadow Component</h1>
`

class TestHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))
  }
}

window.customElements.define('test-header', TestHeader)