(function(){
    angular
        .module("quiz")
        .factory("DataService", DataService);
    function DataService(){

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }
    var correctAnswers = [1, 2, 3, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "What is the value of pi?",
            possibilities: [
                {
                    answer: "10"
                },
                {
                    answer: "3.14"
                },
                {
                    answer: "3.19"
                },
                {
                    answer: "1"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who found 0?",
            possibilities: [
                {
                    answer: "Albert Einstein"
                },
                {
                    answer: "Isaac Newton"
                },
                {
                    answer: "Aryabhata"
                },
                {
                    answer: "Ramanujam"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Formula for finding perimeter of a circle:",
            possibilities: [
                {
                    answer: "2 * radius"
                },
                {
                    answer: "radius / 2"
                },
                {
                    answer: "pi * radius * radius"
                },
                {
                    answer: "2 * pi * radius"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Value of 125/2.5=",
            possibilities: [
                {
                    answer: "30"
                },
                {
                    answer: "31"
                },
                {
                    answer: "28"
                },
                {
                    answer: "15"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Correct precedence order of the following operations:",
            possibilities: [
                {
                    answer: "+,-,*,/"
                },
                {
                    answer: "/,*,-,+"
                },
                {
                    answer: "*,/,-,+"
                },
                {
                    answer: "/,*,+,-"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            type: "Mathematics",
            image_url: "pics/1.jpg",
            questions: "5",
            negative: "None" 
        },
        {
            type: "Science",
            image_url: "pics/2.jpg",
            questions: "5",
            negative: "None" 
        },
        {
            type: "English",
            image_url: "pics/3.jpg",
            questions: "5",
            negative: "None" 
        },
        {
            type: "Social Science",
            image_url: "pics/4.jpg",
            questions: "5",
            negative: "None" 
        },

    ];

})();
