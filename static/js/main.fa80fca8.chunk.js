(this["webpackJsonpreact-threejs-test"]=this["webpackJsonpreact-threejs-test"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n=i(3),r=i(9),s=i.n(r),c=(i(14),i(6)),o=(i(15),i(0)),a=i(1),d=i(5),h=["x","y","z"],u=function(){function e(t){Object(o.a)(this,e),this.resolution=void 0,this.renderer=void 0,this.scene=void 0,this.camera=void 0,this.mesh=void 0,this.directionNumber=void 0,this.rotateDirection=void 0,console.log("THREE JS CREATE!"),this.resolution={width:window.innerWidth,height:window.innerHeight},this.renderer=new d.g({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.resolution.width,this.resolution.height),this.scene=new d.e,this.camera=new d.d(45,this.resolution.width/this.resolution.height,1,1e4),this.camera.position.set(0,0,1e3),this.camera.lookAt(0,0,0),this.mesh=new d.b(new d.a(400,400,400),new d.c),this.scene.add(this.mesh),this.directionNumber=1,this.rotateDirection=h[this.directionNumber],this.bind()}return Object(a.a)(e,[{key:"render",value:function(){this.mesh.rotation[this.rotateDirection]+=.01,this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}},{key:"cameraUp",value:function(){this.camera.position.add(new d.f(0,100,0)),this.camera.lookAt(0,0,0)}},{key:"cameraDown",value:function(){this.camera.position.add(new d.f(0,-100,0)),this.camera.lookAt(0,0,0)}},{key:"changeRotateDirection",value:function(){this.directionNumber=(this.directionNumber+1)%3,this.rotateDirection=h[this.directionNumber]}},{key:"log",value:function(e){console.log(e)}},{key:"bind",value:function(){var e=this;window.addEventListener("resize",(function(){var t,i=window.innerWidth,n=window.innerHeight;e.resolution={width:i,height:n},null===(t=e.renderer)||void 0===t||t.setSize(i,n),e.camera.aspect=i/n,e.camera.updateProjectionMatrix()}))}}]),e}(),l=(i(17),i(2)),m=Object(n.forwardRef)((function(e,t){console.log("canvas component was rendered");var i=Object(n.useRef)(!1),r=Object(n.useRef)(null),s=Object(n.useRef)();return Object(n.useLayoutEffect)((function(){console.log("useLayoutEffect"),i.current&&console.warn("danger!"),i.current=!0,s.current=new u(r.current),s.current.render()}),[]),Object(n.useImperativeHandle)(t,(function(){return{cameraUp:function(){var e;null===(e=s.current)||void 0===e||e.cameraUp()},cameraDown:function(){var e;null===(e=s.current)||void 0===e||e.cameraDown()}}}),[]),Object(l.jsx)("canvas",{ref:r,id:"canvas",className:"canvas"})})),j=Object(n.memo)(m),w=(i(19),[{title:"u",description:"camera up"},{title:"d",description:"camera down"}]),b=function(e){return Object(l.jsxs)("section",{className:"wrapper",children:[Object(l.jsx)("h1",{className:"title",children:"React & THREE.js TEST"}),Object(l.jsxs)("section",{className:"contents",children:[Object(l.jsx)("h2",{className:"howto-title",children:"How To Use"}),Object(l.jsx)("ul",{className:"howto-list",children:w.map((function(e){return Object(l.jsx)("li",{className:"howto-item",children:Object(l.jsxs)("dl",{className:"description",children:[Object(l.jsxs)("dt",{className:"description-title",children:['keydown "',e.title,'"']}),Object(l.jsx)("dd",{className:"description-content",children:e.description})]})},e.title)}))})]}),Object(l.jsxs)("p",{className:"key-name",children:['keydown: "',e.pressed,'"']})]})},f=Object(n.memo)(b);var v=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),i=t[0],r=t[1],s=Object(n.useRef)(null),o=Object(n.useCallback)((function(e){var t,i,n=e.key;switch(r(n),n){case"d":null===(t=s.current)||void 0===t||t.cameraDown();break;case"u":null===(i=s.current)||void 0===i||i.cameraUp()}}),[]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[o]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{ref:s}),Object(l.jsx)(f,{pressed:i})]})};s.a.render(Object(l.jsx)(n.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fa80fca8.chunk.js.map