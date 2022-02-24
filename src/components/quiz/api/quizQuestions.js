var allQuizQuestions = [
    {
        question: "Humans produce more than 36 billion tons of carbon dioxide per year. Where does most of it end up? ",
        metric: 'Awareness',
        answers: [
            {
                type: "Planet Protector",
                content: "The atmosphere",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Absorbed by trees/plants",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Oceans",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Inhaled by the human population",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "None of these",
                score: 0
            }
        ]
    },
    {
        question: "How do you typically commute to work?",
        metric: "Travel",
        answers: [
            {
                type: "Planet Protector",
                content: "I don't have a commute",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Take the bus or subway",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Walk or ride a bike",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Hire ride-hailing services",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Drive solo",
                score: 0
            }
        ]
    },
    {
        question: "Where are you most likely to shop for clothing?",
        metric: "Spending",
        answers: [
            {
                type: "Planet Protector",
                content: "I haven't spent on clothing in the last 3 months",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Thrift Store",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Clothing Rental Store",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "In-Store",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Major Online Retailers",
                score: 0
            }
        ]
    },
    {
        question: "How likely are you to wash your laundry in cold water?",
        metric: "Energy & Water",
        answers: [
            {
                type: "Planet Protector",
                content: "Very likely",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Somewhat likely",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Depends on the load",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Somewhat unlikely",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Very unlikely",
                score: 0
            }
        ]
    },
    {
        question: "How do you usually prepare your meals?",
        metric: "Food & Waste",
        answers: [
            {
                type: "Planet Protector",
                content: "Plan ahead and buy only what you need",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Be creative with leftovers",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Dining in at restaurants",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Subscribe to a food delivery plan",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Order in via online food delivery services",
                score: 0
            }
        ]
    },
    {
        question: "Which of these home appliances consume the most amount of electricity?",
        metric: "Food & Waste",
        answers: [
            {
                type: "Planet Protector",
                content: "Water Heater",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Air-conditioner",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Desktop computer",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Lighting",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Refrigerator",
                score: 0
            }
        ]
    },
    {
        question: "If you are able to travel overseas, which type of accomodation will you opt for during your stay?",
        metric: "Food & Waste",
        answers: [
            {
                type: "Planet Protector",
                content: "Camping",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Airbnbs",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Green hotel",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Regular hotel",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "Large resorts",
                score: 0
            }
        ]
    },
    {
        question: "What do you look for when you purchase your electronics?",
        metric: "Food & Waste",
        answers: [
            {
                type: "Planet Protector",
                content: "Look for NEA Tick Ratings (5 ticks)",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Built from sustainable sources",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Only Functionality",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Only aesthetic",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "I just buy what I like",
                score: 0
            }
        ]
    },
    {
        question: "Which do you think justifies the best way we can move people and goods?",
        metric: "Spending",
        answers: [
            {
                type: "Planet Protector",
                content: "Drive an electric car",
                score: 40,
            },
            {
                type: "Climate Change Advocate",
                content: "Ship goods more efficiently",
                score: 30,
            },
            {
                type: "Tree in the Forest",
                content: "Fly less on fuel-saving planes",
                score: 20
            },
            {
                type: "Growing Plant",
                content: "Invest in high-speed trains",
                score: 10
            },
            {
                type: "Young Seedling",
                content: "I don't know",
                score: 0
            }
        ]
    },
];

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
}

// let quizQuestions = allQuizQuestions;
shuffleArray(allQuizQuestions);
var quizQuestions = allQuizQuestions.slice(0, 5)

export default quizQuestions;
