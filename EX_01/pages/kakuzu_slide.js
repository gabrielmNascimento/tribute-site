var slideIndex = 1
showSlides(slideIndex)

function passSlide(n)
{
    showSlides(slideIndex += n)
}

function CurrentSlide(n)
{
    showSlides(slideIndex = n)
}

function showSlides(n)
{

    var slides = document.getElementsByClassName('kak-slides')
    var dots = document.getElementsByClassName('dot')
    
    if(n > slides.length)
    {
        slideIndex = slides.length
        n = slideIndex
    }

    if(n < 1)
    {
        slideIndex = 1
        n = slideIndex
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none'
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += ' active'
}

/*function moveSlide()
{
    var s = document.getElementsByClassName('kak-slides')
    var dots = document.getElementsByClassName('dot')

    for(i = 0; i < s.length; i++)
    {
        s[i].style.display = 'none'
    }
    slideIndex++

    if(slideIndex > s.length)
    {
        slideIndex = 1
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    s[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += ' active'
    setTimeout(moveSlide, 2000)
}*/
