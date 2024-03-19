let heade = document.querySelector('.head-4');
let toggle = document.getElementById('toggle');


toggle.addEventListener('click', function(){
    heade.classList.toggle('active')
    toggle.classList.toggle('fa-remove')
})
