"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{410:function(e,t,i){i.d(t,{TwinkleUpdater:function(){return l}});var o=i(2060);class s{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=o.Oz.create(this.color,e.color)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.frequency&&(this.frequency=e.frequency),void 0!==e.opacity&&(this.opacity=(0,o.Cs)(e.opacity)))}}class n{constructor(){this.lines=new s,this.particles=new s}load(e){e&&(this.lines.load(e.lines),this.particles.load(e.particles))}}class l{getColorStyles(e,t,i,s){const n=e.options.twinkle;if(!n)return{};const l=n.particles,a=l.enable&&(0,o.sZ)()<l.frequency,c=e.options.zIndex,r=(1-e.zIndexFactor)**c.opacityRate,p=a?(0,o.Gu)(l.opacity)*r:s,d=(0,o.lN)(l.color),u=d?(0,o.vz)(d,p):void 0,h={},w=a&&u;return h.fill=w?u:void 0,h.stroke=w?u:void 0,h}async init(){await Promise.resolve()}isEnabled(e){const t=e.options.twinkle;return!!t&&t.particles.enable}loadOptions(e,...t){e.twinkle||(e.twinkle=new n);for(const i of t)e.twinkle.load(i?.twinkle)}async update(){await Promise.resolve()}}}}]);