import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WarningService {

    warningMessage: string = "";

    constructor() { }
}
