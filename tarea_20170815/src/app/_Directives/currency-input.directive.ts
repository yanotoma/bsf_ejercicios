import { CustomCurrencyPipe } from '../_Pipes/custom-currency.pipe';
import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appCurrencyInput]',
})
export class CurrencyInputDirective {

  private originalValue: string;

  constructor(private element: ElementRef, private renderer: Renderer, private pipe: CustomCurrencyPipe) {

  }

  ngAfterViewInit(){
    this.originalValue = this.element.nativeElement.value;
  }

  @HostListener('focus') onFocus(){
    console.log('focus');
    this.element.nativeElement.value = this.originalValue;
  }

  @HostListener('blur') onBlur(){
    console.log('blur');
    this.originalValue = this.element.nativeElement.value;
    this.element.nativeElement.value = this.pipe.transform(this.originalValue);
    console.log('originalValue', this.element.nativeElement.value);
  }

   

}