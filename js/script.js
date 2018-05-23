document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: "center",
            /*inline: "start",*/
            behavior: 'smooth',
            /*padding: {T:200, B:200}*/
        });
    });
});

// test bouton

// fin test bouton

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});
