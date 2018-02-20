import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ng4TwitterTimelineService} from 'ng4-twitter-timeline/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm: NgForm;
  defaultQuestion = 'pet';
  answer: '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    sq: '',
    answer: '',
    gender: ''
  };
submited = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.singupForm.form.patchValue({userData: {
      username: suggestedName
      }});
  }
//   onSubmit(form: NgForm) {
// console.log(form);
//   }
  onSubmit() {
    this.submited = true;
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.sq = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.questionAnswer;
    this.user.gender = this.singupForm.value.gender;
    this.singupForm.reset();
  }
}
