AOS.init();


// section2----------------
let box_img = document.querySelectorAll('.box-img>div')
const hight = []
box_img.forEach((val) => {
    hight.push(val.offsetTop)
})





let x = document.getElementsByTagName('main')[0]
x.addEventListener('scroll', function () {
    let st = (x.scrollTop) + 500
    // section2----------------
    if (st > hight[1] && st < hight[12]) {
        document.getElementsByClassName('_p')[0].classList.add('fixed')
    } else {
        document.getElementsByClassName('_p')[0].classList.remove('fixed')
    }

    box_img.forEach((val, i) => {

        if (st > hight[i] && st < hight[i + 1]) {
            val.classList.add('opacity-50')
        } else {
            val.classList.remove('opacity-50')
        }
    })
    // section3----------------
    let boximg_section3 = document.querySelectorAll('.boximg-section3>img')
    const hight3 = [8521, 8558, 8579, 8600, 8622, 8643, 8663, 8693, 8720, 8743, 8780,8880]
    console.log(st);
   

    boximg_section3.forEach((val, i) => {
        if (st > hight3[i] && st < hight3[i + 1]) {
            val.classList.remove('hidden')
        } else {
            val.classList.add('hidden')
            if(st > hight3[10]){
                boximg_section3[10].classList.remove('hidden')
            }
        }
    })
})

