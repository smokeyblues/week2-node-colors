function isLight (red, green, blue) {
    if (luminosity(red, green, blue) > 155) {
        return dark
    } else {
        return light
    }
}