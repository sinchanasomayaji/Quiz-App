var MAX_questions = 5
var score = 0
var questionCounter = 0
var acceptAnswer = true
var currentQuestion = {}
var availablequestions = {}
$(document).ready(function () {
    questionCounter = 0
    var choice = localStorage.getItem('topic')
    console.log(choice)
    switch(choice){
        case "movie":
            movies()
            break;
        case "music":
            music()
            break;
        case "science":
            science()
            break;
        case "sports":
            sports()
            break;
    }
});

movies = () => {
    $("#topic").html("Movie Quiz")
    $("body").css({"background-image" : 'url("../Assets/images/movie.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
    })
    var questions_on_movies = [
        {
            question: 'Who among the following invented the cinematograph?',
            choice1: 'Lumiere Brothers',
            choice2: 'Mani Sethna',
            choice3: 'Dada Saheb Phalke',
            choice4: 'Dhirendra Nath Ganguly',
            answer: 'choice1',
        },
        {
            question: 'Who among the following made first Film Theatre of India?',
            choice1: 'Dada Saheb Phalke',
            choice2: 'Dhirendra Nath Ganguly',
            choice3: 'Lumiere Brothers',
            choice4: 'Mani Sethna',
            answer: 'choice4',
        },
        {
            question: 'Which of the following regional cinema referred to as Bollywood?',
            choice1: 'Malayalam Cinema',
            choice2: 'Kannada Cinema',
            choice3: 'Telugu Cinema',
            choice4: 'Hindi Cinema',
            answer: 'choice4',
        },
        {
            question: 'On which year, Oscar Award was first awarded?',
            choice1: '1921',
            choice2: '1929',
            choice3: '1932',
            choice4: '1935',
            answer: 'choice2',
        },
        {
            question: 'Charlie Chaplin was born in which Country?',
            choice1: 'USA',
            choice2: 'India',
            choice3: 'England',
            choice4: 'Germany',
            answer: 'choice3',
        }
    ]
    availablequestions = [...questions_on_movies]
    askQuestions()
}

music = () => {
    $("#topic").html("Music Quiz")
    $("body").css({"background-image" : 'url("../Assets/images/music.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
    })
    var questions_on_music = [
        {
            question: 'In 1968, the Beatles visited which place of India?',
            choice1: 'Goa',
            choice2: 'Manali',
            choice3: 'Rishikesh',
            choice4: 'Kerala',
            answer: 'choice3',
        },
        {
            question: 'How many members are there in South Korean mega boyband BTS?',
            choice1: 'Seven',
            choice2: 'Nine',
            choice3: 'Ten',
            choice4: 'Eight',
            answer: 'choice1',
        },
        {
            question: 'What is the nickname for Lady Gaga fandom?',
            choice1: 'Gagains',
            choice2: 'Devils',
            choice3: 'Guardians',
            choice4: 'Little Monsters',
            answer: 'choice4',
        },
        {
            question: 'Whose autobiography was titled Laughter in the Rain?',
            choice1: 'Michael Jackson',
            choice2: 'Neil Sadaka',
            choice3: 'Whitney Houston',
            choice4: 'Steve Miller',
            answer: 'choice2',
        },
        {
            question: 'Who is the singer of \'Rap god\' song?',
            choice1: 'Eminem',
            choice2: 'Ed sheeran',
            choice3: 'Justin Bieber',
            choice4: 'Alan Walker',
            answer: 'choice1',
        }
    ]
    availablequestions = [...questions_on_music]
    askQuestions()
}

science = () => {
    $("#topic").html("Science Quiz")
    $("body").css({"background-image" : 'url("../Assets/images/science.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
    })
    var questions_on_science = [
        {
            question: 'In what galaxy is the solar system located?',
            choice1: 'Milky Way',
            choice2: 'Virgo',
            choice3: 'Cygnus',
            choice4: 'Andromeda',
            answer: 'choice1',
        },
        {
            question: 'What is the hardest known naturally-occurring material?',
            choice1: 'Gold',
            choice2: 'Graphite',
            choice3: 'Diamond',
            choice4: 'Coal',
            answer: 'choice3',
        },
        {
            question: 'What type of mineral is pencil \"lead\" made from?',
            choice1: 'Coal',
            choice2: 'Plastic',
            choice3: 'Rubber',
            choice4: 'Graphite',
            answer: 'choice4',
        },
        {
            question: 'What does a chronometer measure?',
            choice1: 'Temperature',
            choice2: 'Time',
            choice3: 'Velocity',
            choice4: 'Color saturation',
            answer: 'choice2',
        },
        {
            question: 'What is the chemical formula for Sulpuric Acid?',
            choice1: 'NaCl',
            choice2: 'H2Su4',
            choice3: 'HCL',
            choice4: 'H2SO4',
            answer: 'choice4',
        }
    ]
    availablequestions = [...questions_on_science]
    askQuestions()
}

sports = () => {
    $("#topic").html("Sports Quiz")
    $("body").css({"background-image" : 'url("../Assets/images/sports.jpg")',
                    "background-repeat": "no-repeat",
                    "background-size" : "1280px 640px"
    })
    var questions_on_sports = [
        {
            question: 'Where was the first World Athletics Championships held?',
            choice1: 'Berlin',
            choice2: 'Helsinki',
            choice3: 'Florida',
            choice4: 'New York',
            answer: 'choice2',
        },
        {
            question: 'How many \'time outs\' does each team get per half in football?',
            choice1: 'Three',
            choice2: 'Four',
            choice3: 'Two',
            choice4: 'Six',
            answer: 'choice1',
        },
        {
            question: 'How many players should be there in a Cricket Team',
            choice1: 'Seven',
            choice2: 'Eleven',
            choice3: 'Ten',
            choice4: 'Twelve',
            answer: 'choice2',
        },
        {
            question: 'In 2004, the Olympic Games \'came home\' to which city?',
            choice1: 'India',
            choice2: 'France',
            choice3: 'Athens',
            choice4: 'Tokyo',
            answer: 'choice3',
        },
        {
            question: 'What nationality is jockey Frankie Dettori?',
            choice1: 'Chinese',
            choice2: 'American',
            choice3: 'Indian',
            choice4: 'Italian',
            answer: 'choice4',
        }
    ]
    availablequestions = [...questions_on_sports]
    askQuestions()
}

askQuestions = () => {
    if(availablequestions.length === 0 || questionCounter > MAX_questions){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }
    var questionindex = 0
    questionCounter++
    $("#questionbar").text("Question " + questionCounter + "  of  " + MAX_questions)

    questionindex = Math.floor(Math.random() * availablequestions.length)
    currentQuestion = availablequestions[questionindex]
    console.log(questionindex)
    $(".question").text(currentQuestion.question)
    $("#choice1").text(currentQuestion.choice1)
    $("#choice2").text(currentQuestion.choice2)
    $("#choice3").text(currentQuestion.choice3)
    $("#choice4").text(currentQuestion.choice4)

    availablequestions.splice(questionindex, 1)
    acceptAnswer = true
    getAnswer()
}

getAnswer= () =>{
    const choices = Array.from($(".text"))
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptAnswer) return

            acceptAnswer = false
            const selectedchoice = e.target
            const answer = currentQuestion.answer
            let classToApply = selectedchoice.id == currentQuestion.answer ? 'correct' : 'incorrect'
            if(selectedchoice.id === answer){
                score += 100
                $("#score").html("Score: " + score)
                selectedchoice.classList.add(classToApply)
            }
            else {
                console.log("wrong")
                selectedchoice.classList.add(classToApply)
                $("#" + answer).addClass('showcorrect')
            }

            setTimeout(() => {
                selectedchoice.classList.remove(classToApply)
                $("#" + answer).removeClass('showcorrect')
                askQuestions()
            }, 1000)
        })
    })
}

setTopic = (topic) => {
    localStorage.setItem('topic', topic)
}