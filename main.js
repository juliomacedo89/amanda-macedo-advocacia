/* MENU - SCROLL SMOOTH */

const menuItem1 = document.querySelector('.menuItem1')
const menuItem2 = document.querySelector('.menuItem2')
const menuItem3 = document.querySelector('.menuItem3')
const menuItem4 = document.querySelector('.menuItem4')

const menuArray = [menuItem1, menuItem2, menuItem3, menuItem4]

menuArray.forEach((item)=>{
    item.addEventListener('click', (event)=>{

        if(event.target === menuItem1){
            window.scrollTo({
                top: 1046,
                behavior: "smooth"
            })
        }else if(event.target === menuItem2){
            window.scrollTo({
                top: 1997,
                behavior: "smooth"
            })
        }else if(event.target === menuItem3){
            window.scrollTo({
                top: 2948,
                behavior: "smooth"
            })
        }else if(event.target === menuItem4){
            window.scrollTo({
                top: 3900,
                behavior: "smooth"
            })
        }
    })
})




