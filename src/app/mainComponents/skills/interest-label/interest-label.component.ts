import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-label',
  imports: [],
  templateUrl: './interest-label.component.html',
  styleUrl: './interest-label.component.scss'
})
export class InterestLabelComponent {


  openPull() {
    console.log('open');
    document.getElementById('label1')?.classList.add('diagonal-move1');
    document.getElementById('label2')?.classList.add('diagonal-move2');
  }

}
