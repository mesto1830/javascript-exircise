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
    document.getElementById('total-page').innerText = papers.length * 2
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
        if(searchValue-1 === createId){
            lastPage()
        } else if(searchValue-1 > createId){
            alert('Sayfa bulunamadi!')
            firstPage()
        } else {
            openBook()
            resetZindex()
            resetFlipped()
            for (let i = 0; i < searchValue; i++) {
                papers[i].classList.add('flipped')
            }
            papers[searchValue].style.zIndex = 10
            currentState = searchValue
        }
    }
}


