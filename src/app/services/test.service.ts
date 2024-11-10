import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Question, Quiz, QuizResult } from '../types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  quizResult: QuizResult = {
    name: "Manjeet",
    id: 1,
    quizId: 1,
  };
  http = inject(HttpClient);

  constructor() { }

  getQuestions() {
    return this.http.get<Question[]>("http://localhost:3000/questions");

  }

  getQuizByCode(code: string) {
    return this.http.get<Quiz[]>("http://localhost:3000/quizs?code=" + code);

  }

  joinQuiz(quizResult: QuizResult) {
    return this.http.post<QuizResult>("http://localhost:3000/quizResults", quizResult);

  }
  getQuizById(id: number) {
    return this.http.get<Quiz>("http://localhost:3000/quizs/" + id);

  }
  updateQuizResult(id: number, result: QuizResult) {
    return this.http.put<any>("http://localhost:3000/quizResults/" + id, result);

  }
  getQuizResult(id: number) {
    return this.http.get<QuizResult>("http://localhost:3000/quizResults/" + id);

  }
}