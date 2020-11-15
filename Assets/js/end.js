$(document).ready(function () {
    let finalScore = localStorage.getItem('mostRecentScore')
    let topic = localStorage.getItem('topic')
    $(".score").html(finalScore)
    switch(topic){
        case "movie":
            $("body").css({"background-image" : 'url("../Assets/images/movie.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
            })
            break;
        case "music":
            $("body").css({"background-image" : 'url("../Assets/images/music.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
            })
            break
        case "science":
            $("body").css({"background-image" : 'url("../Assets/images/science.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
            })
            break
        case "sports":
            $("body").css({"background-image" : 'url("../Assets/images/sports.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
            })
            break
    }
});