var $container = $('#people-box');
var transform = {'tag':'figure', 'class' : 'people', 'html': '<img src="${URL}"> <figcaption> ${Name} </figcaption>'}

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
}]

$container.append(json2html.transform(people, transform));

$container.isotope({
    itemSelector: '.people',
    masonry: {
        columnWidth: 250
    }
});