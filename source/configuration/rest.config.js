import { Injectable } from '@angular/core';

/**
 * CONSTANT SERVER URL
 * @type {String} url of the API SERVER
 */
const SERVER_URL = 'http://devel.d80.it';

/**
 * CONSTANT API PATH
 * @type {String} path of the api server
 */
const API_PATH = "/api";

@Injectable()
export class RestConfiguration {

    static Server = SERVER_URL;
    static ApiUrl = API_PATH;

    /**
     * return the complete path
     */
    static get ServerWithApiUrl(){
      return this.Server + this.ApiUrl;
    }

}
