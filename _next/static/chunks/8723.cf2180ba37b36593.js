"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8723],{8723:function(t,e,s){s.d(e,{StarDrawer:function(){return o}});var a=s(2060);const n=0,r=0;class o{draw(t){!function(t){const{context:e,particle:s,radius:a}=t,o=s.sides,c=s.starInset??2;e.moveTo(n,r-a);for(let i=0;i<o;i++)e.rotate(Math.PI/o),e.lineTo(n,r-a*c),e.rotate(Math.PI/o),e.lineTo(n,r-a)}(t)}getSidesCount(t){const e=t.shapeData;return Math.round((0,a.Gu)(e?.sides??5))}particleInit(t,e){const s=e.shapeData;e.starInset=(0,a.Gu)(s?.inset??2)}}}}]);