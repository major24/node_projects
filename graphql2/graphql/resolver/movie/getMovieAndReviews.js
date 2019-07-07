const fetchMovie = require('../../services/movie/fetchMovie');
const fetchMovieAndReviews = require('../../services/movie/fetchMovieAndReviews');

const getMovieAndReviews = async function(root, args) {
    console.log(`In /resolver/movie/getMovie(...): ${JSON.stringify(args)}`);
    const movie = await fetchMovie(args.id);
    console.log('>>>movie:', movie);
    const reviews = await fetchMovieAndReviews(movie.id);
    console.log('>>>>reviews:', reviews);
    return {
        ...movie,
        reviews
    };
}

module.exports = getMovieAndReviews;
