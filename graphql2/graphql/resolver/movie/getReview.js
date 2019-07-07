const fetchReview = require('../../services/movie/fetchReview');

const getReview = async function(root, args) {
    console.log(`In /resolver/movie/getReview(...): ${JSON.stringify(args)}`);
    console.log(`root: ${root}`)
    const review = await fetchReview(args.id);
    return review;
}

module.exports = getReview;
