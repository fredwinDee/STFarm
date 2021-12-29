
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("hideiframe").style.display = "none";
});


function DoShowIFRAME(tid1, tid2, tid3) {
    document.getElementById(tid1).style.display = "none";
    document.getElementById(tid2).style.display = "";
    document.getElementById(tid3).style.display = "";
}

function DoHideIFRAME(tid1, tid2, tid3) {
    document.getElementById(tid1).style.display = "none";
    document.getElementById(tid2).style.display = "none";
    document.getElementById(tid3).style.display = "";
}

// Function to increase image size
function enlargeImg(theid) {
    img = document.getElementById(theid);
    //   var result = getComputedStyle(img);
    const transformStyle = document.getElementById(theid).style.transform;
    //   if (result.style.transform != "scale(1)") {
    if (transformStyle.includes('2')) {
        img.style.transform = "scale(1)";
        // img.style.object - position = "50% 50%";
    }
    else {
        // Set image size to 2.5 times original
        img.style.transform = "scale(2.5)";
        // img.center();
    }
    // Animation effect
    img.style.transition = "transform 0.25s ease";
}
// Function to reset image size, not currently used
function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}


