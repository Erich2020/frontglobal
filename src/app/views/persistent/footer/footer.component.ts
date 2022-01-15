import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  width: number = window.innerWidth;
  fecha:string =  formatDate(Date.now(), 'dd/MM/YYYY', 'en-US', '-0600');
  constructor() { }

  ngOnInit(): void {
  }

}
