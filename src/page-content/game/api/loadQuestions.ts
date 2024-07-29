import { APP_API_URL } from "@/src/shared/config";

export default async function loadQuestions() {
  try {
    const response = await fetch(`${APP_API_URL}/questions`);
    const questions = await response.json();

    return questions;
  } catch (error) {
    return error;
  }
}
