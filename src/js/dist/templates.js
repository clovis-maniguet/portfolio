this["templates"] = this["templates"] || {};
this["templates"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"entry\">\r\n  <h1>contact</h1>\r\n  <div class=\"body\">\r\n<p>body</p>\r\n  </div>\r\n</div>";
},"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "<div class=\"home view\">\r\n  <div class=\"intro\">\r\n      <h1>"
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n      <hr>\r\n      <h2><span>"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.word1 : stack1)) != null ? stack1['0'] : stack1), depth0))
    + "</span> "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.word2 : stack1), depth0))
    + "</h2>\r\n  </div>\r\n</div>";
},"useData":true});
this["templates"]["work"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"work view\">\r\n  <h1>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\r\n  <div class=\"body\">\r\n    <p>body</p>\r\n  </div>\r\n</div>";
},"useData":true});