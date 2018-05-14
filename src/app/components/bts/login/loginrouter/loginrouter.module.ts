import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginrouterRoutingModule } from './loginrouter-routing.module';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { ErrorComponent } from '../error/error.component';
import { MatToolbarModule, MatToolbarRow, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatTableDataSource, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { InterceptorService } from '../services/interceptor.service';
import { TokenStorageService } from '../services/tokenstorage.service';
import { UserService } from '../services/user.service';
import { FlexLayoutModule } from '@angular/flex-layout';






@NgModule({
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
MatDialogModule,
MatFormFieldModule,
FormsModule,
  MatCardModule,
MatToolbarModule,
 CommonModule,
  LoginrouterRoutingModule
  ],
  declarations: [  
    
   LoginComponent,
    UserComponent,

    ErrorComponent,],providers:[
      AuthService,
      InterceptorService,
      TokenStorageService,
      UserService
    ]
})
export class LoginrouterModule { }
