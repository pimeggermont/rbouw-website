import {Component, inject, OnInit, REQUEST} from '@angular/core';
import {ProjectViewComponent1} from '../../components/project-view-1/project-view-1.component';
import {ProjectViewComponent2} from '../../components/project-view-2/project-view-2.component';

@Component({
    selector: 'app-home-page',
    imports: [
        ProjectViewComponent1,
        ProjectViewComponent2
    ],
    providers: [],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
    private request = inject(REQUEST);

    ngOnInit() {
        console.log(this.request?.url);
        // this.request.get('/api/projects').subscribe(console.log);
    }
}
