import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailFormComponent } from './email-form.component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../app/email.service';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;
  let emailServiceSpy: jasmine.SpyObj<EmailService>;

  beforeEach(async () => {
    emailServiceSpy = jasmine.createSpyObj('EmailService', ['sendEmail']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [EmailFormComponent],
      providers: [
        { provide: EmailService, useValue: emailServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make all fields required', () => {
    const form = component.emailForm;
    expect(form.get('to')?.hasError('required')).toBeTruthy();
    expect(form.get('subject')?.hasError('required')).toBeTruthy();
    expect(form.get('phone')?.hasError('required')).toBe(true);
    expect(form.get('guests')?.hasError('required')).toBe(true);
    expect(form.get('date')?.hasError('required')).toBe(true);
    expect(form.get('text')?.hasError('')).toBe(true);
  });

  // Aquí puedes agregar más pruebas según sea necesario
});
