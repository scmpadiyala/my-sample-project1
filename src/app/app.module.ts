import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TestComponentComponent } from "./test-component/test-component.component";
import { TestComponent } from "./test/test.component";
import { TestService } from "./test.service";
import { EventbindingComponent } from "./eventbinding/eventbinding.component";
import { TestDirective } from "./test.directive";
import { RouterModule } from "@angular/router";
import { HomeComponentComponent } from "./routing/home-component/home-component.component";
import { LoginComponentComponent } from "./routing/login-component/login-component.component";
import { InvalidURLComponentComponent } from "./routing/invalid-urlcomponent/invalid-urlcomponent.component";
import { SampleService } from "./sample.service";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { BindingComponent } from "./binding/binding.component";
import { ApiaccesComponent } from "./apiacces/apiacces.component";
import { ApiaccesService } from "./apiacces/apiacces.service";

import { HttpClientModule } from "@angular/common/http";
import { DbComponent } from "./firebase/db.component";
import { DbService } from "./firebase/db.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { DBConfig } from "./firebase/environement";
import { ParnetComponent } from "./component-comm/parnet.component";
import { ChildComponent } from "./component-comm/child.component";
import { FirstanimationComponent } from "./animations/firstanimation/firstanimation.component";
import { OrderComponent } from "./componentstatetransfer/order/order.component";
import { InvoiceComponent } from "./componentstatetransfer/invoice/invoice.component";

// Animation  Module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { I18SampleComponent } from "./i18N/i18-sample/i18-sample.component";
import { MarketingComponent } from "./componentstatetransfer/marketing/marketing.component";
import { FormadvanceComponent } from "./reactive-form/formadvance/formadvance.component";
import { ComplexformComponent } from "./reactive-form/formbuilder/complexform/complexform.component";
import { ReactiveformComponent } from "./b1_classroom/reactiveform/reactiveform.component";
import { FormvalidationComponent } from "./reactive-form/formvalidation/formvalidation.component";
import { PipesbasicComponent } from "./pipes/pipesbasic/pipesbasic.component";
import { CustompipesComponent } from "./pipes/custompipes/custompipes.component";
import { CustompipesPipe } from "./pipes/custompipes.pipe";
import { SamplepipeComponent } from "./b1_classroom/pipes/samplepipe/samplepipe.component";
import { GenderPipe } from "./b1_classroom/pipes/gender.pipe";
import { ReversePipe } from "./b1_classroom/pipes/reverse.pipe";
import { CustdirectivesComponent } from "./custdirectives/custdirectives.component";
import { StructuraldirectiveComponent } from "./directive/structuraldirective/structuraldirective.component";
import { StrsampleDirective } from "./directive/strsample.directive";

import { AttributedirectiveDirective } from "./b1_classroom/directive/attributedirective.directive";
import { SampledirectiveComponent } from "./b1_classroom/directive/sampledirective/sampledirective.component";
import { StructuraldirectiveDirective } from './b1_classroom/directive/structuraldirective.directive';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { Style1Component } from './styles/style1/style1.component';
import { Style2Component } from './styles/style2/style2.component';
import { Style3Component } from './styles/style3/style3.component';
import { Style4Component } from './styles/style4/style4.component';
import { SimplestyleComponent } from './b1_classroom/styles/simplestyle/simplestyle.component';
import { Simplestyle1Component } from './b1_classroom/styles/simplestyle1/simplestyle1.component';
import { Simplestyle2Component } from './b1_classroom/styles/simplestyle2/simplestyle2.component';
import { TemplateformsComponent } from './b1_classroom/templateforms/templateforms.component';
import { InnerhtmlComponent } from './security/innerhtml/innerhtml.component';
import { StrusturlComponent } from './security/strusturl/strusturl.component';
import { SecuritysampleComponent } from './security/securitysample/securitysample.component';
import { StrustresourceurlComponent } from './security/strustresourceurl/strustresourceurl.component';
import { StrustscriptComponent } from './security/strustscript/strustscript.component';
import { StruststyleComponent } from './security/struststyle/struststyle.component';
import { CdparentComponent } from './changedetection/cdparent/cdparent.component';
import { Cdchild1Component } from './changedetection/cdchild1/cdchild1.component';
import { Cdchild2Component } from './changedetection/cdchild2/cdchild2.component';
import { ZonetestComponent } from './zonejs/zonetest/zonetest.component';
import { ZonesampleComponent } from './zonejs/zonesample/zonesample.component';
import { AsynsampleComponent } from './aync/asynsample/asynsample.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent,
    EventbindingComponent,
    TestDirective,
    HomeComponentComponent,
    LoginComponentComponent,
    InvalidURLComponentComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    BindingComponent,
    ApiaccesComponent,
    DbComponent,
    ParnetComponent,
    ChildComponent,
    FirstanimationComponent,
    I18SampleComponent,
    OrderComponent,
    InvoiceComponent,
    MarketingComponent,
    FormadvanceComponent,
    ComplexformComponent,
    ReactiveformComponent,
    FormvalidationComponent,
    PipesbasicComponent,
    CustompipesComponent,
    CustompipesPipe,
    SamplepipeComponent,
    GenderPipe,
    ReversePipe,
    CustdirectivesComponent,
    StructuraldirectiveComponent,
    StrsampleDirective,
    SampledirectiveComponent,
    AttributedirectiveDirective,
    StructuraldirectiveDirective,
    FormsTemplateComponent,
    Style1Component,
    Style2Component,
    Style3Component,
    Style4Component,
    SimplestyleComponent,
    Simplestyle1Component,
    Simplestyle2Component,
    TemplateformsComponent,
    InnerhtmlComponent,
    StrusturlComponent,
    SecuritysampleComponent,
    StrustresourceurlComponent,
    StrustscriptComponent,
    StruststyleComponent,
    CdparentComponent,
    Cdchild1Component,
    Cdchild2Component,
    ZonetestComponent,
    ZonesampleComponent,
    AsynsampleComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(DBConfig.config),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponentComponent },
      { path: "login", component: LoginComponentComponent },
      { path: "order", component: OrderComponent },
      { path: "invoice", component: InvoiceComponent },
      { path: "**", component: InvalidURLComponentComponent }
    ])
  ],
  providers: [TestService, SampleService, ApiaccesService, DbService],
  bootstrap: [AppComponent]
  // bootstrap: [TemplateDrivenComponent]
  // bootstrap: [EventbindingComponent]
})
export class AppModule {}
