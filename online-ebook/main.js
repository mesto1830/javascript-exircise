// Business Logic
let createId = 2
let currentState = 0
let papers = []

// References to DOM elements
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const book = document.querySelector('#book')

// Event listeners
prevBtn.addEventListener("click", goPrevious)
nextBtn.addEventListener("click", goNext)


function openBook() {
    book.style.transform = "translateX(50%)"
    if(window.outerWidth > 1500){
        prevBtn.style.transform = "translateX(-250px)"
        nextBtn.style.transform = "translateX(250px)"
    } else {
        prevBtn.style.transform = "translateX(-150px)"
        nextBtn.style.transform = "translateX(150px)"
    }
}

function closeBook(param) {
    if(param) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)"
    }
    prevBtn.style.transform = "translateX(0px)"
    nextBtn.style.transform = "translateX(0px)"
}

document.querySelectorAll('.paper').forEach(item => {
    item.id === 'p0' ? item.style.zIndex = 10 : item.style.zIndex = 0
})
const firstPage = () =>  {
    resetZindex()
    resetFlipped()
    papers[0].style.zIndex = 10
    closeBook(true)
    currentState = 0
}

const lastPage = () =>  {
    resetZindex()
    resetLast()
    closeBook(false)
    currentState = createId+1
    papers[createId].style.zIndex = 10;
}

const resetZindex = () => {
    document.querySelectorAll('.paper').forEach(item => {
        item.style.zIndex = 0
    })
}

const resetFlipped = () => {
    document.querySelectorAll('.paper').forEach(item => {
        item.classList.remove("flipped")
    })
}

const resetLast = () => {
    document.querySelectorAll('.paper').forEach(item => {
        item.classList.add("flipped")
    })
}

const getPapers = () => {
    document.querySelectorAll('.paper').forEach(item => {
        papers.push(item)
    })
    document.getElementById('total-page').innerText = papers.length
}

getPapers()


const getPages = () => {
    document.querySelectorAll('.pages').forEach((item, index) => {
        item.addEventListener('dblclick', (e) => {
            fileInput.click()
            targetImg = item
            imgRef = 'bookname'+index
            pageIndex = index
        })
        if(item.id === 'b'+createId){
            item.innerHTML = '<img src="./img1.jpg" class="img-cover" alt="">'
        } else if(item.id === 'f'+0){
            item.innerHTML = '<img src="./img1.jpg" class="img-cover" alt="">'
        } else {
            item.innerHTML = `
            <img src="./img2.jpg" class="img" alt="">
            <span class="page-numbers">${index}</span>
            `
        }
    })

}
getPages()
let fileInput = document.getElementById('file')
fileInput.addEventListener('change', () => {
    if(targetImg.id == 'f'+0 
    || targetImg.id === 'b'+0 
    || targetImg.id === 'f'+createId-1 
    || targetImg.id === 'b'+createId){
        targetImg.innerHTML = `<img src="${file.files[0].name}" name="${imgRef}" id="${imgRef}" class="img" alt="">`
        file.value = null
    } else {
        targetImg.innerHTML = `
        <img src="${file.files[0].name}" name="${imgRef}" id="${imgRef}" class="img" alt="">
        <span class="page-numbers">${pageIndex}</span>
        `
        file.value = null

    }
})

document.getElementById('add-btn').addEventListener('click', () => {
    // const pageNumber = document.getElementById('txt-add-page').value
    // for (let i = 0; i < pageNumber; i++) {
        createId++
        let container = document.getElementById('book')
        let newPage = document.createElement('div')
        newPage.setAttribute('id',`p${createId}`)
        newPage.classList.add('paper')
        newPage.innerHTML = `
        <div class="front">
            <div id="f${createId}" class="front-content pages">
                <h1>Front ${createId}</h1>
            </div>
        </div>
        <div class="back">
            <div id="b${createId}" class="back-content pages">
                <h1>Back ${createId}</h1>
            </div>
        </div>`
        container.appendChild(newPage)
    // }
    papers = []
    getPapers()
    getPages()
    openBook()
    
    for (let i = 0; i < createId; i++) {
        papers[i].classList.add('flipped')
    }
    papers[createId-1].style.zIndex = 10
    currentState = createId
})

// document.getElementById('delete-btn').addEventListener('click', () => {
//     const el = document.getElementById('book')
//     console.log(el.removeChild(el.lastElementChild.previousElementSibling))
//     document.getElementById('total-page').innerText-=1
// })

function goNext() {
    resetZindex()
    openBook()
    if(currentState < createId){
        papers[currentState].classList.add("flipped")
        currentState++
        papers[currentState].style.zIndex = 10
    } else {
        lastPage()
    }
}

function goPrevious() {
    resetZindex()
    openBook()
    if(currentState !== 0) {
        currentState--;
        papers[currentState].classList.remove("flipped")
        papers[currentState].style.zIndex = 10
    } 
    if (currentState === 0){
        firstPage()
    }
}

const search = () =>  {
    let searchValue = Number(document.getElementById('search-txt').value)
    if(searchValue === 0){
        firstPage()
    } else {
        currentState = searchValue
        if(currentState-1 === createId){
            lastPage()
        } else if(currentState-1 > createId){
            alert('Sayfa bulunamadi!')
            lastPage()
        } else {
            openBook()
            resetZindex()
            resetFlipped()
            for (let i = 0; i < currentState; i++) {
                papers[i].classList.add('flipped')
            }
            papers[currentState].style.zIndex = 10
        }
    }
    // document.getElementById('audio').play()
}


