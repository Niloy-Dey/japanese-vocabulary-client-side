import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';

const LessonDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [selectedStep, setSelectedStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch('/lessons.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedLesson = data.find((lesson) => lesson.id === parseInt(id));
                if (!selectedLesson) {
                    navigate('/lessons'); 
                } else {
                    setLesson(selectedLesson);
                }
            })
            .catch((error) => console.error('Error fetching lesson:', error));
    }, [id, navigate]);

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setQuizAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: selectedOption,
        }));
    };

    const handleSubmitQuiz = () => {
        setShowResults(true);
    };

    const renderQuiz = (quiz) => (
        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Quiz</h3>
            {quiz.questions.map((question, index) => (
                <div key={index} className="mb-4">
                    <p className="text-gray-800 font-medium">{question.question}</p>
                    <div className="mt-2 space-y-2">
                        {question.options.map((option, optionIndex) => (
                            <label
                                key={optionIndex}
                                className="flex items-center space-x-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    checked={quizAnswers[index] === option}
                                    onChange={() => handleAnswerChange(index, option)}
                                    className="form-radio text-blue-600"
                                />
                                <span className="text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <button
                onClick={handleSubmitQuiz}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-black"
            >
                Submit Quiz
            </button>

            {showResults && (
                <div className="mt-6 p-4 bg-green-100 rounded">
                    <h4 className="text-lg font-bold mb-2">Results</h4>
                    {quiz.questions.map((question, index) => (
                        <p key={index} className="text-gray-800">
                            {question.question} - {quizAnswers[index] === question.answer ? 'Correct' : 'Incorrect'}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );

    if (!lesson) return <p>Loading...</p>; // Loading state if lesson is null

    // Defensive check to ensure steps exist before rendering
    if (!lesson.steps || lesson.steps.length === 0) {
        return <p>No steps available for this lesson.</p>; // Handle case where steps are missing
    }

    return (
        <div>
            <Navbar />
            <div
                className="relative bg-cover bg-center h-[70vh] flex items-center"
                style={{
                    backgroundImage: `url(${lesson.image})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {lesson.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mb-40 mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg lg:col-span-1">
                    <h2 className="text-lg font-bold mb-4">Lesson Steps</h2>
                    <ul className="space-y-2">
                        {lesson.steps.map((step, index) => (
                            <li
                                key={index}
                                className={`p-3 rounded-md cursor-pointer ${selectedStep === index
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-green-100'
                                    }`}
                                onClick={() => {
                                    setSelectedStep(index);
                                    setShowResults(false);
                                    setQuizAnswers({});
                                }}
                            >
                                {step.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold">
                        {lesson.steps[selectedStep]?.title || "No Title Available"}
                    </h2>
                    <p className="mt-4 text-gray-700">
                        {lesson.steps[selectedStep]?.content || "No content available for this step."}
                    </p>

                    {lesson.steps[selectedStep]?.quiz &&
                        renderQuiz(lesson.steps[selectedStep].quiz)}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default LessonDetails;




// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Navbar from '../../Component/Shared/Navbar';
// import Footer from '../../Component/Shared/Footer';

// const LessonDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [lesson, setLesson] = useState(null);
//     const [selectedStep, setSelectedStep] = useState(0);
//     const [quizAnswers, setQuizAnswers] = useState({});
//     const [showResults, setShowResults] = useState(false);

//     useEffect(() => {
//         fetch('/lessons.json')
//             .then((response) => response.json())
//             .then((data) => {
//                 const selectedLesson = data.find((lesson) => lesson.id === parseInt(id));
//                 if (!selectedLesson) navigate('/lessons'); 
//                 setLesson(selectedLesson);
//             })
//             .catch((error) => console.error('Error fetching lesson:', error));
//     }, [id, navigate]);

//     const handleAnswerChange = (questionIndex, selectedOption) => {
//         setQuizAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [questionIndex]: selectedOption,
//         }));
//     };

//     const handleSubmitQuiz = () => {
//         setShowResults(true);
//     };

//     const renderQuiz = (quiz) => (
//         <div className="mt-6">
//             <h3 className="text-xl font-bold mb-4">Quiz</h3>
//             {quiz.questions.map((question, index) => (
//                 <div key={index} className="mb-4">
//                     <p className="text-gray-800 font-medium">{question.question}</p>
//                     <div className="mt-2 space-y-2">
//                         {question.options.map((option, optionIndex) => (
//                             <label
//                                 key={optionIndex}
//                                 className="flex items-center space-x-2 cursor-pointer"
//                             >
//                                 <input
//                                     type="radio"
//                                     name={`question-${index}`}
//                                     value={option}
//                                     checked={quizAnswers[index] === option}
//                                     onChange={() => handleAnswerChange(index, option)}
//                                     className="form-radio text-blue-600"
//                                 />
//                                 <span className="text-gray-700">{option}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             ))}

//             <button
//                 onClick={handleSubmitQuiz}
//                 className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-black"
//             >
//                 Submit Quiz
//             </button>

//             {showResults && (
//                 <div className="mt-6 p-4 bg-green-100 rounded">
//                     <h4 className="text-lg font-bold mb-2">Results</h4>
//                     {quiz.questions.map((question, index) => (
//                         <p key={index} className="text-gray-800">
//                             {question.question} - {quizAnswers[index] === question.answer ? 'Correct' : 'Incorrect'}
//                         </p>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );

//     if (!lesson) return null; 

//     return (
//         <div>
//             <Navbar />
//             <div
//                 className="relative bg-cover bg-center h-[70vh] flex items-center"
//                 style={{
//                     backgroundImage: `url(${lesson.image})`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
//                 <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 text-white text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                         {lesson.title}
//                     </h1>
//                 </div>
//             </div>



//             <div className="max-w-7xl mb-40 mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
//                 <div className="bg-gray-100 p-4 rounded-lg lg:col-span-1">
//                     <h2 className="text-lg font-bold mb-4">Lesson Steps</h2>
//                     <ul className="space-y-2">
//                         {lesson.steps.map((step, index) => (
//                             <li
//                                 key={index}
//                                 className={`p-3 rounded-md cursor-pointer ${selectedStep === index
//                                     ? 'bg-green-500 text-white'
//                                     : 'bg-white text-gray-700 hover:bg-green-100'
//                                     }`}
//                                 onClick={() => {
//                                     setSelectedStep(index);
//                                     setShowResults(false);
//                                     setQuizAnswers({});
//                                 }}
//                             >
//                                 {step.title}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="lg:col-span-3 bg-white shadow-lg rounded-lg p-6">
//                     <h2 className="text-2xl font-bold">
//                         {lesson.steps[selectedStep].title}
//                     </h2>
//                     <p className="mt-4 text-gray-700">
//                         {lesson.steps[selectedStep].content}
//                     </p>

//                     {lesson.steps[selectedStep].quiz &&
//                         renderQuiz(lesson.steps[selectedStep].quiz)}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default LessonDetails;