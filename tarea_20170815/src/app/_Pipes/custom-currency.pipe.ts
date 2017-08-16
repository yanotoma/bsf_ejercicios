import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customCurrency'
})

export class CustomCurrencyPipe implements PipeTransform {
    transform(value: any): string {
        value = value.toString();
        if(value.length < 2) return `${value} $`;
        
        let decimals: string = '';
        if(value.split('.').length > 1) decimals = `.${value.split('.')[1]}`
            
        let number: string = this.separate(value.split('.')[0]);
        
        return  `${number}${decimals} $`;
    }

    private separate(value: string): string{
        let reverse: Array<string> = value.split('').reverse();
        
        for(let i = 0; i < reverse.length; i++){
            if(i % 3 == 0 && i != 0){
                reverse[i] += ' ';
            }
        }

        return reverse.reverse().join('');

    }
}
