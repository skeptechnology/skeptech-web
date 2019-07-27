import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-main',
  templateUrl: './intro-main.component.html',
  styleUrls: ['./intro-main.component.scss'],
  animations:[SharedAnimations]
})
export class IntroMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
