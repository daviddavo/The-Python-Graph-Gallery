(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t("q1tI"),n=t.n(l),i=t("eynx"),o=t("JI6e"),r=t("Wbzz");function c(e){var a=e.imgName,t=e.caption,l=e.linkTo;return n.a.createElement(o.a,{xs:12,md:4},n.a.createElement(r.a,{to:l},n.a.createElement(i.a,{imgName:a,caption:t})))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var l=t("q1tI"),n=t.n(l),i=t("Wbzz"),o=t("9eSz"),r=t.n(o),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(c.includes(a))return n.a.createElement("p",null,"TODO");var l=Object(i.c)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(r.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,t))))):null}},gMBH:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("q1tI"),n=t.n(l);function i(){return n.a.createElement("div",{className:"spacing",style:{height:140}})}},hlKo:function(e,a,t){"use strict";var l=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),r=t("q1tI"),c=t.n(r),m=t("cWnB"),s=function(){},u=c.a.forwardRef((function(e,a){var t=e.children,i=e.name,u=e.className,p=e.checked,h=e.type,d=e.onChange,b=e.value,g=e.disabled,E=e.inputRef,f=Object(n.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),y=Object(r.useState)(!1),k=y[0],v=y[1],w=Object(r.useCallback)((function(e){"INPUT"===e.target.tagName&&v(!0)}),[]),_=Object(r.useCallback)((function(e){"INPUT"===e.target.tagName&&v(!1)}),[]);return c.a.createElement(m.a,Object(l.a)({},f,{ref:a,className:o()(u,k&&"focus",g&&"disabled"),type:void 0,active:!!p,as:"label"}),c.a.createElement("input",{name:i,type:h,value:b,ref:E,autoComplete:"off",checked:!!p,disabled:!!g,onFocus:w,onBlur:_,onChange:d||s}),t)}));u.displayName="ToggleButton",a.a=u},pJDg:function(e,a,t){"use strict";var l=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),r=t("q1tI"),c=t.n(r),m=t("vUet"),s=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,r=e.toggle,s=e.vertical,u=e.className,p=e.as,h=void 0===p?"div":p,d=Object(n.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(m.a)(t,"btn-group"),g=b;return s&&(g=b+"-vertical"),c.a.createElement(h,Object(l.a)({},d,{ref:a,className:o()(u,g,i&&b+"-"+i,r&&b+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},a.a=s},qR5O:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var l=t("q1tI"),n=t.n(l),i=t("4/Vk"),o=t("7oih"),r=t("7vrA"),c=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),u=t("pJaR"),p=t("Wbzz"),h=t("Hrqu"),d=t("hlKo"),b=t("JI6e"),g=t("pJDg"),E=t("ZJrt"),f=t("eynx"),y=t("gMBH"),k=t("cWnB"),v=["seaborn-darkgrid","seaborn-notebook","classic","seaborn-ticks","grayscale","bmh","seaborn-talk","dark_background","ggplot","fivethirtyeight","_classic_test","seaborn-colorblind","seaborn-deep","seaborn-whitegrid","seaborn-bright","seaborn-poster","seaborn-muted","seaborn-paper","seaborn-white","seaborn-pastel","seaborn-dark","seaborn","seaborn-dark-palette"];function w(){var e=n.a.useState(v[0]),a=e[0],t=e[1],l=v.map((function(e,l){return n.a.createElement(d.a,{type:"radio",active:!0,key:l,className:"functionButton",variant:"secondary",size:"sm",value:e,checked:a===e,onChange:function(e){return t(e.currentTarget.value)}},e)}));return n.a.createElement(o.a,{title:"Matplotlib",isTocEnabled:!0},n.a.createElement(i.a,{title:"Matplotlib",description:"<p><code>Matplotlib</code> is the most famous library for data visualization with <code>python</code>. It allows to create literally every type of chart with a great level of customization. This page provides some general tips that can be applied on any kind of chart made with <code>matplotlib</code> like customizing titles or colors. If you're looking at creating a specific chart type, visit <a href='https://www.python-graph-gallery.com'>the gallery</a> instead.</p>"}),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(b.a,{md:6},n.a.createElement("p",null,"There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input."),n.a.createElement("ul",null,n.a.createElement("li",null,"The ",n.a.createElement("code",null,"fill_between()")," function"),n.a.createElement("li",null,"The ",n.a.createElement("code",null,"stackplot()")," function that is more useful for ",n.a.createElement(p.a,{to:"/stacked-area-plot"},"stacked area")," charts"))),n.a.createElement(b.a,{md:6},n.a.createElement(p.a,{to:"/240-basic-area-chart"},n.a.createElement(f.a,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),n.a.createElement(E.a,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplot.show()\n")),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Lexicon"},n.a.createElement(h.b,null),"Basic vocabulary"),n.a.createElement("p",null,"The figure below describes the anatomy of a ",n.a.createElement("code",null,"matplotlib")," charts. It names all the main components, names that you need to know to understand the documentation properly."),n.a.createElement("p",null,"⚠️ ",n.a.createElement("u",null,"Disclaimer"),": this figure comes from the very complete ",n.a.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),n.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.a.createElement(f.a,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),n.a.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},n.a.createElement(k.a,{size:"sm"},"Matplotlib doc"))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Title"},n.a.createElement(h.b,null),"Customizing titles"),n.a.createElement("p",null,"The title is a key part of a good chart. It has to ",n.a.createElement("u",null,"summarize")," its key message in a few words. Always avoid to simply repeat what is displayed on each axis. Try to provide some more insight allowing to understand the main result instead."),n.a.createElement("p",null,"The ",n.a.createElement(p.a,{to:"/190-custom-matplotlib-title"},"post #190")," goes in depth on how to customize the ",n.a.createElement("code",null,"matplotlib"),"title. All the main types of change are descried: changing its color, adding a subtitle, using math formulas and so on. Give it a go!"),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),n.a.createElement(s.a,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),n.a.createElement(s.a,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Annotation"},n.a.createElement(h.b,null),"Annotation"),n.a.createElement("p",null,"Annotation is a key part of a great visualization. It transforms a simple chart in a whole piece of story telling. Before you share your graph with anyone, make sure the key insight are highlighted with labels, shapes or color."),n.a.createElement("p",null,"All those kind of annotation are built thanks to various matplotlib functions like ",n.a.createElement("code",null,"annotate()")," or ",n.a.createElement("code",null,"add_patch()"),". The blogposts showcased below should get you started with it."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"193_annotate1",caption:"Add a label with a segment",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate2",caption:"Add a square to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate3",caption:"Add a circle to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate4",caption:"Add a segment",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate5",caption:"Add vertical and horizontal ablines",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate6",caption:"Annotate with an equation",linkTo:"/193-annotate-matplotlib-chart"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Margin"},n.a.createElement(h.b,null),"Add margin around a ",n.a.createElement("code",null,"matplotlib")," chart"),n.a.createElement("p",null,"It is a common struggle to deal with the margins around the chart. Fortunately this is pretty straightforward thanks to the ",n.a.createElement("code",null,"subplots_adjust()")," function as explained in the examples below."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"192_increase_margin2",caption:"Increase the bottom margin of a matplotlib chart.",linkTo:"/192-about-matplotlib-margins"}),n.a.createElement(s.a,{imgName:"192_increase_margin4",caption:"Increase the top margin to fit a title",linkTo:"/192-about-matplotlib-margins"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Subplot"},n.a.createElement(h.b,null),"Split the figure in subplots"),n.a.createElement("p",null,"It can be really useful to split your graphic window in several parts, in order to display several charts in the same time. The ",n.a.createElement("code",null,"subplot()")," function of ",n.a.createElement("code",null,"matplotlib")," allows to do it quickly with a great level of customization."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"194_matplotlib_subplot4",caption:"Split the figure in 4 charts of same size.",linkTo:"/194-split-the-graphic-window-with-subplot"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot6",caption:"Split the figure with a custom layout",linkTo:"/192-about-matplotlib-margins"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot9",caption:"Manage chart size on subplots",linkTo:"/192-about-matplotlib-margins"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Theme"},n.a.createElement(h.b,null),"Available style sheets"),n.a.createElement("p",null,"Matplotlib comes with a set of pre-built theme to style your chart easily."),n.a.createElement(g.a,{size:"sm",as:"div",toggle:!0},l),n.a.createElement(p.a,{to:"/199-matplotlib-style-sheets"},n.a.createElement(k.a,{size:"sm"},"Read more")),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"194_matplotlib_subplot4",caption:"Split the figure in 4 charts of same size.",linkTo:"/194-split-the-graphic-window-with-subplot"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot6",caption:"Split the figure with a custom layout",linkTo:"/192-about-matplotlib-margins"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot9",caption:"Manage chart size on subplots",linkTo:"/192-about-matplotlib-margins"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Axis"},n.a.createElement(h.b,null),"Customizing axis"),n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," allows every kind of axis configuration. It is mainly done thanks to the ",n.a.createElement("code",null,"tick_params()"),", ",n.a.createElement("code",null,"xticks()")," and ",n.a.createElement("code",null,"xlabels()")," functions. The ",n.a.createElement(p.a,{to:"191-custom-axis-on-matplotlib-chart"},"post #191")," will guide you through all the possibilities."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}))),n.a.createElement(y.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(r.a,null,n.a.createElement(u.a,{chartFamily:"evolution"}))),n.a.createElement(y.a,null),n.a.createElement(r.a,null,n.a.createElement(c.a,null)),n.a.createElement(y.a,null))}}}]);
//# sourceMappingURL=component---src-pages-matplotlib-js-df645632db6b96dccf36.js.map