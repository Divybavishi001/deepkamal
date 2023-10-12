import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private data = new BehaviorSubject<any[]>([]);
  private currentPage = new BehaviorSubject<number>(1);


  public goToPage(page: number): void {
    this.currentPage.next(page);
  }

  setData(data: any[]) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }

  getCurrentPage() {
    return this.currentPage.asObservable();
  }
}