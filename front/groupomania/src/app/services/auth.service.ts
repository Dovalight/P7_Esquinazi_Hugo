import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private token = 'faketoken';

    getToken(): string {
        return this.token;
    }
}