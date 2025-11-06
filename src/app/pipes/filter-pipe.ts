import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../models/user.model';

@Pipe({
  
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



   transform(users: UserModel[] | null, searchTerm: string): UserModel[] {
    if (!users || !searchTerm) {
      return users || [];
    }
    
    const term = searchTerm.toLowerCase().trim();
    
    return users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.company.name.toLowerCase().includes(term)
    );
  }

}
