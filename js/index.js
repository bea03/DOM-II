// Your code goes here

const navParent = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav .nav-link');

    navLink.forEach( (navLink) => {
        navLink.addEventListener('click', (event) => {
            event.target.style.color = '#17A2B8';
        });

        navLink.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#C0C0C0';
        });
    });

const imgContent = document.querySelectorAll('.img-content');

    imgContent.forEach( (imgContent) => {
        imgContent.addEventListener('mouseover', (event) => {  //one
            event.target.style.backgroundColor = '#17A2B8';
        });

        imgContent.addEventListener('mouseout', (event) => {  //two
            event.target.style.backgroundColor = '#FFEBCD';
        });
    });  

const btnJS = document.querySelectorAll('.btn');
btnJS.forEach ( (btnJS) => {
    btnJS.addEventListener('dblclick', (event) => {
        btnJS.textContent = "Thanks!!";  //three
    });
}); 

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener('click', (event) => {
    event.target.classList.toggle("clickImg"); //four
});

const homeContainer = document.querySelector('.home');

window.addEventListener('scroll', (event) => {
    homeContainer.style.backgroundColor = '#17A2B8'; //five
});

window.addEventListener('resize', (event) => {
    homeContainer.style.backgroundColor = '#FFEBCD'; //six
})