import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Token } from "../models/token";
import { Credential } from "../models/credential";

@Injectable()
export class SempAuthService {
	constructor(private _httpClient: HttpClient) {}

	checkCredentials(user: Credential): Observable<Token> {
		return this._httpClient.post<Token>(
			"http://localhost:9090/synauth",
			user,
		);
	}
}
