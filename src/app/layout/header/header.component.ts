<<<<<<< HEAD
import { AfterViewInit, Component } from '@angular/core';
=======
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
>>>>>>> 0056e46 (Updated frontend structure)
declare var bootstrap:any;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
<<<<<<< HEAD
export class HeaderComponent implements AfterViewInit {
=======
export class HeaderComponent implements AfterViewInit, OnDestroy {

  isScrolled = false;
>>>>>>> 0056e46 (Updated frontend structure)

  ngAfterViewInit(): void {
    const navElement = document.getElementById('portfolioNavbar');
    if (navElement) {
      new bootstrap.Collapse(navElement, { toggle: false });
    }
<<<<<<< HEAD
=======
    this.onWindowScroll();
  }

  @HostListener('window:scroll',)
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
    
    const navbar = document.querySelector('.portfolio-navbar');
    if (navbar) {
      if (this.isScrolled) {
        navbar.classList.add('header-scrolled');
      } else {
        navbar.classList.remove('header-scrolled');
      }
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
>>>>>>> 0056e46 (Updated frontend structure)
  }
}
