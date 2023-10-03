import { Component, OnInit } from '@angular/core';
//import { environment } from 'src/environments/environment';
//import { DownloadDocServiceService } from './download-doc.component.spec';

@Component({
  selector: 'app-download-doc',
  templateUrl: './download-doc.component.html',
  styleUrls: ['./download-doc.component.css']
})
export class DownloadDocComponent implements OnInit {

  //constructor(public downloadDocService:DownloadDocServiceService) { }
 // public docBaseURL: string = environment.displayDocumentURL;
 public ngOnInit(): void {
  }

}
