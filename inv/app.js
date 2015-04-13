var transform = {'tag':'figure', 'html': '<img src="${URL}"> <figcaption> ${Name} </figcaption>'}

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

document.getElementById('people-box').innerHTML = json2html.transform(people, transform);