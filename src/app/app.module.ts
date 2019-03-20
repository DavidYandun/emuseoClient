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


///////////////COMPONENTS//////////////////

//header-footer///
import { HomeComponent } from './usuario/home/home.component';
import { HeaderClientComponent } from './usuario/header-client/header-client.component';
import { HeaderAdminComponent } from './administrador/header-admin/header-admin.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './usuario/login/login.component';



//vistas_usuario
import { ColeccionesUserComponent } from './usuario/colecciones-user/colecciones-user.component';
import { ReinosComponent } from './usuario/reinos/reinos.component';
import { TaxonomiaComponent } from './usuario/taxonomia/taxonomia.component';
import { FichaComponent } from './usuario/ficha/ficha.component';
import { MultimediaComponent } from './usuario/multimedia/multimedia.component';
import { NosotrosComponent } from './usuario/nosotros/nosotros.component';
import { ContactosComponent } from './usuario/contactos/contactos.component';
import { NoticiasComponent } from './usuario/noticias/noticias.component';

//vistas_administrador
import { AdminComponent } from './administrador/admin/admin.component';
import { AdminCollectionComponent } from './administrador/admin-collection/admin-collection.component';
import { ListCollectionComponent } from './administrador/list-collection/list-collection.component';
import { CollectionComponent } from './administrador/collection/collection.component';

//users
import { CreateUserComponent } from './administrador/users/create-user/create-user.component';
import { ControlUserComponent } from './administrador/users/control-user/control-user.component';
import { EditUserComponent } from './administrador/users/edit-user/edit-user.component';
import { RolComponent } from './administrador/rol/rol.component';

//dwc_identification
import { VerificationComponent } from './administrador/dwc_identification/verification/verification.component';
import { CreateVerificationComponent } from './administrador/dwc_identification/create-verification/create-verification.component';
import { ReadVerificationComponent } from './administrador/dwc_identification/read-verification/read-verification.component';
import { UpdateVerificationComponent } from './administrador/dwc_identification/update-verification/update-verification.component';
import { CreateIdentificationComponent } from './administrador/dwc_identification/create-identification/create-identification.component';
import { DialogCreateVerificationstatusComponent } from './administrador/dwc_identification/dialog-create-verificationstatus/dialog-create-verificationstatus.component';

//dwc_record-level
import { CreateRecordLevelComponent } from './administrador/dwc_record-level/create-record-level/create-record-level.component';
import { DialogCreateBasisofrecordComponent } from './administrador/dwc_record-level/dialog-create-basisofrecord/dialog-create-basisofrecord.component';
//occurrence
import { CreateOccurrenceComponent } from './administrador/dwc_occurrence/create-occurrence/create-occurrence.component';
import { DialogCreateLifestageComponent } from './administrador/dwc_occurrence/dialog-create-lifestage/dialog-create-lifestage.component';
import { DialogCreateReproductiveconditionComponent } from './administrador/dwc_occurrence/dialog-create-reproductivecondition/dialog-create-reproductivecondition.component';
import { DialogCreateSexComponent } from './administrador/dwc_occurrence/dialog-create-sex/dialog-create-sex.component';
import { DialogCreateEstablishmentmeansComponent } from './administrador/dwc_occurrence/dialog-create-establishmentmeans/dialog-create-establishmentmeans.component';
import { DialogCreateOrganismquantitytypeComponent } from './administrador/dwc_occurrence/dialog-create-organismquantitytype/dialog-create-organismquantitytype.component';
//organism
import { CreateOrganismComponent } from './administrador/dwc_organism/create-organism/create-organism.component';
//event
import { CreateEventComponent } from './administrador/dwc_event/create-event/create-event.component';
//location
import { CreateLocationComponent } from './administrador/dwc_location/create-location/create-location.component';
import { DialogCreateCountryComponent } from './administrador/dwc_location/dialog-create-country/dialog-create-country.component';
import { DialogCreateStateprovinceComponent } from './administrador/dwc_location/dialog-create-stateprovince/dialog-create-stateprovince.component';
import { DialogCreateCountyComponent } from './administrador/dwc_location/dialog-create-county/dialog-create-county.component';
import { DialogCreateMunicipalityComponent } from './administrador/dwc_location/dialog-create-municipality/dialog-create-municipality.component';
import { DialogCreateContinentComponent } from './administrador/dwc_location/dialog-create-continent/dialog-create-continent.component';
import { DialogCreateWaterbodyComponent } from './administrador/dwc_location/dialog-create-waterbody/dialog-create-waterbody.component';
import { DialogCreateIslandComponent } from './administrador/dwc_location/dialog-create-island/dialog-create-island.component';
import { DialogCreateGeodeticdatumComponent } from './administrador/dwc_location/dialog-create-geodeticdatum/dialog-create-geodeticdatum.component';
import { DialogCreateGeoreferenceverificationstatusComponent } from './administrador/dwc_location/dialog-create-georeferenceverificationstatus/dialog-create-georeferenceverificationstatus.component';

//geologicalcontext
import { CreateGeologicalcontextComponent } from './administrador/dwc_geologicalcontext/create-geologicalcontext/create-geologicalcontext.component';
import { DialogCreateEonComponent } from './administrador/dwc_geologicalcontext/dialog-create-eon/dialog-create-eon.component';
import { DialogCreateEraComponent } from './administrador/dwc_geologicalcontext/dialog-create-era/dialog-create-era.component';
import { DialogCreatePeriodComponent } from './administrador/dwc_geologicalcontext/dialog-create-period/dialog-create-period.component';
import { DialogCreateEpochComponent } from './administrador/dwc_geologicalcontext/dialog-create-epoch/dialog-create-epoch.component';

//taxon
import { CreateTaxonComponent } from './administrador/dwc_taxon/create-taxon/create-taxon.component';
import { DialogCreatePhylumComponent } from './administrador/dwc_taxon/dialog-create-phylum/dialog-create-phylum.component';
import { DialogCreateClassComponent } from './administrador/dwc_taxon/dialog-create-class/dialog-create-class.component';
import { DialogCreateOrderComponent } from './administrador/dwc_taxon/dialog-create-order/dialog-create-order.component';
import { DialogCreateFamilyComponent } from './administrador/dwc_taxon/dialog-create-family/dialog-create-family.component';
import { DialogCreateGenusComponent } from './administrador/dwc_taxon/dialog-create-genus/dialog-create-genus.component';
import { DialogCreateSpecieComponent } from './administrador/dwc_taxon/dialog-create-specie/dialog-create-specie.component';

//multimedia
import { CreateMultimediaComponent } from './administrador/mul_multimedia/create-multimedia/create-multimedia.component';



import { AuthGuard } from './guards/auth.guard';
///////////SERVICES///////////////////
//users
import { RolService } from './services/users/rol.service';
import { UserService } from './services/users/user.service';
import { AuthService } from './services/auth.service';

//identification
import { VerificationService } from './services/dwc_identification_services/verification.service';
import { IdentificationService } from './services/dwc_identification_services/identification.service';
//recordlevel
import { RecordLevelService } from './services/dwc_record-level_services/record-level.service';
import { BasisofrecordService } from './services/dwc_record-level_services/basisofrecord.service';

//occurrence
import { OccurrenceService } from './services/dwc_occurrence_services/occurrence.service';
//organism
import { OrganismService } from './services/dwc_organism_services/organism.service';
//event
import { EventService } from './services/dwc_event_services/event.service';
//location
import { LocationService } from './services/dwc_location_services/location.service';
//geologicalcontext
import { GeologicalcontextService } from './services/dwc_geologicalcontext_service/geologicalcontext.service';
//taxon
import { TaxonService } from './services/dwc_taxon_services/taxon.service';


//institutions
import { EntidadService } from './services/usu_institution/entidad.service';
//multimedia
import { MultimediaService } from './services/mul_multimedia_service/multimedia.service';












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
    HeaderAdminComponent,
    CreateUserComponent,
    ControlUserComponent,
    RolComponent,
    EditUserComponent,
    VerificationComponent,
    CreateVerificationComponent,
    ReadVerificationComponent,
    UpdateVerificationComponent,
    CreateIdentificationComponent,
    AdminCollectionComponent,
    CreateRecordLevelComponent,
    CreateOccurrenceComponent,
    CreateOrganismComponent,
    CreateEventComponent,
    CreateLocationComponent,
    CreateGeologicalcontextComponent,
    CreateTaxonComponent,
    ListCollectionComponent,
    CollectionComponent,
    DialogCreatePhylumComponent,
    DialogCreateClassComponent,
    DialogCreateOrderComponent,
    DialogCreateFamilyComponent,
    DialogCreateGenusComponent,
    DialogCreateSpecieComponent,
    DialogCreateVerificationstatusComponent,
    DialogCreateBasisofrecordComponent,
    DialogCreateLifestageComponent,
    DialogCreateReproductiveconditionComponent,
    DialogCreateSexComponent,
    DialogCreateEstablishmentmeansComponent,
    DialogCreateOrganismquantitytypeComponent,
    DialogCreateCountryComponent,
    DialogCreateStateprovinceComponent,
    DialogCreateCountyComponent,
    DialogCreateMunicipalityComponent,
    DialogCreateContinentComponent,
    DialogCreateWaterbodyComponent,
    DialogCreateIslandComponent,
    DialogCreateGeodeticdatumComponent,
    DialogCreateGeoreferenceverificationstatusComponent,
    DialogCreateEonComponent,
    DialogCreateEraComponent,
    DialogCreatePeriodComponent,
    DialogCreateEpochComponent,
    CreateMultimediaComponent,

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
      {
        path: 'reinos',
        component: ReinosComponent
      },
      //Adminisitradores
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin-collection',
        component: AdminCollectionComponent,
      },
      {
        path: 'list-collection',
        component: ListCollectionComponent,
      },
      {
        path: 'collection',
        component: CollectionComponent,
      },
      //users
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'control-user',
        component: ControlUserComponent
      },
      {
        path: 'rol',
        component: ControlUserComponent
      },
      //identification
      {
        path: 'verifications',
        component: VerificationComponent
      },
      {
        path:'multimedia',
        component:CreateMultimediaComponent
      },
      {
        path: '',
        component: HomeComponent
      },

    ])
  ],
  entryComponents: [DialogCreatePhylumComponent, DialogCreateClassComponent, DialogCreateOrderComponent,
    DialogCreateFamilyComponent, DialogCreateGenusComponent, DialogCreateSpecieComponent,
    DialogCreateVerificationstatusComponent,
    DialogCreateBasisofrecordComponent,
    DialogCreateLifestageComponent, DialogCreateReproductiveconditionComponent, DialogCreateSexComponent,
    DialogCreateEstablishmentmeansComponent, DialogCreateOrganismquantitytypeComponent,
    DialogCreateCountryComponent, DialogCreateStateprovinceComponent, DialogCreateCountyComponent, DialogCreateMunicipalityComponent,
    DialogCreateContinentComponent, DialogCreateWaterbodyComponent, DialogCreateIslandComponent, DialogCreateGeodeticdatumComponent,
    DialogCreateGeoreferenceverificationstatusComponent,
    DialogCreateEonComponent, DialogCreateEraComponent, DialogCreatePeriodComponent, DialogCreateEpochComponent
  ],
  providers: [RolService, UserService, AuthService, VerificationService, IdentificationService,
    RecordLevelService, OccurrenceService, OrganismService, EventService, LocationService,
    GeologicalcontextService, TaxonService, EntidadService, BasisofrecordService,
    MultimediaService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
