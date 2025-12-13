import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'your-app-name';
  isMenuOpen = false;
  isJoinUsOpen = false;
  isMobileView = false;

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMobileView && this.isMenuOpen) {
      const target = event.target as HTMLElement;
      const isClickInsideNav = target.closest('.nav-links');
      const isClickOnToggle = target.closest('.mobile-toggle');

      if (!isClickInsideNav && !isClickOnToggle) {
        this.closeAll();
      }
    }
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 900;
    if (!this.isMobileView) {
      this.closeAll();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isJoinUsOpen = false;
    }
  }

  toggleJoinUs(event: Event) {
    if (this.isMobileView) {
      event.preventDefault();
      this.isJoinUsOpen = !this.isJoinUsOpen;
    }
  }

  closeMenu() {
    if (this.isMobileView) {
      this.isMenuOpen = false;
    }
  }

  closeAll() {
    this.isMenuOpen = false;
    this.isJoinUsOpen = false;
  }
}
