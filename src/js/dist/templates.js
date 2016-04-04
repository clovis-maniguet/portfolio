this["templates"] = this["templates"] || {};
this["templates"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"contact view\">\r\n        \r\n        <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n        \r\n        <div class=\"social\">\r\n            \r\n            <div class=\"elmt\">\r\n                \r\n                <a target=\"_blank\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.mail : stack1), depth0))
    + "\">\r\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.mail : stack1), depth0))
    + "\">                \r\n                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.mail : stack1), depth0))
    + "</p>\r\n                </a>\r\n            </div>\r\n            \r\n            <div class=\"elmt\">\r\n                \r\n                <a target=\"_blank\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.github : stack1), depth0))
    + "\">\r\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.github : stack1), depth0))
    + "\">\r\n                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.github : stack1), depth0))
    + "</p>\r\n                </a>\r\n                \r\n            </div>\r\n            \r\n            <div class=\"elmt\">\r\n                \r\n                <a target=\"_blank\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "\">\r\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "\">\r\n                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "</p>\r\n                </a>\r\n                \r\n            </div>\r\n            \r\n            <div class=\"elmt\">\r\n                \r\n                <a target=\"_blank\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.linkedIn : stack1), depth0))
    + "\">\r\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.linkedIn : stack1), depth0))
    + "\">\r\n                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.linkedIn : stack1), depth0))
    + "</p>\r\n                </a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        <div class=\"resume\">\r\n            <a type=\"button\" class=\"btn btn-warning\" target=\"_blank\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cs : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cv : depth0)) != null ? stack1.texte : stack1), depth0))
    + "</a>\r\n        </div>\r\n       \r\n        <p id=\"copyrights\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.copyrights : stack1), depth0))
    + "</p>\r\n    \r\n</div>";
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
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"work view\">\r\n    <div class=\"left-side\" id=\""
    + alias3(((helper = (helper = helpers.idBackground || (depth0 != null ? depth0.idBackground : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"idBackground","hash":{},"data":data}) : helper)))
    + "\">\r\n        <img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.laptop1 : stack1), depth0))
    + "\" class=\"workLaptop1\">\r\n        <img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.laptop2 : stack1), depth0))
    + "\" class=\"workLaptop2\">\r\n    </div>\r\n        \r\n    <div class=\"right-side\">\r\n        \r\n        <div class=\"presentation\">\r\n            <h2>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n            \r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.content : stack1), depth0))
    + "</p>\r\n            \r\n            <p><a target=\"_blank\" href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">More</a></p>\r\n            \r\n            <p>\r\n                "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.jobs : stack1), depth0))
    + "<br>\r\n                "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.textes : depth0)) != null ? stack1.tools : stack1), depth0))
    + "\r\n            </p>\r\n        </div>\r\n        \r\n        <div class=\"pattern\" id=\""
    + alias3(((helper = (helper = helpers.idPattern || (depth0 != null ? depth0.idPattern : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"idPattern","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n        \r\n    </div>\r\n    \r\n    <div class=\"pageNum\">"
    + alias3(((helper = (helper = helpers.numPage || (depth0 != null ? depth0.numPage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"numPage","hash":{},"data":data}) : helper)))
    + "</div>\r\n    \r\n</div>";
},"useData":true});