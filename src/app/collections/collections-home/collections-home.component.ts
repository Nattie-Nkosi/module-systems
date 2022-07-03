import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Nattie', age: 26, job: 'Designer', employed: false },
    { name: 'Philane', age: 25, job: 'Software Developer', employed: true },
    { name: 'Charles', age: 27, job: 'Software Tester', employed: true }
  ];

  headers = [
    { key: 'employed', label: 'Has a Job' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
