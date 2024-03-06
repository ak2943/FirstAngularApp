import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})

export class OperationComponent {
     number1:string='';
     number2:string='';
     result:number=0;

     add(){
       this.result=parseInt(this.number1)+parseInt(this.number2);
     }

     sub(){
      this.result=parseInt(this.number1)-parseInt(this.number2);
    }

    mult(){
      this.result=parseInt(this.number1)*parseInt(this.number2);
    }

    div(){
      try {
            if (parseInt(this.number2) === 0) {
            throw new Error('Division by zero error');
            }
               this.result= parseInt(this.number1) / parseInt(this.number2);
          } catch (error) {
               alert("Number divisible by zero ERROR")
        }
    }

    disable(){
      this.number1='';
      this.number2='';
      this.result=0;
    }

    increment(){
      this.result++;
    }

    decrement(){
      this.result--;
    }
}
