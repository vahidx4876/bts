import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginrouterRoutingModule } from './loginrouter-routing.module';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { ErrorComponent } from '../error/error.component';
import { MatToolbarModule, MatToolbarRow, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatTableDataSource, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from '../services/interceptor.service';
import { TokenStorageService } from '../services/tokenstorage.service';
import { UserService } from '../services/user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from '../../../../glogin/btslogin/register/register.component';
import { AuthGuard } from '../../../../glogin/btslogin/auth.guard';
import { TokenInterceptorService } from '../../../../glogin/btslogin/token-interceptor.service';
import { ServicesModule } from '../../../../modules/shared/services/services.module';






@NgModule({
  imports: [
    ServicesModule,
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
    RegisterComponent,
    ErrorComponent,],
    providers: [

      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }
      
     ],
})
export class LoginrouterModule { }
