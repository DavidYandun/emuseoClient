import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';

import { HeaderClientComponent } from './usuario/header-client/header-client.component';
import { LoginComponent } from './usuario/login/login.component';
import { AdminComponent } from './administrador/admin/admin.component';
import { HomeComponent } from './usuario/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ColeccionesUserComponent } from './usuario/colecciones-user/colecciones-user.component';
import { ReinosComponent } from './usuario/reinos/reinos.component';
import { TaxonomiaComponent } from './usuario/taxonomia/taxonomia.component';
import { FichaComponent } from './usuario/ficha/ficha.component';
import { MultimediaComponent } from './usuario/multimedia/multimedia.component';
import { NosotrosComponent } from './usuario/nosotros/nosotros.component';
import { ContactosComponent } from './usuario/contactos/contactos.component';
import { NoticiasComponent } from './usuario/noticias/noticias.component';
import { CrearUsuarioComponent } from './administrador/crear-usuario/crear-usuario.component';
import { HeaderAdminComponent } from './administrador/header-admin/header-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HeaderClientComponent,
    FooterComponent,
    ColeccionesUserComponent,
    ReinosComponent,
    TaxonomiaComponent,
    FichaComponent,
    MultimediaComponent,
    NosotrosComponent,
    ContactosComponent,
    NoticiasComponent,
    CrearUsuarioComponent,
    HeaderAdminComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //clientes
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'colecciones-user',
        component: ColeccionesUserComponent
      },
      {
        path: 'noticias',
        component: NoticiasComponent
      },
      {
        path: 'contactos',
        component: ContactosComponent
      },
      //Adminisitradores
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'crear-usuario',
        component: CrearUsuarioComponent
      },
      {
        path: '',
        component: HomeComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
