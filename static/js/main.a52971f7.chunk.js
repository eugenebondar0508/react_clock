(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),o=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),h=(n(12),function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).timerID=void 0,t.state={date:new Date},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=window.setInterval((function(){t.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return console.log("Time: ",this.state.date.toLocaleTimeString()),this.state.date.toLocaleTimeString()}}]),n}(u.a.Component)),b=n(0),d=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"",isVisibleClock:!0},t.handleShowClock=function(){return t.setState({isVisibleClock:!0})},t.handleHideClock=function(){t.setState({isVisibleClock:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),this.state.isVisibleClock&&Object(b.jsxs)("p",{children:["Current time:"," ",Object(b.jsx)(h,{name:this.state.clockName})]}),Object(b.jsx)("button",{type:"button",onClick:this.handleShowClock,children:"Show"}),Object(b.jsx)("button",{type:"button",onClick:this.handleHideClock,children:"Hide"})]})}}]),n}(u.a.Component);a.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a52971f7.chunk.js.map