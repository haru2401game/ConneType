// =====================
// BACKGROUND TEXT
// =====================

const words = [
    "CONNECT",
    "NETWORK",
    "SERVER",
    "CLIENT",
    "HTTP",
    "HTTPS",
    "TCP/IP",
    "DNS",
    "ROUTER",
    "INPUT",
    "TYPE",
    "KEYBOARD",
    "LINK",
    "ACCESS",
    "AUTH",
    "WELCOME",
    "UNITY",
    "GITHUB",
    "CHATGPT",
    "NOTE",
    "YOUTUBE"
];

function spawnBackgroundText()
{
    const text = document.createElement("div");

    text.className = "bg-text";

    text.innerText =
        words[Math.floor(Math.random() * words.length)];

    text.style.left = "100%";

    text.style.top =
        Math.random() * window.innerHeight + "px";

    text.style.fontSize =
        (1 + Math.random() * 2) + "rem";

    document.body.appendChild(text);

    let x = window.innerWidth;

    const speed = 1 + Math.random() * 2;

    const interval = setInterval(() =>
    {
        x -= speed;

        text.style.left = x + "px";

        if (x < -300)
        {
            clearInterval(interval);
            text.remove();
        }

    }, 16);
}

setInterval(spawnBackgroundText, 1500);


// =====================
// CLOCK
// =====================

function updateClock()
{
    const clock = document.getElementById("clock");

    if (!clock)
    {
        return;
    }

    const now = new Date();

    const h =
        String(now.getHours()).padStart(2, '0');

    const m =
        String(now.getMinutes()).padStart(2, '0');

    const s =
        String(now.getSeconds()).padStart(2, '0');

    clock.innerHTML =
        h + ":" + m + ":" + s;
}

setInterval(updateClock, 1000);
updateClock();


// =====================
// TITLE GLITCH
// =====================

function glitchTitle()
{
    const title =
        document.querySelector(".title");

    if (!title)
    {
        return;
    }

    title.style.transform =
        "translateX(-2px)";

    setTimeout(() =>
    {
        title.style.transform =
            "translateX(2px)";
    }, 50);

    setTimeout(() =>
    {
        title.style.transform =
            "translateX(0px)";
    }, 100);
}

setInterval(glitchTitle, 5000);


// =====================
// RANDOM COLOR FLASH
// =====================

function randomFlash()
{
    if (Math.random() > 0.97)
    {
        document.body.style.filter =
            "brightness(1.2)";

        setTimeout(() =>
        {
            document.body.style.filter =
                "brightness(1)";
        }, 100);
    }
}

setInterval(randomFlash, 100);


// =====================
// PAGE LOAD LOG
// =====================

window.addEventListener("load", () =>
{
    console.log("CONNECTION ESTABLISHED");
    console.log("AUTHENTICATION SUCCESSFUL");
    console.log("WELCOME TO CONNETYPE NETWORK");
});