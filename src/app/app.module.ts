import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { BrandsComponent } from './brands/brands.component';
import { Changebgcolorsof } from './Directive/newdirective.directive';
import { MekedirectiveDirective } from './Directive/mekedirective.directive';
import { FornotificationDirective } from './Directive/fornotification.directive';
import { ForbrandDirective } from './Directive/forbrand.directive';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { EnddescriptionComponent } from './enddescription/enddescription.component';
import { HttpClientModule } from '@angular/common/http';
import { MembershipComponent } from './membership/membership.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { LoadComponent } from './load/load.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';
// import { CartService } from './cart.service';



const appRoute: Routes = [
  // {path:'',component: HomeComponent},
  // {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginpageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'membership',component:MembershipComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:LoadComponent},
  {path:'payment',component:PaymentComponent},
  {path:'bill',component:BillComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    NotificationComponent,
    HeaderComponent,
    ProductsComponent,
    FilterComponent,
    BrandsComponent,
    Changebgcolorsof,
    MekedirectiveDirective,
    FornotificationDirective,
    ForbrandDirective,
    LoginpageComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    ContactComponent,
    EnddescriptionComponent,
    MembershipComponent,
    CartComponent,
    LoadComponent,
    PaymentComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoute)
  ],
  // providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
