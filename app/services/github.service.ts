import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 

@Injectable()
export class GitHubService{
    private username: string;

    constructor(private _http: Http){
        console.log("GitHubService Ready!");
        this.username = 'bholt';
        console.log("The username we have loaded is: " + this.username);
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos')
        .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}