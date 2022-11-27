function allowDrop(e) {
  e.preventDefault()
}

const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id)
}

let loadFile = function (image) {
  let parentElement = document.createElement('div')
  parentElement.classList.add('parent-element')
  parentElement.setAttribute('onclick', 'startEditMode(event)')
  document.getElementById('tual').appendChild(parentElement)
  let img = document.createElement("img");
  img.src = URL.createObjectURL(image);
  img.classList.add('child-element', 'added-img')
  img.setAttribute('onmousedown', '')
  img.setAttribute('onclick', 'startEditMode(event)')
  img.setAttribute('ondblclick', 'editStyle(event)')
  parentElement.appendChild(img)
  initDragElement()
};

document.getElementById('file_get_image').addEventListener('change', (e) => {
  loadFile(e.target.files[0])
})

let topStyle = 0

const drop = (e) => {
  e.preventDefault()
  let ele;
  if (document.getElementById(e.dataTransfer.getData('text')) !== null) {
      let main = document.getElementById('tual')
      let parentElement = document.createElement('div')
      parentElement.classList.add('parent-element')
      parentElement.setAttribute('onclick', 'startEditMode(event)')
      parentElement.setAttribute('style', `z-index:1;top:${e.clientY - 20}px;left:${e.clientX - 20}px`)
      main.appendChild(parentElement)

      if (document.getElementById(e.dataTransfer.getData('text')).className === 'img') {
          ele = document.createElement('img')
          ele.src = document.getElementById(e.dataTransfer.getData('text')).src
          ele.classList.add('child-element', 'added-img')
      } else if (document.getElementById(e.dataTransfer.getData('text')).id === 'text') {
          ele = document.createElement('textarea')
          ele.innerText = 'Text'
          ele.classList.add('child-element', 'textarea')
      } else {
          ele = document.createElement('textarea')
          ele.innerText = document.getElementById(e.dataTransfer.getData('text')).innerText
          ele.classList.add('child-element', 'textarea')
      }
      ele.setAttribute('onmousedown', '')
      ele.setAttribute('onclick', 'startEditMode(event)')
      ele.setAttribute('ondblclick', 'editStyle(event)')
      parentElement.appendChild(ele)

      if (window.scrollY > 100) {
          parentElement.style.top = e.clientY + 'px'
      } else {
          parentElement.style.top = (e.clientY-document.getElementById('container').offsetTop)-ele.offsetHeight + 'px'
      }
      parentElement.style.left = (e.clientX-main.offsetLeft)-(main.offsetWidth-ele.offsetWidth) + 'px'
      initDragElement()

  }
}

//navbar-------------------------------------------------------------
let topElement = null
const checkTopElement = () => {
  if (topElement === null) {
      document.querySelectorAll('.input').forEach(item => {
          if (item.type !== 'file') {
              item.setAttribute('disabled', 'true')
          }
      })
  }
}
checkTopElement()

const startEditMode = e => {
  e.stopPropagation()
  e.target.style.outline = '2px dotted #666'
}
//exit editmode
document.getElementById('right').addEventListener('click', (e) => {
  document.querySelectorAll('.child-element').forEach(item => {
      item.style.outline = 'none'
      item.parentElement.style.outline = 'none'
  })
  topElement = null
  checkTopElement()
})
//tools
const editStyle = (e) => {
  const inputElements = document.querySelectorAll('.input')
  inputElements.forEach(item => {
      item.removeAttribute('disabled', 'false')
  })
  topElement = e
  topElement.target.parentElement.style.outline = '2px dotted #444'
  topElement.target.style.outline = '2px dotted red'

  let fi = document.getElementById('font-italic')
  let fn = document.getElementById('font-nor')
  let fb = document.getElementById('font-bold')
  let ft = document.getElementById('font-type')
  let fs = document.getElementById('font-size')
  let fc = document.getElementById('font-color')
  let fonl = document.getElementById('font-left')
  let fonc = document.getElementById('font-center')
  let fonr = document.getElementById('font-right')
  let bg = document.getElementById('bgc-color')
  let nobg = document.getElementById('no-bgc-color')
  let pdl = document.getElementById('padding-left')
  let pdt = document.getElementById('padding-top')
  let pdr = document.getElementById('padding-right')
  let pdb = document.getElementById('padding-bottom')
  let pdall = document.getElementById('padding-all')
  let brw = document.getElementById('border-width')
  let brc = document.getElementById('border-color')
  let brs = document.getElementById('border-style')
  let brd = document.getElementById('border-radius')
  let opacity = document.getElementById('opacity')
  let static = document.getElementById('static')
  let itemLeft = document.getElementById('item-left')
  let itemCenter = document.getElementById('item-center')
  let itemRight = document.getElementById('item-right')
  let objectFit = document.getElementById('object-fit')
  fs.focus()
  fs.addEventListener('change', (e) => {
      topElement.target.style.fontSize = fs.value + 'px'
      if (e.key === 'Enter') {
          topElement.target.style.fontSize = fs.value + 'px'
      }
  })

  

  fi.addEventListener('click', () => {
      topElement.target.style.fontStyle = 'italic'
  })
  fn.addEventListener('click', () => {
      topElement.target.style.fontWeight = 'normal'
      topElement.target.style.fontStyle = 'normal'
  })
  fb.addEventListener('click', () => {
      topElement.target.style.fontWeight = 'bold'
  })
  ft.addEventListener('change', (e) => {
      topElement.target.style.fontFamily = e.target.value
  })
  fc.addEventListener('change', () => {
      topElement.target.style.color = fc.value
  })
  bg.addEventListener('change', () => {
      topElement.target.parentElement.style.backgroundColor = bg.value
      topElement.target.style.backgroundColor = bg.value
  })
  nobg.addEventListener('click', () => {
      topElement.target.style.backgroundColor = 'transparent'
      topElement.target.parentElement.style.backgroundColor = 'transparent'
  })
  pdl.addEventListener('change', () => {
      topElement.target.style.paddingLeft = pdl.value + 'px'
  })
  pdt.addEventListener('change', () => {
      topElement.target.style.paddingTop = pdt.value + 'px'
  })
  pdr.addEventListener('change', () => {
      topElement.target.style.paddingRight = pdr.value + 'px'
  })
  pdb.addEventListener('change', () => {
      topElement.target.style.paddingBottom = pdb.value + 'px'
  })
  pdall.addEventListener('change', () => {
      topElement.target.style.padding = pdall.value + 'px'
  })
  brw.addEventListener('change', () => {
      topElement.target.parentElement.style.borderWidth = brw.value + 'px'
  })
  brs.addEventListener('change', () => {
      topElement.target.parentElement.style.borderStyle = brs.value
  })
  brc.addEventListener('change', () => {
      topElement.target.parentElement.style.borderColor = brc.value
  })
  brd.addEventListener('change', () => {
      topElement.target.parentElement.style.borderRadius = brd.value + 'px'
  })
  trash.addEventListener('click', () => {
      topElement.target.parentElement.remove()
  })
  opacity.addEventListener('change', () => {
      topElement.target.parentElement.style.opacity = opacity.value
  })

  fonl.addEventListener('click', () => {
      topElement.target.style.textAlign = 'left'
  })
  fonc.addEventListener('click', () => {
      topElement.target.style.textAlign = 'center'
  })
  fonr.addEventListener('click', () => {
      topElement.target.style.textAlign = 'right'
  })
  static.addEventListener('click', () => {
      let staticElement = topElement.target.parentElement.classList
      if(!staticElement.contains('static')){
          staticElement.add('static')
      }
  })
  dynamic.addEventListener('click', () => {
      let staticElement = topElement.target.parentElement.classList
      if(staticElement.contains('static')){
          staticElement.remove('static')
      }
  })
  itemLeft.addEventListener('click', () => {
      topElement.target.parentElement.setAttribute('style','left:0;')
      topElement.target.parentElement.style.top = topStyle
  })
  itemCenter.addEventListener('click', () => {
      topElement.target.parentElement.setAttribute('style','left: 50%;transform: translate(-50%, 0);')
      topElement.target.parentElement.style.top = topStyle
  })
  itemRight.addEventListener('click', () => {
      topElement.target.parentElement.removeAttribute('style','left;')
      topElement.target.parentElement.style.right = 0
      topElement.target.parentElement.style.top = topStyle
      
  })
}
//edit tual background

let tual = document.getElementById('tual')
let bgs = document.getElementById('background-size')
let bgr = document.getElementById('background-repeat')
let bgp = document.getElementById('background-position')
let tbgc = document.getElementById('tual-background')
let tualOpacity = document.getElementById('tual-opacity')

tbgc.addEventListener('change', () => {
  tual.style.backgroundColor = tbgc.value
})
bgs.addEventListener('change', () => {
  tual.style.backgroundSize = bgs.value
})
bgr.addEventListener('change', () => {
  tual.style.backgroundRepeat = bgr.value
})
bgp.addEventListener('change', () => {
  tual.style.backgroundPosition = bgp.value
})
tualOpacity.addEventListener('change', () => {
  tual.style.opacity = tualOpacity.value
})
document.getElementById('load-file').addEventListener('change', e => {
  tual.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
})

document.getElementById('no-background').addEventListener('click', e => {
  tual.style.backgroundImage = 'none'
  tual.style.backgroundColor = '#f1f1f1'
})

// const getPageCount = async () => {
//   const getUrl = window.location.href.split('/')
//   const result = await fetch(`/admin/getpagecount/${getUrl[getUrl.length - 3]}`)
//   const pageCount = await result.json()
//   document.getElementById('last-page').innerText = ''
//   document.getElementById('last-page').innerText = (Number(pageCount))
// }
// getPageCount()

// let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// const saveImage = async (image, pagecount) => {
//   const result = await fetch('/admin/saveimage', {
//       headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           'X-CSRF-TOKEN': token
//       },
//       method: 'Post',
//       body: JSON.stringify({
//           file: image,
//           fileName: pagecount,
//           folderName: document.getElementById('magazine-slug').value,
//           id: document.getElementById('magazine-id').value
//       })
//   })
//   const final = await result.json()
//   alert('Sayfa başarıyla kaydedildi')
//   getPageCount()
// }

document.getElementById('screenshot-button').addEventListener('click', () => {
  let checkTextarea = false
  window.scrollTo(0, 0)
  document.querySelectorAll('textarea').forEach(item => {
      if (item.clientHeight < item.scrollHeight) {
          checkTextarea = true
      }
  })
  if (checkTextarea) {
      alert("Text alanı scrol içermektedir.");
  } else {
      // $("#loadingModal").modal()
      console.log('Started')
      html2canvas(document.getElementById('tual'), {
          allowTaint: true,
          useCORS: true,
      }).then((canvas) => {
          let pageCount = 0
          let lastPage = document.getElementById('last-page').innerText
          let manualyPageCount = document.getElementById('add-page-count').value

          if (manualyPageCount !== '') {
              pageCount = manualyPageCount
              // saveImage(canvas.toDataURL(), pageCount)
              // $("#loadingModal").modal('hide')
              console.log('Wait please!')
              //}
          } else {
              pageCount = lastPage
              // saveImage(canvas.toDataURL(), pageCount)
              // $("#loadingModal").modal('hide')
              alert('Done')
          }
      })
  }
})

function initDragElement() {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
  let parentElements = document.getElementsByClassName("parent-element")
  let parent = null
  let currentZIndex = 0
  for (let item of parentElements) {
      let content = getChild(item)
      if (content) {
          content.onmousedown = dragMouseDown
      }
  }
  function getChild(param) {
      let child = param.getElementsByClassName("child-element")
      if (child.length === 1) {
          return child[0]
      }
      return null
  }

  function dragMouseDown(e) {
      parent = this.parentElement
      const staticElement = parent.classList.contains("static")
      if(staticElement){
          parent.style.zIndex = 0
      } else {
          parent.style.zIndex = "" + ++currentZIndex
      }
      
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      document.onmousemove = elementDrag
  }

  const elementDrag = (e) => {
      if (!parent) {
          return;
      }
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      parent.style.top = parent.offsetTop - pos2 + "px";
      parent.style.left = parent.offsetLeft - pos1 + "px";
      parent.style.outline = '2px dotted #666'
      topStyle = parent.style.top
  }

  const closeDragElement = () => {
      document.onmouseup = null
      document.onmousemove = null
  }
}