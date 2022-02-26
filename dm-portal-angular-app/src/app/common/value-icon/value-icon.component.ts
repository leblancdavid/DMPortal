import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dm-value-icon',
  templateUrl: './value-icon.component.html',
  styleUrls: ['./value-icon.component.scss']
})
export class ValueIconComponent implements OnInit {

  @Input() matIcon!: string;
  @Input() iconColor?: string;
  @Input() value!: string;
  @Input() valueColor?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
