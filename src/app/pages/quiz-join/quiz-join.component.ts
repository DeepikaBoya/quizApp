// import { Component, inject } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { TestService } from '../../services/test.service';
// import { Router } from '@angular/router';

// interface QuizeResult {
//   name: string;
//   quizId: number;
//   response:[]
// }

// @Component({
//   selector: 'app-quiz-join',
//   standalone: true,
//   imports: [MatInputModule, MatButtonModule, FormsModule],
//   templateUrl: './quiz-join.component.html',
//   styleUrls: ['./quiz-join.component.css']
// })
// export class QuizJoinComponent {
//   code!: string;
//   name!: string;

//   testservice = inject(TestService);
//   router = inject(Router);

//   join() {
//     if (this.code && this.name) {
//       this.testservice.getQuizByCode(this.code).subscribe((result) => {
//         let quiz = result[0];
//         let userQuiz: QuizeResult = {
//           name: this.name,
//           quizId: quiz.id,
//           response:[]
//         };
//         // Pass the correct variable userQuiz here
//         this.testservice.joinQuiz(userQuiz).subscribe(response => {
//           console.log(response);
//           this.testservice.quizResult = response;
//           this.router.navigateByUrl("/quiz-info");
//         });
//       });
//     } else {
//       // show some error
//     }
//   }
// }




import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-join',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule,CommonModule],
  templateUrl: './quiz-join.component.html',
  styleUrls: ['./quiz-join.component.css']
})
export class QuizJoinComponent {
  code: string = '';  // Initialize as an empty string
  name: string = '';  // Initialize as an empty string

  testservice = inject(TestService);
  router = inject(Router);
errorMessage: any;

  join() {
    // Check if both code and name are provided
    if (!this.code || !this.name) {
      alert('Please enter both the quiz code and your name.');
      return;
    }

    // Call the service to get the quiz by code
    this.testservice.getQuizByCode(this.code).subscribe(
      (result) => {
        if (result.length === 0) {
          // If the code is wrong, show an alert message
          alert('Sorry, your quiz code is wrong. Please try again!');
        } else {
          // If code is correct, process the quiz joining logic
          const quiz = result[0];
          const userQuiz = {
            name: this.name,
            quizId: quiz.id,
            response: []
          };

          this.testservice.joinQuiz(userQuiz).subscribe(response => {
            this.testservice.quizResult = response;
            this.router.navigateByUrl("/quiz-info");
          });
        }
      },
      (error) => {
        // Handle network or server errors with an alert
        alert('An error occurred while joining the quiz. Please try again later.');
      }
    );
  }
}