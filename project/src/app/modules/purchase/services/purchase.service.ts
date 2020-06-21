import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IPurchase } from '../../../interfaces/IPurchase';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class PurchaseService {
    constructor(private http: HttpClient) { }

    /** get item */
    getItem() {
        return this.http.get<IPurchase[]>(environment.api + '/api/po');
    }

    /** delete item */
    deleteItem(id: number) {
        return this.http.delete<{ message: string }>(environment.api + '/api/po/' + id);
    }

}