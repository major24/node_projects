const fetchMovie = require('../../services/movie/fetchMovie');

const getMovie = async function(root, args) {
    console.log(`In /resolver/movie/getMovie(...): ${JSON.stringify(args)}`);
    const movie = await fetchMovie(args.id);

    return movie;
}

module.exports = getMovie;
