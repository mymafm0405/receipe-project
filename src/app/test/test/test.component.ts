import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
  salary: number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  sortedBy: string;
  order: string;

  myFamily: Person[] = [
    {
      name: 'Mahmoud',
      age: 37,
      salary: 4000,
    },
    {
      name: 'Asmaa',
      age: 33,
      salary: 15600,
    },
    {
      name: 'Basem',
      age: 26,
      salary: 2000,
    },
    {
      name: 'Mom',
      age: 60,
      salary: 1000,
    },
    {
      name: 'Dad',
      age: 65,
      salary: 3000,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.order = 'asc';
    this.sortedBy = 'name';
    this.myFamily.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  onSortBy(title: string) {
    if (title === 'name') {
      this.sortedBy = title;
      this.order === 'asc'
        ? this.myFamily.sort((a, b) => (a.name > b.name ? -1 : 1))
        : this.myFamily.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (title === 'age') {
      this.sortedBy = title;
      this.order === 'asc'
        ? this.myFamily.sort((a, b) => a.age - b.age)
        : this.myFamily.sort((a, b) => b.age - a.age);
    } else if (title === 'salary') {
      this.sortedBy = title;
      this.order === 'asc'
        ? this.myFamily.sort((a, b) => a.salary - b.salary)
        : this.myFamily.sort((a, b) => b.salary - a.salary);
    }
    this.order === 'asc' ? (this.order = 'desc') : (this.order = 'asc');
  }
}
