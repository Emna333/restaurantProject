import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  @Input() Y:any;
  constructor() { }

  ngOnInit() {
  }

}
