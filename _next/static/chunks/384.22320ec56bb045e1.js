"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{384:function(e,t,i){i.d(t,{Repulser:function(){return c}});var s=i(2060),n=i(8267);const o="repulse";class c extends s.L8{constructor(e,t){super(t),this._clickRepulse=()=>{const e=this.container,t=e.actualOptions.interactivity.modes.repulse;if(!t)return;const i=e.repulse??{particles:[]};if(i.finish||(i.count||(i.count=0),i.count++,i.count===e.particles.count&&(i.finish=!0)),i.clicking){const n=e.retina.repulseModeDistance;if(!n||n<0)return;const o=Math.pow(n/6,3),c=e.interactivity.mouse.clickPosition;if(void 0===c)return;const r=new s.Cd(c.x,c.y,o),l=e.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const e of l){const{dx:n,dy:r,distance:l}=(0,s.oW)(c,e.position),a=l**2,u=t.speed,p=-o*u/a;if(a<=o){i.particles.push(e);const t=s.OW.create(n,r);t.length=p,e.velocity.setTo(t)}}}else if(!1===i.clicking){for(const e of i.particles)e.velocity.setTo(e.initialVelocity);i.particles=[]}},this._hoverRepulse=()=>{const e=this.container,t=e.interactivity.mouse.position,i=e.retina.repulseModeDistance;!i||i<0||!t||this._processRepulse(t,i,new s.Cd(t.x,t.y,i))},this._processRepulse=(e,t,i,n)=>{const o=this.container,c=o.particles.quadTree.query(i,(e=>this.isEnabled(e))),r=o.actualOptions.interactivity.modes.repulse;if(!r)return;const{easing:l,speed:a,factor:u,maxSpeed:p}=r,d=(0,s._X)(l),f=(n?.speed??a)*u;for(const h of c){const{dx:i,dy:n,distance:o}=(0,s.oW)(h.position,e),c=(0,s.uZ)(d(1-o/t)*f,0,p),r=s.OW.create(o?i/o*c:f,o?n/o*c:f);h.position.addTo(r)}},this._singleSelectorRepulse=(e,t)=>{const i=this.container,n=i.actualOptions.interactivity.modes.repulse;if(!n)return;const o=document.querySelectorAll(e);o.length&&o.forEach((e=>{const o=e,c=i.retina.pixelRatio,r={x:(o.offsetLeft+.5*o.offsetWidth)*c,y:(o.offsetTop+.5*o.offsetHeight)*c},l=.5*o.offsetWidth*c,a="circle"===t.type?new s.Cd(r.x,r.y,l):new s.Ae(o.offsetLeft*c,o.offsetTop*c,o.offsetWidth*c,o.offsetHeight*c),u=n.divs,p=(0,s.iC)(u,o);this._processRepulse(r,l,a,p)}))},this._engine=e,t.repulse||(t.repulse={particles:[]}),this.handleClickMode=e=>{const i=this.container.actualOptions.interactivity.modes.repulse;if(!i||e!==o)return;t.repulse||(t.repulse={particles:[]});const n=t.repulse;n.clicking=!0,n.count=0;for(const s of t.repulse.particles)this.isEnabled(s)&&s.velocity.setTo(s.initialVelocity);n.particles=[],n.finish=!1,setTimeout((()=>{t.destroyed||(n.clicking=!1)}),i.duration*s.X5)}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.repulse;t&&(e.retina.repulseModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,i=e.interactivity.status===s.Wt,n=t.interactivity.events,c=n.onHover,r=c.enable,l=c.mode,a=n.onClick,u=a.enable,p=a.mode,d=n.onDiv;i&&r&&(0,s.dB)(o,l)?this._hoverRepulse():u&&(0,s.dB)(o,p)?this._clickRepulse():(0,s.XD)(o,d,((e,t)=>this._singleSelectorRepulse(e,t)))}isEnabled(e){const t=this.container,i=t.actualOptions,n=t.interactivity.mouse,c=(e?.interactivity??i.interactivity).events,r=c.onDiv,l=c.onHover,a=c.onClick,u=(0,s.wm)(o,r);if(!(u||l.enable&&n.position||a.enable&&n.clickPosition))return!1;const p=l.mode,d=a.mode;return(0,s.dB)(o,p)||(0,s.dB)(o,d)||u}loadModeOptions(e,...t){e.repulse||(e.repulse=new n.H);for(const i of t)e.repulse.load(i?.repulse)}reset(){}}}}]);