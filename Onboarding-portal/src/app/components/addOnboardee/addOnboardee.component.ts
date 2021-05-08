import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardService } from 'src/app/onboard.service';
import { Onboardee } from 'src/app/onboardee';

@Component({
  selector: 'app-addOnboardee',
  templateUrl: './addOnboardee.component.html',
  styleUrls: ['./addOnboardee.component.css']
})
export class AddOnboardeeComponent implements OnInit {

  constructor(private onboardeeService: OnboardService,
    private router: Router) { }
  onboardee: Onboardee = new Onboardee()
  ngOnInit() {
    
  }
  addOnboardee(){
    this.onboardeeService.addOnboardee(this.onboardee).subscribe( data =>{
      console.log(data);
      this.goToOnboardeeList();
    },
    error => console.log(error));
  }

  goToOnboardeeList(){
    this.router.navigate(['/displayOnboardee'])
  }
  onSubmit(){
    console.log(this.onboardee);
    this.addOnboardee();
  }

}
