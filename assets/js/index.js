let slid = document.getElementsByTagName('main')[0]

slid.addEventListener('scroll', function () {
    let maxScTop = (slid.scrollHeight) - (slid.clientHeight)
    let _width = (slid.scrollTop * 100) / maxScTop
    document.getElementsByClassName('line')[0].style.width = 'calc(' + _width + '% - 17px)'
})

let _sec = document.querySelectorAll('main>section>section')

for (i = 1; i < _sec.length; i++) {
    temp = _sec[i].children
    temp = temp[0].offsetTop
    _sec[i].setAttribute('data-offset', temp)
}

slid.addEventListener('scroll', function () {
    let srlT = slid.scrollTop

    _sec.forEach(function (para) {
        if (
            (srlT + 100) > para.getAttribute('data-offset')
        ) {
            let _child = para.children
            _child[0].style.transform = 'translateX(0)'
        }
    })
})