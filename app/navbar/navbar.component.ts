import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {

    tabLinks = [
        {label: 'Home', link: '/home'},
        {label: 'Find Books', link: '/bookdisplay'},
        {label: 'Add Book', link: '/addbook'},
        {label: 'My Books', link: '/mybooks'},
        {label: 'Return Books', link: '/returns'},
        {label: 'ReShelf', link: '/reshelf'},

    ];
    activeLinkIndex = 0;

    constructor(private router: Router){
        this.activeLinkIndex =
            this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
    }

}