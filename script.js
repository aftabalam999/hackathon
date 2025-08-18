const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', function(){
    const startPage = document.querySelector("#start-page");
    const lockScreenPage = document.querySelector("#lock-screen-page");
    startPage.style.display = 'none';
    lockScreenPage.style.display = 'block';
})

const frontPage = document.querySelector("#front-page");
const signInBtn = document.querySelector("#signIn-btn");
signInBtn.addEventListener('click', function(){
    frontPage.style.display = 'none';
})