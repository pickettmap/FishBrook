import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.css']
})
export class CreateGroupPageComponent implements OnInit {

  form: Group = {
    name: '',
    description: ''
  };
  isSuccessful = false;
  errorMessage = '';

  constructor(private groupService: GroupService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.groupService.create(this.form).subscribe(
      data => {
        console.log(data);

        this.isSuccessful = true;

        this.router.navigate(['/groups'])
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

}
