import React from 'react';

const AddLesson = () => {
    const lesson = {
        id: 1,
        title: "Lesson 1: Foundations of Japanese Vocabulary",
        description: "Build a strong base in essential vocabulary for everyday life.",
        image: "https://www3.nhk.or.jp/nhkworld/en/learnjapanese/assets/images/programs/conversation.jpg",
        steps: [
            {
                title: "Step 1: Greetings and Basic Expressions",
                content: "Learn common greetings and polite expressions.",
                vocabularies: [
                    {
                        word: "こんにちは",
                        pronunciation: "Konnichiwa",
                        whenToSay: "Use this to greet someone during the day (Hello).",
                        meaning: "Hello",
                        audio: "/audio/konnichiwa.mp3"
                    },
                    {
                        word: "ありがとう",
                        pronunciation: "Arigatou",
                        whenToSay: "Say this to thank someone (Thank you).",
                        meaning: "Thank you",
                        audio: "/audio/arigatou.mp3"
                    }
                ]
            },
            {
                title: "Step 2: Numbers and Counting",
                content: "Learn numbers and age-related terms.",
                vocabularies: [
                    {
                        word: "いち",
                        pronunciation: "Ichi",
                        whenToSay: "Use this to say the number 1.",
                        meaning: "One",
                        audio: "/audio/ichi.mp3"
                    },
                    {
                        word: "に",
                        pronunciation: "Ni",
                        whenToSay: "Use this to say the number 2.",
                        meaning: "Two",
                        audio: "/audio/ni.mp3"
                    },
                    {
                        word: "さん",
                        pronunciation: "San",
                        whenToSay: "Use this to say the number 3.",
                        meaning: "Three",
                        audio: "/audio/san.mp3"
                    }
                ]
            },
            {
                title: "Step 3: Everyday Objects",
                content: "Learn words for common everyday items.",
                vocabularies: [
                    {
                        word: "本",
                        pronunciation: "Hon",
                        whenToSay: "Use this to refer to a book.",
                        meaning: "Book",
                        audio: "/audio/hon.mp3"
                    },
                    {
                        word: "車",
                        pronunciation: "Kuruma",
                        whenToSay: "Use this to refer to a car.",
                        meaning: "Car",
                        audio: "/audio/kuruma.mp3"
                    },
                    {
                        word: "時計",
                        pronunciation: "Tokei",
                        whenToSay: "Use this to refer to a clock or watch.",
                        meaning: "Clock/Watch",
                        audio: "/audio/tokei.mp3"
                    }
                ]
            },
            {
                title: "Step 4: Family and Relationships",
                content: "Learn words for family members and relationships.",
                vocabularies: [
                    {
                        word: "母",
                        pronunciation: "Haha",
                        whenToSay: "Use this to refer to your mother.",
                        meaning: "Mother",
                        audio: "/audio/haha.mp3"
                    },
                    {
                        word: "父",
                        pronunciation: "Chichi",
                        whenToSay: "Use this to refer to your father.",
                        meaning: "Father",
                        audio: "/audio/chichi.mp3"
                    },
                    {
                        word: "兄",
                        pronunciation: "Ani",
                        whenToSay: "Use this to refer to your older brother.",
                        meaning: "Older Brother",
                        audio: "/audio/ani.mp3"
                    }
                ]
            },
            {
                title: "Step 5: Complete the Course",
                content: "Congratulations on completing the course!",
                vocabularies: [],
                completeButton: true
            }
        ]
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            <img src={lesson.image} alt={lesson.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />

            {lesson.steps.map((step, index) => (
                <div key={index} style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h2>{step.title}</h2>
                    <p>{step.content}</p>

                    {step.vocabularies && step.vocabularies.length > 0 && (
                        <div style={{ marginTop: '10px' }}>
                            <h3>Vocabularies:</h3>
                            <ul>
                                {step.vocabularies.map((vocab, vocabIndex) => (
                                    <li key={vocabIndex} style={{ marginBottom: '10px' }}>
                                        <strong>{vocab.word}</strong> ({vocab.pronunciation}) - {vocab.meaning}
                                        <p><em>{vocab.whenToSay}</em></p>
                                        <audio controls>
                                            <source src={vocab.audio} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {step.completeButton && (
                        <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Complete Lesson
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AddLesson;
