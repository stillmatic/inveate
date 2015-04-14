var $container = $('#people-box');
var transform = {
    'tag': 'figure',
    'class': 'people',
    'html': '<img src="${URL}"> <figcaption> <strong>${Name}</strong> <br /> <strong>Category:</strong> ${Category} <br /> <strong>Email:</strong> ${Email} <br /> <strong>Bio:</strong> ${Bio} </figcaption>'
}

//TODO: ajax this
var people = [{
    "Name": "Chris Hua",
    "Category": "Web Development",
    "Email": "chua@wharton.upenn.edu",
    "Bio": "I hate Chris",
    "Twitter": "@chris_hua",
    "URL": "http://placehold.it/250x250"
}, {
    "Name": "Thom Eng",
    "Category": "Mechanical Design",
    "Email": "",
    "Bio": "Thom & YUUUU",
    "URL": "http://placehold.it/250x250"
}, {
    "Name": "Sam Summer",
    "Category": "Web Development",
    "Email": "chua@wharton.upenn.edu",
    "Bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Twitter": "@chris_hua",
    "URL": "http://placehold.it/250x250"
}, {
    "Name": "Anvita Anchar",
    "Category": "Mechanical Design",
    "Email": "",
    "Bio": "lorem",
    "URL": "http://placehold.it/250x250"
}, {
    "Name": "Anvita Anchar",
    "Category": "Mechanical Design",
    "Email": "",
    "Bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio vitae, error cum quasi odit a est, ullam facilis debitis in animi porro ad molestias non dolorum quod eos. Veritatis, dignissimos.",
    "URL": "http://placehold.it/250x250"
}]

document.getElementById('people-box').innerHTML = json2html.transform(people, transform);

// make this declarative instead of functional
// necessary because j2h doesn't change height of div
function resize() {
    this._originalHeight = this._originalHeight || $(this).height();
    var bodyWidth = $("body").width();
    var widthDiff = bodyWidth - originalWidth;
    var newHeight = this._originalHeight + (widthDiff / 10);
    $(this).css("height", newHeight);
}

$.resize();

$container.isotope({
    itemSelector: '.people',
    layoutMode: 'masonryHorizontal'
});
