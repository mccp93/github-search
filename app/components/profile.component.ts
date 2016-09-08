import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'my-profile',
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {
    user: any;
    repos: any;
    username: string;

    constructor(private _gitHubService: GitHubService) {

    }

    searchUser() {
        this._gitHubService.updateUser(this.username);
        
        this._gitHubService.getUser().subscribe(user => {
            this.user = user;
            this.user.blog = "foobar.com";
            this.user.email = "foo@bar.com";
            console.log(user);
        });

        this._gitHubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
};