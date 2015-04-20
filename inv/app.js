
var transform = {
    'tag': 'figure',
    'class': 'people ${Category}',
    'html': '<img src="${IMG}"> <figcaption> <span class="p-name"><strong>${Name}</strong></span> <br /> <strong>Category:</strong> <span class="p-cat">${Category}</span> <br /> <strong>Email:</strong> ${Email} <br /> <strong>Bio:</strong> ${Bio} </figcaption>'
}

//TODO: ajax this
var people = [{
    "Name": "Chris Hua",
    "Category": "Web",
    "Email": "chua@wharton.upenn.edu",
    "Bio": "I hate Chris",
    "Twitter": "@chris_hua",
    "IMG": "http://placehold.it/250x250",
    "url": "http://mycynosure.net"
}, {
    "Name": "Thom Eng",
    "Category": "Mechanical",
    "Email": "tomeng728@gmail.com",
    "Bio": "I am bad at drinking",
    "IMG": "http://placehold.it/250x250"
}, {
    "Name": "Sam Summer",
    "Category": "Web",
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


document.getElementById('people-box').innerHTML = json2html.transform(people, transform);

var $container = $('#people-box').imagesLoaded(function() {
    $container.isotope({
        itemSelector: '.people',
        layoutMode: 'masonry',
    });
    // bind filter button click
    $('#people-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.btn-grp').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.btn-primary').removeClass('btn-primary');
            $(this).addClass('btn-primary');
        });
    });

});
