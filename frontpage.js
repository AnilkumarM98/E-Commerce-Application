function onPageload() {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
}

function checkRadio(value) {
    if (value == "red") {
        // console.log("Choice: ", value);
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("img4").style.display = "none";
    } else if (value == "green") {
        // console.log("Choice: ", value);
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "none";
        document.getElementById("img4").style.display = "none";
    } else if (value == "blue") {
        // console.log("Choice: ", value);
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "block";
        document.getElementById("img4").style.display = "none";
    } else if (value == "purple") {
        // console.log("Choice: ", value);
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("img4").style.display = "block";
    }
}

function addtoCart() {
    toastr.success('Item added to cart successfully!', 'Done')
}