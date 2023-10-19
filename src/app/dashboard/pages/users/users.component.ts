import { Observable, filter, map, of, tap } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { UsersBetterService } from './users-better.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userName = '';

  users: Observable<User[]> ;

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService, // MockUsersService // private usersBetterService: UsersBetterService
    private notifierService: NotifierService
    ) {
    

    of(1, 2, 3, 4, 5)
      .pipe(
        tap((valor) => console.log('valor', valor)),
        // map(v => (v.map((numero) => numero *2)) ),
        // tap((valorMapeado) => console.log('valor mapeado', valorMapeado)),
        filter( v => v < 3 )
    )
    .subscribe({
      next: (v) =>
        console.log(v)
    })  

    this.users = this.usersService.getUsers() 
    this.usersService.loadUsers()
    // this.usersService.getUsers().subscribe({
    //   next: (v)=> {
    //     this.users = v
    //     // this.usersService.sendNotification('se cargaron los usuarios')
    //     this.notifierService.showSuccess('Exito', 'Se cargaron los usuarios')
    //   }
    // });
    // console.log(this.usersBetterService.getUsersWithProduct());
  }

  // openUsersDialog(): void {
  //   this.matDialog
  //     .open(UsersDialogComponent)
  //     .afterClosed()
  //     .subscribe({
  //       next: (v) => {
  //         if (!!v) {
  //           this.users = [
  //             ...this.users,
  //             {
  //               ...v,
  //               id: new Date().getTime(),
  //             },
  //           ];
  //         }
  //       },
  //     });
  // }

  // onEditUser(user: User): void {
  //   this.matDialog
  //     .open(UsersDialogComponent, {
  //       data: user,
  //     })
  //     .afterClosed()
  //     .subscribe({
  //       next: (v) => {
  //         if (!!v) {
  //           // CREANDO UNA COPIA DEL ARRAY ACTUAL
  //           // const arrayNuevo = [...this.users];

  //           // const indiceToEdit = arrayNuevo.findIndex((u) => u.id === user.id);

  //           // arrayNuevo[indiceToEdit] = { ...arrayNuevo[indiceToEdit], ...v };

  //           // this.users = [...arrayNuevo];

  //           this.users = this.users.map((u) =>
  //             u.id === user.id ? { ...u, ...v } : u
  //           );
  //         }
  //       },
  //     });
  // }

  // onDeleteUser(userId: number): void {
  //   if (confirm('Esta seguro?')) {
  //     this.users = this.users.filter((u) => u.id !== userId);
  //   }
  // }
}
