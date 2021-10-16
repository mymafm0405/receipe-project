import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Person {
  id: number;
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

  myFamily: Person[] = [];
  familyApiUrl = 'http://localhost:5000/myfamily';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFamily();
    this.order = 'asc';
    this.sortedBy = 'name';
    this.myFamily.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  getFamily() {
    this.http.get<Person[]>(this.familyApiUrl).subscribe((data) => {
      this.myFamily = data;
    });
  }

  addPerson(newPerson: Person) {
    this.http.post(this.familyApiUrl, newPerson).subscribe(
      () => {
        console.log('done');
      },
      (error) => {
        console.log(error);
      }
    );
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
