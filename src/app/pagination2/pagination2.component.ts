import { Component, Input, OnInit } from '@angular/core';
import { PaginationService2 } from './pagination2.service';

@Component({
  selector: 'app-pagination2',
  templateUrl: './pagination2.component.html',
  styleUrls: ['./pagination2.component.css']
})
export class PaginationComponent2 implements OnInit {
  @Input() recordsPerPage = 10;
  @Input() maxPageButtons = 10; // maximum number of page buttons to display

  pages: number[] = [];
  currentPage = 1;
  totalRecords = 0;

  constructor(private paginationService2: PaginationService2) {}

  ngOnInit() {
    this.paginationService2.getData().subscribe(data => {
      this.totalRecords = data.length;
      const pageCount = Math.ceil(this.totalRecords / this.recordsPerPage);
      this.pages = Array(pageCount).fill(0).map((x, i) => i + 1);
    });

    this.paginationService2.getCurrentPage().subscribe(page => {
      this.currentPage = page;
    });
  }

  goToFirstPage() {
    this.changePage(1);
  }
  
  goToLastPage() {
    this.changePage(this.pages.length);
  }
  

  changePage(page: number) {
    this.paginationService2.setCurrentPage(page);
  }

  get displayedPages() {
    const half = Math.floor(this.maxPageButtons / 2);
    let start = this.currentPage - half;
    let end = start + this.maxPageButtons;

    if (start < 1) {
      start = 1;
      end = start + this.maxPageButtons;
    }

    if (end > this.pages.length + 1) {
      end = this.pages.length + 1;
      start = end - this.maxPageButtons;
    }

    return this.pages.slice(start - 1, end - 1);
  }
}