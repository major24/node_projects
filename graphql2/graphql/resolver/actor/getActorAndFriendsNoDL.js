const fetchActor = require('../../services/actor/fetchActor');

const getActorAndFriendsNoDL = async function(root, args) {
    console.log(`In /resolver/movie/getActorAndFriendsNoDL(...): ${JSON.stringify(args)}`);
    const actor = await fetchActor(args.id);
    console.log('>>>actor:', actor);

    // let friends = [];
    // actor.friends.forEach((e) => {
    //     let actorFriend = await fetchActor(e);
    //     friends.push(actorFriend)
    // });
    // console.log('>>>', friends);
    // const friends = await fetchMovieAndReviews(movie.id);
    // console.log('>>>>reviews:', reviews);
    // return {
    //     ...movie,
    //     reviews
    // };
    return actor;
}

module.exports = getActorAndFriendsNoDL;
