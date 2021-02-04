import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import * as fromComponents from 'user/components'

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from 'user/store';
import * as fromServices from 'user/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
  providers: [...fromServices.SERVICES]
})
export class UserModule { }
