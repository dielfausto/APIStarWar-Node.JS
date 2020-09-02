'use strict';
var mongoose = require('mongoose');
var Planet = mongoose.Schema;

var PlanetSchema = new Planet({
    name: {
        type: String,
        required: 'Digite o nome:'
    },
    climate: {
        type: String,
        required: 'Digite o tipo de clima:'
    },
    terrain: {
        type: String,
        required: 'Digite o tipo do terreno:'
    },
    movie_appearances: {
        type: String,
        default: 0
    }
});

module.exports = mongoose.model('Planets', PlanetSchema);