this["templates"] = this["templates"] || {};
this["templates"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"entry\">\r\n  <h1>contact</h1>\r\n  <div class=\"body\">\r\n<p>body</p>\r\n  </div>\r\n</div>";
},"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"entry\">\r\n  <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  <div class=\"body\">\r\n    "
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
    + "\r\n  </div>\r\n</div>";
},"useData":true});
this["templates"]["work"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"entry\">\r\n  <h1>Work</h1>\r\n  <div class=\"body\">\r\n    <p>body</p>\r\n  </div>\r\n</div>";
},"useData":true});