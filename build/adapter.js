var Adapter,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Adapter = (function() {
  function Adapter(options) {
    this.findACL = __bind(this.findACL, this);
    this.findPermission = __bind(this.findPermission, this);
    this.findResource = __bind(this.findResource, this);
    this.findSubject = __bind(this.findSubject, this);
    this.loadACLs = __bind(this.loadACLs, this);
    this.loadPermissions = __bind(this.loadPermissions, this);
    this.loadResources = __bind(this.loadResources, this);
    this.loadSubjects = __bind(this.loadSubjects, this);
    this.initialize = __bind(this.initialize, this);
    this.initialize(options);
  }

  Adapter.prototype.initialize = function(options) {
    this.options = options;
    this._subjects = {};
    this._resources = {};
    this._permissions = {};
    return this._acls = {};
  };

  Adapter.prototype.loadSubjects = function(subjects) {
    throw new Error('Adapter#loadSubjects must be overridden by subclass');
  };

  Adapter.prototype.loadResources = function(resources) {
    throw new Error('Adapter#loadResource must be overridden by subclass');
  };

  Adapter.prototype.loadPermissions = function(permissions) {
    throw new Error('Adapter#loadPermissions must be overridden by subclass');
  };

  Adapter.prototype.loadACLs = function(acls) {
    throw new Error('Adapter#loadACLs must be overridden by subclass');
  };

  Adapter.prototype.findSubject = function(name) {
    throw new Error('Adapter#findSubject must be overridden by subclass');
  };

  Adapter.prototype.findResource = function(name) {
    throw new Error('Adapter#findResource must be overridden by subclass');
  };

  Adapter.prototype.findPermission = function(permission) {
    throw new Error('Adapter#findPermission must be overridden by subclass');
  };

  Adapter.prototype.findACL = function(acl) {
    throw new Error('Adapter#findACL must be overridden by subclass');
  };

  return Adapter;

})();

module.exports = Adapter;
