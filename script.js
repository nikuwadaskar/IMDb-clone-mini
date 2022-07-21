// in this function we are goint to give details to the fist launch page visible movie

function ajaxRequstsOne() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/popular?",
    method: "GET",
    success: firstMovieDetails,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

function ajaxRequstsTwo() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/popular?",
    method: "GET",
    success: secondMovieDetails,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

// both reqest are initially given for launch page
ajaxRequstsOne();

ajaxRequstsTwo();

// here we are adding details to the first visible movie details like image backposters name and plot
var movieNumber = 0;
function firstMovieDetails(data) {
  $("#movie-heading-one")
    .html(data.results[movieNumber].original_title)
    .attr("data-movieID", data.results[movieNumber].id);
  $("#watch-the-trailer-one").html(data.results[movieNumber].overview);
  var movieId = data.results[movieNumber].id;
  $("#latest-movie-sneekpic-one").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/original/" +
      data.results[movieNumber].backdrop_path
  );
  $("#latest-movie-poster-one")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w500/" +
        data.results[movieNumber].poster_path
    )
    .attr("data-movieID", data.results[movieNumber].id);

  $("#latest-movie-poster-one-watchlist").attr(
    "data-movieID",
    data.results[movieNumber].id
  );

  // this request is given for traile link which is to be added to the play button
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
    method: "GET",
    success: firstMovieTrailer,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-one")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w200/" +
        data.results[movieNumber + 1].poster_path
    )
    .attr("data-movieID", data.results[movieNumber + 1].id);

  $("#movie-box-heading-one")
    .html(data.results[movieNumber + 1].original_title)
    .attr("data-movieID", data.results[movieNumber + 1].id);
  var movieIdone = data.results[movieNumber + 1].id;

  // this request's this are three request for threee movies is given for the the up next movie which will be shown in the left section
  // first upnext  request
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdone + "/videos?",
    method: "GET",
    success: upNextOne,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w200/" +
        data.results[movieNumber + 2].poster_path
    )
    .attr("data-movieID", data.results[movieNumber + 2].id);
  $("#movie-box-heading-two")
    .html(data.results[movieNumber + 2].original_title)
    .attr("data-movieID", data.results[movieNumber + 3].id);
  var movieIdtwo = data.results[movieNumber + 2].id;

  // second ups next  reqauest

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdtwo + "/videos?",
    method: "GET",
    success: upNextTwo,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-three")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w200/" +
        data.results[movieNumber + 3].poster_path
    )
    .attr("data-movieID", data.results[movieNumber + 3].id);

  $("#movie-box-heading-three")
    .html(data.results[movieNumber + 3].original_title)
    .attr("data-movieID", data.results[movieNumber + 3].id);
  var movieIdthree = data.results[movieNumber + 3].id;

  // third up next request
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdthree + "/videos?",
    method: "GET",
    success: upNextThree,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

// here we are adding trailer to the first movie
function firstMovieTrailer(data2) {
  for (let i = 0; i < data2.results.length; i++) {
    if (data2.results[i].name == "Official Trailer") {
      $("#play-button-one-1").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#play-button-one-1").attr("target", "_blank");

      $("#watch-the-trailer-one").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#watch-the-trailer-one").attr("target", "_blank");

      $("#watch-the-trailer-two").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#watch-the-trailer-two").attr("target", "_blank");
    }
  }
}

// now we adding the details tpo the second visble movie which is initially hidden at the launch

function secondMovieDetails(data) {
  $("#latest-movie-sneekpic-two").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/original/" +
      data.results[movieNumber].backdrop_path
  );
  $("#latest-movie-poster-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w500/" +
        data.results[movieNumber].poster_path
    )
    .attr("data-movieID", data.results[movieNumber].id);

  $("#latest-movie-poster-two-watchlist").attr(
    "data-movieID",
    data.results[movieNumber].id
  );

  $("#movie-heading-two")
    .html(data.results[movieNumber].original_title)
    .attr("data-movieID", data.results[movieNumber].id);
  $("#watch-the-trailer-two").html(data.results[movieNumber].overview);

  var movieId = data.results[movieNumber].id;

  // this request is given for traile link which is to be added to the play button

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
    method: "GET",
    success: secondMovieTrailer,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-one").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" +
      data.results[movieNumber + 1].poster_path
  );

  $("#movie-box-heading-one")
    .html(data.results[movieNumber + 1].original_title)
    .attr("data-movieID", data.results[movieNumber + 1].id);
  var movieIdone = data.results[movieNumber + 1].id;

  // this request's this are three request for threee movies is given for the the up next movie which will be shown in the left section
  // first upnext requst

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdone + "/videos?",
    method: "GET",
    success: upNextOne,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-two").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" +
      data.results[movieNumber + 2].poster_path
  );

  $("#movie-box-heading-two")
    .html(data.results[movieNumber + 2].original_title)
    .attr("data-movieID", data.results[movieNumber + 2].id);
  var movieIdtwo = data.results[movieNumber + 2].id;

  // second up next request

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdtwo + "/videos?",
    method: "GET",
    success: upNextTwo,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });

  $("#movie-box-poster-three").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" +
      data.results[movieNumber + 3].poster_path
  );

  $("#movie-box-heading-three")
    .html(data.results[movieNumber + 3].original_title)
    .attr("data-movieID", data.results[movieNumber + 3].id);
  var movieIdthree = data.results[movieNumber + 3].id;

  // third upnext request

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieIdthree + "/videos?",
    method: "GET",
    success: upNextThree,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

// here we are adding trailer to second movie

function secondMovieTrailer(data2) {
  for (let i = 0; i < data2.results.length; i++) {
    if (data2.results[i].name == "Official Trailer") {
      $("#play-button-two-1").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#play-button-two-1").attr("target", "_blank");

      $("#watch-the-trailer-two").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#watch-the-trailer-two").attr("target", "_blank");
      $("#movie-heading-a-two").attr(
        "href",
        "https:/" + "/youtu.be/" + data2.results[i].key
      );
      $("#movie-heading-a-two").attr("target", "_blank");
    }
  }
}

// the above given upnext requst will evoke the respactive function

function upNextOne(data) {
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].name == "Official Trailer") {
      $("#movie-box-info-playbutton-one").attr(
        "href",
        "https:/" + "/youtu.be/" + data.results[i].key
      );
      $("#movie-box-info-playbutton-one").attr("target", "_blank");
    }
  }
}
function upNextTwo(data) {
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].name == "Official Trailer") {
      $("#movie-box-info-playbutton-two").attr(
        "href",
        "https:/" + "/youtu.be/" + data.results[i].key
      );
      $("#movie-box-info-playbutton-two").attr("target", "_blank");
    }
  }
}

function upNextThree(data) {
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].name == "Official Trailer") {
      $("#movie-box-info-playbutton-three").attr(
        "href",
        "https:/" + "/youtu.be/" + data.results[i].key
      );
      $("#movie-box-info-playbutton-three").attr("target", "_blank");
    }
  }
}

//  Creating sliding efect on Sneek pics

// sliding effect on Next button animatiopn classes are used from animate.css

var one = document.getElementById("latest-movie-sneekpic-one");
var two = document.getElementById("latest-movie-sneekpic-two");

function next() {
  var currclassone = one.getAttribute("class");
  var currclasstwo = two.getAttribute("class");
  if (currclassone.includes("none")) {
    one.setAttribute(
      "class",
      " latest-movie-sneekpic sneekpic-one  animate__animated animate__slideInRight"
    );
    two.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-two animate__animated  animate__slideOutLeft"
    );

    setTimeout(function () {
      two.classList.add("none");
    }, 1000);
    movieNumber += 1;
    // after making one page visible wqe are giving thre request to thee respective finction with added movie number
    ajaxRequstsOne();
  }
  if (currclasstwo.includes("none")) {
    one.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-one animate__animated animate__slideOutLeft"
    );
    two.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-two animate__animated  animate__slideInRight"
    );
    setTimeout(function () {
      one.classList.add("none");
    }, 1000);

    movieNumber += 1;
    // after making one page visible wqe are giving thre request to thee respective finction with added movie number
    ajaxRequstsTwo();
  }
}

// sliding effect on prev button

function prev() {
  if (movieNumber < 0 || movieNumber > 20) {
    movieNumber = 0;
  }
  if (movieNumber == 0) {
    return;
  }
  var currclassone = one.getAttribute("class");
  var currclasstwo = two.getAttribute("class");
  if (currclassone.includes("none")) {
    one.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-one  animate__animated animate__slideInLeft"
    );
    two.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-two animate__animated  animate__slideOutRight"
    );
    setTimeout(function () {
      two.classList.add("none");
    }, 800);
    // after making one page visible wqe are giving thre request to thee respective finction with removed movie number to show previus movie
    movieNumber -= 1;

    ajaxRequstsOne();
  }
  if (currclasstwo.includes("none")) {
    one.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-one  animate__animated animate__slideOutRight"
    );
    two.setAttribute(
      "class",
      "latest-movie-sneekpic sneekpic-two animate__animated  animate__slideInLeft"
    );
    setTimeout(function () {
      one.classList.add("none");
    }, 800);
    // after making one page visible wqe are giving thre request to thee
    // respective finction with removed movie number to show previus movie

    movieNumber -= 1;
    ajaxRequstsTwo();
  }
}

// in theter

var InTheaterMovieNumber = 0;
var InTheaterpageNumber = 1;

// ajax requst for visible section

function ajaxRequstsNowPlayingOne() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/now_playing?",
    method: "GET",
    success: nowPlayingOne,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
      page: InTheaterpageNumber,
    },
  });
}

// adding details to the relevent moveis
function nowPlayingOne(data) {
  $("#in-theaters-movie-list-name-one")
    .html(data.results[InTheaterMovieNumber].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#in-theaters-movie-list-name-two")
    .html(data.results[InTheaterMovieNumber + 1].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#in-theaters-movie-list-name-three")
    .html(data.results[InTheaterMovieNumber + 2].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#in-theaters-movie-list-name-four")
    .html(data.results[InTheaterMovieNumber + 3].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#in-theaters-movie-list-name-five")
    .html(data.results[InTheaterMovieNumber + 4].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);

  $("#in-theaters-movie-list-name-one-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber].id
  );
  $("#in-theaters-movie-list-name-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 1].id
  );
  $("#in-theaters-movie-list-name-three-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 2].id
  );
  $("#in-theaters-movie-list-name-four-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 3].id
  );
  $("#in-theaters-movie-list-name-five-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 4].id
  );

  $("#rating-number-one").html(
    data.results[InTheaterMovieNumber].vote_average + "/10"
  );
  $("#rating-number-two").html(
    data.results[InTheaterMovieNumber + 1].vote_average + "/10"
  );
  $("#rating-number-three").html(
    data.results[InTheaterMovieNumber + 2].vote_average + "/10"
  );
  $("#rating-number-four").html(
    data.results[InTheaterMovieNumber + 3].vote_average + "/10"
  );
  $("#rating-number-five").html(
    data.results[InTheaterMovieNumber + 4].vote_average + "/10"
  );

  $("#in-theaters-movie-list-poster-one")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#in-theaters-movie-list-poster-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 1].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#in-theaters-movie-list-poster-three")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 2].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#in-theaters-movie-list-poster-four")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 3].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#in-theaters-movie-list-poster-five")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 4].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);
}

// giving request for initial launch

ajaxRequstsNowPlayingOne();

// ajax requst for hidden section

function ajaxRequstsNowPlayingTwo() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/now_playing?",
    method: "GET",
    success: nowPlayingTwo,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
      page: InTheaterpageNumber,
    },
  });
}

// adding details to the relevent moveis

function nowPlayingTwo(data) {
  $("#in-theaters-movie-list-name-one-slide-two")
    .html(data.results[InTheaterMovieNumber].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#in-theaters-movie-list-name-two-slide-two")
    .html(data.results[InTheaterMovieNumber + 1].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#in-theaters-movie-list-name-three-slide-two")
    .html(data.results[InTheaterMovieNumber + 2].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#in-theaters-movie-list-name-four-slide-two")
    .html(data.results[InTheaterMovieNumber + 3].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#in-theaters-movie-list-name-five-slide-two")
    .html(data.results[InTheaterMovieNumber + 4].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);

  $("#in-theaters-movie-list-name-one-slide-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber].id
  );
  $("#in-theaters-movie-list-name-two-slide-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 1].id
  );
  $("#in-theaters-movie-list-name-three-slide-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 2].id
  );
  $("#in-theaters-movie-list-name-four-slide-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 3].id
  );
  $("#in-theaters-movie-list-name-five-slide-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 4].id
  );

  $("#rating-number-one-slide-two").html(
    data.results[InTheaterMovieNumber].vote_average + "/10"
  );
  $("#rating-number-two-slide-two").html(
    data.results[InTheaterMovieNumber + 1].vote_average + "/10"
  );
  $("#rating-number-three").html(
    data.results[InTheaterMovieNumber + 2].vote_average + "/10"
  );
  $("#rating-number-four-slide-two").html(
    data.results[InTheaterMovieNumber + 3].vote_average + "/10"
  );
  $("#rating-number-five-slide-two").html(
    data.results[InTheaterMovieNumber + 4].vote_average + "/10"
  );

  $("#in-theaters-movie-list-poster-one-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#in-theaters-movie-list-poster-two-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 1].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#in-theaters-movie-list-poster-three-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 2].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#in-theaters-movie-list-poster-four-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 3].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#in-theaters-movie-list-poster-five-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[InTheaterMovieNumber + 4].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);
}

// slideing effects are given here for the in theater slides for previus button

function prevInTheater() {
  // managing page number and the movie number should not exceed the limit
  InTheaterMovieNumber -= 5;

  if (InTheaterpageNumber <= 1 && InTheaterMovieNumber < 0) {
    InTheaterMovieNumber = 0;
    InTheaterpageNumber = 1;
    return;
  }
  if (InTheaterMovieNumber < 0 && InTheaterpageNumber > 1) {
    InTheaterMovieNumber = 15;
    InTheaterpageNumber--;
  } else if (InTheaterMovieNumber >= 20 || InTheaterMovieNumber <= 0) {
    InTheaterMovieNumber = 0;
  }

  var currclassone = $("#visible-slide").attr("class");
  var currclasstwo = $("#hidden-slide").attr("class");

  if (currclassone.includes("none")) {
    $("#visible-slide").attr(
      "class",
      "moving-slide-one z-Index animate__animated animate__slideInLeft"
    );
    $("#hidden-slide").attr(
      "class",
      "moving-slide-two animate__animated  animate__slideOutRight"
    );
    setTimeout(function () {
      $("#hidden-slide").addClass("none");
    }, 800);

    // givimng request to the relavent page  number to show relevent movies

    ajaxRequstsNowPlayingOne();
  }

  if (currclasstwo.includes("none")) {
    $("#visible-slide").attr(
      "class",
      "moving-slide-one animate__animated animate__slideOutRight"
    );
    $("#hidden-slide").attr(
      "class",
      "moving-slide-two z-Index animate__animated  animate__slideInLeft"
    );
    setTimeout(function () {
      $("#visible-slide").addClass("none");
    }, 800);
    // givimng request to the relavent page  number to show relevent movies

    ajaxRequstsNowPlayingTwo();
  }
}

// slideing effects are given here for the in theater slides for next button

function nextInTheater() {
  InTheaterMovieNumber += 5;
  if (InTheaterMovieNumber < 0 && InTheaterpageNumber == 1) {
    return;
  }

  if (InTheaterMovieNumber >= 20) {
    InTheaterMovieNumber = 0;
    InTheaterpageNumber++;
  }
  var currclassone = $("#visible-slide").attr("class");
  var currclasstwo = $("#hidden-slide").attr("class");

  if (currclassone.includes("none")) {
    $("#visible-slide").attr(
      "class",
      "moving-slide-one z-Index animate__animated animate__slideInRight"
    );
    $("#hidden-slide").attr(
      "class",
      "moving-slide-two animate__animated  animate__slideOutLeft"
    );
    setTimeout(function () {
      $("#hidden-slide").addClass("none");
    }, 800);

    // giving request to the relavent page  number to show relevent movies

    ajaxRequstsNowPlayingOne();
  }

  if (currclasstwo.includes("none")) {
    $("#visible-slide").attr(
      "class",
      "moving-slide-one animate__animated animate__slideOutLeft"
    );
    $("#hidden-slide").attr(
      "class",
      "moving-slide-two z-Index animate__animated  animate__slideInRight"
    );
    setTimeout(function () {
      $("#visible-slide").addClass("none");
    }, 800);

    // givimng request to the relavent page  number to show relevent movies

    ajaxRequstsNowPlayingTwo();
  }
}

// Top rated

var topRatedMovieNumber = 0;
var topRatedpageNumber = 1;

// ajax requst for visible section

function ajaxRequststopRatedOne() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/top_rated?",
    method: "GET",
    success: topRatedOne,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
      page: topRatedpageNumber,
    },
  });
}

// adding details to the relevent moveis

function topRatedOne(data) {
  $("#top-rated-movie-list-name-one")
    .html(data.results[topRatedMovieNumber].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#top-rated-movie-list-name-two")
    .html(data.results[topRatedMovieNumber + 1].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#top-rated-movie-list-name-three")
    .html(data.results[topRatedMovieNumber + 2].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#top-rated-movie-list-name-four")
    .html(data.results[topRatedMovieNumber + 3].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#top-rated-movie-list-name-five")
    .html(data.results[topRatedMovieNumber + 4].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);

  $("#top-rated-movie-list-name-one-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber].id
  );
  $("#top-rated-movie-list-name-two-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 1].id
  );
  $("#top-rated-movie-list-name-three-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 2].id
  );
  $("#top-rated-movie-list-name-four-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 3].id
  );
  $("#top-rated-movie-list-name-five-watchlist").attr(
    "data-movieID",
    data.results[InTheaterMovieNumber + 4].id
  );

  $("#top-rated-rating-number-one").html(
    data.results[topRatedMovieNumber].vote_average + "/10"
  );
  $("#top-rated-rating-number-two").html(
    data.results[topRatedMovieNumber + 1].vote_average + "/10"
  );
  $("#top-rated-rating-number-three").html(
    data.results[topRatedMovieNumber + 2].vote_average + "/10"
  );
  $("#top-rated-rating-number-four").html(
    data.results[topRatedMovieNumber + 3].vote_average + "/10"
  );
  $("#top-rated-rating-number-five").html(
    data.results[topRatedMovieNumber + 4].vote_average + "/10"
  );

  $("#top-rated-release-date-one").html(
    data.results[topRatedMovieNumber].release_date
  );
  $("#top-rated-release-date-two").html(
    data.results[topRatedMovieNumber + 1].release_date
  );
  $("#top-rated-release-date-three").html(
    data.results[topRatedMovieNumber + 2].release_date
  );
  $("#top-rated-release-date-four").html(
    data.results[topRatedMovieNumber + 3].release_date
  );
  $("#top-rated-release-date-five").html(
    "<p>" + data.results[topRatedMovieNumber + 4].release_date + "90 " + "</p>"
  );

  $("#top-rated-movie-list-poster-one")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#top-rated-movie-list-poster-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 1].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#top-rated-movie-list-poster-three")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 2].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#top-rated-movie-list-poster-four")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 3].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#top-rated-movie-list-poster-five")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 4].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);
}

// giving request for initial launch

ajaxRequststopRatedOne();

// ajax requst for hidden section

function ajaxRequststopRatedTwo() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/top_rated?",
    method: "GET",
    success: topRatedTwo,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
      page: InTheaterpageNumber,
    },
  });
}

// adding details to the relevent moveis

function topRatedTwo(data) {
  $("#top-rated-movie-list-name-one-slide-two")
    .html(data.results[topRatedMovieNumber].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#top-rated-movie-list-name-two-slide-two")
    .html(data.results[topRatedMovieNumber + 1].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#top-rated-movie-list-name-three-slide-two")
    .html(data.results[topRatedMovieNumber + 2].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#top-rated-movie-list-name-four-slide-two")
    .html(data.results[topRatedMovieNumber + 3].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#top-rated-movie-list-name-five-slide-two")
    .html(data.results[topRatedMovieNumber + 4].original_title)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);

  $("#top-rated-movie-list-name-one-slide-two-watchlist").attr(
    "data-movieID",
    data.results[topRatedMovieNumber].id
  );
  $("#top-rated-movie-list-name-two-slide-two-watchlist").attr(
    "data-movieID",
    data.results[topRatedMovieNumber + 1].id
  );
  $("#top-rated-movie-list-name-three-slide-two-watchlist").attr(
    "data-movieID",
    data.results[topRatedMovieNumber + 2].id
  );
  $("#top-rated-movie-list-name-four-slide-two-watchlist").attr(
    "data-movieID",
    data.results[topRatedMovieNumber + 3].id
  );
  $("#top-rated-movie-list-name-five-slide-two-watchlist").attr(
    "data-movieID",
    data.results[topRatedMovieNumber + 4].id
  );

  $("#top-rated-rating-number-one-slide-two").html(
    data.results[topRatedMovieNumber].vote_average + "/10"
  );
  $("#top-rated-rating-number-two-slide-two").html(
    data.results[topRatedMovieNumber + 1].vote_average + "/10"
  );
  $("#top-rated-rating-number-three-slide-two").html(
    data.results[topRatedMovieNumber + 2].vote_average + "/10"
  );
  $("#top-rated-rating-number-four-slide-two").html(
    data.results[topRatedMovieNumber + 3].vote_average + "/10"
  );
  $("#top-rated-rating-number-five-slide-two").html(
    data.results[topRatedMovieNumber + 4].vote_average + "/10"
  );

  $("#top-rated-release-date-one-slide-two")
    .html(data.results[topRatedMovieNumber].release_date)
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#top-rated-release-date-two-slide-two")
    .html(data.results[topRatedMovieNumber + 1].release_date)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#top-rated-release-date-three-slide-two")
    .html(data.results[topRatedMovieNumber + 2].release_date)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#top-rated-release-date-four-slide-two")
    .html(data.results[topRatedMovieNumber + 3].release_date)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#top-rated-release-date-five-slide-two")
    .html(data.results[topRatedMovieNumber + 4].release_date)
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);

  $("#top-rated-movie-list-poster-one-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber].id);
  $("#top-rated-movie-list-poster-two-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 1].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 1].id);
  $("#top-rated-movie-list-poster-three-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 2].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 2].id);
  $("#top-rated-movie-list-poster-four-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 3].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 3].id);
  $("#top-rated-movie-list-poster-five-slide-two")
    .css(
      "background-image",
      "url(https://image.tmdb.org/t/p/w780/" +
        data.results[topRatedMovieNumber + 4].poster_path
    )
    .attr("data-movieID", data.results[InTheaterMovieNumber + 4].id);
}

// slideing effects are given here for the in theater slides for previus button

function prevtopRated() {
  // managing page number and the movie number should not exceed the limit

  topRatedMovieNumber -= 5;
  if (topRatedpageNumber <= 1 && topRatedMovieNumber < 0) {
    topRatedMovieNumber = 0;
    topRatedpageNumber = 1;
    return;
  }
  if (topRatedMovieNumber < 0 && topRatedpageNumber > 1) {
    topRatedMovieNumber = 15;
    topRatedpageNumber--;
  } else if (topRatedMovieNumber >= 20 || topRatedMovieNumber <= 0) {
    topRatedMovieNumber = 0;
  }

  var currclassone = $("#top-rated-visible-slide").attr("class");
  var currclasstwo = $("#top-rated-hidden-slide").attr("class");

  if (currclassone.includes("none")) {
    $("#top-rated-visible-slide").attr(
      "class",
      "moving-slide-one z-Index animate__animated animate__slideInLeft"
    );
    $("#top-rated-hidden-slide").attr(
      "class",
      "moving-slide-two animate__animated  animate__slideOutRight"
    );
    setTimeout(function () {
      $("#top-rated-hidden-slide").addClass("none");
    }, 800);
    //  givimng request to the relavent page  number to show relevent movies
    ajaxRequststopRatedOne();
  }

  if (currclasstwo.includes("none")) {
    $("#top-rated-visible-slide").attr(
      "class",
      "moving-slide-one animate__animated animate__slideOutRight"
    );
    $("#top-rated-hidden-slide").attr(
      "class",
      "moving-slide-two z-Index animate__animated  animate__slideInLeft"
    );
    setTimeout(function () {
      $("#top-rated-visible-slide").addClass("none");
    }, 800);

    // givimng request to the relavent page  number to show relevent movies

    ajaxRequststopRatedTwo();
  }
}

// slideing effects are given here for the in theater slides for next button

function nexttopRated() {
  topRatedMovieNumber += 5;

  if (topRatedMovieNumber < 0 && topRatedpageNumber == 1) {
    return;
  }

  if (topRatedMovieNumber >= 20) {
    topRatedMovieNumber = 0;
    topRatedpageNumber++;
  }
  var currclassone = $("#top-rated-visible-slide").attr("class");
  var currclasstwo = $("#top-rated-hidden-slide").attr("class");

  if (currclassone.includes("none")) {
    $("#top-rated-visible-slide").attr(
      "class",
      "moving-slide-one z-Index animate__animated animate__slideInRight"
    );
    $("#top-rated-hidden-slide").attr(
      "class",
      "moving-slide-two animate__animated  animate__slideOutLeft"
    );
    setTimeout(function () {
      $("#top-rated-hidden-slide").addClass("none");
    }, 800);

    // giving request to the relavent page  number to show relevent movies

    ajaxRequststopRatedOne();
  }

  if (currclasstwo.includes("none")) {
    $("#top-rated-visible-slide").attr(
      "class",
      "moving-slide-one animate__animated animate__slideOutLeft"
    );
    $("#top-rated-hidden-slide").attr(
      "class",
      "moving-slide-two z-Index animate__animated  animate__slideInRight"
    );
    setTimeout(function () {
      $("#top-rated-visible-slide").addClass("none");
    }, 800);

    // giving request to the relavent page  number to show relevent movies

    ajaxRequststopRatedTwo();
  }
}

// movie Page

// using local storage to get the the perticular movie number of which details they want

function toMoviePage(movirId) {
  localStorage["moviePageMovieIdStored"] = movirId;
}

moviePageMovieId = localStorage["moviePageMovieIdStored"];

// movie details call

function movieDetailsCall() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + moviePageMovieId + "?",
    method: "GET",
    success: movieDetails,

    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },

    error: function (jqXHR, exception) {
      var msg = "";
      if (jqXHR.status === 0) {
        msg = "Not connect.\n Verify Network.";
      } else if (jqXHR.status == 404) {
        console.log("Requested page not found. [404]");
        msg = "Requested page not found. [404]";
      } else if (jqXHR.status == 500) {
        msg = "Internal Server Error [500].";
      } else if (exception === "parsererror") {
        msg = "Requested JSON parse failed.";
      } else if (exception === "timeout") {
        msg = "Time out error.";
      } else if (exception === "abort") {
        msg = "Ajax request aborted.";
      } else {
        msg = "Uncaught Error.\n" + jqXHR.responseText;
      }
    },
  });
}

Certification();
movieCreditsCall();
moviepageTrailerCall();
movieDetailsCall();
similarMovieCall();

// here there is certain request to get ther varius diff details of the movie

function Certification() {
  $.ajax({
    url:
      "https://api.themoviedb.org/3/movie/" +
      moviePageMovieId +
      "/release_dates?",
    method: "GET",
    success: moviecertification,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

function movieCreditsCall() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + moviePageMovieId + "/credits?",
    method: "GET",
    success: movieCreditsadd,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

function moviepageTrailerCall() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + moviePageMovieId + "/videos?",
    method: "GET",
    success: moviepageTrailerAdd,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

function similarMovieCall() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + moviePageMovieId + "/similar?",
    method: "GET",
    success: similarMovieadd,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

// firstly adding certificates to the movie

let certificationValue = "";
function moviecertification(data) {
  for (let i = 0; i < 22; i++) {
    if (data.results[i].iso_3166_1 == "US") {
      certificationValue = data.results[i].release_dates[0].certification;
    }
  }
}

// adding credits to the movie page like cast director and musician

function movieCreditsadd(data) {
  $("#movie-page-stars").html("");
  $("#movie-page-director").html("");
  $("#movie-page-music").html("");

  for (let i = 0; i < 4; i++) {
    $("#movie-page-stars").append(
      "  " +
        data.cast[i].original_name +
        " As " +
        data.cast[i].character +
        " ; "
    );
  }
  for (let i = 0; i < data.crew.length; i++) {
    if (data.crew[i].job == "Producer") {
      $("#movie-page-director").append(
        "  " + data.crew[i].original_name + " ; "
      );
    }
    if (data.crew[i].job == "Original Music Composer") {
      $("#movie-page-music").append("" + data.crew[i].original_name + " ; ");
    }
  }
}

// adding trailer window using the ifarms

function moviepageTrailerAdd(data) {
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].name == "Official Trailer") {
      $("#movie-page-trailer-player").attr(
        "src",
        "https:/" + "/www.youtube.com/embed/" + data.results[i].key
      );
    } else {
      $("#movie-page-trailer-player").attr(
        "src",
        "https:/" + "/www.youtube.com/embed/" + data.results[i].key
      );
    }
  }

  if (data.results.length == 0) {
    $("#movie-page-trailer-player").replaceWith(
      '<h2 id="movie-page-trailer-player">No trailer to display</h2>'
    );
  }
}

// aading minor details to the movie like name poster running time etc

function movieDetails(data) {
  $("#movie-page-movie-name-year").html(
    "<h1>" +
      data.original_title +
      "</h1> <p>" +
      data.runtime +
      "min. " +
      certificationValue +
      "</p>"
  );

  $("#watchlist-moviepage").attr("data-movieID", data.id);

  $("#my-title").html(data.original_title);

  $("#movie-page-imdb-rating-info-numeric").html(data.vote_average + "/10");

  $("#movie-page-popularity-info").html(data.popularity);

  $("#movie-page-poster").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w780/" + data.poster_path
  );
  $("#videos").attr("data-movieID", data.id);
  $("#photos").attr("data-movieID", data.id);
  $("#movie-page-genre").html("");
  for (let i = 0; i < data.genres.length; i++) {
    $("#movie-page-genre").append("<p>" + data.genres[i].name + "</p>");
  }
  $("#movie-page-plot").html("<p>" + data.overview + "</p>");
}

// then adding similar movie details to ther movie

function similarMovieadd(data) {
  $("#movie-page-movie-box-poster-one").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" + data.results[0].poster_path
  );
  $("#movie-page-movie-box-poster-two").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" + data.results[1].poster_path
  );
  $("#movie-page-movie-box-poster-three").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" + data.results[2].poster_path
  );
  $("#movie-page-movie-box-heading-one")
    .html(data.results[0].title)
    .attr("data-movieID", data.results[0].id);
  $("#movie-page-movie-box-heading-two")
    .html(data.results[1].title)
    .attr("data-movieID", data.results[1].id);
  $("#movie-page-movie-box-heading-three")
    .html(data.results[2].title)
    .attr("data-movieID", data.results[2].id);
  $("#movie-page-movie-box-info-one").html(
    "IMDb Rating " + data.results[0].vote_average
  );
  $("#movie-page-movie-box-info-two").html(
    "IMDb Rating " + data.results[1].vote_average
  );
  $("#movie-page-movie-box-info-three").html(
    "IMDb Rating " + data.results[2].vote_average
  );
}

// adding photos and videos to the movie page of that perticular movie

function photosCall(movieid) {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieid + "/images?",
    method: "GET",
    success: addPhotos,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}
function videosCall(movieid) {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieid + "/videos?",
    method: "GET",
    success: addvideos,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

function showVideos(data) {
  $("#results-more-info").css("display", "flex");
  videosCall(data);
}
function showPhotos(data) {
  $("#results-more-info").css("display", "flex");
  photosCall(data);
}

function addPhotos(data) {
  $("#results-more-info").html(
    `<i class="fa fa-arrow-left" onclick="handleBack()"></i>`
  );
  for (let i = 0; i < data.backdrops.length; i++) {
    $("#results-more-info").append(
      '<p><img src="https://image.tmdb.org/t/p/w500/' +
        data.backdrops[i].file_path +
        '" alt="" /></p>'
    );
  }
}

function addvideos(data) {
  $("#results-more-info").html(
    '<i class="fa fa-arrow-left" onclick="handleBack()"></i>'
  );
  for (let i = 0; i < data.results.length; i++) {
    $("#results-more-info").append(
      '<iframe id="videos-frame" src="https://www.youtube.com/embed/' +
        data.results[i].key +
        '"' +
        'frameborder="0"' +
        "allowfullscreen" +
        'ng-show="showvideo"' +
        ">" +
        "</iframe>"
    );
  }
}

// Search Box
//  after clicking on search box this will happen

SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=" +
  "6f441577909c8fc3b1ee474156d41434" +
  "&query=";

const IMGPATH = "https://image.tmdb.org/t/p/w780";

const searchPage = document.getElementById("search-page");
const searchResult = document.getElementById("search-result");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const search = document.getElementById("search");
const results = document.getElementById("results");
const offlinePage = document.getElementById("offline-page");
const searchTitle = document.getElementById("search-title");
const message = document.getElementById("message");

function handleEvents() {
  if (window.navigator.onLine) {
    $("#search-result").css("display", "block");
    $("#search-page").css("display", "none");

    const title = $("#search").val();

    if (title) {
      $("#search-title").html(title);

      showMovies(SEARCHAPI + title);
      search.value = "";
    } else {
      searchTitle.innerText = "Type something to search";
      searchPage.style.display = "none";
      offlinePage.style.display = "flex";
      message.innerHTML = "Type something to search";
    }
  } else {
    searchPage.style.display = "none";
    offlinePage.style.display = "flex";
  }
}

// this will show the movies by creting new para and img box

function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      if (data.results.length) {
        let i = 0;
        data.results.forEach((element) => {
          if (element.poster_path) {
            const el = document.createElement("div");

            const image = document.createElement("img");
            const text = document.createElement("p");
            const watchlist = document.createElement("p");

            image.setAttribute("data-movieid", data.results[i].id);
            image.setAttribute(
              "onclick",
              "toMoviePage(this.getAttribute('data-movieid')) ; gotoMoviePage()"
            );

            watchlist.setAttribute("data-movieid", data.results[i].id);

            watchlist.innerHTML = `<div data-movieid="${data.results[i].id}" class="addtowatch watchlistEffect 
                    search-one-watchlist" onclick="addTowatchlist((this.getAttribute('data-movieid')))" id="search-${i}    
                    -watchlist"> <img class="addtowatch watchlistEffect search-one-watchlist" src="/Assets/icon.svg" alt="" /></div>`;

            text.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            el.appendChild(watchlist);
            results.appendChild(el);
          }
          i++;
        });
      } else {
        searchTitle.innerText = "No Results Found";
        searchPage.style.display = "none";
        offlinePage.style.display = "flex";
        message.innerHTML = "Sorry, no results found";
      }
    });
}

// when you click on the back button that will reload the page to back

function handleBack() {
  location.reload();
}

// watchlist page
// using this list we will maintain an array t what added and what removed
let listagain = [];

var num = 0;

// this call will build the watchlist element for perticular movie id

function buildWatchlistCall(moviePageMovieId) {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + moviePageMovieId + "?",
    method: "GET",
    success: buildWatchlist,
    data: {
      api_key: "6f441577909c8fc3b1ee474156d41434",
    },
  });
}

// this is IIFE function whenever you load the page this will run and check if there is any previus
// movie available in local storage if yes then it will call to build watch list and add that movie to list again array
(function previousList() {
  let previousNames = JSON.parse(localStorage.getItem("previousNames"));

  if (
    previousNames != "null" &&
    previousNames != null &&
    previousNames.length > 0
  ) {
    for (let i = 0; i < previousNames.length; i++) {
      listagain.push(previousNames[i]);
      buildWatchlistCall(previousNames[i]);
    }
  } else {
    $("#watchlist-movies").html(
      "<h2 class='empty-message'>Empty list please add something.</h2>"
    );
    $("#more-to-watch").html("Nothing to watch");
    num = 0;
  }
})();

// whenever you click on the add to watchlist button that will evoke this function
// this function will check if the movie is is alredy in list again array if no the it will add to build list

// this will remove from the list again and as well from local storage

function removeTowatchlist(data) {
  let previousNames = JSON.parse(localStorage.getItem("previousNames"));
  if (previousNames.includes(data.toString()) || previousNames == data) {
    let i = previousNames.indexOf(data.toString());

    if (i <= 0) {
      let removedElement = previousNames.shift();
      num--;
      console.log(removedElement + " ye nikala gaya hai using first method");
    } else {
      let removedElement = previousNames.splice(i, 1);
      num--;
      console.log(removedElement + " ye nikala gaya hai using second method ");
    }

    window.localStorage.setItem("previousNames", JSON.stringify(previousNames));
  } else {
    console.log("name is not found");
  }

  setTimeout(() => {
    location.reload();
  }, 100);
}

//  this will write a syntax for added movie

function buildWatchlist(data) {
  num++;
  console.log(data.id + " list is bulding for this id");
  $("#watchlist-movies").append(
    `<div  id="movie-${data}-box" class="movie-box">
        <div id="watchlist-movie-box-poster-${data.id}-one" class="movie-box-poster" ></div>
        <div class="movie-box-info">
        <div class="movie-box-info-title">
        <h4 id="watchlist-movie-box-heading-${data.id}-one"onclick="toMoviePage(this.getAttribute('data-movieid')) ; gotoMoviePage()"></h4>
        <p id='watchlist-movie-${data.id}-plot' ></p>
        </div>
        <div class="remove-wathclist" onclick="removeMovie(${data.id})">
         <i class="fas fa-trash-alt"></i>
        </div>
        </div>
        </div>`
  );

  $("#watchlist-movie-box-poster-" + data.id + "-one").css(
    "background-image",
    "url(https://image.tmdb.org/t/p/w200/" + data.poster_path
  );

  $("#watchlist-movie-box-heading-" + data.id + "-one")
    .html(data.title)
    .attr("data-movieID", data.id);
  $("#watchlist-movie-" + data.id + "-plot").html(data.overview);
  $("#more-to-watch").html(num + " Movies to watch");
 
}

function addTowatchlist(data) {
  for (let i = 0; i <= localStorage.length || i <= 1; i++) {
    let previousNames = JSON.parse(localStorage.getItem("previousNames"));
    console.log(previousNames);
    if (
      previousNames != "null" &&
      previousNames != null &&
      previousNames.includes(data)
    ) {
      console.log("already in watchlist");
      continue;
    } else {
      console.log("not there lets push it");
      alert('movie is added to the watchlist')
      listagain.push(data);
      window.localStorage.setItem("previousNames", JSON.stringify(listagain));
      buildWatchlistCall(data);
    }
  }
}

// this will remove perticualar movie

function removeMovie(data) {
  $("#movie-" + data + "-box").remove();
  removeTowatchlist(data);
}

// this wil clear all the local storage

function clearall() {
  num = 0;
  localStorage.clear();
  location.reload();
}

// nav barr dynamics

// after 100px when serch vox will disapper
// then clicking on msgnifyng glass icon will brint it back
// clicking second timee will remve the search box
var firstClick = true;
function serchbox() {
  if (firstClick) {
    $("#search-box").css("display", "flex");

    firstClick = false;
  } else {
    $("#search-box").css("display", "none");
    firstClick = true;
  }
}

// this will give alert when the website pixels are below the accpected
setInterval(() => {
  if (
    (window.screen.availHeight > 695 && window.screen.availHeight < 700) ||
    window.screen.availWidth == 700
  ) {
    alert("For better experince keep resolution moree than 700px*700px");
  }
}, 00);

// connecting two pages
// clicking n perticual function will make you jump one the relevant function

function gotoMoviePage() {
  document.location.href = "/movie-Page.html";
}

function homePage() {
  document.location.href = "/index.html";
}

function gotoWatchlist() {
  document.location.href = "/watchlist.html";
}
