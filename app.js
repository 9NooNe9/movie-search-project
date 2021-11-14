function Movie(poster, title, rate, description, releaseDate, duration) {
    this.poster = poster;
    this.title = title;
    this.rate = rate;
    this.description = description;
    this.releaseDate = releaseDate;
    this.duration = duration;
}

const moviesList = [];
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/789/852/954/venom-tom-hardy-marvel-comics-transformation-wallpaper-preview.jpg", "venom", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/986/347/671/adventure-dinosaur-fantasy-film-wallpaper-preview.jpg", "jurassic park", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/594/52/878/movies-james-bond-daniel-craig-skyfall-wallpaper-preview.jpg", "james bond : skyfall", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/242/216/837/spider-man-miles-morales-movies-brooklyn-bridge-wallpaper-preview.jpg", "spider man into the spider verse", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/806/878/427/king-arthur-legend-of-the-sword-4k-desk-top-wallpaper-preview.jpg", "king arthur legend of the sword", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/178/887/600/2008-dark-city-fire-wallpaper-preview.jpg", "the dark knight", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/457/871/663/movie-poster-wonder-woman-gal-gadot-portrait-display-wallpaper-preview.jpg", "wonder woman", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/806/545/248/superman-man-of-steel-superman-logo-wallpaper-preview.jpg", "man of steal", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/966/333/172/mia-wallace-uma-thurman-pulp-fiction-vintage-poster-hd-wallpaper-preview.jpg", "pulp fiction", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/834/280/850/movies-the-shawshank-redemption-wallpaper-preview.jpg", "the shawshank redemption", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/949/59/686/5bf4e8c1da80b-wallpaper-preview.jpg", "john wick", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg", "star wars", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/763/245/276/suicide-squad-margot-robbie-dc-comics-harley-quinn-wallpaper-preview.jpg", "suicide squad", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg", "lord of the rings", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/343/846/438/joker-2019-movie-joker-joaquin-phoenix-men-makeup-hd-wallpaper-preview.jpg", "joker", 8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 196))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg", "avengers", 9.2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "9th November", 216))


const movieContainer = document.querySelector('.movies-grid');

const cardView = movieList => {
    return `<div class="movie-card">
    <div class="movie-image">
         <img src=${movieList.poster} alt=${movieList.title}>
    </div>
    <div class="title">
         <a href="#"><h2>${movieList.title}</h2></a>
         <span>${movieList.rate}/10</span>
    </div>
    <div class="about">
         <p>${movieList.description}</p>
    </div>
    <div class="moreInfo">
         <p>${movieList.releaseDate}</p>
         <p>${movieList.duration}min</p>
    </div>
</div>`
}

const generateCard = moviesInfo => {
    movieContainer.innerHTML = '';
    moviesInfo.map(movie => {
        movieContainer.innerHTML += cardView(movie)
    })
}

generateCard(moviesList)

function onSearch(element) {
    const searchInput = element.value;
    const filteredCards = moviesList.filter(movie => {
        return movie.title.includes(searchInput)
    })

    generateCard(filteredCards)
}

