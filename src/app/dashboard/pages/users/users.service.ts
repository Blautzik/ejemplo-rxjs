import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES :', url);
    this.sendNotification$.subscribe({
      next: (message) => alert(message)
    })
  }

  private users: User[] = [
    {
      id: 1,
      name: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naruto@mail.com',
    },
    {
      id: 2,
      name: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasuke@mail.com',
    },    
  ];

  private sendNotification$ = new Subject<string>()

  private users$ = new BehaviorSubject<User[]>([]);

  private usersObservable$ = this.users$.asObservable()

  sendNotification(notification: string) : void {
    this.sendNotification$.next(notification)

  }

  loadUsers(): void {
    this.users$.next(this.users)
  }

  getUsers(): Observable<User[]> {
    return this.usersObservable$
  }
}
