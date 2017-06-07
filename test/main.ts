import { expect } from 'chai';

import Api from '../src/main'

describe('Api', () => {
  context('new()', () => {
    it("should return a new instance", () => {
      var api = new Api()
      expect(api).to.be.an('Object');
    });

    it("should return proper version", () => {
      var api = new Api()
      expect(api.getVersion()).to.match(/v\d+\.\d+\.\d+ \(\w+\)/);
    });
    
    it("should accept client credentials", () => {
      var api = new Api()
      api.setClientId(123);
      expect(api.getClientId()).to.eq(123);

      api.setClientSecret('a9eb18ega2f1b3a9a73bb7d112d');
      expect(api.getClientSecret()).to.eq('a9eb18ega2f1b3a9a73bb7d112d0');
    });
    
    it("should accept grant type and access token", () => {
      var api = new Api();
      ['password', 'client_credentials'].forEach((type) => {
        api.setGrantType(type);
        expect(api.getGrantType()).to.eq(type);
      });
      
      api.setGrantType('invalid');
      expect(api.getGrantType()).to.eq(null);
      
      expect(api.getAccessToken()).to.eq(null);
      api.setAccessToken('a9eb18ega2f1b3a9a73bb7d112d');
      expect(api.getAccessToken()).to.eq('a9eb18ega2f1b3a9a73bb7d112d');
    });

    it("should accept endpoint", () => {
      var api = new Api()
      api.setEndpoint('http://domain.example/v1/api');
      expect(api.getEndpoint()).to.eq('http://domain.example/v1/api');
    });
    
    it("should not accept invalid endpoint/url", () => {
      var api = new Api()
      api.setEndpoint('invalid-domain/v1/api');
      expect(api.getEndpoint()).to.eq(null);
    });
  });

  context('endpoints()', () => {
    
  });
});
