import { Component, OnInit } from '@angular/core';
import { WarningService }  from '../_services/warning.service'

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor(public warningService: WarningService) { }

  ngOnInit() {
  }

}
