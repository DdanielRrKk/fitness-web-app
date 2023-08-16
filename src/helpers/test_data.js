export const STEPS_DATA = [
    {
        ID: 1,
        TotalSteps: 1000, // int
        GoalSteps: 5000 // int
    },
    {
        ID: 2,
        TotalSteps: 2000, // int
        GoalSteps: 10000 // int
    },
    {
        ID: 3,
        TotalSteps: 3000, // int
        GoalSteps: 10000 // int
    }
];

export const SLEEP_DATA = [
    {
        ID: 1,
        StartSleep: '0:00', // time in format HH:MM
        EndSleep: '8:00', // time in format HH:MM
    },
    {
        ID: 2,
        StartSleep: '0:00', // time in format HH:MM
        EndSleep: '8:30', // time in format HH:MM
    },
    {
        ID: 3,
        StartSleep: '1:00', // time in format HH:MM
        EndSleep: '9:00', // time in format HH:MM
    }
];

export const FOOD_DATA = [
    {
        ID: 1,
        Name: 'Banana', // string
        Type: 'Breakfast',  // string 'Breakfast' / 'Lunch' / 'Dinner' / 'MorningSnack' / 'AfternootSnack' / 'EveningSnack'
        CaloriesPerServing: 100, // double
        Carbohydrates: 100, // double
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
        ID: 2,
        Name: 'Apple', // string
        Type: 'Breakfast', // string 'Breakfast' / 'Lunch' / 'Dinner' / 'MorningSnack' / 'AfternootSnack' / 'EveningSnack'
        CaloriesPerServing: 100, // double
        Carbohydrates: 100, // double
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
        ID: 1,
        Amount: 100, // double ml
    },
    {
        ID: 2,
        Amount: 100, // double ml
    }
];

export const USER_DATA = {
    Name: 'Daniel', // string
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
