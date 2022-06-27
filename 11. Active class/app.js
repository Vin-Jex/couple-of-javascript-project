const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// articles.forEach( () => {

// })

about.addEventListener('click', (e) => {
    const eTag = e.target;
    const id = eTag.dataset.id;
   if(id) {
    // remove active class from buttons
    btns.forEach( btn => {
       btn.classList.remove('active');
       eTag.classList.add('active')
    })
    // hide other acticles
    articles.forEach( article => {
        article.classList.remove('active');
    }) 
    const element = document.getElementById(id);
    // document.getElementById(id).classList.add('active');
    element.classList.add('active');
   }
    
});