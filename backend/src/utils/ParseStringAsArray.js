module.exports = function parseStringArray(arraAsString){
    return arraAsString.split(',').map(tech => tech.trim());
}