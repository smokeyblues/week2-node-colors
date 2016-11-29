function luminosity (red, green, blue) {
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

module.exports = luminosity;