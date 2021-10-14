import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface PROFILE {
  name: string;
  age: number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();
  myNumber = 10;
  myProfile: PROFILE;
  constructor() {}

  ngOnInit() {
    //   const myPromise = new Promise<PROFILE>((resolve, reject) => {
    //     if (this.myNumber === 10) {
    //       setTimeout(() => {
    //         const myProfile2: PROFILE = {
    //           name: 'Mahmoud',
    //           age: 37,
    //         };
    //         resolve(myProfile2);
    //       }, 2000);
    //     } else {
    //       const error = 'Good bye baby!';
    //       setTimeout(() => {
    //         reject(error);
    //       }, 2000);
    //       console.log('after my async done');
    //     }
    //   });
    //   const testAsync = async () => {
    //     try {
    //       const data = await myPromise;
    //       this.myProfile = data;
    //       console.log(data);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };
    //   testAsync();
  }

  onSelect(link: string) {
    this.linkClicked.emit(link);
  }
}
