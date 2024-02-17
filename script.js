function scrollToSection(inName) {
    let section =document.getElementById(inName)
    section.scrollIntoView({behavior:"smooth"})
}