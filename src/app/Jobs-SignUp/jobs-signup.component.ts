import { Component } from '@angular/core';

@Component({
  selector: 'job-signup-component',
  template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
})
export class MyComponent {
  constructor() {
    this.name = 'Max'
  }
  private name : String;
  sayMyName() {
    console.log('My name is', this.name)
  }
}