import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'Atributos-Propreidades'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Atributos-Propreidades');
=======
  it(`should have as title 'Projeto_Teste'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Projeto_Teste');
>>>>>>> 101e0d6ac5e1169d130980c444b3611d1b2254ec
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Atributos-Propreidades');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Projeto_Teste');
>>>>>>> 101e0d6ac5e1169d130980c444b3611d1b2254ec
  });
});
