const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', function(){
    const startPage = document.querySelector("#start-page");
    const lockScreenPage = document.querySelector("#lock-screen-page");
    startPage.style.display = 'none';
    lockScreenPage.style.display = 'block';
})