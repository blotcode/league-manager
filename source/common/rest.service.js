import { Injectable, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { RestConfiguration } from '../configuration/rest.config';

@Injectable()
export class RestService {

    actionUrl;
    headers;
    @Input() apiList:Observable<any>;

    constructor(http:Http) {

        this.actionUrl = RestConfiguration.ServerWithApiUrl + '/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.http = http;

        //first call necessary to get the apiList
        this.setApiList();

    }


    /**
     * This function set the list of the api
     */
    setApiList(){

        let apiList = this.http.get(this.actionUrl)
            .map(res => res.json());

        apiList.subscribe(
           items => this.apiList = items,
           console.error,
           () => console.log('Completed!')
         );

    }

}