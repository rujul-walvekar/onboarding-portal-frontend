import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Admin} from '../../admin'
import {AdminService} from '../../admin.service'

@Component({
  selector: 'app-displayAdmin',
  templateUrl: './displayAdmin.component.html',
  styleUrls: ['./displayAdmin.component.css']
})
export class DisplayAdminComponent implements OnInit {
  admins!: Admin[];
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.adminService.getAdmins().subscribe((data)=>{
      this.admins=data;
      console.log(data);
        })
  }
  updateAdmin(aemail: string){
    this.router.navigate(['updateAdmin', aemail]);
  }

  deleteAdmin(aemail: string){
    this.adminService.deleteAdmin(aemail).subscribe((data)=>{
      alert('Admin Deleted Succesfully');
      // this.router.navigateUrl(['displayOnboardee'])
      // this.router.navigate(['displayAdmin'])
       let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
    })
  
  })

}
}
