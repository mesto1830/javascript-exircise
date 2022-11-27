const template = document.createElement("template");
template.innerHTML = `
<style>
@import url('http://${location.host}/movi-card/components/header/header.css')
</style>
<header>Javascript Web Componenta</header>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-header", AppHeader);