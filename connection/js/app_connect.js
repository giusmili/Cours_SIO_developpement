document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
    let submit_log = localStorage.getItem("user")
    let submit_session = sessionStorage.getItem("session")
    let el = document.querySelector("h1")
    el.innerText += ` ${submit_log}`
    let btn = document.querySelector(".unlocked")

    /* event */
    btn.addEventListener("click",()=>{
        localStorage.clear()
        sessionStorage.clear()
        document.location.assign("formulaire_base.html")
    })
})