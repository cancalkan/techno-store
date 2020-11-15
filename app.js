// local reviews data
const Yousralink="https://www.linkedin.com/in/yousra-e-6920691a6/"
const BagcıPerdeLink="https://www.bagciperde.com/"
const AhmetSavasGokturkLink="https://ahmetsavasgokturk.com.tr/"
const reviews = [{
    id: 1,
    name: "savas bagcı ",
    job: "curtain store  owner",
    img: "img/savas-bagcı.jpg",
    text: "Putting together a website is a task, finding the right individual or company is even more complex. Thanks God I meet with him,not only he have great taste in design but he can guide you through the process and beyond ",
  link: BagcıPerdeLink
  },
   {
    id: 2,
    name: "ahmet savas gokturk",
    job: "Business Solutions Executive",
    img: "img/ahmetsavasgokturk.jpg",
    text: "I have met Can for about 3 years, and we have worked with him on ERP and Business Intelligence within the scope of Industry-Academy cooperation projects. I saw him as a disciplined, hard-working, kind and hard-working person. I wish them to preserve these beautiful competencies for a lifetime and their continued success.",
    link: AhmetSavasGokturkLink
  },
  {
    id: 3,
    name: "Yousra El Ouardy",
    job: "University Student",
    img:"img/Yusra.jpeg",
    text: "A perfectionist, he will try and try till making it perfect. He likes his major so much, he talks about it with a lot of passion. Before I didn't know much about computers but thanks to him I know some information now and I always ask him before downloading something for example. And also I practice English and Turkish  with him, and he helped me at making my LinkedIn account. He has great ideas.",
 link: Yousralink
  },
  
];
const img = document.getElementById("person-img")
const authorName = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  showReview(currentItem);
})

function showReview(person) {
  const item =reviews[person]
  authorName.innerHTML = "<a   target=_blank href='"+item.link+"'>"+item.name+"  </a>" ;
  img.src=item.img; 
  job.textContent=item.job;
  info.textContent=item.text;

}
function sPrev (){
  currentItem--
  if(currentItem<0){
    currentItem=reviews.length-1
  }
  showReview(currentItem)
}

function sNext (){
  currentItem++
  if(currentItem>reviews.length-1){
    currentItem=0
  }
  showReview(currentItem)
}

window.addEventListener("keydown",pressLeft)
function pressLeft(event){
  if(event.key == "ArrowLeft"){
      sPrev();
    }
 }
window.addEventListener("keydown",pressRight)
function pressRight(event){
  if(event.key == "ArrowRight"){
      sNext();
    }
 }
prevBtn.addEventListener('click', sPrev)
nextBtn.addEventListener('click', sNext)
document.addEventListener('swiped-left', sPrev);
document.addEventListener('swiped-right', sNext );