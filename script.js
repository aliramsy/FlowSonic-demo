/* =========================
   FlowSonic Demo
   JavaScript
========================= */


/*
 * Prevent multiple audio players
 * from playing simultaneously.
 */

const audioPlayers =
    document.querySelectorAll("audio");


audioPlayers.forEach((player) => {

    player.addEventListener("play", () => {

        audioPlayers.forEach((otherPlayer) => {

            if (otherPlayer !== player) {
                otherPlayer.pause();
            }

        });

    });

});


/*
 * Add a small visual indication
 * to the currently playing player.
 */

audioPlayers.forEach((player) => {

    player.addEventListener("play", () => {

        const row =
            player.closest(".audio-row");

        if (row) {
            row.classList.add("playing");
        }

    });


    player.addEventListener("pause", () => {

        const row =
            player.closest(".audio-row");

        if (row) {
            row.classList.remove("playing");
        }

    });


    player.addEventListener("ended", () => {

        const row =
            player.closest(".audio-row");

        if (row) {
            row.classList.remove("playing");
        }

    });

});


/*
 * Highlight navigation section
 * while scrolling.
 */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/*
 * Automatically update the footer year.
 */

const year =
    new Date().getFullYear();

const footer =
    document.querySelector("footer");

if (footer) {

    const yearElement =
        document.createElement("span");

    yearElement.textContent =
        ` ${year}`;

    footer
        .querySelector(".container")
        .appendChild(yearElement);

}