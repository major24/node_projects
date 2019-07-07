const fetchActor = require('../../services/actor/fetchActor');

const getActor = async function(root, args) {
    console.log(`In /resolver/movie/getActor(...): ${JSON.stringify(args)}`);
    const actor = await fetchActor(args.id);

    return actor;
}

module.exports = getActor;
