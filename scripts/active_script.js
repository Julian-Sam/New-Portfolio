function change_active(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName("li");
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        console.log(a[i]);
        a[i].classList.remove('active');
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('active');
}