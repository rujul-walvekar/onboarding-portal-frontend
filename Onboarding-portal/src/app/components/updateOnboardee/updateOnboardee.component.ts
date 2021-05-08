import { Component, OnInit } from '@angular/core';
import { Onboardee } from '../../onboardee'
import { OnboardService } from '../../onboard.service'

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateOnboardee',
  templateUrl: './updateOnboardee.component.html',
  styleUrls: ['./updateOnboardee.component.css']
})
export class UpdateOnboardeeComponent implements OnInit {

  emailID!: string;
  onboardee: Onboardee = new Onboardee();
  constructor(private onboardeeService: OnboardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.emailID = this.route.snapshot.params['emailID'];

    this.onboardeeService.getOnboardeeByEmailID(this.emailID).subscribe(data => {
      this.onboardee = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.onboardeeService.updateOnboardee(this.emailID, this.onboardee).subscribe( data =>{
      this.goToOnboardeeList();
    }
    , error => console.log(error));
  }

  goToOnboardeeList(){
    this.router.navigate(['/displayOnboardee']);
  }

}
