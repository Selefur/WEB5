document.addEventListener("DOMContentLoaded", function () 
{
  // Отримати усі блоки <fieldset>, які містять питання
  const fieldsetsWithQuestions = document.querySelectorAll('form fieldset:has(legend)');
  // Перемішати кожен блок <fieldset> окремо
  fieldsetsWithQuestions.forEach(fieldset => 
    {
    // Отримати усі внутрішні питання в поточному блоку <fieldset>
    const questions = Array.from(fieldset.children);
    // Перемішати масив questions у рандомному порядку
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // Видалити всі питання з поточного блоку <fieldset>
    questions.forEach(question => fieldset.removeChild(question));
    // Додати перемішані питання назад в поточний блок <fieldset>
    shuffledQuestions.forEach(question => fieldset.appendChild(question));
  });
});

function checkQuiz() 
{
    let totalScore = 0; // Ініціалізуємо змінну для загального балу
    // Перевірка відповіді на 1 питання
const q1Answer = document.querySelector('input[name="q1"]:checked');
if (q1Answer && q1Answer.value === 'a') 
{
  totalScore += 1; 
}
// Перевірка відповіді на 2 питання
const q2Answer = document.querySelector('input[name="q2"]:checked');
if (q2Answer && q2Answer.value === 'a') 
{
  totalScore += 1; 
}
// Перевірка відповіді на 3 питання
const q3Answer = document.querySelector('input[name="q3"]:checked');
if (q3Answer && q3Answer.value === 'a') 
{
  totalScore += 1; 
}
// Перевірка відповіді на 4 питання
const q4Answer = document.querySelector('input[name="q4"]:checked');
if (q4Answer && q4Answer.value === 'a') 
{
  totalScore += 1; 
}
// Перевірка відповіді на 5 питання
const q5Answer = document.querySelector('input[name="q5"]:checked');
if (q5Answer && q5Answer.value === 'a') {
  totalScore += 1; 
}



// Перевірка відповідей на питання 6
const q6Answers = Array.from(document.querySelectorAll('input[name="q6[]"]:checked')).map(answer => answer.value);
const correctQ6Answers = ['a', 'b']; // Вірні відповіді 
    totalScore += calculateScore(q6Answers, correctQ6Answers);
// Перевірка відповідей на питання 7
const q7Answers = Array.from(document.querySelectorAll('input[name="q7[]"]:checked')).map(answer => answer.value);
const correctQ7Answers = ['a', 'b']; 
    totalScore += calculateScore(q7Answers, correctQ7Answers);
// Перевірка відповідей на питання 8
const q8Answers = Array.from(document.querySelectorAll('input[name="q8[]"]:checked')).map(answer => answer.value);
const correctQ8Answers = ['a', 'b']; 
    totalScore += calculateScore(q8Answers, correctQ8Answers);
// Перевірка відповідей на питання 9
const q9Answers = Array.from(document.querySelectorAll('input[name="q9[]"]:checked')).map(answer => answer.value);
const correctQ9Answers = ['a', 'b']; 
    totalScore += calculateScore(q9Answers, correctQ9Answers);
// Перевірка відповідей на питання 10
const q10Answers = Array.from(document.querySelectorAll('input[name="q10[]"]:checked')).map(answer => answer.value);
const correctQ10Answers = ['a', 'b']; 
    totalScore += calculateScore(q10Answers, correctQ10Answers);




// Перевірка відповіді на питання 11
  const q11Answer = document.querySelector('select[name="q11"]').value;
  if (q11Answer === 'a') 
  {
    totalScore += 3;
  }
     // Перевірка відповіді на питання 12
  const q12Answer = document.querySelector('select[name="q12"]').value;
  if (q12Answer === 'a') 
  {
    totalScore += 3;
  }
  // Перевірка відповіді на питання 13
  const q13Answer = document.querySelector('select[name="q13"]').value;
  if (q13Answer === 'a') 
  {
    totalScore += 3;
  }
  // Перевірка відповіді на питання 14
  const q14Answer = document.querySelector('select[name="q14"]').value;
  if (q14Answer === 'a') 
  {
    totalScore += 3;
  }
  // Перевірка відповіді на питання 15
  const q15Answer = document.querySelector('select[name="q15"]').value;
  if (q15Answer === 'a') 
  {
    totalScore += 3;
  }


// Перевірка відповіді на питання 16
const q16Answer = document.querySelector('select[name="q16"]').value;
if (q16Answer === 'a') 
{
  totalScore += 3;
}
   // Перевірка відповіді на питання 17
const q17Answer = document.querySelector('select[name="q17"]').value;
if (q17Answer === 'a') 
{
  totalScore += 3;
}
// Перевірка відповіді на питання 18
const q18Answer = document.querySelector('select[name="q18"]').value;
if (q18Answer === 'a') 
{
  totalScore += 3;
}
// Перевірка відповіді на питання 19
const q19Answer = document.querySelector('select[name="q19"]').value;
if (q19Answer === 'a') 
{
  totalScore += 3;
}
// Перевірка відповіді на питання 20
const q20Answer = document.querySelector('select[name="q20"]').value;
if (q20Answer === 'a') 
{
  totalScore += 3;
}

//Складний рівень
for (let questionNumber = 1; questionNumber <= 5; questionNumber++) 
{
  const textareaId = `q${questionNumber}`;
  const textarea = document.getElementById(textareaId);
  const answer = textarea.value.trim();

  // Define the correct answers
  const correctAnswers = 
  [
    "background-color: lightblue;",
    "text-align: center;",
    "box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);",
    "font-size: 16px;",
    "color: red; hover: color: blue;"
  ];

  //Перевірка
  if (correctAnswers[questionNumber - 1] === answer) 
  {
    totalScore += 5;
  }
}
    // Виведення загальної суми балів
  alert(`Загальна сума балів: ${totalScore}`);
}

//Функція для перевірки відповідей завдань з декількома відповідями
function calculateScore(userAnswers, correctAnswers) 
{
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) 
    {
      if (correctAnswers.includes(userAnswers[i])) 
      {
        score += 1.5; // Додаємо 1,5 бала за кожну вірну відповідь
      }
    }
    return score 
  }