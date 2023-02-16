document.getElementById("container").addEventListener("click", function(e){
    console.log(e.target.dataset.sound)
    document.getElementById(e.target.dataset.sound).play()
})
