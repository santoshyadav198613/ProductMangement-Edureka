import { retry } from 'rxjs/operator/retry';
import { Observable } from 'rxjs/Rx';
import { AbstractControl } from '@angular/forms'


export function ValidateMonth(control: AbstractControl) {
    if (control.value > 12) {
        return Observable.of({ inValidMonth: true });
    }

    return Observable.of(null);

}
