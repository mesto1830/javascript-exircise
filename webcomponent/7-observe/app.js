const template = document.createElement("template");
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
  #details{
    width:610px;
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
    display:none;
  }
</style>
<h1></h1>

`;

class TestHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //add h1 content
    this.shadowRoot.querySelector("h1").innerHTML = this.getAttribute("theme");
  }
  //observe
  static get observedAttributes(){
    return ['theme']
  }
  attributeChangedCallback(name, oldValue, newValue){
    console.table({name, oldValue, newValue})
  }
}

window.customElements.define("test-header", TestHeader);
