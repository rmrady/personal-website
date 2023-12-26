AOS.init();



let box_img = document.querySelectorAll('.box-img>div')
const hight = []
box_img.forEach((val)=>{
    hight.push(val.offsetTop)
})



let x= document.getElementsByTagName('main')[0]
x.addEventListener('scroll', function(){
    let st = (x.scrollTop)+500
    if(st > hight[1] && st < hight[12]){
        document.getElementsByClassName('_p')[0].classList.add('fixed')
    }else{
        document.getElementsByClassName('_p')[0].classList.remove('fixed')
    }

    box_img.forEach((val,i)=>{

        if(st > hight[i] && st < hight[i+1]){
            val.classList.add('opacity-50')
        }else{
            box_img[i].classList.remove('opacity-50')
        }
    })

    
    
})

