 course_info=[
    {"course_heading":"Responsive web app and design",image_path:"./images/course1.png"},
    {"course_heading":"responsive website UI ",image_path:"./images/course2.jpg"},
    {"course_heading":"creating backend with node",image_path:"./images/course3.jpg"}
]
let main_button= Array.from(document.getElementsByClassName('t1'))

main_button.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        document.getElementById('course_heading')[i].innerHTML=course_info[i].course_heading
        console.log(i)

    })

})
