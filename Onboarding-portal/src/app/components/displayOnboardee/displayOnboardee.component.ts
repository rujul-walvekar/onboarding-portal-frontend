import { Component, OnInit } from '@angular/core';
import { Onboardee } from '../../onboardee'
import { OnboardService } from '../../onboard.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayOnboardee',
  templateUrl: './displayOnboardee.component.html',
  styleUrls: ['./displayOnboardee.component.css']
})
export class DisplayOnboardeeComponent implements OnInit {
  onboardees!: Onboardee[];
  constructor(private onboardeeService: OnboardService,
    private router: Router) { }

  ngOnInit() {
    this.onboardeeService.getOnboardeeList().subscribe((data)=>{
      this.onboardees=data;
      console.log(data);
        })
  }
  updateOnboardee(emailID: string){
    this.router.navigate(['updateOnboardee', emailID]);
  }
  deleteOnboardee(emailID: string){
    this.onboardeeService.deleteOnboardee(emailID).subscribe((data)=>{
      alert('Onboardee Deleted Succesfully');
      let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
    })
    })
  }

}
