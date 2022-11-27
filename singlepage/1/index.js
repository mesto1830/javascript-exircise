import { urlParse } from "./util.js";
import HomeView from './HomeView.js'
import DetailView from './DetailView.js'
import NotFound from './Notfound.js';

const routes  = {
  '/':HomeView,
  '/post/:id':DetailView
}

const router = async () => {
  const request = urlParse()
  const url = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '')
  const view = routes[url] ? routes[url] : NotFound
  document.getElementById('app').innerHTML = await view.render()
}

window.addEventListener('load',router)
window.addEventListener('hashchange',router)