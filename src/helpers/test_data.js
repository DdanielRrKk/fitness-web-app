export const STEPS_DATA = [
    {
        ID: 0,
        TotalSteps: 1000, // int
        GoalSteps: 5000 // int
    },
    {
        ID: 1,
        TotalSteps: 2000, // int
        GoalSteps: 10000 // int
    },
    {
        ID: 2,
        TotalSteps: 3000, // int
        GoalSteps: 10000 // int
    }
];

export const SLEEP_DATA = [
    {
        ID: 0,
        StartSleep: '0:00', // time in format HH:MM
        EndSleep: '8:00', // time in format HH:MM
    },
    {
        ID: 1,
        StartSleep: '0:00', // time in format HH:MM
        EndSleep: '8:30', // time in format HH:MM
    },
    {
        ID: 2,
        StartSleep: '1:00', // time in format HH:MM
        EndSleep: '9:00', // time in format HH:MM
    }
];

export const FOOD_LOG_DATA = [
    {
        ID: 0,
        Name: 'Banana', // string
        Type: 'Breakfast',  // string 'Breakfast' / 'Lunch' / 'Dinner' / 'MorningSnack' / 'AfternootSnack' / 'EveningSnack'
        Calories: 100, // double
        TotalCarbohydrate: 100, // double
        Protein: 100, // double
        TotalFat: 100, // double
        SaturatedFat: 50, // double
        TransFat: 50, // double
        Cholesterol: 100, // double
        Sodium: 100, // double
        Potassium: 100, // double
        DietaryFiber: 100, // double
        Sugars: 100, // double
        VitaminA: 100, // % (100% = 900 mcg RAE)
        VitaminC: 100, // % (100% = 90 mg)
        Calcium: 100, // % (100% = 1300 mg)
        Iron: 100 // % (100% = 18 mg)
    },
    {
        ID: 1,
        Name: 'Apple', // string
        Type: 'Breakfast', // string 'Breakfast' / 'Lunch' / 'Dinner' / 'MorningSnack' / 'AfternootSnack' / 'EveningSnack'
        Calories: 100, // double
        TotalCarbohydrate: 100, // double
        Protein: 100, // double
        TotalFat: 100, // double
        SaturatedFat: 50, // double
        TransFat: 50, // double
        Cholesterol: 100, // double
        Sodium: 100, // double
        Potassium: 100, // double
        DietaryFiber: 100, // double
        Sugars: 100, // double
        VitaminA: 100, // % (100% = 900 mcg RAE)
        VitaminC: 100, // % (100% = 90 mg)
        Calcium: 100, // % (100% = 1300 mg)
        Iron: 100 // % (100% = 18 mg)
    }
];

export const WATER_DATA = [
    {
        ID: 0,
        Amount: 100, // double ml
        Date: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
    },
    {
        ID: 1,
        Amount: 100, // double ml
        Date: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
    }
];

export const TASK_DATA = [
    {
        ID: 0,
        Title: 'Task 1', // string
        DueDate: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
        IsChecked: false
    },
    {
        ID: 1,
        Title: 'Task 2', // string
        DueDate: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
        IsChecked: false
    }
]

export const WORKOUT_PLAN_DATA = {
    Name: "Mr. Olympia PPL Workout", 
    Difficulty: 'Medium',
    Days: 7,
    Workouts: [ {
            ID: 0, Name: 'Push Workout 1', Exercises: [
                { ID: 0, Name: 'Flat Bench Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
                { ID: 1, Name: 'Alternated Dumbbell Shoulder Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
                { ID: 2, Name: 'Dumbbell Chest Flies', Sets: 3, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
                { ID: 3, Name: 'Lateral Raises 1', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
                { ID: 4, Name: 'Dips', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 }
            ]
        }, { ID: 1, Name: 'Pull Workout', Exercises: [
                { ID: 0, Name: 'Pull Downs', Sets: 4, Type: 0, TypeValue: 10, Weights: 40, Rest: 60 },
                { ID: 1, Name: 'Single Hand Bent Over Rows', Sets: 4, Type: 0, TypeValue: 10, Weights: 12.5, Rest: 60 },
                { ID: 2, Name: 'Slight Incline Seated Dumbbell Curls', Sets: 3, Type: 0, TypeValue: 10, Weights: 7.5, Rest: 60 },
                { ID: 3, Name: 'Pull ups', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 },
                { ID: 4, Name: 'EZ Bar Curls', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 }
            ]
        }, { ID: 2, Name: 'Legs Workout 1', Exercises: [
                { ID: 0, Name: 'Run 10k km', Sets: 1, Type: 0, TypeValue: 1, Weights: 0, Rest: 0 }
            ]
        }, { ID: 3, Name: 'Push Workout 2', Exercises: [
                { ID: 0, Name: 'Flat Bench Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
                { ID: 1, Name: 'Alternated Dumbbell Shoulder Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
                { ID: 2, Name: 'Dumbbell Chest Flies', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
                { ID: 3, Name: 'Overhead Triceps Extensions', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
                { ID: 4, Name: 'Lateral Raises', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
                { ID: 5, Name: 'Dips', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 }
            ]
        }, { ID: 4, Name: 'Pull Workout 2', Exercises: [
                { ID: 0, Name: 'Pull Downs', Sets: 4, Type: 0, TypeValue: 10, Weights: 40, Rest: 60 },
                { ID: 1, Name: 'Single Hand Bent Over Rows', Sets: 4, Type: 0, TypeValue: 10, Weights: 12.5, Rest: 60 },
                { ID: 2, Name: 'Slight Incline Seated Dumbbell Curls', Sets: 3, Type: 0, TypeValue: 10, Weights: 7.5, Rest: 60 },
                { ID: 3, Name: 'Pull ups', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 },
                { ID: 4, Name: 'EZ Bar Curls', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 }
            ]
        }, { ID: 5, Name: 'Legs Workout 2', Exercises: [
                { ID: 0, Name: 'Run 10k km', Sets: 1, Type: 0, TypeValue: 1, Weights: 0, Rest: 0 }
            ]
        }, { ID: 6, Name: 'Running', Exercises: [
                { ID: 0, Name: 'Run 10k km', Sets: 1, Type: 1, TypeValue: 120, Weights: 0, Rest: 0 },
                { ID: 1, Name: 'Single Hand Bent Over Rows', Sets: 4, Type: 0, TypeValue: 10, Weights: 12.5, Rest: 60 }
            ]
        },
    ]
};

export const WORKOUT_LOG_DATA = [
    {
        ID: 0,
        Name: 'Push Workout 1', // string
        Exercises: [
            { ID: 0, Name: 'Flat Bench Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
            { ID: 1, Name: 'Alternated Dumbbell Shoulder Press', Sets: 3, Type: 0, TypeValue: 10, Weights: 15, Rest: 60 },
            { ID: 2, Name: 'Dumbbell Chest Flies', Sets: 3, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
            { ID: 3, Name: 'Lateral Raises 1', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 },
            { ID: 4, Name: 'Dips', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 }
        ],
        Date: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
    },
    {
        ID: 1,
        Name: 'Pull Workout', // string
        Exercises: [
            { ID: 0, Name: 'Pull Downs', Sets: 4, Type: 0, TypeValue: 10, Weights: 40, Rest: 60 },
            { ID: 1, Name: 'Single Hand Bent Over Rows', Sets: 4, Type: 0, TypeValue: 10, Weights: 12.5, Rest: 60 },
            { ID: 2, Name: 'Slight Incline Seated Dumbbell Curls', Sets: 3, Type: 0, TypeValue: 10, Weights: 7.5, Rest: 60 },
            { ID: 3, Name: 'Pull ups', Sets: 3, Type: 0, TypeValue: 10, Weights: 0, Rest: 60 },
            { ID: 4, Name: 'EZ Bar Curls', Sets: 4, Type: 0, TypeValue: 10, Weights: 10, Rest: 60 }
        ],
        Date: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
    }
];

export const USER_DATA = {
    FirstName: 'Daniel', // string
    LastName: 'Kostov', // string
    PhotoURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50', // string
    DateOfBirth: '1999-12-25', // daate in format YYYY-MM-DD
    Gender: 'male', // string 'male' / 'female'
    CurrentWeight: 73, // double kg
    Height: 173, // int cm
    ActivityLevel: 1, // int 1 - 5 (1 - sedentary, 5 - very active)

    StepsGoal: 10000, // int steps
    CaloriesGoal: 20000, // int kcal
    SleepGoal: 8, // int hours
    WaterGoal: 1000, // int ml

    Badges: [1, 3, 5], // array of badges
    PersonalRecords: [], // array of personal records
    LastUpdatedAt: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
    CreatedAt: '2023-01-01T00:00:00.000Z', // date in format YYYY-MM-DD:HH:MM:SS.MS
};
