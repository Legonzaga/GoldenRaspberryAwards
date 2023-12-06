import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntervalBetweenWinsPage } from './interval-between-wins.page';

describe('IntervalBetweenWinsPage', () => {
  let component: IntervalBetweenWinsPage;
  let fixture: ComponentFixture<IntervalBetweenWinsPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(IntervalBetweenWinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
