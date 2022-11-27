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
<button>Details</button>
<p id="details">Details button works</p>
<h1></h1>
<img src="" alt=""></img>
<div>
  <p><slot name="date"/></p>
  <p><slot name="address"/></p>
</div>
`;

class TestHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //add h1 content
    this.shadowRoot.querySelector("h1").innerHTML = this.getAttribute("title");
    this.shadowRoot.querySelector("img").src = this.getAttribute("poster");

    this.showDetails = false
  }
  //event
  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.showDetails = !this.showDetails
      if (this.showDetails) {
        this.shadowRoot.getElementById('details').style.display = 'block'
      } else {
        this.shadowRoot.getElementById('details').style.display = 'none'
      }
    });
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click")
  }
}

window.customElements.define("test-header", TestHeader);
