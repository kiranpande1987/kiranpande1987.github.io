// Get the modal
var modal = document.getElementById("resume_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("resume_preview");
img.onclick = function(){
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);


}