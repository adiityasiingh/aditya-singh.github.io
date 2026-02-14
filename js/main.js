const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const loveImage = document.getElementById("loveImage");
const cryImage = document.getElementById("cryImage")


noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
    let seconds = 14;

    response.textContent = `Accha silaa diya tune mere pyaar ka...💔
    Reloading in ${seconds} seconds... apni galti sudhaar lo jaan😚`;

    cryImage.style.display = "block";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    const countdown = setInterval(() => {
        seconds--;

        if (seconds > 0) {
            response.textContent = `Accha silaa diya tune mere pyaar ka...💔
    Reloading in ${seconds} seconds... apni galti sudhaar lo jaan😚`;
        } else {
            clearInterval(countdown);
            location.reload();
        }
    }, 1000);



})

yesBtn.addEventListener("click", () => {
    response.textContent = "Good choice Babygurlll 😘❤️";

    loveImage.style.display = "block";

    // Hide both buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

