(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[46],{1838:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(17),o=r(2),i=r(4),a=r(6),s=r(7),u=r(0),l=r(1713),d=r(211),p=r(128),c=r(129),m=r(65),h=r(1),f=function(e){Object(a.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(o.a)(this,r);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).formClearHelper=new d.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.handleChange=function(t){var r=e.dateToString(t);e.setState({value:r},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.stringToDate=function(e){var t=e.split(":").map(Number),r=Object(n.a)(t,2),o=r[0],i=r[1],a=new Date;return a.setHours(o),a.setMinutes(i),a},e.dateToString=function(e){var t=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");return"".concat(t,":").concat(r)},e}return Object(i.a)(r,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.disabled,r=e.width,n=e.element,o=e.widgetMgr,i={width:r},a={Select:{props:{disabled:t,overrides:{ControlContainer:{style:{borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px"}},IconsContainer:{style:function(){return{paddingRight:".5rem"}}},ValueContainer:{style:function(){return{paddingRight:".5rem",paddingLeft:".5rem",paddingBottom:".5rem",paddingTop:".5rem"}}},Dropdown:{style:function(){return{paddingTop:0,paddingBottom:0}}},Popover:{props:{overrides:{Body:{style:function(){return{marginTop:"1px"}}}}}}}}}};return this.formClearHelper.manageFormClearListener(o,n.formId,this.onFormCleared),Object(h.jsxs)("div",{className:"stTimeInput",style:i,children:[Object(h.jsx)(p.d,{label:n.label,disabled:t,children:n.help&&Object(h.jsx)(p.b,{children:Object(h.jsx)(c.a,{content:n.help,placement:m.b.TOP_RIGHT})})}),Object(h.jsx)(l.a,{format:"24",value:this.stringToDate(this.state.value),onChange:this.handleChange,overrides:a,creatable:!0})]})}}]),r}(u.PureComponent)}}]);