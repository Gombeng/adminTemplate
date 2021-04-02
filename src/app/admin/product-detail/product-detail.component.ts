import { Component, OnInit, Inject } from '@angular/core';
//component mat dialog
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) {}

  ngOnInit(): void {}
  loading: boolean;
  saveData() {
    this.loading = true;
    if (this.data.id == undefined) {
      this.api.post('books', this.data).subscribe(
        (result) => {
          this.dialogRef.close(result);
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          alert('Tidak dapat menambahkan data');
        }
      );
    } else {
      this.api.put('books/' + this.data.id, this.data).subscribe(
        (result) => {
          this.dialogRef.close(result);
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          alert('Tidak dapat memperbarui data');
        }
      );
    }
  }
}
