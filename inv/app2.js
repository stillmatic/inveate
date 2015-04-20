var $container = $('#port-box');
var transform = {
    'tag': 'figure',
    'class': 'people',
    'html': '<img src="${IMG}"> <figcaption> <strong>${Name}</strong> <br /> <strong>Category:</strong> ${Category} <br /> <strong>Email:</strong> ${Email} <br /> <strong>Bio:</strong> ${Bio} </figcaption>'
}

//TODO: ajax this
var people = [{
    "Name": "Chris Hua",
    "Category": "Web Development",
    "Email": "chua@wharton.upenn.edu",
    "Bio": "I hate Chris",
    "Twitter": "@chris_hua",
    "IMG": "http://placehold.it/250x250",
    "url": "http://mycynosure.net"
}, {
    "Name": "Thom Eng",
    "Category": "Mechanical Design",
    "Email": "tomeng728@gmail.com",
    "Bio": "I am bad at drinking",
    "IMG": "http://placehold.it/250x250"
}, {
    "Name": "Sam Summer",
    "Category": "Web Development",
    "Email": "ssummer@sas.upenn.edu",
    "Bio": "Hailing from the hinterlands of rural Pennsylvania, Sam's enjoyed the transition to city life. In his spare time, Sam enjoys urban exploration, hardcore parkour, brewing mead, and exotic dancing. According to rumor, Sam once licked his elbow... right on the tip.",
    "IMG": "http://placehold.it/250x250"
}, {
    "Name": "Anvita Anchar",
    "Category": "Web Development",
    "Email": "anvitaa@wharton.upenn.edu",
    "Bio": "lorem",
    "IMG": "http://placehold.it/250x250"
}, {
    "Name": "Anvita Anchar",
    "Category": "Mechanical Design",
    "Email": "",
    "Bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio vitae, error cum quasi odit a est, ullam facilis debitis in animi porro ad molestias non dolorum quod eos. Veritatis, dignissimos.",
    "IMG": "http://placehold.it/250x250"
}]

document.getElementById('port-box').innerHTML = json2html.transform(people, transform);

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
