let pic = document.getElementById('pic')
        const text = document.getElementById('hey')
        const front = document.getElementById('this')
        const name1 = document.getElementById('name')
        window.addEventListener('scroll', function () {
            let valuey = window.scrollY
        
            pic.style.marginLeft=valuey* 1.8 + 'px'
            pic.style.marginTop=valuey * .95 + 'px'

            name1.style.marginLeft=valuey* 7 + 'px'
            // name1.style.marginTop=valuey * .1 + 'px'
            text.style.marginTop = valuey * 2 + 'px'
            front.style.marginTop = valuey * 1.5 + 'px'
            // back.style.top = value * 1.25 + 'px'
        })