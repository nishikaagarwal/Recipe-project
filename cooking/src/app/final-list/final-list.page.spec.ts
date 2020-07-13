import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalListPage } from './final-list.page';

describe('FinalListPage', () => {
  let component: FinalListPage;
  let fixture: ComponentFixture<FinalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
