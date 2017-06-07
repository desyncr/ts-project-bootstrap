export default class Api {
  version: string = 'v0.1.0 (develop)';
  
  auth : any = {
    client_id     : null,
    client_secret : null,
    grant_type    : 'password',
    access_token  : null
  }
  
  endpoint: string|null = null;
  
  getVersion() : string {
    return this.version;
  }
  
  setClientId(clientId : number) {
    this.auth.client_id = clientId;
  }
  
  getClientId() : number|null {
    return this.auth.client_id;
  }
  
  setClientSecret(clientSecret : string) {
    this.auth.client_secret = clientSecret;
  }
  
  getClientSecret() : string|null {
    return this.auth.client_secret;
  }
  
  setGrantType(type:string) : boolean {
    if (['password', 'client_credentials'].indexOf(type)) {
      this.auth.grant_type = type;
    } else {
      return false;
    }
    return true;
  }
  
  getGrantType() : string {
    return this.auth.grant_type;
  }
  
  setAccessToken(accessToken:string) {
    this.auth.access_token = accessToken;
  }
  
  getAccessToken() : string {
    return this.auth.access_token;
  }
  
  setEndpoint(endpoint:string) : boolean {
    let url = require('url');
    let parsed = url.parse(endpoint);
    if (!parsed.hostname) {
      this.endpoint = null;
      return false;      
    }
    
    this.endpoint = endpoint;
    
    return true;
  }
  
  getEndpoint() : string|null {
    return this.endpoint;
  }

}
