import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstLetterCapital'
})

export class FirstLetterCapitalPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        if (!value) {
            return value;
        }

        return value.replace(/\w\S*/g, word => 
            word.charAt(0).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase());
    }
}