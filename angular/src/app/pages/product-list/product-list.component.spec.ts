import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ProductListComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have Products`, () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.componentInstance;
    expect(app.products).toEqual([]);
  });


});
