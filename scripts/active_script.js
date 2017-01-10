var NUM_SLIDES = 4;
var first_done = 0;


function change_active(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName("li");
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active');
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('active');
}

function change_active_contact(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName("li");
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active');
    }
    // add 'active' classs to the element that was clicked
    a[3].classList.add('active');
}






document.onkeydown = function(e) 
{
    switch (e.keyCode) 
    {
        case 39:
        if (first_done == 0)
        {
            var a = document.getElementsByClassName("links_to_slide");
            for (i = 0; i < a.length; i++) {
                if (a[i].classList.contains("active"))
                {
                    a[i].classList.remove('active');
                    a[(i+1) % 4].classList.add('active');
                    $.fn.fullpage.moveTo('Home', (i) % 4);
                    first_done++;
                    break;
                }
            }
            break;
        }
        case 37:
        if (first_done == 0)
        {

            var a = document.getElementsByClassName("links_to_slide");
            for (i = 0; i < a.length; i++) {
                if (a[i].classList.contains("active"))
                {
                    a[i].classList.remove('active');
                    a[(i+3) % 4].classList.add('active');
                    $.fn.fullpage.moveTo('Home', (i) % 4);
                    first_done++
                    break;
                }
            }
            break;
        }
    }
};
