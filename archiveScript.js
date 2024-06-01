document.addEventListener("DOMContentLoaded", function () {
    const flashlight = document.querySelector(".flashlight");

    document.addEventListener("mousemove", function (event) {
        flashlight.style.left = event.pageX + "px";
        flashlight.style.top = event.pageY + "px";
    });
});
