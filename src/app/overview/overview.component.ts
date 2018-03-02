import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //this gives access to route parameters 
import { Router } from '@angular/router'; //for implementing component based routing

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) //dependecy injection
  { 
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['']); // the quote '' implies the page/route path to redirect
  }

}
