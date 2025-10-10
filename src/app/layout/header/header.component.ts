import { AfterViewInit, Component } from '@angular/core';
var bootstrap:any;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Select the navbar collapse element
    const navbarCollapse = document.getElementById('portfolioNavbar');

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link and close collapse on click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }
}
