
interface QuizItem {
    id: number;
    text: string;
    answer: boolean;
}

interface EcosystemQuestion {
    id: number;
    tittle: string;
    quiz: QuizItem[];
}

const data: EcosystemQuestion[][] = [
    [
    {
        id: 0,
        tittle: 'Who is the current President of the United States as of September 2023?',
        quiz: [{
            id: 1,
            text: 'Joe Biden',
            answer: true
        }, {
            id: 2,
            text: 'Donald Trump',
            answer: false
        }, {
            id: 3,
            text: 'Hillary Clinton', 
            answer: false
        }, {
            id: 4,
            text: ' George W. Bush',
            answer: false
        }]
    }], [
    {
        id: 1,
        tittle: 'What is the term for a system of government in which power is held by a small group of people?',
        quiz: [{
            id: 1,
            text: 'Democracy',
            answer: false
        }, {
            id: 2,
            text: 'Oligarchy',
            answer: true
        }, {
            id: 3,
            text: 'Monarchy',
            answer: false
        }, {
            id: 4,
            text: 'Autocracy',
            answer: false
        }]
    }],
[{
    id: 2,
    tittle: 'In which country did the Arab Spring movement begin in late 2010?',
    quiz: [{
        id: 1,
        text: 'Egypt',
        answer: false
    }, {
        id: 2,
        text: 'Tunisia',
        answer: true
    }, {
        id: 3,
        text: 'Syria',
        answer: false
    }, {
        id: 4,
        text: 'Saudi Arabia',
        answer: false
    }]
}],
[{
    id: 3,
    tittle: 'Which of the following is not a branch of the United States government?',
    quiz: [{
        id: 1,
        text: 'Executive',
        answer: false
    }, {
        id: 2,
        text: 'Legislative',
        answer: false
    }, {
        id: 3,
        text: 'Judicial',
        answer: false
    }, {
        id: 4,
        text: 'Parliamentary',
        answer: true
    }]
}], [{
    id: 4,
    tittle: 'What is the term for a government ruled by a single individual with absolute power and authority?',
    quiz: [{
        id: 1,
        text: 'Democracy',
        answer: false
    }, {
        id: 2,
        text: 'Monarchy',
        answer: false
    }, {
        id: 3,
        text: 'Autocracy',
        answer: true
    }, {
        id: 4,
        text: 'Republic',
        answer: false
    }]
}],
[{
    id: 5,
    tittle: 'Who is often referred to as the "Father of Modern Political Science" and wrote "The Prince" in the 16th century?',
    quiz: [{
        id: 1,
        text: 'Karl Marx',
        answer: false
    }, {
        id: 2,
        text: 'John Locke',
        answer: false
    }, {
        id: 3,
        text: 'Niccolò Machiavelli',
        answer: true
    }, {
        id: 4,
        text: 'Thomas Hobbes',
        answer: false
    }]
}],
[{
    id: 6,
    tittle: 'What is the maximum number of terms a U.S. President can serve?',
    quiz: [{
        id: 1,
        text: 'One',
        answer: false
    }, {
        id: 2,
        text: 'Two',
        answer: true
    }, {
        id: 3,
        text: 'Three',
        answer: false
    }, {
        id: 4,
        text: 'Unlimited',
        answer: false
    }]
}]


]
export default data;
