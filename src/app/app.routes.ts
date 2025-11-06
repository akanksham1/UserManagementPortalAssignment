import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { Component } from '@angular/core';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    {path : '', redirectTo: '/users', pathMatch : 'full'},
    {path : 'users', component : UserList},
    {path : 'users/new', component: UserForm},
    {path : 'users/:id', component: UserDetails},
    {path : 'users/:id/edit', component: UserForm},
    {path : '**', redirectTo : '/users'}

];
