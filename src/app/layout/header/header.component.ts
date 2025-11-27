import { AfterViewInit, Component } from '@angular/core';
declare var bootstrap:any;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const navElement = document.getElementById('portfolioNavbar');
    if (navElement) {
      new bootstrap.Collapse(navElement, { toggle: false });
    }
  }
}
