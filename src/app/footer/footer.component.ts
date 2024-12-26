import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  footerText: string = '© 2024 CoMovieApp. Todos los derechos reservados.';
  contactEmail: string = 'contacto@comovieapp.com';
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/CoMovieApp' },
    { name: 'Twitter', url: 'https://twitter.com/CoMovieApp' },
    { name: 'Instagram', url: 'https://www.instagram.com/CoMovieApp' }
  ];
}


