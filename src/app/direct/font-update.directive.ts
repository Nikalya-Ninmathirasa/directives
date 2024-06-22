import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontUpdate]'
})
export class FontUpdateDirective {

  constructor(Ef:ElementRef) {
       Ef.nativeElement.style.color="blue";
       Ef.nativeElement.style.backgroundColor="yellow";
       Ef.nativeElement.style.fontFamily="Helvetica";
   
  }
}
