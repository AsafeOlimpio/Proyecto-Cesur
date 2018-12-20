/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var settings_winter = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9098edcf1042f4c9445e4f63e75a840e&tags=Winter&text=Winter&sort=relevance&format=json&nojsoncallback=1&auth_token=72157704818442865-7ed20b99785497e9&api_sig=0f97f6f0b4f5e15c95fd66c56df697e1",
    "method": "GET",
    "headers": {}
}

var settings_autumn = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9098edcf1042f4c9445e4f63e75a840e&tags=Autumn&sort=relevance&format=json&nojsoncallback=1&auth_token=72157704818442865-7ed20b99785497e9&api_sig=d335dcf6cdb94722f0838c253d762f3b",
    "method": "GET",
    "headers": {}
}

var settings_summer = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9098edcf1042f4c9445e4f63e75a840e&tags=Summer&sort=relevance&format=json&nojsoncallback=1&api_sig=8b0ff362f3a1f1119405d251cba7d550",
    "method": "GET",
    "headers": {}
}

var settings_spring = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9098edcf1042f4c9445e4f63e75a840e&tags=spring&sort=relevance&format=json&nojsoncallback=1&auth_token=72157704818442865-7ed20b99785497e9&api_sig=58f9028b9e66980995fe5ecb684c7815",
    "method": "GET",
    "headers": {}
}

// ---------- Winter -------------//

function getFlickerWinter(callback) {


    $.ajax(settings_winter).done(function (data) {

        $.each(data.photos.photo, function (i, gp) {

            var farmId = gp.farm;
            var serverId = gp.server;
            var id = gp.id;
            var secret = gp.secret;
            var url = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg';
            callback(i, url);
        });
    });
};

getFlickerWinter(function (index, value) {
    $("#carouselWinter > .carousel-inner").append(`
                <div class="carousel-item">
                    <img class="d-block w-100" src=${value} alt="Third slide">
                </div>`);
    $("#carouselWinter > .carousel-inner > :first").addClass("active")
});


// ---------- Autumn -------------//

function getFlickerAutumn(callback) {


    $.ajax(settings_autumn).done(function (data) {

        $.each(data.photos.photo, function (i, gp) {

            var farmId = gp.farm;
            var serverId = gp.server;
            var id = gp.id;
            var secret = gp.secret;
            var url = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg';
            callback(i, url);
        });
    });
};

getFlickerAutumn(function (index, value) {
    $("#carouselAutumn > .carousel-inner").append(`
                <div class="carousel-item">
                    <img class="d-block w-100" src=${value} alt="Third slide">
                </div>`);
    $("#carouselAutumn > .carousel-inner > :first").addClass("active")
});

$('.carousel').on('slide.bs.carousel', function () {

});
// ---------- Summer -------------//

function getFlickerSummer(callback) {


    $.ajax(settings_summer).done(function (data) {

        $.each(data.photos.photo, function (i, gp) {

            var farmId = gp.farm;
            var serverId = gp.server;
            var id = gp.id;
            var secret = gp.secret;
            var url = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg';
            callback(i, url);
        });
    });
};

getFlickerSummer(function (index, value) {
    $("#carouselSummer > .carousel-inner").append(`
                <div class="carousel-item">
                    <img class="d-block w-100" src=${value} alt="Third slide">
                </div>`);
    $("#carouselSummer > .carousel-inner > :first").addClass("active")
});


// ---------- Spring -------------//

function getFlickerSpring(callback) {


    $.ajax(settings_spring).done(function (data) {

        $.each(data.photos.photo, function (i, gp) {

            var farmId = gp.farm;
            var serverId = gp.server;
            var id = gp.id;
            var secret = gp.secret;
            var url = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg';
            callback(i, url);
        });
    });
};

getFlickerSpring(function (index, value) {
    $("#carouselSpring > .carousel-inner").append(`
                <div class="carousel-item">
                    <img class="d-block w-100" src=${value} alt="Third slide">
                </div>`);
    $("#carouselSpring > .carousel-inner > :first").addClass("active")
});

