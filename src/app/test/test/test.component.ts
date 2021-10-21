import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Person {
  id: string;
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
  personName = '';
  personAge = 0;
  personSalary = 0;

  sortedBy: string;
  order: string;

  myFamily: Person[] = [];
  familyApiUrl = 'http://localhost:5000/myfamily';

  showServerError = false;
  loading = true;
  currentLoading = 0;
  currentInt: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFamily();
    this.order = 'asc';
    this.sortedBy = 'name';
    this.myFamily.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  getFamily() {
    this.currentInt = setInterval(() => {
      if (this.currentLoading === 100) {
        clearInt();
        loadData();
      } else {
        this.currentLoading = this.currentLoading + 1;
      }
    }, 10);

    const clearInt = () => {
      clearInterval(this.currentInt);
    };

    const loadData = () => {
      this.http.get<Person[]>(this.familyApiUrl).subscribe(
        (data) => {
          this.loading = false;
          this.myFamily = data;
        },
        (error) => {
          this.loading = false;
          console.log(error.status);
          if (error.status === 0) {
            this.showServerError = true;
          }
          console.log(error);
        }
      );
    };
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

  onDelete(id: string) {
    this.http.delete(this.familyApiUrl + '/' + id).subscribe(() => {
      this.myFamily = this.myFamily.filter((person) => person.id !== id);
    });
  }

  onAdd() {
    const newPerson = {
      id: 'app' + this.personName + this.myFamily.length,
      name: this.personName,
      age: this.personAge,
      salary: this.personSalary,
    };
    this.http.post(this.familyApiUrl, newPerson).subscribe(() => {
      this.myFamily.push(newPerson);
      this.personName = '';
      this.personAge = 0;
      this.personSalary = 0;
    });
  }
}
