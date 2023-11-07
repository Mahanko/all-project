const shab = document.getElementById('homes');
shab.addEventListener('click' , ()=>{
    document.body.classList.toggle("shab")
});
let searchbox = document.getElementById('searchbox');
searchbox.addEventListener('click' , ()=>{
    searchbox.select();
})