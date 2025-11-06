import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

}
