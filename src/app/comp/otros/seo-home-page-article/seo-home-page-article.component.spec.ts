import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoHomePageArticleComponent } from './seo-home-page-article.component';

describe('SeoHomePageArticleComponent', () => {
  let component: SeoHomePageArticleComponent;
  let fixture: ComponentFixture<SeoHomePageArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoHomePageArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoHomePageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
