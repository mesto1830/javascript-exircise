class TestHeader extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = '<h3>Test Component</h3>'
  }
}

window.customElements.define('test-header', TestHeader)