import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ include RouterModule
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css'],
})
export class UserDetails implements OnInit {
  user: any;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(+userId).subscribe({
        next: (data: any) => {
          this.user = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('❌ Error fetching user:', err);
          this.error = 'Failed to load user details from API.';
          this.loading = false;
        },
      });
    }
  }
}

