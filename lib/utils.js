// Generated by CoffeeScript 1.8.0

/*
@author      Created by Haiwei Li <haiwei8086@gmail.com> on 2014-6-8.
@link        https://github.com/haiwei8086/i18n-resource-manager
@license     http://opensource.org/licenses/MIT
@version     0.0.1
 */

(function() {
  var Utils;

  Utils = {
    Clone: function(sObj) {
      var p, s;
      if (sObj === null) {
        return null;
      }
      if (typeof sObj !== "object") {
        return sObj;
      }
      s = sObj.constructor === Array ? [] : {};
      for (p in sObj) {
        s[p] = Utils.Clone(sObj[p]);
      }
      return s;
    },
    FillObject: function(original, target, type) {
      var p, pType;
      if (original === void 0 || original === null) {
        original = Utils.Clone(target);
        return original;
      }
      for (p in original) {
        pType = typeof original[p];
        if (pType === "object") {
          if (typeof target[p] !== "undefined") {
            if (type.toLowerCase() === "child") {
              original[p] = Utils.Clone(target[p]);
            } else {
              original[p] = Utils.FillObject(original[p], target[p], type);
            }
          }
        } else {
          if (typeof target[p] !== "undefined") {
            original[p] = Utils.Clone(target[p]);
          }
        }
      }
      if (type.toLowerCase() === "full") {
        for (p in target) {
          pType = typeof target[p];
          if (typeof original[p] !== "undefined") {
            continue;
          }
          original[p] = Utils.Clone(target[p]);
        }
      }
      return original;
    }
  };

  module.exports = Utils;

}).call(this);

//# sourceMappingURL=utils.js.map
