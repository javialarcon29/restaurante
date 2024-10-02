import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { EmailService } from '../../app/email.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';  // Importa SweetAlert

@Component({
  selector: 'app-email-form',
  standalone: true,  // Define como standalone
  imports: [
    ReactiveFormsModule,  // Importa ReactiveFormsModule aquí
    CommonModule          // Importa CommonModule si usas ngIf o ngFor
  ],
  templateUrl: './email-form.component.component.html',
  styleUrls: ['./email-form.component.component.css']
})
export class EmailFormComponent {
  emailForm: FormGroup;
  minDateTime: string;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    // Configuración del formulario reactivo
    this.emailForm = this.fb.group({
      to: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      guests: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      date: ['', Validators.required],
      text: ['', Validators.required]
    });

    // Establece la fecha mínima como la fecha/hora actual
    const now = new Date();
    this.minDateTime = now.toISOString().slice(0, 16);
  }

  // Método para validar la fecha seleccionada
  validateDateTime(): void {
    const selectedDate = new Date(this.emailForm.get('date')?.value);
    const dayOfWeek = selectedDate.getDay();
    const hours = selectedDate.getHours();

    // Validación: No permitir reservas los lunes ni fuera del horario de 12:00 a 22:00
    if (dayOfWeek === 1 || hours < 12 || hours > 24) {  // Corregido a 22 horas
      alert('Fecha no válida. No se permiten reservas los lunes ni fuera del horario de 12:00 a 22:00.');
      this.emailForm.get('date')?.setErrors({ invalidDateTime: true });
    }
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);  // Log para revisar los datos enviados
      this.emailService.sendEmail(this.emailForm.value).subscribe({
        next: (response) => {
          console.log('Correo enviado con éxito:', response);
          // Muestra SweetAlert de éxito
          Swal.fire({
            title: '¡Éxito!',
            text: 'La reserva ya ha sido realizada.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        },
        error: (error) => {
          console.error('Error al enviar el correo:', error); // Log del error
          // Muestra SweetAlert de error
          Swal.fire({
            title: 'Error',
            text: 'Error no se ha podido realizar la reserva intentelo mas tarde: ' + (error.error?.message || 'Error desconocido'),
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }
  }
}
