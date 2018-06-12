import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
 

@Component ({ 
    selector: 'app-header', 
    templateUrl: './header.component.html'
}) 

export class HeaderComponent implements OnInit {
    ngOnInit() {
        const myObservable = Observable.create((observer: Observer<String>) => {
            setTimeout(() => {
                observer.next('first pcakage');
             }, 2000); 
             setTimeout(() => {
                observer.next('second pcakage');
             }, 2000); 
             setTimeout(() => {
                observer.error('this doesnt work');
             }, 2000); 
        });
        myObservable.subscribe(
            (data: string) => { console.log(data); }, 
            (error: string) => { console.log(error); },
            () => { console.log('completed'); } 
        );
    }

    constructor() {}

    
}

