function Movie(poster, title, rate, description, releaseDate, duration) {
    this.poster = poster;
    this.title = title;
    this.rate = rate;
    this.description = description;
    this.releaseDate = releaseDate;
    this.duration = duration;
}

const moviesList = [];
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/789/852/954/venom-tom-hardy-marvel-comics-transformation-wallpaper-preview.jpg", "venom", 6.7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "October 5, 2018", 140))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/986/347/671/adventure-dinosaur-fantasy-film-wallpaper-preview.jpg", "jurassic park", 8.1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "June 11, 1993 ", 127))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/594/52/878/movies-james-bond-daniel-craig-skyfall-wallpaper-preview.jpg", "james bond : skyfall", 7.8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "November 9, 2012", 143))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/242/216/837/spider-man-miles-morales-movies-brooklyn-bridge-wallpaper-preview.jpg", "spider man into the spider verse", 8.4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "December 14, 2018", 116))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/806/878/427/king-arthur-legend-of-the-sword-4k-desk-top-wallpaper-preview.jpg", "king arthur legend of the sword", 6.7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "May 18, 2017", 126))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/178/887/600/2008-dark-city-fire-wallpaper-preview.jpg", "the dark knight", 9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "July 18, 2008", 152))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/457/871/663/movie-poster-wonder-woman-gal-gadot-portrait-display-wallpaper-preview.jpg", "wonder woman", 7.4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "June 2, 2017", 141))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/806/545/248/superman-man-of-steel-superman-logo-wallpaper-preview.jpg", "man of steal", 7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "June 12, 2013", 143))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/966/333/172/mia-wallace-uma-thurman-pulp-fiction-vintage-poster-hd-wallpaper-preview.jpg", "pulp fiction", 8.9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "October 14, 1994", 154))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/834/280/850/movies-the-shawshank-redemption-wallpaper-preview.jpg", "the shawshank redemption", 9.3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "September 22, 1994", 144))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/949/59/686/5bf4e8c1da80b-wallpaper-preview.jpg", "john wick", 7.4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "October 24, 2014", 101))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg", "star wars", 7.5, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "May 19, 2005", 140))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/763/245/276/suicide-squad-margot-robbie-dc-comics-harley-quinn-wallpaper-preview.jpg", "suicide squad", 5.9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "August 5, 2016", 130))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg", "lord of the rings: return of the king", 8.8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "December 1, 2003", 301))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/343/846/438/joker-2019-movie-joker-joaquin-phoenix-men-makeup-hd-wallpaper-preview.jpg", "joker", 8.4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "October 4, 2019", 122))
moviesList.push(new Movie("https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg", "avengers", 8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus excepturi perspiciatis sint soluta vitae?", "May 4, 2012", 143))


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
    const searchInput = element.value.toLowerCase();
    const filteredCards = moviesList.filter(movie => {
        return movie.title.includes(searchInput)
    })

    generateCard(filteredCards)
}

