"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7185],{8267:function(e,s,t){t.d(s,{H:function(){return d}});var a=t(2060);class i{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(void 0!==e.distance&&(this.distance=e.distance),void 0!==e.duration&&(this.duration=e.duration),void 0!==e.easing&&(this.easing=e.easing),void 0!==e.factor&&(this.factor=e.factor),void 0!==e.speed&&(this.speed=e.speed),void 0!==e.maxSpeed&&(this.maxSpeed=e.maxSpeed))}}class n extends i{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&void 0!==e.selectors&&(this.selectors=e.selectors)}}class d extends i{load(e){super.load(e),e&&(this.divs=(0,a.KH)(e.divs,(e=>{const s=new n;return s.load(e),s})))}}},7185:function(e,s,t){t.d(s,{loadExternalRepulseInteraction:function(){return a}});t(8267);async function a(e,s=!0){await e.addInteractor("externalRepulse",(async s=>{const{Repulser:a}=await t.e(384).then(t.bind(t,384));return new a(e,s)}),s)}}}]);