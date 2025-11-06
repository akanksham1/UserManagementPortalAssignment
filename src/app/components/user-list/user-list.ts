import { Component, computed, OnInit, signal } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { user } from '../../services/user';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users = signal<UserModel[]>([]);
  searchTerm = signal('');
  
  filteredUsers = computed(() => {
    const users = this.users();
    const term = this.searchTerm();
    
    if (!term) return users;
    
    const searchLower = term.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  });

  constructor(public user : user) {}

  // 🎯 LIFECYCLE HOOK
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.user.getUsers().subscribe({
      next: (users) => this.users.set(users),
      error: (err) => console.error('Error loading users:', err)
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

}
