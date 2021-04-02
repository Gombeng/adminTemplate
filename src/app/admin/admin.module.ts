import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// material design
import { MaterialDesign } from '../material/material';

// component
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ProductComponent } from './product/product.component';

// plug ins
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GalleryComponent,
    ImageUploaderComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  entryComponents: [ImageUploaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule,
    FormsModule,
  ],
})
export class AdminModule {}
