(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(148),s=a(155),u=a(153),l=a(150),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(u.a,{title:"Home",keywords:["visualization","data","javascript","react"]}),a.filter(function(t){t.node;return!1}).map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(o.a.Component);e.default=d;var m="1623555389"},148:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(147),s=a.n(c);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var u=a(149),l=a.n(u);a.d(e,"PageRenderer",function(){return l.a});var d=a(33);a.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,a){var n;t.exports=(n=a(151))&&n.default||n},150:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return u});var n=a(158),r=a.n(n),i=a(159),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,u=c.scale},151:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),u=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},152:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVQoz22Ra0jTURjG9yGIirDosq7rqmFmZaUhmZdaM3VLnWaRWtoHowsURSj1pXt0/RJ2+2BUKKWRYg7T0raVumVYs4upZc5F4SI3a2bObb/++8+ioJfz8h4Oh995zvNIfjgHePOzV2i7b/bbeev5QTuDvO7roXVo38aAOFvpF8/bcPLW3Se0g/fAq34bXU4HEou5i6wmDarPT0jq1KL+YiTq3hWWnD/A+m/Piam+xqITewm9fITFp/azsjSftD4ToZcOE1NVgFxfxPx9W4m1aDlsfYkEl5uC+hriOmtJ6tKh7m5A/riIUbOmkWjWMmOTCv8d6UxRxjA/Lwfp6nCShTt+wQEoGorx35nByEkTCC2/yLG+dgEo1MdOM9nPKgSVdSR31LLBYWLu1lRk6limJ8mJNZQwMTqMhJcaJsdGIEtdS8CuDOKayvALnMPMtHjGxkVwwtmJxI0H77peX4viQw1Ki451XwxE6wuRSCQEn8tF2f6AMQvniYpDzuaK5wpjiU95QjRLz+QyLEDGXm2pAHS7vSL5ZLGw26gh84Oe7HYtWe+0JN7OJ91USZKgetWjmyQKlqjaqkVfU3ueEaW5itpqYDNmIhvvkPfioe/LHo9HhH6392K32ei12bH19OByuah83YTCVE5Q3jaULfdRtlaz6OQ+gg5uJ7LsIvN2b2F2+jrGqeUcaNH7gALxD/Sfcro41awj3vYU6cplYrJhV48iEzyblrxGBHsfma5axfCF/hzqNiH5DfIMQb392war1Urmi0rU35qILLnAhPAQpFFhrNEVMnNDAisKz7G65gZT5SuIt9Zz3DGU8t/lBbo8PmBVWzPyjge+oL4aGR0WzJiIJaS4WpAmy1kgBDYicDbjY5Yj3bmRPQbN/4GiZucgl5rryOzQkfNeT05XPRkNpWQay9j20cAmXTEZdXdJqygg5VY+ioLTnH/XyC/eaXy5HelwCwAAAABJRU5ErkJggg==",width:530,height:305,src:"/static/a8b451cd15b595f42305053703f586c2/25b53/logo.png",srcSet:"/static/a8b451cd15b595f42305053703f586c2/25b53/logo.png 1x,\n/static/a8b451cd15b595f42305053703f586c2/792ed/logo.png 1.5x,\n/static/a8b451cd15b595f42305053703f586c2/dca67/logo.png 2x"}}}}}},153:function(t,e,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(160),u=a.n(s),l=a(148);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var m="1025518380"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Viva Viz",description:"Give your data life!",author:"Jim Vallandingham"}}}}},155:function(t,e,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(148),s=a(150),u=(a(156),a(152)),l=a(157),d=a.n(l);var m="1370849514",p=function(){return o.a.createElement(c.StaticQuery,{query:m,render:function(t){return o.a.createElement("div",null,o.a.createElement(d.a,{fixed:t.logo.childImageSharp.fixed}))},data:u})},f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.location,a=t.title,n=t.children;return"/"===e.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement(p,null),n)},e}(o.a.Component);e.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-a21b9ee9ba4877cfee20.js.map