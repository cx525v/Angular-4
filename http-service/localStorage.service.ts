import { Injectable } from '@angular/core'


@Injectable()

export class TokenService {
    
    constructor() { }


    setAccessToken(tokenName: string, token: string) {

        localStorage.setItem(tokenName, token);
    
}

 
    
getAccessToken(tokenName: string): string {

       return localStorage.getItem(tokenName);

    }

}