import { FormGroup, FormControl, Validators } from '@angular/forms'

export class EventForm {
    eventForm: FormGroup = new FormGroup({
        eventId: new FormControl(0, Validators.required),
        eventCode: new FormControl("", [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6)
        ]),
        eventName: new FormControl("", Validators.required),
        description: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        fees: new FormControl(),
        attendance: new FormControl("", [
            Validators.required,
            Validators.min(0),
            Validators.max(100)
        ]),
        logo: new FormControl("images/noimage.png")
    });

}