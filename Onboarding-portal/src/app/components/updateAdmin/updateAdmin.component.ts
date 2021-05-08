import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Admin} from '../../admin'
import {AdminService} from '../../admin.service'

@Component({
  selector: 'app-updateAdmin',
  templateUrl: './updateAdmin.component.html',
  styleUrls: ['./updateAdmin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  aemail!: string;
  admin: Admin = new Admin();
  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.aemail = this.route.snapshot.params['aemail'];

    this.adminService.getAdminByAemail(this.aemail).subscribe(data => {
      this.admin = data;
    }, error => console.log(error));
  }
onSubmit(){
  this.adminService.updateAdmin(this.aemail, this.admin).subscribe( data =>{
    this.goToAdminList();
  }
  , error => console.log(error));
}

goToAdminList(){
  this.router.navigate(['/displayAdmin']);
}
}
