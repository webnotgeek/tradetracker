import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private product: ProductService
  ) { }

  public url = '';
  public products = [];
  public error = '';
  public loading = false;
  public fetched = false;

  fetchProducts(f) {
    this.loading = true;
    this.error = '';
    this.product.fetch(this.url).subscribe(
      res => {
        this.loading = false;
        this.fetched = true;
        this.products = res;
      },
      err => {
        this.loading = false;
        this.error = "An error has been occurred!";
        console.log('err', err)
      }
    )
  }

}
