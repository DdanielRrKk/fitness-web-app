import React from 'react';

// import { Link } from 'react-router-dom';

const FAQ_LIST = [ {
    id: 1,  question: "What is the best way to lose weight?",
    answer: "A combination of a healthy diet and regular exercise is the best way to lose weight."
}, {
    id: 2, question: "What is the best time of day to exercise?",
    answer: "The best time to exercise is when it's convenient for you and fits into your schedule. Some people prefer to exercise in the morning, while others prefer to exercise in the evening."
}, {
    id: 3, question: "How much exercise should I do per week to stay healthy?",
    answer: "The American Heart Association recommends at least 150 minutes of moderate intensity aerobic exercise or 75 minutes of vigorous aerobic exercise per week."
}, {
    id: 4, question: "What are some good exercises for building muscle?",
    answer: "Some good exercises for building muscle include weightlifting, resistance band exercises, and bodyweight exercises such as push-ups and squats."
}, {
    id: 5, question: "How many calories should I eat in a day to lose weight?",
    answer: "The number of calories you should eat in a day depends on factors such as your age, gender, weight, and activity level. A general guideline is to aim for a daily calorie deficit of 500-1000 calories to lose weight."
}, {
    id: 6, question: "What is the best diet for weight loss?",
    answer: 'There is no one "best" diet for weight loss as different diets work for different people. Some popular diets for weight loss include low-carb diets, Mediterranean diets, and calorie-controlled diets.'
}, {
    id: 7, question: "How much water should I drink in a day?",
    answer: "It's recommended to drink at least 8 glasses (64 ounces) of water per day to stay hydrated."
}, {
    id: 8, question: "How many hours of sleep should I get per night?",
    answer: "Adults should aim for 7-9 hours of sleep per night."
}, {
    id: 9, question: "What are the best foods for fueling a workout?",
    answer: "Foods that are high in carbohydrates and low in fat are good for fueling a workout. Examples include whole grain bread, pasta, rice, fruits, and vegetables."
}, {
    id: 10, question: "How can I stay motivated to exercise and stick to a healthy diet?",
    answer: "Finding a workout buddy, setting achievable goals, and tracking your progress can help keep you motivated. Celebrating small victories along the way can also help maintain motivation."
}
];

function MainLearnPage() {
    const [faqList, setFaqList] = React.useState(FAQ_LIST);

    return (
        <div className='main-container'>
            <p>Calculations</p>

            <button className='button-container p-4' onClick={() => console.log('Pressed')}>
                <p>Health Calculators</p>
            </button>
            
            <p>FAQ</p>

            <div className='flex flex-col w-full gap-4'>
                {faqList.map(faq => 
                    <div className='button-container p-4 items-start' key={faq.id}>
                        <p className='font-bold mb-2'>{faq.id}. {faq.question}</p>
                        <p>{faq.answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainLearnPage;
