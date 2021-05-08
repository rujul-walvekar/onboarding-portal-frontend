import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-addAdmin',
  templateUrl: './addAdmin.component.html',
  styleUrls: ['./addAdmin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminService: AdminService,
    private router: Router) { }
    admin: Admin= new Admin()

  ngOnInit() {
  }

  addAdmin(){
    this.adminService.addAdmin(this.admin).
    subscribe( data =>{
      console.log(data);
      this.goToAdminList();
    },
    error => console.log(error));
  }
  goToAdminList(){
    this.router.navigate(['/displayAdmin'])
  }
  onSubmit(){
    console.log(this.admin);
    this.addAdmin();
  }
}

