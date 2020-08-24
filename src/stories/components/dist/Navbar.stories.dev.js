"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;
var _default = {
  title: 'Components/Navbar'
};
exports["default"] = _default;

var Default = function Default() {
  return (
    /* html */
    "\n    <h2>Refresh the page to get scripts</h2>\n    <hr/>\n\n    <div class=\"grid\">\n      <div class=\"col-desk-4 mx-auto\">\n        <h2>light background</h2>\n      </div>\n      <div class=\"col-desk-12\">\n        <nav class=\"navbar\">\n          <a href=\"#\" class=\"navbar__brand\"><span>B</span>M.</a>\n          <button class=\"navbar__toggler\">\n            <i class=\"fas fa-bars\"></i>\n          </button>\n\n          <div class=\"navbar-collapse\">\n            <button class=\"btn--close\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n            <ul class=\"navbar-nav\">\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Home</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">About</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Portfolio</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Blog</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Contact</a>\n              </li>\n            </ul>\n\n            <form class=\"form form--horizontal\">\n              <div class=\"form-item row m-0\">\n                <input type=\"search\" placeholder=\"Search\" class=\"form-item__input input--rounded input--search\" >\n                <button class=\"btn btn--search\">\n                  <i class=\"pe-7s-search\"></i>\n                </button>\n              </div>\n            </form>\n\n          </div>\n        </nav>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-desk-4\"><h2>Dark background</h2></div>\n      <div class=\"col-desk-12\">\n        <nav class=\"navbar\">\n          <a href=\"#\" class=\"navbar__brand\"><span>B</span>M.</a>\n          <button class=\"navbar__toggler\">\n            <i class=\"fas fa-bars\"></i>\n          </button>\n\n          <div class=\"navbar-collapse\">\n            <button class=\"btn--close\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n            <ul class=\"navbar-nav\">\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Home</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">About</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Portfolio</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Blog</a>\n              </li>\n\n              <li class=\"nav__item\">\n                <a href=\"#\" class=\"nav__link\">Contact</a>\n              </li>\n            </ul>\n\n            <form class=\"form form--horizontal\">\n              <div class=\"form-item row m-0\">\n                <input type=\"search\" placeholder=\"Search\" class=\"form-item__input input--rounded input--search\" >\n                <button class=\"btn btn--search\">\n                  <i class=\"pe-7s-search\"></i>\n                </button>\n              </div>\n            </form>\n          </div>\n        </nav>\n      </div>\n    </div>\n  "
  );
};

exports.Default = Default;