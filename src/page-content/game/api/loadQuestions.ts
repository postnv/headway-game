export default async function loadQuestions() {
  try {
    const response = await fetch("http://localhost:4000/questions");
    const questions = await response.json();

    return questions;
  } catch (error) {
    return error;
  }
}
