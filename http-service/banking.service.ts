import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { IAppConfigSettings } from '../models/common/app-config-settings.model';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { LidTypesEnum } from '../models/common/lid-types.enum';
import { BankingInfoModel } from '../models/bankingInfo/banking-info.model';

declare var gAppConfigSettings: IAppConfigSettings;

@Injectable()
export class BankingService {


    constructor(private http: Http) {

    }

    public getBankingInfo(LidType: LidTypesEnum, Lid: string): Observable<BankingInfoModel[]> {

        const bankingUrl = gAppConfigSettings.WebApiUrl + `Banking/GetBankingInfo/${LidType}/${Lid}`;

        let response: Observable<BankingInfoModel[]> = this.http.get(bankingUrl).map(r => r.json());

        return response;
    }


 public getTableMappings(versionId: number): Observable<any[]> {
     
        const url = gAppConfigSettings.WebApiUrl + 'epsmapping/' + versionId;

        let headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        headers.append('Cache-control', 'no-cache');
        headers.append('Cache-control', 'no-store');
        headers.append('Expires', '0');
        headers.append('Pragma', 'no-cache');

        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map(r => {
            return r.json();
        });
    }
}
