const template1 = document.createElement("template");
template1.innerHTML = `
<style>
@import url('http://${location.host}/movi-card/components/card/card.css')
</style>
<div class="movie-container">
  <div class="image-container">
    <img />
  </div>
  <div class="info">
    <h3 class="title"></h3>
    <p>
      <slot />
    </p>
    <div class="action_container">
    <i class="fa fa-heart isFavorite"></i>
      <a target="_blank" class="button">IMBD</a>
    </div>
  </div>
</div>
`;

class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template1.content.cloneNode(true));

    setTimeout(() => {
      this.shadowRoot.querySelector('h3.title').innerHTML = this.getAttribute('title')
      this.shadowRoot.querySelector('img').src = this.getAttribute('poster')
      this.shadowRoot.querySelector('.button').setAttribute('href', `https://imdb.com/title/${this.getAttribute('imdbID')}`)

      if(this.getAttribute('isFavorite') == 'true'){
        this.shadowRoot.querySelector('.isFavorite').classList.add('is_Favorite')
      }
    }, 100);
    const isFavorite = false
  }
  //event
  connectedCallback() {
    this.shadowRoot.querySelector(".isFavorite").addEventListener("click", () => {
      this.isFavorite = !this.isFavorite
      if (this.isFavorite == false) {
        this.shadowRoot.querySelector('.isFavorite').classList.add('is_Favorite')
      } else {
        this.shadowRoot.querySelector('.isFavorite').classList.remove('is_Favorite')
      }
    });
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector(".isFavorite").removeEventListener("click")
  }
}

window.customElements.define("app-card", AppCard);