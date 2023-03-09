
// change navbar color on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('bg-change', window.scrollY > 0)

})

// showing hidden answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');




    })

})

// open navmenu----------------
open_menu=document.getElementsByClassName('open_menu')[0]
close_menu=document.getElementsByClassName('close_menu')[0]
open_menu.addEventListener('click',(e)=>{
    document.getElementsByClassName('nav_menu')[0].style.display='block'
   open_menu.style.display="none"
   close_menu.style.display="block"

})

// ----------close nav menu
close_menu.addEventListener('click',()=>{
    document.getElementsByClassName('nav_menu')[0].style.display='none'
    close_menu.style.display="none"
    open_menu.style.display="inline-block"
})


// showing social of team on hover
//   team_member=document.getElementsByClassName('team_member')[0];
//   team_social=document.getElementsByClassName('team_social')[0];




// team_member.addEventListener('mouseover',()=>{
//     team_social.style.display="block"

// })
