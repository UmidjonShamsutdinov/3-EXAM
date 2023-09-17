const $Id = +new URLSearchParams(window.location.search).get("infoId");
const mainDiv = document.querySelector(".main__div")
const mainSwiper = document.querySelector(".swiper-wrapper")
const firstLineSwiper = document.querySelector(".swiper-wrapper1")
const secondLineSwiper = document.querySelector(".swiper-wrapper2")
const thirdLineSwiper = document.querySelector(".swiper-wrapper3")
const fourthLineSwiper = document.querySelector(".swiper-wrapper4")
const fifthLineSwiper = document.querySelector(".swiper-wrapper5")








const options = {
    method : "GET",
    headers : {
        accept : "application/json",
        Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjhjZjc4ZDdlMjRkZjIxNDIyNGM1ZTIzOGJmNDk4OSIsInN1YiI6IjY1MDEzNGI0ZWZlYTdhMDBjMzk3MWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.py2h2aWnyIx_Abbvzzb5HIaLXmz5CeVkpWAbhyKPPlQ"
    }
}
fetch(`https://api.themoviedb.org/3/movie/${$Id}`, options)
.then(response => response.json())
.then(data => render(data))


function render(data){
    console.log(data);
    const secondDiv = document.createElement("div")
    secondDiv.className = "second__div"
    secondDiv.innerHTML = `
    <img src="${"https://image.tmdb.org/t/p/original/"+data.backdrop_path}"/>
    <div class="movie__content">
        <h1>${data.original_title}</h1>
        <p class="movie__info">${data.overview}</p>
        <p class="vote"><i class="bi bi-star-fill" style="color:gold"></i>&nbsp;${data.vote_average}&nbsp;&nbsp;&nbsp;<span>Chiqarilgan sana: ${data.release_date}</span></p>
        <strong class="strong">${data.vote_count} kishi ovoz bergan</strong>
        <h2>Til: ${data.original_language}</h2> 
        <a href="../index.html"><button>Back to home</button></a>       
    </div>
    `

    mainDiv.appendChild(secondDiv)
}





fetch("https://api.themoviedb.org/3/discover/tv", options)
.then(response => response.json())
.then(date => innerRender(date))

function innerRender(date){
    const innerFragment = document.createDocumentFragment();
    date.results.forEach(e => {
        const elementId = e.id
        const div = document.createElement("div")
        div.className = "swiper-slide1"
        const imgLink = "https://image.tmdb.org/t/p/original/"
        div.innerHTML = `
        <a href="${"./index.html?infoId="+elementId}"><img src="${imgLink + e.poster_path}" alt="image"/></a>
        <p class="title" title="${e.original_name}">${e.original_name.split("").length>10 ? e.original_name.slice(0, 11) + "..." : e.original_name}</p>
        `
        innerFragment.appendChild(div)        
    })
    firstLineSwiper.appendChild(innerFragment)
}


fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28", options)
.then(response => response.json())
.then(data => otherLinesRender(data))
function otherLinesRender(date){
    const innerFragment = document.createDocumentFragment();
    date.results.forEach(e => {
        const elementId = e.id
        const div = document.createElement("div")
        div.className = "swiper-slide2"
        const imgLink = "https://image.tmdb.org/t/p/original/"
        div.innerHTML = `
        <a href="${"./index.html?infoId="+elementId}"><img src="${imgLink + e.backdrop_path}" alt="image"/></a>
        <p class="title" title="${e.original_title}">${e.original_title.split("").length>20 ? e.original_title.slice(0, 21) + "..." : e.original_title}</p>
        `
        innerFragment.appendChild(div)
        
    })
    secondLineSwiper.appendChild(innerFragment)
}





fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", options)
.then(response => response.json())
.then(data => otherLinesRender2(data))
function otherLinesRender2(date){
    const innerFragment = document.createDocumentFragment();
    date.results.forEach(e => {
        const elementId = e.id
        const div = document.createElement("div")
        div.className = "swiper-slide3"
        const imgLink = "https://image.tmdb.org/t/p/original/"
        div.innerHTML = `
        <a href="${"./index.html?infoId="+elementId}"><img src="${imgLink + e.backdrop_path}" alt="image"/></a>
        <p class="title" title="${e.original_title}">${e.original_title.split("").length>20 ? e.original_title.slice(0, 21) + "..." : e.original_title}</p>
        `
        innerFragment.appendChild(div)        
    })
    thirdLineSwiper.appendChild(innerFragment)
}








fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35", options)
.then(response => response.json())
.then(data => otherLinesRender4(data))
function otherLinesRender4(date){
    const innerFragment = document.createDocumentFragment();
    date.results.forEach(e => {
        const elementId = e.id
        const div = document.createElement("div")
        div.className = "swiper-slide4"
        const imgLink = "https://image.tmdb.org/t/p/original/"
        div.innerHTML = `
        <a href="${"./index.html?infoId="+elementId}"><img src="${imgLink + e.backdrop_path}" alt="image"/></a>
        <p class="title" title="${e.original_title}">${e.original_title.split("").length>20 ? e.original_title.slice(0, 21) + "..." : e.original_title}</p>
        `
        innerFragment.appendChild(div)
        
    })
    fourthLineSwiper.appendChild(innerFragment)
}






fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", options)
.then(response => response.json())
.then(data => otherLinesRender5(data))


function otherLinesRender5(date){
    const innerFragment = document.createDocumentFragment();
    date.results.forEach(e => {
        const elementId = e.id
        const div = document.createElement("div")
        div.className = "swiper-slide5"
        const imgLink = "https://image.tmdb.org/t/p/original/"
        div.innerHTML = `
        <a href="${"./index.html?infoId="+elementId}"><img src="${imgLink + e.backdrop_path}" alt="image"/></a>
        <p class="title" title="${e.original_title}">${e.original_title.split("").length>20 ? e.original_title.slice(0, 21) + "..." : e.original_title}</p>
        `
        innerFragment.appendChild(div)
        
    })
    fifthLineSwiper.appendChild(innerFragment)
}
