'use strict';

describe('Service: RegistrationService', function () {

  // load the service's module
  beforeEach(module('umxApp'));

  // instantiate service
  var RegistrationService;
  beforeEach(inject(function (_RegistrationService_) {
    RegistrationService = _RegistrationService_;
  }));

  it('should do something', function () {
    expect(!!RegistrationService).toBe(true);
  });

});
