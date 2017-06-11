// threejs.org/license
(function(l,ra){"object"===typeof exports&&"undefined"!==typeof module?ra(exports):"function"===typeof define&&define.amd?define(["exports"],ra):ra(l.THREE=l.THREE||{})})(this,function(l){function ra(){}function D(a,b){this.x=a||0;this.y=b||0}function ca(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:jf++});this.uuid=Y.generateUUID();this.name="";this.image=void 0!==a?a:ca.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:ca.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=
    void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new D(0,0);this.repeat=new D(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function ja(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Cb(a,b,c){this.uuid=Y.generateUUID();this.width=
    a;this.height=b;this.scissor=new ja(0,0,a,b);this.scissorTest=!1;this.viewport=new ja(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new ca(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Db(a,b,c){Cb.call(this,a,b,c);this.activeMipMapLevel=
    this.activeCubeFace=0}function pa(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function n(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function R(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function db(a,b,c,d,e,f,g,h,k,m,q,u){ca.call(this,null,f,g,h,k,m,d,e,q,u);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==
m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function Ya(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];ca.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Eb(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=xe[e];void 0===f&&(f=new Float32Array(e),xe[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function ye(a,b){var c=ze[b];void 0===c&&(c=new Int32Array(b),ze[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}
    function kf(a,b){a.uniform1f(this.addr,b)}function lf(a,b){a.uniform1i(this.addr,b)}function mf(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function nf(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function of(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function pf(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function qf(a,b){void 0===b.elements?
        a.uniformMatrix3fv(this.addr,!1,b):(Ae.set(b.elements),a.uniformMatrix3fv(this.addr,!1,Ae))}function rf(a,b){void 0===b.elements?a.uniformMatrix4fv(this.addr,!1,b):(Be.set(b.elements),a.uniformMatrix4fv(this.addr,!1,Be))}function sf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||Ce,d)}function tf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTextureCube(b||De,d)}function Ee(a,b){a.uniform2iv(this.addr,b)}function Fe(a,b){a.uniform3iv(this.addr,b)}function Ge(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){a.uniform4iv(this.addr,b)}function uf(a){switch(a){case 5126:return kf;case 35664:return mf;case 35665:return nf;case 35666:return of;case 35674:return pf;case 35675:return qf;case 35676:return rf;case 35678:case 36198:return sf;case 35680:return tf;case 5124:case 35670:return lf;case 35667:case 35671:return Ee;case 35668:case 35672:return Fe;case 35669:case 35673:return Ge}}function vf(a,b){a.uniform1fv(this.addr,b)}function wf(a,b){a.uniform1iv(this.addr,b)}function xf(a,b){a.uniform2fv(this.addr,
        Eb(b,this.size,2))}function yf(a,b){a.uniform3fv(this.addr,Eb(b,this.size,3))}function zf(a,b){a.uniform4fv(this.addr,Eb(b,this.size,4))}function Af(a,b){a.uniformMatrix2fv(this.addr,!1,Eb(b,this.size,4))}function Bf(a,b){a.uniformMatrix3fv(this.addr,!1,Eb(b,this.size,9))}function Cf(a,b){a.uniformMatrix4fv(this.addr,!1,Eb(b,this.size,16))}function Df(a,b,c){var d=b.length,e=ye(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||Ce,e[a])}function Ef(a,b,c){var d=b.length,e=ye(c,
        d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||De,e[a])}function Ff(a){switch(a){case 5126:return vf;case 35664:return xf;case 35665:return yf;case 35666:return zf;case 35674:return Af;case 35675:return Bf;case 35676:return Cf;case 35678:return Df;case 35680:return Ef;case 5124:case 35670:return wf;case 35667:case 35671:return Ee;case 35668:case 35672:return Fe;case 35669:case 35673:return Ge}}function Gf(a,b,c){this.id=a;this.addr=c;this.setValue=uf(b.type)}function Hf(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          c){this.id=a;this.addr=c;this.size=b.size;this.setValue=Ff(b.type)}function He(a){this.id=a;this.seq=[];this.map={}}function eb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=h.length;for(Pd.lastIndex=0;;){var m=Pd.exec(h),q=Pd.lastIndex,u=m[1],p=m[3];"]"===m[2]&&(u|=0);if(void 0===p||"["===p&&q+2===k){h=g;e=void 0===p?new Gf(u,e,f):new Hf(u,e,f);h.seq.push(e);
        h.map[e.id]=e;break}else p=g.map[u],void 0===p&&(p=new He(u),u=g,g=p,u.seq.push(g),u.map[g.id]=g),g=p}}}function G(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function gd(a,b){this.min=void 0!==a?a:new D(Infinity,Infinity);this.max=void 0!==b?b:new D(-Infinity,-Infinity)}function If(a,b){var c,d,e,f,g,h,k,m,q,u,p=a.context,r=a.state,l,t,y,x,v,K;this.render=function(w,J,X){if(0!==b.length){w=new n;var C=X.w/X.z,H=.5*X.z,da=.5*X.w,E=16/X.w,ha=new D(E*C,E),L=new n(1,1,0),fb=new D(1,
        1),Fb=new gd;Fb.min.set(X.x,X.y);Fb.max.set(X.x+(X.z-16),X.y+(X.w-16));if(void 0===x){var E=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),ka=new Uint16Array([0,1,2,0,2,3]);l=p.createBuffer();t=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,l);p.bufferData(p.ARRAY_BUFFER,E,p.STATIC_DRAW);p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,t);p.bufferData(p.ELEMENT_ARRAY_BUFFER,ka,p.STATIC_DRAW);v=p.createTexture();K=p.createTexture();r.bindTexture(p.TEXTURE_2D,v);p.texImage2D(p.TEXTURE_2D,0,p.RGB,16,16,0,
        p.RGB,p.UNSIGNED_BYTE,null);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST);r.bindTexture(p.TEXTURE_2D,K);p.texImage2D(p.TEXTURE_2D,0,p.RGBA,16,16,0,p.RGBA,p.UNSIGNED_BYTE,null);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE);
        p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST);var E=y={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},ka=p.createProgram(),P=p.createShader(p.FRAGMENT_SHADER),
            M=p.createShader(p.VERTEX_SHADER),W="precision "+a.getPrecision()+" float;\n";p.shaderSource(P,W+E.fragmentShader);p.shaderSource(M,W+E.vertexShader);p.compileShader(P);p.compileShader(M);p.attachShader(ka,P);p.attachShader(ka,M);p.linkProgram(ka);x=ka;q=p.getAttribLocation(x,"position");u=p.getAttribLocation(x,"uv");c=p.getUniformLocation(x,"renderType");d=p.getUniformLocation(x,"map");e=p.getUniformLocation(x,"occlusionMap");f=p.getUniformLocation(x,"opacity");g=p.getUniformLocation(x,"color");
        h=p.getUniformLocation(x,"scale");k=p.getUniformLocation(x,"rotation");m=p.getUniformLocation(x,"screenPosition")}p.useProgram(x);r.initAttributes();r.enableAttribute(q);r.enableAttribute(u);r.disableUnusedAttributes();p.uniform1i(e,0);p.uniform1i(d,1);p.bindBuffer(p.ARRAY_BUFFER,l);p.vertexAttribPointer(q,2,p.FLOAT,!1,16,0);p.vertexAttribPointer(u,2,p.FLOAT,!1,16,8);p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,t);r.disable(p.CULL_FACE);r.buffers.depth.setMask(!1);ka=0;for(P=b.length;ka<P;ka++)if(E=16/X.w,
            ha.set(E*C,E),M=b[ka],w.set(M.matrixWorld.elements[12],M.matrixWorld.elements[13],M.matrixWorld.elements[14]),w.applyMatrix4(J.matrixWorldInverse),w.applyMatrix4(J.projectionMatrix),L.copy(w),fb.x=X.x+L.x*H+H-8,fb.y=X.y+L.y*da+da-8,!0===Fb.containsPoint(fb)){r.activeTexture(p.TEXTURE0);r.bindTexture(p.TEXTURE_2D,null);r.activeTexture(p.TEXTURE1);r.bindTexture(p.TEXTURE_2D,v);p.copyTexImage2D(p.TEXTURE_2D,0,p.RGB,fb.x,fb.y,16,16,0);p.uniform1i(c,0);p.uniform2f(h,ha.x,ha.y);p.uniform3f(m,L.x,L.y,L.z);
        r.disable(p.BLEND);r.enable(p.DEPTH_TEST);p.drawElements(p.TRIANGLES,6,p.UNSIGNED_SHORT,0);r.activeTexture(p.TEXTURE0);r.bindTexture(p.TEXTURE_2D,K);p.copyTexImage2D(p.TEXTURE_2D,0,p.RGBA,fb.x,fb.y,16,16,0);p.uniform1i(c,1);r.disable(p.DEPTH_TEST);r.activeTexture(p.TEXTURE1);r.bindTexture(p.TEXTURE_2D,v);p.drawElements(p.TRIANGLES,6,p.UNSIGNED_SHORT,0);M.positionScreen.copy(L);M.customUpdateCallback?M.customUpdateCallback(M):M.updateLensFlares();p.uniform1i(c,2);r.enable(p.BLEND);for(var W=0,ba=M.lensFlares.length;W<
        ba;W++){var S=M.lensFlares[W];.001<S.opacity&&.001<S.scale&&(L.x=S.x,L.y=S.y,L.z=S.z,E=S.size*S.scale/X.w,ha.x=E*C,ha.y=E,p.uniform3f(m,L.x,L.y,L.z),p.uniform2f(h,ha.x,ha.y),p.uniform1f(k,S.rotation),p.uniform1f(f,S.opacity),p.uniform3f(g,S.color.r,S.color.g,S.color.b),r.setBlending(S.blending,S.blendEquation,S.blendSrc,S.blendDst),a.setTexture2D(S.texture,1),p.drawElements(p.TRIANGLES,6,p.UNSIGNED_SHORT,0))}}r.enable(p.CULL_FACE);r.enable(p.DEPTH_TEST);r.buffers.depth.setMask(!0);a.resetGLState()}}}
    function Jf(a,b){var c,d,e,f,g,h,k,m,q,u,p,r,l,t,y,x,v;function K(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var w=a.context,J=a.state,X,C,H,da,E=new n,ha=new pa,L=new n;this.render=function(n,Fb){if(0!==b.length){if(void 0===H){var ka=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),P=new Uint16Array([0,1,2,0,2,3]);X=w.createBuffer();C=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,X);w.bufferData(w.ARRAY_BUFFER,ka,w.STATIC_DRAW);
        w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,C);w.bufferData(w.ELEMENT_ARRAY_BUFFER,P,w.STATIC_DRAW);var ka=w.createProgram(),P=w.createShader(w.VERTEX_SHADER),M=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(P,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
        w.shaderSource(M,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
        w.compileShader(P);w.compileShader(M);w.attachShader(ka,P);w.attachShader(ka,M);w.linkProgram(ka);H=ka;x=w.getAttribLocation(H,"position");v=w.getAttribLocation(H,"uv");c=w.getUniformLocation(H,"uvOffset");d=w.getUniformLocation(H,"uvScale");e=w.getUniformLocation(H,"rotation");f=w.getUniformLocation(H,"scale");g=w.getUniformLocation(H,"color");h=w.getUniformLocation(H,"map");k=w.getUniformLocation(H,"opacity");m=w.getUniformLocation(H,"modelViewMatrix");q=w.getUniformLocation(H,"projectionMatrix");
        u=w.getUniformLocation(H,"fogType");p=w.getUniformLocation(H,"fogDensity");r=w.getUniformLocation(H,"fogNear");l=w.getUniformLocation(H,"fogFar");t=w.getUniformLocation(H,"fogColor");y=w.getUniformLocation(H,"alphaTest");ka=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");ka.width=8;ka.height=8;P=ka.getContext("2d");P.fillStyle="white";P.fillRect(0,0,8,8);da=new ca(ka);da.needsUpdate=!0}w.useProgram(H);J.initAttributes();J.enableAttribute(x);J.enableAttribute(v);J.disableUnusedAttributes();
        J.disable(w.CULL_FACE);J.enable(w.BLEND);w.bindBuffer(w.ARRAY_BUFFER,X);w.vertexAttribPointer(x,2,w.FLOAT,!1,16,0);w.vertexAttribPointer(v,2,w.FLOAT,!1,16,8);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,C);w.uniformMatrix4fv(q,!1,Fb.projectionMatrix.elements);J.activeTexture(w.TEXTURE0);w.uniform1i(h,0);P=ka=0;(M=n.fog)?(w.uniform3f(t,M.color.r,M.color.g,M.color.b),M.isFog?(w.uniform1f(r,M.near),w.uniform1f(l,M.far),w.uniform1i(u,1),P=ka=1):M.isFogExp2&&(w.uniform1f(p,M.density),w.uniform1i(u,2),P=ka=2)):
            (w.uniform1i(u,0),P=ka=0);for(var M=0,W=b.length;M<W;M++){var ba=b[M];ba.modelViewMatrix.multiplyMatrices(Fb.matrixWorldInverse,ba.matrixWorld);ba.z=-ba.modelViewMatrix.elements[14]}b.sort(K);for(var S=[],M=0,W=b.length;M<W;M++){var ba=b[M],N=ba.material;!1!==N.visible&&(w.uniform1f(y,N.alphaTest),w.uniformMatrix4fv(m,!1,ba.modelViewMatrix.elements),ba.matrixWorld.decompose(E,ha,L),S[0]=L.x,S[1]=L.y,ba=0,n.fog&&N.fog&&(ba=P),ka!==ba&&(w.uniform1i(u,ba),ka=ba),null!==N.map?(w.uniform2f(c,N.map.offset.x,
            N.map.offset.y),w.uniform2f(d,N.map.repeat.x,N.map.repeat.y)):(w.uniform2f(c,0,0),w.uniform2f(d,1,1)),w.uniform1f(k,N.opacity),w.uniform3f(g,N.color.r,N.color.g,N.color.b),w.uniform1f(e,N.rotation),w.uniform2fv(f,S),J.setBlending(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),J.buffers.depth.setTest(N.depthTest),J.buffers.depth.setMask(N.depthWrite),N.map?a.setTexture2D(N.map,0):a.setTexture2D(da,0),w.drawElements(w.TRIANGLES,
            6,w.UNSIGNED_SHORT,0))}J.enable(w.CULL_FACE);a.resetGLState()}}}function Q(){Object.defineProperty(this,"id",{value:Kf++});this.uuid=Y.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=
        null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.overdraw=0;this.needsUpdate=this.visible=!0}function Da(a){Q.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function Za(a){Q.call(this);
        this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function Sa(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,-Infinity)}function Fa(a,b){this.center=void 0!==a?a:new n;this.radius=void 0!==b?b:0}function Ja(){this.elements=
        [1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function va(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==b?b:0}function hd(a,b,c,d,e,f){this.planes=[void 0!==a?a:new va,void 0!==b?b:new va,void 0!==c?c:new va,void 0!==d?d:new va,void 0!==e?e:new va,void 0!==f?f:new va]}function Ie(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=t;var h=b.customDepthMaterial;d&&(g=y,h=b.customDistanceMaterial);
        h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=x[f],void 0===b&&(b=
            {},x[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;E.renderSingleSided&&2==h&&(h=0);E.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(b,d,g,h){if(!1!==b.visible){if(b.layers.test(d.layers)&&(b.isMesh||b.isLine||b.isPoints)&&
        b.castShadow&&(!b.frustumCulled||k.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);var m=c.update(b),p=b.material;if(Array.isArray(p))for(var q=m.groups,u=0,r=q.length;u<r;u++){var v=q[u],w=p[v.materialIndex];w&&w.visible&&(w=e(b,w,h,l),a.renderBufferDirect(g,null,m,w,b,v))}else p.visible&&(w=e(b,p,h,l),a.renderBufferDirect(g,null,m,w,b,null))}b=b.children;m=0;for(p=b.length;m<p;m++)f(b[m],d,g,h)}}var g=a.context,h=a.state,k=new hd,m=new R,q=b.shadows,
        u=new D,p=new D(d.maxTextureSize,d.maxTextureSize),r=new n,l=new n,t=Array(4),y=Array(4),x={},v=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)],K=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)],w=[new ja,new ja,new ja,new ja,new ja,new ja];b=new Za;b.depthPacking=3201;b.clipping=!0;d=$a.distanceRGBA;for(var J=Ga.clone(d.uniforms),X=0;4!==X;++X){var C=0!==(X&1),H=0!==(X&2),da=b.clone();da.morphTargets=C;da.skinning=H;t[X]=da;C=new Da({defines:{USE_SHADOWMAP:""},
        uniforms:J,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:C,skinning:H,clipping:!0});y[X]=C}var E=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,c){if(!1!==E.enabled&&(!1!==E.autoUpdate||!1!==E.needsUpdate)&&0!==q.length){h.disable(g.BLEND);h.buffers.color.setClear(1,1,1,1);h.buffers.depth.setTest(!0);h.setScissorTest(!1);for(var d,e=0,t=q.length;e<t;e++){var n=q[e];d=n.shadow;
        var y=n&&n.isPointLight;if(void 0===d)console.warn("THREE.WebGLShadowMap:",n,"has no shadow.");else{var x=d.camera;u.copy(d.mapSize);u.min(p);if(y){var C=u.x,J=u.y;w[0].set(2*C,J,C,J);w[1].set(0,J,C,J);w[2].set(3*C,J,C,J);w[3].set(C,J,C,J);w[4].set(3*C,0,C,J);w[5].set(C,0,C,J);u.x*=4;u.y*=2}null===d.map&&(d.map=new Cb(u.x,u.y,{minFilter:1003,magFilter:1003,format:1023}),d.map.texture.name=n.name+".shadowMap",x.updateProjectionMatrix());d.isSpotLightShadow&&d.update(n);C=d.map;J=d.matrix;l.setFromMatrixPosition(n.matrixWorld);
            x.position.copy(l);y?(d=6,J.makeTranslation(-l.x,-l.y,-l.z)):(d=1,r.setFromMatrixPosition(n.target.matrixWorld),x.lookAt(r),x.updateMatrixWorld(),J.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),J.multiply(x.projectionMatrix),J.multiply(x.matrixWorldInverse));a.setRenderTarget(C);a.clear();for(n=0;n<d;n++)y&&(r.copy(x.position),r.add(v[n]),x.up.copy(K[n]),x.lookAt(r),x.updateMatrixWorld(),h.viewport(w[n])),m.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),k.setFromMatrix(m),f(b,c,x,y)}}e=a.getClearColor();
        t=a.getClearAlpha();a.setClearColor(e,t);E.needsUpdate=!1}}}function gb(a,b){this.origin=void 0!==a?a:new n;this.direction=void 0!==b?b:new n}function ab(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||ab.DefaultOrder}function Qd(){this.mask=1}function z(){Object.defineProperty(this,"id",{value:Lf++});this.uuid=Y.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=z.DefaultUp.clone();var a=new n,b=new ab,c=new pa,d=new n(1,1,1);b.onChange(function(){c.setFromEuler(b,
        !1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new R},normalMatrix:{value:new Ja}});this.matrix=new R;this.matrixWorld=new R;this.matrixAutoUpdate=z.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Qd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=
        0;this.userData={}}function Gb(a,b){this.start=void 0!==a?a:new n;this.end=void 0!==b?b:new n}function Ta(a,b,c){this.a=void 0!==a?a:new n;this.b=void 0!==b?b:new n;this.c=void 0!==c?c:new n}function Ua(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new n;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new G;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ma(a){Q.call(this);this.type="MeshBasicMaterial";this.color=new G(16777215);
        this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function T(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=Y.generateUUID();
        this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function qc(a,b){T.call(this,new Int8Array(a),b)}function rc(a,b){T.call(this,new Uint8Array(a),b)}function sc(a,b){T.call(this,new Uint8ClampedArray(a),b)}function tc(a,b){T.call(this,new Int16Array(a),b)}function hb(a,b){T.call(this,new Uint16Array(a),b)}function uc(a,b){T.call(this,new Int32Array(a),
        b)}function ib(a,b){T.call(this,new Uint32Array(a),b)}function B(a,b){T.call(this,new Float32Array(a),b)}function vc(a,b){T.call(this,new Float64Array(a),b)}function Je(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function Rd(a){if(0===
        a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function I(){Object.defineProperty(this,"id",{value:Sd++});this.uuid=Y.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=
        this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function F(){Object.defineProperty(this,"id",{value:Sd++});this.uuid=Y.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function Ba(a,b){z.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new F;this.material=void 0!==b?b:new Ma({color:16777215*Math.random()});this.drawMode=
        0;this.updateMorphTargets()}function Hb(a,b,c,d,e,f){I.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new jb(a,b,c,d,e,f));this.mergeVertices()}function jb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l,X,C,H){var da=f/X,E=g/C,ha=f/2,L=g/2,D=l/2;g=X+1;var B=C+1,z=f=0,P,M,W=new n;for(M=0;M<B;M++){var ba=M*E-L;for(P=0;P<g;P++)W[a]=(P*da-ha)*d,W[b]=ba*e,W[c]=D,m.push(W.x,W.y,W.z),W[a]=0,W[b]=0,W[c]=0<l?1:
        -1,q.push(W.x,W.y,W.z),u.push(P/X),u.push(1-M/C),f+=1}for(M=0;M<C;M++)for(P=0;P<X;P++)a=p+P+g*(M+1),b=p+(P+1)+g*(M+1),c=p+(P+1)+g*M,k.push(p+P+g*M,a,c),k.push(a,b,c),z+=6;h.addGroup(r,z,H);r+=z;p+=f}F.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=[],m=[],q=[],u=[],p=0,r=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x",
        "z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(k);this.addAttribute("position",new B(m,3));this.addAttribute("normal",new B(q,3));this.addAttribute("uv",new B(u,2))}function wc(a,b,c,d){I.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new kb(a,b,c,d));this.mergeVertices()}function kb(a,b,c,d){F.call(this);this.type="PlaneBufferGeometry";
        this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d,q=[],u=[],p=[],r=[];for(a=0;a<h;a++){var l=a*m-f;for(b=0;b<g;b++)u.push(b*k-e,-l,0),p.push(0,0,1),r.push(b/c),r.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,q.push(b+g*a,e,h),q.push(e,f,h);this.setIndex(q);this.addAttribute("position",new B(u,3));this.addAttribute("normal",new B(p,3));this.addAttribute("uv",new B(r,
            2))}function Na(){z.call(this);this.type="Camera";this.matrixWorldInverse=new R;this.projectionMatrix=new R}function wa(a,b,c,d){Na.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Ib(a,b,c,d,e,f){Na.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=
        b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Mf(a){var b={};return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return b[a.uuid]},remove:function(c){c.isInterleavedBufferAttribute&&(c=c.data);var d=b[c.uuid];d&&(a.deleteBuffer(d.buffer),delete b[c.uuid])},update:function(c,d){c.isInterleavedBufferAttribute&&(c=c.data);var e=b[c.uuid];if(void 0===e){var e=c.uuid,f=c,g=f.array,h=f.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW,
        k=a.createBuffer();a.bindBuffer(d,k);a.bufferData(d,g,h);f.onUploadCallback();h=a.FLOAT;g instanceof Float32Array?h=a.FLOAT:g instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):g instanceof Uint16Array?h=a.UNSIGNED_SHORT:g instanceof Int16Array?h=a.SHORT:g instanceof Uint32Array?h=a.UNSIGNED_INT:g instanceof Int32Array?h=a.INT:g instanceof Int8Array?h=a.BYTE:g instanceof Uint8Array&&(h=a.UNSIGNED_BYTE);b[e]={buffer:k,type:h,bytesPerElement:g.BYTES_PER_ELEMENT,
        version:f.version}}else e.version<c.version&&(f=c,g=f.array,k=f.updateRange,a.bindBuffer(d,e.buffer),!1===f.dynamic?a.bufferData(d,g,a.STATIC_DRAW):-1===k.count?a.bufferSubData(d,0,g):0===k.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,k.offset*g.BYTES_PER_ELEMENT,g.subarray(k.offset,k.offset+k.count)),k.count=0),e.version=c.version)}}}
    function Nf(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program&&b.program&&a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function Of(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Pf(){var a=[],b=-1,c=[],d=-1;return{opaque:a,transparent:c,init:function(){d=b=-1},push:function(e,f,g,h,k){var m,q;g.transparent?(m=c,q=++d):(m=
        a,q=++b);(q=m[q])?(q.id=e.id,q.object=e,q.geometry=f,q.material=g,q.program=g.program,q.renderOrder=e.renderOrder,q.z=h,q.group=k):(q={id:e.id,object:e,geometry:f,material:g,program:g.program,renderOrder:e.renderOrder,z:h,group:k},m.push(q))},finish:function(){a.length=b+1;c.length=d+1},sort:function(){a.sort(Nf);c.sort(Of)}}}function Qf(){var a={};return{get:function(b,c){var d=b.id+","+c.id,e=a[d];void 0===e&&(e=new Pf,a[d]=e);return e},dispose:function(){a={}}}}function Rf(a,b,c){var d,e,f;this.setMode=
        function(a){d=a};this.setIndex=function(a){e=a.type;f=a.bytesPerElement};this.render=function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)};this.renderInstances=function(g,h,k){var m=b.get("ANGLE_instanced_arrays");null===m?console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(m.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*
        g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*k/3))}}function Sf(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)};this.renderInstances=function(e,f,g){var h=b.get("ANGLE_instanced_arrays");if(null===h)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var k=e.attributes.position;k.isInterleavedBufferAttribute?
        (g=k.data.count,h.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount)):h.drawArraysInstancedANGLE(d,f,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*g/3)}}}function Tf(a,b,c){function d(a){a=a.target;var h=e[a.id];null!==h.index&&b.remove(h.index);for(var k in h.attributes)b.remove(h.attributes[k]);a.removeEventListener("dispose",d);delete e[a.id];if(k=f[a.id])b.remove(k),delete f[a.id];if(k=f[h.id])b.remove(k),delete f[h.id];c.geometries--}
        var e={},f={};return{get:function(a,b){var f=e[b.id];if(f)return f;b.addEventListener("dispose",d);b.isBufferGeometry?f=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new F).setFromObject(a)),f=b._bufferGeometry);e[b.id]=f;c.geometries++;return f},update:function(c){var d=c.index,e=c.attributes;null!==d&&b.update(d,a.ELEMENT_ARRAY_BUFFER);for(var f in e)b.update(e[f],a.ARRAY_BUFFER);c=c.morphAttributes;for(f in c)for(var d=c[f],e=0,q=d.length;e<q;e++)b.update(d[e],a.ARRAY_BUFFER)},
            getWireframeAttribute:function(c){var d=f[c.id];if(d)return d;var d=[],e=c.index,m=c.attributes;if(null!==e)for(var e=e.array,m=0,q=e.length;m<q;m+=3){var u=e[m+0],p=e[m+1],r=e[m+2];d.push(u,p,p,r,r,u)}else for(e=m.position.array,m=0,q=e.length/3-1;m<q;m+=3)u=m+0,p=m+1,r=m+2,d.push(u,p,p,r,r,u);d=new (65535<Rd(d)?ib:hb)(d,1);b.update(d,a.ELEMENT_ARRAY_BUFFER);return f[c.id]=d}}}function Uf(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c=
        {direction:new n,color:new G,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "SpotLight":c={position:new n,direction:new n,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "PointLight":c={position:new n,color:new G,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "HemisphereLight":c={direction:new n,skyColor:new G,groundColor:new G};break;case "RectAreaLight":c=
        {color:new G,position:new n,halfWidth:new n,halfHeight:new n}}return a[b.id]=c}}}function Vf(a,b,c){var d={};return{update:function(a){var f=c.frame,g=a.geometry,h=b.get(a,g);d[h.id]!==f&&(g.isGeometry&&h.updateFromObject(a),b.update(h),d[h.id]=f);return h},clear:function(){d={}}}}function Wf(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function Ke(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&
    console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),Wf(c));return d}function Le(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma",
        "( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Td(a,b){var c=Le(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function Xf(a,b){var c=Le(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function Yf(a,b){var c;switch(b){case 1:c="Linear";break;case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+
        c+"ToneMapping( color ); }"}function Zf(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xc).join("\n")}
    function $f(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function xc(a){return""!==a}function Me(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Ud(a){return a.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,function(a,c){var d=aa[c];if(void 0===d)throw Error("Can not resolve #include <"+
        c+">");return Ud(d)})}function Ne(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function ag(a,b,c,d,e){var f=a.context,g=c.extensions,h=c.defines,k=d.vertexShader,m=d.fragmentShader,q="SHADOWMAP_TYPE_BASIC";1===e.shadowMapType?q="SHADOWMAP_TYPE_PCF":2===e.shadowMapType&&(q="SHADOWMAP_TYPE_PCF_SOFT");var u="ENVMAP_TYPE_CUBE",p="ENVMAP_MODE_REFLECTION",
        r="ENVMAP_BLENDING_MULTIPLY";if(e.envMap){switch(c.envMap.mapping){case 301:case 302:u="ENVMAP_TYPE_CUBE";break;case 306:case 307:u="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:u="ENVMAP_TYPE_EQUIREC";break;case 305:u="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:p="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:r="ENVMAP_BLENDING_MULTIPLY";break;case 1:r="ENVMAP_BLENDING_MIX";break;case 2:r="ENVMAP_BLENDING_ADD"}}var l=0<a.gammaFactor?a.gammaFactor:1,g=Zf(g,e,a.extensions),t=
        $f(h),n=f.createProgram();c.isRawShaderMaterial?(h=[t,"\n"].filter(xc).join("\n"),d=[g,t,"\n"].filter(xc).join("\n")):(h=["precision "+e.precision+" float;","precision "+e.precision+" int;","#define SHADER_NAME "+d.name,t,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+l,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?
        "#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?
        "#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&!1===e.flatShading?"#define USE_MORPHNORMALS":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+e.numClippingPlanes,e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+q:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&
    a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;",
        "\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(xc).join("\n"),d=[g,"precision "+e.precision+" float;","precision "+
    e.precision+" int;","#define SHADER_NAME "+d.name,t,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"","#define GAMMA_FACTOR "+l,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":
        "",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+e.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(e.numClippingPlanes-e.numClipIntersection),e.shadowMapEnabled?
        "#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+q:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",e.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==e.toneMapping?"#define TONE_MAPPING":
        "",0!==e.toneMapping?aa.tonemapping_pars_fragment:"",0!==e.toneMapping?Yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.outputEncoding||e.mapEncoding||e.envMapEncoding||e.emissiveMapEncoding?aa.encodings_pars_fragment:"",e.mapEncoding?Td("mapTexelToLinear",e.mapEncoding):"",e.envMapEncoding?Td("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMapEncoding?Td("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.outputEncoding?Xf("linearToOutputTexel",e.outputEncoding):"",
        e.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(xc).join("\n"));k=Ud(k);k=Me(k,e);m=Ud(m);m=Me(m,e);c.isShaderMaterial||(k=Ne(k),m=Ne(m));m=d+m;k=Ke(f,f.VERTEX_SHADER,h+k);m=Ke(f,f.FRAGMENT_SHADER,m);f.attachShader(n,k);f.attachShader(n,m);void 0!==c.index0AttributeName?f.bindAttribLocation(n,0,c.index0AttributeName):!0===e.morphTargets&&f.bindAttribLocation(n,0,"position");f.linkProgram(n);e=f.getProgramInfoLog(n);q=f.getShaderInfoLog(k);u=f.getShaderInfoLog(m);r=p=!0;if(!1===
        f.getProgramParameter(n,f.LINK_STATUS))p=!1,console.error("THREE.WebGLProgram: shader error: ",f.getError(),"gl.VALIDATE_STATUS",f.getProgramParameter(n,f.VALIDATE_STATUS),"gl.getProgramInfoLog",e,q,u);else if(""!==e)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",e);else if(""===q||""===u)r=!1;r&&(this.diagnostics={runnable:p,material:c,programLog:e,vertexShader:{log:q,prefix:h},fragmentShader:{log:u,prefix:d}});f.deleteShader(k);f.deleteShader(m);var x;this.getUniforms=function(){void 0===
    x&&(x=new eb(f,n,a));return x};var v;this.getAttributes=function(){if(void 0===v){for(var a={},b=f.getProgramParameter(n,f.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=f.getActiveAttrib(n,c).name;a[d]=f.getAttribLocation(n,d)}v=a}return v};this.destroy=function(){f.deleteProgram(n);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
        return this.getAttributes()}}});this.id=bg++;this.code=b;this.usedTimes=1;this.program=n;this.vertexShader=k;this.fragmentShader=m;return this}function cg(a,b){function c(a,b){var c;a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",
        MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
        this.getParameters=function(d,f,k,m,q,u){var p=e[d.type],r;if(u.isSkinnedMesh)if(r=u.skeleton.bones,b.floatVertexTextures)r=1024;else{var l=Math.min(Math.floor((b.maxVertexUniforms-20)/4),r.length);l<r.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+r.length+" bones. This GPU supports "+l+"."),r=0):r=l}else r=0;l=a.getPrecision();null!==d.precision&&(l=b.getMaxPrecision(d.precision),l!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",l,"instead."));
            var t=a.getRenderTarget();return{shaderID:p,precision:l,supportsVertexTextures:b.vertexTextures,outputEncoding:c(t?t.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,
                displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,gradientMap:!!d.gradientMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!k,useFog:d.fog,fogExp:k&&k.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning&&0<r,maxBones:r,useVertexTexture:b.floatVertexTextures,morphTargets:d.morphTargets,morphNormals:d.morphNormals,
                maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:m,numClipIntersection:q,dithering:d.dithering,shadowMapEnabled:a.shadowMap.enabled&&u.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,
                alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(e=0;e<f.length;e++)d.push(c[f[e]]);d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);return d.join()};this.acquireProgram=function(b,c,e,f){for(var q,u=0,p=d.length;u<
        p;u++){var r=d[u];if(r.code===f){q=r;++q.usedTimes;break}}void 0===q&&(q=new ag(a,f,b,c,e),d.push(q));return q};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function dg(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,
        0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}function k(a){return Y.isPowerOfTwo(a.width)&&Y.isPowerOfTwo(a.height)}function m(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function q(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function u(b){b=b.target;b.removeEventListener("dispose",u);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);
    else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d.remove(b)}g.textures--}function p(b){b=b.target;b.removeEventListener("dispose",p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),
    c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b)}g.textures--}function r(b,p){var q=d.get(b);if(0<b.version&&q.__version!==b.version){var r=b.image;if(void 0===r)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===r.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===q.__webglInit&&(q.__webglInit=!0,b.addEventListener("dispose",u),q.__webglTexture=
        a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+p);c.bindTexture(a.TEXTURE_2D,q.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var t=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===k(t))if(r=t,r instanceof HTMLImageElement||r instanceof HTMLCanvasElement){var n=document.createElementNS("http://www.w3.org/1999/xhtml",
        "canvas");n.width=Y.nearestPowerOfTwo(r.width);n.height=Y.nearestPowerOfTwo(r.height);n.getContext("2d").drawImage(r,0,0,n.width,n.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+r.width+"x"+r.height+"). Resized to "+n.width+"x"+n.height,r);t=n}else t=r;var r=k(t),n=f(b.format),y=f(b.type);l(a.TEXTURE_2D,b,r);var da=b.mipmaps;if(b.isDepthTexture){da=a.DEPTH_COMPONENT;if(1015===b.type){if(!x)throw Error("Float Depth Texture only supported in WebGL2.0");da=a.DEPTH_COMPONENT32F}else x&&
    (da=a.DEPTH_COMPONENT16);1026===b.format&&da===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1012,y=f(b.type));1027===b.format&&(da=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,y=f(b.type)));c.texImage2D(a.TEXTURE_2D,0,da,t.width,t.height,0,n,y,null)}else if(b.isDataTexture)if(0<da.length&&
        r){for(var E=0,ha=da.length;E<ha;E++)t=da[E],c.texImage2D(a.TEXTURE_2D,E,n,t.width,t.height,0,n,y,t.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,n,t.width,t.height,0,n,y,t.data);else if(b.isCompressedTexture)for(E=0,ha=da.length;E<ha;E++)t=da[E],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(n)?c.compressedTexImage2D(a.TEXTURE_2D,E,n,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):
        c.texImage2D(a.TEXTURE_2D,E,n,t.width,t.height,0,n,y,t.data);else if(0<da.length&&r){E=0;for(ha=da.length;E<ha;E++)t=da[E],c.texImage2D(a.TEXTURE_2D,E,n,n,y,t);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,n,n,y,t);m(b,r)&&a.generateMipmap(a.TEXTURE_2D);q.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+p);c.bindTexture(a.TEXTURE_2D,q.__webglTexture)}function l(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),
        a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,q(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,q(g.minFilter)),
    1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=
        g.anisotropy)}function t(b,e,g,h){var k=f(e.texture.format),m=f(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function n(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,
        b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var x="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=r;this.setTextureCube=function(b,p){var q=d.get(b);if(6===b.image.length)if(0<b.version&&q.__version!==
        b.version){q.__image__webglTextureCube||(b.addEventListener("dispose",u),q.__image__webglTextureCube=a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+p);c.bindTexture(a.TEXTURE_CUBE_MAP,q.__image__webglTextureCube);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var r=b&&b.isCompressedTexture,t=b.image[0]&&b.image[0].isDataTexture,n=[],y=0;6>y;y++)n[y]=r||t?t?b.image[y].image:b.image[y]:h(b.image[y],e.maxCubemapSize);var x=k(n[0]),E=f(b.format),ha=f(b.type);l(a.TEXTURE_CUBE_MAP,b,x);for(y=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   0;6>y;y++)if(r)for(var L,D=n[y].mipmaps,z=0,B=D.length;z<B;z++)L=D[z],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(E)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+y,z,E,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+y,z,E,L.width,L.height,0,E,ha,L.data);else t?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,E,n[y].width,n[y].height,
        0,E,ha,n[y].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,E,E,ha,n[y]);m(b,x)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);q.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+p),c.bindTexture(a.TEXTURE_CUBE_MAP,q.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);
        f.__webglTexture=a.createTexture();g.textures++;var h=!0===b.isWebGLRenderTargetCube,q=k(b);if(h){e.__webglFramebuffer=[];for(var u=0;6>u;u++)e.__webglFramebuffer[u]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(h){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);l(a.TEXTURE_CUBE_MAP,b.texture,q);for(u=0;6>u;u++)t(e.__webglFramebuffer[u],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+u);m(b.texture,q)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,
            null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),l(a.TEXTURE_2D,b.texture,q),t(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),m(b.texture,q)&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,
            e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);r(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,
            a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),n(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),n(e.__webglDepthbuffer,
            b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture,f=k(b);m(e,f)&&(b=b.isWebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function eg(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},remove:function(b){delete a[b.uuid]},clear:function(){a={}}}}function fg(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();
        a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==v[b]&&(a.enable(b),v[b]=!0)}function f(b){!1!==v[b]&&(a.disable(b),v[b]=!1)}function g(b,d,g,h,k,m,q,p){0!==b?e(a.BLEND):f(a.BLEND);5===b||b===w&&p===ha||(2===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),
        a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,
        a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),w=b,ha=p);if(5===b){k=k||d;m=m||g;q=q||h;if(d!==J||k!==H)a.blendEquationSeparate(c(d),c(k)),J=d,H=k;if(g!==X||h!==C||m!==da||q!==E)a.blendFuncSeparate(c(g),c(h),c(m),c(q)),X=g,C=h,da=m,E=q}else E=da=H=C=X=J=null}function h(b){L!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),L=b)}function k(b){0!==b?(e(a.CULL_FACE),b!==D&&(1===b?a.cullFace(a.BACK):
        2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);D=b}function m(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),B!==c||P!==d)a.polygonOffset(c,d),B=c,P=d}else f(a.POLYGON_OFFSET_FILL)}function q(b){void 0===b&&(b=a.TEXTURE0+W-1);S!==b&&(a.activeTexture(b),S=b)}var u=new function(){var b=!1,c=new ja,d=null,e=new ja;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&
        (a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},p=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);
            break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},r=new function(){var b=!1,c=null,d=null,g=null,h=null,k=null,m=null,q=null,p=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},
            setOp:function(b,c,d){if(k!==b||m!==c||q!==d)a.stencilOp(b,c,d),k=b,m=c,q=d},setLocked:function(a){b=a},setClear:function(b){p!==b&&(a.clearStencil(b),p=b)},reset:function(){b=!1;p=q=m=k=h=g=d=c=null}}},l=a.getParameter(a.MAX_VERTEX_ATTRIBS),t=new Uint8Array(l),n=new Uint8Array(l),x=new Uint8Array(l),v={},K=null,w=null,J=null,X=null,C=null,H=null,da=null,E=null,ha=!1,L=null,D=null,z=null,B=null,P=null,M=null,W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),
        ba=1<=parseFloat(l),S=null,N={},F=new ja,G=new ja,R={};R[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);R[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:u,depth:p,stencil:r},init:function(){u.setClear(0,0,0,1);p.setClear(1);r.setClear(0);e(a.DEPTH_TEST);p.setFunc(3);h(!1);k(1);e(a.CULL_FACE);e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=t.length;a<b;a++)t[a]=0},enableAttribute:function(c){t[c]=1;0===n[c]&&(a.enableVertexAttribArray(c),n[c]=
        1);0!==x[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),x[c]=0)},enableAttributeAndDivisor:function(c,d){t[c]=1;0===n[c]&&(a.enableVertexAttribArray(c),n[c]=1);x[c]!==d&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,d),x[c]=d)},disableUnusedAttributes:function(){for(var b=0,c=n.length;b!==c;++b)n[b]!==t[b]&&(a.disableVertexAttribArray(b),n[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===K&&(K=[],b.get("WEBGL_compressed_texture_pvrtc")||
        b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)K.push(c[d]);return K},setBlending:g,setMaterial:function(b){2===b.side?f(a.CULL_FACE):e(a.CULL_FACE);h(1===b.side);!0===b.transparent?g(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha):g(0);p.setFunc(b.depthFunc);p.setTest(b.depthTest);p.setMask(b.depthWrite);u.setMask(b.colorWrite);
        m(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits)},setFlipSided:h,setCullFace:k,setLineWidth:function(b){b!==z&&(ba&&a.lineWidth(b),z=b)},setPolygonOffset:m,getScissorTest:function(){return M},setScissorTest:function(b){(M=b)?e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:q,bindTexture:function(b,c){null===S&&q();var d=N[S];void 0===d&&(d={type:void 0,texture:void 0},N[S]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||R[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,
        arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){!1===F.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),F.copy(b))},viewport:function(b){!1===G.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),G.copy(b))},reset:function(){for(var b=0;b<n.length;b++)1===n[b]&&(a.disableVertexAttribArray(b),n[b]=0);v={};S=K=null;N={};D=L=w=null;u.reset();p.reset();r.reset()}}}function gg(a,b,c){function d(b){if("highp"===
        b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=
        !0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),q=a.getParameter(a.MAX_VERTEX_ATTRIBS),u=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),r=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),l=0<h,t=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;
        var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:k,maxCubemapSize:m,maxAttributes:q,maxVertexUniforms:u,maxVaryings:p,maxFragmentUniforms:r,vertexTextures:l,floatFragmentTextures:t,floatVertexTextures:l&&t}}function hg(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||
        a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;
        case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function ig(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==
    a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new va,k=new Ja,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,
        g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,k,r,l,t){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var n=4*k,x=l.clippingState||null;m.value=x;x=b(c,r,n,t);for(c=0;c!==n;++c)x[c]=d[c];l.clippingState=x;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=k}}}function Wd(a){function b(){fa.init();fa.scissor(N.copy(ga).multiplyScalar(V));fa.viewport(T.copy(id).multiplyScalar(V));fa.buffers.color.setClear(Ha.r,
        Ha.g,Ha.b,aa,C)}function c(){S=B=null;ba="";W=-1;fa.reset()}function d(a){a.preventDefault();c();b();ia.clear();va.clear()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);ia.remove(a)}function f(a){var b=ia.get(a).program;a.program=void 0;void 0!==b&&xa.releaseProgram(b)}function g(a,b,c){a.render(function(a){z.renderBufferImmediate(a,b,c)})}function h(a,b){return Math.abs(b[0])-Math.abs(a[0])}function k(a,b,c){if(a.visible){if(a.layers.test(b.layers))if(a.isLight)da.push(a);else if(a.isSprite)a.frustumCulled&&
    !la.intersectsSprite(a)||L.push(a);else if(a.isLensFlare)D.push(a);else if(a.isImmediateRenderObject)c&&Pa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(kd),E.push(a,null,a.material,Pa.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||la.intersectsObject(a)){c&&Pa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(kd);var d=va.update(a),e=a.material;if(Array.isArray(e))for(var f=d.groups,g=0,h=f.length;g<h;g++){var m=f[g],q=e[m.materialIndex];
        q&&q.visible&&E.push(a,d,q,Pa.z,m)}else e.visible&&E.push(a,d,e,Pa.z,null)}a=a.children;g=0;for(h=a.length;g<h;g++)k(a[g],b,c)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d,g=g.group;h.onBeforeRender(z,b,c,k,m,g);if(c.isArrayCamera)for(var p=c.cameras,u=0,r=p.length;u<r;u++){var l=p[u],t=l.bounds,n=t.x*O,U=t.y*ca,v=t.z*O,t=t.w*ca;z.setViewport(n,U,v,t);z.setScissor(n,U,v,t);z.setScissorTest(!0);q(h,b,l,k,m,g)}else q(h,b,c,k,m,g);
        h.onAfterRender(z,b,c,k,m,g)}}function q(a,b,c,d,e,f){a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);a.isImmediateRenderObject?(fa.setMaterial(e),b=p(c,b.fog,e,a),ba="",g(a,b,e)):z.renderBufferDirect(c,b.fog,d,e,a,f)}function u(a,b,c){var d=ia.get(a);c=xa.getParameters(a,ea,b,Oa.numPlanes,Oa.numIntersection,c);var g=xa.getProgramCode(a,c),h=d.program,k=!0;if(void 0===h)a.addEventListener("dispose",e);else if(h.code!==g)f(a);
    else{if(void 0!==c.shaderID)return;k=!1}k&&(c.shaderID?(h=$a[c.shaderID],d.shader={name:a.type,uniforms:Ga.clone(h.uniforms),vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader),h=xa.acquireProgram(a,d.shader,c,g),d.program=h,a.program=h);c=h.getAttributes();if(a.morphTargets)for(g=a.numSupportedMorphTargets=0;g<z.maxMorphTargets;g++)0<=c["morphTarget"+g]&&a.numSupportedMorphTargets++;
        if(a.morphNormals)for(g=a.numSupportedMorphNormals=0;g<z.maxMorphNormals;g++)0<=c["morphNormal"+g]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Oa.numPlanes,d.numIntersection=Oa.numIntersection,c.clippingPlanes=Oa.uniform;d.fog=b;d.lightsHash=ea.hash;a.lights&&(c.ambientLightColor.value=ea.ambient,c.directionalLights.value=ea.directional,c.spotLights.value=ea.spot,c.rectAreaLights.value=ea.rectArea,c.pointLights.value=
            ea.point,c.hemisphereLights.value=ea.hemi,c.directionalShadowMap.value=ea.directionalShadowMap,c.directionalShadowMatrix.value=ea.directionalShadowMatrix,c.spotShadowMap.value=ea.spotShadowMap,c.spotShadowMatrix.value=ea.spotShadowMatrix,c.pointShadowMap.value=ea.pointShadowMap,c.pointShadowMatrix.value=ea.pointShadowMatrix);a=d.program.getUniforms();a=eb.seqWithValue(a.seq,c);d.uniformsList=a}function p(a,b,c,d){Q=0;var e=ia.get(c);jd&&(Vd||a!==S)&&Oa.setState(c.clippingPlanes,c.clipIntersection,
        c.clipShadows,a,e,a===S&&c.id===W);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==ea.hash?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===Oa.numPlanes&&e.numIntersection===Oa.numIntersection||(c.needsUpdate=!0));c.needsUpdate&&(u(c,b,d),c.needsUpdate=!1);var f=!1,g=!1,h=!1,k=e.program,m=k.getUniforms(),q=e.shader.uniforms;k.id!==B&&(A.useProgram(k.program),B=k.id,h=g=f=!0);c.id!==W&&(W=c.id,g=!0);if(f||a!==S){m.setValue(A,
        "projectionMatrix",a.projectionMatrix);ma.logarithmicDepthBuffer&&m.setValue(A,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==S&&(S=a,h=g=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)f=m.map.cameraPosition,void 0!==f&&f.setValue(A,Pa.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(A,"viewMatrix",a.matrixWorldInverse);m.setValue(A,
        "toneMappingExposure",z.toneMappingExposure);m.setValue(A,"toneMappingWhitePoint",z.toneMappingWhitePoint)}if(c.skinning&&(m.setOptional(A,d,"bindMatrix"),m.setOptional(A,d,"bindMatrixInverse"),a=d.skeleton))if(f=a.bones,ma.floatVertexTextures){if(void 0===a.boneTexture){var f=Math.sqrt(4*f.length),f=Y.nextPowerOfTwo(Math.ceil(f)),f=Math.max(f,4),p=new Float32Array(f*f*4);p.set(a.boneMatrices);var t=new db(p,f,f,1023,1015);a.boneMatrices=p;a.boneTexture=t;a.boneTextureSize=f}m.setValue(A,"boneTexture",
        a.boneTexture);m.setValue(A,"boneTextureSize",a.boneTextureSize)}else m.setOptional(A,a,"boneMatrices");if(g){c.lights&&(g=h,q.ambientLightColor.needsUpdate=g,q.directionalLights.needsUpdate=g,q.pointLights.needsUpdate=g,q.spotLights.needsUpdate=g,q.rectAreaLights.needsUpdate=g,q.hemisphereLights.needsUpdate=g);b&&c.fog&&(q.fogColor.value=b.color,b.isFog?(q.fogNear.value=b.near,q.fogFar.value=b.far):b.isFogExp2&&(q.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||
        c.isMeshStandardMaterial||c.isMeshNormalMaterial||c.isMeshDepthMaterial){q.opacity.value=c.opacity;q.diffuse.value=c.color;c.emissive&&q.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);q.map.value=c.map;q.specularMap.value=c.specularMap;q.alphaMap.value=c.alphaMap;c.lightMap&&(q.lightMap.value=c.lightMap,q.lightMapIntensity.value=c.lightMapIntensity);c.aoMap&&(q.aoMap.value=c.aoMap,q.aoMapIntensity.value=c.aoMapIntensity);var n;c.map?n=c.map:c.specularMap?n=c.specularMap:c.displacementMap?
        n=c.displacementMap:c.normalMap?n=c.normalMap:c.bumpMap?n=c.bumpMap:c.roughnessMap?n=c.roughnessMap:c.metalnessMap?n=c.metalnessMap:c.alphaMap?n=c.alphaMap:c.emissiveMap&&(n=c.emissiveMap);void 0!==n&&(n.isWebGLRenderTarget&&(n=n.texture),b=n.offset,n=n.repeat,q.offsetRepeat.value.set(b.x,b.y,n.x,n.y));q.envMap.value=c.envMap;q.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?-1:1;q.reflectivity.value=c.reflectivity;q.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?(q.diffuse.value=
        c.color,q.opacity.value=c.opacity):c.isLineDashedMaterial?(q.diffuse.value=c.color,q.opacity.value=c.opacity,q.dashSize.value=c.dashSize,q.totalSize.value=c.dashSize+c.gapSize,q.scale.value=c.scale):c.isPointsMaterial?(q.diffuse.value=c.color,q.opacity.value=c.opacity,q.size.value=c.size*V,q.scale.value=.5*ca,q.map.value=c.map,null!==c.map&&(n=c.map.offset,c=c.map.repeat,q.offsetRepeat.value.set(n.x,n.y,c.x,c.y))):c.isMeshLambertMaterial?c.emissiveMap&&(q.emissiveMap.value=c.emissiveMap):c.isMeshToonMaterial?
        (r(q,c),c.gradientMap&&(q.gradientMap.value=c.gradientMap)):c.isMeshPhongMaterial?r(q,c):c.isMeshPhysicalMaterial?(q.clearCoat.value=c.clearCoat,q.clearCoatRoughness.value=c.clearCoatRoughness,l(q,c)):c.isMeshStandardMaterial?l(q,c):c.isMeshDepthMaterial?c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&(c.bumpMap&&(q.bumpMap.value=c.bumpMap,q.bumpScale.value=c.bumpScale),
            c.normalMap&&(q.normalMap.value=c.normalMap,q.normalScale.value.copy(c.normalScale)),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias));void 0!==q.ltcMat&&(q.ltcMat.value=Z.LTC_MAT_TEXTURE);void 0!==q.ltcMag&&(q.ltcMag.value=Z.LTC_MAG_TEXTURE);eb.upload(A,e.uniformsList,q,z)}m.setValue(A,"modelViewMatrix",d.modelViewMatrix);m.setValue(A,"normalMatrix",d.normalMatrix);m.setValue(A,"modelMatrix",d.matrixWorld);
        return k}function r(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function l(a,b){a.roughness.value=b.roughness;
        a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&
        (a.envMapIntensity.value=b.envMapIntensity)}function t(a,b){var c,d,e,f,g=0,h=0,k=0,m,q,p,u=b.matrixWorldInverse,r=0,l=0,n=0,t=0,U=0;c=0;for(d=a.length;c<d;c++)if(e=a[c],f=e.color,m=e.intensity,q=e.distance,p=e.shadow&&e.shadow.map?e.shadow.map.texture:null,e.isAmbientLight)g+=f.r*m,h+=f.g*m,k+=f.b*m;else if(e.isDirectionalLight){var v=Aa.get(e);v.color.copy(e.color).multiplyScalar(e.intensity);v.direction.setFromMatrixPosition(e.matrixWorld);Pa.setFromMatrixPosition(e.target.matrixWorld);v.direction.sub(Pa);
        v.direction.transformDirection(u);if(v.shadow=e.castShadow)f=e.shadow,v.shadowBias=f.bias,v.shadowRadius=f.radius,v.shadowMapSize=f.mapSize;ea.directionalShadowMap[r]=p;ea.directionalShadowMatrix[r]=e.shadow.matrix;ea.directional[r]=v;r++}else if(e.isSpotLight){v=Aa.get(e);v.position.setFromMatrixPosition(e.matrixWorld);v.position.applyMatrix4(u);v.color.copy(f).multiplyScalar(m);v.distance=q;v.direction.setFromMatrixPosition(e.matrixWorld);Pa.setFromMatrixPosition(e.target.matrixWorld);v.direction.sub(Pa);
        v.direction.transformDirection(u);v.coneCos=Math.cos(e.angle);v.penumbraCos=Math.cos(e.angle*(1-e.penumbra));v.decay=0===e.distance?0:e.decay;if(v.shadow=e.castShadow)f=e.shadow,v.shadowBias=f.bias,v.shadowRadius=f.radius,v.shadowMapSize=f.mapSize;ea.spotShadowMap[n]=p;ea.spotShadowMatrix[n]=e.shadow.matrix;ea.spot[n]=v;n++}else if(e.isRectAreaLight)v=Aa.get(e),v.color.copy(f).multiplyScalar(m/(e.width*e.height)),v.position.setFromMatrixPosition(e.matrixWorld),v.position.applyMatrix4(u),qa.identity(),
        pa.copy(e.matrixWorld),pa.premultiply(u),qa.extractRotation(pa),v.halfWidth.set(.5*e.width,0,0),v.halfHeight.set(0,.5*e.height,0),v.halfWidth.applyMatrix4(qa),v.halfHeight.applyMatrix4(qa),ea.rectArea[t]=v,t++;else if(e.isPointLight){v=Aa.get(e);v.position.setFromMatrixPosition(e.matrixWorld);v.position.applyMatrix4(u);v.color.copy(e.color).multiplyScalar(e.intensity);v.distance=e.distance;v.decay=0===e.distance?0:e.decay;if(v.shadow=e.castShadow)f=e.shadow,v.shadowBias=f.bias,v.shadowRadius=f.radius,
        v.shadowMapSize=f.mapSize;ea.pointShadowMap[l]=p;ea.pointShadowMatrix[l]=e.shadow.matrix;ea.point[l]=v;l++}else e.isHemisphereLight&&(v=Aa.get(e),v.direction.setFromMatrixPosition(e.matrixWorld),v.direction.transformDirection(u),v.direction.normalize(),v.skyColor.copy(e.color).multiplyScalar(m),v.groundColor.copy(e.groundColor).multiplyScalar(m),ea.hemi[U]=v,U++);ea.ambient[0]=g;ea.ambient[1]=h;ea.ambient[2]=k;ea.directional.length=r;ea.spot.length=n;ea.rectArea.length=t;ea.point.length=l;ea.hemi.length=
        U;ea.hash=r+","+l+","+n+","+t+","+U+","+ea.shadows.length}function y(a){var b;if(1E3===a)return A.REPEAT;if(1001===a)return A.CLAMP_TO_EDGE;if(1002===a)return A.MIRRORED_REPEAT;if(1003===a)return A.NEAREST;if(1004===a)return A.NEAREST_MIPMAP_NEAREST;if(1005===a)return A.NEAREST_MIPMAP_LINEAR;if(1006===a)return A.LINEAR;if(1007===a)return A.LINEAR_MIPMAP_NEAREST;if(1008===a)return A.LINEAR_MIPMAP_LINEAR;if(1009===a)return A.UNSIGNED_BYTE;if(1017===a)return A.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return A.UNSIGNED_SHORT_5_5_5_1;
        if(1019===a)return A.UNSIGNED_SHORT_5_6_5;if(1010===a)return A.BYTE;if(1011===a)return A.SHORT;if(1012===a)return A.UNSIGNED_SHORT;if(1013===a)return A.INT;if(1014===a)return A.UNSIGNED_INT;if(1015===a)return A.FLOAT;if(1016===a&&(b=oa.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return A.ALPHA;if(1022===a)return A.RGB;if(1023===a)return A.RGBA;if(1024===a)return A.LUMINANCE;if(1025===a)return A.LUMINANCE_ALPHA;if(1026===a)return A.DEPTH_COMPONENT;if(1027===a)return A.DEPTH_STENCIL;
        if(100===a)return A.FUNC_ADD;if(101===a)return A.FUNC_SUBTRACT;if(102===a)return A.FUNC_REVERSE_SUBTRACT;if(200===a)return A.ZERO;if(201===a)return A.ONE;if(202===a)return A.SRC_COLOR;if(203===a)return A.ONE_MINUS_SRC_COLOR;if(204===a)return A.SRC_ALPHA;if(205===a)return A.ONE_MINUS_SRC_ALPHA;if(206===a)return A.DST_ALPHA;if(207===a)return A.ONE_MINUS_DST_ALPHA;if(208===a)return A.DST_COLOR;if(209===a)return A.ONE_MINUS_DST_COLOR;if(210===a)return A.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===
            a||2004===a)if(b=oa.get("WEBGL_compressed_texture_s3tc"),null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=oa.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===a&&(b=oa.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=oa.get("EXT_blend_minmax"),null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=oa.get("WEBGL_depth_texture"),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}console.log("THREE.WebGLRenderer","86dev");a=a||{};var x=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml",
        "canvas"),v=void 0!==a.context?a.context:null,K=void 0!==a.alpha?a.alpha:!1,w=void 0!==a.depth?a.depth:!0,J=void 0!==a.stencil?a.stencil:!0,X=void 0!==a.antialias?a.antialias:!1,C=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,H=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,da=[],E=null,ha=new Float32Array(8),L=[],D=[];this.domElement=x;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=
        !1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var z=this,B=null,P=null,M=null,W=-1,ba="",S=null,N=new ja,I=null,T=new ja,Q=0,Ha=new G(0),aa=0,O=x.width,ca=x.height,V=1,ga=new ja(0,0,O,ca),Oe=!1,id=new ja(0,0,O,ca),la=new hd,Oa=new ig,jd=!1,Vd=!1,kd=new R,Pa=new n,pa=new R,qa=new R,ea={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],
        directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},ua={geometries:0,textures:0},na={frame:0,calls:0,vertices:0,faces:0,points:0};this.info={render:na,memory:ua,programs:null};var A;try{K={alpha:K,depth:w,stencil:J,antialias:X,premultipliedAlpha:C,preserveDrawingBuffer:H};A=v||x.getContext("webgl",K)||x.getContext("experimental-webgl",K);if(null===A){if(null!==x.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
        throw"Error creating WebGL context.";}void 0===A.getShaderPrecisionFormat&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});x.addEventListener("webglcontextlost",d,!1)}catch(jg){console.error("THREE.WebGLRenderer: "+jg)}var oa=new hg(A);oa.get("WEBGL_depth_texture");oa.get("OES_texture_float");oa.get("OES_texture_float_linear");oa.get("OES_texture_half_float");oa.get("OES_texture_half_float_linear");oa.get("OES_standard_derivatives");oa.get("ANGLE_instanced_arrays");
        oa.get("OES_element_index_uint")&&(F.MaxIndex=4294967296);var ma=new gg(A,oa,a),fa=new fg(A,oa,y),ia=new eg,ra=new dg(A,oa,fa,ia,ma,y,ua),za=new Mf(A),Ca=new Tf(A,za,ua),va=new Vf(A,Ca,na),xa=new cg(this,ma),Aa=new Uf,Fa=new Qf;this.info.programs=xa.programs;var Ja=new Sf(A,oa,na),Ka=new Rf(A,oa,na),Ea,ya,sa,ta;b();this.context=A;this.capabilities=ma;this.extensions=oa;this.properties=ia;this.state=fa;var Ia=new Ie(this,ea,va,ma);this.shadowMap=Ia;var La=new Jf(this,L),Na=new If(this,D);this.getContext=
            function(){return A};this.getContextAttributes=function(){return A.getContextAttributes()};this.forceContextLoss=function(){var a=oa.get("WEBGL_lose_context");a&&a.loseContext()};this.getMaxAnisotropy=function(){return ma.getMaxAnisotropy()};this.getPrecision=function(){return ma.precision};this.getPixelRatio=function(){return V};this.setPixelRatio=function(a){void 0!==a&&(V=a,this.setSize(O,ca,!1))};this.getSize=function(){return{width:O,height:ca}};this.setSize=function(a,b,c){O=a;ca=b;x.width=
            a*V;x.height=b*V;!1!==c&&(x.style.width=a+"px",x.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){id.set(a,ca-b-d,c,d);fa.viewport(T.copy(id).multiplyScalar(V))};this.setScissor=function(a,b,c,d){ga.set(a,ca-b-d,c,d);fa.scissor(N.copy(ga).multiplyScalar(V))};this.setScissorTest=function(a){fa.setScissorTest(Oe=a)};this.getClearColor=function(){return Ha};this.setClearColor=function(a,b){Ha.set(a);aa=void 0!==b?b:1;fa.buffers.color.setClear(Ha.r,Ha.g,Ha.b,aa,C)};this.getClearAlpha=
            function(){return aa};this.setClearAlpha=function(a){aa=a;fa.buffers.color.setClear(Ha.r,Ha.g,Ha.b,aa,C)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=A.COLOR_BUFFER_BIT;if(void 0===b||b)d|=A.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=A.STENCIL_BUFFER_BIT;A.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=
            c;this.dispose=function(){x.removeEventListener("webglcontextlost",d,!1);Fa.dispose()};this.renderBufferImmediate=function(a,b,c){fa.initAttributes();var d=ia.get(a);a.hasPositions&&!d.position&&(d.position=A.createBuffer());a.hasNormals&&!d.normal&&(d.normal=A.createBuffer());a.hasUvs&&!d.uv&&(d.uv=A.createBuffer());a.hasColors&&!d.color&&(d.color=A.createBuffer());b=b.getAttributes();a.hasPositions&&(A.bindBuffer(A.ARRAY_BUFFER,d.position),A.bufferData(A.ARRAY_BUFFER,a.positionArray,A.DYNAMIC_DRAW),
            fa.enableAttribute(b.position),A.vertexAttribPointer(b.position,3,A.FLOAT,!1,0,0));if(a.hasNormals){A.bindBuffer(A.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&1===c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}A.bufferData(A.ARRAY_BUFFER,a.normalArray,A.DYNAMIC_DRAW);
            fa.enableAttribute(b.normal);A.vertexAttribPointer(b.normal,3,A.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(A.bindBuffer(A.ARRAY_BUFFER,d.uv),A.bufferData(A.ARRAY_BUFFER,a.uvArray,A.DYNAMIC_DRAW),fa.enableAttribute(b.uv),A.vertexAttribPointer(za.uv,2,A.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(A.bindBuffer(A.ARRAY_BUFFER,d.color),A.bufferData(A.ARRAY_BUFFER,a.colorArray,A.DYNAMIC_DRAW),fa.enableAttribute(b.color),A.vertexAttribPointer(b.color,3,A.FLOAT,!1,0,0));fa.disableUnusedAttributes();A.drawArrays(A.TRIANGLES,
            0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){fa.setMaterial(d);var g=p(a,b,d,e);a=c.id+"_"+g.id+"_"+(!0===d.wireframe);var k=!1;a!==ba&&(ba=a,k=!0);b=e.morphTargetInfluences;if(void 0!==b){var m=[];a=0;for(var q=b.length;a<q;a++)k=b[a],m.push([k,a]);m.sort(h);8<m.length&&(m.length=8);var u=c.morphAttributes;a=0;for(q=m.length;a<q;a++)k=m[a],ha[a]=k[0],0!==k[0]?(b=k[1],!0===d.morphTargets&&u.position&&c.addAttribute("morphTarget"+a,u.position[b]),!0===d.morphNormals&&u.normal&&
        c.addAttribute("morphNormal"+a,u.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+a));a=m.length;for(b=ha.length;a<b;a++)ha[a]=0;g.getUniforms().setValue(A,"morphTargetInfluences",ha);k=!0}b=c.index;q=c.attributes.position;m=1;!0===d.wireframe&&(b=Ca.getWireframeAttribute(c),m=2);var r;a=Ja;null!==b&&(r=za.get(b),a=Ka,a.setIndex(r));if(k){k=void 0;if(c&&c.isInstancedBufferGeometry&&null===oa.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else{void 0===k&&(k=0);fa.initAttributes();var u=c.attributes,g=g.getAttributes(),l=d.defaultAttributeValues,n;for(n in g){var t=g[n];if(0<=t){var v=u[n];if(void 0!==v){var U=v.normalized,w=v.itemSize,x=za.get(v),y=x.buffer,K=x.type,x=x.bytesPerElement;if(v.isInterleavedBufferAttribute){var C=v.data,J=C.stride,v=v.offset;C&&C.isInstancedInterleavedBuffer?(fa.enableAttributeAndDivisor(t,C.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=C.meshPerAttribute*C.count)):fa.enableAttribute(t);
            A.bindBuffer(A.ARRAY_BUFFER,y);A.vertexAttribPointer(t,w,K,U,J*x,(k*J+v)*x)}else v.isInstancedBufferAttribute?(fa.enableAttributeAndDivisor(t,v.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=v.meshPerAttribute*v.count)):fa.enableAttribute(t),A.bindBuffer(A.ARRAY_BUFFER,y),A.vertexAttribPointer(t,w,K,U,0,k*w*x)}else if(void 0!==l&&(U=l[n],void 0!==U))switch(U.length){case 2:A.vertexAttrib2fv(t,U);break;case 3:A.vertexAttrib3fv(t,U);break;case 4:A.vertexAttrib4fv(t,U);break;default:A.vertexAttrib1fv(t,
            U)}}}fa.disableUnusedAttributes()}null!==b&&A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,r.buffer)}r=0;null!==b?r=b.count:void 0!==q&&(r=q.count);b=c.drawRange.start*m;q=null!==f?f.start*m:0;n=Math.max(b,q);f=Math.max(0,Math.min(r,b+c.drawRange.count*m,q+(null!==f?f.count*m:Infinity))-1-n+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)fa.setLineWidth(d.wireframeLinewidth*(null===P?V:1)),a.setMode(A.LINES);else switch(e.drawMode){case 0:a.setMode(A.TRIANGLES);break;case 1:a.setMode(A.TRIANGLE_STRIP);break;case 2:a.setMode(A.TRIANGLE_FAN)}else e.isLine?
            (d=d.linewidth,void 0===d&&(d=1),fa.setLineWidth(d*(null===P?V:1)),e.isLineSegments?a.setMode(A.LINES):e.isLineLoop?a.setMode(A.LINE_LOOP):a.setMode(A.LINE_STRIP)):e.isPoints&&a.setMode(A.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,n,f):a.render(n,f)}};this.compile=function(a,b){da=[];a.traverse(function(a){a.isLight&&da.push(a)});t(da,b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)u(b.material[c],a.fog,
            b);else u(b.material,a.fog,b)})};this.render=function(a,b,c,d){if(b&&b.isCamera){ba="";W=-1;S=null;!0===a.autoUpdate&&a.updateMatrixWorld();b.onBeforeRender(z);null===b.parent&&b.updateMatrixWorld();kd.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);la.setFromMatrix(kd);da.length=0;L.length=0;D.length=0;Vd=this.localClippingEnabled;jd=Oa.init(this.clippingPlanes,Vd,b);E=Fa.get(a,b);E.init();k(a,b,z.sortObjects);E.finish();!0===z.sortObjects&&E.sort();jd&&Oa.beginShadows();for(var e=da,f=
            0,g=0,h=e.length;g<h;g++){var q=e[g];q.castShadow&&(ea.shadows[f]=q,f++)}ea.shadows.length=f;Ia.render(a,b);t(da,b);jd&&Oa.endShadows();na.frame++;na.calls=0;na.vertices=0;na.faces=0;na.points=0;void 0===c&&(c=null);this.setRenderTarget(c);e=a.background;null===e?fa.buffers.color.setClear(Ha.r,Ha.g,Ha.b,aa,C):e&&e.isColor&&(fa.buffers.color.setClear(e.r,e.g,e.b,1,C),d=!0);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);e&&e.isCubeTexture?(void 0===sa&&
        (sa=new wa,ta=new Ba(new jb(5,5,5),new Da({uniforms:$a.cube.uniforms,vertexShader:$a.cube.vertexShader,fragmentShader:$a.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))),sa.projectionMatrix.copy(b.projectionMatrix),sa.matrixWorld.extractRotation(b.matrixWorld),sa.matrixWorldInverse.getInverse(sa.matrixWorld),ta.material.uniforms.tCube.value=e,ta.modelViewMatrix.multiplyMatrices(sa.matrixWorldInverse,ta.matrixWorld),va.update(ta),z.renderBufferDirect(sa,null,ta.geometry,ta.material,
            ta,null)):e&&e.isTexture&&(void 0===Ea&&(Ea=new Ib(-1,1,1,-1,0,1),ya=new Ba(new kb(2,2),new Ma({depthTest:!1,depthWrite:!1,fog:!1}))),ya.material.map=e,va.update(ya),z.renderBufferDirect(Ea,null,ya.geometry,ya.material,ya,null));d=E.opaque;e=E.transparent;a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,b,f),e.length&&m(e,a,b,f)):(d.length&&m(d,a,b),e.length&&m(e,a,b));La.render(a,b);Na.render(a,b,T);c&&ra.updateRenderTargetMipmap(c);fa.buffers.depth.setTest(!0);fa.buffers.depth.setMask(!0);
            fa.buffers.color.setMask(!0);b.isArrayCamera&&z.setScissorTest(!1);b.onAfterRender(z)}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")};this.setFaceCulling=function(a,b){fa.setCullFace(a);fa.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=Q;a>=ma.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+a+" texture units while this GPU supports only "+ma.maxTextures);Q+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ra.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ra.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ra.setTextureCube(b,c):ra.setTextureCubeDynamic(b,c)}}();this.getRenderTarget=function(){return P};this.setRenderTarget=function(a){(P=a)&&void 0===ia.get(a).__webglFramebuffer&&ra.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,c;a?(c=ia.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,N.copy(a.scissor),I=a.scissorTest,T.copy(a.viewport)):(c=null,N.copy(ga).multiplyScalar(V),I=Oe,T.copy(id).multiplyScalar(V));
            M!==c&&(A.bindFramebuffer(A.FRAMEBUFFER,c),M=c);fa.scissor(N);fa.setScissorTest(I);fa.viewport(T);b&&(b=ia.get(a.texture),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(a&&a.isWebGLRenderTarget){var g=ia.get(a).__webglFramebuffer;if(g){var h=!1;g!==M&&(A.bindFramebuffer(A.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,q=k.type;1023!==m&&y(m)!==
        A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===q||y(q)===A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)||1015===q&&(oa.get("OES_texture_float")||oa.get("WEBGL_color_buffer_float"))||1016===q&&oa.get("EXT_color_buffer_half_float")?A.checkFramebufferStatus(A.FRAMEBUFFER)===A.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&A.readPixels(b,c,d,e,y(m),y(q),
                f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&A.bindFramebuffer(A.FRAMEBUFFER,M)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")}}function Jb(a,b){this.name="";this.color=new G(a);this.density=void 0!==b?b:2.5E-4}
    function Kb(a,b,c){this.name="";this.color=new G(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function ld(){z.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Xd(a,b,c,d,e){z.call(this);this.lensFlares=[];this.positionScreen=new n;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function bb(a){Q.call(this);this.type="SpriteMaterial";this.color=new G(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;
        this.setValues(a)}function yc(a){z.call(this);this.type="Sprite";this.material=void 0!==a?a:new bb}function zc(){z.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function Ac(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length.");this.boneInverses=
        [];for(var c=0,d=this.bones.length;c<d;c++)this.boneInverses.push(new R)}}function md(){z.call(this);this.type="Bone"}function nd(a,b){Ba.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new R;this.bindMatrixInverse=new R;var c=this.initBones(),c=new Ac(c);this.bind(c,this.matrixWorld);this.normalizeSkinWeights()}function ga(a){Q.call(this);this.type="LineBasicMaterial";this.color=new G(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}
    function xa(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new V(a,b);z.call(this);this.type="Line";this.geometry=void 0!==a?a:new F;this.material=void 0!==b?b:new ga({color:16777215*Math.random()})}function V(a,b){xa.call(this,a,b);this.type="LineSegments"}function od(a,b){xa.call(this,a,b);this.type="LineLoop"}function Ka(a){Q.call(this);this.type="PointsMaterial";this.color=new G(16777215);this.map=null;this.size=
        1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Lb(a,b){z.call(this);this.type="Points";this.geometry=void 0!==a?a:new F;this.material=void 0!==b?b:new Ka({color:16777215*Math.random()})}function Bc(){z.call(this);this.type="Group"}function pd(a,b,c,d,e,f,g,h,k){function m(){requestAnimationFrame(m);a.readyState>=a.HAVE_CURRENT_DATA&&(q.needsUpdate=!0)}ca.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var q=this;m()}function Mb(a,b,c,d,e,f,g,h,k,m,q,u){ca.call(this,null,
        f,g,h,k,m,d,e,q,u);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function qd(a,b,c,d,e,f,g,h,k){ca.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function Cc(a,b,c,d,e,f,g,h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);ca.call(this,null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.magFilter=void 0!==
    g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Nb(a){F.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f,g=[0,0],h={},k,m,q=["a","b","c"];if(a&&a.isGeometry){var u=a.faces;c=0;for(e=u.length;c<e;c++){var p=u[c];for(d=0;3>d;d++)k=p[q[d]],m=p[q[(d+1)%3]],g[0]=Math.min(k,m),g[1]=Math.max(k,m),k=g[0]+","+g[1],void 0===h[k]&&(h[k]={index1:g[0],index2:g[1]})}for(k in h)c=h[k],q=a.vertices[c.index1],b.push(q.x,q.y,q.z),q=a.vertices[c.index2],b.push(q.x,q.y,
        q.z)}else if(a&&a.isBufferGeometry){var r,q=new n;if(null!==a.index){u=a.attributes.position;p=a.index;r=a.groups;0===r.length&&(r=[{start:0,count:p.count,materialIndex:0}]);a=0;for(f=r.length;a<f;++a)for(c=r[a],d=c.start,e=c.count,c=d,e=d+e;c<e;c+=3)for(d=0;3>d;d++)k=p.getX(c+d),m=p.getX(c+(d+1)%3),g[0]=Math.min(k,m),g[1]=Math.max(k,m),k=g[0]+","+g[1],void 0===h[k]&&(h[k]={index1:g[0],index2:g[1]});for(k in h)c=h[k],q.fromBufferAttribute(u,c.index1),b.push(q.x,q.y,q.z),q.fromBufferAttribute(u,c.index2),
        b.push(q.x,q.y,q.z)}else for(u=a.attributes.position,c=0,e=u.count/3;c<e;c++)for(d=0;3>d;d++)h=3*c+d,q.fromBufferAttribute(u,h),b.push(q.x,q.y,q.z),h=3*c+(d+1)%3,q.fromBufferAttribute(u,h),b.push(q.x,q.y,q.z)}this.addAttribute("position",new B(b,3))}function Dc(a,b,c){I.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Ob(a,b,c));this.mergeVertices()}function Ob(a,b,c){F.call(this);this.type="ParametricBufferGeometry";this.parameters=
        {func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new n,k=new n,m=new n,q=new n,u=new n,p,r,l=b+1;for(p=0;p<=c;p++){var t=p/c;for(r=0;r<=b;r++){var y=r/b,k=a(y,t,k);e.push(k.x,k.y,k.z);0<=y-1E-5?(m=a(y-1E-5,t,m),q.subVectors(k,m)):(m=a(y+1E-5,t,m),q.subVectors(m,k));0<=t-1E-5?(m=a(y,t-1E-5,m),u.subVectors(k,m)):(m=a(y,t+1E-5,m),u.subVectors(m,k));h.crossVectors(q,u).normalize();f.push(h.x,h.y,h.z);g.push(y,t)}}for(p=0;p<c;p++)for(r=0;r<b;r++)a=p*l+r+1,h=(p+1)*l+r+1,k=(p+1)*l+r,d.push(p*l+r,a,k),
        d.push(a,h,k);this.setIndex(d);this.addAttribute("position",new B(e,3));this.addAttribute("normal",new B(f,3));this.addAttribute("uv",new B(g,2))}function Ec(a,b,c,d){I.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new ia(a,b,c,d));this.mergeVertices()}function ia(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===
    c.z&&(k[b]=d/2/Math.PI+.5)}F.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],k=[];(function(a){for(var c=new n,d=new n,g=new n,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k=c,l=d,y=g,x=Math.pow(2,a),v=[],K,w;for(K=0;K<=x;K++){v[K]=[];var J=k.clone().lerp(y,K/x),X=l.clone().lerp(y,K/x),C=x-K;for(w=0;w<=C;w++)v[K][w]=0===w&&K===x?J:J.clone().lerp(X,w/C)}for(K=0;K<x;K++)for(w=0;w<2*(x-K)-1;w++)k=Math.floor(w/
        2),0===w%2?(e(v[K][k+1]),e(v[K+1][k]),e(v[K][k])):(e(v[K][k+1]),e(v[K+1][k+1]),e(v[K+1][k]))}})(d);(function(a){for(var b=new n,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new n,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));for(var a=new n,b=new n,c=new n,d=new n,e=new D,f=new D,l=new D,y=0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 x=0;y<h.length;y+=9,x+=6){a.set(h[y+0],h[y+1],h[y+2]);b.set(h[y+3],h[y+4],h[y+5]);c.set(h[y+6],h[y+7],h[y+8]);e.set(k[x+0],k[x+1]);f.set(k[x+2],k[x+3]);l.set(k[x+4],k[x+5]);d.copy(a).add(b).add(c).divideScalar(3);var v=Math.atan2(d.z,-d.x);g(e,x+0,a,v);g(f,x+2,b,v);g(l,x+4,c,v)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+4]+=1))})();this.addAttribute("position",new B(h,3));this.addAttribute("normal",
        new B(h.slice(),3));this.addAttribute("uv",new B(k,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Fc(a,b){I.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pb(a,b));this.mergeVertices()}function Pb(a,b){ia.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Gc(a,b){I.call(this);this.type="OctahedronGeometry";this.parameters=
        {radius:a,detail:b};this.fromBufferGeometry(new lb(a,b));this.mergeVertices()}function lb(a,b){ia.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Hc(a,b){I.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qb(a,b));this.mergeVertices()}function Qb(a,b){var c=(1+Math.sqrt(5))/2;ia.call(this,[-1,c,0,1,c,0,
        -1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Ic(a,b){I.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function Rb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;ia.call(this,
        [-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Jc(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c,d,e,f){I.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Sb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Sb(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),m=g.normals[e];e=g.binormals[e];for(u=0;u<=d;u++){var q=u/d*Math.PI*2,l=Math.sin(q),q=-Math.cos(q);
        k.x=q*m.x+l*e.x;k.y=q*m.y+l*e.y;k.z=q*m.z+l*e.z;k.normalize();r.push(k.x,k.y,k.z);h.x=f.x+c*k.x;h.y=f.y+c*k.y;h.z=f.z+c*k.z;p.push(h.x,h.y,h.z)}}F.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new n,k=new n,m=new D,q,u,p=[],r=[],l=[],t=[];for(q=0;q<b;q++)f(q);f(!1===e?b:0);for(q=0;q<=
    b;q++)for(u=0;u<=d;u++)m.x=q/b,m.y=u/d,l.push(m.x,m.y);(function(){for(u=1;u<=b;u++)for(q=1;q<=d;q++){var a=(d+1)*u+(q-1),c=(d+1)*u+q,e=(d+1)*(u-1)+q;t.push((d+1)*(u-1)+(q-1),a,e);t.push(a,c,e)}})();this.setIndex(t);this.addAttribute("position",new B(p,3));this.addAttribute("normal",new B(r,3));this.addAttribute("uv",new B(l,2))}function Kc(a,b,c,d,e,f,g){I.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
        this.fromBufferGeometry(new Tb(a,b,c,d,e,f));this.mergeVertices()}function Tb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}F.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],k=[],m=[],q=[],u,p,r=new n,l=new n,t=new n,y=new n,x=new n,v=new n,K=new n;for(u=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  0;u<=c;++u)for(p=u/c*e*Math.PI*2,g(p,e,f,a,t),g(p+.01,e,f,a,y),v.subVectors(y,t),K.addVectors(y,t),x.crossVectors(v,K),K.crossVectors(x,v),x.normalize(),K.normalize(),p=0;p<=d;++p){var w=p/d*Math.PI*2,J=-b*Math.cos(w),w=b*Math.sin(w);r.x=t.x+(J*K.x+w*x.x);r.y=t.y+(J*K.y+w*x.y);r.z=t.z+(J*K.z+w*x.z);k.push(r.x,r.y,r.z);l.subVectors(r,t).normalize();m.push(l.x,l.y,l.z);q.push(u/c);q.push(p/d)}for(p=1;p<=c;p++)for(u=1;u<=d;u++)a=(d+1)*p+(u-1),b=(d+1)*p+u,e=(d+1)*(p-1)+u,h.push((d+1)*(p-1)+(u-1),a,e),
        h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new B(k,3));this.addAttribute("normal",new B(m,3));this.addAttribute("uv",new B(q,2))}function Lc(a,b,c,d,e){I.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Ub(a,b,c,d,e));this.mergeVertices()}function Ub(a,b,c,d,e){F.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=
        b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],k=[],m=new n,q=new n,u=new n,p,r;for(p=0;p<=c;p++)for(r=0;r<=d;r++){var l=r/d*e,t=p/c*Math.PI*2;q.x=(a+b*Math.cos(t))*Math.cos(l);q.y=(a+b*Math.cos(t))*Math.sin(l);q.z=b*Math.sin(t);g.push(q.x,q.y,q.z);m.x=a*Math.cos(l);m.y=a*Math.sin(l);u.subVectors(q,m).normalize();h.push(u.x,u.y,u.z);k.push(r/d);k.push(p/c)}for(p=1;p<=c;p++)for(r=1;r<=d;r++)a=(d+1)*(p-1)+r-1,b=(d+1)*(p-1)+r,e=(d+1)*p+r,f.push((d+1)*p+r-1,a,e),f.push(a,
        b,e);this.setIndex(f);this.addAttribute("position",new B(g,3));this.addAttribute("normal",new B(h,3));this.addAttribute("uv",new B(k,2))}function cb(a,b){I.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new Ea(a,b));this.mergeVertices()}function Ea(a,b){"undefined"!==typeof a&&(F.call(this),this.type="ExtrudeBufferGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeVertexNormals())}function Mc(a,b){I.call(this);this.type="TextGeometry";
        this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Vb(a,b));this.mergeVertices()}function Vb(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new I;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);Ea.call(this,c,b);this.type="TextBufferGeometry"}
    function Nc(a,b,c,d,e,f,g){I.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new mb(a,b,c,d,e,f,g));this.mergeVertices()}function mb(a,b,c,d,e,f,g){F.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==
    d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,k,m,q=0,u=[],p=new n,r=new n,l=[],t=[],y=[],x=[];for(m=0;m<=c;m++){var v=[],K=m/c;for(k=0;k<=b;k++){var w=k/b;p.x=-a*Math.cos(d+w*e)*Math.sin(f+K*g);p.y=a*Math.cos(f+K*g);p.z=a*Math.sin(d+w*e)*Math.sin(f+K*g);t.push(p.x,p.y,p.z);r.set(p.x,p.y,p.z).normalize();y.push(r.x,r.y,r.z);x.push(w,1-K);v.push(q++)}u.push(v)}for(m=0;m<c;m++)for(k=0;k<b;k++)a=u[m][k+1],d=u[m][k],e=u[m+1][k],g=u[m+1][k+1],(0!==m||0<f)&&l.push(a,d,
        g),(m!==c-1||h<Math.PI)&&l.push(d,e,g);this.setIndex(l);this.addAttribute("position",new B(t,3));this.addAttribute("normal",new B(y,3));this.addAttribute("uv",new B(x,2))}function Oc(a,b,c,d,e,f){I.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Wb(a,b,c,d,e,f));this.mergeVertices()}function Wb(a,b,c,d,e,f){F.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,
        outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],k=[],m=[],q=a,u=(b-a)/d,p=new n,r=new D,l,t;for(l=0;l<=d;l++){for(t=0;t<=c;t++)a=e+t/c*f,p.x=q*Math.cos(a),p.y=q*Math.sin(a),h.push(p.x,p.y,p.z),k.push(0,0,1),r.x=(p.x/b+1)/2,r.y=(p.y/b+1)/2,m.push(r.x,r.y);q+=u}for(l=0;l<d;l++)for(b=l*(c+1),t=0;t<c;t++)a=t+b,e=a+c+1,f=a+c+2,q=a+1,g.push(a,e,q),g.push(e,
        f,q);this.setIndex(g);this.addAttribute("position",new B(h,3));this.addAttribute("normal",new B(k,3));this.addAttribute("uv",new B(m,2))}function Pc(a,b,c,d){I.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Xb(a,b,c,d));this.mergeVertices()}function Xb(a,b,c,d){F.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=Y.clamp(d,
        0,2*Math.PI);var e=[],f=[],g=[],h=1/b,k=new n,m=new D,q,u;for(q=0;q<=b;q++){u=c+q*h*d;var p=Math.sin(u),r=Math.cos(u);for(u=0;u<=a.length-1;u++)k.x=a[u].x*p,k.y=a[u].y,k.z=a[u].x*r,f.push(k.x,k.y,k.z),m.x=q/b,m.y=u/(a.length-1),g.push(m.x,m.y)}for(q=0;q<b;q++)for(u=0;u<a.length-1;u++)c=u+q*a.length,h=c+a.length,k=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,k,m);this.setIndex(e);this.addAttribute("position",new B(f,3));this.addAttribute("uv",new B(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this.attributes.normal.array,e=new n,f=new n,g=new n,c=b*a.length*3,u=q=0;q<a.length;q++,u+=3)e.x=d[u+0],e.y=d[u+1],e.z=d[u+2],f.x=d[c+u+0],f.y=d[c+u+1],f.z=d[c+u+2],g.addVectors(e,f).normalize(),d[u+0]=d[c+u+0]=g.x,d[u+1]=d[c+u+1]=g.y,d[u+2]=d[c+u+2]=g.z}function Yb(a,b){I.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new Zb(a,
        b));this.mergeVertices()}function Zb(a,b){function c(a){var c,h,m=e.length/3;a=a.extractPoints(b);var l=a.shape,n=a.holes;if(!1===ya.isClockWise(l))for(l=l.reverse(),a=0,c=n.length;a<c;a++)h=n[a],!0===ya.isClockWise(h)&&(n[a]=h.reverse());var y=ya.triangulateShape(l,n);a=0;for(c=n.length;a<c;a++)h=n[a],l=l.concat(h);a=0;for(c=l.length;a<c;a++)h=l[a],e.push(h.x,h.y,0),f.push(0,0,1),g.push(h.x,h.y);a=0;for(c=y.length;a<c;a++)l=y[a],d.push(l[0]+m,l[1]+m,l[2]+m),k+=3}F.call(this);this.type="ShapeBufferGeometry";
        this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,k=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,k,m),h+=k,k=0;this.setIndex(d);this.addAttribute("position",new B(e,3));this.addAttribute("normal",new B(f,3));this.addAttribute("uv",new B(g,2))}function $b(a,b){F.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[],d=Math.cos(Y.DEG2RAD*(void 0!==b?b:1)),e=[0,0],f={},g,h,k=["a","b","c"],m;a.isBufferGeometry?
        (m=new I,m.fromBufferGeometry(a)):m=a.clone();m.mergeVertices();m.computeFaceNormals();var q=m.vertices;m=m.faces;for(var u=0,p=m.length;u<p;u++)for(var l=m[u],n=0;3>n;n++)g=l[k[n]],h=l[k[(n+1)%3]],e[0]=Math.min(g,h),e[1]=Math.max(g,h),g=e[0]+","+e[1],void 0===f[g]?f[g]={index1:e[0],index2:e[1],face1:u,face2:void 0}:f[g].face2=u;for(g in f)if(e=f[g],void 0===e.face2||m[e.face1].normal.dot(m[e.face2].normal)<=d)k=q[e.index1],c.push(k.x,k.y,k.z),k=q[e.index2],c.push(k.x,k.y,k.z);this.addAttribute("position",
        new B(c,3))}function nb(a,b,c,d,e,f,g,h){I.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Va(a,b,c,d,e,f,g,h));this.mergeVertices()}function Va(a,b,c,d,e,f,g,h){function k(c){var e,f,k,t=new D,C=new n,H=0,z=!0===c?a:b,E=!0===c?1:-1;f=U;for(e=1;e<=d;e++)u.push(0,y*E,0),p.push(0,E,0),l.push(.5,.5),U++;k=U;for(e=0;e<=d;e++){var ha=e/d*h+g,L=Math.cos(ha),
        ha=Math.sin(ha);C.x=z*ha;C.y=y*E;C.z=z*L;u.push(C.x,C.y,C.z);p.push(0,E,0);t.x=.5*L+.5;t.y=.5*ha*E+.5;l.push(t.x,t.y);U++}for(e=0;e<d;e++)t=f+e,C=k+e,!0===c?q.push(C,C+1,t):q.push(C+1,C,t),H+=3;m.addGroup(x,H,!0===c?1:2);x+=H}F.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||
        1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var q=[],u=[],p=[],l=[],U=0,t=[],y=c/2,x=0;(function(){var f,k,w=new n,J=new n,X=0,C=(b-a)/c;for(k=0;k<=e;k++){var H=[],z=k/e,E=z*(b-a)+a;for(f=0;f<=d;f++){var D=f/d,L=D*h+g,B=Math.sin(L),L=Math.cos(L);J.x=E*B;J.y=-z*c+y;J.z=E*L;u.push(J.x,J.y,J.z);w.set(B,C,L).normalize();p.push(w.x,w.y,w.z);l.push(D,1-z);H.push(U++)}t.push(H)}for(f=0;f<d;f++)for(k=0;k<e;k++)w=t[k+1][f],J=t[k+1][f+1],C=t[k][f+1],q.push(t[k][f],w,C),q.push(w,J,C),X+=6;
        m.addGroup(x,X,0);x+=X})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(q);this.addAttribute("position",new B(u,3));this.addAttribute("normal",new B(p,3));this.addAttribute("uv",new B(l,2))}function Qc(a,b,c,d,e,f,g){nb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Rc(a,b,c,d,e,f,g){Va.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,
        radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Sc(a,b,c,d){I.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new ac(a,b,c,d));this.mergeVertices()}function ac(a,b,c,d){F.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],k,m,
        q=new n,u=new D;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);m=0;for(k=3;m<=b;m++,k+=3){var p=c+m/b*d;q.x=a*Math.cos(p);q.y=a*Math.sin(p);f.push(q.x,q.y,q.z);g.push(0,0,1);u.x=(f[k]/a+1)/2;u.y=(f[k+1]/a+1)/2;h.push(u.x,u.y)}for(k=1;k<=b;k++)e.push(k,k+1,0);this.setIndex(e);this.addAttribute("position",new B(f,3));this.addAttribute("normal",new B(g,3));this.addAttribute("uv",new B(h,2))}function bc(a){Da.call(this,{uniforms:Ga.merge([Z.lights,{opacity:{value:1}}]),vertexShader:aa.shadow_vert,fragmentShader:aa.shadow_frag});
        this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}});this.setValues(a)}function cc(a){Da.call(this,a);this.type="RawShaderMaterial"}function Qa(a){Q.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new G(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=
        1;this.emissive=new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}
    function ob(a){Qa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function sa(a){Q.call(this);this.type="MeshPhongMaterial";this.color=new G(16777215);this.specular=new G(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=
        null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function pb(a){sa.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}
    function qb(a){Q.call(this,a);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function rb(a){Q.call(this);this.type="MeshLambertMaterial";this.color=new G(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=
        null;this.aoMapIntensity=1;this.emissive=new G(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function sb(a){Q.call(this);this.type="LineDashedMaterial";this.color=new G(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=
        1;this.lights=!1;this.setValues(a)}function Yd(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function ta(a){this.manager=void 0!==a?a:za}function Pe(a){this.manager=void 0!==a?a:za;
        this._parser=null}function Zd(a){this.manager=void 0!==a?a:za;this._parser=null}function Tc(a){this.manager=void 0!==a?a:za}function $d(a){this.manager=void 0!==a?a:za}function rd(a){this.manager=void 0!==a?a:za}function la(a,b){z.call(this);this.type="Light";this.color=new G(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function sd(a,b,c){la.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(z.DefaultUp);this.updateMatrix();this.groundColor=new G(b)}
    function tb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new D(512,512);this.map=null;this.matrix=new R}function td(){tb.call(this,new wa(50,1,.5,500))}function ud(a,b,c,d,e,f){la.call(this,a,b);this.type="SpotLight";this.position.copy(z.DefaultUp);this.updateMatrix();this.target=new z;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=
        void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new td}function vd(a,b,c,d){la.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new tb(new wa(90,1,.5,500))}function wd(){tb.call(this,new Ib(-5,5,5,-5,.5,500))}function xd(a,b){la.call(this,a,b);this.type="DirectionalLight";this.position.copy(z.DefaultUp);this.updateMatrix();
        this.target=new z;this.shadow=new wd}function yd(a,b){la.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function zd(a,b,c,d){la.call(this,a,b);this.type="RectAreaLight";this.position.set(0,1,0);this.updateMatrix();this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Ca(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Ad(a,b,c,d){Ca.call(this,a,b,c,d);this._offsetNext=
        this._weightNext=this._offsetPrev=this._weightPrev=-0}function Uc(a,b,c,d){Ca.call(this,a,b,c,d)}function Bd(a,b,c,d){Ca.call(this,a,b,c,d)}function ub(a,b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=ua.convertArray(b,this.TimeBufferType);this.values=ua.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function dc(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          c,d){ub.call(this,a,b,c,d)}function Cd(a,b,c,d){Ca.call(this,a,b,c,d)}function Vc(a,b,c,d){ub.call(this,a,b,c,d)}function ec(a,b,c,d){ub.call(this,a,b,c,d)}function Dd(a,b,c,d){ub.call(this,a,b,c,d)}function Ed(a,b,c){ub.call(this,a,b,c)}function Fd(a,b,c,d){ub.call(this,a,b,c,d)}function vb(a,b,c,d){ub.apply(this,arguments)}function Aa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=Y.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Gd(a){this.manager=
        void 0!==a?a:za;this.textures={}}function ae(a){this.manager=void 0!==a?a:za}function fc(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function be(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:za;this.withCredentials=!1}function Qe(a){this.manager=void 0!==a?a:za;this.texturePath=""}function Re(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*
        c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function wb(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function xb(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function ma(){this.arcLengthDivisions=200}function Ra(a,b){this.arcLengthDivisions=200;this.v1=a;this.v2=b}function Wc(){this.arcLengthDivisions=200;this.curves=[];this.autoClose=!1}function Wa(a,b,c,d,e,f,g,h){this.arcLengthDivisions=200;this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=
        f;this.aClockwise=g;this.aRotation=h||0}function yb(a){this.arcLengthDivisions=200;this.points=void 0===a?[]:a}function gc(a,b,c,d){this.arcLengthDivisions=200;this.v0=a;this.v1=b;this.v2=c;this.v3=d}function hc(a,b,c){this.arcLengthDivisions=200;this.v0=a;this.v1=b;this.v2=c}function Xc(a){Wc.call(this);this.currentPoint=new D;a&&this.fromPoints(a)}function zb(){Xc.apply(this,arguments);this.holes=[]}function ce(){this.subPaths=[];this.currentPath=null}function de(a){this.data=a}function Se(a){this.manager=
        void 0!==a?a:za}function ee(a){this.manager=void 0!==a?a:za}function Te(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new wa;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new wa;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function Hd(a,b,c){z.call(this);this.type="CubeCamera";var d=new wa(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new n(1,0,0));this.add(d);var e=new wa(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(-1,0,0));this.add(e);
        var f=new wa(90,1,a,b);f.up.set(0,0,1);f.lookAt(new n(0,1,0));this.add(f);var g=new wa(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new n(0,-1,0));this.add(g);var h=new wa(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new n(0,0,1));this.add(h);var k=new wa(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new n(0,0,-1));this.add(k);this.renderTarget=new Db(c,c,{format:1022,magFilter:1006,minFilter:1006});this.renderTarget.texture.name="CubeCamera";this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=
            this.renderTarget,p=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=p;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}}function fe(a){wa.call(this);this.cameras=a||[]}function ge(){z.call(this);this.type="AudioListener";this.context=he.getContext();this.gain=this.context.createGain();
        this.gain.connect(this.context.destination);this.filter=null}function ic(a){z.call(this);this.type="Audio";this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function ie(a){ic.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function je(a,b){this.analyser=a.context.createAnalyser();
        this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function ke(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function Ue(a,b,c){c=c||na.parseTrackName(b);this._targetGroup=a;this._bindings=
        a.subscribe_(b,c)}function na(a,b,c){this.path=b;this.parsedPath=c||na.parseTrackName(b);this.node=na.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function Ve(a){this.uuid=Y.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},
        get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}function We(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=
        2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function Xe(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Id(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function le(){F.call(this);
        this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function me(a,b,c,d){this.uuid=Y.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function jc(a,b){this.uuid=Y.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function ne(a,b,c){jc.call(this,a,b);this.meshPerAttribute=c||1}function oe(a,b,c){T.call(this,a,b);this.meshPerAttribute=
        c||1}function Ye(a,b,c,d){this.ray=new gb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function Ze(a,b){return a.distance-b.distance}function pe(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)pe(a[d],b,c,!0)}}function $e(a){this.autoStart=
        void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function af(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function bf(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function qa(a,b){Ba.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function Yc(a){z.call(this);
        this.material=a;this.render=function(a){}}function Zc(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new F;b=new B(6*b,3);c.addAttribute("position",b);V.call(this,c,new ga({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function kc(a){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=
        !1;a=new F;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new B(b,3));b=new ga({fog:!1});this.cone=new V(a,b);this.add(this.cone);this.update()}function cf(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,cf(a.children[c]));return b}function lc(a){for(var b=cf(a),c=new F,d=[],e=[],f=new G(0,
        0,1),g=new G(0,1,0),h=0;h<b.length;h++){var k=b[h];k.parent&&k.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.addAttribute("position",new B(d,3));c.addAttribute("color",new B(e,3));d=new ga({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});V.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.onBeforeRender()}function mc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new mb(b,4,2),d=new Ma({wireframe:!0,
        fog:!1});d.color.copy(this.light.color);Ba.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function nc(a){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new ga({color:a.color});var b=new F;b.addAttribute("position",new T(new Float32Array(15),3));this.add(new xa(b,a));this.update()}function oc(a,b){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;var c=
        new lb(b);c.rotateY(.5*Math.PI);var d=new Ma({vertexColors:2,wireframe:!0}),e=c.getAttribute("position"),e=new Float32Array(3*e.count);c.addAttribute("color",new T(e,3));this.add(new Ba(c,d));this.update()}function $c(a,b,c,d){a=a||10;b=b||10;c=new G(void 0!==c?c:4473924);d=new G(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],k=0,m=0,q=-g;k<=b;k++,q+=f){a.push(-g,0,q,g,0,q);a.push(q,0,-g,q,0,g);var l=k===e?c:d;l.toArray(h,m);m+=3;l.toArray(h,m);m+=3;l.toArray(h,m);m+=3;l.toArray(h,
        m);m+=3}b=new F;b.addAttribute("position",new B(a,3));b.addAttribute("color",new B(h,3));c=new ga({vertexColors:2});V.call(this,b,c)}function Jd(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new G(void 0!==e?e:4473924);f=new G(void 0!==f?f:8947848);var g=[],h=[],k,m,q,l,p;for(q=0;q<=b;q++)m=q/b*2*Math.PI,k=Math.sin(m)*a,m=Math.cos(m)*a,g.push(0,0,0),g.push(k,0,m),p=q&1?e:f,h.push(p.r,p.g,p.b),h.push(p.r,p.g,p.b);for(q=0;q<=c;q++)for(p=q&1?e:f,l=a-a/c*q,b=0;b<d;b++)m=b/d*2*Math.PI,k=Math.sin(m)*l,
        m=Math.cos(m)*l,g.push(k,0,m),h.push(p.r,p.g,p.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*l,m=Math.cos(m)*l,g.push(k,0,m),h.push(p.r,p.g,p.b);a=new F;a.addAttribute("position",new B(g,3));a.addAttribute("color",new B(h,3));g=new ga({vertexColors:2});V.call(this,a,g)}function ad(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        c=new F;b=new B(6*b,3);c.addAttribute("position",b);V.call(this,c,new ga({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function pc(a,b){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new F;c.addAttribute("position",new B([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new ga({fog:!1});this.add(new xa(c,d));c=new F;c.addAttribute("position",new B([0,0,0,0,0,1],3));this.add(new xa(c,d));this.update()}
    function bd(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new F,e=new ga({color:16777215,vertexColors:1}),f=[],g=[],h={},k=new G(16755200),m=new G(16711680),q=new G(43775),l=new G(16777215),p=new G(3355443);b("n1","n2",k);b("n2","n4",k);b("n4","n3",k);b("n3","n1",k);b("f1","f2",k);b("f2","f4",k);b("f4","f3",k);b("f3","f1",k);b("n1","f1",k);b("n2","f2",k);b("n3","f3",k);b("n4","f4",k);b("p","n1",m);b("p",
        "n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",q);b("u2","u3",q);b("u3","u1",q);b("c","t",l);b("p","c",p);b("cn1","cn2",p);b("cn3","cn4",p);b("cf1","cf2",p);b("cf3","cf4",p);d.addAttribute("position",new B(f,3));d.addAttribute("color",new B(g,3));V.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function Ab(a,b){this.object=a;void 0===b&&(b=16776960);var c=new Uint16Array([0,
        1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new F;e.setIndex(new T(c,1));e.addAttribute("position",new T(d,3));V.call(this,e,new ga({color:b}));this.matrixAutoUpdate=!1;this.update()}function Bb(a,b,c,d,e,f){z.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Kd&&(Kd=new F,Kd.addAttribute("position",new B([0,0,0,0,1,0],3)),qe=new Va(0,.5,1,5,1),qe.translate(0,-.5,0));this.position.copy(b);this.line=new xa(Kd,new ga({color:d}));
        this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new Ba(qe,new Ma({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function Ld(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new F;a.addAttribute("position",new B(b,3));a.addAttribute("color",new B([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ga({vertexColors:2});V.call(this,a,b)}function re(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,k){e=k*(g-e);h=k*
        (h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,k,m,q){e=((f-e)/k-(g-e)/(k+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+q)+(h-g)/q)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function Ia(a){this.arcLengthDivisions=200;2>a.length&&console.warn("THREE.CatmullRomCurve3: Points array needs at least two entries.");this.points=a||[];this.closed=!1}function cd(a,b,c,d){this.arcLengthDivisions=200;this.v0=a;this.v1=b;this.v2=
        c;this.v3=d}function dd(a,b,c){this.arcLengthDivisions=200;this.v0=a;this.v1=b;this.v2=c}function ed(a,b){this.arcLengthDivisions=200;this.v1=a;this.v2=b}function Md(a,b,c,d,e,f){Wa.call(this,a,b,c,c,d,e,f)}function df(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Ia.call(this,a);this.type="catmullrom";this.closed=!0}function ef(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Ia.call(this,a);this.type=
        "catmullrom"}function se(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");Ia.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});
    void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();Object.assign(ra.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},
        hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var b=b.slice(0),c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});var Y={DEG2RAD:Math.PI/180,RAD2DEG:180/
    Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*Y.DEG2RAD},radToDeg:function(a){return a*Y.RAD2DEG},isPowerOfTwo:function(a){return 0===
        (a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};Object.defineProperties(D.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(D.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=
        a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},
        subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,
            Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a=new D,b=new D;return function(c,d){a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=
            Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},
        angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,
            a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-
            a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}});var jf=0;ca.DEFAULT_IMAGE=void 0;ca.DEFAULT_MAPPING=300;Object.defineProperty(ca.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(ca.prototype,ra.prototype,{constructor:ca,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=
        a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,
        name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=Y.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=
        c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%
        2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}});Object.assign(ja.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},
        setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,
            this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=
            a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/
            b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var m=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+m-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;m=(m+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>m?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>m?.01>h?(b=.707106781,c=0,d=.707106781):
            (c=Math.sqrt(h),b=d/c,d=k/c):.01>m?(c=b=.707106781,d=0):(d=Math.sqrt(m),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,
            a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a=new ja,b=new ja;return function(c,d){a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},
        ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},
        negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
        setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=
            []);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});Object.assign(Cb.prototype,ra.prototype,{isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,
        0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Db.prototype=Object.create(Cb.prototype);Db.prototype.constructor=Db;Db.prototype.isWebGLRenderTargetCube=!0;Object.assign(pa,{slerp:function(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var q=e[f+1],l=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==q||m!==l){f=1-g;var p=h*d+k*q+m*l+c*e,r=0<=p?1:-1,n=1-p*p;n>Number.EPSILON&&(n=Math.sqrt(n),p=Math.atan2(n,p*r),f=Math.sin(f*p)/n,g=Math.sin(g*p)/n);r*=g;h=h*f+d*r;k=k*f+q*r;m=m*f+l*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});Object.defineProperties(pa.prototype,{x:{get:function(){return this._x},
        set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this.onChangeCallback()}}});Object.assign(pa.prototype,{set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,
        this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z,f=a.order,g=Math.cos,h=Math.sin,k=g(c/2),m=g(d/2),g=g(e/2),c=h(c/2),d=h(d/2),e=h(e/2);"XYZ"===f?(this._x=c*m*g+k*d*e,this._y=k*d*g-c*m*e,this._z=k*m*e+c*d*g,this._w=k*m*g-c*d*e):"YXZ"===f?(this._x=c*m*g+k*d*
        e,this._y=k*d*g-c*m*e,this._z=k*m*e-c*d*g,this._w=k*m*g+c*d*e):"ZXY"===f?(this._x=c*m*g-k*d*e,this._y=k*d*g+c*m*e,this._z=k*m*e+c*d*g,this._w=k*m*g-c*d*e):"ZYX"===f?(this._x=c*m*g-k*d*e,this._y=k*d*g+c*m*e,this._z=k*m*e-c*d*g,this._w=k*m*g+c*d*e):"YZX"===f?(this._x=c*m*g+k*d*e,this._y=k*d*g+c*m*e,this._z=k*m*e-c*d*g,this._w=k*m*g-c*d*e):"XZY"===f&&(this._x=c*m*g-k*d*e,this._y=k*d*g-c*m*e,this._z=k*m*e+c*d*g,this._w=k*m*g+c*d*e);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
        .25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a=new n,b;return function(c,d){void 0===a&&(a=new n);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=
        -1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
        multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,m=b._w;this._x=c*m+f*g+d*k-e*h;this._y=d*m+f*h+e*g-c*k;this._z=e*m+f*k+c*h-d*g;this._w=f*m-c*g-d*h-e*k;this.onChangeCallback();
            return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var k=Math.atan2(h,g),g=Math.sin((1-b)*k)/h,h=Math.sin(b*
                k)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
            a;return this},onChangeCallback:function(){}});Object.assign(n.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
        case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
        addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=
            a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a=new pa;return function(b){b&&b.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
            return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new pa;return function(b,c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];
            return this.divideScalar(a[3]*b+a[7]*c+a[11]*d+a[15])},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(){var a=new R;return function(b){a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a=new R;return function(b){a.multiplyMatrices(b.matrixWorld,
            a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=
            Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a=new n,b=new n;return function(c,d){a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);
            this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;
            this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*
            b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=
            e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new n;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new n;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(Y.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
        distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromCylindrical:function(a){this.x=a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,
            3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=
            this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});Object.assign(R.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,k,m,q,l,p,r,n,t){var y=this.elements;y[0]=a;y[4]=b;y[8]=c;y[12]=d;y[1]=e;y[5]=f;y[9]=g;y[13]=h;y[2]=k;y[6]=m;y[10]=q;y[14]=l;y[3]=p;y[7]=r;y[11]=n;y[15]=t;return this},identity:function(){this.set(1,
        0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new R).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);
        b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new n;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),
        makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,m=c*h,q=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+m*d;b[5]=a-q*d;b[9]=-c*g;b[2]=q-a*d;b[6]=m+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,m=d*h,q=d*e,b[0]=a+q*c,b[4]=m*c-k,b[8]=f*d,
            b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-m,b[6]=q+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,m=d*h,q=d*e,b[0]=a-q*c,b[4]=-f*e,b[8]=m+k*c,b[1]=k+m*c,b[5]=f*h,b[9]=q-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,m=c*h,q=c*e,b[0]=g*h,b[4]=m*d-k,b[8]=a*d+q,b[1]=g*e,b[5]=q*d+a,b[9]=k*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,m=c*g,q=c*d,b[0]=g*h,b[4]=q-a*e,b[8]=m*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+m,b[10]=a-q*e):"XZY"===a.order&&(a=f*g,k=f*d,m=c*g,q=c*d,b[0]=
                g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+q,b[5]=f*h,b[9]=k*e-m,b[2]=m*e-k,b[6]=c*h,b[10]=q*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a._x,d=a._y,e=a._z,f=a._w,g=c+c,h=d+d,k=e+e;a=c*g;var m=c*h,c=c*k,q=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(q+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+q);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new n,
            b=new n,c=new n;return function(d,e,f){var g=this.elements;c.subVectors(d,e);0===c.lengthSq()&&(c.z=1);c.normalize();a.crossVectors(f,c);0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c));a.normalize();b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):
            this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],m=c[1],q=c[5],l=c[9],p=c[13],r=c[2],n=c[6],t=c[10],y=c[14],x=c[3],v=c[7],K=c[11],c=c[15],w=d[0],J=d[4],X=d[8],C=d[12],H=d[1],z=d[5],E=d[9],D=d[13],L=d[2],B=d[6],F=d[10],G=d[14],P=d[3],M=d[7],W=d[11],d=d[15];e[0]=f*w+g*H+h*L+k*P;e[4]=f*J+g*z+h*B+k*M;e[8]=f*X+g*E+h*F+k*W;e[12]=f*C+g*D+h*G+k*d;e[1]=m*w+q*
            H+l*L+p*P;e[5]=m*J+q*z+l*B+p*M;e[9]=m*X+q*E+l*F+p*W;e[13]=m*C+q*D+l*G+p*d;e[2]=r*w+n*H+t*L+y*P;e[6]=r*J+n*z+t*B+y*M;e[10]=r*X+n*E+t*F+y*W;e[14]=r*C+n*D+t*G+y*d;e[3]=x*w+v*H+K*L+c*P;e[7]=x*J+v*z+K*B+c*M;e[11]=x*X+v*E+K*F+c*W;e[15]=x*C+v*D+K*G+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a=new n;return function(b){for(var c=
            0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],q=a[6],l=a[10],p=a[14];return a[3]*(+e*h*q-d*k*q-e*g*l+c*k*l+d*g*p-c*h*p)+a[7]*(+b*h*p-b*k*l+e*f*l-d*f*p+d*k*m-e*h*m)+a[11]*(+b*k*q-b*g*p-e*f*q+c*f*p+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*q+b*g*l+d*f*q-c*f*l+c*h*m)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=
            b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],k=d[4],m=d[5],q=d[6],l=d[7],p=d[8],r=d[9],n=d[10],t=d[11],y=d[12],x=d[13],v=d[14],d=d[15],K=r*v*l-x*n*l+x*q*t-m*v*t-r*q*d+m*n*d,w=y*n*l-p*v*l-y*q*t+k*v*t+p*q*d-k*n*d,J=p*x*l-y*r*l+y*m*t-
            k*x*t-p*m*d+k*r*d,X=y*r*q-p*x*q-y*m*n+k*x*n+p*m*v-k*r*v,C=e*K+f*w+g*J+h*X;if(0===C){if(!0===b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return this.identity()}C=1/C;c[0]=K*C;c[1]=(x*n*h-r*v*h-x*g*t+f*v*t+r*g*d-f*n*d)*C;c[2]=(m*v*h-x*q*h+x*g*l-f*v*l-m*g*d+f*q*d)*C;c[3]=(r*q*h-m*n*h-r*g*l+f*n*l+m*g*t-f*q*t)*C;c[4]=w*C;c[5]=(p*v*h-y*n*h+y*g*t-e*v*t-p*g*d+e*n*d)*C;c[6]=(y*q*h-k*v*h-
            y*g*l+e*v*l+k*g*d-e*q*d)*C;c[7]=(k*n*h-p*q*h+p*g*l-e*n*l-k*g*t+e*q*t)*C;c[8]=J*C;c[9]=(y*r*h-p*x*h-y*f*t+e*x*t+p*f*d-e*r*d)*C;c[10]=(k*x*h-y*m*h+y*f*l-e*x*l-k*f*d+e*m*d)*C;c[11]=(p*m*h-k*r*h-p*f*l+e*r*l+k*f*t-e*m*t)*C;c[12]=X*C;c[13]=(p*x*g-y*r*g+y*f*n-e*x*n-p*f*v+e*r*v)*C;c[14]=(y*m*g-k*x*g-y*f*q+e*x*q+k*f*v-e*m*v)*C;c[15]=(k*r*g-p*m*g+p*f*q-e*r*q-k*f*n+e*m*n)*C;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=
            a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,
            0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,m=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,m*g+c,m*h-d*f,0,k*h-d*g,m*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},
        compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new n,b=new R;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.copy(this);c=1/g;var f=1/h,m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=
            m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;
            a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});db.prototype=Object.create(ca.prototype);db.prototype.constructor=db;db.prototype.isDataTexture=!0;Ya.prototype=Object.create(ca.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isCubeTexture=!0;Object.defineProperty(Ya.prototype,"images",{get:function(){return this.image},set:function(a){this.image=
        a}});var Ce=new ca,De=new Ya,xe=[],ze=[],Be=new Float32Array(16),Ae=new Float32Array(9);He.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Pd=/([\w\d_]+)(\])?(\[|\.)?/g;eb.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};eb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};eb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==
    h.needsUpdate&&g.setValue(a,h.value,d)}};eb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,
        darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,
        fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,
        lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,
        navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,
        slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(G.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=
        a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=Y.euclideanModulo(b,1);c=Y.clamp(c,0,1);d=Y.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/
        3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
        Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+
            c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=kg[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*
        this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},
        offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},
        multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});var Z={common:{diffuse:{value:new G(15658734)},
        opacity:{value:1},map:{value:null},offsetRepeat:{value:new ja(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new D(1,1)}},displacementmap:{displacementMap:{value:null},
        displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},
        spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],
            properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new G(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new ja(0,0,1,1)}}},Ga={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():
        Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},aa={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
        aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
        clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
        clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
        cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
        defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
        envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
        envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
        fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
        gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
        lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
        lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
        map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
        metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
        normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
        packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
        roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
        shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
        shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
        shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
        skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
        skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
        uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
        uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
        cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
        depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
        distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
        equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
        linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
        meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
        normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
        points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"},$a={basic:{uniforms:Ga.merge([Z.common,
        Z.aomap,Z.lightmap,Z.fog]),vertexShader:aa.meshbasic_vert,fragmentShader:aa.meshbasic_frag},lambert:{uniforms:Ga.merge([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.fog,Z.lights,{emissive:{value:new G(0)}}]),vertexShader:aa.meshlambert_vert,fragmentShader:aa.meshlambert_frag},phong:{uniforms:Ga.merge([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:aa.meshphong_vert,
        fragmentShader:aa.meshphong_frag},standard:{uniforms:Ga.merge([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new G(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:aa.meshphysical_vert,fragmentShader:aa.meshphysical_frag},points:{uniforms:Ga.merge([Z.points,Z.fog]),vertexShader:aa.points_vert,fragmentShader:aa.points_frag},dashed:{uniforms:Ga.merge([Z.common,Z.fog,
        {scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:aa.linedashed_vert,fragmentShader:aa.linedashed_frag},depth:{uniforms:Ga.merge([Z.common,Z.displacementmap]),vertexShader:aa.depth_vert,fragmentShader:aa.depth_frag},normal:{uniforms:Ga.merge([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:aa.normal_vert,fragmentShader:aa.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:aa.cube_vert,fragmentShader:aa.cube_frag},
        equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:aa.equirect_vert,fragmentShader:aa.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new n}},vertexShader:aa.distanceRGBA_vert,fragmentShader:aa.distanceRGBA_frag}};$a.physical={uniforms:Ga.merge([$a.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:aa.meshphysical_vert,fragmentShader:aa.meshphysical_frag};Object.assign(gd.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);
        return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new D;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;
        return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);
        return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new D).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b){return(b||new D).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new D;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Kf=0;Object.assign(Q.prototype,ra.prototype,
        {isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}
            var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());
            void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=
                this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);
            this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==
            this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&
            (d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;d.dithering=this.dithering;c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=
            a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;
            this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},
            dispose:function(){this.dispatchEvent({type:"dispose"})}});Da.prototype=Object.create(Q.prototype);Da.prototype.constructor=Da;Da.prototype.isShaderMaterial=!0;Da.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Ga.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=
        a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Da.prototype.toJSON=function(a){a=Q.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};Za.prototype=Object.create(Q.prototype);Za.prototype.constructor=Za;Za.prototype.isMeshDepthMaterial=!0;Za.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=
        a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Object.assign(Sa.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],
        q=a[h+1],l=a[h+2];m<b&&(b=m);q<c&&(c=q);l<d&&(d=l);m>e&&(e=m);q>f&&(f=q);l>g&&(g=l)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.count;h<k;h++){var m=a.getX(h),q=a.getY(h),l=a.getZ(h);m<b&&(b=m);q<c&&(c=q);l<d&&(d=l);m>e&&(e=m);q>f&&(f=q);l>g&&(g=l)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);
        return this},setFromCenterAndSize:function(){var a=new n;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<
        this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=a||new n;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new n;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},
        expandByObject:function(){var a=new n;return function(b){var c=this;b.updateMatrixWorld(!0);b.traverse(function(b){var e,f;e=b.geometry;if(void 0!==e)if(e.isGeometry){var g=e.vertices;e=0;for(f=g.length;e<f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}else if(e.isBufferGeometry&&(g=e.attributes.position,void 0!==g))for(e=0,f=g.count;e<f;e++)a.fromBufferAttribute(g,e).applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),containsPoint:function(a){return a.x<this.min.x||
        a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new n).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||
        a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a=new n;return function(b){this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*
            this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new n).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new n;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new n;return function(b){b=b||new Fa;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);
            this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new n,new n,new n,new n,new n,new n,new n,new n];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);
            a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});Object.assign(Fa.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},
        setFromPoints:function(){var a=new Sa;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*
            this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new n;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));
            return d},getBoundingBox:function(a){a=a||new Sa;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});Object.assign(Ja.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=
        f;m[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a=new n;return function(b){for(var c=0,d=b.count;c<
    d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[3],h=c[6],k=c[1],m=c[4],q=c[7],l=c[2],p=c[5],c=c[8],r=d[0],n=d[3],t=d[6],y=d[1],x=d[4],v=d[7],K=d[2],w=d[5],d=d[8];e[0]=f*r+g*y+h*K;e[3]=f*n+g*x+h*w;e[6]=f*t+g*v+h*d;e[1]=k*r+m*y+q*K;e[4]=
        k*n+m*x+q*w;e[7]=k*t+m*v+q*d;e[2]=l*r+p*y+c*K;e[5]=l*n+p*x+c*w;e[8]=l*t+p*v+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,
        d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],k=c[4],m=c[5],q=c[6],l=c[7],c=c[8],p=c*k-m*l,r=m*q-c*h,n=l*h-k*q,t=e*p+f*r+g*n;if(0===t){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");return this.identity()}t=1/t;d[0]=p*t;d[1]=(g*l-c*f)*t;d[2]=(m*f-g*k)*t;d[3]=r*t;d[4]=(c*e-g*q)*t;d[5]=(g*h-m*e)*t;d[6]=n*t;d[7]=(f*q-l*e)*t;d[8]=(k*e-f*h)*t;return this},transpose:function(){var a,
        b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=
        0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});Object.assign(va.prototype,{set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=
        -b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new n,b=new n;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=
        -1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new n).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new n;return function(b,c){var d=c||new n,e=b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=
        -(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new n).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new n,b=new Ja;return function(c,d){var e=
        this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});Object.assign(hd.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},
        copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],q=c[8],l=c[9],p=c[10],r=c[11],n=c[12],t=c[13],y=c[14],c=c[15];b[0].setComponents(f-a,m-g,r-q,c-n).normalize();b[1].setComponents(f+a,m+g,r+q,c+n).normalize();b[2].setComponents(f+d,m+h,r+l,c+t).normalize();b[3].setComponents(f-d,m-h,r-l,c-t).normalize();b[4].setComponents(f-e,m-k,r-p,c-y).normalize();
            b[5].setComponents(f+e,m+k,r+p,c+y).normalize();return this},intersectsObject:function(){var a=new Fa;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Fa;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;
            a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new n,b=new n;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=
            this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});Object.assign(gb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new n).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(){var a=
        new n;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new n;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new n;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);
        a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new n,b=new n,c=new n;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),q=-c.dot(b),l=c.lengthSq(),p=Math.abs(1-k*k),r;0<p?(d=k*q-m,e=k*m-q,r=h*p,0<=d?e>=-r?e<=r?(h=1/p,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*q)+l):(e=h,d=Math.max(0,-(k*
    e+m)),k=-d*d+e*(e+2*q)+l):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*q)+l):e<=-r?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,-q),h),k=-d*d+e*(e+2*q)+l):e<=r?(d=0,e=Math.min(Math.max(-h,-q),h),k=e*(e+2*q)+l):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,-q),h),k=-d*d+e*(e+2*q)+l)):(e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*q)+l);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new n;
        return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;
        if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new n;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new n,b=new n,c=new n,d=new n;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=
        -1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});ab.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");ab.DefaultOrder="XYZ";Object.defineProperties(ab.prototype,
        {x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this.onChangeCallback()}}});Object.assign(ab.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();
        return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=Y.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],q=e[2],l=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(l,k),this._z=
        0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-q,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(-q,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(q,-1,1)),.99999>Math.abs(q)?(this._x=Math.atan2(l,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?
        (this._x=Math.atan2(-m,k),this._y=Math.atan2(-q,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(l,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a=new R;return function(b,c,d){a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,
        c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new pa;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=
        this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(Qd.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},test:function(a){return 0!==(this.mask&a.mask)}});var Lf=0;z.DefaultUp=new n(0,
        1,0);z.DefaultMatrixAutoUpdate=!0;Object.assign(z.prototype,ra.prototype,{isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},
        setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new pa;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new n(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new n(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new n(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new n;
            return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new n(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new n(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new n(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=
            new R;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new R;return function(b){this.isCamera?a.lookAt(this.position,b,this.up):a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&
        a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",
            a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new n;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new n,b=new n;return function(c){c=c||new pa;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new pa;return function(b){b=
            b||new ab;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new n,b=new pa;return function(c){c=c||new n;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new pa;return function(b){b=b||new n;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},
        traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
            this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||""===a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==
        this.name&&(f.name=this.name);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);f.matrix=this.matrix.toArray();void 0!==this.geometry&&(f.geometry=b(a.geometries,this.geometry));if(void 0!==this.material)if(Array.isArray(this.material)){for(var g=[],h=0,k=this.material.length;h<k;h++)g.push(b(a.materials,this.material[h]));f.material=g}else f.material=b(a.materials,
            this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);d&&(d=c(a.geometries),g=c(a.materials),h=c(a.textures),k=c(a.images),0<d.length&&(e.geometries=d),0<g.length&&(e.materials=g),0<h.length&&(e.textures=h),0<k.length&&(e.images=k));e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);
            this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());
            return this}});Object.assign(Gb.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new n).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new n).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},
        at:function(a,b){var c=b||new n;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new n,b=new n;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=Y.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new n;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);
            return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});Object.assign(Ta,{normal:function(){var a=new n;return function(b,c,d,e){e=e||new n;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}(),barycoordFromPoint:function(){var a=new n,b=new n,c=new n;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=
        d*k-e*e;h=h||new n;if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-k-d,d,k)}}(),containsPoint:function(){var a=new n;return function(b,c,d,e){b=Ta.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}()});Object.assign(Ta.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},
        copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new n,b=new n;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new n).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Ta.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new va).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Ta.barycoordFromPoint(a,
            this.a,this.b,this.c,b)},containsPoint:function(a){return Ta.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a=new va,b=[new Gb,new Gb,new Gb],c=new n,d=new n;return function(e,f){var g=f||new n,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var k=0;k<b.length;k++){b[k].closestPointToPoint(c,!0,d);var m=c.distanceToSquared(d);
            m<h&&(h=m,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});Object.assign(Ua.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=
        a.vertexColors[b].clone();return this}});Ma.prototype=Object.create(Q.prototype);Ma.prototype.constructor=Ma;Ma.prototype.isMeshBasicMaterial=!0;Ma.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;
        this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};Object.defineProperty(T.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(T.prototype,{isBufferAttribute:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=
        this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new G);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
        d),f=new D);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ja);b[c++]=f.x;b[c++]=f.y;
        b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+
    3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,
        this.itemSize)).copy(this)}});qc.prototype=Object.create(T.prototype);qc.prototype.constructor=qc;rc.prototype=Object.create(T.prototype);rc.prototype.constructor=rc;sc.prototype=Object.create(T.prototype);sc.prototype.constructor=sc;tc.prototype=Object.create(T.prototype);tc.prototype.constructor=tc;hb.prototype=Object.create(T.prototype);hb.prototype.constructor=hb;uc.prototype=Object.create(T.prototype);uc.prototype.constructor=uc;ib.prototype=Object.create(T.prototype);ib.prototype.constructor=
        ib;B.prototype=Object.create(T.prototype);B.prototype.constructor=B;vc.prototype=Object.create(T.prototype);vc.prototype.constructor=vc;Object.assign(Je.prototype,{computeGroups:function(a){var b,c=[],d=void 0;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,
        e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,k;if(0<h){k=[];for(var m=0;m<h;m++)k[m]=[];this.morphTargets.position=k}var q=a.morphNormals,l=q.length,p;if(0<l){p=[];for(m=0;m<l;m++)p[m]=[];this.morphTargets.normal=p}for(var r=a.skinIndices,n=a.skinWeights,t=r.length===c.length,y=n.length===c.length,m=0;m<b.length;m++){var x=b[m];this.vertices.push(c[x.a],c[x.b],c[x.c]);var v=x.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=x.normal,this.normals.push(v,v,
        v));v=x.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=x.color,this.colors.push(v,v,v));!0===e&&(v=d[0][m],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new D,new D,new D)));!0===f&&(v=d[1][m],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new D,new D,new D)));for(v=0;v<h;v++){var K=g[v].vertices;k[v].push(K[x.a],
        K[x.b],K[x.c])}for(v=0;v<l;v++)K=q[v].vertexNormals[m],p[v].push(K.a,K.b,K.c);t&&this.skinIndices.push(r[x.a],r[x.b],r[x.c]);y&&this.skinWeights.push(n[x.a],n[x.b],n[x.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var Sd=0;Object.assign(I.prototype,ra.prototype,{isGeometry:!0,applyMatrix:function(a){for(var b=
        (new Ja).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a=new R;return function(b){a.makeRotationX(b);
        this.applyMatrix(a);return this}}(),rotateY:function(){var a=new R;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new R;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new R;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new R;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new z;return function(b){a.lookAt(b);
        a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[q[a].clone(),q[b].clone(),q[d].clone()]:[],r=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new Ua(a,b,d,f,r,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([l[a].clone(),l[b].clone(),l[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([p[a].clone(),p[b].clone(),p[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,
        g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var q=[],l=[],p=[],r=e=0;e<f.length;e+=3,r+=2)c.vertices.push(new n(f[e],f[e+1],f[e+2])),void 0!==g&&q.push(new n(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new G(h[e],h[e+1],h[e+2])),void 0!==k&&l.push(new D(k[r],k[r+1])),void 0!==m&&p.push(new D(m[r],m[r+1]));var U=a.groups;if(0<U.length)for(e=0;e<U.length;e++)for(var f=
        U[e],t=f.start,y=f.count,r=t,t=t+y;r<t;r+=3)void 0!==d?b(d[r],d[r+1],d[r+2],f.materialIndex):b(r,r+1,r+2,f.materialIndex);else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,
        a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new R;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new n,b=new n,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
    a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new n;if(a){var e,f,g,h=new n,k=new n;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<
    c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=
        c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=
        e.vertexNormals[a].clone();var f=new I;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new n,k={a:new n,b:new n,c:new n},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();
        c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===
    this.boundingBox&&(this.boundingBox=new Sa);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Fa);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],q=a.faceVertexUvs[0],l=this.colors,p=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new Ja).getNormalMatrix(b));a=0;for(var r=g.length;a<
    r;a++){var n=g[a].clone();void 0!==b&&n.applyMatrix4(b);f.push(n)}a=0;for(r=p.length;a<r;a++)l.push(p[a].clone());a=0;for(r=k.length;a<r;a++){var g=k[a],t=g.vertexNormals,p=g.vertexColors,l=new Ua(g.a+e,g.b+e,g.c+e);l.normal.copy(g.normal);void 0!==d&&l.normal.applyMatrix3(d).normalize();b=0;for(f=t.length;b<f;b++)n=t[b].clone(),void 0!==d&&n.applyMatrix3(d).normalize(),l.vertexNormals.push(n);l.color.copy(g.color);b=0;for(f=p.length;b<f;b++)n=p[b],l.vertexColors.push(n.clone());l.materialIndex=g.materialIndex+
        c;h.push(l)}a=0;for(r=q.length;a<r;a++)if(c=q[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<
    g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=
        b;return f},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+
        a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==l[b])return l[b];l[b]=q.length;q.push(a.getHex());return l[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=p.length/2;p.push(a.x,a.y);return r[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==
        this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],m={},q=[],l={},p=[],r={};for(g=0;g<this.faces.length;g++){var n=this.faces[g],t=void 0!==this.faceVertexUvs[0][g],y=0<n.normal.length(),x=0<n.vertexNormals.length,v=1!==n.color.r||1!==n.color.g||1!==n.color.b,K=0<n.vertexColors.length,w=0,w=a(w,0,0),w=a(w,1,!0),w=a(w,2,!1),w=a(w,3,t),w=a(w,4,y),w=a(w,5,x),w=a(w,6,
        v),w=a(w,7,K);h.push(w);h.push(n.a,n.b,n.c);h.push(n.materialIndex);t&&(t=this.faceVertexUvs[0][g],h.push(d(t[0]),d(t[1]),d(t[2])));y&&h.push(b(n.normal));x&&(y=n.vertexNormals,h.push(b(y[0]),b(y[1]),b(y[2])));v&&h.push(c(n.color));K&&(n=n.vertexColors,h.push(c(n[0]),c(n[1]),c(n[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<q.length&&(e.data.colors=q);0<p.length&&(e.data.uvs=[p]);e.data.faces=h;return e},clone:function(){return(new I).copy(this)},copy:function(a){var b,c,d,e,f,g;this.vertices=
        [];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;d=a.vertices;b=0;for(c=d.length;b<c;b++)this.vertices.push(d[b].clone());d=a.colors;b=0;for(c=d.length;b<c;b++)this.colors.push(d[b].clone());d=a.faces;b=0;for(c=d.length;b<c;b++)this.faces.push(d[b].clone());b=0;for(c=a.faceVertexUvs.length;b<c;b++){var h=a.faceVertexUvs[b];void 0===
    this.faceVertexUvs[b]&&(this.faceVertexUvs[b]=[]);d=0;for(e=h.length;d<e;d++){var k=h[d],m=[];f=0;for(g=k.length;f<g;f++)m.push(k[f].clone());this.faceVertexUvs[b].push(m)}}f=a.morphTargets;b=0;for(c=f.length;b<c;b++){g={};g.name=f[b].name;if(void 0!==f[b].vertices)for(g.vertices=[],d=0,e=f[b].vertices.length;d<e;d++)g.vertices.push(f[b].vertices[d].clone());if(void 0!==f[b].normals)for(g.normals=[],d=0,e=f[b].normals.length;d<e;d++)g.normals.push(f[b].normals[d].clone());this.morphTargets.push(g)}f=
        a.morphNormals;b=0;for(c=f.length;b<c;b++){g={};if(void 0!==f[b].vertexNormals)for(g.vertexNormals=[],d=0,e=f[b].vertexNormals.length;d<e;d++)h=f[b].vertexNormals[d],k={},k.a=h.a.clone(),k.b=h.b.clone(),k.c=h.c.clone(),g.vertexNormals.push(k);if(void 0!==f[b].faceNormals)for(g.faceNormals=[],d=0,e=f[b].faceNormals.length;d<e;d++)g.faceNormals.push(f[b].faceNormals[d].clone());this.morphNormals.push(g)}d=a.skinWeights;b=0;for(c=d.length;b<c;b++)this.skinWeights.push(d[b].clone());d=a.skinIndices;b=
        0;for(c=d.length;b<c;b++)this.skinIndices.push(d[b].clone());d=a.lineDistances;b=0;for(c=d.length;b<c;b++)this.lineDistances.push(d[b]);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;
        this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});F.MaxIndex=65535;Object.assign(F.prototype,ra.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<Rd(a)?ib:hb)(a,1):this.index=a},addAttribute:function(a,b,c){if(b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute)if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
        this.setIndex(b);else return this.attributes[a]=b,this;else console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new T(b,c))},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},
        applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new Ja).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a=new R;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new R;return function(b){a.makeRotationY(b);
            this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new R;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new R;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new R;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new z;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();
            var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new B(3*b.vertices.length,3);var c=new B(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new B(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&
        (this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;
            c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),
            c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Je).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},
        fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new T(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new T(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new T(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new T(b,2)).copyVector2sArray(a.uvs)));
            0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new T(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<Rd(a.indices)?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new T(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new B(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new B(4*
                a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new B(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Sa);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):
            this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new Sa,b=new n;return function(){null===this.boundingSphere&&(this.boundingSphere=new Fa);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);
            a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;
            if(void 0===b.normal)this.addAttribute("normal",new T(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,k,m,q=new n,l=new n,p=new n,r=new n,U=new n;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var t=0,y=c.length;t<y;++t)for(f=c[t],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3)h=3*a[f+0],k=3*a[f+1],m=3*a[f+2],q.fromArray(d,h),l.fromArray(d,k),p.fromArray(d,m),r.subVectors(p,l),U.subVectors(q,l),r.cross(U),e[h]+=r.x,e[h+1]+=r.y,
                e[h+2]+=r.z,e[k]+=r.x,e[k+1]+=r.y,e[k+2]+=r.z,e[m]+=r.x,e[m+1]+=r.y,e[m+2]+=r.z}else for(f=0,g=d.length;f<g;f+=9)q.fromArray(d,f),l.fromArray(d,f+3),p.fromArray(d,f+6),r.subVectors(p,l),U.subVectors(q,l),r.cross(U),e[f]=r.x,e[f+1]=r.y,e[f+2]=r.z,e[f+3]=r.x,e[f+4]=r.y,e[f+5]=r.z,e[f+6]=r.x,e[f+7]=r.y,e[f+8]=r.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){for(var a=this.attributes.normal,b,c,d,e,f=0,g=a.count;f<g;f++)b=a.getX(f),c=a.getY(f),d=a.getZ(f),e=1/Math.sqrt(b*b+c*c+d*d),a.setXYZ(f,b*e,c*e,d*e)},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
            this;var a=new F,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,k=0,m=0,q=b.length;m<q;m++){h=b[m]*e;for(var l=0;l<e;l++)g[k++]=f[h++]}a.addAttribute(d,new T(g,e))}return a},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&
        (a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),
            radius:c.radius});return a},clone:function(){return(new F).copy(this)},copy:function(a){var b,c,d;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(b in c)this.addAttribute(b,c[b].clone());var e=a.morphAttributes;for(b in e){var f=[],g=e[b];c=0;for(d=g.length;c<d;c++)f.push(g[c].clone());this.morphAttributes[b]=f}b=a.groups;c=0;for(d=b.length;c<d;c++)e=
            b[c],this.addGroup(e.start,e.count,e.materialIndex);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Ba.prototype=Object.assign(Object.create(z.prototype),{constructor:Ba,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){z.prototype.copy.call(this,a);this.drawMode=a.drawMode;
        return this},updateMorphTargets:function(){var a=this.geometry,b,c;if(a.isBufferGeometry){if(a=a.morphAttributes,b=Object.keys(a),0<b.length){var d=a[b[0]];if(void 0!==d)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=d.length;a<b;a++)c=d[a].name||String(a),this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}else if(d=a.morphTargets,void 0!==d&&0<d.length)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=d.length;a<b;a++)c=d[a].name||String(a),
        this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a},raycast:function(){function a(a,b,c,d,e,f,g){Ta.barycoordFromPoint(a,b,c,d,t);e.multiplyScalar(t.x);f.multiplyScalar(t.y);g.multiplyScalar(t.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,g)))return null;x.copy(g);x.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(x);return c<b.near||c>b.far?null:{distance:c,
        point:x.clone(),object:a}}function c(c,d,e,f,m,q,l,n){g.fromBufferAttribute(f,q);h.fromBufferAttribute(f,l);k.fromBufferAttribute(f,n);if(c=b(c,d,e,g,h,k,y))m&&(p.fromBufferAttribute(m,q),r.fromBufferAttribute(m,l),U.fromBufferAttribute(m,n),c.uv=a(y,g,h,k,p,r,U)),c.face=new Ua(q,l,n,Ta.normal(g,h,k)),c.faceIndex=q;return c}var d=new R,e=new gb,f=new Fa,g=new n,h=new n,k=new n,m=new n,q=new n,l=new n,p=new D,r=new D,U=new D,t=new n,y=new n,x=new n;return function(n,t){var w=this.geometry,x=this.material,
        z=this.matrixWorld;if(void 0!==x&&(null===w.boundingSphere&&w.computeBoundingSphere(),f.copy(w.boundingSphere),f.applyMatrix4(z),!1!==n.ray.intersectsSphere(f)&&(d.getInverse(z),e.copy(n.ray).applyMatrix4(d),null===w.boundingBox||!1!==e.intersectsBox(w.boundingBox)))){var C;if(w.isBufferGeometry){var H,D,x=w.index,E=w.attributes.position,z=w.attributes.uv,B,L;if(null!==x)for(B=0,L=x.count;B<L;B+=3){if(w=x.getX(B),H=x.getX(B+1),D=x.getX(B+2),C=c(this,n,e,E,z,w,H,D))C.faceIndex=Math.floor(B/3),t.push(C)}else for(B=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                0,L=E.count;B<L;B+=3)if(w=B,H=B+1,D=B+2,C=c(this,n,e,E,z,w,H,D))C.index=w,t.push(C)}else if(w.isGeometry){var F,z=Array.isArray(x);B=w.vertices;L=w.faces;H=w.faceVertexUvs[0];0<H.length&&(E=H);for(var G=0,R=L.length;G<R;G++){var P=L[G];C=z?x[P.materialIndex]:x;if(void 0!==C){H=B[P.a];D=B[P.b];F=B[P.c];if(!0===C.morphTargets){C=w.morphTargets;var M=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var W=0,ba=C.length;W<ba;W++){var S=M[W];if(0!==S){var N=C[W].vertices;g.addScaledVector(m.subVectors(N[P.a],
        H),S);h.addScaledVector(q.subVectors(N[P.b],D),S);k.addScaledVector(l.subVectors(N[P.c],F),S)}}g.add(H);h.add(D);k.add(F);H=g;D=h;F=k}if(C=b(this,n,e,H,D,F,y))E&&E[G]&&(M=E[G],p.copy(M[0]),r.copy(M[1]),U.copy(M[2]),C.uv=a(y,H,D,F,p,r,U)),C.face=P,C.faceIndex=G,t.push(C)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Hb.prototype=Object.create(I.prototype);Hb.prototype.constructor=Hb;jb.prototype=Object.create(F.prototype);jb.prototype.constructor=
        jb;wc.prototype=Object.create(I.prototype);wc.prototype.constructor=wc;kb.prototype=Object.create(F.prototype);kb.prototype.constructor=kb;Na.prototype=Object.assign(Object.create(z.prototype),{constructor:Na,isCamera:!0,copy:function(a,b){z.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this},getWorldDirection:function(){var a=new pa;return function(b){b=b||new n;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}(),
        updateMatrixWorld:function(a){z.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});wa.prototype=Object.assign(Object.create(Na.prototype),{constructor:wa,isPerspectiveCamera:!0,copy:function(a,b){Na.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=
        a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*Y.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*Y.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*Y.RAD2DEG*Math.atan(Math.tan(.5*Y.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,
            1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*Y.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==
    f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Ib.prototype=Object.assign(Object.create(Na.prototype),{constructor:Ib,
        isOrthographicCamera:!0,copy:function(a,b){Na.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=
            (this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,
            c,a,b,this.near,this.far)},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var bg=0;Jb.prototype.isFogExp2=!0;Jb.prototype.clone=function(){return new Jb(this.color.getHex(),this.density)};Jb.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),
        density:this.density}};Kb.prototype.isFog=!0;Kb.prototype.clone=function(){return new Kb(this.color.getHex(),this.near,this.far)};Kb.prototype.toJSON=function(a){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};ld.prototype=Object.assign(Object.create(z.prototype),{constructor:ld,copy:function(a,b){z.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=
        a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=z.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b}});Xd.prototype=Object.assign(Object.create(z.prototype),{constructor:Xd,isLensFlare:!0,copy:function(a){z.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=
        a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new G(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;
        for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)}});bb.prototype=Object.create(Q.prototype);bb.prototype.constructor=bb;bb.prototype.isSpriteMaterial=!0;bb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};yc.prototype=Object.assign(Object.create(z.prototype),{constructor:yc,
        isSprite:!0,raycast:function(){var a=new n,b=new n,c=new n;return function(d,e){b.setFromMatrixPosition(this.matrixWorld);d.ray.closestPointToPoint(b,a);c.setFromMatrixScale(this.matrixWorld);var f=c.x*c.y/4;b.distanceToSquared(a)>f||(f=d.ray.origin.distanceTo(a),f<d.near||f>d.far||e.push({distance:f,point:a.clone(),face:null,object:this}))}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});zc.prototype=Object.assign(Object.create(z.prototype),{constructor:zc,copy:function(a){z.prototype.copy.call(this,
        a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new n;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=
        b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new n,b=new n;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.levels=
        [];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Object.assign(Ac.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new R;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){var a,b,c;b=0;for(c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<
    c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new R,b=new R;return function(){for(var c=this.bones,d=this.boneInverses,e=this.boneMatrices,f=this.boneTexture,g=0,h=c.length;g<h;g++)a.multiplyMatrices(c[g]?c[g].matrixWorld:b,d[g]),a.toArray(e,16*g);void 0!==f&&(f.needsUpdate=!0)}}(),clone:function(){return new Ac(this.bones,
        this.boneInverses)}});md.prototype=Object.assign(Object.create(z.prototype),{constructor:md,isBone:!0});nd.prototype=Object.assign(Object.create(Ba.prototype),{constructor:nd,isSkinnedMesh:!0,initBones:function(){var a=[],b,c,d,e;if(this.geometry&&void 0!==this.geometry.bones){d=0;for(e=this.geometry.bones.length;d<e;d++)c=this.geometry.bones[d],b=new md,a.push(b),b.name=c.name,b.position.fromArray(c.pos),b.quaternion.fromArray(c.rotq),void 0!==c.scl&&b.scale.fromArray(c.scl);d=0;for(e=this.geometry.bones.length;d<
    e;d++)c=this.geometry.bones[d],-1!==c.parent&&null!==c.parent&&void 0!==a[c.parent]?a[c.parent].add(a[d]):this.add(a[d])}this.updateMatrixWorld(!0);return a},bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){var a,b;if(this.geometry&&this.geometry.isGeometry)for(b=0;b<this.geometry.skinWeights.length;b++){var c=
        this.geometry.skinWeights[b];a=1/c.lengthManhattan();Infinity!==a?c.multiplyScalar(a):c.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry){var c=new ja,d=this.geometry.attributes.skinWeight;for(b=0;b<d.count;b++)c.x=d.getX(b),c.y=d.getY(b),c.z=d.getZ(b),c.w=d.getW(b),a=1/c.lengthManhattan(),Infinity!==a?c.multiplyScalar(a):c.set(1,0,0,0),d.setXYZW(b,c.x,c.y,c.z,c.w)}},updateMatrixWorld:function(a){Ba.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):
        "detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});ga.prototype=Object.create(Q.prototype);ga.prototype.constructor=ga;ga.prototype.isLineBasicMaterial=!0;ga.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;
        return this};xa.prototype=Object.assign(Object.create(z.prototype),{constructor:xa,isLine:!0,raycast:function(){var a=new R,b=new gb,c=new Fa;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new n,m=new n,h=new n,q=new n,l=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var p=g.index,
        r=g.attributes.position.array;if(null!==p)for(var p=p.array,g=0,U=p.length-1;g<U;g+=l){var t=p[g+1];k.fromArray(r,3*p[g]);m.fromArray(r,3*t);t=b.distanceSqToSegment(k,m,q,h);t>f||(q.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(q),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,U=r.length/3-1;g<U;g+=l)k.fromArray(r,3*g),m.fromArray(r,3*g+3),t=b.distanceSqToSegment(k,m,q,h),t>f||(q.applyMatrix4(this.matrixWorld),
        t=d.ray.origin.distanceTo(q),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=l)t=b.distanceSqToSegment(k[g],k[g+1],q,h),t>f||(q.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(q),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,
        this.material)).copy(this)}});V.prototype=Object.assign(Object.create(xa.prototype),{constructor:V,isLineSegments:!0});od.prototype=Object.assign(Object.create(xa.prototype),{constructor:od,isLineLoop:!0});Ka.prototype=Object.create(Q.prototype);Ka.prototype.constructor=Ka;Ka.prototype.isPointsMaterial=!0;Ka.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Lb.prototype=Object.assign(Object.create(z.prototype),
        {constructor:Lb,isPoints:!0,raycast:function(){var a=new R,b=new gb,c=new Fa;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<q){var h=b.closestPointToPoint(a);h.applyMatrix4(k);var m=d.ray.origin.distanceTo(h);m<d.near||m>d.far||e.push({distance:m,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);
            c.radius+=m;if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);var m=m/((this.scale.x+this.scale.y+this.scale.z)/3),q=m*m,m=new n;if(h.isBufferGeometry){var l=h.index,h=h.attributes.position.array;if(null!==l)for(var p=l.array,l=0,r=p.length;l<r;l++){var U=p[l];m.fromArray(h,3*U);f(m,U)}else for(l=0,p=h.length/3;l<p;l++)m.fromArray(h,3*l),f(m,l)}else for(m=h.vertices,l=0,p=m.length;l<p;l++)f(m[l],l)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});
    Bc.prototype=Object.assign(Object.create(z.prototype),{constructor:Bc});pd.prototype=Object.create(ca.prototype);pd.prototype.constructor=pd;Mb.prototype=Object.create(ca.prototype);Mb.prototype.constructor=Mb;Mb.prototype.isCompressedTexture=!0;qd.prototype=Object.create(ca.prototype);qd.prototype.constructor=qd;Cc.prototype=Object.create(ca.prototype);Cc.prototype.constructor=Cc;Cc.prototype.isDepthTexture=!0;Nb.prototype=Object.create(F.prototype);Nb.prototype.constructor=Nb;Dc.prototype=Object.create(I.prototype);
    Dc.prototype.constructor=Dc;Ob.prototype=Object.create(F.prototype);Ob.prototype.constructor=Ob;Ec.prototype=Object.create(I.prototype);Ec.prototype.constructor=Ec;ia.prototype=Object.create(F.prototype);ia.prototype.constructor=ia;Fc.prototype=Object.create(I.prototype);Fc.prototype.constructor=Fc;Pb.prototype=Object.create(ia.prototype);Pb.prototype.constructor=Pb;Gc.prototype=Object.create(I.prototype);Gc.prototype.constructor=Gc;lb.prototype=Object.create(ia.prototype);lb.prototype.constructor=
        lb;Hc.prototype=Object.create(I.prototype);Hc.prototype.constructor=Hc;Qb.prototype=Object.create(ia.prototype);Qb.prototype.constructor=Qb;Ic.prototype=Object.create(I.prototype);Ic.prototype.constructor=Ic;Rb.prototype=Object.create(ia.prototype);Rb.prototype.constructor=Rb;Jc.prototype=Object.create(I.prototype);Jc.prototype.constructor=Jc;Sb.prototype=Object.create(F.prototype);Sb.prototype.constructor=Sb;Kc.prototype=Object.create(I.prototype);Kc.prototype.constructor=Kc;Tb.prototype=Object.create(F.prototype);
    Tb.prototype.constructor=Tb;Lc.prototype=Object.create(I.prototype);Lc.prototype.constructor=Lc;Ub.prototype=Object.create(F.prototype);Ub.prototype.constructor=Ub;var ya={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,k;if(0<ya.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var m=2*c;for(h=c-1;2<c;){if(0>=m--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
        break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);k=h+1;c<=k&&(k=0);var l;a:{var n,p,r,U,t,y,x,v;n=a[e[g]].x;p=a[e[g]].y;r=a[e[h]].x;U=a[e[h]].y;t=a[e[k]].x;y=a[e[k]].y;if(0>=(r-n)*(y-p)-(U-p)*(t-n))l=!1;else{var K,w,z,B,C,H,D,E,F,L;K=t-r;w=y-U;z=n-t;B=p-y;C=r-n;H=U-p;for(l=0;l<c;l++)if(x=a[e[l]].x,v=a[e[l]].y,!(x===n&&v===p||x===r&&v===U||x===t&&v===y)&&(D=x-n,E=v-p,F=x-r,L=v-U,x-=t,v-=y,F=K*L-w*F,D=C*E-H*D,E=z*v-B*x,F>=-Number.EPSILON&&E>=-Number.EPSILON&&D>=-Number.EPSILON)){l=!1;break a}l=!0}}if(l){d.push([a[e[g]],
        a[e[h]],a[e[k]]]);f.push([e[g],e[h],e[k]]);g=h;for(k=h+1;k<c;g++,k++)e[g]=e[k];c--;m=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,m=e.y-c.y,l=a.x-c.x,q=a.y-c.y,p=h*k-g*m,n=h*l-g*q;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>n||n>p)return[];k=m*l-k*
        q;if(0>k||k>p)return[]}else{if(0<n||n<p)return[];k=m*l-k*q;if(0<k||k<p)return[]}if(0===k)return!f||0!==n&&n!==p?[a]:[];if(k===p)return!f||0!==n&&n!==p?[b]:[];if(0===n)return[c];if(n===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==n||m*l!==k*q)return[];h=0===g&&0===h;k=0===k&&0===m;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):
        (a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,k,m,l,n={};k=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(k,b[g]);g=0;for(h=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                k.length;g<h;g++)l=k[g].x+":"+k[g].y,void 0!==n[l]&&console.warn("THREE.ShapeUtils: Duplicate point",l,g),n[l]=g;g=function(a,b){function c(a,b){var d=h.length-1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,k;for(d=0;d<m.length;d++)for(f=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        b[m[d]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,m=[],l,q,p,n,u,z=[],D,B,F,G=0;for(l=b.length;G<l;G++)m.push(G);D=0;for(var R=2*m.length;0<m.length;){R--;if(0>R){console.log("Infinite Loop! Holes left:"+m.length+", Probably Hole outside Shape!");break}for(q=D;q<h.length;q++){p=h[q];l=-1;for(G=0;G<m.length;G++)if(n=m[G],u=p.x+":"+p.y+":"+n,void 0===z[u]){k=b[n];for(B=0;B<k.length;B++)if(n=k[B],c(q,B)&&!d(p,n)&&!g(p,n)){l=B;m.splice(G,
        1);D=h.slice(0,q+1);n=h.slice(q);B=k.slice(l);F=k.slice(0,l+1);h=D.concat(B).concat(F).concat(n);D=q;break}if(0<=l)break;z[u]=!0}if(0<=l)break}}return h}(a,b);var p=ya.triangulate(g,!1);g=0;for(h=p.length;g<h;g++)for(m=p[g],k=0;3>k;k++)l=m[k].x+":"+m[k].y,l=n[l],void 0!==l&&(m[k]=l);return p.concat()},isClockWise:function(a){return 0>ya.area(a)}};cb.prototype=Object.create(I.prototype);cb.prototype.constructor=cb;Ea.prototype=Object.create(F.prototype);Ea.prototype.constructor=Ea;Ea.prototype.getArrays=
        function(){var a=this.getAttribute("position"),a=a?Array.prototype.slice.call(a.array):[],b=this.getAttribute("uv"),b=b?Array.prototype.slice.call(b.array):[],c=this.index,c=c?Array.prototype.slice.call(c.array):[];return{position:a,uv:b,index:c}};Ea.prototype.addShapeList=function(a,b){var c=a.length;b.arrays=this.getArrays();for(var d=0;d<c;d++)this.addShape(a[d],b);this.setIndex(b.arrays.index);this.addAttribute("position",new B(b.arrays.position,3));this.addAttribute("uv",new B(b.arrays.uv,2))};
    Ea.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(d*d+g*g),h=b.x-f/k;b=b.y+e/k;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=d*d+e*e;if(2>=f)return new D(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&
        (a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new D(d/f,e/f)}function e(a,b){var c,d;for(O=a.length;0<=--O;){c=O;d=O-1;0>d&&(d=a.length-1);var e,f=z+2*y;for(e=0;e<f;e++){var g=aa*e,m=aa*(e+1),p=b+d+g,n=b+d+m,m=b+c+m;h(b+c+g);h(p);h(m);h(p);h(n);h(m);g=l.length/3;g=C.generateSideWallUV(Z,l,g-6,g-3,g-2,g-1);k(g[0]);k(g[1]);k(g[3]);k(g[1]);k(g[2]);k(g[3])}}}function f(a,b,c){r.push(a);r.push(b);r.push(c)}
        function g(a,b,c){h(a);h(b);h(c);a=l.length/3;a=C.generateTopUV(Z,l,a-3,a-2,a-1);k(a[0]);k(a[1]);k(a[2])}function h(a){u.push(l.length/3);l.push(r[3*a+0]);l.push(r[3*a+1]);l.push(r[3*a+2])}function k(a){p.push(a.x);p.push(a.y)}var m=b.arrays?b.arrays:this.getArrays(),l=m.position,u=m.index,p=m.uv,r=[],m=void 0!==b.amount?b.amount:100,U=void 0!==b.bevelThickness?b.bevelThickness:6,t=void 0!==b.bevelSize?b.bevelSize:U-2,y=void 0!==b.bevelSegments?b.bevelSegments:3,x=void 0!==b.bevelEnabled?b.bevelEnabled:
            !0,v=void 0!==b.curveSegments?b.curveSegments:12,z=void 0!==b.steps?b.steps:1,w=b.extrudePath,J,F=!1,C=void 0!==b.UVGenerator?b.UVGenerator:cb.WorldUVGenerator,H,G,E,R;w&&(J=w.getSpacedPoints(z),F=!0,x=!1,H=void 0!==b.frames?b.frames:w.computeFrenetFrames(z,!1),G=new n,E=new n,R=new n);x||(t=U=y=0);var L,I,T,Z=this,w=a.extractPoints(v),v=w.shape,P=w.holes;if(!ya.isClockWise(v))for(v=v.reverse(),I=0,T=P.length;I<T;I++)L=P[I],ya.isClockWise(L)&&(P[I]=L.reverse());var M=ya.triangulateShape(v,P),W=v;
        I=0;for(T=P.length;I<T;I++)L=P[I],v=v.concat(L);var ba,S,N,Y,Q,aa=v.length,V,ca=M.length,w=[],O=0;N=W.length;ba=N-1;for(S=O+1;O<N;O++,ba++,S++)ba===N&&(ba=0),S===N&&(S=0),w[O]=d(W[O],W[ba],W[S]);var ja=[],ga,ia=w.concat();I=0;for(T=P.length;I<T;I++){L=P[I];ga=[];O=0;N=L.length;ba=N-1;for(S=O+1;O<N;O++,ba++,S++)ba===N&&(ba=0),S===N&&(S=0),ga[O]=d(L[O],L[ba],L[S]);ja.push(ga);ia=ia.concat(ga)}for(ba=0;ba<y;ba++){N=ba/y;Y=U*Math.cos(N*Math.PI/2);S=t*Math.sin(N*Math.PI/2);O=0;for(N=W.length;O<N;O++)Q=
            c(W[O],w[O],S),f(Q.x,Q.y,-Y);I=0;for(T=P.length;I<T;I++)for(L=P[I],ga=ja[I],O=0,N=L.length;O<N;O++)Q=c(L[O],ga[O],S),f(Q.x,Q.y,-Y)}S=t;for(O=0;O<aa;O++)Q=x?c(v[O],ia[O],S):v[O],F?(E.copy(H.normals[0]).multiplyScalar(Q.x),G.copy(H.binormals[0]).multiplyScalar(Q.y),R.copy(J[0]).add(E).add(G),f(R.x,R.y,R.z)):f(Q.x,Q.y,0);for(N=1;N<=z;N++)for(O=0;O<aa;O++)Q=x?c(v[O],ia[O],S):v[O],F?(E.copy(H.normals[N]).multiplyScalar(Q.x),G.copy(H.binormals[N]).multiplyScalar(Q.y),R.copy(J[N]).add(E).add(G),f(R.x,R.y,
            R.z)):f(Q.x,Q.y,m/z*N);for(ba=y-1;0<=ba;ba--){N=ba/y;Y=U*Math.cos(N*Math.PI/2);S=t*Math.sin(N*Math.PI/2);O=0;for(N=W.length;O<N;O++)Q=c(W[O],w[O],S),f(Q.x,Q.y,m+Y);I=0;for(T=P.length;I<T;I++)for(L=P[I],ga=ja[I],O=0,N=L.length;O<N;O++)Q=c(L[O],ga[O],S),F?f(Q.x,Q.y+J[z-1].y,J[z-1].x+Y):f(Q.x,Q.y,m+Y)}(function(){var a=l.length/3;if(x){var c=0*aa;for(O=0;O<ca;O++)V=M[O],g(V[2]+c,V[1]+c,V[0]+c);c=aa*(z+2*y);for(O=0;O<ca;O++)V=M[O],g(V[0]+c,V[1]+c,V[2]+c)}else{for(O=0;O<ca;O++)V=M[O],g(V[2],V[1],V[0]);
            for(O=0;O<ca;O++)V=M[O],g(V[0]+aa*z,V[1]+aa*z,V[2]+aa*z)}Z.addGroup(a,l.length/3-a,void 0!==b.material?b.material:0)})();(function(){var a=l.length/3,c=0;e(W,c);c+=W.length;I=0;for(T=P.length;I<T;I++)L=P[I],e(L,c),c+=L.length;Z.addGroup(a,l.length/3-a,void 0!==b.extrudeMaterial?b.extrudeMaterial:1)})();b.arrays||(this.setIndex(u),this.addAttribute("position",new B(l,3)),this.addAttribute("uv",new B(b.arrays.uv,2)))};cb.WorldUVGenerator={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=
        b[3*e];e=b[3*e+1];return[new D(b[3*c],b[3*c+1]),new D(a,d),new D(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],k=b[3*d+1];d=b[3*d+2];var m=b[3*e],l=b[3*e+1];e=b[3*e+2];var n=b[3*f],p=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-k)?[new D(a,1-c),new D(h,1-d),new D(m,1-e),new D(n,1-b)]:[new D(g,1-c),new D(k,1-d),new D(l,1-e),new D(p,1-b)]}};Mc.prototype=Object.create(I.prototype);Mc.prototype.constructor=Mc;Vb.prototype=Object.create(Ea.prototype);Vb.prototype.constructor=
        Vb;Nc.prototype=Object.create(I.prototype);Nc.prototype.constructor=Nc;mb.prototype=Object.create(F.prototype);mb.prototype.constructor=mb;Oc.prototype=Object.create(I.prototype);Oc.prototype.constructor=Oc;Wb.prototype=Object.create(F.prototype);Wb.prototype.constructor=Wb;Pc.prototype=Object.create(I.prototype);Pc.prototype.constructor=Pc;Xb.prototype=Object.create(F.prototype);Xb.prototype.constructor=Xb;Yb.prototype=Object.create(I.prototype);Yb.prototype.constructor=Yb;Zb.prototype=Object.create(F.prototype);
    Zb.prototype.constructor=Zb;$b.prototype=Object.create(F.prototype);$b.prototype.constructor=$b;nb.prototype=Object.create(I.prototype);nb.prototype.constructor=nb;Va.prototype=Object.create(F.prototype);Va.prototype.constructor=Va;Qc.prototype=Object.create(nb.prototype);Qc.prototype.constructor=Qc;Rc.prototype=Object.create(Va.prototype);Rc.prototype.constructor=Rc;Sc.prototype=Object.create(I.prototype);Sc.prototype.constructor=Sc;ac.prototype=Object.create(F.prototype);ac.prototype.constructor=
        ac;var La=Object.freeze({WireframeGeometry:Nb,ParametricGeometry:Dc,ParametricBufferGeometry:Ob,TetrahedronGeometry:Fc,TetrahedronBufferGeometry:Pb,OctahedronGeometry:Gc,OctahedronBufferGeometry:lb,IcosahedronGeometry:Hc,IcosahedronBufferGeometry:Qb,DodecahedronGeometry:Ic,DodecahedronBufferGeometry:Rb,PolyhedronGeometry:Ec,PolyhedronBufferGeometry:ia,TubeGeometry:Jc,TubeBufferGeometry:Sb,TorusKnotGeometry:Kc,TorusKnotBufferGeometry:Tb,TorusGeometry:Lc,TorusBufferGeometry:Ub,TextGeometry:Mc,TextBufferGeometry:Vb,
        SphereGeometry:Nc,SphereBufferGeometry:mb,RingGeometry:Oc,RingBufferGeometry:Wb,PlaneGeometry:wc,PlaneBufferGeometry:kb,LatheGeometry:Pc,LatheBufferGeometry:Xb,ShapeGeometry:Yb,ShapeBufferGeometry:Zb,ExtrudeGeometry:cb,ExtrudeBufferGeometry:Ea,EdgesGeometry:$b,ConeGeometry:Qc,ConeBufferGeometry:Rc,CylinderGeometry:nb,CylinderBufferGeometry:Va,CircleGeometry:Sc,CircleBufferGeometry:ac,BoxGeometry:Hb,BoxBufferGeometry:jb});bc.prototype=Object.create(Da.prototype);bc.prototype.constructor=bc;bc.prototype.isShadowMaterial=
        !0;cc.prototype=Object.create(Da.prototype);cc.prototype.constructor=cc;cc.prototype.isRawShaderMaterial=!0;Qa.prototype=Object.create(Q.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isMeshStandardMaterial=!0;Qa.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=
        a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;
        this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};ob.prototype=Object.create(Qa.prototype);ob.prototype.constructor=ob;ob.prototype.isMeshPhysicalMaterial=!0;ob.prototype.copy=function(a){Qa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=
        a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};sa.prototype=Object.create(Q.prototype);sa.prototype.constructor=sa;sa.prototype.isMeshPhongMaterial=!0;sa.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);
        this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;
        this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};pb.prototype=Object.create(sa.prototype);pb.prototype.constructor=pb;pb.prototype.isMeshToonMaterial=!0;pb.prototype.copy=function(a){sa.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};qb.prototype=Object.create(Q.prototype);qb.prototype.constructor=
        qb;qb.prototype.isMeshNormalMaterial=!0;qb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
    rb.prototype=Object.create(Q.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshLambertMaterial=!0;rb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=
        a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};sb.prototype=Object.create(Q.prototype);sb.prototype.constructor=sb;sb.prototype.isLineDashedMaterial=!0;sb.prototype.copy=function(a){Q.prototype.copy.call(this,
        a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var lg=Object.freeze({ShadowMaterial:bc,SpriteMaterial:bb,RawShaderMaterial:cc,ShaderMaterial:Da,PointsMaterial:Ka,MeshPhysicalMaterial:ob,MeshStandardMaterial:Qa,MeshPhongMaterial:sa,MeshToonMaterial:pb,MeshNormalMaterial:qb,MeshLambertMaterial:rb,MeshDepthMaterial:Za,MeshBasicMaterial:Ma,LineDashedMaterial:sb,LineBasicMaterial:ga,Material:Q}),fd={enabled:!1,files:{},
        add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},za=new Yd;Object.assign(ta.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=fd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],k=!!g[2],g=
        g[3],g=window.decodeURIComponent(g);k&&(g=window.atob(g));try{var m,l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":m=new ArrayBuffer(g.length);for(var n=new Uint8Array(m),k=0;k<g.length;k++)n[k]=g.charCodeAt(k);"blob"===l&&(m=new Blob([m],{type:h}));break;case "document":m=(new DOMParser).parseFromString(g,h);break;case "json":m=JSON.parse(g);break;default:m=g}window.setTimeout(function(){b&&b(m);e.manager.itemEnd(a)},0)}catch(r){window.setTimeout(function(){d&&d(r);
        e.manager.itemEnd(a);e.manager.itemError(a)},0)}}else{var p=new XMLHttpRequest;p.open("GET",a,!0);p.addEventListener("load",function(c){var f=c.target.response;fd.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.FileLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemEnd(a),e.manager.itemError(a))},!1);void 0!==c&&p.addEventListener("progress",function(a){c(a)},!1);p.addEventListener("error",function(b){d&&d(b);e.manager.itemEnd(a);
        e.manager.itemError(a)},!1);void 0!==this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)p.setRequestHeader(h,this.requestHeader[h]);p.send(null)}e.manager.itemStart(a);return p},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=
        a;return this},setMimeType:function(a){this.mimeType=a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});Object.assign(Pe.prototype,{load:function(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Mb;h.image=g;var k=new ta(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");
        if(Array.isArray(a))for(var m=0,l=0,n=a.length;l<n;++l)e(l);else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=
        a;return this}});Object.assign(Zd.prototype,{load:function(a,b,c,d){var e=this,f=new db,g=new ta(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?
        a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Tc.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=fd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml","img");
        c.addEventListener("load",function(){fd.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemEnd(a);e.manager.itemError(a)},!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign($d.prototype,{load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=
        a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new Ya,g=new Tc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(rd.prototype,{load:function(a,b,c,d){var e=new Tc(this.manager);e.setCrossOrigin(this.crossOrigin);e.setPath(this.path);var f=new ca;f.image=e.load(a,function(){var c=0<a.search(/\.(jpg|jpeg)$/)||
        0===a.search(/^data\:image\/jpeg/);f.format=c?1022:1023;f.needsUpdate=!0;void 0!==b&&b(f)},c,d);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});la.prototype=Object.assign(Object.create(z.prototype),{constructor:la,isLight:!0,copy:function(a){z.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=
        this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});sd.prototype=Object.assign(Object.create(la.prototype),{constructor:sd,isHemisphereLight:!0,copy:function(a){la.prototype.copy.call(this,
        a);this.groundColor.copy(a.groundColor);return this}});Object.assign(tb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;
        return a}});td.prototype=Object.assign(Object.create(tb.prototype),{constructor:td,isSpotLightShadow:!0,update:function(a){var b=this.camera,c=2*Y.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height;a=a.distance||b.far;if(c!==b.fov||d!==b.aspect||a!==b.far)b.fov=c,b.aspect=d,b.far=a,b.updateProjectionMatrix()}});ud.prototype=Object.assign(Object.create(la.prototype),{constructor:ud,isSpotLight:!0,copy:function(a){la.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=
        a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});vd.prototype=Object.assign(Object.create(la.prototype),{constructor:vd,isPointLight:!0,copy:function(a){la.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});wd.prototype=Object.assign(Object.create(tb.prototype),{constructor:wd});xd.prototype=Object.assign(Object.create(la.prototype),{constructor:xd,isDirectionalLight:!0,copy:function(a){la.prototype.copy.call(this,
        a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});yd.prototype=Object.assign(Object.create(la.prototype),{constructor:yd,isAmbientLight:!0});zd.prototype=Object.assign(Object.create(la.prototype),{constructor:zd,isRectAreaLight:!0,copy:function(a){la.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=la.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});var ua={arraySlice:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c){return ua.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=
        new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];
    while(void 0!==f)}}}};Object.assign(Ca.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=
        0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=
        c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}});Object.assign(Ca.prototype,{beforeStart_:Ca.prototype.copySampleValue_,afterEnd_:Ca.prototype.copySampleValue_});Ad.prototype=Object.assign(Object.create(Ca.prototype),{constructor:Ad,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=
        a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,n=this._weightNext,
        p=(c-b)/(d-b);c=p*p;d=c*p;b=-l*d+2*l*c-l*p;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*p+1;p=(-1-n)*d+(1.5+n)*c+.5*p;n=n*d-n*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+p*f[a+c]+n*f[m+c];return e}});Uc.prototype=Object.assign(Object.create(Ca.prototype),{constructor:Uc,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Bd.prototype=Object.assign(Object.create(Ca.prototype),{constructor:Bd,
        interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var Xa;Xa={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Bd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new Uc(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Ad(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;
        switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrackPrototype:",b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;
        case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,
        1),e=f-1),d=this.getValueSize(),this.times=ua.arraySlice(c,e,f),this.values=ua.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrackPrototype: Invalid value size in track.",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("THREE.KeyframeTrackPrototype: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.",
        this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrackPrototype: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ua.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,k=a[g];if(k!==a[g+1]&&(1!==g||k!==
        k[0]))if(d)h=!0;else for(var m=g*c,l=m-c,n=m+c,k=0;k!==c;++k){var p=b[m+k];if(p!==b[l+k]||p!==b[n+k]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,k=0;k!==c;++k)b[m+k]=b[h+k];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(k=0;k!==c;++k)b[m+k]=b[h+k];++e}e!==a.length&&(this.times=ua.arraySlice(a,0,e),this.values=ua.arraySlice(b,0,e*c));return this}};dc.prototype=Object.assign(Object.create(Xa),{constructor:dc,ValueTypeName:"vector"});Cd.prototype=Object.assign(Object.create(Ca.prototype),{constructor:Cd,
        interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)pa.slerpFlat(e,0,f,a-g,f,a,b);return e}});Vc.prototype=Object.assign(Object.create(Xa),{constructor:Vc,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Cd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});ec.prototype=Object.assign(Object.create(Xa),{constructor:ec,ValueTypeName:"number"});
    Dd.prototype=Object.assign(Object.create(Xa),{constructor:Dd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Ed.prototype=Object.assign(Object.create(Xa),{constructor:Ed,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Fd.prototype=Object.assign(Object.create(Xa),{constructor:Fd,ValueTypeName:"color"});
    vb.prototype=Xa;Xa.constructor=vb;Object.assign(vb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=vb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];ua.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{var b={name:a.name,times:ua.convertArray(a.times,Array),values:ua.convertArray(a.values,
        Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return ec;case "vector":case "vector2":case "vector3":case "vector4":return dc;case "color":return Fd;case "quaternion":return Vc;case "bool":case "boolean":return Ed;case "string":return Dd}throw Error("Unsupported typeName: "+a);}});Object.assign(Aa,{parse:function(a){for(var b=
        [],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(vb.parse(c[e]).scale(d));return new Aa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(vb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=ua.getKeyframeOrder(h),h=ua.sortedArray(h,1,m),k=ua.sortedArray(k,1,m);d||0!==h[0]||
    (h.push(e),k.push(k[0]));f.push((new ec(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new Aa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var m=k[1];(k=d[m])||(d[m]=k=[]);k.push(h)}}a=[];
        for(m in d)a.push(Aa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ua.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],k=0;k<h.length;k++){var m=h[k].keys;if(m&&0!==m.length)if(m[0].morphTargets){for(var f={},l=0;l<m.length;l++)if(m[l].morphTargets)for(var n=
        0;n<m[l].morphTargets.length;n++)f[m[l].morphTargets[n]]=-1;for(var p in f){for(var r=[],z=[],n=0;n!==m[l].morphTargets.length;++n){var t=m[l];r.push(t.time);z.push(t.morphTarget===p?1:0)}d.push(new ec(".morphTargetInfluence["+p+"]",r,z))}f=f.length*(g||1)}else l=".bones["+b[k].name+"]",c(dc,l+".position",m,"pos",d),c(Vc,l+".quaternion",m,"rot",d),c(dc,l+".scale",m,"scl",d)}return 0===d.length?null:new Aa(e,f,d)}});Object.assign(Aa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==
    c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}});Object.assign(Gd.prototype,{load:function(a,b,c,d){var e=this;(new ta(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},parse:function(a){function b(a){void 0===
    c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new lg[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearCoat&&(d.clearCoat=
        a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);
        void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);
        void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=a.normalScale;!1===Array.isArray(e)&&
        (e=[e,e]);d.normalScale=(new D).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);
        void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));return d}});Object.assign(ae.prototype,{load:function(a,b,c,d){var e=
        this;(new ta(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new F,c=a.data.index;void 0!==c&&(c=new ff[c.type](c.array),b.setIndex(new T(c,1)));var d=a.data.attributes,e;for(e in d){var f=d[e],c=new ff[f.type](f.array);b.addAttribute(e,new T(c,f.itemSize,f.normalized))}e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,d=e.length;c!==d;++c)f=e[c],b.addGroup(f.start,f.count,f.materialIndex);a=a.data.boundingSphere;void 0!==a&&(e=new n,void 0!==
    a.center&&e.fromArray(a.center),b.boundingSphere=new Fa(e,a.radius));return b}});var ff={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};fc.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=
        b[c+1];if(b[c].test(a))return e}return null}};Object.assign(fc.prototype,{crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b=new G,c=new rd,d=new Gd;return function(e,f,g){function h(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b,d,e,h){a=f+a;var m=fc.Handlers.get(a);null!==m?a=m.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=Y.generateUUID();k[b]=a;return b}var k={},m={uuid:Y.generateUUID(),type:"MeshLambertMaterial"},l;for(l in e){var n=e[l];
        switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":m.name=n;break;case "blending":m.blending=a[n];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case "colorDiffuse":m.color=b.fromArray(n).getHex();break;case "colorSpecular":m.specular=b.fromArray(n).getHex();break;case "colorEmissive":m.emissive=b.fromArray(n).getHex();break;case "specularCoef":m.shininess=n;break;case "shading":"basic"===
        n.toLowerCase()&&(m.type="MeshBasicMaterial");"phong"===n.toLowerCase()&&(m.type="MeshPhongMaterial");"standard"===n.toLowerCase()&&(m.type="MeshStandardMaterial");break;case "mapDiffuse":m.map=h(n,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":m.emissiveMap=h(n,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);
            break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;case "mapLight":m.lightMap=h(n,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":m.aoMap=h(n,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":m.bumpMap=
            h(n,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":m.bumpScale=n;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":m.normalMap=h(n,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":m.normalScale=[n,n];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":m.specularMap=
            h(n,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapMetalness":m.metalnessMap=h(n,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":m.roughnessMap=h(n,e.mapRoughnessRepeat,
            e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":m.alphaMap=h(n,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":m.side=1;break;case "doubleSided":m.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
            m.opacity=n;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":m[l]=n;break;case "vertexColors":!0===n&&(m.vertexColors=2);"face"===n&&(m.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,n)}}"MeshBasicMaterial"===m.type&&delete m.emissive;"MeshPhongMaterial"!==m.type&&delete m.specular;1>m.opacity&&(m.transparent=!0);d.setTextures(k);return d.parse(m)}}()});Object.assign(be.prototype,
        {load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:fc.prototype.extractUrlBase(a),g=new ta(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");
            return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(){return function(a,b){void 0!==a.data&&(a=a.data);a.scale=void 0!==a.scale?1/a.scale:1;var c=new I,d=a,e,f,g,h,k,m,l,u,p,r,z,t,y,x,v=d.faces;p=d.vertices;var B=d.normals,w=d.colors;m=d.scale;var J=0;if(void 0!==d.uvs){for(e=0;e<d.uvs.length;e++)d.uvs[e].length&&J++;for(e=0;e<J;e++)c.faceVertexUvs[e]=[]}h=0;for(k=p.length;h<k;)e=new n,e.x=p[h++]*m,e.y=p[h++]*m,e.z=p[h++]*m,c.vertices.push(e);
            h=0;for(k=v.length;h<k;)if(p=v[h++],r=p&1,g=p&2,e=p&8,l=p&16,z=p&32,m=p&64,p&=128,r){r=new Ua;r.a=v[h];r.b=v[h+1];r.c=v[h+3];t=new Ua;t.a=v[h+1];t.b=v[h+2];t.c=v[h+3];h+=4;g&&(g=v[h++],r.materialIndex=g,t.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<J;e++)for(y=d.uvs[e],c.faceVertexUvs[e][g]=[],c.faceVertexUvs[e][g+1]=[],f=0;4>f;f++)u=v[h++],x=y[2*u],u=y[2*u+1],x=new D(x,u),2!==f&&c.faceVertexUvs[e][g].push(x),0!==f&&c.faceVertexUvs[e][g+1].push(x);l&&(l=3*v[h++],r.normal.set(B[l++],B[l++],B[l]),
                t.normal.copy(r.normal));if(z)for(e=0;4>e;e++)l=3*v[h++],z=new n(B[l++],B[l++],B[l]),2!==e&&r.vertexNormals.push(z),0!==e&&t.vertexNormals.push(z);m&&(m=v[h++],m=w[m],r.color.setHex(m),t.color.setHex(m));if(p)for(e=0;4>e;e++)m=v[h++],m=w[m],2!==e&&r.vertexColors.push(new G(m)),0!==e&&t.vertexColors.push(new G(m));c.faces.push(r);c.faces.push(t)}else{r=new Ua;r.a=v[h++];r.b=v[h++];r.c=v[h++];g&&(g=v[h++],r.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<J;e++)for(y=d.uvs[e],c.faceVertexUvs[e][g]=
                [],f=0;3>f;f++)u=v[h++],x=y[2*u],u=y[2*u+1],x=new D(x,u),c.faceVertexUvs[e][g].push(x);l&&(l=3*v[h++],r.normal.set(B[l++],B[l++],B[l]));if(z)for(e=0;3>e;e++)l=3*v[h++],z=new n(B[l++],B[l++],B[l]),r.vertexNormals.push(z);m&&(m=v[h++],r.color.setHex(w[m]));if(p)for(e=0;3>e;e++)m=v[h++],r.vertexColors.push(new G(w[m]));c.faces.push(r)}d=a;h=void 0!==d.influencesPerVertex?d.influencesPerVertex:2;if(d.skinWeights)for(k=0,v=d.skinWeights.length;k<v;k+=h)c.skinWeights.push(new ja(d.skinWeights[k],1<h?d.skinWeights[k+
            1]:0,2<h?d.skinWeights[k+2]:0,3<h?d.skinWeights[k+3]:0));if(d.skinIndices)for(k=0,v=d.skinIndices.length;k<v;k+=h)c.skinIndices.push(new ja(d.skinIndices[k],1<h?d.skinIndices[k+1]:0,2<h?d.skinIndices[k+2]:0,3<h?d.skinIndices[k+3]:0));c.bones=d.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+
                ") should match.");k=a;v=k.scale;if(void 0!==k.morphTargets)for(d=0,h=k.morphTargets.length;d<h;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=k.morphTargets[d].name,c.morphTargets[d].vertices=[],B=c.morphTargets[d].vertices,w=k.morphTargets[d].vertices,J=0,p=w.length;J<p;J+=3)m=new n,m.x=w[J]*v,m.y=w[J+1]*v,m.z=w[J+2]*v,B.push(m);if(void 0!==k.morphColors&&0<k.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),v=c.faces,k=k.morphColors[0].colors,
                                                                                                                                                                                                                                                                                                                                                                                                                            d=0,h=v.length;d<h;d++)v[d].color.fromArray(k,3*d);k=a;d=[];h=[];void 0!==k.animation&&h.push(k.animation);void 0!==k.animations&&(k.animations.length?h=h.concat(k.animations):h.push(k.animations));for(k=0;k<h.length;k++)(v=Aa.parseAnimation(h[k],c.bones))&&d.push(v);c.morphTargets&&(h=Aa.CreateClipsFromMorphTargetSequences(c.morphTargets,10),d=d.concat(h));0<d.length&&(c.animations=d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};
            d=fc.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}}()});Object.assign(Qe.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new ta(e.manager)).load(a,function(c){var g=null;try{g=JSON.parse(c)}catch(h){void 0!==d&&d(h);console.error("THREE:ObjectLoader: Can't parse "+a+".",h.message);return}c=g.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+
        a+". Use THREE.JSONLoader instead."):e.parse(g,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},
        parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new be,d=new ae,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new La[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new La[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=new La[h.type](h.radius,h.segments,h.thetaStart,
            h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new La[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new La[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":g=new La[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,
            h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=new La[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new La[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=new La[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=
            new La[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=new La[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==
            a){var d=new Gd;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=a[e];if("MultiMaterial"===g.type){for(var h=[],k=0;k<g.materials.length;k++)h.push(d.parse(g.materials[k]));c[g.uuid]=h}else c[g.uuid]=d.parse(g)}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=Aa.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemEnd(a);d.manager.itemError(a)})}
            var d=this,e={};if(void 0!==a&&0<a.length){var f=new Yd(b),g=new Tc(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var k=a[f],m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(m)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&
        console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new ca(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,mg));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],gf),h.wrapT=c(g.wrap[1],gf));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,hf));
            void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,hf));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h}return d},parseObject:function(){var a=new R;return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]}function f(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],c=0,e=a.length;c<e;c++){var f=a[c];void 0===d[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(d[f])}return b}void 0===
        d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return d[a]}}var g;switch(b.type){case "Scene":g=new ld;void 0!==b.background&&Number.isInteger(b.background)&&(g.background=new G(b.background));void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Kb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===b.fog.type&&(g.fog=new Jb(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new wa(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==
        b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=new Ib(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=new yd(b.color,b.intensity);break;case "DirectionalLight":g=new xd(b.color,b.intensity);break;case "PointLight":g=new vd(b.color,b.intensity,b.distance,b.decay);break;case "RectAreaLight":g=new zd(b.color,b.intensity,b.width,b.height);break;case "SpotLight":g=
            new ud(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new sd(b.color,b.groundColor,b.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new nd(g,h):new Ba(g,h);break;case "LOD":g=new zc;break;case "Line":g=new xa(e(b.geometry),f(b.material),b.mode);break;case "LineLoop":g=new od(e(b.geometry),f(b.material));break;
            case "LineSegments":g=new V(e(b.geometry),f(b.material));break;case "PointCloud":case "Points":g=new Lb(e(b.geometry),f(b.material));break;case "Sprite":g=new yc(f(b.material));break;case "Group":g=new Bc;break;default:g=new z}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),
        void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=
            b.userData);if(void 0!==b.children)for(var k in b.children)g.add(this.parseObject(b.children[k],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var m=b[h];k=g.getObjectByProperty("uuid",m.object);void 0!==k&&g.addLevel(k,m.distance)}return g}}()});var mg={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},gf={RepeatWrapping:1E3,
        ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},hf={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008};Object.assign(ma.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a){a=this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/
        a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=
        b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);
        return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new n,d=[],e=[],f=[],g=new n,h=new R,k,m;for(k=0;k<=a;k++)m=k/a,d[k]=this.getTangentAt(m),d[k].normalize();e[0]=new n;f[0]=new n;k=Number.MAX_VALUE;m=Math.abs(d[0].x);var l=Math.abs(d[0].y),u=Math.abs(d[0].z);m<=k&&(k=m,c.set(1,0,0));l<=k&&(k=l,c.set(0,1,0));u<=k&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-
    1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(Y.clamp(d[k-1].dot(d[k]),-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(Y.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],c*k)),f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}}});Ra.prototype=Object.create(ma.prototype);Ra.prototype.constructor=Ra;Ra.prototype.isLineCurve=
        !0;Ra.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};Ra.prototype.getPointAt=function(a){return this.getPoint(a)};Ra.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};Wc.prototype=Object.assign(Object.create(ma.prototype),{constructor:Wc,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);
        a.equals(b)||this.curves.push(new Ra(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;
        for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),
        c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){for(var b=new I,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,e.y,e.z||0))}return b}});Wa.prototype=Object.create(ma.prototype);Wa.prototype.constructor=Wa;Wa.prototype.isEllipseCurve=!0;Wa.prototype.getPoint=
        function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new D(a,e)};yb.prototype=Object.create(ma.prototype);yb.prototype.constructor=
        yb;yb.prototype.isSplineCurve=!0;yb.prototype.getPoint=function(a){var b=this.points,c=(b.length-1)*a;a=Math.floor(c);var c=c-a,d=b[0===a?a:a-1],e=b[a],f=b[a>b.length-2?b.length-1:a+1],b=b[a>b.length-3?b.length-1:a+2];return new D(Re(c,d.x,e.x,f.x,b.x),Re(c,d.y,e.y,f.y,b.y))};gc.prototype=Object.create(ma.prototype);gc.prototype.constructor=gc;gc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new D(xb(a,b.x,c.x,d.x,e.x),xb(a,b.y,c.y,d.y,e.y))};hc.prototype=Object.create(ma.prototype);
    hc.prototype.constructor=hc;hc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new D(wb(a,b.x,c.x,d.x),wb(a,b.y,c.y,d.y))};var te=Object.assign(Object.create(Wc.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Ra(this.currentPoint.clone(),new D(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b,c,d){a=new hc(this.currentPoint.clone(),new D(a,b),new D(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new gc(this.currentPoint.clone(),new D(a,b),new D(c,d),new D(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),b=new yb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Wa(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)}});Xc.prototype=te;te.constructor=Xc;zb.prototype=Object.assign(Object.create(te),{constructor:zb,getPointsHoles:function(a){for(var b=
        [],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});Object.assign(ce.prototype,{moveTo:function(a,b){this.currentPath=new Xc;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new zb;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,m=h.y-g.y;if(Math.abs(m)>Number.EPSILON){if(0>m&&(g=b[f],k=-k,h=b[e],m=-m),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=m*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;
        0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=ya.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,k,m=[];if(1===f.length)return h=f[0],k=new zb,k.curves=h.curves,m.push(k),m;var l=!e(f[0].getPoints()),l=a?!l:l;k=[];var n=[],p=[],r=0,z;n[r]=void 0;p[r]=[];for(var t=0,y=f.length;t<y;t++)h=f[t],z=h.getPoints(),g=e(z),(g=a?!g:g)?(!l&&n[r]&&r++,n[r]={s:new zb,p:z},n[r].s.curves=h.curves,l&&r++,p[r]=[]):p[r].push({h:h,
        p:z[0]});if(!n[0])return c(f);if(1<n.length){t=!1;h=[];e=0;for(f=n.length;e<f;e++)k[e]=[];e=0;for(f=n.length;e<f;e++)for(g=p[e],l=0;l<g.length;l++){r=g[l];z=!0;for(y=0;y<n.length;y++)d(r.p,n[y].p)&&(e!==y&&h.push({froms:e,tos:y,hole:l}),z?(z=!1,k[y].push(r)):t=!0);z&&k[e].push(r)}0<h.length&&(t||(p=k))}t=0;for(e=n.length;t<e;t++)for(k=n[t].s,m.push(k),h=p[t],f=0,g=h.length;f<g;f++)k.holes.push(h[f].h);return m}});Object.assign(de.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=
        100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=(d.boundingBox.yMax-d.boundingBox.yMin+d.underlineThickness)*e,g=0,h=0;b=[];for(var k=0;k<a.length;k++){var m=a[k];if("\n"===m)g=0,h-=f;else{var l;l=e;var n=g,p=h;if(m=d.glyphs[m]||d.glyphs["?"]){var r=new ce,z=[],t,y,x,v,B,w,D,F;if(m.o)for(var C=m._cachedOutline||(m._cachedOutline=m.o.split(" ")),H=0,G=C.length;H<G;)switch(C[H++]){case "m":t=C[H++]*l+n;y=C[H++]*l+p;r.moveTo(t,y);break;case "l":t=C[H++]*l+n;y=C[H++]*
        l+p;r.lineTo(t,y);break;case "q":t=C[H++]*l+n;y=C[H++]*l+p;B=C[H++]*l+n;w=C[H++]*l+p;r.quadraticCurveTo(B,w,t,y);if(v=z[z.length-1]){x=v.x;v=v.y;for(var E=1;E<=c;E++){var I=E/c;wb(I,x,B,t);wb(I,v,w,y)}}break;case "b":if(t=C[H++]*l+n,y=C[H++]*l+p,B=C[H++]*l+n,w=C[H++]*l+p,D=C[H++]*l+n,F=C[H++]*l+p,r.bezierCurveTo(B,w,D,F,t,y),v=z[z.length-1])for(x=v.x,v=v.y,E=1;E<=c;E++)I=E/c,xb(I,x,B,D,t),xb(I,v,w,F,y)}l={offsetX:m.ha*l,path:r}}else l=void 0;g+=l.offsetX;b.push(l.path)}}c=[];d=0;for(a=b.length;d<
    a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}});Object.assign(Se.prototype,{load:function(a,b,c,d){var e=this;(new ta(this.manager)).load(a,function(a){var c;try{c=JSON.parse(a)}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new de(a)}});var Nd,he={getContext:function(){void 0===Nd&&(Nd=new (window.AudioContext||window.webkitAudioContext));
        return Nd},setContext:function(a){Nd=a}};Object.assign(ee.prototype,{load:function(a,b,c,d){var e=new ta(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){he.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Object.assign(Te.prototype,{update:function(){var a,b,c,d,e,f,g,h,k=new R,l=new R;return function(n){if(a!==this||b!==n.focus||c!==n.fov||d!==n.aspect*this.aspect||e!==n.near||f!==n.far||g!==n.zoom||h!==this.eyeSep){a=this;b=n.focus;c=n.fov;d=n.aspect*this.aspect;e=
        n.near;f=n.far;g=n.zoom;var u=n.projectionMatrix.clone();h=this.eyeSep/2;var p=h*e/b,r=e*Math.tan(Y.DEG2RAD*c*.5)/g,z,t;l.elements[12]=-h;k.elements[12]=h;z=-r*d+p;t=r*d+p;u.elements[0]=2*e/(t-z);u.elements[8]=(t+z)/(t-z);this.cameraL.projectionMatrix.copy(u);z=-r*d-p;t=r*d-p;u.elements[0]=2*e/(t-z);u.elements[8]=(t+z)/(t-z);this.cameraR.projectionMatrix.copy(u)}this.cameraL.matrixWorld.copy(n.matrixWorld).multiply(l);this.cameraR.matrixWorld.copy(n.matrixWorld).multiply(k)}}()});Hd.prototype=Object.create(z.prototype);
    Hd.prototype.constructor=Hd;fe.prototype=Object.assign(Object.create(wa.prototype),{constructor:fe,isArrayCamera:!0});ge.prototype=Object.assign(Object.create(z.prototype),{constructor:ge,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new n,b=new pa,c=new n,d=new n;return function(e){z.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,
        0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,
        this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});ic.prototype=Object.assign(Object.create(z.prototype),{constructor:ic,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");
    else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,this.startTime);a.start(0,this.startTime);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),
        this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());
        return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},
        setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),
            !1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.value=a;return this}});ie.prototype=Object.assign(Object.create(ic.prototype),{constructor:ie,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=
        a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a},updateMatrixWorld:function(){var a=new n;return function(b){z.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,
        a.y,a.z)}}()});Object.assign(je.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(ke.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=
        this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){pa.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});Object.assign(Ue.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(na,{Composite:Ue,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new na.Composite(a,b,c):new na(a,b,c)},parseTrackName:function(){var a=new RegExp("^"+/((?:[\w-]+[\/:])*)/.source+/([\w-\.]+)?/.source+/(?:\.([\w-]+)(?:\[(.+)\])?)?/.source+/\.([\w-]+)(?:\[(.+)\])?/.source+"$"),b=["material","materials","bones"];return function(c){var d=
        a.exec(c);if(!d)throw Error("PropertyBinding: Cannot parse trackName: "+c);var d={nodeName:d[2],objectName:d[3],objectIndex:d[4],propertyName:d[5],propertyIndex:d[6]},e=d.nodeName&&d.nodeName.lastIndexOf(".");if(void 0!==e&&-1!==e){var f=d.nodeName.substring(e+1);-1!==b.indexOf(f)&&(d.nodeName=d.nodeName.substring(0,e),d.objectName=f)}if(null===d.propertyName||0===d.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+c);return d}}(),findNode:function(a,b){if(!b||
        ""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null}});Object.assign(na.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,
        EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];
        this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=
        a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=na.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
        this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
        this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
        this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
        this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+
        this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});Object.assign(na.prototype,{_getValue_unbound:na.prototype.getValue,_setValue_unbound:na.prototype.setValue});Object.assign(Ve.prototype,{isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,k=h.length,l=0,n=arguments.length;l!==n;++l){var u=
        arguments[l],p=u.uuid,r=e[p];if(void 0===r){r=c++;e[p]=r;b.push(u);for(var p=0,z=k;p!==z;++p)h[p].push(new na(u,f[p],g[p]))}else if(r<d){var t=--d,z=b[t];e[z.uuid]=r;b[r]=z;e[p]=t;b[t]=u;p=0;for(z=k;p!==z;++p){var y=h[p],x=y[r];y[r]=y[t];void 0===x&&(x=new na(u,f[p],g[p]));y[t]=x}}else void 0!==b[r]&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=d},remove:function(a){for(var b=
        this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g],l=k.uuid,n=d[l];if(void 0!==n&&n>=c){var u=c++,p=b[u];d[p.uuid]=n;b[n]=p;d[l]=u;b[u]=k;k=0;for(l=f;k!==l;++k){var p=e[k],r=p[n];p[n]=p[u];p[u]=r}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,k=arguments.length;h!==k;++h){var l=arguments[h].uuid,n=e[l];
        if(void 0!==n)if(delete e[l],n<d){var l=--d,u=b[l],p=--c,r=b[p];e[u.uuid]=n;b[n]=u;e[r.uuid]=l;b[l]=r;b.pop();u=0;for(r=g;u!==r;++u){var z=f[u],t=z[p];z[n]=z[l];z[l]=t;z.pop()}}else for(p=--c,r=b[p],e[r.uuid]=n,b[n]=r,b.pop(),u=0,r=g;u!==r;++u)z=f[u],z[n]=z[p],z.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length),d=e.length;
        c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new na(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(We.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=
        !1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?
        a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=
        null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
        this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],
        b=b*d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===
        d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?
        c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});Object.assign(Xe.prototype,ra.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,k=this._bindingsByRootAndName,l=k[h];void 0===l&&(l={},k[h]=l);for(k=0;k!==e;++k){var n=d[k],u=n.name,p=l[u];if(void 0===
        p){p=f[k];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,h,u));continue}p=new ke(na.create(c,u,b&&b._propertyBindings[k].binding.parsedPath),n.ValueTypeName,n.getValueSize());++p.referenceCount;this._addInactiveBinding(p,h,u)}f[k]=p;g[k].resultBuffer=p.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,
        c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=
        0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},
        _addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var b=a._clip.uuid,c=this._actionsByClip,d=c[b],e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;
            f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=
            this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;
            delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new Uc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?Aa.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===
        e&&(e=g._clip)}if(null===e)return null;e=new We(this,e,b);this._bindAction(e,g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?Aa.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=
            0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=
            g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,
            b);null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}});Id.prototype.clone=function(){return new Id(void 0===this.value.clone?this.value:this.value.clone())};le.prototype=Object.assign(Object.create(F.prototype),{constructor:le,isInstancedBufferGeometry:!0,addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c})},copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this}});Object.defineProperties(me.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(me.prototype,{isInterleavedBufferAttribute:!0,setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+
    this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+
    1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});Object.defineProperty(jc.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(jc.prototype,{isInterleavedBuffer:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
        a;return this}});ne.prototype=Object.assign(Object.create(jc.prototype),{constructor:ne,isInstancedInterleavedBuffer:!0,copy:function(a){jc.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});oe.prototype=Object.assign(Object.create(T.prototype),{constructor:oe,isInstancedBufferAttribute:!0,copy:function(a){T.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(Ye.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,
        b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];pe(a,this,c,b);c.sort(Ze);return c},intersectObjects:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)pe(a[d],this,c,b);c.sort(Ze);return c}});Object.assign($e.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=
        0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});Object.assign(af.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-
        1E-6,this.phi));return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(Y.clamp(a.y/this.radius,-1,1)));return this}});Object.assign(bf.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*
        a.x+a.z*a.z);this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}});qa.prototype=Object.create(Ba.prototype);qa.prototype.constructor=qa;qa.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};qa.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<
    g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};qa.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};qa.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};qa.prototype.setAnimationFPS=
        function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};qa.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};qa.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};qa.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};qa.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};qa.prototype.getAnimationDuration=
        function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};qa.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};qa.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};qa.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>
        d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+Y.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==
    d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};Yc.prototype=Object.create(z.prototype);Yc.prototype.constructor=Yc;Yc.prototype.isImmediateRenderObject=!0;Zc.prototype=Object.create(V.prototype);Zc.prototype.constructor=Zc;Zc.prototype.update=function(){var a=new n,b=new n,c=new Ja;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);
        var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,k=g.faces,l=g=0,n=k.length;l<n;l++)for(var u=k[l],p=0,r=u.vertexNormals.length;p<r;p++){var z=u.vertexNormals[p];a.copy(h[u[d[p]]]).applyMatrix4(e);b.copy(z).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,p=g=0,r=d.count;p<
        r;p++)a.set(d.getX(p),d.getY(p),d.getZ(p)).applyMatrix4(e),b.set(h.getX(p),h.getY(p),h.getZ(p)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0}}();kc.prototype=Object.create(z.prototype);kc.prototype.constructor=kc;kc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};kc.prototype.update=function(){var a=new n,b=new n;return function(){this.light.updateMatrixWorld();var c=
        this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color)}}();lc.prototype=Object.create(V.prototype);lc.prototype.constructor=lc;lc.prototype.onBeforeRender=function(){var a=new n,b=new R,c=new R;return function(){var d=this.bones,e=this.geometry,f=e.getAttribute("position");c.getInverse(this.root.matrixWorld);
        for(var g=0,h=0;g<d.length;g++){var k=d[g];k.parent&&k.parent.isBone&&(b.multiplyMatrices(c,k.matrixWorld),a.setFromMatrixPosition(b),f.setXYZ(h,a.x,a.y,a.z),b.multiplyMatrices(c,k.parent.matrixWorld),a.setFromMatrixPosition(b),f.setXYZ(h+1,a.x,a.y,a.z),h+=2)}e.getAttribute("position").needsUpdate=!0}}();mc.prototype=Object.create(Ba.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};mc.prototype.update=function(){this.material.color.copy(this.light.color)};
    nc.prototype=Object.create(z.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};nc.prototype.update=function(){var a=this.children[0];a.material.color.copy(this.light.color);var b=.5*this.light.width,c=.5*this.light.height,a=a.geometry.attributes.position,d=a.array;d[0]=b;d[1]=-c;d[2]=0;d[3]=b;d[4]=c;d[5]=0;d[6]=-b;d[7]=c;d[8]=0;d[9]=-b;d[10]=-c;d[11]=0;d[12]=b;d[13]=-c;d[14]=0;a.needsUpdate=!0};oc.prototype=
        Object.create(z.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};oc.prototype.update=function(){var a=new n,b=new G,c=new G;return function(){var d=this.children[0],e=d.geometry.getAttribute("color");b.copy(this.light.color);c.copy(this.light.groundColor);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());e.needsUpdate=
        !0}}();$c.prototype=Object.create(V.prototype);$c.prototype.constructor=$c;Jd.prototype=Object.create(V.prototype);Jd.prototype.constructor=Jd;ad.prototype=Object.create(V.prototype);ad.prototype.constructor=ad;ad.prototype.update=function(){var a=new n,b=new n,c=new Ja;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<
    l;k++){var n=f[k],u=n.normal;a.copy(g[n.a]).add(g[n.b]).add(g[n.c]).divideScalar(3).applyMatrix4(d);b.copy(u).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0}}();pc.prototype=Object.create(z.prototype);pc.prototype.constructor=pc;pc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};pc.prototype.update=function(){var a=
        new n,b=new n,c=new n;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color);e.lookAt(c);e.scale.z=c.length()}}();bd.prototype=Object.create(V.prototype);bd.prototype.constructor=bd;bd.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,k=a.length;h<
    k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new n,e=new Na;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=
        !0}}();Ab.prototype=Object.create(V.prototype);Ab.prototype.constructor=Ab;Ab.prototype.update=function(){var a=new Sa;return function(b){void 0!==b&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&a.setFromObject(this.object);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;
        e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();Ab.prototype.setFromObject=function(a){this.object=a;this.update();return this};var Kd,qe;Bb.prototype=Object.create(z.prototype);Bb.prototype.constructor=Bb;Bb.prototype.setDirection=function(){var a=new n,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,
        b))}}();Bb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Bb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};Ld.prototype=Object.create(V.prototype);Ld.prototype.constructor=Ld;var Od=new n,ue=new re,ve=new re,we=new re;Ia.prototype=Object.create(ma.prototype);Ia.prototype.constructor=
        Ia;Ia.prototype.getPoint=function(a){var b=this.points,c=b.length;a*=c-(this.closed?0:1);var d=Math.floor(a);a-=d;this.closed?d+=0<d?0:(Math.floor(Math.abs(d)/b.length)+1)*b.length:0===a&&d===c-1&&(d=c-2,a=1);var e,f,g;this.closed||0<d?e=b[(d-1)%c]:(Od.subVectors(b[0],b[1]).add(b[0]),e=Od);f=b[d%c];g=b[(d+1)%c];this.closed||d+2<c?b=b[(d+2)%c]:(Od.subVectors(b[c-1],b[c-2]).add(b[c-1]),b=Od);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var h="chordal"===this.type?.5:.25,
        c=Math.pow(e.distanceToSquared(f),h),d=Math.pow(f.distanceToSquared(g),h),h=Math.pow(g.distanceToSquared(b),h);1E-4>d&&(d=1);1E-4>c&&(c=d);1E-4>h&&(h=d);ue.initNonuniformCatmullRom(e.x,f.x,g.x,b.x,c,d,h);ve.initNonuniformCatmullRom(e.y,f.y,g.y,b.y,c,d,h);we.initNonuniformCatmullRom(e.z,f.z,g.z,b.z,c,d,h)}else"catmullrom"===this.type&&(c=void 0!==this.tension?this.tension:.5,ue.initCatmullRom(e.x,f.x,g.x,b.x,c),ve.initCatmullRom(e.y,f.y,g.y,b.y,c),we.initCatmullRom(e.z,f.z,g.z,b.z,c));return new n(ue.calc(a),
        ve.calc(a),we.calc(a))};cd.prototype=Object.create(ma.prototype);cd.prototype.constructor=cd;cd.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new n(xb(a,b.x,c.x,d.x,e.x),xb(a,b.y,c.y,d.y,e.y),xb(a,b.z,c.z,d.z,e.z))};dd.prototype=Object.create(ma.prototype);dd.prototype.constructor=dd;dd.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new n(wb(a,b.x,c.x,d.x),wb(a,b.y,c.y,d.y),wb(a,b.z,c.z,d.z))};ed.prototype=Object.create(ma.prototype);ed.prototype.constructor=
        ed;ed.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=new n;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b};Md.prototype=Object.create(Wa.prototype);Md.prototype.constructor=Md;ma.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(ma.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};df.prototype=Object.create(Ia.prototype);ef.prototype=Object.create(Ia.prototype);se.prototype=Object.create(Ia.prototype);
    Object.assign(se.prototype,{initFromArray:function(a){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(a){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(a){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});$c.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};lc.prototype.update=
        function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(gd.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");
        return this.getSize(a)}});Object.assign(Sa.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
        return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});Gb.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Y.random16=function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()};Object.assign(Ja.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
        return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(R.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new n);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
        return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},
        rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},
        applyToVector3Array:function(a,b,c){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f)}});va.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};pa.prototype.multiplyVector3=
        function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(gb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
        return this.intersectsSphere(a)}});Object.assign(zb.prototype,{extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new cb(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new Yb(this,a)}});Object.assign(D.prototype,{fromAttribute:function(a,b,c){console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,
        b,c)}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},
        getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        b,c){console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});Object.assign(ja.prototype,{fromAttribute:function(a,b,c){console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});I.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(z.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
        return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(z.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(zc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Object.defineProperty(Ac.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},
        set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Object.defineProperty(ma.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a}});wa.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
        void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(la.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
        this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
        this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
        this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(T.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}}});Object.assign(F.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});
    Object.defineProperties(F.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.defineProperties(Id.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
        return this}}});Object.defineProperties(Q.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new G}}});Object.defineProperties(sa.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});
    Object.defineProperties(Da.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(Wd.prototype,{getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget()},
        supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},
        supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});
    Object.defineProperties(Wd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
        this.shadowMap.cullFace=a}}});Object.defineProperties(Ie.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a}}});Object.defineProperties(Cb.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=
        a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=
        a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
        return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},
        set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});ic.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new ee).load(a,function(a){b.setBuffer(a)});return this};je.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};l.WebGLRenderTargetCube=Db;l.WebGLRenderTarget=
        Cb;l.WebGLRenderer=Wd;l.ShaderLib=$a;l.UniformsLib=Z;l.UniformsUtils=Ga;l.ShaderChunk=aa;l.FogExp2=Jb;l.Fog=Kb;l.Scene=ld;l.LensFlare=Xd;l.Sprite=yc;l.LOD=zc;l.SkinnedMesh=nd;l.Skeleton=Ac;l.Bone=md;l.Mesh=Ba;l.LineSegments=V;l.LineLoop=od;l.Line=xa;l.Points=Lb;l.Group=Bc;l.VideoTexture=pd;l.DataTexture=db;l.CompressedTexture=Mb;l.CubeTexture=Ya;l.CanvasTexture=qd;l.DepthTexture=Cc;l.Texture=ca;l.CompressedTextureLoader=Pe;l.DataTextureLoader=Zd;l.CubeTextureLoader=$d;l.TextureLoader=rd;l.ObjectLoader=
        Qe;l.MaterialLoader=Gd;l.BufferGeometryLoader=ae;l.DefaultLoadingManager=za;l.LoadingManager=Yd;l.JSONLoader=be;l.ImageLoader=Tc;l.FontLoader=Se;l.FileLoader=ta;l.Loader=fc;l.Cache=fd;l.AudioLoader=ee;l.SpotLightShadow=td;l.SpotLight=ud;l.PointLight=vd;l.RectAreaLight=zd;l.HemisphereLight=sd;l.DirectionalLightShadow=wd;l.DirectionalLight=xd;l.AmbientLight=yd;l.LightShadow=tb;l.Light=la;l.StereoCamera=Te;l.PerspectiveCamera=wa;l.OrthographicCamera=Ib;l.CubeCamera=Hd;l.ArrayCamera=fe;l.Camera=Na;l.AudioListener=
        ge;l.PositionalAudio=ie;l.AudioContext=he;l.AudioAnalyser=je;l.Audio=ic;l.VectorKeyframeTrack=dc;l.StringKeyframeTrack=Dd;l.QuaternionKeyframeTrack=Vc;l.NumberKeyframeTrack=ec;l.ColorKeyframeTrack=Fd;l.BooleanKeyframeTrack=Ed;l.PropertyMixer=ke;l.PropertyBinding=na;l.KeyframeTrack=vb;l.AnimationUtils=ua;l.AnimationObjectGroup=Ve;l.AnimationMixer=Xe;l.AnimationClip=Aa;l.Uniform=Id;l.InstancedBufferGeometry=le;l.BufferGeometry=F;l.GeometryIdCount=function(){return Sd++};l.Geometry=I;l.InterleavedBufferAttribute=
        me;l.InstancedInterleavedBuffer=ne;l.InterleavedBuffer=jc;l.InstancedBufferAttribute=oe;l.Face3=Ua;l.Object3D=z;l.Raycaster=Ye;l.Layers=Qd;l.EventDispatcher=ra;l.Clock=$e;l.QuaternionLinearInterpolant=Cd;l.LinearInterpolant=Uc;l.DiscreteInterpolant=Bd;l.CubicInterpolant=Ad;l.Interpolant=Ca;l.Triangle=Ta;l.Math=Y;l.Spherical=af;l.Cylindrical=bf;l.Plane=va;l.Frustum=hd;l.Sphere=Fa;l.Ray=gb;l.Matrix4=R;l.Matrix3=Ja;l.Box3=Sa;l.Box2=gd;l.Line3=Gb;l.Euler=ab;l.Vector4=ja;l.Vector3=n;l.Vector2=D;l.Quaternion=
        pa;l.Color=G;l.MorphBlendMesh=qa;l.ImmediateRenderObject=Yc;l.VertexNormalsHelper=Zc;l.SpotLightHelper=kc;l.SkeletonHelper=lc;l.PointLightHelper=mc;l.RectAreaLightHelper=nc;l.HemisphereLightHelper=oc;l.GridHelper=$c;l.PolarGridHelper=Jd;l.FaceNormalsHelper=ad;l.DirectionalLightHelper=pc;l.CameraHelper=bd;l.BoxHelper=Ab;l.ArrowHelper=Bb;l.AxisHelper=Ld;l.CatmullRomCurve3=Ia;l.CubicBezierCurve3=cd;l.QuadraticBezierCurve3=dd;l.LineCurve3=ed;l.ArcCurve=Md;l.EllipseCurve=Wa;l.SplineCurve=yb;l.CubicBezierCurve=
        gc;l.QuadraticBezierCurve=hc;l.LineCurve=Ra;l.Shape=zb;l.Path=Xc;l.ShapePath=ce;l.Font=de;l.CurvePath=Wc;l.Curve=ma;l.ShapeUtils=ya;l.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new Bc,d=0,e=b.length;d<e;d++)c.add(new Ba(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){a.applyMatrix((new R).getInverse(c.matrixWorld));b.remove(a);c.add(a)}};l.WireframeGeometry=Nb;l.ParametricGeometry=Dc;l.ParametricBufferGeometry=
        Ob;l.TetrahedronGeometry=Fc;l.TetrahedronBufferGeometry=Pb;l.OctahedronGeometry=Gc;l.OctahedronBufferGeometry=lb;l.IcosahedronGeometry=Hc;l.IcosahedronBufferGeometry=Qb;l.DodecahedronGeometry=Ic;l.DodecahedronBufferGeometry=Rb;l.PolyhedronGeometry=Ec;l.PolyhedronBufferGeometry=ia;l.TubeGeometry=Jc;l.TubeBufferGeometry=Sb;l.TorusKnotGeometry=Kc;l.TorusKnotBufferGeometry=Tb;l.TorusGeometry=Lc;l.TorusBufferGeometry=Ub;l.TextGeometry=Mc;l.TextBufferGeometry=Vb;l.SphereGeometry=Nc;l.SphereBufferGeometry=
        mb;l.RingGeometry=Oc;l.RingBufferGeometry=Wb;l.PlaneGeometry=wc;l.PlaneBufferGeometry=kb;l.LatheGeometry=Pc;l.LatheBufferGeometry=Xb;l.ShapeGeometry=Yb;l.ShapeBufferGeometry=Zb;l.ExtrudeGeometry=cb;l.ExtrudeBufferGeometry=Ea;l.EdgesGeometry=$b;l.ConeGeometry=Qc;l.ConeBufferGeometry=Rc;l.CylinderGeometry=nb;l.CylinderBufferGeometry=Va;l.CircleGeometry=Sc;l.CircleBufferGeometry=ac;l.BoxGeometry=Hb;l.BoxBufferGeometry=jb;l.ShadowMaterial=bc;l.SpriteMaterial=bb;l.RawShaderMaterial=cc;l.ShaderMaterial=
        Da;l.PointsMaterial=Ka;l.MeshPhysicalMaterial=ob;l.MeshStandardMaterial=Qa;l.MeshPhongMaterial=sa;l.MeshToonMaterial=pb;l.MeshNormalMaterial=qb;l.MeshLambertMaterial=rb;l.MeshDepthMaterial=Za;l.MeshBasicMaterial=Ma;l.LineDashedMaterial=sb;l.LineBasicMaterial=ga;l.Material=Q;l.Float64BufferAttribute=vc;l.Float32BufferAttribute=B;l.Uint32BufferAttribute=ib;l.Int32BufferAttribute=uc;l.Uint16BufferAttribute=hb;l.Int16BufferAttribute=tc;l.Uint8ClampedBufferAttribute=sc;l.Uint8BufferAttribute=rc;l.Int8BufferAttribute=
        qc;l.BufferAttribute=T;l.REVISION="86dev";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=
        100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=
        0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=306;l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=
        1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=
        1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=2001;l.RGBA_S3TC_DXT1_Format=2002;l.RGBA_S3TC_DXT3_Format=2003;l.RGBA_S3TC_DXT5_Format=2004;l.RGB_PVRTC_4BPPV1_Format=2100;l.RGB_PVRTC_2BPPV1_Format=2101;l.RGBA_PVRTC_4BPPV1_Format=2102;l.RGBA_PVRTC_2BPPV1_Format=2103;l.RGB_ETC1_Format=2151;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=
        2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=Hb;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new Ua(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=
        function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};l.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Lb(a,b)};l.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");
        return new yc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Lb(a,b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Ka(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Ka(a)};l.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new Ka(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new T(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new qc(a,b)};l.Uint8Attribute=
        function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new rc(a,b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new sc(a,b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new tc(a,b)};l.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
        return new hb(a,b)};l.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new uc(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new ib(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new B(a,b)};l.Float64Attribute=
        function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new vc(a,b)};l.ClosedSplineCurve3=df;l.SplineCurve3=ef;l.Spline=se;l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new Ab(a,b)};l.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new V(new $b(a.geometry),new ga({color:void 0!==
    b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new V(new Nb(a.geometry),new ga({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new ta(a)};l.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new Zd(a)};l.GeometryUtils={merge:function(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b.isMesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e=new rd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new $d;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
    l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
        this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(l,"__esModule",{value:!0})});
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

THREE.OrbitControls = function ( object, domElement ) {

    this.object = object;

    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new THREE.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    this.minAzimuthAngle = - Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    this.enableKeys = true;

    // The four arrow keys
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // Mouse buttons
    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    //
    // public methods
    //

    this.getPolarAngle = function () {

        return spherical.phi;

    };

    this.getAzimuthalAngle = function () {

        return spherical.theta;

    };

    this.saveState = function () {

        scope.target0.copy( scope.target );
        scope.position0.copy( scope.object.position );
        scope.zoom0 = scope.object.zoom;

    };

    this.reset = function () {

        scope.target.copy( scope.target0 );
        scope.object.position.copy( scope.position0 );
        scope.object.zoom = scope.zoom0;

        scope.object.updateProjectionMatrix();
        scope.dispatchEvent( changeEvent );

        scope.update();

        state = STATE.NONE;

    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    this.update = function () {

        var offset = new THREE.Vector3();

        // so camera.up is the orbit axis
        var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
        var quatInverse = quat.clone().inverse();

        var lastPosition = new THREE.Vector3();
        var lastQuaternion = new THREE.Quaternion();

        return function update() {

            var position = scope.object.position;

            offset.copy( position ).sub( scope.target );

            // rotate offset to "y-axis-is-up" space
            offset.applyQuaternion( quat );

            // angle from z-axis around y-axis
            spherical.setFromVector3( offset );

            if ( scope.autoRotate && state === STATE.NONE ) {

                rotateLeft( getAutoRotationAngle() );

            }

            spherical.theta += sphericalDelta.theta;
            spherical.phi += sphericalDelta.phi;

            // restrict theta to be between desired limits
            spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

            // restrict phi to be between desired limits
            spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

            spherical.makeSafe();


            spherical.radius *= scale;

            // restrict radius to be between desired limits
            spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

            // move target to panned location
            scope.target.add( panOffset );

            offset.setFromSpherical( spherical );

            // rotate offset back to "camera-up-vector-is-up" space
            offset.applyQuaternion( quatInverse );

            position.copy( scope.target ).add( offset );

            scope.object.lookAt( scope.target );

            if ( scope.enableDamping === true ) {

                sphericalDelta.theta *= ( 1 - scope.dampingFactor );
                sphericalDelta.phi *= ( 1 - scope.dampingFactor );

            } else {

                sphericalDelta.set( 0, 0, 0 );

            }

            scale = 1;
            panOffset.set( 0, 0, 0 );

            // update condition is:
            // min(camera displacement, camera rotation in radians)^2 > EPS
            // using small-angle approximation cos(x/2) = 1 - x^2 / 8

            if ( zoomChanged ||
                lastPosition.distanceToSquared( scope.object.position ) > EPS ||
                8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

                scope.dispatchEvent( changeEvent );

                lastPosition.copy( scope.object.position );
                lastQuaternion.copy( scope.object.quaternion );
                zoomChanged = false;

                return true;

            }

            return false;

        };

    }();

    this.dispose = function () {

        scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
        scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
        scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

        scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
        scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
        scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        window.removeEventListener( 'keydown', onKeyDown, false );

        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

    };

    //
    // internals
    //

    var scope = this;

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new THREE.Spherical();
    var sphericalDelta = new THREE.Spherical();

    var scale = 1;
    var panOffset = new THREE.Vector3();
    var zoomChanged = false;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow( 0.95, scope.zoomSpeed );

    }

    function rotateLeft( angle ) {

        sphericalDelta.theta -= angle;

    }

    function rotateUp( angle ) {

        sphericalDelta.phi -= angle;

    }

    var panLeft = function () {

        var v = new THREE.Vector3();

        return function panLeft( distance, objectMatrix ) {

            v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
            v.multiplyScalar( - distance );

            panOffset.add( v );

        };

    }();

    var panUp = function () {

        var v = new THREE.Vector3();

        return function panUp( distance, objectMatrix ) {

            v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
            v.multiplyScalar( distance );

            panOffset.add( v );

        };

    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function () {

        var offset = new THREE.Vector3();

        return function pan( deltaX, deltaY ) {

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( scope.object instanceof THREE.PerspectiveCamera ) {

                // perspective
                var position = scope.object.position;
                offset.copy( position ).sub( scope.target );
                var targetDistance = offset.length();

                // half of the fov is center to top of screen
                targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

                // we actually don't use screenWidth, since perspective camera is fixed to screen height
                panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
                panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

            } else if ( scope.object instanceof THREE.OrthographicCamera ) {

                // orthographic
                panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
                panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

            } else {

                // camera neither orthographic nor perspective
                console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
                scope.enablePan = false;

            }

        };

    }();

    function dollyIn( dollyScale ) {

        if ( scope.object instanceof THREE.PerspectiveCamera ) {

            scale /= dollyScale;

        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

            scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
            scope.enableZoom = false;

        }

    }

    function dollyOut( dollyScale ) {

        if ( scope.object instanceof THREE.PerspectiveCamera ) {

            scale *= dollyScale;

        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

            scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
            scope.enableZoom = false;

        }

    }

    //
    // event callbacks - update the object state
    //

    function handleMouseDownRotate( event ) {

        //console.log( 'handleMouseDownRotate' );

        rotateStart.set( event.clientX, event.clientY );

    }

    function handleMouseDownDolly( event ) {

        //console.log( 'handleMouseDownDolly' );

        dollyStart.set( event.clientX, event.clientY );

    }

    function handleMouseDownPan( event ) {

        //console.log( 'handleMouseDownPan' );

        panStart.set( event.clientX, event.clientY );

    }

    function handleMouseMoveRotate( event ) {

        //console.log( 'handleMouseMoveRotate' );

        rotateEnd.set( event.clientX, event.clientY );
        rotateDelta.subVectors( rotateEnd, rotateStart );

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        // rotating across whole screen goes 360 degrees around
        rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

        // rotating up and down along whole screen attempts to go 360, but limited to 180
        rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

        rotateStart.copy( rotateEnd );

        scope.update();

    }

    function handleMouseMoveDolly( event ) {

        //console.log( 'handleMouseMoveDolly' );

        dollyEnd.set( event.clientX, event.clientY );

        dollyDelta.subVectors( dollyEnd, dollyStart );

        if ( dollyDelta.y > 0 ) {

            dollyIn( getZoomScale() );

        } else if ( dollyDelta.y < 0 ) {

            dollyOut( getZoomScale() );

        }

        dollyStart.copy( dollyEnd );

        scope.update();

    }

    function handleMouseMovePan( event ) {

        //console.log( 'handleMouseMovePan' );

        panEnd.set( event.clientX, event.clientY );

        panDelta.subVectors( panEnd, panStart );

        pan( panDelta.x, panDelta.y );

        panStart.copy( panEnd );

        scope.update();

    }

    function handleMouseUp( event ) {

        // console.log( 'handleMouseUp' );

    }

    function handleMouseWheel( event ) {

        // console.log( 'handleMouseWheel' );

        if ( event.deltaY < 0 ) {

            dollyOut( getZoomScale() );

        } else if ( event.deltaY > 0 ) {

            dollyIn( getZoomScale() );

        }

        scope.update();

    }

    function handleKeyDown( event ) {

        //console.log( 'handleKeyDown' );

        switch ( event.keyCode ) {

            case scope.keys.UP:
                pan( 0, scope.keyPanSpeed );
                scope.update();
                break;

            case scope.keys.BOTTOM:
                pan( 0, - scope.keyPanSpeed );
                scope.update();
                break;

            case scope.keys.LEFT:
                pan( scope.keyPanSpeed, 0 );
                scope.update();
                break;

            case scope.keys.RIGHT:
                pan( - scope.keyPanSpeed, 0 );
                scope.update();
                break;

        }

    }

    function handleTouchStartRotate( event ) {

        //console.log( 'handleTouchStartRotate' );

        rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchStartDolly( event ) {

        //console.log( 'handleTouchStartDolly' );

        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );

        dollyStart.set( 0, distance );

    }

    function handleTouchStartPan( event ) {

        //console.log( 'handleTouchStartPan' );

        panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchMoveRotate( event ) {

        //console.log( 'handleTouchMoveRotate' );

        rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
        rotateDelta.subVectors( rotateEnd, rotateStart );

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        // rotating across whole screen goes 360 degrees around
        rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

        // rotating up and down along whole screen attempts to go 360, but limited to 180
        rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

        rotateStart.copy( rotateEnd );

        scope.update();

    }

    function handleTouchMoveDolly( event ) {

        //console.log( 'handleTouchMoveDolly' );

        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );

        dollyEnd.set( 0, distance );

        dollyDelta.subVectors( dollyEnd, dollyStart );

        if ( dollyDelta.y > 0 ) {

            dollyOut( getZoomScale() );

        } else if ( dollyDelta.y < 0 ) {

            dollyIn( getZoomScale() );

        }

        dollyStart.copy( dollyEnd );

        scope.update();

    }

    function handleTouchMovePan( event ) {

        //console.log( 'handleTouchMovePan' );

        panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

        panDelta.subVectors( panEnd, panStart );

        pan( panDelta.x, panDelta.y );

        panStart.copy( panEnd );

        scope.update();

    }

    function handleTouchEnd( event ) {

        //console.log( 'handleTouchEnd' );

    }

    //
    // event handlers - FSM: listen for events and reset state
    //

    function onMouseDown( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        switch ( event.button ) {

            case scope.mouseButtons.ORBIT:

                if ( scope.enableRotate === false ) return;

                handleMouseDownRotate( event );

                state = STATE.ROTATE;

                break;

            case scope.mouseButtons.ZOOM:

                if ( scope.enableZoom === false ) return;

                handleMouseDownDolly( event );

                state = STATE.DOLLY;

                break;

            case scope.mouseButtons.PAN:

                if ( scope.enablePan === false ) return;

                handleMouseDownPan( event );

                state = STATE.PAN;

                break;

        }

        if ( state !== STATE.NONE ) {

            document.addEventListener( 'mousemove', onMouseMove, false );
            document.addEventListener( 'mouseup', onMouseUp, false );

            scope.dispatchEvent( startEvent );

        }

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        switch ( state ) {

            case STATE.ROTATE:

                if ( scope.enableRotate === false ) return;

                handleMouseMoveRotate( event );

                break;

            case STATE.DOLLY:

                if ( scope.enableZoom === false ) return;

                handleMouseMoveDolly( event );

                break;

            case STATE.PAN:

                if ( scope.enablePan === false ) return;

                handleMouseMovePan( event );

                break;

        }

    }

    function onMouseUp( event ) {

        if ( scope.enabled === false ) return;

        handleMouseUp( event );

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        scope.dispatchEvent( endEvent );

        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

        event.preventDefault();
        event.stopPropagation();

        handleMouseWheel( event );

        scope.dispatchEvent( startEvent ); // not sure why these are here...
        scope.dispatchEvent( endEvent );

    }

    function onKeyDown( event ) {

        if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

        handleKeyDown( event );

    }

    function onTouchStart( event ) {

        if ( scope.enabled === false ) return;

        switch ( event.touches.length ) {

            case 1:	// one-fingered touch: rotate

                if ( scope.enableRotate === false ) return;

                handleTouchStartRotate( event );

                state = STATE.TOUCH_ROTATE;

                break;

            case 2:	// two-fingered touch: dolly

                if ( scope.enableZoom === false ) return;

                handleTouchStartDolly( event );

                state = STATE.TOUCH_DOLLY;

                break;

            case 3: // three-fingered touch: pan

                if ( scope.enablePan === false ) return;

                handleTouchStartPan( event );

                state = STATE.TOUCH_PAN;

                break;

            default:

                state = STATE.NONE;

        }

        if ( state !== STATE.NONE ) {

            scope.dispatchEvent( startEvent );

        }

    }

    function onTouchMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.touches.length ) {

            case 1: // one-fingered touch: rotate

                if ( scope.enableRotate === false ) return;
                if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

                handleTouchMoveRotate( event );

                break;

            case 2: // two-fingered touch: dolly

                if ( scope.enableZoom === false ) return;
                if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

                handleTouchMoveDolly( event );

                break;

            case 3: // three-fingered touch: pan

                if ( scope.enablePan === false ) return;
                if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

                handleTouchMovePan( event );

                break;

            default:

                state = STATE.NONE;

        }

    }

    function onTouchEnd( event ) {

        if ( scope.enabled === false ) return;

        handleTouchEnd( event );

        scope.dispatchEvent( endEvent );

        state = STATE.NONE;

    }

    function onContextMenu( event ) {

        event.preventDefault();

    }

    //

    scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

    scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
    scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

    scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
    scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
    scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

    window.addEventListener( 'keydown', onKeyDown, false );

    // force an update at start

    this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties( THREE.OrbitControls.prototype, {

    center: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
            return this.target;

        }

    },

    // backward compatibility

    noZoom: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
            return ! this.enableZoom;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
            this.enableZoom = ! value;

        }

    },

    noRotate: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
            return ! this.enableRotate;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
            this.enableRotate = ! value;

        }

    },

    noPan: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
            return ! this.enablePan;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
            this.enablePan = ! value;

        }

    },

    noKeys: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
            return ! this.enableKeys;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
            this.enableKeys = ! value;

        }

    },

    staticMoving: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
            return ! this.enableDamping;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
            this.enableDamping = ! value;

        }

    },

    dynamicDampingFactor: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
            return this.dampingFactor;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
            this.dampingFactor = value;

        }

    }

} );

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.OIMO = global.OIMO || {})));
}(this, (function (exports) { 'use strict';

    // Polyfills

    if ( Number.EPSILON === undefined ) {

        Number.EPSILON = Math.pow( 2, - 52 );

    }

    //

    if ( Math.sign === undefined ) {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

        Math.sign = function ( x ) {

            return ( x < 0 ) ? - 1 : ( x > 0 ) ? 1 : + x;

        };

    }

    if ( Function.prototype.name === undefined ) {

        // Missing in IE9-11.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

        Object.defineProperty( Function.prototype, 'name', {

            get: function () {

                return this.toString().match( /^\s*function\s*([^\(\s]*)/ )[ 1 ];

            }

        } );

    }

    if ( Object.assign === undefined ) {

        // Missing in IE.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

        ( function () {

            Object.assign = function ( target ) {

                'use strict';

                if ( target === undefined || target === null ) {

                    throw new TypeError( 'Cannot convert undefined or null to object' );

                }

                var output = Object( target );

                for ( var index = 1; index < arguments.length; index ++ ) {

                    var source = arguments[ index ];

                    if ( source !== undefined && source !== null ) {

                        for ( var nextKey in source ) {

                            if ( Object.prototype.hasOwnProperty.call( source, nextKey ) ) {

                                output[ nextKey ] = source[ nextKey ];

                            }

                        }

                    }

                }

                return output;

            };

        } )();

    }

    /*
     * A list of constants built-in for
     * the physics engine.
     */

    var REVISION = '1.0.9';

    // BroadPhase
    var BR_NULL = 0;
    var BR_BRUTE_FORCE = 1;
    var BR_SWEEP_AND_PRUNE = 2;
    var BR_BOUNDING_VOLUME_TREE = 3;

    // Body type
    var BODY_NULL = 0;
    var BODY_DYNAMIC = 1;
    var BODY_STATIC = 2;
    var BODY_KINEMATIC = 3;
    var BODY_GHOST = 4;

    // Shape type
    var SHAPE_NULL = 0;
    var SHAPE_SPHERE = 1;
    var SHAPE_BOX = 2;
    var SHAPE_CYLINDER = 3;
    var SHAPE_PLANE = 4;
    var SHAPE_PARTICLE = 5;
    var SHAPE_TETRA = 6;

    // Joint type
    var JOINT_NULL = 0;
    var JOINT_DISTANCE = 1;
    var JOINT_BALL_AND_SOCKET = 2;
    var JOINT_HINGE = 3;
    var JOINT_WHEEL = 4;
    var JOINT_SLIDER = 5;
    var JOINT_PRISMATIC = 6;

    // AABB aproximation
    var AABB_PROX = 0.005;

    var _Math = {

        sqrt   : Math.sqrt,
        abs    : Math.abs,
        floor  : Math.floor,
        cos    : Math.cos,
        sin    : Math.sin,
        acos   : Math.acos,
        asin   : Math.asin,
        atan2  : Math.atan2,
        round  : Math.round,
        pow    : Math.pow,
        max    : Math.max,
        min    : Math.min,
        random : Math.random,

        degtorad : 0.0174532925199432957,
        radtodeg : 57.295779513082320876,
        PI       : 3.141592653589793,
        TwoPI    : 6.283185307179586,
        PI90     : 1.570796326794896,
        PI270    : 4.712388980384689,

        INF      : Infinity,
        EPZ      : 0.00001,
        EPZ2      : 0.000001,

        lerp: function ( x, y, t ) {

            return ( 1 - t ) * x + t * y;

        },

        randInt: function ( low, high ) {

            return low + _Math.floor( _Math.random() * ( high - low + 1 ) );

        },

        rand: function ( low, high ) {

            return low + _Math.random() * ( high - low );

        },

        generateUUID: function () {

            // http://www.broofa.com/Tools/Math.uuid.htm

            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' );
            var uuid = new Array( 36 );
            var rnd = 0, r;

            return function generateUUID() {

                for ( var i = 0; i < 36; i ++ ) {

                    if ( i === 8 || i === 13 || i === 18 || i === 23 ) {

                        uuid[ i ] = '-';

                    } else if ( i === 14 ) {

                        uuid[ i ] = '4';

                    } else {

                        if ( rnd <= 0x02 ) rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0;
                        r = rnd & 0xf;
                        rnd = rnd >> 4;
                        uuid[ i ] = chars[ ( i === 19 ) ? ( r & 0x3 ) | 0x8 : r ];

                    }

                }

                return uuid.join( '' );

            };

        }(),

        int: function( x ) {

            return _Math.floor(x);

        },

        fix: function( x, n ) {

            return x.toFixed(n || 3, 10);

        },

        clamp: function ( value, min, max ) {

            return _Math.max( min, _Math.min( max, value ) );

        },

        //clamp: function ( x, a, b ) { return ( x < a ) ? a : ( ( x > b ) ? b : x ); },



        distance: function( p1, p2 ){

            var xd = p2[0]-p1[0];
            var yd = p2[1]-p1[1];
            var zd = p2[2]-p1[2];
            return _Math.sqrt(xd*xd + yd*yd + zd*zd);

        },

        /*unwrapDegrees: function ( r ) {

         r = r % 360;
         if (r > 180) r -= 360;
         if (r < -180) r += 360;
         return r;

         },

         unwrapRadian: function( r ){

         r = r % _Math.TwoPI;
         if (r > _Math.PI) r -= _Math.TwoPI;
         if (r < -_Math.PI) r += _Math.TwoPI;
         return r;

         },*/

        acosClamp: function ( cos ) {

            if(cos>1)return 0;
            else if(cos<-1)return _Math.PI;
            else return _Math.acos(cos);

        },

        distanceVector: function( v1, v2 ){

            var xd = v1.x - v2.x;
            var yd = v1.y - v2.y;
            var zd = v1.z - v2.z;
            return xd * xd + yd * yd + zd * zd;

        },

        dotVectors: function ( a, b ) {

            return a.x * b.x + a.y * b.y + a.z * b.z;

        },

    };

    function printError( clazz, msg ){
        console.error("[OIMO] " + clazz + ": " + msg);
    }

    // A performance evaluator

    function InfoDisplay(world){

        this.parent = world;

        this.infos = new Float32Array( 13 );
        this.f = [0,0,0];

        this.times = [0,0,0,0];

        this.broadPhase = this.parent.broadPhaseType;

        this.version = REVISION;

        this.fps = 0;

        this.tt = 0;

        this.broadPhaseTime = 0;
        this.narrowPhaseTime = 0;
        this.solvingTime = 0;
        this.totalTime = 0;
        this.updateTime = 0;

        this.MaxBroadPhaseTime = 0;
        this.MaxNarrowPhaseTime = 0;
        this.MaxSolvingTime = 0;
        this.MaxTotalTime = 0;
        this.MaxUpdateTime = 0;
    }

    Object.assign( InfoDisplay.prototype, {

        setTime: function(n){
            this.times[ n || 0 ] = performance.now();
        },

        resetMax: function(){

            this.MaxBroadPhaseTime = 0;
            this.MaxNarrowPhaseTime = 0;
            this.MaxSolvingTime = 0;
            this.MaxTotalTime = 0;
            this.MaxUpdateTime = 0;

        },

        calcBroadPhase: function () {

            this.setTime( 2 );
            this.broadPhaseTime = this.times[ 2 ] - this.times[ 1 ];

        },

        calcNarrowPhase: function () {

            this.setTime( 3 );
            this.narrowPhaseTime = this.times[ 3 ] - this.times[ 2 ];

        },

        calcEnd: function () {

            this.setTime( 2 );
            this.solvingTime = this.times[ 2 ] - this.times[ 1 ];
            this.totalTime = this.times[ 2 ] - this.times[ 0 ];
            this.updateTime = this.totalTime - ( this.broadPhaseTime + this.narrowPhaseTime + this.solvingTime );

            if( this.tt === 100 ) this.resetMax();

            if( this.tt > 100 ){
                if( this.broadPhaseTime > this.MaxBroadPhaseTime ) this.MaxBroadPhaseTime = this.broadPhaseTime;
                if( this.narrowPhaseTime > this.MaxNarrowPhaseTime ) this.MaxNarrowPhaseTime = this.narrowPhaseTime;
                if( this.solvingTime > this.MaxSolvingTime ) this.MaxSolvingTime = this.solvingTime;
                if( this.totalTime > this.MaxTotalTime ) this.MaxTotalTime = this.totalTime;
                if( this.updateTime > this.MaxUpdateTime ) this.MaxUpdateTime = this.updateTime;
            }


            this.upfps();

            this.tt ++;
            if(this.tt > 500) this.tt = 0;

        },


        upfps : function(){
            this.f[1] = Date.now();
            if (this.f[1]-1000>this.f[0]){ this.f[0] = this.f[1]; this.fps = this.f[2]; this.f[2] = 0; } this.f[2]++;
        },

        show: function(){
            var info =[
                "Oimo.js "+this.version+"<br>",
                this.broadPhase + "<br><br>",
                "FPS: " + this.fps +" fps<br><br>",
                "rigidbody "+this.parent.numRigidBodies+"<br>",
                "contact &nbsp;&nbsp;"+this.parent.numContacts+"<br>",
                "ct-point &nbsp;"+this.parent.numContactPoints+"<br>",
                "paircheck "+this.parent.broadPhase.numPairChecks+"<br>",
                "island &nbsp;&nbsp;&nbsp;"+this.parent.numIslands +"<br><br>",
                "Time in milliseconds<br><br>",
                "broadphase &nbsp;"+ _Math.fix(this.broadPhaseTime) + " | " + _Math.fix(this.MaxBroadPhaseTime) +"<br>",
                "narrowphase "+ _Math.fix(this.narrowPhaseTime)  + " | " + _Math.fix(this.MaxNarrowPhaseTime) + "<br>",
                "solving &nbsp;&nbsp;&nbsp;&nbsp;"+ _Math.fix(this.solvingTime)+ " | " + _Math.fix(this.MaxSolvingTime) + "<br>",
                "total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ _Math.fix(this.totalTime) + " | " + _Math.fix(this.MaxTotalTime) + "<br>",
                "updating &nbsp;&nbsp;&nbsp;"+ _Math.fix(this.updateTime) + " | " + _Math.fix(this.MaxUpdateTime) + "<br>"
            ].join("\n");
            return info;
        },

        toArray: function(){
            this.infos[0] = this.parent.broadPhase.types;
            this.infos[1] = this.parent.numRigidBodies;
            this.infos[2] = this.parent.numContacts;
            this.infos[3] = this.parent.broadPhase.numPairChecks;
            this.infos[4] = this.parent.numContactPoints;
            this.infos[5] = this.parent.numIslands;
            this.infos[6] = this.broadPhaseTime;
            this.infos[7] = this.narrowPhaseTime;
            this.infos[8] = this.solvingTime;
            this.infos[9] = this.updateTime;
            this.infos[10] = this.totalTime;
            this.infos[11] = this.fps;
            return this.infos;
        }

    });

    function Vec3 ( x, y, z ) {

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;

    }

    Object.assign( Vec3.prototype, {

        Vec3: true,

        set: function( x, y, z ){

            this.x = x;
            this.y = y;
            this.z = z;
            return this;

        },

        add: function ( a, b ) {

            if ( b !== undefined ) return this.addVectors( a, b );

            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this;

        },

        addVectors: function ( a, b ) {

            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this;

        },

        addEqual: function ( v ) {

            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            return this;

        },

        sub: function ( a, b ) {

            if ( b !== undefined ) return this.subVectors( a, b );

            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this;

        },

        subVectors: function ( a, b ) {

            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this;

        },

        subEqual: function ( v ) {

            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            return this;

        },

        scale: function ( v, s ) {

            this.x = v.x * s;
            this.y = v.y * s;
            this.z = v.z * s;
            return this;

        },

        scaleEqual: function( s ){

            this.x *= s;
            this.y *= s;
            this.z *= s;
            return this;

        },

        multiply: function( v ){

            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
            return this;

        },

        multiplyScalar: function( s ){

            this.x *= s;
            this.y *= s;
            this.z *= s;
            return this;

        },

        /*scaleV: function( v ){

         this.x *= v.x;
         this.y *= v.y;
         this.z *= v.z;
         return this;

         },

         scaleVectorEqual: function( v ){

         this.x *= v.x;
         this.y *= v.y;
         this.z *= v.z;
         return this;

         },*/

        addScaledVector: function ( v, s ) {

            this.x += v.x * s;
            this.y += v.y * s;
            this.z += v.z * s;

            return this;

        },

        subScaledVector: function ( v, s ) {

            this.x -= v.x * s;
            this.y -= v.y * s;
            this.z -= v.z * s;

            return this;

        },

        /*addTime: function ( v, t ) {

         this.x += v.x * t;
         this.y += v.y * t;
         this.z += v.z * t;
         return this;

         },

         addScale: function ( v, s ) {

         this.x += v.x * s;
         this.y += v.y * s;
         this.z += v.z * s;
         return this;

         },

         subScale: function ( v, s ) {

         this.x -= v.x * s;
         this.y -= v.y * s;
         this.z -= v.z * s;
         return this;

         },*/

        cross: function( a, b ) {

            if ( b !== undefined ) return this.crossVectors( a, b );

            var x = this.x, y = this.y, z = this.z;

            this.x = y * a.z - z * a.y;
            this.y = z * a.x - x * a.z;
            this.z = x * a.y - y * a.x;

            return this;

        },

        crossVectors: function ( a, b ) {

            var ax = a.x, ay = a.y, az = a.z;
            var bx = b.x, by = b.y, bz = b.z;

            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;

            return this;

        },

        tangent: function ( a ) {

            var ax = a.x, ay = a.y, az = a.z;

            this.x = ay * ax - az * az;
            this.y = - az * ay - ax * ax;
            this.z = ax * az + ay * ay;

            return this;

        },





        invert: function ( v ) {

            this.x=-v.x;
            this.y=-v.y;
            this.z=-v.z;
            return this;

        },

        negate: function () {

            this.x = - this.x;
            this.y = - this.y;
            this.z = - this.z;

            return this;

        },

        dot: function ( v ) {

            return this.x * v.x + this.y * v.y + this.z * v.z;

        },

        addition: function () {

            return this.x + this.y + this.z;

        },

        lengthSq: function () {

            return this.x * this.x + this.y * this.y + this.z * this.z;

        },

        length: function () {

            return _Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

        },

        copy: function( v ){

            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            return this;

        },

        /*mul: function( b, a, m ){

         return this.mulMat( m, a ).add( b );

         },

         mulMat: function( m, a ){

         var e = m.elements;
         var x = a.x, y = a.y, z = a.z;

         this.x = e[ 0 ] * x + e[ 1 ] * y + e[ 2 ] * z;
         this.y = e[ 3 ] * x + e[ 4 ] * y + e[ 5 ] * z;
         this.z = e[ 6 ] * x + e[ 7 ] * y + e[ 8 ] * z;
         return this;

         },*/

        applyMatrix3: function ( m, transpose ) {

            //if( transpose ) m = m.clone().transpose();
            var x = this.x, y = this.y, z = this.z;
            var e = m.elements;

            if( transpose ){

                this.x = e[ 0 ] * x + e[ 1 ] * y + e[ 2 ] * z;
                this.y = e[ 3 ] * x + e[ 4 ] * y + e[ 5 ] * z;
                this.z = e[ 6 ] * x + e[ 7 ] * y + e[ 8 ] * z;

            } else {

                this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
                this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
                this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;
            }

            return this;

        },

        applyQuaternion: function ( q ) {

            var x = this.x;
            var y = this.y;
            var z = this.z;

            var qx = q.x;
            var qy = q.y;
            var qz = q.z;
            var qw = q.w;

            // calculate quat * vector

            var ix =  qw * x + qy * z - qz * y;
            var iy =  qw * y + qz * x - qx * z;
            var iz =  qw * z + qx * y - qy * x;
            var iw = - qx * x - qy * y - qz * z;

            // calculate result * inverse quat

            this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
            this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
            this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

            return this;

        },

        testZero: function () {

            if(this.x!==0 || this.y!==0 || this.z!==0) return true;
            else return false;

        },

        testDiff: function( v ){

            return this.equals( v ) ? false : true;

        },

        equals: function ( v ) {

            return v.x === this.x && v.y === this.y && v.z === this.z;

        },

        clone: function () {

            return new this.constructor( this.x, this.y, this.z );

        },

        toString: function(){

            return"Vec3["+this.x.toFixed(4)+", "+this.y.toFixed(4)+", "+this.z.toFixed(4)+"]";

        },

        multiplyScalar: function ( scalar ) {

            if ( isFinite( scalar ) ) {
                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
            } else {
                this.x = 0;
                this.y = 0;
                this.z = 0;
            }

            return this;

        },

        divideScalar: function ( scalar ) {

            return this.multiplyScalar( 1 / scalar );

        },

        normalize: function () {

            return this.divideScalar( this.length() );

        },

        toArray: function ( array, offset ) {

            if ( offset === undefined ) offset = 0;

            array[ offset ] = this.x;
            array[ offset + 1 ] = this.y;
            array[ offset + 2 ] = this.z;

        },

        fromArray: function( array, offset ){

            if ( offset === undefined ) offset = 0;

            this.x = array[ offset ];
            this.y = array[ offset + 1 ];
            this.z = array[ offset + 2 ];
            return this;

        },


    } );

    function Quat ( x, y, z, w ){

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = ( w !== undefined ) ? w : 1;

    }

    Object.assign( Quat.prototype, {

        Quat: true,

        set: function ( x, y, z, w ) {


            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

            return this;

        },

        addTime: function( v, t ){

            var ax = v.x, ay = v.y, az = v.z;
            var qw = this.w, qx = this.x, qy = this.y, qz = this.z;
            t *= 0.5;
            this.x += t * (  ax*qw + ay*qz - az*qy );
            this.y += t * (  ay*qw + az*qx - ax*qz );
            this.z += t * (  az*qw + ax*qy - ay*qx );
            this.w += t * ( -ax*qx - ay*qy - az*qz );
            this.normalize();
            return this;

        },

        /*mul: function( q1, q2 ){

         var ax = q1.x, ay = q1.y, az = q1.z, as = q1.w,
         bx = q2.x, by = q2.y, bz = q2.z, bs = q2.w;
         this.x = ax * bs + as * bx + ay * bz - az * by;
         this.y = ay * bs + as * by + az * bx - ax * bz;
         this.z = az * bs + as * bz + ax * by - ay * bx;
         this.w = as * bs - ax * bx - ay * by - az * bz;
         return this;

         },*/

        multiply: function ( q, p ) {

            if ( p !== undefined ) return this.multiplyQuaternions( q, p );
            return this.multiplyQuaternions( this, q );

        },

        multiplyQuaternions: function ( a, b ) {

            var qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
            var qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;

            this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
            this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
            this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
            this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
            return this;

        },

        setFromUnitVectors: function( v1, v2 ) {

            var vx = new Vec3();
            var r = v1.dot( v2 ) + 1;

            if ( r < _Math.EPS2 ) {

                r = 0;
                if ( _Math.abs( v1.x ) > _Math.abs( v1.z ) ) vx.set( - v1.y, v1.x, 0 );
                else vx.set( 0, - v1.z, v1.y );

            } else {

                vx.crossVectors( v1, v2 );

            }

            this._x = vx.x;
            this._y = vx.y;
            this._z = vx.z;
            this._w = r;

            return this.normalize();

        },

        arc: function( v1, v2 ){

            var x1 = v1.x;
            var y1 = v1.y;
            var z1 = v1.z;
            var x2 = v2.x;
            var y2 = v2.y;
            var z2 = v2.z;
            var d = x1*x2 + y1*y2 + z1*z2;
            if( d==-1 ){
                x2 = y1*x1 - z1*z1;
                y2 = -z1*y1 - x1*x1;
                z2 = x1*z1 + y1*y1;
                d = 1 / _Math.sqrt( x2*x2 + y2*y2 + z2*z2 );
                this.w = 0;
                this.x = x2*d;
                this.y = y2*d;
                this.z = z2*d;
                return this;
            }
            var cx = y1*z2 - z1*y2;
            var cy = z1*x2 - x1*z2;
            var cz = x1*y2 - y1*x2;
            this.w = _Math.sqrt( ( 1 + d) * 0.5 );
            d = 0.5 / this.w;
            this.x = cx * d;
            this.y = cy * d;
            this.z = cz * d;
            return this;

        },

        normalize: function(){

            var l = this.length();
            if ( l === 0 ) {
                this.set( 0, 0, 0, 1 );
            } else {
                l = 1 / l;
                this.x = this.x * l;
                this.y = this.y * l;
                this.z = this.z * l;
                this.w = this.w * l;
            }
            return this;

        },

        inverse: function () {

            return this.conjugate().normalize();

        },

        invert: function ( q ) {

            this.x = q.x;
            this.y = q.y;
            this.z = q.z;
            this.w = q.w;
            this.conjugate().normalize();
            return this;

        },

        conjugate: function () {

            this.x *= - 1;
            this.y *= - 1;
            this.z *= - 1;
            return this;

        },

        length: function(){

            return _Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w  );

        },

        lengthSq: function () {

            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

        },

        copy: function( q ){

            this.x = q.x;
            this.y = q.y;
            this.z = q.z;
            this.w = q.w;
            return this;

        },

        clone: function( q ){

            return new Quat( this.x, this.y, this.z, this.w );

        },

        testDiff: function ( q ) {

            return this.equals( q ) ? false : true;

        },

        equals: function ( q ) {

            return this.x === q.x && this.y === q.y && this.z === q.z && this.w === q.w;

        },

        toString: function(){

            return"Quat["+this.x.toFixed(4)+", ("+this.y.toFixed(4)+", "+this.z.toFixed(4)+", "+this.w.toFixed(4)+")]";

        },

        setFromEuler: function ( x, y, z ){

            var c1 = Math.cos( x * 0.5 );
            var c2 = Math.cos( y * 0.5 );
            var c3 = Math.cos( z * 0.5 );
            var s1 = Math.sin( x * 0.5 );
            var s2 = Math.sin( y * 0.5 );
            var s3 = Math.sin( z * 0.5 );

            // XYZ
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

            return this;

        },

        setFromAxis: function ( axis, rad ) {

            axis.normalize();
            rad = rad * 0.5;
            var s = _Math.sin( rad );
            this.x = s * axis.x;
            this.y = s * axis.y;
            this.z = s * axis.z;
            this.w = _Math.cos( rad );
            return this;

        },

        setFromMat33: function ( m ) {

            var trace = m[0] + m[4] + m[8];
            var s;

            if ( trace > 0 ) {

                s = _Math.sqrt( trace + 1.0 );
                this.w = 0.5 / s;
                s = 0.5 / s;
                this.x = ( m[5] - m[7] ) * s;
                this.y = ( m[6] - m[2] ) * s;
                this.z = ( m[1] - m[3] ) * s;

            } else {

                var out = [];
                var i = 0;
                if ( m[4] > m[0] ) i = 1;
                if ( m[8] > m[i*3+i] ) i = 2;

                var j = (i+1)%3;
                var k = (i+2)%3;

                s = _Math.sqrt( m[i*3+i] - m[j*3+j] - m[k*3+k] + 1.0 );
                out[i] = 0.5 * fRoot;
                s = 0.5 / fRoot;
                this.w = ( m[j*3+k] - m[k*3+j] ) * s;
                out[j] = ( m[j*3+i] + m[i*3+j] ) * s;
                out[k] = ( m[k*3+i] + m[i*3+k] ) * s;

                this.x = out[1];
                this.y = out[2];
                this.z = out[3];

            }

            return this;

        },

        toArray: function ( array, offset ) {

            offset = offset || 0;

            array[ offset ] = this.x;
            array[ offset + 1 ] = this.y;
            array[ offset + 2 ] = this.z;
            array[ offset + 3 ] = this.w;

        },

        fromArray: function( array, offset ){

            offset = offset || 0;
            this.set( array[ offset ], array[ offset + 1 ], array[ offset + 2 ], array[ offset + 3 ] );
            return this;

        }

    });

    function Mat33 ( e00, e01, e02, e10, e11, e12, e20, e21, e22 ){

        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];

        if ( arguments.length > 0 ) {

            console.error( 'OIMO.Mat33: the constructor no longer reads arguments. use .set() instead.' );

        }

    }

    Object.assign( Mat33.prototype, {

        Mat33: true,

        set: function ( e00, e01, e02, e10, e11, e12, e20, e21, e22 ){

            var te = this.elements;
            te[0] = e00; te[1] = e01; te[2] = e02;
            te[3] = e10; te[4] = e11; te[5] = e12;
            te[6] = e20; te[7] = e21; te[8] = e22;
            return this;

        },

        add: function ( a, b ) {

            if( b !== undefined ) return this.addMatrixs( a, b );

            var e = this.elements, te = a.elements;
            e[0] += te[0]; e[1] += te[1]; e[2] += te[2];
            e[3] += te[3]; e[4] += te[4]; e[5] += te[5];
            e[6] += te[6]; e[7] += te[7]; e[8] += te[8];
            return this;

        },

        addMatrixs: function ( a, b ) {

            var te = this.elements, tem1 = a.elements, tem2 = b.elements;
            te[0] = tem1[0] + tem2[0]; te[1] = tem1[1] + tem2[1]; te[2] = tem1[2] + tem2[2];
            te[3] = tem1[3] + tem2[3]; te[4] = tem1[4] + tem2[4]; te[5] = tem1[5] + tem2[5];
            te[6] = tem1[6] + tem2[6]; te[7] = tem1[7] + tem2[7]; te[8] = tem1[8] + tem2[8];
            return this;

        },

        addEqual: function( m ){

            var te = this.elements, tem = m.elements;
            te[0] += tem[0]; te[1] += tem[1]; te[2] += tem[2];
            te[3] += tem[3]; te[4] += tem[4]; te[5] += tem[5];
            te[6] += tem[6]; te[7] += tem[7]; te[8] += tem[8];
            return this;

        },

        sub: function ( a, b ) {

            if( b !== undefined ) return this.subMatrixs( a, b );

            var e = this.elements, te = a.elements;
            e[0] -= te[0]; e[1] -= te[1]; e[2] -= te[2];
            e[3] -= te[3]; e[4] -= te[4]; e[5] -= te[5];
            e[6] -= te[6]; e[7] -= te[7]; e[8] -= te[8];
            return this;

        },

        subMatrixs: function ( a, b ) {

            var te = this.elements, tem1 = a.elements, tem2 = b.elements;
            te[0] = tem1[0] - tem2[0]; te[1] = tem1[1] - tem2[1]; te[2] = tem1[2] - tem2[2];
            te[3] = tem1[3] - tem2[3]; te[4] = tem1[4] - tem2[4]; te[5] = tem1[5] - tem2[5];
            te[6] = tem1[6] - tem2[6]; te[7] = tem1[7] - tem2[7]; te[8] = tem1[8] - tem2[8];
            return this;

        },

        subEqual: function ( m ) {

            var te = this.elements, tem = m.elements;
            te[0] -= tem[0]; te[1] -= tem[1]; te[2] -= tem[2];
            te[3] -= tem[3]; te[4] -= tem[4]; te[5] -= tem[5];
            te[6] -= tem[6]; te[7] -= tem[7]; te[8] -= tem[8];
            return this;

        },

        scale: function ( m, s ) {

            var te = this.elements, tm = m.elements;
            te[0] = tm[0] * s; te[1] = tm[1] * s; te[2] = tm[2] * s;
            te[3] = tm[3] * s; te[4] = tm[4] * s; te[5] = tm[5] * s;
            te[6] = tm[6] * s; te[7] = tm[7] * s; te[8] = tm[8] * s;
            return this;

        },

        scaleEqual: function ( s ){// multiplyScalar

            var te = this.elements;
            te[0] *= s; te[1] *= s; te[2] *= s;
            te[3] *= s; te[4] *= s; te[5] *= s;
            te[6] *= s; te[7] *= s; te[8] *= s;
            return this;

        },

        multiplyMatrices: function ( m1, m2, transpose ) {

            if( transpose ) m2 = m2.clone().transpose();

            var te = this.elements;
            var tm1 = m1.elements;
            var tm2 = m2.elements;

            var a0 = tm1[0], a3 = tm1[3], a6 = tm1[6];
            var a1 = tm1[1], a4 = tm1[4], a7 = tm1[7];
            var a2 = tm1[2], a5 = tm1[5], a8 = tm1[8];

            var b0 = tm2[0], b3 = tm2[3], b6 = tm2[6];
            var b1 = tm2[1], b4 = tm2[4], b7 = tm2[7];
            var b2 = tm2[2], b5 = tm2[5], b8 = tm2[8];

            te[0] = a0*b0 + a1*b3 + a2*b6;
            te[1] = a0*b1 + a1*b4 + a2*b7;
            te[2] = a0*b2 + a1*b5 + a2*b8;
            te[3] = a3*b0 + a4*b3 + a5*b6;
            te[4] = a3*b1 + a4*b4 + a5*b7;
            te[5] = a3*b2 + a4*b5 + a5*b8;
            te[6] = a6*b0 + a7*b3 + a8*b6;
            te[7] = a6*b1 + a7*b4 + a8*b7;
            te[8] = a6*b2 + a7*b5 + a8*b8;

            return this;

        },

        /*mul: function ( m1, m2, transpose ) {

         if( transpose ) m2 = m2.clone().transpose();

         var te = this.elements;
         var tm1 = m1.elements;
         var tm2 = m2.elements;
         //var tmp;

         var a0 = tm1[0], a3 = tm1[3], a6 = tm1[6];
         var a1 = tm1[1], a4 = tm1[4], a7 = tm1[7];
         var a2 = tm1[2], a5 = tm1[5], a8 = tm1[8];

         var b0 = tm2[0], b3 = tm2[3], b6 = tm2[6];
         var b1 = tm2[1], b4 = tm2[4], b7 = tm2[7];
         var b2 = tm2[2], b5 = tm2[5], b8 = tm2[8];

         /*if( transpose ){

         tmp = b1; b1 = b3; b3 = tmp;
         tmp = b2; b2 = b6; b6 = tmp;
         tmp = b5; b5 = b7; b7 = tmp;

         }

         te[0] = a0*b0 + a1*b3 + a2*b6;
         te[1] = a0*b1 + a1*b4 + a2*b7;
         te[2] = a0*b2 + a1*b5 + a2*b8;
         te[3] = a3*b0 + a4*b3 + a5*b6;
         te[4] = a3*b1 + a4*b4 + a5*b7;
         te[5] = a3*b2 + a4*b5 + a5*b8;
         te[6] = a6*b0 + a7*b3 + a8*b6;
         te[7] = a6*b1 + a7*b4 + a8*b7;
         te[8] = a6*b2 + a7*b5 + a8*b8;

         return this;

         },*/

        transpose: function ( m ) {

            if( m !== undefined ){
                var a = m.elements;
                this.set( a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8] );
                return this;
            }

            var te = this.elements;
            var a01 = te[1], a02 = te[2], a12 = te[5];
            te[1] = te[3];
            te[2] = te[6];
            te[3] = a01;
            te[5] = te[7];
            te[6] = a02;
            te[7] = a12;
            return this;

        },



        /*mulScale: function ( m, sx, sy, sz, Prepend ) {

         var prepend = Prepend || false;
         var te = this.elements, tm = m.elements;
         if(prepend){
         te[0] = sx*tm[0]; te[1] = sx*tm[1]; te[2] = sx*tm[2];
         te[3] = sy*tm[3]; te[4] = sy*tm[4]; te[5] = sy*tm[5];
         te[6] = sz*tm[6]; te[7] = sz*tm[7]; te[8] = sz*tm[8];
         }else{
         te[0] = tm[0]*sx; te[1] = tm[1]*sy; te[2] = tm[2]*sz;
         te[3] = tm[3]*sx; te[4] = tm[4]*sy; te[5] = tm[5]*sz;
         te[6] = tm[6]*sx; te[7] = tm[7]*sy; te[8] = tm[8]*sz;
         }
         return this;

         },

         transpose: function ( m ) {

         var te = this.elements, tm = m.elements;
         te[0] = tm[0]; te[1] = tm[3]; te[2] = tm[6];
         te[3] = tm[1]; te[4] = tm[4]; te[5] = tm[7];
         te[6] = tm[2]; te[7] = tm[5]; te[8] = tm[8];
         return this;

         },*/

        setQuat: function ( q ) {

            var te = this.elements;
            var x = q.x, y = q.y, z = q.z, w = q.w;
            var x2 = x + x,  y2 = y + y, z2 = z + z;
            var xx = x * x2, xy = x * y2, xz = x * z2;
            var yy = y * y2, yz = y * z2, zz = z * z2;
            var wx = w * x2, wy = w * y2, wz = w * z2;

            te[0] = 1 - ( yy + zz );
            te[1] = xy - wz;
            te[2] = xz + wy;

            te[3] = xy + wz;
            te[4] = 1 - ( xx + zz );
            te[5] = yz - wx;

            te[6] = xz - wy;
            te[7] = yz + wx;
            te[8] = 1 - ( xx + yy );

            return this;

        },

        invert: function( m ) {

            var te = this.elements, tm = m.elements,
                a00 = tm[0], a10 = tm[3], a20 = tm[6],
                a01 = tm[1], a11 = tm[4], a21 = tm[7],
                a02 = tm[2], a12 = tm[5], a22 = tm[8],
                b01 = a22 * a11 - a12 * a21,
                b11 = -a22 * a10 + a12 * a20,
                b21 = a21 * a10 - a11 * a20,
                det = a00 * b01 + a01 * b11 + a02 * b21;

            if ( det === 0 ) {
                console.log( "can't invert matrix, determinant is 0");
                return this.identity();
            }

            det = 1.0 / det;
            te[0] = b01 * det;
            te[1] = (-a22 * a01 + a02 * a21) * det;
            te[2] = (a12 * a01 - a02 * a11) * det;
            te[3] = b11 * det;
            te[4] = (a22 * a00 - a02 * a20) * det;
            te[5] = (-a12 * a00 + a02 * a10) * det;
            te[6] = b21 * det;
            te[7] = (-a21 * a00 + a01 * a20) * det;
            te[8] = (a11 * a00 - a01 * a10) * det;
            return this;

        },

        addOffset: function ( m, v ) {

            var relX = v.x;
            var relY = v.y;
            var relZ = v.z;

            var te = this.elements;
            te[0] += m * ( relY * relY + relZ * relZ );
            te[4] += m * ( relX * relX + relZ * relZ );
            te[8] += m * ( relX * relX + relY * relY );
            var xy = m * relX * relY;
            var yz = m * relY * relZ;
            var zx = m * relZ * relX;
            te[1] -= xy;
            te[3] -= xy;
            te[2] -= yz;
            te[6] -= yz;
            te[5] -= zx;
            te[7] -= zx;
            return this;

        },

        subOffset: function ( m, v ) {

            var relX = v.x;
            var relY = v.y;
            var relZ = v.z;

            var te = this.elements;
            te[0] -= m * ( relY * relY + relZ * relZ );
            te[4] -= m * ( relX * relX + relZ * relZ );
            te[8] -= m * ( relX * relX + relY * relY );
            var xy = m * relX * relY;
            var yz = m * relY * relZ;
            var zx = m * relZ * relX;
            te[1] += xy;
            te[3] += xy;
            te[2] += yz;
            te[6] += yz;
            te[5] += zx;
            te[7] += zx;
            return this;

        },

        // OK

        multiplyScalar: function ( s ) {

            var te = this.elements;

            te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
            te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
            te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

            return this;

        },

        identity: function () {

            this.set( 1, 0, 0, 0, 1, 0, 0, 0, 1 );
            return this;

        },


        clone: function () {

            return new Mat33().fromArray( this.elements );

        },

        copy: function ( m ) {

            for ( var i = 0; i < 9; i ++ ) this.elements[ i ] = m.elements[ i ];
            return this;

        },

        determinant: function () {

            var te = this.elements;
            var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
                d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
                g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

            return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

        },

        fromArray: function ( array, offset ) {

            if ( offset === undefined ) offset = 0;

            for( var i = 0; i < 9; i ++ ) {

                this.elements[ i ] = array[ i + offset ];

            }

            return this;

        },

        toArray: function ( array, offset ) {

            if ( array === undefined ) array = [];
            if ( offset === undefined ) offset = 0;

            var te = this.elements;

            array[ offset ] = te[ 0 ];
            array[ offset + 1 ] = te[ 1 ];
            array[ offset + 2 ] = te[ 2 ];

            array[ offset + 3 ] = te[ 3 ];
            array[ offset + 4 ] = te[ 4 ];
            array[ offset + 5 ] = te[ 5 ];

            array[ offset + 6 ] = te[ 6 ];
            array[ offset + 7 ] = te[ 7 ];
            array[ offset + 8 ] = te[ 8 ];

            return array;

        }


    } );

    /**
     * An axis-aligned bounding box.
     *
     * @author saharan
     * @author lo-th
     */

    function AABB( minX, maxX, minY, maxY, minZ, maxZ ){

        this.elements = new Float32Array( 6 );
        var te = this.elements;

        te[0] = minX || 0; te[1] = minY || 0; te[2] = minZ || 0;
        te[3] = maxX || 0; te[4] = maxY || 0; te[5] = maxZ || 0;

    }

    Object.assign( AABB.prototype, {

        AABB: true,

        set: function(minX, maxX, minY, maxY, minZ, maxZ){

            var te = this.elements;
            te[0] = minX;
            te[3] = maxX;
            te[1] = minY;
            te[4] = maxY;
            te[2] = minZ;
            te[5] = maxZ;
            return this;
        },

        intersectTest: function ( aabb ) {

            var te = this.elements;
            var ue = aabb.elements;
            return te[0] > ue[3] || te[1] > ue[4] || te[2] > ue[5] || te[3] < ue[0] || te[4] < ue[1] || te[5] < ue[2] ? true : false;

        },

        intersectTestTwo: function ( aabb ) {

            var te = this.elements;
            var ue = aabb.elements;
            return te[0] < ue[0] || te[1] < ue[1] || te[2] < ue[2] || te[3] > ue[3] || te[4] > ue[4] || te[5] > ue[5] ? true : false;

        },

        clone: function () {

            return new this.constructor().fromArray( this.elements );

        },

        copy: function ( aabb, margin ) {

            var m = margin || 0;
            var me = aabb.elements;
            this.set( me[ 0 ]-m, me[ 3 ]+m, me[ 1 ]-m, me[ 4 ]+m, me[ 2 ]-m, me[ 5 ]+m );
            return this;

        },

        fromArray: function ( array ) {

            this.elements.set( array );
            return this;

        },

        // Set this AABB to the combined AABB of aabb1 and aabb2.

        combine: function( aabb1, aabb2 ) {

            var a = aabb1.elements;
            var b = aabb2.elements;
            var te = this.elements;

            te[0] = a[0] < b[0] ? a[0] : b[0];
            te[1] = a[1] < b[1] ? a[1] : b[1];
            te[2] = a[2] < b[2] ? a[2] : b[2];

            te[3] = a[3] > b[3] ? a[3] : b[3];
            te[4] = a[4] > b[4] ? a[4] : b[4];
            te[5] = a[5] > b[5] ? a[5] : b[5];

            return this;

        },


        // Get the surface area.

        surfaceArea: function () {

            var te = this.elements;
            var a = te[3] - te[0];
            var h = te[4] - te[1];
            var d = te[5] - te[2];
            return 2 * (a * (h + d) + h * d );

        },


        // Get whether the AABB intersects with the point or not.

        intersectsWithPoint:function(x,y,z){

            var te = this.elements;
            return x>=te[0] && x<=te[3] && y>=te[1] && y<=te[4] && z>=te[2] && z<=te[5];

        },

        /**
         * Set the AABB from an array
         * of vertices. From THREE.
         * @author WestLangley
         * @author xprogram
         */

        setFromPoints: function(arr){
            this.makeEmpty();
            for(var i = 0; i < arr.length; i++){
                this.expandByPoint(arr[i]);
            }
        },

        makeEmpty: function(){
            this.set(-Infinity, -Infinity, -Infinity, Infinity, Infinity, Infinity);
        },

        expandByPoint: function(pt){
            var te = this.elements;
            this.set(
                _Math.min(te[ 0 ], pt.x), _Math.min(te[ 1 ], pt.y), _Math.min(te[ 2 ], pt.z),
                _Math.max(te[ 3 ], pt.x), _Math.max(te[ 4 ], pt.y), _Math.max(te[ 5 ], pt.z)
            );
        },

        expandByScalar: function(s){

            var te = this.elements;
            te[0] += -s;
            te[1] += -s;
            te[2] += -s;
            te[3] += s;
            te[4] += s;
            te[5] += s;
        }

    });

    var count = 0;
    function ShapeIdCount() { return count++; }

    /**
     * A shape is used to detect collisions of rigid bodies.
     *
     * @author saharan
     * @author lo-th
     */

    function Shape ( config ) {

        this.type = SHAPE_NULL;

        // global identification of the shape should be unique to the shape.
        this.id = ShapeIdCount();

        // previous shape in parent rigid body. Used for fast interations.
        this.prev = null;

        // next shape in parent rigid body. Used for fast interations.
        this.next = null;

        // proxy of the shape used for broad-phase collision detection.
        this.proxy = null;

        // parent rigid body of the shape.
        this.parent = null;

        // linked list of the contacts with the shape.
        this.contactLink = null;

        // number of the contacts with the shape.
        this.numContacts = 0;

        // center of gravity of the shape in world coordinate system.
        this.position = new Vec3();

        // rotation matrix of the shape in world coordinate system.
        this.rotation = new Mat33();

        // position of the shape in parent's coordinate system.
        this.relativePosition = new Vec3().copy( config.relativePosition );

        // rotation matrix of the shape in parent's coordinate system.
        this.relativeRotation = new Mat33().copy( config.relativeRotation );

        // axis-aligned bounding box of the shape.
        this.aabb = new AABB();

        // density of the shape.
        this.density = config.density;

        // coefficient of friction of the shape.
        this.friction = config.friction;

        // coefficient of restitution of the shape.
        this.restitution = config.restitution;

        // bits of the collision groups to which the shape belongs.
        this.belongsTo = config.belongsTo;

        // bits of the collision groups with which the shape collides.
        this.collidesWith = config.collidesWith;

    }

    Object.assign( Shape.prototype, {

        Shape: true,

        // Calculate the mass information of the shape.

        calculateMassInfo: function( out ){

            printError("Shape", "Inheritance error.");

        },

        // Update the proxy of the shape.

        updateProxy: function(){

            printError("Shape", "Inheritance error.");

        }

    });

    /**
     * Box shape.
     * @author saharan
     * @author lo-th
     */

    function Box ( config, Width, Height, Depth ) {

        Shape.call( this, config );

        this.type = SHAPE_BOX;

        this.width = Width;
        this.height = Height;
        this.depth = Depth;

        this.halfWidth = Width * 0.5;
        this.halfHeight = Height * 0.5;
        this.halfDepth = Depth * 0.5;

        this.dimentions = new Float32Array( 18 );
        this.elements = new Float32Array( 24 );

    }

    Box.prototype = Object.assign( Object.create( Shape.prototype ), {

        constructor: Box,

        calculateMassInfo: function ( out ) {

            var mass = this.width * this.height * this.depth * this.density;
            var divid = 1/12;
            out.mass = mass;
            out.inertia.set(
                mass * ( this.height * this.height + this.depth * this.depth ) * divid, 0, 0,
                0, mass * ( this.width * this.width + this.depth * this.depth ) * divid, 0,
                0, 0, mass * ( this.width * this.width + this.height * this.height ) * divid
            );

        },

        updateProxy: function () {

            var te = this.rotation.elements;
            var di = this.dimentions;
            // Width
            di[0] = te[0];
            di[1] = te[3];
            di[2] = te[6];
            // Height
            di[3] = te[1];
            di[4] = te[4];
            di[5] = te[7];
            // Depth
            di[6] = te[2];
            di[7] = te[5];
            di[8] = te[8];
            // half Width
            di[9] = te[0] * this.halfWidth;
            di[10] = te[3] * this.halfWidth;
            di[11] = te[6] * this.halfWidth;
            // half Height
            di[12] = te[1] * this.halfHeight;
            di[13] = te[4] * this.halfHeight;
            di[14] = te[7] * this.halfHeight;
            // half Depth
            di[15] = te[2] * this.halfDepth;
            di[16] = te[5] * this.halfDepth;
            di[17] = te[8] * this.halfDepth;

            var wx = di[9];
            var wy = di[10];
            var wz = di[11];
            var hx = di[12];
            var hy = di[13];
            var hz = di[14];
            var dx = di[15];
            var dy = di[16];
            var dz = di[17];

            var x = this.position.x;
            var y = this.position.y;
            var z = this.position.z;

            var v = this.elements;
            //v1
            v[0] = x + wx + hx + dx;
            v[1] = y + wy + hy + dy;
            v[2] = z + wz + hz + dz;
            //v2
            v[3] = x + wx + hx - dx;
            v[4] = y + wy + hy - dy;
            v[5] = z + wz + hz - dz;
            //v3
            v[6] = x + wx - hx + dx;
            v[7] = y + wy - hy + dy;
            v[8] = z + wz - hz + dz;
            //v4
            v[9] = x + wx - hx - dx;
            v[10] = y + wy - hy - dy;
            v[11] = z + wz - hz - dz;
            //v5
            v[12] = x - wx + hx + dx;
            v[13] = y - wy + hy + dy;
            v[14] = z - wz + hz + dz;
            //v6
            v[15] = x - wx + hx - dx;
            v[16] = y - wy + hy - dy;
            v[17] = z - wz + hz - dz;
            //v7
            v[18] = x - wx - hx + dx;
            v[19] = y - wy - hy + dy;
            v[20] = z - wz - hz + dz;
            //v8
            v[21] = x - wx - hx - dx;
            v[22] = y - wy - hy - dy;
            v[23] = z - wz - hz - dz;

            var w = di[9] < 0 ? -di[9] : di[9];
            var h = di[10] < 0 ? -di[10] : di[10];
            var d = di[11] < 0 ? -di[11] : di[11];

            w = di[12] < 0 ? w - di[12] : w + di[12];
            h = di[13] < 0 ? h - di[13] : h + di[13];
            d = di[14] < 0 ? d - di[14] : d + di[14];

            w = di[15] < 0 ? w - di[15] : w + di[15];
            h = di[16] < 0 ? h - di[16] : h + di[16];
            d = di[17] < 0 ? d - di[17] : d + di[17];

            var p = AABB_PROX;

            this.aabb.set(
                this.position.x - w - p, this.position.x + w + p,
                this.position.y - h - p, this.position.y + h + p,
                this.position.z - d - p, this.position.z + d + p
            );

            if ( this.proxy != null ) this.proxy.update();

        }
    });

    /**
     * Sphere shape
     * @author saharan
     * @author lo-th
     */

    function Sphere( config, radius ) {

        Shape.call( this, config );

        this.type = SHAPE_SPHERE;

        // radius of the shape.
        this.radius = radius;

    }

    Sphere.prototype = Object.assign( Object.create( Shape.prototype ), {

        constructor: Sphere,

        volume: function () {

            return _Math.PI * this.radius * 1.333333;

        },

        calculateMassInfo: function ( out ) {

            var mass = this.volume() * this.radius * this.radius * this.density; //1.333 * _Math.PI * this.radius * this.radius * this.radius * this.density;
            out.mass = mass;
            var inertia = mass * this.radius * this.radius * 0.4;
            out.inertia.set( inertia, 0, 0, 0, inertia, 0, 0, 0, inertia );

        },

        updateProxy: function () {

            var p = AABB_PROX;

            this.aabb.set(
                this.position.x - this.radius - p, this.position.x + this.radius + p,
                this.position.y - this.radius - p, this.position.y + this.radius + p,
                this.position.z - this.radius - p, this.position.z + this.radius + p
            );

            if ( this.proxy != null ) this.proxy.update();

        }

    });

    /**
     * Cylinder shape
     * @author saharan
     * @author lo-th
     */

    function Cylinder ( config, radius, height ) {

        Shape.call( this, config );

        this.type = SHAPE_CYLINDER;

        this.radius = radius;
        this.height = height;
        this.halfHeight = height * 0.5;

        this.normalDirection = new Vec3();
        this.halfDirection = new Vec3();

    }

    Cylinder.prototype = Object.assign( Object.create( Shape.prototype ), {

        constructor: Cylinder,

        calculateMassInfo: function ( out ) {

            var rsq = this.radius * this.radius;
            var mass = _Math.PI * rsq * this.height * this.density;
            var inertiaXZ = ( ( 0.25 * rsq ) + ( 0.0833 * this.height * this.height ) ) * mass;
            var inertiaY = 0.5 * rsq;
            out.mass = mass;
            out.inertia.set( inertiaXZ, 0, 0,  0, inertiaY, 0,  0, 0, inertiaXZ );

        },

        updateProxy: function () {

            var te = this.rotation.elements;
            var len, wx, hy, dz, xx, yy, zz, w, h, d, p;

            xx = te[1] * te[1];
            yy = te[4] * te[4];
            zz = te[7] * te[7];

            this.normalDirection.set( te[1], te[4], te[7] );
            this.halfDirection.scale( this.normalDirection, this.halfHeight );

            wx = 1 - xx;
            len = _Math.sqrt(wx*wx + xx*yy + xx*zz);
            if(len>0) len = this.radius/len;
            wx *= len;
            hy = 1 - yy;
            len = _Math.sqrt(yy*xx + hy*hy + yy*zz);
            if(len>0) len = this.radius/len;
            hy *= len;
            dz = 1 - zz;
            len = _Math.sqrt(zz*xx + zz*yy + dz*dz);
            if(len>0) len = this.radius/len;
            dz *= len;

            w = this.halfDirection.x < 0 ? -this.halfDirection.x : this.halfDirection.x;
            h = this.halfDirection.y < 0 ? -this.halfDirection.y : this.halfDirection.y;
            d = this.halfDirection.z < 0 ? -this.halfDirection.z : this.halfDirection.z;

            w = wx < 0 ? w - wx : w + wx;
            h = hy < 0 ? h - hy : h + hy;
            d = dz < 0 ? d - dz : d + dz;

            p = AABB_PROX;

            this.aabb.set(
                this.position.x - w - p, this.position.x + w + p,
                this.position.y - h - p, this.position.y + h + p,
                this.position.z - d - p, this.position.z + d + p
            );

            if ( this.proxy != null ) this.proxy.update();

        }

    });

    /**
     * Plane shape.
     * @author lo-th
     */

    function Plane( config, normal ) {

        Shape.call( this, config );

        this.type = SHAPE_PLANE;

        // radius of the shape.
        this.normal = new Vec3( 0, 1, 0 );

    }

    Plane.prototype = Object.assign( Object.create( Shape.prototype ), {

        constructor: Plane,

        volume: function () {

            return Number.MAX_VALUE;

        },

        calculateMassInfo: function ( out ) {

            out.mass = this.density;//0.0001;
            var inertia = 1;
            out.inertia.set( inertia, 0, 0, 0, inertia, 0, 0, 0, inertia );

        },

        updateProxy: function () {

            var p = AABB_PROX;

            var min = -_Math.INF;
            var max = _Math.INF;
            var n = this.normal;
            // The plane AABB is infinite, except if the normal is pointing along any axis
            this.aabb.set(
                n.x === -1 ? this.position.x - p : min, n.x === 1 ? this.position.x + p : max,
                n.y === -1 ? this.position.y - p : min, n.y === 1 ? this.position.y + p : max,
                n.z === -1 ? this.position.z - p : min, n.z === 1 ? this.position.z + p : max
            );

            if ( this.proxy != null ) this.proxy.update();

        }

    });

    /**
     * A Particule shape
     * @author lo-th
     */

    function Particle( config, normal ) {

        Shape.call( this, config );

        this.type = SHAPE_PARTICLE;

    }

    Particle.prototype = Object.assign( Object.create( Shape.prototype ), {

        constructor: Particle,

        volume: function () {

            return Number.MAX_VALUE;

        },

        calculateMassInfo: function ( out ) {

            var inertia = 0;
            out.inertia.set( inertia, 0, 0, 0, inertia, 0, 0, 0, inertia );

        },

        updateProxy: function () {

            var p = 0;//AABB_PROX;

            this.aabb.set(
                this.position.x - p, this.position.x + p,
                this.position.y - p, this.position.y + p,
                this.position.z - p, this.position.z + p
            );

            if ( this.proxy != null ) this.proxy.update();

        }

    });

    /**
     * A shape configuration holds common configuration data for constructing a shape.
     * These configurations can be reused safely.
     *
     * @author saharan
     * @author lo-th
     */

    function ShapeConfig(){

        // position of the shape in parent's coordinate system.
        this.relativePosition = new Vec3();
        // rotation matrix of the shape in parent's coordinate system.
        this.relativeRotation = new Mat33();
        // coefficient of friction of the shape.
        this.friction = 0.2; // 0.4
        // coefficient of restitution of the shape.
        this.restitution = 0.2;
        // density of the shape.
        this.density = 1;
        // bits of the collision groups to which the shape belongs.
        this.belongsTo = 1;
        // bits of the collision groups with which the shape collides.
        this.collidesWith = 0xffffffff;

    }

    /**
     * An information of limit and motor.
     *
     * @author saharan
     */

    function LimitMotor ( axis, fixed ) {

        fixed = fixed || false;
        // The axis of the constraint.
        this.axis = axis;
        // The current angle for rotational constraints.
        this.angle = 0;
        // The lower limit. Set lower > upper to disable
        this.lowerLimit = fixed ? 0 : 1;

        //  The upper limit. Set lower > upper to disable.
        this.upperLimit = 0;
        // The target motor speed.
        this.motorSpeed = 0;
        // The maximum motor force or torque. Set 0 to disable.
        this.maxMotorForce = 0;
        // The frequency of the spring. Set 0 to disable.
        this.frequency = 0;
        // The damping ratio of the spring. Set 0 for no damping, 1 for critical damping.
        this.dampingRatio = 0;

    }

    Object.assign( LimitMotor.prototype, {

        LimitMotor: true,

        // Set limit data into this constraint.
        setLimit:function ( lowerLimit, upperLimit ) {

            this.lowerLimit = lowerLimit;
            this.upperLimit = upperLimit;

        },

        // Set motor data into this constraint.
        setMotor:function ( motorSpeed, maxMotorForce ) {

            this.motorSpeed = motorSpeed;
            this.maxMotorForce = maxMotorForce;

        },

        // Set spring data into this constraint.
        setSpring:function ( frequency, dampingRatio ) {

            this.frequency = frequency;
            this.dampingRatio = dampingRatio;

        }

    });

    /**
     * The base class of all type of the constraints.
     *
     * @author saharan
     * @author lo-th
     */

    function Constraint(){

        // parent world of the constraint.
        this.parent = null;

        // first body of the constraint.
        this.body1 = null;

        // second body of the constraint.
        this.body2 = null;

        // Internal
        this.addedToIsland = false;

    }

    Object.assign( Constraint.prototype, {

        Constraint: true,

        // Prepare for solving the constraint
        preSolve: function( timeStep, invTimeStep ){

            printError("Constraint", "Inheritance error.");

        },

        // Solve the constraint. This is usually called iteratively.
        solve: function(){

            printError("Constraint", "Inheritance error.");

        },

        // Do the post-processing.
        postSolve: function(){

            printError("Constraint", "Inheritance error.");

        }

    });

    function JointLink ( joint ){

        // The previous joint link.
        this.prev = null;
        // The next joint link.
        this.next = null;
        // The other rigid body connected to the joint.
        this.body = null;
        // The joint of the link.
        this.joint = joint;

    }

    /**
     * Joints are used to constrain the motion between two rigid bodies.
     *
     * @author saharan
     * @author lo-th
     */

    function Joint ( config ){

        Constraint.call( this );

        this.scale = 1;
        this.invScale = 1;

        // joint name
        this.name = "";
        this.id = NaN;

        // The type of the joint.
        this.type = JOINT_NULL;
        //  The previous joint in the world.
        this.prev = null;
        // The next joint in the world.
        this.next = null;

        this.body1 = config.body1;
        this.body2 = config.body2;

        // anchor point on the first rigid body in local coordinate system.
        this.localAnchorPoint1 = new Vec3().copy( config.localAnchorPoint1 );
        // anchor point on the second rigid body in local coordinate system.
        this.localAnchorPoint2 = new Vec3().copy( config.localAnchorPoint2 );
        // anchor point on the first rigid body in world coordinate system relative to the body's origin.
        this.relativeAnchorPoint1 = new Vec3();
        // anchor point on the second rigid body in world coordinate system relative to the body's origin.
        this.relativeAnchorPoint2 = new Vec3();
        //  anchor point on the first rigid body in world coordinate system.
        this.anchorPoint1 = new Vec3();
        // anchor point on the second rigid body in world coordinate system.
        this.anchorPoint2 = new Vec3();
        // Whether allow collision between connected rigid bodies or not.
        this.allowCollision = config.allowCollision;

        this.b1Link = new JointLink( this );
        this.b2Link = new JointLink( this );

    }

    Joint.prototype = Object.assign( Object.create( Constraint.prototype ), {

        constructor: Joint,

        setId: function ( n ) {

            this.id = i;

        },

        setParent: function ( world ) {

            this.parent = world;
            this.scale = this.parent.scale;
            this.invScale = this.parent.invScale;
            this.id = this.parent.numJoints;
            if( !this.name ) this.name = 'J' +  this.id;

        },

        // Update all the anchor points.

        updateAnchorPoints: function () {

            this.relativeAnchorPoint1.copy( this.localAnchorPoint1 ).applyMatrix3( this.body1.rotation, true );
            this.relativeAnchorPoint2.copy( this.localAnchorPoint2 ).applyMatrix3( this.body2.rotation, true );

            this.anchorPoint1.add( this.relativeAnchorPoint1, this.body1.position );
            this.anchorPoint2.add( this.relativeAnchorPoint2, this.body2.position );

        },

        // Attach the joint from the bodies.

        attach: function ( isX ) {

            this.b1Link.body = this.body2;
            this.b2Link.body = this.body1;

            if(isX){

                this.body1.jointLink.push( this.b1Link );
                this.body2.jointLink.push( this.b2Link );

            } else {

                if(this.body1.jointLink != null) (this.b1Link.next=this.body1.jointLink).prev = this.b1Link;
                else this.b1Link.next = null;
                this.body1.jointLink = this.b1Link;
                this.body1.numJoints++;
                if(this.body2.jointLink != null) (this.b2Link.next=this.body2.jointLink).prev = this.b2Link;
                else this.b2Link.next = null;
                this.body2.jointLink = this.b2Link;
                this.body2.numJoints++;

            }

        },

        // Detach the joint from the bodies.

        detach: function ( isX ) {

            if( isX ){

                this.body1.jointLink.splice( this.body1.jointLink.indexOf( this.b1Link ), 1 );
                this.body2.jointLink.splice( this.body2.jointLink.indexOf( this.b2Link ), 1 );

            } else {

                var prev = this.b1Link.prev;
                var next = this.b1Link.next;
                if(prev != null) prev.next = next;
                if(next != null) next.prev = prev;
                if(this.body1.jointLink == this.b1Link) this.body1.jointLink = next;
                this.b1Link.prev = null;
                this.b1Link.next = null;
                this.b1Link.body = null;
                this.body1.numJoints--;

                prev = this.b2Link.prev;
                next = this.b2Link.next;
                if(prev != null) prev.next = next;
                if(next != null) next.prev = prev;
                if(this.body2.jointLink==this.b2Link) this.body2.jointLink = next;
                this.b2Link.prev = null;
                this.b2Link.next = null;
                this.b2Link.body = null;
                this.body2.numJoints--;

            }

            this.b1Link.body = null;
            this.b2Link.body = null;

        },


        // Awake the bodies.

        awake: function () {

            this.body1.awake();
            this.body2.awake();

        },

        // calculation function

        preSolve: function ( timeStep, invTimeStep ) {

        },

        solve: function () {

        },

        postSolve: function () {

        },

        // Delete process

        remove: function () {

            this.dispose();

        },

        dispose: function () {

            this.parent.removeJoint( this );

        },


        // Three js add

        getPosition: function () {

            var p1 = new Vec3().scale( this.anchorPoint1, this.scale );
            var p2 = new Vec3().scale( this.anchorPoint2, this.scale );
            return [ p1, p2 ];

        }

    });

    /**
     * A linear constraint for all axes for various joints.
     * @author saharan
     */
    function LinearConstraint ( joint ){

        this.m1=NaN;
        this.m2=NaN;

        this.ii1 = null;
        this.ii2 = null;
        this.dd = null;

        this.r1x=NaN;
        this.r1y=NaN;
        this.r1z=NaN;

        this.r2x=NaN;
        this.r2y=NaN;
        this.r2z=NaN;

        this.ax1x=NaN;
        this.ax1y=NaN;
        this.ax1z=NaN;
        this.ay1x=NaN;
        this.ay1y=NaN;
        this.ay1z=NaN;
        this.az1x=NaN;
        this.az1y=NaN;
        this.az1z=NaN;

        this.ax2x=NaN;
        this.ax2y=NaN;
        this.ax2z=NaN;
        this.ay2x=NaN;
        this.ay2y=NaN;
        this.ay2z=NaN;
        this.az2x=NaN;
        this.az2y=NaN;
        this.az2z=NaN;

        this.vel=NaN;
        this.velx=NaN;
        this.vely=NaN;
        this.velz=NaN;


        this.joint = joint;
        this.r1 = joint.relativeAnchorPoint1;
        this.r2 = joint.relativeAnchorPoint2;
        this.p1 = joint.anchorPoint1;
        this.p2 = joint.anchorPoint2;
        this.b1 = joint.body1;
        this.b2 = joint.body2;
        this.l1 = this.b1.linearVelocity;
        this.l2 = this.b2.linearVelocity;
        this.a1 = this.b1.angularVelocity;
        this.a2 = this.b2.angularVelocity;
        this.i1 = this.b1.inverseInertia;
        this.i2 = this.b2.inverseInertia;
        this.impx = 0;
        this.impy = 0;
        this.impz = 0;

    }

    Object.assign( LinearConstraint.prototype, {

        LinearConstraint: true,

        preSolve: function ( timeStep, invTimeStep ) {

            this.r1x = this.r1.x;
            this.r1y = this.r1.y;
            this.r1z = this.r1.z;

            this.r2x = this.r2.x;
            this.r2y = this.r2.y;
            this.r2z = this.r2.z;

            this.m1 = this.b1.inverseMass;
            this.m2 = this.b2.inverseMass;

            this.ii1 = this.i1.clone();
            this.ii2 = this.i2.clone();

            var ii1 = this.ii1.elements;
            var ii2 = this.ii2.elements;

            this.ax1x = this.r1z*ii1[1]+-this.r1y*ii1[2];
            this.ax1y = this.r1z*ii1[4]+-this.r1y*ii1[5];
            this.ax1z = this.r1z*ii1[7]+-this.r1y*ii1[8];
            this.ay1x = -this.r1z*ii1[0]+this.r1x*ii1[2];
            this.ay1y = -this.r1z*ii1[3]+this.r1x*ii1[5];
            this.ay1z = -this.r1z*ii1[6]+this.r1x*ii1[8];
            this.az1x = this.r1y*ii1[0]+-this.r1x*ii1[1];
            this.az1y = this.r1y*ii1[3]+-this.r1x*ii1[4];
            this.az1z = this.r1y*ii1[6]+-this.r1x*ii1[7];
            this.ax2x = this.r2z*ii2[1]+-this.r2y*ii2[2];
            this.ax2y = this.r2z*ii2[4]+-this.r2y*ii2[5];
            this.ax2z = this.r2z*ii2[7]+-this.r2y*ii2[8];
            this.ay2x = -this.r2z*ii2[0]+this.r2x*ii2[2];
            this.ay2y = -this.r2z*ii2[3]+this.r2x*ii2[5];
            this.ay2z = -this.r2z*ii2[6]+this.r2x*ii2[8];
            this.az2x = this.r2y*ii2[0]+-this.r2x*ii2[1];
            this.az2y = this.r2y*ii2[3]+-this.r2x*ii2[4];
            this.az2z = this.r2y*ii2[6]+-this.r2x*ii2[7];

            // calculate point-to-point mass matrix
            // from impulse equation
            //
            // M = ([/m] - [r^][/I][r^]) ^ -1
            //
            // where
            //
            // [/m] = |1/m, 0, 0|
            //        |0, 1/m, 0|
            //        |0, 0, 1/m|
            //
            // [r^] = |0, -rz, ry|
            //        |rz, 0, -rx|
            //        |-ry, rx, 0|
            //
            // [/I] = Inverted moment inertia

            var rxx = this.m1+this.m2;

            var kk = new Mat33().set( rxx, 0, 0,  0, rxx, 0,  0, 0, rxx );
            var k = kk.elements;

            k[0] += ii1[4]*this.r1z*this.r1z-(ii1[7]+ii1[5])*this.r1y*this.r1z+ii1[8]*this.r1y*this.r1y;
            k[1] += (ii1[6]*this.r1y+ii1[5]*this.r1x)*this.r1z-ii1[3]*this.r1z*this.r1z-ii1[8]*this.r1x*this.r1y;
            k[2] += (ii1[3]*this.r1y-ii1[4]*this.r1x)*this.r1z-ii1[6]*this.r1y*this.r1y+ii1[7]*this.r1x*this.r1y;
            k[3] += (ii1[2]*this.r1y+ii1[7]*this.r1x)*this.r1z-ii1[1]*this.r1z*this.r1z-ii1[8]*this.r1x*this.r1y;
            k[4] += ii1[0]*this.r1z*this.r1z-(ii1[6]+ii1[2])*this.r1x*this.r1z+ii1[8]*this.r1x*this.r1x;
            k[5] += (ii1[1]*this.r1x-ii1[0]*this.r1y)*this.r1z-ii1[7]*this.r1x*this.r1x+ii1[6]*this.r1x*this.r1y;
            k[6] += (ii1[1]*this.r1y-ii1[4]*this.r1x)*this.r1z-ii1[2]*this.r1y*this.r1y+ii1[5]*this.r1x*this.r1y;
            k[7] += (ii1[3]*this.r1x-ii1[0]*this.r1y)*this.r1z-ii1[5]*this.r1x*this.r1x+ii1[2]*this.r1x*this.r1y;
            k[8] += ii1[0]*this.r1y*this.r1y-(ii1[3]+ii1[1])*this.r1x*this.r1y+ii1[4]*this.r1x*this.r1x;

            k[0] += ii2[4]*this.r2z*this.r2z-(ii2[7]+ii2[5])*this.r2y*this.r2z+ii2[8]*this.r2y*this.r2y;
            k[1] += (ii2[6]*this.r2y+ii2[5]*this.r2x)*this.r2z-ii2[3]*this.r2z*this.r2z-ii2[8]*this.r2x*this.r2y;
            k[2] += (ii2[3]*this.r2y-ii2[4]*this.r2x)*this.r2z-ii2[6]*this.r2y*this.r2y+ii2[7]*this.r2x*this.r2y;
            k[3] += (ii2[2]*this.r2y+ii2[7]*this.r2x)*this.r2z-ii2[1]*this.r2z*this.r2z-ii2[8]*this.r2x*this.r2y;
            k[4] += ii2[0]*this.r2z*this.r2z-(ii2[6]+ii2[2])*this.r2x*this.r2z+ii2[8]*this.r2x*this.r2x;
            k[5] += (ii2[1]*this.r2x-ii2[0]*this.r2y)*this.r2z-ii2[7]*this.r2x*this.r2x+ii2[6]*this.r2x*this.r2y;
            k[6] += (ii2[1]*this.r2y-ii2[4]*this.r2x)*this.r2z-ii2[2]*this.r2y*this.r2y+ii2[5]*this.r2x*this.r2y;
            k[7] += (ii2[3]*this.r2x-ii2[0]*this.r2y)*this.r2z-ii2[5]*this.r2x*this.r2x+ii2[2]*this.r2x*this.r2y;
            k[8] += ii2[0]*this.r2y*this.r2y-(ii2[3]+ii2[1])*this.r2x*this.r2y+ii2[4]*this.r2x*this.r2x;

            var inv=1/( k[0]*(k[4]*k[8]-k[7]*k[5]) + k[3]*(k[7]*k[2]-k[1]*k[8]) + k[6]*(k[1]*k[5]-k[4]*k[2]) );
            this.dd = new Mat33().set(
                k[4]*k[8]-k[5]*k[7], k[2]*k[7]-k[1]*k[8], k[1]*k[5]-k[2]*k[4],
                k[5]*k[6]-k[3]*k[8], k[0]*k[8]-k[2]*k[6], k[2]*k[3]-k[0]*k[5],
                k[3]*k[7]-k[4]*k[6], k[1]*k[6]-k[0]*k[7], k[0]*k[4]-k[1]*k[3]
            ).scaleEqual( inv );

            this.velx = this.p2.x-this.p1.x;
            this.vely = this.p2.y-this.p1.y;
            this.velz = this.p2.z-this.p1.z;
            var len = _Math.sqrt(this.velx*this.velx+this.vely*this.vely+this.velz*this.velz);
            if(len>0.005){
                len = (0.005-len)/len*invTimeStep*0.05;
                this.velx *= len;
                this.vely *= len;
                this.velz *= len;
            }else{
                this.velx = 0;
                this.vely = 0;
                this.velz = 0;
            }

            this.impx *= 0.95;
            this.impy *= 0.95;
            this.impz *= 0.95;

            this.l1.x += this.impx*this.m1;
            this.l1.y += this.impy*this.m1;
            this.l1.z += this.impz*this.m1;
            this.a1.x += this.impx*this.ax1x+this.impy*this.ay1x+this.impz*this.az1x;
            this.a1.y += this.impx*this.ax1y+this.impy*this.ay1y+this.impz*this.az1y;
            this.a1.z += this.impx*this.ax1z+this.impy*this.ay1z+this.impz*this.az1z;
            this.l2.x -= this.impx*this.m2;
            this.l2.y -= this.impy*this.m2;
            this.l2.z -= this.impz*this.m2;
            this.a2.x -= this.impx*this.ax2x+this.impy*this.ay2x+this.impz*this.az2x;
            this.a2.y -= this.impx*this.ax2y+this.impy*this.ay2y+this.impz*this.az2y;
            this.a2.z -= this.impx*this.ax2z+this.impy*this.ay2z+this.impz*this.az2z;
        },

        solve: function () {

            var d = this.dd.elements;
            var rvx = this.l2.x-this.l1.x+this.a2.y*this.r2z-this.a2.z*this.r2y-this.a1.y*this.r1z+this.a1.z*this.r1y-this.velx;
            var rvy = this.l2.y-this.l1.y+this.a2.z*this.r2x-this.a2.x*this.r2z-this.a1.z*this.r1x+this.a1.x*this.r1z-this.vely;
            var rvz = this.l2.z-this.l1.z+this.a2.x*this.r2y-this.a2.y*this.r2x-this.a1.x*this.r1y+this.a1.y*this.r1x-this.velz;
            var nimpx = rvx*d[0]+rvy*d[1]+rvz*d[2];
            var nimpy = rvx*d[3]+rvy*d[4]+rvz*d[5];
            var nimpz = rvx*d[6]+rvy*d[7]+rvz*d[8];
            this.impx += nimpx;
            this.impy += nimpy;
            this.impz += nimpz;
            this.l1.x += nimpx*this.m1;
            this.l1.y += nimpy*this.m1;
            this.l1.z += nimpz*this.m1;
            this.a1.x += nimpx*this.ax1x+nimpy*this.ay1x+nimpz*this.az1x;
            this.a1.y += nimpx*this.ax1y+nimpy*this.ay1y+nimpz*this.az1y;
            this.a1.z += nimpx*this.ax1z+nimpy*this.ay1z+nimpz*this.az1z;
            this.l2.x -= nimpx*this.m2;
            this.l2.y -= nimpy*this.m2;
            this.l2.z -= nimpz*this.m2;
            this.a2.x -= nimpx*this.ax2x+nimpy*this.ay2x+nimpz*this.az2x;
            this.a2.y -= nimpx*this.ax2y+nimpy*this.ay2y+nimpz*this.az2y;
            this.a2.z -= nimpx*this.ax2z+nimpy*this.ay2z+nimpz*this.az2z;

        }

    } );

    /**
     * A three-axis rotational constraint for various joints.
     * @author saharan
     */

    function Rotational3Constraint ( joint, limitMotor1, limitMotor2, limitMotor3 ) {

        this.cfm1=NaN;
        this.cfm2=NaN;
        this.cfm3=NaN;
        this.i1e00=NaN;
        this.i1e01=NaN;
        this.i1e02=NaN;
        this.i1e10=NaN;
        this.i1e11=NaN;
        this.i1e12=NaN;
        this.i1e20=NaN;
        this.i1e21=NaN;
        this.i1e22=NaN;
        this.i2e00=NaN;
        this.i2e01=NaN;
        this.i2e02=NaN;
        this.i2e10=NaN;
        this.i2e11=NaN;
        this.i2e12=NaN;
        this.i2e20=NaN;
        this.i2e21=NaN;
        this.i2e22=NaN;
        this.ax1=NaN;
        this.ay1=NaN;
        this.az1=NaN;
        this.ax2=NaN;
        this.ay2=NaN;
        this.az2=NaN;
        this.ax3=NaN;
        this.ay3=NaN;
        this.az3=NaN;

        this.a1x1=NaN; // jacoians
        this.a1y1=NaN;
        this.a1z1=NaN;
        this.a2x1=NaN;
        this.a2y1=NaN;
        this.a2z1=NaN;
        this.a1x2=NaN;
        this.a1y2=NaN;
        this.a1z2=NaN;
        this.a2x2=NaN;
        this.a2y2=NaN;
        this.a2z2=NaN;
        this.a1x3=NaN;
        this.a1y3=NaN;
        this.a1z3=NaN;
        this.a2x3=NaN;
        this.a2y3=NaN;
        this.a2z3=NaN;

        this.lowerLimit1=NaN;
        this.upperLimit1=NaN;
        this.limitVelocity1=NaN;
        this.limitState1=0; // -1: at lower, 0: locked, 1: at upper, 2: free
        this.enableMotor1=false;
        this.motorSpeed1=NaN;
        this.maxMotorForce1=NaN;
        this.maxMotorImpulse1=NaN;
        this.lowerLimit2=NaN;
        this.upperLimit2=NaN;
        this.limitVelocity2=NaN;
        this.limitState2=0; // -1: at lower, 0: locked, 1: at upper, 2: free
        this.enableMotor2=false;
        this.motorSpeed2=NaN;
        this.maxMotorForce2=NaN;
        this.maxMotorImpulse2=NaN;
        this.lowerLimit3=NaN;
        this.upperLimit3=NaN;
        this.limitVelocity3=NaN;
        this.limitState3=0; // -1: at lower, 0: locked, 1: at upper, 2: free
        this.enableMotor3=false;
        this.motorSpeed3=NaN;
        this.maxMotorForce3=NaN;
        this.maxMotorImpulse3=NaN;

        this.k00=NaN; // K = J*M*JT
        this.k01=NaN;
        this.k02=NaN;
        this.k10=NaN;
        this.k11=NaN;
        this.k12=NaN;
        this.k20=NaN;
        this.k21=NaN;
        this.k22=NaN;

        this.kv00=NaN; // diagonals without CFMs
        this.kv11=NaN;
        this.kv22=NaN;

        this.dv00=NaN; // ...inverted
        this.dv11=NaN;
        this.dv22=NaN;

        this.d00=NaN;  // K^-1
        this.d01=NaN;
        this.d02=NaN;
        this.d10=NaN;
        this.d11=NaN;
        this.d12=NaN;
        this.d20=NaN;
        this.d21=NaN;
        this.d22=NaN;

        this.limitMotor1=limitMotor1;
        this.limitMotor2=limitMotor2;
        this.limitMotor3=limitMotor3;
        this.b1=joint.body1;
        this.b2=joint.body2;
        this.a1=this.b1.angularVelocity;
        this.a2=this.b2.angularVelocity;
        this.i1=this.b1.inverseInertia;
        this.i2=this.b2.inverseInertia;
        this.limitImpulse1=0;
        this.motorImpulse1=0;
        this.limitImpulse2=0;
        this.motorImpulse2=0;
        this.limitImpulse3=0;
        this.motorImpulse3=0;

    }

    Object.assign( Rotational3Constraint.prototype, {

        Rotational3Constraint: true,

        preSolve: function( timeStep, invTimeStep ){

            this.ax1=this.limitMotor1.axis.x;
            this.ay1=this.limitMotor1.axis.y;
            this.az1=this.limitMotor1.axis.z;
            this.ax2=this.limitMotor2.axis.x;
            this.ay2=this.limitMotor2.axis.y;
            this.az2=this.limitMotor2.axis.z;
            this.ax3=this.limitMotor3.axis.x;
            this.ay3=this.limitMotor3.axis.y;
            this.az3=this.limitMotor3.axis.z;
            this.lowerLimit1=this.limitMotor1.lowerLimit;
            this.upperLimit1=this.limitMotor1.upperLimit;
            this.motorSpeed1=this.limitMotor1.motorSpeed;
            this.maxMotorForce1=this.limitMotor1.maxMotorForce;
            this.enableMotor1=this.maxMotorForce1>0;
            this.lowerLimit2=this.limitMotor2.lowerLimit;
            this.upperLimit2=this.limitMotor2.upperLimit;
            this.motorSpeed2=this.limitMotor2.motorSpeed;
            this.maxMotorForce2=this.limitMotor2.maxMotorForce;
            this.enableMotor2=this.maxMotorForce2>0;
            this.lowerLimit3=this.limitMotor3.lowerLimit;
            this.upperLimit3=this.limitMotor3.upperLimit;
            this.motorSpeed3=this.limitMotor3.motorSpeed;
            this.maxMotorForce3=this.limitMotor3.maxMotorForce;
            this.enableMotor3=this.maxMotorForce3>0;

            var ti1 = this.i1.elements;
            var ti2 = this.i2.elements;
            this.i1e00=ti1[0];
            this.i1e01=ti1[1];
            this.i1e02=ti1[2];
            this.i1e10=ti1[3];
            this.i1e11=ti1[4];
            this.i1e12=ti1[5];
            this.i1e20=ti1[6];
            this.i1e21=ti1[7];
            this.i1e22=ti1[8];

            this.i2e00=ti2[0];
            this.i2e01=ti2[1];
            this.i2e02=ti2[2];
            this.i2e10=ti2[3];
            this.i2e11=ti2[4];
            this.i2e12=ti2[5];
            this.i2e20=ti2[6];
            this.i2e21=ti2[7];
            this.i2e22=ti2[8];

            var frequency1=this.limitMotor1.frequency;
            var frequency2=this.limitMotor2.frequency;
            var frequency3=this.limitMotor3.frequency;
            var enableSpring1=frequency1>0;
            var enableSpring2=frequency2>0;
            var enableSpring3=frequency3>0;
            var enableLimit1=this.lowerLimit1<=this.upperLimit1;
            var enableLimit2=this.lowerLimit2<=this.upperLimit2;
            var enableLimit3=this.lowerLimit3<=this.upperLimit3;
            var angle1=this.limitMotor1.angle;
            if(enableLimit1){
                if(this.lowerLimit1==this.upperLimit1){
                    if(this.limitState1!=0){
                        this.limitState1=0;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.lowerLimit1-angle1;
                }else if(angle1<this.lowerLimit1){
                    if(this.limitState1!=-1){
                        this.limitState1=-1;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.lowerLimit1-angle1;
                }else if(angle1>this.upperLimit1){
                    if(this.limitState1!=1){
                        this.limitState1=1;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.upperLimit1-angle1;
                }else{
                    this.limitState1=2;
                    this.limitImpulse1=0;
                    this.limitVelocity1=0;
                }
                if(!enableSpring1){
                    if(this.limitVelocity1>0.02)this.limitVelocity1-=0.02;
                    else if(this.limitVelocity1<-0.02)this.limitVelocity1+=0.02;
                    else this.limitVelocity1=0;
                }
            }else{
                this.limitState1=2;
                this.limitImpulse1=0;
            }

            var angle2=this.limitMotor2.angle;
            if(enableLimit2){
                if(this.lowerLimit2==this.upperLimit2){
                    if(this.limitState2!=0){
                        this.limitState2=0;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.lowerLimit2-angle2;
                }else if(angle2<this.lowerLimit2){
                    if(this.limitState2!=-1){
                        this.limitState2=-1;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.lowerLimit2-angle2;
                }else if(angle2>this.upperLimit2){
                    if(this.limitState2!=1){
                        this.limitState2=1;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.upperLimit2-angle2;
                }else{
                    this.limitState2=2;
                    this.limitImpulse2=0;
                    this.limitVelocity2=0;
                }
                if(!enableSpring2){
                    if(this.limitVelocity2>0.02)this.limitVelocity2-=0.02;
                    else if(this.limitVelocity2<-0.02)this.limitVelocity2+=0.02;
                    else this.limitVelocity2=0;
                }
            }else{
                this.limitState2=2;
                this.limitImpulse2=0;
            }

            var angle3=this.limitMotor3.angle;
            if(enableLimit3){
                if(this.lowerLimit3==this.upperLimit3){
                    if(this.limitState3!=0){
                        this.limitState3=0;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.lowerLimit3-angle3;
                }else if(angle3<this.lowerLimit3){
                    if(this.limitState3!=-1){
                        this.limitState3=-1;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.lowerLimit3-angle3;
                }else if(angle3>this.upperLimit3){
                    if(this.limitState3!=1){
                        this.limitState3=1;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.upperLimit3-angle3;
                }else{
                    this.limitState3=2;
                    this.limitImpulse3=0;
                    this.limitVelocity3=0;
                }
                if(!enableSpring3){
                    if(this.limitVelocity3>0.02)this.limitVelocity3-=0.02;
                    else if(this.limitVelocity3<-0.02)this.limitVelocity3+=0.02;
                    else this.limitVelocity3=0;
                }
            }else{
                this.limitState3=2;
                this.limitImpulse3=0;
            }

            if(this.enableMotor1&&(this.limitState1!=0||enableSpring1)){
                this.maxMotorImpulse1=this.maxMotorForce1*timeStep;
            }else{
                this.motorImpulse1=0;
                this.maxMotorImpulse1=0;
            }
            if(this.enableMotor2&&(this.limitState2!=0||enableSpring2)){
                this.maxMotorImpulse2=this.maxMotorForce2*timeStep;
            }else{
                this.motorImpulse2=0;
                this.maxMotorImpulse2=0;
            }
            if(this.enableMotor3&&(this.limitState3!=0||enableSpring3)){
                this.maxMotorImpulse3=this.maxMotorForce3*timeStep;
            }else{
                this.motorImpulse3=0;
                this.maxMotorImpulse3=0;
            }

            // build jacobians
            this.a1x1=this.ax1*this.i1e00+this.ay1*this.i1e01+this.az1*this.i1e02;
            this.a1y1=this.ax1*this.i1e10+this.ay1*this.i1e11+this.az1*this.i1e12;
            this.a1z1=this.ax1*this.i1e20+this.ay1*this.i1e21+this.az1*this.i1e22;
            this.a2x1=this.ax1*this.i2e00+this.ay1*this.i2e01+this.az1*this.i2e02;
            this.a2y1=this.ax1*this.i2e10+this.ay1*this.i2e11+this.az1*this.i2e12;
            this.a2z1=this.ax1*this.i2e20+this.ay1*this.i2e21+this.az1*this.i2e22;

            this.a1x2=this.ax2*this.i1e00+this.ay2*this.i1e01+this.az2*this.i1e02;
            this.a1y2=this.ax2*this.i1e10+this.ay2*this.i1e11+this.az2*this.i1e12;
            this.a1z2=this.ax2*this.i1e20+this.ay2*this.i1e21+this.az2*this.i1e22;
            this.a2x2=this.ax2*this.i2e00+this.ay2*this.i2e01+this.az2*this.i2e02;
            this.a2y2=this.ax2*this.i2e10+this.ay2*this.i2e11+this.az2*this.i2e12;
            this.a2z2=this.ax2*this.i2e20+this.ay2*this.i2e21+this.az2*this.i2e22;

            this.a1x3=this.ax3*this.i1e00+this.ay3*this.i1e01+this.az3*this.i1e02;
            this.a1y3=this.ax3*this.i1e10+this.ay3*this.i1e11+this.az3*this.i1e12;
            this.a1z3=this.ax3*this.i1e20+this.ay3*this.i1e21+this.az3*this.i1e22;
            this.a2x3=this.ax3*this.i2e00+this.ay3*this.i2e01+this.az3*this.i2e02;
            this.a2y3=this.ax3*this.i2e10+this.ay3*this.i2e11+this.az3*this.i2e12;
            this.a2z3=this.ax3*this.i2e20+this.ay3*this.i2e21+this.az3*this.i2e22;

            // build an impulse matrix
            this.k00=this.ax1*(this.a1x1+this.a2x1)+this.ay1*(this.a1y1+this.a2y1)+this.az1*(this.a1z1+this.a2z1);
            this.k01=this.ax1*(this.a1x2+this.a2x2)+this.ay1*(this.a1y2+this.a2y2)+this.az1*(this.a1z2+this.a2z2);
            this.k02=this.ax1*(this.a1x3+this.a2x3)+this.ay1*(this.a1y3+this.a2y3)+this.az1*(this.a1z3+this.a2z3);
            this.k10=this.ax2*(this.a1x1+this.a2x1)+this.ay2*(this.a1y1+this.a2y1)+this.az2*(this.a1z1+this.a2z1);
            this.k11=this.ax2*(this.a1x2+this.a2x2)+this.ay2*(this.a1y2+this.a2y2)+this.az2*(this.a1z2+this.a2z2);
            this.k12=this.ax2*(this.a1x3+this.a2x3)+this.ay2*(this.a1y3+this.a2y3)+this.az2*(this.a1z3+this.a2z3);
            this.k20=this.ax3*(this.a1x1+this.a2x1)+this.ay3*(this.a1y1+this.a2y1)+this.az3*(this.a1z1+this.a2z1);
            this.k21=this.ax3*(this.a1x2+this.a2x2)+this.ay3*(this.a1y2+this.a2y2)+this.az3*(this.a1z2+this.a2z2);
            this.k22=this.ax3*(this.a1x3+this.a2x3)+this.ay3*(this.a1y3+this.a2y3)+this.az3*(this.a1z3+this.a2z3);

            this.kv00=this.k00;
            this.kv11=this.k11;
            this.kv22=this.k22;
            this.dv00=1/this.kv00;
            this.dv11=1/this.kv11;
            this.dv22=1/this.kv22;

            if(enableSpring1&&this.limitState1!=2){
                var omega=6.2831853*frequency1;
                var k=omega*omega*timeStep;
                var dmp=invTimeStep/(k+2*this.limitMotor1.dampingRatio*omega);
                this.cfm1=this.kv00*dmp;
                this.limitVelocity1*=k*dmp;
            }else{
                this.cfm1=0;
                this.limitVelocity1*=invTimeStep*0.05;
            }

            if(enableSpring2&&this.limitState2!=2){
                omega=6.2831853*frequency2;
                k=omega*omega*timeStep;
                dmp=invTimeStep/(k+2*this.limitMotor2.dampingRatio*omega);
                this.cfm2=this.kv11*dmp;
                this.limitVelocity2*=k*dmp;
            }else{
                this.cfm2=0;
                this.limitVelocity2*=invTimeStep*0.05;
            }

            if(enableSpring3&&this.limitState3!=2){
                omega=6.2831853*frequency3;
                k=omega*omega*timeStep;
                dmp=invTimeStep/(k+2*this.limitMotor3.dampingRatio*omega);
                this.cfm3=this.kv22*dmp;
                this.limitVelocity3*=k*dmp;
            }else{
                this.cfm3=0;
                this.limitVelocity3*=invTimeStep*0.05;
            }

            this.k00+=this.cfm1;
            this.k11+=this.cfm2;
            this.k22+=this.cfm3;

            var inv=1/(
                    this.k00*(this.k11*this.k22-this.k21*this.k12)+
                    this.k10*(this.k21*this.k02-this.k01*this.k22)+
                    this.k20*(this.k01*this.k12-this.k11*this.k02)
                );
            this.d00=(this.k11*this.k22-this.k12*this.k21)*inv;
            this.d01=(this.k02*this.k21-this.k01*this.k22)*inv;
            this.d02=(this.k01*this.k12-this.k02*this.k11)*inv;
            this.d10=(this.k12*this.k20-this.k10*this.k22)*inv;
            this.d11=(this.k00*this.k22-this.k02*this.k20)*inv;
            this.d12=(this.k02*this.k10-this.k00*this.k12)*inv;
            this.d20=(this.k10*this.k21-this.k11*this.k20)*inv;
            this.d21=(this.k01*this.k20-this.k00*this.k21)*inv;
            this.d22=(this.k00*this.k11-this.k01*this.k10)*inv;

            this.limitImpulse1*=0.95;
            this.motorImpulse1*=0.95;
            this.limitImpulse2*=0.95;
            this.motorImpulse2*=0.95;
            this.limitImpulse3*=0.95;
            this.motorImpulse3*=0.95;
            var totalImpulse1=this.limitImpulse1+this.motorImpulse1;
            var totalImpulse2=this.limitImpulse2+this.motorImpulse2;
            var totalImpulse3=this.limitImpulse3+this.motorImpulse3;
            this.a1.x+=totalImpulse1*this.a1x1+totalImpulse2*this.a1x2+totalImpulse3*this.a1x3;
            this.a1.y+=totalImpulse1*this.a1y1+totalImpulse2*this.a1y2+totalImpulse3*this.a1y3;
            this.a1.z+=totalImpulse1*this.a1z1+totalImpulse2*this.a1z2+totalImpulse3*this.a1z3;
            this.a2.x-=totalImpulse1*this.a2x1+totalImpulse2*this.a2x2+totalImpulse3*this.a2x3;
            this.a2.y-=totalImpulse1*this.a2y1+totalImpulse2*this.a2y2+totalImpulse3*this.a2y3;
            this.a2.z-=totalImpulse1*this.a2z1+totalImpulse2*this.a2z2+totalImpulse3*this.a2z3;
        },
        solve_:function(){

            var rvx=this.a2.x-this.a1.x;
            var rvy=this.a2.y-this.a1.y;
            var rvz=this.a2.z-this.a1.z;

            this.limitVelocity3=30;
            var rvn1=rvx*this.ax1+rvy*this.ay1+rvz*this.az1-this.limitVelocity1;
            var rvn2=rvx*this.ax2+rvy*this.ay2+rvz*this.az2-this.limitVelocity2;
            var rvn3=rvx*this.ax3+rvy*this.ay3+rvz*this.az3-this.limitVelocity3;

            var dLimitImpulse1=rvn1*this.d00+rvn2*this.d01+rvn3*this.d02;
            var dLimitImpulse2=rvn1*this.d10+rvn2*this.d11+rvn3*this.d12;
            var dLimitImpulse3=rvn1*this.d20+rvn2*this.d21+rvn3*this.d22;

            this.limitImpulse1+=dLimitImpulse1;
            this.limitImpulse2+=dLimitImpulse2;
            this.limitImpulse3+=dLimitImpulse3;

            this.a1.x+=dLimitImpulse1*this.a1x1+dLimitImpulse2*this.a1x2+dLimitImpulse3*this.a1x3;
            this.a1.y+=dLimitImpulse1*this.a1y1+dLimitImpulse2*this.a1y2+dLimitImpulse3*this.a1y3;
            this.a1.z+=dLimitImpulse1*this.a1z1+dLimitImpulse2*this.a1z2+dLimitImpulse3*this.a1z3;
            this.a2.x-=dLimitImpulse1*this.a2x1+dLimitImpulse2*this.a2x2+dLimitImpulse3*this.a2x3;
            this.a2.y-=dLimitImpulse1*this.a2y1+dLimitImpulse2*this.a2y2+dLimitImpulse3*this.a2y3;
            this.a2.z-=dLimitImpulse1*this.a2z1+dLimitImpulse2*this.a2z2+dLimitImpulse3*this.a2z3;
        },
        solve:function(){

            var rvx=this.a2.x-this.a1.x;
            var rvy=this.a2.y-this.a1.y;
            var rvz=this.a2.z-this.a1.z;

            var rvn1=rvx*this.ax1+rvy*this.ay1+rvz*this.az1;
            var rvn2=rvx*this.ax2+rvy*this.ay2+rvz*this.az2;
            var rvn3=rvx*this.ax3+rvy*this.ay3+rvz*this.az3;

            var oldMotorImpulse1=this.motorImpulse1;
            var oldMotorImpulse2=this.motorImpulse2;
            var oldMotorImpulse3=this.motorImpulse3;

            var dMotorImpulse1=0;
            var dMotorImpulse2=0;
            var dMotorImpulse3=0;

            if(this.enableMotor1){
                dMotorImpulse1=(rvn1-this.motorSpeed1)*this.dv00;
                this.motorImpulse1+=dMotorImpulse1;
                if(this.motorImpulse1>this.maxMotorImpulse1){ // clamp motor impulse
                    this.motorImpulse1=this.maxMotorImpulse1;
                }else if(this.motorImpulse1<-this.maxMotorImpulse1){
                    this.motorImpulse1=-this.maxMotorImpulse1;
                }
                dMotorImpulse1=this.motorImpulse1-oldMotorImpulse1;
            }
            if(this.enableMotor2){
                dMotorImpulse2=(rvn2-this.motorSpeed2)*this.dv11;
                this.motorImpulse2+=dMotorImpulse2;
                if(this.motorImpulse2>this.maxMotorImpulse2){ // clamp motor impulse
                    this.motorImpulse2=this.maxMotorImpulse2;
                }else if(this.motorImpulse2<-this.maxMotorImpulse2){
                    this.motorImpulse2=-this.maxMotorImpulse2;
                }
                dMotorImpulse2=this.motorImpulse2-oldMotorImpulse2;
            }
            if(this.enableMotor3){
                dMotorImpulse3=(rvn3-this.motorSpeed3)*this.dv22;
                this.motorImpulse3+=dMotorImpulse3;
                if(this.motorImpulse3>this.maxMotorImpulse3){ // clamp motor impulse
                    this.motorImpulse3=this.maxMotorImpulse3;
                }else if(this.motorImpulse3<-this.maxMotorImpulse3){
                    this.motorImpulse3=-this.maxMotorImpulse3;
                }
                dMotorImpulse3=this.motorImpulse3-oldMotorImpulse3;
            }

            // apply motor impulse to relative velocity
            rvn1+=dMotorImpulse1*this.kv00+dMotorImpulse2*this.k01+dMotorImpulse3*this.k02;
            rvn2+=dMotorImpulse1*this.k10+dMotorImpulse2*this.kv11+dMotorImpulse3*this.k12;
            rvn3+=dMotorImpulse1*this.k20+dMotorImpulse2*this.k21+dMotorImpulse3*this.kv22;

            // subtract target velocity and applied impulse
            rvn1-=this.limitVelocity1+this.limitImpulse1*this.cfm1;
            rvn2-=this.limitVelocity2+this.limitImpulse2*this.cfm2;
            rvn3-=this.limitVelocity3+this.limitImpulse3*this.cfm3;

            var oldLimitImpulse1=this.limitImpulse1;
            var oldLimitImpulse2=this.limitImpulse2;
            var oldLimitImpulse3=this.limitImpulse3;

            var dLimitImpulse1=rvn1*this.d00+rvn2*this.d01+rvn3*this.d02;
            var dLimitImpulse2=rvn1*this.d10+rvn2*this.d11+rvn3*this.d12;
            var dLimitImpulse3=rvn1*this.d20+rvn2*this.d21+rvn3*this.d22;

            this.limitImpulse1+=dLimitImpulse1;
            this.limitImpulse2+=dLimitImpulse2;
            this.limitImpulse3+=dLimitImpulse3;

            // clamp
            var clampState=0;
            if(this.limitState1==2||this.limitImpulse1*this.limitState1<0){
                dLimitImpulse1=-oldLimitImpulse1;
                rvn2+=dLimitImpulse1*this.k10;
                rvn3+=dLimitImpulse1*this.k20;
                clampState|=1;
            }
            if(this.limitState2==2||this.limitImpulse2*this.limitState2<0){
                dLimitImpulse2=-oldLimitImpulse2;
                rvn1+=dLimitImpulse2*this.k01;
                rvn3+=dLimitImpulse2*this.k21;
                clampState|=2;
            }
            if(this.limitState3==2||this.limitImpulse3*this.limitState3<0){
                dLimitImpulse3=-oldLimitImpulse3;
                rvn1+=dLimitImpulse3*this.k02;
                rvn2+=dLimitImpulse3*this.k12;
                clampState|=4;
            }

            // update un-clamped impulse
            // TODO: isolate division
            var det;
            switch(clampState){
                case 1: // update 2 3
                    det=1/(this.k11*this.k22-this.k12*this.k21);
                    dLimitImpulse2=(this.k22*rvn2+-this.k12*rvn3)*det;
                    dLimitImpulse3=(-this.k21*rvn2+this.k11*rvn3)*det;
                    break;
                case 2: // update 1 3
                    det=1/(this.k00*this.k22-this.k02*this.k20);
                    dLimitImpulse1=(this.k22*rvn1+-this.k02*rvn3)*det;
                    dLimitImpulse3=(-this.k20*rvn1+this.k00*rvn3)*det;
                    break;
                case 3: // update 3
                    dLimitImpulse3=rvn3/this.k22;
                    break;
                case 4: // update 1 2
                    det=1/(this.k00*this.k11-this.k01*this.k10);
                    dLimitImpulse1=(this.k11*rvn1+-this.k01*rvn2)*det;
                    dLimitImpulse2=(-this.k10*rvn1+this.k00*rvn2)*det;
                    break;
                case 5: // update 2
                    dLimitImpulse2=rvn2/this.k11;
                    break;
                case 6: // update 1
                    dLimitImpulse1=rvn1/this.k00;
                    break;
            }

            this.limitImpulse1=dLimitImpulse1+oldLimitImpulse1;
            this.limitImpulse2=dLimitImpulse2+oldLimitImpulse2;
            this.limitImpulse3=dLimitImpulse3+oldLimitImpulse3;

            var dImpulse1=dMotorImpulse1+dLimitImpulse1;
            var dImpulse2=dMotorImpulse2+dLimitImpulse2;
            var dImpulse3=dMotorImpulse3+dLimitImpulse3;

            // apply impulse
            this.a1.x+=dImpulse1*this.a1x1+dImpulse2*this.a1x2+dImpulse3*this.a1x3;
            this.a1.y+=dImpulse1*this.a1y1+dImpulse2*this.a1y2+dImpulse3*this.a1y3;
            this.a1.z+=dImpulse1*this.a1z1+dImpulse2*this.a1z2+dImpulse3*this.a1z3;
            this.a2.x-=dImpulse1*this.a2x1+dImpulse2*this.a2x2+dImpulse3*this.a2x3;
            this.a2.y-=dImpulse1*this.a2y1+dImpulse2*this.a2y2+dImpulse3*this.a2y3;
            this.a2.z-=dImpulse1*this.a2z1+dImpulse2*this.a2z2+dImpulse3*this.a2z3;
            rvx=this.a2.x-this.a1.x;
            rvy=this.a2.y-this.a1.y;
            rvz=this.a2.z-this.a1.z;

            rvn2=rvx*this.ax2+rvy*this.ay2+rvz*this.az2;
        }

    } );

    /**
     * A hinge joint allows only for relative rotation of rigid bodies along the axis.
     *
     * @author saharan
     * @author lo-th
     */

    function HingeJoint ( config, lowerAngleLimit, upperAngleLimit ) {

        Joint.call( this, config );

        this.type = JOINT_HINGE;

        // The axis in the first body's coordinate system.
        this.localAxis1 = config.localAxis1.clone().normalize();
        // The axis in the second body's coordinate system.
        this.localAxis2 = config.localAxis2.clone().normalize();

        // make angle axis
        var arc = new Mat33().setQuat( new Quat().setFromUnitVectors( this.localAxis1, this.localAxis2 ) );
        this.localAngle1 = new Vec3().tangent( this.localAxis1 ).normalize();
        this.localAngle2 = this.localAngle1.clone().applyMatrix3( arc, true );

        this.ax1 = new Vec3();
        this.ax2 = new Vec3();
        this.an1 = new Vec3();
        this.an2 = new Vec3();

        this.tmp = new Vec3();

        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        // The rotational limit and motor information of the joint.
        this.limitMotor = new LimitMotor( this.nor, false );
        this.limitMotor.lowerLimit = lowerAngleLimit;
        this.limitMotor.upperLimit = upperAngleLimit;

        this.lc = new LinearConstraint( this );
        this.r3 = new Rotational3Constraint( this, this.limitMotor, new LimitMotor( this.tan, true ), new LimitMotor( this.bin, true ) );
    }

    HingeJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: HingeJoint,


        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            this.ax1.copy( this.localAxis1 ).applyMatrix3( this.body1.rotation, true );
            this.ax2.copy( this.localAxis2 ).applyMatrix3( this.body2.rotation, true );

            this.an1.copy( this.localAngle1 ).applyMatrix3( this.body1.rotation, true );
            this.an2.copy( this.localAngle2 ).applyMatrix3( this.body2.rotation, true );

            // normal tangent binormal

            this.nor.set(
                this.ax1.x*this.body2.inverseMass + this.ax2.x*this.body1.inverseMass,
                this.ax1.y*this.body2.inverseMass + this.ax2.y*this.body1.inverseMass,
                this.ax1.z*this.body2.inverseMass + this.ax2.z*this.body1.inverseMass
            ).normalize();

            this.tan.tangent( this.nor ).normalize();

            this.bin.crossVectors( this.nor, this.tan );

            // calculate hinge angle

            var limite = _Math.acosClamp( _Math.dotVectors( this.an1, this.an2 ) );

            this.tmp.crossVectors( this.an1, this.an2 );

            if( _Math.dotVectors( this.nor, this.tmp ) < 0 ) this.limitMotor.angle = -limite;
            else this.limitMotor.angle = limite;

            this.tmp.crossVectors( this.ax1, this.ax2 );

            this.r3.limitMotor2.angle = _Math.dotVectors( this.tan, this.tmp );
            this.r3.limitMotor3.angle = _Math.dotVectors( this.bin, this.tmp );

            // preSolve

            this.r3.preSolve( timeStep, invTimeStep );
            this.lc.preSolve( timeStep, invTimeStep );

        },

        solve: function () {

            this.r3.solve();
            this.lc.solve();

        },

        postSolve: function () {

        }

    });

    /**
     * A ball-and-socket joint limits relative translation on two anchor points on rigid bodies.
     *
     * @author saharan
     * @author lo-th
     */

    function BallAndSocketJoint ( config ){

        Joint.call( this, config );

        this.type = JOINT_BALL_AND_SOCKET;

        this.lc = new LinearConstraint( this );

    }

    BallAndSocketJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: BallAndSocketJoint,

        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            // preSolve

            this.lc.preSolve( timeStep, invTimeStep );

        },

        solve: function () {

            this.lc.solve();

        },

        postSolve: function () {

        }

    });

    /**
     * A translational constraint for various joints.
     * @author saharan
     */
    function TranslationalConstraint ( joint, limitMotor ){
        this.cfm=NaN;
        this.m1=NaN;
        this.m2=NaN;
        this.i1e00=NaN;
        this.i1e01=NaN;
        this.i1e02=NaN;
        this.i1e10=NaN;
        this.i1e11=NaN;
        this.i1e12=NaN;
        this.i1e20=NaN;
        this.i1e21=NaN;
        this.i1e22=NaN;
        this.i2e00=NaN;
        this.i2e01=NaN;
        this.i2e02=NaN;
        this.i2e10=NaN;
        this.i2e11=NaN;
        this.i2e12=NaN;
        this.i2e20=NaN;
        this.i2e21=NaN;
        this.i2e22=NaN;
        this.motorDenom=NaN;
        this.invMotorDenom=NaN;
        this.invDenom=NaN;
        this.ax=NaN;
        this.ay=NaN;
        this.az=NaN;
        this.r1x=NaN;
        this.r1y=NaN;
        this.r1z=NaN;
        this.r2x=NaN;
        this.r2y=NaN;
        this.r2z=NaN;
        this.t1x=NaN;
        this.t1y=NaN;
        this.t1z=NaN;
        this.t2x=NaN;
        this.t2y=NaN;
        this.t2z=NaN;
        this.l1x=NaN;
        this.l1y=NaN;
        this.l1z=NaN;
        this.l2x=NaN;
        this.l2y=NaN;
        this.l2z=NaN;
        this.a1x=NaN;
        this.a1y=NaN;
        this.a1z=NaN;
        this.a2x=NaN;
        this.a2y=NaN;
        this.a2z=NaN;
        this.lowerLimit=NaN;
        this.upperLimit=NaN;
        this.limitVelocity=NaN;
        this.limitState=0; // -1: at lower, 0: locked, 1: at upper, 2: free
        this.enableMotor=false;
        this.motorSpeed=NaN;
        this.maxMotorForce=NaN;
        this.maxMotorImpulse=NaN;

        this.limitMotor=limitMotor;
        this.b1=joint.body1;
        this.b2=joint.body2;
        this.p1=joint.anchorPoint1;
        this.p2=joint.anchorPoint2;
        this.r1=joint.relativeAnchorPoint1;
        this.r2=joint.relativeAnchorPoint2;
        this.l1=this.b1.linearVelocity;
        this.l2=this.b2.linearVelocity;
        this.a1=this.b1.angularVelocity;
        this.a2=this.b2.angularVelocity;
        this.i1=this.b1.inverseInertia;
        this.i2=this.b2.inverseInertia;
        this.limitImpulse=0;
        this.motorImpulse=0;
    }

    Object.assign( TranslationalConstraint.prototype, {

        TranslationalConstraint: true,

        preSolve:function(timeStep,invTimeStep){
            this.ax=this.limitMotor.axis.x;
            this.ay=this.limitMotor.axis.y;
            this.az=this.limitMotor.axis.z;
            this.lowerLimit=this.limitMotor.lowerLimit;
            this.upperLimit=this.limitMotor.upperLimit;
            this.motorSpeed=this.limitMotor.motorSpeed;
            this.maxMotorForce=this.limitMotor.maxMotorForce;
            this.enableMotor=this.maxMotorForce>0;
            this.m1=this.b1.inverseMass;
            this.m2=this.b2.inverseMass;

            var ti1 = this.i1.elements;
            var ti2 = this.i2.elements;
            this.i1e00=ti1[0];
            this.i1e01=ti1[1];
            this.i1e02=ti1[2];
            this.i1e10=ti1[3];
            this.i1e11=ti1[4];
            this.i1e12=ti1[5];
            this.i1e20=ti1[6];
            this.i1e21=ti1[7];
            this.i1e22=ti1[8];

            this.i2e00=ti2[0];
            this.i2e01=ti2[1];
            this.i2e02=ti2[2];
            this.i2e10=ti2[3];
            this.i2e11=ti2[4];
            this.i2e12=ti2[5];
            this.i2e20=ti2[6];
            this.i2e21=ti2[7];
            this.i2e22=ti2[8];

            var dx=this.p2.x-this.p1.x;
            var dy=this.p2.y-this.p1.y;
            var dz=this.p2.z-this.p1.z;
            var d=dx*this.ax+dy*this.ay+dz*this.az;
            var frequency=this.limitMotor.frequency;
            var enableSpring=frequency>0;
            var enableLimit=this.lowerLimit<=this.upperLimit;
            if(enableSpring&&d>20||d<-20){
                enableSpring=false;
            }

            if(enableLimit){
                if(this.lowerLimit==this.upperLimit){
                    if(this.limitState!=0){
                        this.limitState=0;
                        this.limitImpulse=0;
                    }
                    this.limitVelocity=this.lowerLimit-d;
                    if(!enableSpring)d=this.lowerLimit;
                }else if(d<this.lowerLimit){
                    if(this.limitState!=-1){
                        this.limitState=-1;
                        this.limitImpulse=0;
                    }
                    this.limitVelocity=this.lowerLimit-d;
                    if(!enableSpring)d=this.lowerLimit;
                }else if(d>this.upperLimit){
                    if(this.limitState!=1){
                        this.limitState=1;
                        this.limitImpulse=0;
                    }
                    this.limitVelocity=this.upperLimit-d;
                    if(!enableSpring)d=this.upperLimit;
                }else{
                    this.limitState=2;
                    this.limitImpulse=0;
                    this.limitVelocity=0;
                }
                if(!enableSpring){
                    if(this.limitVelocity>0.005)this.limitVelocity-=0.005;
                    else if(this.limitVelocity<-0.005)this.limitVelocity+=0.005;
                    else this.limitVelocity=0;
                }
            }else{
                this.limitState=2;
                this.limitImpulse=0;
            }

            if(this.enableMotor&&(this.limitState!=0||enableSpring)){
                this.maxMotorImpulse=this.maxMotorForce*timeStep;
            }else{
                this.motorImpulse=0;
                this.maxMotorImpulse=0;
            }

            var rdx=d*this.ax;
            var rdy=d*this.ay;
            var rdz=d*this.az;
            var w1=this.m1/(this.m1+this.m2);
            var w2=1-w1;
            this.r1x=this.r1.x+rdx*w1;
            this.r1y=this.r1.y+rdy*w1;
            this.r1z=this.r1.z+rdz*w1;
            this.r2x=this.r2.x-rdx*w2;
            this.r2y=this.r2.y-rdy*w2;
            this.r2z=this.r2.z-rdz*w2;

            this.t1x=this.r1y*this.az-this.r1z*this.ay;
            this.t1y=this.r1z*this.ax-this.r1x*this.az;
            this.t1z=this.r1x*this.ay-this.r1y*this.ax;
            this.t2x=this.r2y*this.az-this.r2z*this.ay;
            this.t2y=this.r2z*this.ax-this.r2x*this.az;
            this.t2z=this.r2x*this.ay-this.r2y*this.ax;
            this.l1x=this.ax*this.m1;
            this.l1y=this.ay*this.m1;
            this.l1z=this.az*this.m1;
            this.l2x=this.ax*this.m2;
            this.l2y=this.ay*this.m2;
            this.l2z=this.az*this.m2;
            this.a1x=this.t1x*this.i1e00+this.t1y*this.i1e01+this.t1z*this.i1e02;
            this.a1y=this.t1x*this.i1e10+this.t1y*this.i1e11+this.t1z*this.i1e12;
            this.a1z=this.t1x*this.i1e20+this.t1y*this.i1e21+this.t1z*this.i1e22;
            this.a2x=this.t2x*this.i2e00+this.t2y*this.i2e01+this.t2z*this.i2e02;
            this.a2y=this.t2x*this.i2e10+this.t2y*this.i2e11+this.t2z*this.i2e12;
            this.a2z=this.t2x*this.i2e20+this.t2y*this.i2e21+this.t2z*this.i2e22;
            this.motorDenom=
                this.m1+this.m2+
                this.ax*(this.a1y*this.r1z-this.a1z*this.r1y+this.a2y*this.r2z-this.a2z*this.r2y)+
                this.ay*(this.a1z*this.r1x-this.a1x*this.r1z+this.a2z*this.r2x-this.a2x*this.r2z)+
                this.az*(this.a1x*this.r1y-this.a1y*this.r1x+this.a2x*this.r2y-this.a2y*this.r2x);

            this.invMotorDenom=1/this.motorDenom;

            if(enableSpring&&this.limitState!=2){
                var omega=6.2831853*frequency;
                var k=omega*omega*timeStep;
                var dmp=invTimeStep/(k+2*this.limitMotor.dampingRatio*omega);
                this.cfm=this.motorDenom*dmp;
                this.limitVelocity*=k*dmp;
            }else{
                this.cfm=0;
                this.limitVelocity*=invTimeStep*0.05;
            }

            this.invDenom=1/(this.motorDenom+this.cfm);

            var totalImpulse=this.limitImpulse+this.motorImpulse;
            this.l1.x+=totalImpulse*this.l1x;
            this.l1.y+=totalImpulse*this.l1y;
            this.l1.z+=totalImpulse*this.l1z;
            this.a1.x+=totalImpulse*this.a1x;
            this.a1.y+=totalImpulse*this.a1y;
            this.a1.z+=totalImpulse*this.a1z;
            this.l2.x-=totalImpulse*this.l2x;
            this.l2.y-=totalImpulse*this.l2y;
            this.l2.z-=totalImpulse*this.l2z;
            this.a2.x-=totalImpulse*this.a2x;
            this.a2.y-=totalImpulse*this.a2y;
            this.a2.z-=totalImpulse*this.a2z;
        },
        solve:function(){
            var rvn=
                this.ax*(this.l2.x-this.l1.x)+this.ay*(this.l2.y-this.l1.y)+this.az*(this.l2.z-this.l1.z)+
                this.t2x*this.a2.x-this.t1x*this.a1.x+this.t2y*this.a2.y-this.t1y*this.a1.y+this.t2z*this.a2.z-this.t1z*this.a1.z;

            // motor part
            var newMotorImpulse;
            if(this.enableMotor){
                newMotorImpulse=(rvn-this.motorSpeed)*this.invMotorDenom;
                var oldMotorImpulse=this.motorImpulse;
                this.motorImpulse+=newMotorImpulse;
                if(this.motorImpulse>this.maxMotorImpulse)this.motorImpulse=this.maxMotorImpulse;
                else if(this.motorImpulse<-this.maxMotorImpulse)this.motorImpulse=-this.maxMotorImpulse;
                newMotorImpulse=this.motorImpulse-oldMotorImpulse;
                rvn-=newMotorImpulse*this.motorDenom;
            }else newMotorImpulse=0;

            // limit part
            var newLimitImpulse;
            if(this.limitState!=2){
                newLimitImpulse=(rvn-this.limitVelocity-this.limitImpulse*this.cfm)*this.invDenom;
                var oldLimitImpulse=this.limitImpulse;
                this.limitImpulse+=newLimitImpulse;
                if(this.limitImpulse*this.limitState<0)this.limitImpulse=0;
                newLimitImpulse=this.limitImpulse-oldLimitImpulse;
            }else newLimitImpulse=0;

            var totalImpulse=newLimitImpulse+newMotorImpulse;
            this.l1.x+=totalImpulse*this.l1x;
            this.l1.y+=totalImpulse*this.l1y;
            this.l1.z+=totalImpulse*this.l1z;
            this.a1.x+=totalImpulse*this.a1x;
            this.a1.y+=totalImpulse*this.a1y;
            this.a1.z+=totalImpulse*this.a1z;
            this.l2.x-=totalImpulse*this.l2x;
            this.l2.y-=totalImpulse*this.l2y;
            this.l2.z-=totalImpulse*this.l2z;
            this.a2.x-=totalImpulse*this.a2x;
            this.a2.y-=totalImpulse*this.a2y;
            this.a2.z-=totalImpulse*this.a2z;
        }
    } );

    /**
     * A distance joint limits the distance between two anchor points on rigid bodies.
     *
     * @author saharan
     * @author lo-th
     */

    function DistanceJoint ( config, minDistance, maxDistance ){

        Joint.call( this, config );

        this.type = JOINT_DISTANCE;

        this.nor = new Vec3();

        // The limit and motor information of the joint.
        this.limitMotor = new LimitMotor( this.nor, true );
        this.limitMotor.lowerLimit = minDistance;
        this.limitMotor.upperLimit = maxDistance;

        this.t = new TranslationalConstraint( this, this.limitMotor );

    }

    DistanceJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: DistanceJoint,

        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            this.nor.sub( this.anchorPoint2, this.anchorPoint1 ).normalize();

            // preSolve

            this.t.preSolve( timeStep, invTimeStep );

        },

        solve: function () {

            this.t.solve();

        },

        postSolve: function () {

        }

    });

    /**
     * An angular constraint for all axes for various joints.
     * @author saharan
     */

    function AngularConstraint( joint, targetOrientation ) {

        this.joint = joint;

        this.targetOrientation = new Quat().invert( targetOrientation );

        this.relativeOrientation = new Quat();

        this.ii1 = null;
        this.ii2 = null;
        this.dd = null;

        this.vel = new Vec3();
        this.imp = new Vec3();

        this.rn0 = new Vec3();
        this.rn1 = new Vec3();
        this.rn2 = new Vec3();

        this.b1 = joint.body1;
        this.b2 = joint.body2;
        this.a1 = this.b1.angularVelocity;
        this.a2 = this.b2.angularVelocity;
        this.i1 = this.b1.inverseInertia;
        this.i2 = this.b2.inverseInertia;

    }

    Object.assign( AngularConstraint.prototype, {

        AngularConstraint: true,

        preSolve: function ( timeStep, invTimeStep ) {

            var inv, len, v;

            this.ii1 = this.i1.clone();
            this.ii2 = this.i2.clone();

            v = new Mat33().add(this.ii1, this.ii2).elements;
            inv = 1/( v[0]*(v[4]*v[8]-v[7]*v[5])  +  v[3]*(v[7]*v[2]-v[1]*v[8])  +  v[6]*(v[1]*v[5]-v[4]*v[2]) );
            this.dd = new Mat33().set(
                v[4]*v[8]-v[5]*v[7], v[2]*v[7]-v[1]*v[8], v[1]*v[5]-v[2]*v[4],
                v[5]*v[6]-v[3]*v[8], v[0]*v[8]-v[2]*v[6], v[2]*v[3]-v[0]*v[5],
                v[3]*v[7]-v[4]*v[6], v[1]*v[6]-v[0]*v[7], v[0]*v[4]-v[1]*v[3]
            ).multiplyScalar( inv );

            this.relativeOrientation.invert( this.b1.orientation ).multiply( this.targetOrientation ).multiply( this.b2.orientation );

            inv = this.relativeOrientation.w*2;

            this.vel.copy( this.relativeOrientation ).multiplyScalar( inv );

            len = this.vel.length();

            if( len > 0.02 ) {
                len = (0.02-len)/len*invTimeStep*0.05;
                this.vel.multiplyScalar( len );
            }else{
                this.vel.set(0,0,0);
            }

            this.rn1.copy( this.imp ).applyMatrix3( this.ii1, true );
            this.rn2.copy( this.imp ).applyMatrix3( this.ii2, true );

            this.a1.add( this.rn1 );
            this.a2.sub( this.rn2 );

        },

        solve: function () {

            var r = this.a2.clone().sub( this.a1 ).sub( this.vel );

            this.rn0.copy( r ).applyMatrix3( this.dd, true );
            this.rn1.copy( this.rn0 ).applyMatrix3( this.ii1, true );
            this.rn2.copy( this.rn0 ).applyMatrix3( this.ii2, true );

            this.imp.add( this.rn0 );
            this.a1.add( this.rn1 );
            this.a2.sub( this.rn2 );

        }

    } );

    /**
     * A three-axis translational constraint for various joints.
     * @author saharan
     */
    function Translational3Constraint (joint,limitMotor1,limitMotor2,limitMotor3){

        this.m1=NaN;
        this.m2=NaN;
        this.i1e00=NaN;
        this.i1e01=NaN;
        this.i1e02=NaN;
        this.i1e10=NaN;
        this.i1e11=NaN;
        this.i1e12=NaN;
        this.i1e20=NaN;
        this.i1e21=NaN;
        this.i1e22=NaN;
        this.i2e00=NaN;
        this.i2e01=NaN;
        this.i2e02=NaN;
        this.i2e10=NaN;
        this.i2e11=NaN;
        this.i2e12=NaN;
        this.i2e20=NaN;
        this.i2e21=NaN;
        this.i2e22=NaN;
        this.ax1=NaN;
        this.ay1=NaN;
        this.az1=NaN;
        this.ax2=NaN;
        this.ay2=NaN;
        this.az2=NaN;
        this.ax3=NaN;
        this.ay3=NaN;
        this.az3=NaN;
        this.r1x=NaN;
        this.r1y=NaN;
        this.r1z=NaN;
        this.r2x=NaN;
        this.r2y=NaN;
        this.r2z=NaN;
        this.t1x1=NaN;// jacobians
        this.t1y1=NaN;
        this.t1z1=NaN;
        this.t2x1=NaN;
        this.t2y1=NaN;
        this.t2z1=NaN;
        this.l1x1=NaN;
        this.l1y1=NaN;
        this.l1z1=NaN;
        this.l2x1=NaN;
        this.l2y1=NaN;
        this.l2z1=NaN;
        this.a1x1=NaN;
        this.a1y1=NaN;
        this.a1z1=NaN;
        this.a2x1=NaN;
        this.a2y1=NaN;
        this.a2z1=NaN;
        this.t1x2=NaN;
        this.t1y2=NaN;
        this.t1z2=NaN;
        this.t2x2=NaN;
        this.t2y2=NaN;
        this.t2z2=NaN;
        this.l1x2=NaN;
        this.l1y2=NaN;
        this.l1z2=NaN;
        this.l2x2=NaN;
        this.l2y2=NaN;
        this.l2z2=NaN;
        this.a1x2=NaN;
        this.a1y2=NaN;
        this.a1z2=NaN;
        this.a2x2=NaN;
        this.a2y2=NaN;
        this.a2z2=NaN;
        this.t1x3=NaN;
        this.t1y3=NaN;
        this.t1z3=NaN;
        this.t2x3=NaN;
        this.t2y3=NaN;
        this.t2z3=NaN;
        this.l1x3=NaN;
        this.l1y3=NaN;
        this.l1z3=NaN;
        this.l2x3=NaN;
        this.l2y3=NaN;
        this.l2z3=NaN;
        this.a1x3=NaN;
        this.a1y3=NaN;
        this.a1z3=NaN;
        this.a2x3=NaN;
        this.a2y3=NaN;
        this.a2z3=NaN;
        this.lowerLimit1=NaN;
        this.upperLimit1=NaN;
        this.limitVelocity1=NaN;
        this.limitState1=0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited
        this.enableMotor1=false;
        this.motorSpeed1=NaN;
        this.maxMotorForce1=NaN;
        this.maxMotorImpulse1=NaN;
        this.lowerLimit2=NaN;
        this.upperLimit2=NaN;
        this.limitVelocity2=NaN;
        this.limitState2=0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited
        this.enableMotor2=false;
        this.motorSpeed2=NaN;
        this.maxMotorForce2=NaN;
        this.maxMotorImpulse2=NaN;
        this.lowerLimit3=NaN;
        this.upperLimit3=NaN;
        this.limitVelocity3=NaN;
        this.limitState3=0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited
        this.enableMotor3=false;
        this.motorSpeed3=NaN;
        this.maxMotorForce3=NaN;
        this.maxMotorImpulse3=NaN;
        this.k00=NaN; // K = J*M*JT
        this.k01=NaN;
        this.k02=NaN;
        this.k10=NaN;
        this.k11=NaN;
        this.k12=NaN;
        this.k20=NaN;
        this.k21=NaN;
        this.k22=NaN;
        this.kv00=NaN; // diagonals without CFMs
        this.kv11=NaN;
        this.kv22=NaN;
        this.dv00=NaN; // ...inverted
        this.dv11=NaN;
        this.dv22=NaN;
        this.d00=NaN; // K^-1
        this.d01=NaN;
        this.d02=NaN;
        this.d10=NaN;
        this.d11=NaN;
        this.d12=NaN;
        this.d20=NaN;
        this.d21=NaN;
        this.d22=NaN;

        this.limitMotor1=limitMotor1;
        this.limitMotor2=limitMotor2;
        this.limitMotor3=limitMotor3;
        this.b1=joint.body1;
        this.b2=joint.body2;
        this.p1=joint.anchorPoint1;
        this.p2=joint.anchorPoint2;
        this.r1=joint.relativeAnchorPoint1;
        this.r2=joint.relativeAnchorPoint2;
        this.l1=this.b1.linearVelocity;
        this.l2=this.b2.linearVelocity;
        this.a1=this.b1.angularVelocity;
        this.a2=this.b2.angularVelocity;
        this.i1=this.b1.inverseInertia;
        this.i2=this.b2.inverseInertia;
        this.limitImpulse1=0;
        this.motorImpulse1=0;
        this.limitImpulse2=0;
        this.motorImpulse2=0;
        this.limitImpulse3=0;
        this.motorImpulse3=0;
        this.cfm1=0;// Constraint Force Mixing
        this.cfm2=0;
        this.cfm3=0;
        this.weight=-1;
    }

    Object.assign( Translational3Constraint.prototype, {

        Translational3Constraint: true,

        preSolve:function(timeStep,invTimeStep){
            this.ax1=this.limitMotor1.axis.x;
            this.ay1=this.limitMotor1.axis.y;
            this.az1=this.limitMotor1.axis.z;
            this.ax2=this.limitMotor2.axis.x;
            this.ay2=this.limitMotor2.axis.y;
            this.az2=this.limitMotor2.axis.z;
            this.ax3=this.limitMotor3.axis.x;
            this.ay3=this.limitMotor3.axis.y;
            this.az3=this.limitMotor3.axis.z;
            this.lowerLimit1=this.limitMotor1.lowerLimit;
            this.upperLimit1=this.limitMotor1.upperLimit;
            this.motorSpeed1=this.limitMotor1.motorSpeed;
            this.maxMotorForce1=this.limitMotor1.maxMotorForce;
            this.enableMotor1=this.maxMotorForce1>0;
            this.lowerLimit2=this.limitMotor2.lowerLimit;
            this.upperLimit2=this.limitMotor2.upperLimit;
            this.motorSpeed2=this.limitMotor2.motorSpeed;
            this.maxMotorForce2=this.limitMotor2.maxMotorForce;
            this.enableMotor2=this.maxMotorForce2>0;
            this.lowerLimit3=this.limitMotor3.lowerLimit;
            this.upperLimit3=this.limitMotor3.upperLimit;
            this.motorSpeed3=this.limitMotor3.motorSpeed;
            this.maxMotorForce3=this.limitMotor3.maxMotorForce;
            this.enableMotor3=this.maxMotorForce3>0;
            this.m1=this.b1.inverseMass;
            this.m2=this.b2.inverseMass;

            var ti1 = this.i1.elements;
            var ti2 = this.i2.elements;
            this.i1e00=ti1[0];
            this.i1e01=ti1[1];
            this.i1e02=ti1[2];
            this.i1e10=ti1[3];
            this.i1e11=ti1[4];
            this.i1e12=ti1[5];
            this.i1e20=ti1[6];
            this.i1e21=ti1[7];
            this.i1e22=ti1[8];

            this.i2e00=ti2[0];
            this.i2e01=ti2[1];
            this.i2e02=ti2[2];
            this.i2e10=ti2[3];
            this.i2e11=ti2[4];
            this.i2e12=ti2[5];
            this.i2e20=ti2[6];
            this.i2e21=ti2[7];
            this.i2e22=ti2[8];

            var dx=this.p2.x-this.p1.x;
            var dy=this.p2.y-this.p1.y;
            var dz=this.p2.z-this.p1.z;
            var d1=dx*this.ax1+dy*this.ay1+dz*this.az1;
            var d2=dx*this.ax2+dy*this.ay2+dz*this.az2;
            var d3=dx*this.ax3+dy*this.ay3+dz*this.az3;
            var frequency1=this.limitMotor1.frequency;
            var frequency2=this.limitMotor2.frequency;
            var frequency3=this.limitMotor3.frequency;
            var enableSpring1=frequency1>0;
            var enableSpring2=frequency2>0;
            var enableSpring3=frequency3>0;
            var enableLimit1=this.lowerLimit1<=this.upperLimit1;
            var enableLimit2=this.lowerLimit2<=this.upperLimit2;
            var enableLimit3=this.lowerLimit3<=this.upperLimit3;

            // for stability
            if(enableSpring1&&d1>20||d1<-20){
                enableSpring1=false;
            }
            if(enableSpring2&&d2>20||d2<-20){
                enableSpring2=false;
            }
            if(enableSpring3&&d3>20||d3<-20){
                enableSpring3=false;
            }

            if(enableLimit1){
                if(this.lowerLimit1==this.upperLimit1){
                    if(this.limitState1!=0){
                        this.limitState1=0;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.lowerLimit1-d1;
                    if(!enableSpring1)d1=this.lowerLimit1;
                }else if(d1<this.lowerLimit1){
                    if(this.limitState1!=-1){
                        this.limitState1=-1;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.lowerLimit1-d1;
                    if(!enableSpring1)d1=this.lowerLimit1;
                }else if(d1>this.upperLimit1){
                    if(this.limitState1!=1){
                        this.limitState1=1;
                        this.limitImpulse1=0;
                    }
                    this.limitVelocity1=this.upperLimit1-d1;
                    if(!enableSpring1)d1=this.upperLimit1;
                }else{
                    this.limitState1=2;
                    this.limitImpulse1=0;
                    this.limitVelocity1=0;
                }
                if(!enableSpring1){
                    if(this.limitVelocity1>0.005)this.limitVelocity1-=0.005;
                    else if(this.limitVelocity1<-0.005)this.limitVelocity1+=0.005;
                    else this.limitVelocity1=0;
                }
            }else{
                this.limitState1=2;
                this.limitImpulse1=0;
            }

            if(enableLimit2){
                if(this.lowerLimit2==this.upperLimit2){
                    if(this.limitState2!=0){
                        this.limitState2=0;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.lowerLimit2-d2;
                    if(!enableSpring2)d2=this.lowerLimit2;
                }else if(d2<this.lowerLimit2){
                    if(this.limitState2!=-1){
                        this.limitState2=-1;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.lowerLimit2-d2;
                    if(!enableSpring2)d2=this.lowerLimit2;
                }else if(d2>this.upperLimit2){
                    if(this.limitState2!=1){
                        this.limitState2=1;
                        this.limitImpulse2=0;
                    }
                    this.limitVelocity2=this.upperLimit2-d2;
                    if(!enableSpring2)d2=this.upperLimit2;
                }else{
                    this.limitState2=2;
                    this.limitImpulse2=0;
                    this.limitVelocity2=0;
                }
                if(!enableSpring2){
                    if(this.limitVelocity2>0.005)this.limitVelocity2-=0.005;
                    else if(this.limitVelocity2<-0.005)this.limitVelocity2+=0.005;
                    else this.limitVelocity2=0;
                }
            }else{
                this.limitState2=2;
                this.limitImpulse2=0;
            }

            if(enableLimit3){
                if(this.lowerLimit3==this.upperLimit3){
                    if(this.limitState3!=0){
                        this.limitState3=0;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.lowerLimit3-d3;
                    if(!enableSpring3)d3=this.lowerLimit3;
                }else if(d3<this.lowerLimit3){
                    if(this.limitState3!=-1){
                        this.limitState3=-1;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.lowerLimit3-d3;
                    if(!enableSpring3)d3=this.lowerLimit3;
                }else if(d3>this.upperLimit3){
                    if(this.limitState3!=1){
                        this.limitState3=1;
                        this.limitImpulse3=0;
                    }
                    this.limitVelocity3=this.upperLimit3-d3;
                    if(!enableSpring3)d3=this.upperLimit3;
                }else{
                    this.limitState3=2;
                    this.limitImpulse3=0;
                    this.limitVelocity3=0;
                }
                if(!enableSpring3){
                    if(this.limitVelocity3>0.005)this.limitVelocity3-=0.005;
                    else if(this.limitVelocity3<-0.005)this.limitVelocity3+=0.005;
                    else this.limitVelocity3=0;
                }
            }else{
                this.limitState3=2;
                this.limitImpulse3=0;
            }

            if(this.enableMotor1&&(this.limitState1!=0||enableSpring1)){
                this.maxMotorImpulse1=this.maxMotorForce1*timeStep;
            }else{
                this.motorImpulse1=0;
                this.maxMotorImpulse1=0;
            }

            if(this.enableMotor2&&(this.limitState2!=0||enableSpring2)){
                this.maxMotorImpulse2=this.maxMotorForce2*timeStep;
            }else{
                this.motorImpulse2=0;
                this.maxMotorImpulse2=0;
            }

            if(this.enableMotor3&&(this.limitState3!=0||enableSpring3)){
                this.maxMotorImpulse3=this.maxMotorForce3*timeStep;
            }else{
                this.motorImpulse3=0;
                this.maxMotorImpulse3=0;
            }

            var rdx=d1*this.ax1+d2*this.ax2+d3*this.ax2;
            var rdy=d1*this.ay1+d2*this.ay2+d3*this.ay2;
            var rdz=d1*this.az1+d2*this.az2+d3*this.az2;
            var w1=this.m2/(this.m1+this.m2);
            if(this.weight>=0)w1=this.weight; // use given weight
            var w2=1-w1;
            this.r1x=this.r1.x+rdx*w1;
            this.r1y=this.r1.y+rdy*w1;
            this.r1z=this.r1.z+rdz*w1;
            this.r2x=this.r2.x-rdx*w2;
            this.r2y=this.r2.y-rdy*w2;
            this.r2z=this.r2.z-rdz*w2;

            // build jacobians
            this.t1x1=this.r1y*this.az1-this.r1z*this.ay1;
            this.t1y1=this.r1z*this.ax1-this.r1x*this.az1;
            this.t1z1=this.r1x*this.ay1-this.r1y*this.ax1;
            this.t2x1=this.r2y*this.az1-this.r2z*this.ay1;
            this.t2y1=this.r2z*this.ax1-this.r2x*this.az1;
            this.t2z1=this.r2x*this.ay1-this.r2y*this.ax1;
            this.l1x1=this.ax1*this.m1;
            this.l1y1=this.ay1*this.m1;
            this.l1z1=this.az1*this.m1;
            this.l2x1=this.ax1*this.m2;
            this.l2y1=this.ay1*this.m2;
            this.l2z1=this.az1*this.m2;
            this.a1x1=this.t1x1*this.i1e00+this.t1y1*this.i1e01+this.t1z1*this.i1e02;
            this.a1y1=this.t1x1*this.i1e10+this.t1y1*this.i1e11+this.t1z1*this.i1e12;
            this.a1z1=this.t1x1*this.i1e20+this.t1y1*this.i1e21+this.t1z1*this.i1e22;
            this.a2x1=this.t2x1*this.i2e00+this.t2y1*this.i2e01+this.t2z1*this.i2e02;
            this.a2y1=this.t2x1*this.i2e10+this.t2y1*this.i2e11+this.t2z1*this.i2e12;
            this.a2z1=this.t2x1*this.i2e20+this.t2y1*this.i2e21+this.t2z1*this.i2e22;

            this.t1x2=this.r1y*this.az2-this.r1z*this.ay2;
            this.t1y2=this.r1z*this.ax2-this.r1x*this.az2;
            this.t1z2=this.r1x*this.ay2-this.r1y*this.ax2;
            this.t2x2=this.r2y*this.az2-this.r2z*this.ay2;
            this.t2y2=this.r2z*this.ax2-this.r2x*this.az2;
            this.t2z2=this.r2x*this.ay2-this.r2y*this.ax2;
            this.l1x2=this.ax2*this.m1;
            this.l1y2=this.ay2*this.m1;
            this.l1z2=this.az2*this.m1;
            this.l2x2=this.ax2*this.m2;
            this.l2y2=this.ay2*this.m2;
            this.l2z2=this.az2*this.m2;
            this.a1x2=this.t1x2*this.i1e00+this.t1y2*this.i1e01+this.t1z2*this.i1e02;
            this.a1y2=this.t1x2*this.i1e10+this.t1y2*this.i1e11+this.t1z2*this.i1e12;
            this.a1z2=this.t1x2*this.i1e20+this.t1y2*this.i1e21+this.t1z2*this.i1e22;
            this.a2x2=this.t2x2*this.i2e00+this.t2y2*this.i2e01+this.t2z2*this.i2e02;
            this.a2y2=this.t2x2*this.i2e10+this.t2y2*this.i2e11+this.t2z2*this.i2e12;
            this.a2z2=this.t2x2*this.i2e20+this.t2y2*this.i2e21+this.t2z2*this.i2e22;

            this.t1x3=this.r1y*this.az3-this.r1z*this.ay3;
            this.t1y3=this.r1z*this.ax3-this.r1x*this.az3;
            this.t1z3=this.r1x*this.ay3-this.r1y*this.ax3;
            this.t2x3=this.r2y*this.az3-this.r2z*this.ay3;
            this.t2y3=this.r2z*this.ax3-this.r2x*this.az3;
            this.t2z3=this.r2x*this.ay3-this.r2y*this.ax3;
            this.l1x3=this.ax3*this.m1;
            this.l1y3=this.ay3*this.m1;
            this.l1z3=this.az3*this.m1;
            this.l2x3=this.ax3*this.m2;
            this.l2y3=this.ay3*this.m2;
            this.l2z3=this.az3*this.m2;
            this.a1x3=this.t1x3*this.i1e00+this.t1y3*this.i1e01+this.t1z3*this.i1e02;
            this.a1y3=this.t1x3*this.i1e10+this.t1y3*this.i1e11+this.t1z3*this.i1e12;
            this.a1z3=this.t1x3*this.i1e20+this.t1y3*this.i1e21+this.t1z3*this.i1e22;
            this.a2x3=this.t2x3*this.i2e00+this.t2y3*this.i2e01+this.t2z3*this.i2e02;
            this.a2y3=this.t2x3*this.i2e10+this.t2y3*this.i2e11+this.t2z3*this.i2e12;
            this.a2z3=this.t2x3*this.i2e20+this.t2y3*this.i2e21+this.t2z3*this.i2e22;

            // build an impulse matrix
            var m12=this.m1+this.m2;
            this.k00=(this.ax1*this.ax1+this.ay1*this.ay1+this.az1*this.az1)*m12;
            this.k01=(this.ax1*this.ax2+this.ay1*this.ay2+this.az1*this.az2)*m12;
            this.k02=(this.ax1*this.ax3+this.ay1*this.ay3+this.az1*this.az3)*m12;
            this.k10=(this.ax2*this.ax1+this.ay2*this.ay1+this.az2*this.az1)*m12;
            this.k11=(this.ax2*this.ax2+this.ay2*this.ay2+this.az2*this.az2)*m12;
            this.k12=(this.ax2*this.ax3+this.ay2*this.ay3+this.az2*this.az3)*m12;
            this.k20=(this.ax3*this.ax1+this.ay3*this.ay1+this.az3*this.az1)*m12;
            this.k21=(this.ax3*this.ax2+this.ay3*this.ay2+this.az3*this.az2)*m12;
            this.k22=(this.ax3*this.ax3+this.ay3*this.ay3+this.az3*this.az3)*m12;

            this.k00+=this.t1x1*this.a1x1+this.t1y1*this.a1y1+this.t1z1*this.a1z1;
            this.k01+=this.t1x1*this.a1x2+this.t1y1*this.a1y2+this.t1z1*this.a1z2;
            this.k02+=this.t1x1*this.a1x3+this.t1y1*this.a1y3+this.t1z1*this.a1z3;
            this.k10+=this.t1x2*this.a1x1+this.t1y2*this.a1y1+this.t1z2*this.a1z1;
            this.k11+=this.t1x2*this.a1x2+this.t1y2*this.a1y2+this.t1z2*this.a1z2;
            this.k12+=this.t1x2*this.a1x3+this.t1y2*this.a1y3+this.t1z2*this.a1z3;
            this.k20+=this.t1x3*this.a1x1+this.t1y3*this.a1y1+this.t1z3*this.a1z1;
            this.k21+=this.t1x3*this.a1x2+this.t1y3*this.a1y2+this.t1z3*this.a1z2;
            this.k22+=this.t1x3*this.a1x3+this.t1y3*this.a1y3+this.t1z3*this.a1z3;

            this.k00+=this.t2x1*this.a2x1+this.t2y1*this.a2y1+this.t2z1*this.a2z1;
            this.k01+=this.t2x1*this.a2x2+this.t2y1*this.a2y2+this.t2z1*this.a2z2;
            this.k02+=this.t2x1*this.a2x3+this.t2y1*this.a2y3+this.t2z1*this.a2z3;
            this.k10+=this.t2x2*this.a2x1+this.t2y2*this.a2y1+this.t2z2*this.a2z1;
            this.k11+=this.t2x2*this.a2x2+this.t2y2*this.a2y2+this.t2z2*this.a2z2;
            this.k12+=this.t2x2*this.a2x3+this.t2y2*this.a2y3+this.t2z2*this.a2z3;
            this.k20+=this.t2x3*this.a2x1+this.t2y3*this.a2y1+this.t2z3*this.a2z1;
            this.k21+=this.t2x3*this.a2x2+this.t2y3*this.a2y2+this.t2z3*this.a2z2;
            this.k22+=this.t2x3*this.a2x3+this.t2y3*this.a2y3+this.t2z3*this.a2z3;

            this.kv00=this.k00;
            this.kv11=this.k11;
            this.kv22=this.k22;

            this.dv00=1/this.kv00;
            this.dv11=1/this.kv11;
            this.dv22=1/this.kv22;

            if(enableSpring1&&this.limitState1!=2){
                var omega=6.2831853*frequency1;
                var k=omega*omega*timeStep;
                var dmp=invTimeStep/(k+2*this.limitMotor1.dampingRatio*omega);
                this.cfm1=this.kv00*dmp;
                this.limitVelocity1*=k*dmp;
            }else{
                this.cfm1=0;
                this.limitVelocity1*=invTimeStep*0.05;
            }
            if(enableSpring2&&this.limitState2!=2){
                omega=6.2831853*frequency2;
                k=omega*omega*timeStep;
                dmp=invTimeStep/(k+2*this.limitMotor2.dampingRatio*omega);
                this.cfm2=this.kv11*dmp;
                this.limitVelocity2*=k*dmp;
            }else{
                this.cfm2=0;
                this.limitVelocity2*=invTimeStep*0.05;
            }
            if(enableSpring3&&this.limitState3!=2){
                omega=6.2831853*frequency3;
                k=omega*omega*timeStep;
                dmp=invTimeStep/(k+2*this.limitMotor3.dampingRatio*omega);
                this.cfm3=this.kv22*dmp;
                this.limitVelocity3*=k*dmp;
            }else{
                this.cfm3=0;
                this.limitVelocity3*=invTimeStep*0.05;
            }
            this.k00+=this.cfm1;
            this.k11+=this.cfm2;
            this.k22+=this.cfm3;

            var inv=1/(
                    this.k00*(this.k11*this.k22-this.k21*this.k12)+
                    this.k10*(this.k21*this.k02-this.k01*this.k22)+
                    this.k20*(this.k01*this.k12-this.k11*this.k02)
                );
            this.d00=(this.k11*this.k22-this.k12*this.k21)*inv;
            this.d01=(this.k02*this.k21-this.k01*this.k22)*inv;
            this.d02=(this.k01*this.k12-this.k02*this.k11)*inv;
            this.d10=(this.k12*this.k20-this.k10*this.k22)*inv;
            this.d11=(this.k00*this.k22-this.k02*this.k20)*inv;
            this.d12=(this.k02*this.k10-this.k00*this.k12)*inv;
            this.d20=(this.k10*this.k21-this.k11*this.k20)*inv;
            this.d21=(this.k01*this.k20-this.k00*this.k21)*inv;
            this.d22=(this.k00*this.k11-this.k01*this.k10)*inv;

            // warm starting
            var totalImpulse1=this.limitImpulse1+this.motorImpulse1;
            var totalImpulse2=this.limitImpulse2+this.motorImpulse2;
            var totalImpulse3=this.limitImpulse3+this.motorImpulse3;
            this.l1.x+=totalImpulse1*this.l1x1+totalImpulse2*this.l1x2+totalImpulse3*this.l1x3;
            this.l1.y+=totalImpulse1*this.l1y1+totalImpulse2*this.l1y2+totalImpulse3*this.l1y3;
            this.l1.z+=totalImpulse1*this.l1z1+totalImpulse2*this.l1z2+totalImpulse3*this.l1z3;
            this.a1.x+=totalImpulse1*this.a1x1+totalImpulse2*this.a1x2+totalImpulse3*this.a1x3;
            this.a1.y+=totalImpulse1*this.a1y1+totalImpulse2*this.a1y2+totalImpulse3*this.a1y3;
            this.a1.z+=totalImpulse1*this.a1z1+totalImpulse2*this.a1z2+totalImpulse3*this.a1z3;
            this.l2.x-=totalImpulse1*this.l2x1+totalImpulse2*this.l2x2+totalImpulse3*this.l2x3;
            this.l2.y-=totalImpulse1*this.l2y1+totalImpulse2*this.l2y2+totalImpulse3*this.l2y3;
            this.l2.z-=totalImpulse1*this.l2z1+totalImpulse2*this.l2z2+totalImpulse3*this.l2z3;
            this.a2.x-=totalImpulse1*this.a2x1+totalImpulse2*this.a2x2+totalImpulse3*this.a2x3;
            this.a2.y-=totalImpulse1*this.a2y1+totalImpulse2*this.a2y2+totalImpulse3*this.a2y3;
            this.a2.z-=totalImpulse1*this.a2z1+totalImpulse2*this.a2z2+totalImpulse3*this.a2z3;
        },

        solve:function(){
            var rvx=this.l2.x-this.l1.x+this.a2.y*this.r2z-this.a2.z*this.r2y-this.a1.y*this.r1z+this.a1.z*this.r1y;
            var rvy=this.l2.y-this.l1.y+this.a2.z*this.r2x-this.a2.x*this.r2z-this.a1.z*this.r1x+this.a1.x*this.r1z;
            var rvz=this.l2.z-this.l1.z+this.a2.x*this.r2y-this.a2.y*this.r2x-this.a1.x*this.r1y+this.a1.y*this.r1x;
            var rvn1=rvx*this.ax1+rvy*this.ay1+rvz*this.az1;
            var rvn2=rvx*this.ax2+rvy*this.ay2+rvz*this.az2;
            var rvn3=rvx*this.ax3+rvy*this.ay3+rvz*this.az3;
            var oldMotorImpulse1=this.motorImpulse1;
            var oldMotorImpulse2=this.motorImpulse2;
            var oldMotorImpulse3=this.motorImpulse3;
            var dMotorImpulse1=0;
            var dMotorImpulse2=0;
            var dMotorImpulse3=0;
            if(this.enableMotor1){
                dMotorImpulse1=(rvn1-this.motorSpeed1)*this.dv00;
                this.motorImpulse1+=dMotorImpulse1;
                if(this.motorImpulse1>this.maxMotorImpulse1){ // clamp motor impulse
                    this.motorImpulse1=this.maxMotorImpulse1;
                }else if(this.motorImpulse1<-this.maxMotorImpulse1){
                    this.motorImpulse1=-this.maxMotorImpulse1;
                }
                dMotorImpulse1=this.motorImpulse1-oldMotorImpulse1;
            }
            if(this.enableMotor2){
                dMotorImpulse2=(rvn2-this.motorSpeed2)*this.dv11;
                this.motorImpulse2+=dMotorImpulse2;
                if(this.motorImpulse2>this.maxMotorImpulse2){ // clamp motor impulse
                    this.motorImpulse2=this.maxMotorImpulse2;
                }else if(this.motorImpulse2<-this.maxMotorImpulse2){
                    this.motorImpulse2=-this.maxMotorImpulse2;
                }
                dMotorImpulse2=this.motorImpulse2-oldMotorImpulse2;
            }
            if(this.enableMotor3){
                dMotorImpulse3=(rvn3-this.motorSpeed3)*this.dv22;
                this.motorImpulse3+=dMotorImpulse3;
                if(this.motorImpulse3>this.maxMotorImpulse3){ // clamp motor impulse
                    this.motorImpulse3=this.maxMotorImpulse3;
                }else if(this.motorImpulse3<-this.maxMotorImpulse3){
                    this.motorImpulse3=-this.maxMotorImpulse3;
                }
                dMotorImpulse3=this.motorImpulse3-oldMotorImpulse3;
            }

            // apply motor impulse to relative velocity
            rvn1+=dMotorImpulse1*this.kv00+dMotorImpulse2*this.k01+dMotorImpulse3*this.k02;
            rvn2+=dMotorImpulse1*this.k10+dMotorImpulse2*this.kv11+dMotorImpulse3*this.k12;
            rvn3+=dMotorImpulse1*this.k20+dMotorImpulse2*this.k21+dMotorImpulse3*this.kv22;

            // subtract target velocity and applied impulse
            rvn1-=this.limitVelocity1+this.limitImpulse1*this.cfm1;
            rvn2-=this.limitVelocity2+this.limitImpulse2*this.cfm2;
            rvn3-=this.limitVelocity3+this.limitImpulse3*this.cfm3;

            var oldLimitImpulse1=this.limitImpulse1;
            var oldLimitImpulse2=this.limitImpulse2;
            var oldLimitImpulse3=this.limitImpulse3;

            var dLimitImpulse1=rvn1*this.d00+rvn2*this.d01+rvn3*this.d02;
            var dLimitImpulse2=rvn1*this.d10+rvn2*this.d11+rvn3*this.d12;
            var dLimitImpulse3=rvn1*this.d20+rvn2*this.d21+rvn3*this.d22;

            this.limitImpulse1+=dLimitImpulse1;
            this.limitImpulse2+=dLimitImpulse2;
            this.limitImpulse3+=dLimitImpulse3;

            // clamp
            var clampState=0;
            if(this.limitState1==2||this.limitImpulse1*this.limitState1<0){
                dLimitImpulse1=-oldLimitImpulse1;
                rvn2+=dLimitImpulse1*this.k10;
                rvn3+=dLimitImpulse1*this.k20;
                clampState|=1;
            }
            if(this.limitState2==2||this.limitImpulse2*this.limitState2<0){
                dLimitImpulse2=-oldLimitImpulse2;
                rvn1+=dLimitImpulse2*this.k01;
                rvn3+=dLimitImpulse2*this.k21;
                clampState|=2;
            }
            if(this.limitState3==2||this.limitImpulse3*this.limitState3<0){
                dLimitImpulse3=-oldLimitImpulse3;
                rvn1+=dLimitImpulse3*this.k02;
                rvn2+=dLimitImpulse3*this.k12;
                clampState|=4;
            }

            // update un-clamped impulse
            // TODO: isolate division
            var det;
            switch(clampState){
                case 1:// update 2 3
                    det=1/(this.k11*this.k22-this.k12*this.k21);
                    dLimitImpulse2=(this.k22*rvn2+-this.k12*rvn3)*det;
                    dLimitImpulse3=(-this.k21*rvn2+this.k11*rvn3)*det;
                    break;
                case 2:// update 1 3
                    det=1/(this.k00*this.k22-this.k02*this.k20);
                    dLimitImpulse1=(this.k22*rvn1+-this.k02*rvn3)*det;
                    dLimitImpulse3=(-this.k20*rvn1+this.k00*rvn3)*det;
                    break;
                case 3:// update 3
                    dLimitImpulse3=rvn3/this.k22;
                    break;
                case 4:// update 1 2
                    det=1/(this.k00*this.k11-this.k01*this.k10);
                    dLimitImpulse1=(this.k11*rvn1+-this.k01*rvn2)*det;
                    dLimitImpulse2=(-this.k10*rvn1+this.k00*rvn2)*det;
                    break;
                case 5:// update 2
                    dLimitImpulse2=rvn2/this.k11;
                    break;
                case 6:// update 1
                    dLimitImpulse1=rvn1/this.k00;
                    break;
            }

            this.limitImpulse1=oldLimitImpulse1+dLimitImpulse1;
            this.limitImpulse2=oldLimitImpulse2+dLimitImpulse2;
            this.limitImpulse3=oldLimitImpulse3+dLimitImpulse3;

            var dImpulse1=dMotorImpulse1+dLimitImpulse1;
            var dImpulse2=dMotorImpulse2+dLimitImpulse2;
            var dImpulse3=dMotorImpulse3+dLimitImpulse3;

            // apply impulse
            this.l1.x+=dImpulse1*this.l1x1+dImpulse2*this.l1x2+dImpulse3*this.l1x3;
            this.l1.y+=dImpulse1*this.l1y1+dImpulse2*this.l1y2+dImpulse3*this.l1y3;
            this.l1.z+=dImpulse1*this.l1z1+dImpulse2*this.l1z2+dImpulse3*this.l1z3;
            this.a1.x+=dImpulse1*this.a1x1+dImpulse2*this.a1x2+dImpulse3*this.a1x3;
            this.a1.y+=dImpulse1*this.a1y1+dImpulse2*this.a1y2+dImpulse3*this.a1y3;
            this.a1.z+=dImpulse1*this.a1z1+dImpulse2*this.a1z2+dImpulse3*this.a1z3;
            this.l2.x-=dImpulse1*this.l2x1+dImpulse2*this.l2x2+dImpulse3*this.l2x3;
            this.l2.y-=dImpulse1*this.l2y1+dImpulse2*this.l2y2+dImpulse3*this.l2y3;
            this.l2.z-=dImpulse1*this.l2z1+dImpulse2*this.l2z2+dImpulse3*this.l2z3;
            this.a2.x-=dImpulse1*this.a2x1+dImpulse2*this.a2x2+dImpulse3*this.a2x3;
            this.a2.y-=dImpulse1*this.a2y1+dImpulse2*this.a2y2+dImpulse3*this.a2y3;
            this.a2.z-=dImpulse1*this.a2z1+dImpulse2*this.a2z2+dImpulse3*this.a2z3;
        }

    } );

    /**
     * A prismatic joint allows only for relative translation of rigid bodies along the axis.
     *
     * @author saharan
     * @author lo-th
     */

    function PrismaticJoint( config, lowerTranslation, upperTranslation ){

        Joint.call( this, config );

        this.type = JOINT_PRISMATIC;

        // The axis in the first body's coordinate system.
        this.localAxis1 = config.localAxis1.clone().normalize();
        // The axis in the second body's coordinate system.
        this.localAxis2 = config.localAxis2.clone().normalize();

        this.ax1 = new Vec3();
        this.ax2 = new Vec3();

        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        this.ac = new AngularConstraint( this, new Quat().setFromUnitVectors( this.localAxis1, this.localAxis2 ) );

        // The translational limit and motor information of the joint.
        this.limitMotor = new LimitMotor( this.nor, true );
        this.limitMotor.lowerLimit = lowerTranslation;
        this.limitMotor.upperLimit = upperTranslation;
        this.t3 = new Translational3Constraint( this, this.limitMotor, new LimitMotor( this.tan, true ), new LimitMotor( this.bin, true ) );

    }

    PrismaticJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: PrismaticJoint,

        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            this.ax1.copy( this.localAxis1 ).applyMatrix3( this.body1.rotation, true );
            this.ax2.copy( this.localAxis2 ).applyMatrix3( this.body2.rotation, true );

            // normal tangent binormal

            this.nor.set(
                this.ax1.x*this.body2.inverseMass + this.ax2.x*this.body1.inverseMass,
                this.ax1.y*this.body2.inverseMass + this.ax2.y*this.body1.inverseMass,
                this.ax1.z*this.body2.inverseMass + this.ax2.z*this.body1.inverseMass
            ).normalize();
            this.tan.tangent( this.nor ).normalize();
            this.bin.crossVectors( this.nor, this.tan );

            // preSolve

            this.ac.preSolve( timeStep, invTimeStep );
            this.t3.preSolve( timeStep, invTimeStep );

        },

        solve: function () {

            this.ac.solve();
            this.t3.solve();

        },

        postSolve: function () {

        }

    });

    /**
     * A slider joint allows for relative translation and relative rotation between two rigid bodies along the axis.
     *
     * @author saharan
     * @author lo-th
     */

    function SliderJoint( config, lowerTranslation, upperTranslation ){

        Joint.call( this, config );

        this.type = JOINT_SLIDER;

        // The axis in the first body's coordinate system.
        this.localAxis1 = config.localAxis1.clone().normalize();
        // The axis in the second body's coordinate system.
        this.localAxis2 = config.localAxis2.clone().normalize();

        // make angle axis
        var arc = new Mat33().setQuat( new Quat().setFromUnitVectors( this.localAxis1, this.localAxis2 ) );
        this.localAngle1 = new Vec3().tangent( this.localAxis1 ).normalize();
        this.localAngle2 = this.localAngle1.clone().applyMatrix3( arc, true );

        this.ax1 = new Vec3();
        this.ax2 = new Vec3();
        this.an1 = new Vec3();
        this.an2 = new Vec3();

        this.tmp = new Vec3();

        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        // The limit and motor for the rotation
        this.rotationalLimitMotor = new LimitMotor( this.nor, false );
        this.r3 = new Rotational3Constraint( this, this.rotationalLimitMotor, new LimitMotor( this.tan, true ), new LimitMotor( this.bin, true ) );

        // The limit and motor for the translation.
        this.translationalLimitMotor = new LimitMotor( this.nor, true );
        this.translationalLimitMotor.lowerLimit = lowerTranslation;
        this.translationalLimitMotor.upperLimit = upperTranslation;
        this.t3 = new Translational3Constraint( this, this.translationalLimitMotor, new LimitMotor( this.tan, true ), new LimitMotor( this.bin, true ) );

    }

    SliderJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: SliderJoint,

        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            this.ax1.copy( this.localAxis1 ).applyMatrix3( this.body1.rotation, true );
            this.an1.copy( this.localAngle1 ).applyMatrix3( this.body1.rotation, true );

            this.ax2.copy( this.localAxis2 ).applyMatrix3( this.body2.rotation, true );
            this.an2.copy( this.localAngle2 ).applyMatrix3( this.body2.rotation, true );

            // normal tangent binormal

            this.nor.set(
                this.ax1.x*this.body2.inverseMass + this.ax2.x*this.body1.inverseMass,
                this.ax1.y*this.body2.inverseMass + this.ax2.y*this.body1.inverseMass,
                this.ax1.z*this.body2.inverseMass + this.ax2.z*this.body1.inverseMass
            ).normalize();
            this.tan.tangent( this.nor ).normalize();
            this.bin.crossVectors( this.nor, this.tan );

            // calculate hinge angle

            this.tmp.crossVectors( this.an1, this.an2 );

            var limite = _Math.acosClamp( _Math.dotVectors( this.an1, this.an2 ) );

            if( _Math.dotVectors( this.nor, this.tmp ) < 0 ) this.rotationalLimitMotor.angle = -limite;
            else this.rotationalLimitMotor.angle = limite;

            // angular error

            this.tmp.crossVectors( this.ax1, this.ax2 );
            this.r3.limitMotor2.angle = _Math.dotVectors( this.tan, this.tmp );
            this.r3.limitMotor3.angle = _Math.dotVectors( this.bin, this.tmp );

            // preSolve

            this.r3.preSolve( timeStep, invTimeStep );
            this.t3.preSolve( timeStep, invTimeStep );

        },

        solve: function () {

            this.r3.solve();
            this.t3.solve();

        },

        postSolve: function () {

        }

    });

    /**
     * A wheel joint allows for relative rotation between two rigid bodies along two axes.
     * The wheel joint also allows for relative translation for the suspension.
     *
     * @author saharan
     * @author lo-th
     */

    function WheelJoint ( config ){

        Joint.call( this, config );

        this.type = JOINT_WHEEL;

        // The axis in the first body's coordinate system.
        this.localAxis1 = config.localAxis1.clone().normalize();
        // The axis in the second body's coordinate system.
        this.localAxis2 = config.localAxis2.clone().normalize();

        this.localAngle1 = new Vec3();
        this.localAngle2 = new Vec3();

        var dot = _Math.dotVectors( this.localAxis1, this.localAxis2 );

        if( dot > -1 && dot < 1 ){

            this.localAngle1.set(
                this.localAxis2.x - dot*this.localAxis1.x,
                this.localAxis2.y - dot*this.localAxis1.y,
                this.localAxis2.z - dot*this.localAxis1.z
            ).normalize();

            this.localAngle2.set(
                this.localAxis1.x - dot*this.localAxis2.x,
                this.localAxis1.y - dot*this.localAxis2.y,
                this.localAxis1.z - dot*this.localAxis2.z
            ).normalize();

        } else {

            var arc = new Mat33().setQuat( new Quat().setFromUnitVectors( this.localAxis1, this.localAxis2 ) );
            this.localAngle1.tangent( this.localAxis1 ).normalize();
            this.localAngle2 = this.localAngle1.clone().applyMatrix3( arc, true );

        }

        this.ax1 = new Vec3();
        this.ax2 = new Vec3();
        this.an1 = new Vec3();
        this.an2 = new Vec3();

        this.tmp = new Vec3();

        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        // The translational limit and motor information of the joint.
        this.translationalLimitMotor = new LimitMotor( this.tan,true );
        this.translationalLimitMotor.frequency = 8;
        this.translationalLimitMotor.dampingRatio = 1;
        // The first rotational limit and motor information of the joint.
        this.rotationalLimitMotor1 = new LimitMotor( this.tan, false );
        // The second rotational limit and motor information of the joint.
        this.rotationalLimitMotor2 = new LimitMotor( this.bin, false );

        this.t3 = new Translational3Constraint( this, new LimitMotor( this.nor, true ),this.translationalLimitMotor,new LimitMotor( this.bin, true ));
        this.t3.weight = 1;
        this.r3 = new Rotational3Constraint(this,new LimitMotor( this.nor, true ),this.rotationalLimitMotor1,this.rotationalLimitMotor2);

    }

    WheelJoint.prototype = Object.assign( Object.create( Joint.prototype ), {

        constructor: WheelJoint,

        preSolve: function ( timeStep, invTimeStep ) {

            this.updateAnchorPoints();

            this.ax1.copy( this.localAxis1 ).applyMatrix3( this.body1.rotation, true );
            this.an1.copy( this.localAngle1 ).applyMatrix3( this.body1.rotation, true );

            this.ax2.copy( this.localAxis2 ).applyMatrix3( this.body2.rotation, true );
            this.an2.copy( this.localAngle2 ).applyMatrix3( this.body2.rotation, true );

            this.r3.limitMotor1.angle = _Math.dotVectors( this.ax1, this.ax2 );

            var limite = _Math.dotVectors( this.an1, this.ax2 );

            if( _Math.dotVectors( this.ax1, this.tmp.crossVectors( this.an1, this.ax2 ) ) < 0 ) this.rotationalLimitMotor1.angle = -limite;
            else this.rotationalLimitMotor1.angle = limite;

            limite = _Math.dotVectors( this.an2, this.ax1 );

            if( _Math.dotVectors( this.ax2, this.tmp.crossVectors( this.an2, this.ax1 ) ) < 0 ) this.rotationalLimitMotor2.angle = -limite;
            else this.rotationalLimitMotor2.angle = limite;

            this.nor.crossVectors( this.ax1, this.ax2 ).normalize();
            this.tan.crossVectors( this.nor, this.ax2 ).normalize();
            this.bin.crossVectors( this.nor, this.ax1 ).normalize();

            this.r3.preSolve(timeStep,invTimeStep);
            this.t3.preSolve(timeStep,invTimeStep);

        },

        solve: function () {

            this.r3.solve();
            this.t3.solve();

        },

        postSolve: function () {

        }

    });

    function JointConfig(){

        this.scale = 1;
        this.invScale = 1;

        // The first rigid body of the joint.
        this.body1 = null;
        // The second rigid body of the joint.
        this.body2 = null;
        // The anchor point on the first rigid body in local coordinate system.
        this.localAnchorPoint1 = new Vec3();
        //  The anchor point on the second rigid body in local coordinate system.
        this.localAnchorPoint2 = new Vec3();
        // The axis in the first body's coordinate system.
        // his property is available in some joints.
        this.localAxis1 = new Vec3();
        // The axis in the second body's coordinate system.
        // This property is available in some joints.
        this.localAxis2 = new Vec3();
        //  Whether allow collision between connected rigid bodies or not.
        this.allowCollision = false;

    }

    /**
     * This class holds mass information of a shape.
     * @author lo-th
     * @author saharan
     */

    function MassInfo (){

        // Mass of the shape.
        this.mass = 0;

        // The moment inertia of the shape.
        this.inertia = new Mat33();

    }

    /**
     * A link list of contacts.
     * @author saharan
     */
    function ContactLink ( contact ){

        // The previous contact link.
        this.prev = null;
        // The next contact link.
        this.next = null;
        // The shape of the contact.
        this.shape = null;
        // The other rigid body.
        this.body = null;
        // The contact of the link.
        this.contact = contact;

    }

    function ImpulseDataBuffer (){

        this.lp1X = NaN;
        this.lp1Y = NaN;
        this.lp1Z = NaN;
        this.lp2X = NaN;
        this.lp2Y = NaN;
        this.lp2Z = NaN;
        this.impulse = NaN;

    }

    /**
     * The class holds details of the contact point.
     * @author saharan
     */

    function ManifoldPoint(){

        // Whether this manifold point is persisting or not.
        this.warmStarted = false;
        //  The position of this manifold point.
        this.position = new Vec3();
        // The position in the first shape's coordinate.
        this.localPoint1 = new Vec3();
        //  The position in the second shape's coordinate.
        this.localPoint2 = new Vec3();
        // The normal vector of this manifold point.
        this.normal = new Vec3();
        // The tangent vector of this manifold point.
        this.tangent = new Vec3();
        // The binormal vector of this manifold point.
        this.binormal = new Vec3();
        // The impulse in normal direction.
        this.normalImpulse = 0;
        // The impulse in tangent direction.
        this.tangentImpulse = 0;
        // The impulse in binormal direction.
        this.binormalImpulse = 0;
        // The denominator in normal direction.
        this.normalDenominator = 0;
        // The denominator in tangent direction.
        this.tangentDenominator = 0;
        // The denominator in binormal direction.
        this.binormalDenominator = 0;
        // The depth of penetration.
        this.penetration = 0;

    }

    /**
     * A contact manifold between two shapes.
     * @author saharan
     * @author lo-th
     */

    function ContactManifold () {

        // The first rigid body.
        this.body1 = null;
        // The second rigid body.
        this.body2 = null;
        // The number of manifold points.
        this.numPoints = 0;
        // The manifold points.
        this.points = [
            new ManifoldPoint(),
            new ManifoldPoint(),
            new ManifoldPoint(),
            new ManifoldPoint()
        ];

    }

    ContactManifold.prototype = {

        constructor: ContactManifold,

        //Reset the manifold.
        reset:function( shape1, shape2 ){

            this.body1 = shape1.parent;
            this.body2 = shape2.parent;
            this.numPoints = 0;

        },

        //  Add a point into this manifold.
        addPointVec: function ( pos, norm, penetration, flip ) {

            var p = this.points[ this.numPoints++ ];

            p.position.copy( pos );
            p.localPoint1.sub( pos, this.body1.position ).applyMatrix3( this.body1.rotation );
            p.localPoint2.sub( pos, this.body2.position ).applyMatrix3( this.body2.rotation );

            p.normal.copy( norm );
            if( flip ) p.normal.negate();

            p.normalImpulse = 0;
            p.penetration = penetration;
            p.warmStarted = false;

        },

        //  Add a point into this manifold.
        addPoint: function ( x, y, z, nx, ny, nz, penetration, flip ) {

            var p = this.points[ this.numPoints++ ];

            p.position.set( x, y, z );
            p.localPoint1.sub( p.position, this.body1.position ).applyMatrix3( this.body1.rotation );
            p.localPoint2.sub( p.position, this.body2.position ).applyMatrix3( this.body2.rotation );

            p.normalImpulse = 0;

            p.normal.set( nx, ny, nz );
            if( flip ) p.normal.negate();

            p.penetration = penetration;
            p.warmStarted = false;

        }
    };

    function ContactPointDataBuffer (){

        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        this.norU1 = new Vec3();
        this.tanU1 = new Vec3();
        this.binU1 = new Vec3();

        this.norU2 = new Vec3();
        this.tanU2 = new Vec3();
        this.binU2 = new Vec3();

        this.norT1 = new Vec3();
        this.tanT1 = new Vec3();
        this.binT1 = new Vec3();

        this.norT2 = new Vec3();
        this.tanT2 = new Vec3();
        this.binT2 = new Vec3();

        this.norTU1 = new Vec3();
        this.tanTU1 = new Vec3();
        this.binTU1 = new Vec3();

        this.norTU2 = new Vec3();
        this.tanTU2 = new Vec3();
        this.binTU2 = new Vec3();

        this.norImp = 0;
        this.tanImp = 0;
        this.binImp = 0;

        this.norDen = 0;
        this.tanDen = 0;
        this.binDen = 0;

        this.norTar = 0;

        this.next = null;
        this.last = false;

    }

    /**
     * ...
     * @author saharan
     */
    function ContactConstraint ( manifold ){

        Constraint.call( this );
        // The contact manifold of the constraint.
        this.manifold = manifold;
        // The coefficient of restitution of the constraint.
        this.restitution=NaN;
        // The coefficient of friction of the constraint.
        this.friction=NaN;
        this.p1=null;
        this.p2=null;
        this.lv1=null;
        this.lv2=null;
        this.av1=null;
        this.av2=null;
        this.i1=null;
        this.i2=null;

        //this.ii1 = null;
        //this.ii2 = null;

        this.tmp = new Vec3();
        this.tmpC1 = new Vec3();
        this.tmpC2 = new Vec3();

        this.tmpP1 = new Vec3();
        this.tmpP2 = new Vec3();

        this.tmplv1 = new Vec3();
        this.tmplv2 = new Vec3();
        this.tmpav1 = new Vec3();
        this.tmpav2 = new Vec3();

        this.m1=NaN;
        this.m2=NaN;
        this.num=0;

        this.ps = manifold.points;
        this.cs = new ContactPointDataBuffer();
        this.cs.next = new ContactPointDataBuffer();
        this.cs.next.next = new ContactPointDataBuffer();
        this.cs.next.next.next = new ContactPointDataBuffer();
    }

    ContactConstraint.prototype = Object.assign( Object.create( Constraint.prototype ), {

        constructor: ContactConstraint,

        // Attach the constraint to the bodies.
        attach: function(){

            this.p1=this.body1.position;
            this.p2=this.body2.position;
            this.lv1=this.body1.linearVelocity;
            this.av1=this.body1.angularVelocity;
            this.lv2=this.body2.linearVelocity;
            this.av2=this.body2.angularVelocity;
            this.i1=this.body1.inverseInertia;
            this.i2=this.body2.inverseInertia;

        },

        // Detach the constraint from the bodies.
        detach: function(){

            this.p1=null;
            this.p2=null;
            this.lv1=null;
            this.lv2=null;
            this.av1=null;
            this.av2=null;
            this.i1=null;
            this.i2=null;

        },

        preSolve: function( timeStep, invTimeStep ){

            this.m1 = this.body1.inverseMass;
            this.m2 = this.body2.inverseMass;

            var m1m2 = this.m1 + this.m2;

            this.num = this.manifold.numPoints;

            var c = this.cs;
            var p, rvn, len, norImp, norTar, sepV, i1, i2;

            for( var i=0; i < this.num; i++ ){

                p = this.ps[i];

                this.tmpP1.sub( p.position, this.p1 );
                this.tmpP2.sub( p.position, this.p2 );

                this.tmpC1.crossVectors( this.av1, this.tmpP1 );
                this.tmpC2.crossVectors( this.av2, this.tmpP2 );

                c.norImp = p.normalImpulse;
                c.tanImp = p.tangentImpulse;
                c.binImp = p.binormalImpulse;

                c.nor.copy( p.normal );

                this.tmp.set(

                    ( this.lv2.x + this.tmpC2.x ) - ( this.lv1.x + this.tmpC1.x ),
                    ( this.lv2.y + this.tmpC2.y ) - ( this.lv1.y + this.tmpC1.y ),
                    ( this.lv2.z + this.tmpC2.z ) - ( this.lv1.z + this.tmpC1.z )

                );

                rvn = _Math.dotVectors( c.nor, this.tmp );

                c.tan.set(
                    this.tmp.x - rvn * c.nor.x,
                    this.tmp.y - rvn * c.nor.y,
                    this.tmp.z - rvn * c.nor.z
                );

                len = _Math.dotVectors( c.tan, c.tan );

                if( len <= 0.04 ) {
                    c.tan.tangent( c.nor );
                }

                c.tan.normalize();

                c.bin.crossVectors( c.nor, c.tan );

                c.norU1.scale( c.nor, this.m1 );
                c.norU2.scale( c.nor, this.m2 );

                c.tanU1.scale( c.tan, this.m1 );
                c.tanU2.scale( c.tan, this.m2 );

                c.binU1.scale( c.bin, this.m1 );
                c.binU2.scale( c.bin, this.m2 );

                c.norT1.crossVectors( this.tmpP1, c.nor );
                c.tanT1.crossVectors( this.tmpP1, c.tan );
                c.binT1.crossVectors( this.tmpP1, c.bin );

                c.norT2.crossVectors( this.tmpP2, c.nor );
                c.tanT2.crossVectors( this.tmpP2, c.tan );
                c.binT2.crossVectors( this.tmpP2, c.bin );

                i1 = this.i1;
                i2 = this.i2;

                c.norTU1.copy( c.norT1 ).applyMatrix3( i1, true );
                c.tanTU1.copy( c.tanT1 ).applyMatrix3( i1, true );
                c.binTU1.copy( c.binT1 ).applyMatrix3( i1, true );

                c.norTU2.copy( c.norT2 ).applyMatrix3( i2, true );
                c.tanTU2.copy( c.tanT2 ).applyMatrix3( i2, true );
                c.binTU2.copy( c.binT2 ).applyMatrix3( i2, true );

                /*c.norTU1.mulMat( this.i1, c.norT1 );
                 c.tanTU1.mulMat( this.i1, c.tanT1 );
                 c.binTU1.mulMat( this.i1, c.binT1 );

                 c.norTU2.mulMat( this.i2, c.norT2 );
                 c.tanTU2.mulMat( this.i2, c.tanT2 );
                 c.binTU2.mulMat( this.i2, c.binT2 );*/

                this.tmpC1.crossVectors( c.norTU1, this.tmpP1 );
                this.tmpC2.crossVectors( c.norTU2, this.tmpP2 );
                this.tmp.add( this.tmpC1, this.tmpC2 );
                c.norDen = 1 / ( m1m2 +_Math.dotVectors( c.nor, this.tmp ));

                this.tmpC1.crossVectors( c.tanTU1, this.tmpP1 );
                this.tmpC2.crossVectors( c.tanTU2, this.tmpP2 );
                this.tmp.add( this.tmpC1, this.tmpC2 );
                c.tanDen = 1 / ( m1m2 +_Math.dotVectors( c.tan, this.tmp ));

                this.tmpC1.crossVectors( c.binTU1, this.tmpP1 );
                this.tmpC2.crossVectors( c.binTU2, this.tmpP2 );
                this.tmp.add( this.tmpC1, this.tmpC2 );
                c.binDen = 1 / ( m1m2 +_Math.dotVectors( c.bin, this.tmp ));

                if( p.warmStarted ){

                    norImp = p.normalImpulse;

                    this.lv1.addScaledVector( c.norU1, norImp );
                    this.av1.addScaledVector( c.norTU1, norImp );

                    this.lv2.subScaledVector( c.norU2, norImp );
                    this.av2.subScaledVector( c.norTU2, norImp );

                    c.norImp = norImp;
                    c.tanImp = 0;
                    c.binImp = 0;
                    rvn = 0; // disable bouncing

                } else {

                    c.norImp=0;
                    c.tanImp=0;
                    c.binImp=0;

                }


                if(rvn>-1) rvn=0; // disable bouncing

                norTar = this.restitution*-rvn;
                sepV = -(p.penetration+0.005)*invTimeStep*0.05; // allow 0.5cm error
                if(norTar<sepV) norTar=sepV;
                c.norTar = norTar;
                c.last = i==this.num-1;
                c = c.next;
            }
        },

        solve: function(){

            this.tmplv1.copy( this.lv1 );
            this.tmplv2.copy( this.lv2 );
            this.tmpav1.copy( this.av1 );
            this.tmpav2.copy( this.av2 );

            var oldImp1, newImp1, oldImp2, newImp2, rvn, norImp, tanImp, binImp, max, len;

            var c = this.cs;

            while(true){

                norImp = c.norImp;
                tanImp = c.tanImp;
                binImp = c.binImp;
                max = -norImp * this.friction;

                this.tmp.sub( this.tmplv2, this.tmplv1 );

                rvn = _Math.dotVectors( this.tmp, c.tan ) + _Math.dotVectors( this.tmpav2, c.tanT2 ) - _Math.dotVectors( this.tmpav1, c.tanT1 );

                oldImp1 = tanImp;
                newImp1 = rvn*c.tanDen;
                tanImp += newImp1;

                rvn = _Math.dotVectors( this.tmp, c.bin ) + _Math.dotVectors( this.tmpav2, c.binT2 ) - _Math.dotVectors( this.tmpav1, c.binT1 );

                oldImp2 = binImp;
                newImp2 = rvn*c.binDen;
                binImp += newImp2;

                // cone friction clamp
                len = tanImp*tanImp + binImp*binImp;
                if(len > max * max ){
                    len = max/_Math.sqrt(len);
                    tanImp *= len;
                    binImp *= len;
                }

                newImp1 = tanImp-oldImp1;
                newImp2 = binImp-oldImp2;

                //

                this.tmp.set(
                    c.tanU1.x*newImp1 + c.binU1.x*newImp2,
                    c.tanU1.y*newImp1 + c.binU1.y*newImp2,
                    c.tanU1.z*newImp1 + c.binU1.z*newImp2
                );

                this.tmplv1.addEqual( this.tmp );

                this.tmp.set(
                    c.tanTU1.x*newImp1 + c.binTU1.x*newImp2,
                    c.tanTU1.y*newImp1 + c.binTU1.y*newImp2,
                    c.tanTU1.z*newImp1 + c.binTU1.z*newImp2
                );

                this.tmpav1.addEqual( this.tmp );

                this.tmp.set(
                    c.tanU2.x*newImp1 + c.binU2.x*newImp2,
                    c.tanU2.y*newImp1 + c.binU2.y*newImp2,
                    c.tanU2.z*newImp1 + c.binU2.z*newImp2
                );

                this.tmplv2.subEqual( this.tmp );

                this.tmp.set(
                    c.tanTU2.x*newImp1 + c.binTU2.x*newImp2,
                    c.tanTU2.y*newImp1 + c.binTU2.y*newImp2,
                    c.tanTU2.z*newImp1 + c.binTU2.z*newImp2
                );

                this.tmpav2.subEqual( this.tmp );

                // restitution part

                this.tmp.sub( this.tmplv2, this.tmplv1 );

                rvn = _Math.dotVectors( this.tmp, c.nor ) + _Math.dotVectors( this.tmpav2, c.norT2 ) - _Math.dotVectors( this.tmpav1, c.norT1 );

                oldImp1 = norImp;
                newImp1 = (rvn-c.norTar)*c.norDen;
                norImp += newImp1;
                if( norImp > 0 ) norImp = 0;

                newImp1 = norImp - oldImp1;

                this.tmplv1.addScaledVector( c.norU1, newImp1 );
                this.tmpav1.addScaledVector( c.norTU1, newImp1 );
                this.tmplv2.subScaledVector( c.norU2, newImp1 );
                this.tmpav2.subScaledVector( c.norTU2, newImp1 );

                c.norImp = norImp;
                c.tanImp = tanImp;
                c.binImp = binImp;

                if(c.last)break;
                c = c.next;
            }

            this.lv1.copy( this.tmplv1 );
            this.lv2.copy( this.tmplv2 );
            this.av1.copy( this.tmpav1 );
            this.av2.copy( this.tmpav2 );

        },

        postSolve: function(){

            var c = this.cs, p;
            var i = this.num;
            while(i--){
                //for(var i=0;i<this.num;i++){
                p = this.ps[i];
                p.normal.copy( c.nor );
                p.tangent.copy( c.tan );
                p.binormal.copy( c.bin );

                p.normalImpulse = c.norImp;
                p.tangentImpulse = c.tanImp;
                p.binormalImpulse = c.binImp;
                p.normalDenominator = c.norDen;
                p.tangentDenominator = c.tanDen;
                p.binormalDenominator = c.binDen;
                c=c.next;
            }
        }

    });

    /**
     * A contact is a pair of shapes whose axis-aligned bounding boxes are overlapping.
     * @author saharan
     */

    function Contact(){

        // The first shape.
        this.shape1 = null;
        // The second shape.
        this.shape2 = null;
        // The first rigid body.
        this.body1 = null;
        // The second rigid body.
        this.body2 = null;
        // The previous contact in the world.
        this.prev = null;
        // The next contact in the world.
        this.next = null;
        // Internal
        this.persisting = false;
        // Whether both the rigid bodies are sleeping or not.
        this.sleeping = false;
        // The collision detector between two shapes.
        this.detector = null;
        // The contact constraint of the contact.
        this.constraint = null;
        // Whether the shapes are touching or not.
        this.touching = false;
        // shapes is very close and touching
        this.close = false;

        this.dist = _Math.INF;

        this.b1Link = new ContactLink( this );
        this.b2Link = new ContactLink( this );
        this.s1Link = new ContactLink( this );
        this.s2Link = new ContactLink( this );

        // The contact manifold of the contact.
        this.manifold = new ContactManifold();

        this.buffer = [

            new ImpulseDataBuffer(),
            new ImpulseDataBuffer(),
            new ImpulseDataBuffer(),
            new ImpulseDataBuffer()

        ];

        this.points = this.manifold.points;
        this.constraint = new ContactConstraint( this.manifold );

    }

    Object.assign( Contact.prototype, {

        Contact: true,

        mixRestitution: function ( restitution1, restitution2 ) {

            return _Math.sqrt(restitution1*restitution2);

        },
        mixFriction: function ( friction1, friction2 ) {

            return _Math.sqrt(friction1*friction2);

        },

        /**
         * Update the contact manifold.
         */
        updateManifold: function () {

            this.constraint.restitution =this.mixRestitution(this.shape1.restitution,this.shape2.restitution);
            this.constraint.friction=this.mixFriction(this.shape1.friction,this.shape2.friction);
            var numBuffers=this.manifold.numPoints;
            var i = numBuffers;
            while(i--){
                //for(var i=0;i<numBuffers;i++){
                var b = this.buffer[i];
                var p = this.points[i];
                b.lp1X=p.localPoint1.x;
                b.lp1Y=p.localPoint1.y;
                b.lp1Z=p.localPoint1.z;
                b.lp2X=p.localPoint2.x;
                b.lp2Y=p.localPoint2.y;
                b.lp2Z=p.localPoint2.z;
                b.impulse=p.normalImpulse;
            }
            this.manifold.numPoints=0;
            this.detector.detectCollision(this.shape1,this.shape2,this.manifold);
            var num=this.manifold.numPoints;
            if(num==0){
                this.touching = false;
                this.close = false;
                this.dist = _Math.INF;
                return;
            }

            if( this.touching || this.dist < 0.001 ) this.close = true;
            this.touching=true;
            i = num;
            while(i--){
                //for(i=0; i<num; i++){
                p=this.points[i];
                var lp1x=p.localPoint1.x;
                var lp1y=p.localPoint1.y;
                var lp1z=p.localPoint1.z;
                var lp2x=p.localPoint2.x;
                var lp2y=p.localPoint2.y;
                var lp2z=p.localPoint2.z;
                var index=-1;
                var minDistance=0.0004;
                var j = numBuffers;
                while(j--){
                    //for(var j=0;j<numBuffers;j++){
                    b=this.buffer[j];
                    var dx=b.lp1X-lp1x;
                    var dy=b.lp1Y-lp1y;
                    var dz=b.lp1Z-lp1z;
                    var distance1=dx*dx+dy*dy+dz*dz;
                    dx=b.lp2X-lp2x;
                    dy=b.lp2Y-lp2y;
                    dz=b.lp2Z-lp2z;
                    var distance2=dx*dx+dy*dy+dz*dz;
                    if(distance1<distance2){
                        if(distance1<minDistance){
                            minDistance=distance1;
                            index=j;
                        }
                    }else{
                        if(distance2<minDistance){
                            minDistance=distance2;
                            index=j;
                        }
                    }

                    if( minDistance < this.dist ) this.dist = minDistance;

                }
                if(index!=-1){
                    var tmp=this.buffer[index];
                    this.buffer[index]=this.buffer[--numBuffers];
                    this.buffer[numBuffers]=tmp;
                    p.normalImpulse=tmp.impulse;
                    p.warmStarted=true;
                }else{
                    p.normalImpulse=0;
                    p.warmStarted=false;
                }
            }
        },
        /**
         * Attach the contact to the shapes.
         * @param   shape1
         * @param   shape2
         */
        attach:function(shape1,shape2){
            this.shape1=shape1;
            this.shape2=shape2;
            this.body1=shape1.parent;
            this.body2=shape2.parent;

            this.manifold.body1=this.body1;
            this.manifold.body2=this.body2;
            this.constraint.body1=this.body1;
            this.constraint.body2=this.body2;
            this.constraint.attach();

            this.s1Link.shape=shape2;
            this.s1Link.body=this.body2;
            this.s2Link.shape=shape1;
            this.s2Link.body=this.body1;

            if(shape1.contactLink!=null)(this.s1Link.next=shape1.contactLink).prev=this.s1Link;
            else this.s1Link.next=null;
            shape1.contactLink=this.s1Link;
            shape1.numContacts++;

            if(shape2.contactLink!=null)(this.s2Link.next=shape2.contactLink).prev=this.s2Link;
            else this.s2Link.next=null;
            shape2.contactLink=this.s2Link;
            shape2.numContacts++;

            this.b1Link.shape=shape2;
            this.b1Link.body=this.body2;
            this.b2Link.shape=shape1;
            this.b2Link.body=this.body1;

            if(this.body1.contactLink!=null)(this.b1Link.next=this.body1.contactLink).prev=this.b1Link;
            else this.b1Link.next=null;
            this.body1.contactLink=this.b1Link;
            this.body1.numContacts++;

            if(this.body2.contactLink!=null)(this.b2Link.next=this.body2.contactLink).prev=this.b2Link;
            else this.b2Link.next=null;
            this.body2.contactLink=this.b2Link;
            this.body2.numContacts++;

            this.prev=null;
            this.next=null;

            this.persisting=true;
            this.sleeping=this.body1.sleeping&&this.body2.sleeping;
            this.manifold.numPoints=0;
        },
        /**
         * Detach the contact from the shapes.
         */
        detach:function(){
            var prev=this.s1Link.prev;
            var next=this.s1Link.next;
            if(prev!==null)prev.next=next;
            if(next!==null)next.prev=prev;
            if(this.shape1.contactLink==this.s1Link)this.shape1.contactLink=next;
            this.s1Link.prev=null;
            this.s1Link.next=null;
            this.s1Link.shape=null;
            this.s1Link.body=null;
            this.shape1.numContacts--;

            prev=this.s2Link.prev;
            next=this.s2Link.next;
            if(prev!==null)prev.next=next;
            if(next!==null)next.prev=prev;
            if(this.shape2.contactLink==this.s2Link)this.shape2.contactLink=next;
            this.s2Link.prev=null;
            this.s2Link.next=null;
            this.s2Link.shape=null;
            this.s2Link.body=null;
            this.shape2.numContacts--;

            prev=this.b1Link.prev;
            next=this.b1Link.next;
            if(prev!==null)prev.next=next;
            if(next!==null)next.prev=prev;
            if(this.body1.contactLink==this.b1Link)this.body1.contactLink=next;
            this.b1Link.prev=null;
            this.b1Link.next=null;
            this.b1Link.shape=null;
            this.b1Link.body=null;
            this.body1.numContacts--;

            prev=this.b2Link.prev;
            next=this.b2Link.next;
            if(prev!==null)prev.next=next;
            if(next!==null)next.prev=prev;
            if(this.body2.contactLink==this.b2Link)this.body2.contactLink=next;
            this.b2Link.prev=null;
            this.b2Link.next=null;
            this.b2Link.shape=null;
            this.b2Link.body=null;
            this.body2.numContacts--;

            this.manifold.body1=null;
            this.manifold.body2=null;
            this.constraint.body1=null;
            this.constraint.body2=null;
            this.constraint.detach();

            this.shape1=null;
            this.shape2=null;
            this.body1=null;
            this.body2=null;
        }

    } );

    /**
     * The class of rigid body.
     * Rigid body has the shape of a single or multiple collision processing,
     * I can set the parameters individually.
     * @author saharan
     * @author lo-th
     */

    function RigidBody ( Position, Rotation ) {

        this.position = Position || new Vec3();
        this.orientation = Rotation || new Quat();

        this.scale = 1;
        this.invScale = 1;

        // possible link to three Mesh;
        this.mesh = null;

        this.id = NaN;
        this.name = "";
        // The maximum number of shapes that can be added to a one rigid.
        //this.MAX_SHAPES = 64;//64;

        this.prev = null;
        this.next = null;

        // I represent the kind of rigid body.
        // Please do not change from the outside this variable.
        // If you want to change the type of rigid body, always
        // Please specify the type you want to set the arguments of setupMass method.
        this.type = BODY_NULL;

        this.massInfo = new MassInfo();

        this.newPosition = new Vec3();
        this.controlPos = false;
        this.newOrientation = new Quat();
        this.newRotation = new Vec3();
        this.currentRotation = new Vec3();
        this.controlRot = false;
        this.controlRotInTime = false;

        this.quaternion = new Quat();
        this.pos = new Vec3();



        // Is the translational velocity.
        this.linearVelocity = new Vec3();
        // Is the angular velocity.
        this.angularVelocity = new Vec3();

        //--------------------------------------------
        //  Please do not change from the outside this variables.
        //--------------------------------------------

        // It is a world that rigid body has been added.
        this.parent = null;
        this.contactLink = null;
        this.numContacts = 0;

        // An array of shapes that are included in the rigid body.
        this.shapes = null;
        // The number of shapes that are included in the rigid body.
        this.numShapes = 0;

        // It is the link array of joint that is connected to the rigid body.
        this.jointLink = null;
        // The number of joints that are connected to the rigid body.
        this.numJoints = 0;

        // It is the world coordinate of the center of gravity in the sleep just before.
        this.sleepPosition = new Vec3();
        // It is a quaternion that represents the attitude of sleep just before.
        this.sleepOrientation = new Quat();
        // I will show this rigid body to determine whether it is a rigid body static.
        this.isStatic = false;
        // I indicates that this rigid body to determine whether it is a rigid body dynamic.
        this.isDynamic = false;

        this.isKinematic = false;

        // It is a rotation matrix representing the orientation.
        this.rotation = new Mat33();

        //--------------------------------------------
        // It will be recalculated automatically from the shape, which is included.
        //--------------------------------------------

        // This is the weight.
        this.mass = 0;
        // It is the reciprocal of the mass.
        this.inverseMass = 0;
        // It is the inverse of the inertia tensor in the world system.
        this.inverseInertia = new Mat33();
        // It is the inertia tensor in the initial state.
        this.localInertia = new Mat33();
        // It is the inverse of the inertia tensor in the initial state.
        this.inverseLocalInertia = new Mat33();

        this.tmpInertia = new Mat33();


        // I indicates rigid body whether it has been added to the simulation Island.
        this.addedToIsland = false;
        // It shows how to sleep rigid body.
        this.allowSleep = true;
        // This is the time from when the rigid body at rest.
        this.sleepTime = 0;
        // I shows rigid body to determine whether it is a sleep state.
        this.sleeping = false;

    }

    Object.assign( RigidBody.prototype, {

        setParent: function ( world ) {

            this.parent = world;
            this.scale = this.parent.scale;
            this.invScale = this.parent.invScale;
            this.id = this.parent.numRigidBodies;
            if( !this.name ) this.name = this.id;

            this.updateMesh();

        },

        /**
         * I'll add a shape to rigid body.
         * If you add a shape, please call the setupMass method to step up to the start of the next.
         * @param   shape shape to Add
         */
        addShape:function(shape){

            if(shape.parent){
                printError("RigidBody", "It is not possible that you add a shape which already has an associated body.");
            }

            if(this.shapes!=null)( this.shapes.prev = shape ).next = this.shapes;
            this.shapes = shape;
            shape.parent = this;
            if(this.parent) this.parent.addShape( shape );
            this.numShapes++;

        },
        /**
         * I will delete the shape from the rigid body.
         * If you delete a shape, please call the setupMass method to step up to the start of the next.
         * @param shape {Shape} to delete
         * @return void
         */
        removeShape:function(shape){

            var remove = shape;
            if(remove.parent!=this)return;
            var prev=remove.prev;
            var next=remove.next;
            if(prev!=null) prev.next=next;
            if(next!=null) next.prev=prev;
            if(this.shapes==remove)this.shapes=next;
            remove.prev=null;
            remove.next=null;
            remove.parent=null;
            if(this.parent)this.parent.removeShape(remove);
            this.numShapes--;

        },

        remove: function () {

            this.dispose();

        },

        dispose: function () {

            this.parent.removeRigidBody( this );

        },

        checkContact: function( name ) {

            this.parent.checkContact( this.name, name );

        },

        /**
         * Calulates mass datas(center of gravity, mass, moment inertia, etc...).
         * If the parameter type is set to BODY_STATIC, the rigid body will be fixed to the space.
         * If the parameter adjustPosition is set to true, the shapes' relative positions and
         * the rigid body's position will be adjusted to the center of gravity.
         * @param type
         * @param adjustPosition
         * @return void
         */
        setupMass: function ( type, AdjustPosition ) {

            var adjustPosition = ( AdjustPosition !== undefined ) ? AdjustPosition : true;

            this.type = type || BODY_STATIC;
            this.isDynamic = this.type === BODY_DYNAMIC;
            this.isStatic = this.type === BODY_STATIC;

            this.mass = 0;
            this.localInertia.set(0,0,0,0,0,0,0,0,0);


            var tmpM = new Mat33();
            var tmpV = new Vec3();

            for( var shape = this.shapes; shape !== null; shape = shape.next ){

                shape.calculateMassInfo( this.massInfo );
                var shapeMass = this.massInfo.mass;
                tmpV.addScaledVector(shape.relativePosition, shapeMass);
                this.mass += shapeMass;
                this.rotateInertia( shape.relativeRotation, this.massInfo.inertia, tmpM );
                this.localInertia.add( tmpM );

                // add offset inertia
                this.localInertia.addOffset( shapeMass, shape.relativePosition );

            }

            this.inverseMass = 1 / this.mass;
            tmpV.scaleEqual( this.inverseMass );

            if( adjustPosition ){
                this.position.add( tmpV );
                for( shape=this.shapes; shape !== null; shape = shape.next ){
                    shape.relativePosition.subEqual(tmpV);
                }

                // subtract offset inertia
                this.localInertia.subOffset( this.mass, tmpV );

            }

            this.inverseLocalInertia.invert( this.localInertia );

            //}

            if( this.type === BODY_STATIC ){
                this.inverseMass = 0;
                this.inverseLocalInertia.set(0,0,0,0,0,0,0,0,0);
            }

            this.syncShapes();
            this.awake();

        },
        /**
         * Awake the rigid body.
         */
        awake:function(){

            if( !this.allowSleep || !this.sleeping ) return;
            this.sleeping = false;
            this.sleepTime = 0;
            // awake connected constraints
            var cs = this.contactLink;
            while(cs != null){
                cs.body.sleepTime = 0;
                cs.body.sleeping = false;
                cs = cs.next;
            }
            var js = this.jointLink;
            while(js != null){
                js.body.sleepTime = 0;
                js.body.sleeping = false;
                js = js.next;
            }
            for(var shape = this.shapes; shape!=null; shape = shape.next){
                shape.updateProxy();
            }

        },
        /**
         * Sleep the rigid body.
         */
        sleep:function(){

            if( !this.allowSleep || this.sleeping ) return;

            this.linearVelocity.set(0,0,0);
            this.angularVelocity.set(0,0,0);
            this.sleepPosition.copy( this.position );
            this.sleepOrientation.copy( this.orientation );

            this.sleepTime = 0;
            this.sleeping = true;
            for( var shape = this.shapes; shape != null; shape = shape.next ) {
                shape.updateProxy();
            }
        },

        testWakeUp: function(){

            if( this.linearVelocity.testZero() || this.angularVelocity.testZero() || this.position.testDiff( this.sleepPosition ) || this.orientation.testDiff( this.sleepOrientation )) this.awake(); // awake the body

        },

        /**
         * Get whether the rigid body has not any connection with others.
         * @return {void}
         */
        isLonely: function () {
            return this.numJoints==0 && this.numContacts==0;
        },

        /**
         * The time integration of the motion of a rigid body, you can update the information such as the shape.
         * This method is invoked automatically when calling the step of the World,
         * There is no need to call from outside usually.
         * @param  timeStep time
         * @return {void}
         */

        updatePosition: function ( timeStep ) {
            switch(this.type){
                case BODY_STATIC:
                    this.linearVelocity.set(0,0,0);
                    this.angularVelocity.set(0,0,0);

                    // ONLY FOR TEST
                    if(this.controlPos){
                        this.position.copy(this.newPosition);
                        this.controlPos = false;
                    }
                    if(this.controlRot){
                        this.orientation.copy(this.newOrientation);
                        this.controlRot = false;
                    }
                    /*this.linearVelocity.x=0;
                     this.linearVelocity.y=0;
                     this.linearVelocity.z=0;
                     this.angularVelocity.x=0;
                     this.angularVelocity.y=0;
                     this.angularVelocity.z=0;*/
                    break;
                case BODY_DYNAMIC:

                    if( this.isKinematic ){

                        this.linearVelocity.set(0,0,0);
                        this.angularVelocity.set(0,0,0);

                    }

                    if(this.controlPos){

                        this.linearVelocity.subVectors( this.newPosition, this.position ).multiplyScalar(1/timeStep);
                        this.controlPos = false;

                    }
                    if(this.controlRot){

                        this.angularVelocity.copy( this.getAxis() );
                        this.orientation.copy( this.newOrientation );
                        this.controlRot = false;

                    }

                    this.position.addScaledVector(this.linearVelocity, timeStep);
                    this.orientation.addTime(this.angularVelocity, timeStep);

                    this.updateMesh();

                    break;
                default: printError("RigidBody", "Invalid type.");
            }

            this.syncShapes();
            this.updateMesh();

        },

        getAxis: function () {

            return new Vec3( 0,1,0 ).applyMatrix3( this.inverseLocalInertia, true ).normalize();

        },

        rotateInertia: function ( rot, inertia, out ) {

            this.tmpInertia.multiplyMatrices( rot, inertia );
            out.multiplyMatrices( this.tmpInertia, rot, true );

        },

        syncShapes: function () {

            this.rotation.setQuat( this.orientation );
            this.rotateInertia( this.rotation, this.inverseLocalInertia, this.inverseInertia );

            for(var shape = this.shapes; shape!=null; shape = shape.next){

                shape.position.copy( shape.relativePosition ).applyMatrix3( this.rotation, true ).add( this.position );
                // add by QuaziKb
                shape.rotation.multiplyMatrices( this.rotation, shape.relativeRotation );
                shape.updateProxy();
            }
        },


        //---------------------------------------------
        // APPLY IMPULSE FORCE
        //---------------------------------------------

        applyImpulse: function(position, force){
            this.linearVelocity.addScaledVector(force, this.inverseMass);
            var rel = new Vec3().copy( position ).sub( this.position ).cross( force ).applyMatrix3( this.inverseInertia, true );
            this.angularVelocity.add( rel );
        },


        //---------------------------------------------
        // SET DYNAMIQUE POSITION AND ROTATION
        //---------------------------------------------

        setPosition: function(pos){
            this.newPosition.copy( pos ).multiplyScalar( this.invScale );
            this.controlPos = true;
            if( !this.isKinematic ) this.isKinematic = true;
        },

        setQuaternion: function(q){
            this.newOrientation.set(q.x, q.y, q.z, q.w);
            this.controlRot = true;
            if( !this.isKinematic ) this.isKinematic = true;
        },

        setRotation: function ( rot ) {

            this.newOrientation = new Quat().setFromEuler( rot.x * _Math.degtorad, rot.y * _Math.degtorad, rot.z * _Math.degtorad );//this.rotationVectToQuad( rot );
            this.controlRot = true;

        },

        //---------------------------------------------
        // RESET DYNAMIQUE POSITION AND ROTATION
        //---------------------------------------------

        resetPosition:function(x,y,z){

            this.linearVelocity.set( 0, 0, 0 );
            this.angularVelocity.set( 0, 0, 0 );
            this.position.set( x, y, z ).multiplyScalar( this.invScale );
            //this.position.set( x*OIMO.WorldScale.invScale, y*OIMO.WorldScale.invScale, z*OIMO.WorldScale.invScale );
            this.awake();
        },

        resetQuaternion:function( q ){

            this.angularVelocity.set(0,0,0);
            this.orientation = new Quat( q.x, q.y, q.z, q.w );
            this.awake();

        },

        resetRotation:function(x,y,z){

            this.angularVelocity.set(0,0,0);
            this.orientation = new Quat().setFromEuler( x * _Math.degtorad, y * _Math.degtorad,  z * _Math.degtorad );//this.rotationVectToQuad( new Vec3(x,y,z) );
            this.awake();

        },

        //---------------------------------------------
        // GET POSITION AND ROTATION
        //---------------------------------------------

        getPosition:function () {

            return this.pos;

        },

        getQuaternion: function () {

            return this.quaternion;

        },

        //---------------------------------------------
        // AUTO UPDATE THREE MESH
        //---------------------------------------------

        connectMesh: function ( mesh ) {

            this.mesh = mesh;
            this.updateMesh();

        },

        updateMesh: function(){

            this.pos.scale( this.position, this.scale );
            this.quaternion.copy( this.orientation );

            if( this.mesh === null ) return;

            this.mesh.position.copy( this.getPosition() );
            this.mesh.quaternion.copy( this.getQuaternion() );

        },

    } );

    /**
     * A pair of shapes that may collide.
     * @author saharan
     */
    function Pair ( s1, s2 ){

        // The first shape.
        this.shape1 = s1 || null;
        // The second shape.
        this.shape2 = s2 || null;

    }

    /**
     * The broad-phase is used for collecting all possible pairs for collision.
     */

    function BroadPhase(){

        this.types = BR_NULL;
        this.numPairChecks = 0;
        this.numPairs = 0;
        this.pairs = [];

    }

    Object.assign( BroadPhase.prototype, {

        BroadPhase: true,

        // Create a new proxy.
        createProxy: function ( shape ) {

            printError("BroadPhase","Inheritance error.");

        },

        // Add the proxy into the broad-phase.
        addProxy: function ( proxy ) {

            printError("BroadPhase","Inheritance error.");
        },

        // Remove the proxy from the broad-phase.
        removeProxy: function ( proxy ) {

            printError("BroadPhase","Inheritance error.");

        },

        // Returns whether the pair is available or not.
        isAvailablePair: function ( s1, s2 ) {

            var b1 = s1.parent;
            var b2 = s2.parent;
            if( b1 == b2 || // same parents
                (!b1.isDynamic && !b2.isDynamic) || // static or kinematic object
                (s1.belongsTo&s2.collidesWith)==0 ||
                (s2.belongsTo&s1.collidesWith)==0 // collision filtering
            ){ return false; }
            var js;
            if(b1.numJoints<b2.numJoints) js = b1.jointLink;
            else js = b2.jointLink;
            while(js!==null){
                var joint = js.joint;
                if( !joint.allowCollision && ((joint.body1==b1 && joint.body2==b2) || (joint.body1==b2 && joint.body2==b1)) ){ return false; }
                js = js.next;
            }

            return true;

        },

        // Detect overlapping pairs.
        detectPairs: function () {

            // clear old
            this.pairs = [];
            this.numPairs = 0;
            this.numPairChecks = 0;
            this.collectPairs();

        },

        collectPairs: function () {

            Error("BroadPhase", "Inheritance error.");

        },

        addPair: function ( s1, s2 ) {

            var pair = new Pair( s1, s2 );
            this.pairs.push(pair);
            this.numPairs++;

        }

    });

    var count$1 = 0;
    function ProxyIdCount() { return count$1++; }

    /**
     * A proxy is used for broad-phase collecting pairs that can be colliding.
     *
     * @author lo-th
     */

    function Proxy( shape ) {

        //The parent shape.
        this.shape = shape;

        //The axis-aligned bounding box.
        this.aabb = shape.aabb;

    }

    Object.assign( Proxy.prototype, {

        Proxy: true,

        // Update the proxy. Must be inherited by a child.

        update: function(){

            printError("Proxy","Inheritance error.");

        }

    });

    /**
     * A basic implementation of proxies.
     *
     * @author saharan
     */

    function BasicProxy ( shape ) {

        Proxy.call( this, shape );

        this.id = ProxyIdCount();

    }

    BasicProxy.prototype = Object.assign( Object.create( Proxy.prototype ), {

        constructor: BasicProxy,

        update: function () {

        }

    });

    /**
     * A broad-phase algorithm with brute-force search.
     * This always checks for all possible pairs.
     */

    function BruteForceBroadPhase(){

        BroadPhase.call( this );
        this.types = BR_BRUTE_FORCE;
        //this.numProxies=0;
        ///this.maxProxies = 256;
        this.proxies = [];
        //this.proxies.length = 256;

    }


    BruteForceBroadPhase.prototype = Object.assign( Object.create( BroadPhase.prototype ), {

        constructor: BruteForceBroadPhase,

        createProxy: function ( shape ) {

            return new BasicProxy( shape );

        },

        addProxy: function ( proxy ) {

            /*if(this.numProxies==this.maxProxies){
             //this.maxProxies<<=1;
             this.maxProxies*=2;
             var newProxies=[];
             newProxies.length = this.maxProxies;
             var i = this.numProxies;
             while(i--){
             //for(var i=0, l=this.numProxies;i<l;i++){
             newProxies[i]=this.proxies[i];
             }
             this.proxies=newProxies;
             }*/
            //this.proxies[this.numProxies++] = proxy;
            this.proxies.push( proxy );
            //this.numProxies++;

        },

        removeProxy: function ( proxy ) {

            var n = this.proxies.indexOf( proxy );
            if ( n > -1 ){
                this.proxies.splice( n, 1 );
                //this.numProxies--;
            }

            /*var i = this.numProxies;
             while(i--){
             //for(var i=0, l=this.numProxies;i<l;i++){
             if(this.proxies[i] == proxy){
             this.proxies[i] = this.proxies[--this.numProxies];
             this.proxies[this.numProxies] = null;
             return;
             }
             }*/

        },

        collectPairs: function () {

            var i = 0, j, p1, p2;

            var px = this.proxies;
            var l = px.length;//this.numProxies;
            //var ar1 = [];
            //var ar2 = [];

            //for( i = px.length ; i-- ; ar1[ i ] = px[ i ] ){};
            //for( i = px.length ; i-- ; ar2[ i ] = px[ i ] ){};

            //var ar1 = JSON.parse(JSON.stringify(this.proxies))
            //var ar2 = JSON.parse(JSON.stringify(this.proxies))

            this.numPairChecks = l*(l-1)>>1;
            //this.numPairChecks=this.numProxies*(this.numProxies-1)*0.5;

            while( i < l ){
                p1 = px[i++];
                j = i + 1;
                while( j < l ){
                    p2 = px[j++];
                    if ( p1.aabb.intersectTest( p2.aabb ) || !this.isAvailablePair( p1.shape, p2.shape ) ) continue;
                    this.addPair( p1.shape, p2.shape );
                }
            }

        }

    });

    /**
     * A projection axis for sweep and prune broad-phase.
     * @author saharan
     */

    function SAPAxis (){

        this.numElements = 0;
        this.bufferSize = 256;
        this.elements = [];
        this.elements.length = this.bufferSize;
        this.stack = new Float32Array( 64 );

    }

    Object.assign( SAPAxis.prototype, {

        SAPAxis: true,

        addElements: function ( min, max ) {

            if(this.numElements+2>=this.bufferSize){
                //this.bufferSize<<=1;
                this.bufferSize*=2;
                var newElements=[];
                var i = this.numElements;
                while(i--){
                    //for(var i=0, l=this.numElements; i<l; i++){
                    newElements[i] = this.elements[i];
                }
            }
            this.elements[this.numElements++] = min;
            this.elements[this.numElements++] = max;

        },

        removeElements: function ( min, max ) {

            var minIndex=-1;
            var maxIndex=-1;
            for(var i=0, l=this.numElements; i<l; i++){
                var e=this.elements[i];
                if(e==min||e==max){
                    if(minIndex==-1){
                        minIndex=i;
                    }else{
                        maxIndex=i;
                        break;
                    }
                }
            }
            for(i = minIndex+1, l = maxIndex; i < l; i++){
                this.elements[i-1] = this.elements[i];
            }
            for(i = maxIndex+1, l = this.numElements; i < l; i++){
                this.elements[i-2] = this.elements[i];
            }

            this.elements[--this.numElements] = null;
            this.elements[--this.numElements] = null;

        },

        sort: function () {

            var count = 0;
            var threshold = 1;
            while((this.numElements >> threshold) != 0 ) threshold++;
            threshold = threshold * this.numElements >> 2;
            count = 0;

            var giveup = false;
            var elements = this.elements;
            for( var i = 1, l = this.numElements; i < l; i++){ // try insertion sort
                var tmp=elements[i];
                var pivot=tmp.value;
                var tmp2=elements[i-1];
                if(tmp2.value>pivot){
                    var j=i;
                    do{
                        elements[j]=tmp2;
                        if(--j==0)break;
                        tmp2=elements[j-1];
                    }while(tmp2.value>pivot);
                    elements[j]=tmp;
                    count+=i-j;
                    if(count>threshold){
                        giveup=true; // stop and use quick sort
                        break;
                    }
                }
            }
            if(!giveup)return;
            count=2;var stack=this.stack;
            stack[0]=0;
            stack[1]=this.numElements-1;
            while(count>0){
                var right=stack[--count];
                var left=stack[--count];
                var diff=right-left;
                if(diff>16){  // quick sort
                    //var mid=left+(diff>>1);
                    var mid = left + (_Math.floor(diff*0.5));
                    tmp = elements[mid];
                    elements[mid] = elements[right];
                    elements[right] = tmp;
                    pivot = tmp.value;
                    i = left-1;
                    j = right;
                    while( true ){
                        var ei;
                        var ej;
                        do{ ei = elements[++i]; } while( ei.value < pivot);
                        do{ ej = elements[--j]; } while( pivot < ej.value && j != left );
                        if( i >= j ) break;
                        elements[i] = ej;
                        elements[j] = ei;
                    }

                    elements[right] = elements[i];
                    elements[i] = tmp;
                    if( i - left > right - i ) {
                        stack[count++] = left;
                        stack[count++] = i - 1;
                        stack[count++] = i + 1;
                        stack[count++] = right;
                    }else{
                        stack[count++] = i + 1;
                        stack[count++] = right;
                        stack[count++] = left;
                        stack[count++] = i - 1;
                    }
                }else{
                    for( i = left + 1; i <= right; i++ ) {
                        tmp = elements[i];
                        pivot = tmp.value;
                        tmp2 = elements[i-1];
                        if( tmp2.value > pivot ) {
                            j = i;
                            do{
                                elements[j] = tmp2;
                                if( --j == 0 ) break;
                                tmp2 = elements[j-1];
                            }while( tmp2.value > pivot );
                            elements[j] = tmp;
                        }
                    }
                }
            }

        },

        calculateTestCount: function () {

            var num = 1;
            var sum = 0;
            for(var i = 1, l = this.numElements; i<l; i++){
                if(this.elements[i].max){
                    num--;
                }else{
                    sum += num;
                    num++;
                }
            }
            return sum;

        }

    });

    /**
     * An element of proxies.
     * @author saharan
     */

    function SAPElement ( proxy, max ) {

        // The parent proxy
        this.proxy = proxy;
        // The pair element.
        this.pair = null;
        // The minimum element on other axis.
        this.min1 = null;
        // The maximum element on other axis.
        this.max1 = null;
        // The minimum element on other axis.
        this.min2 = null;
        // The maximum element on other axis.
        this.max2 = null;
        // Whether the element has maximum value or not.
        this.max = max;
        // The value of the element.
        this.value = 0;

    }

    /**
     * A proxy for sweep and prune broad-phase.
     * @author saharan
     * @author lo-th
     */

    function SAPProxy ( sap, shape ){

        Proxy.call( this, shape );
        // Type of the axis to which the proxy belongs to. [0:none, 1:dynamic, 2:static]
        this.belongsTo = 0;
        // The maximum elements on each axis.
        this.max = [];
        // The minimum elements on each axis.
        this.min = [];

        this.sap = sap;
        this.min[0] = new SAPElement( this, false );
        this.max[0] = new SAPElement( this, true );
        this.min[1] = new SAPElement( this, false );
        this.max[1] = new SAPElement( this, true );
        this.min[2] = new SAPElement( this, false );
        this.max[2] = new SAPElement( this, true );
        this.max[0].pair = this.min[0];
        this.max[1].pair = this.min[1];
        this.max[2].pair = this.min[2];
        this.min[0].min1 = this.min[1];
        this.min[0].max1 = this.max[1];
        this.min[0].min2 = this.min[2];
        this.min[0].max2 = this.max[2];
        this.min[1].min1 = this.min[0];
        this.min[1].max1 = this.max[0];
        this.min[1].min2 = this.min[2];
        this.min[1].max2 = this.max[2];
        this.min[2].min1 = this.min[0];
        this.min[2].max1 = this.max[0];
        this.min[2].min2 = this.min[1];
        this.min[2].max2 = this.max[1];

    }

    SAPProxy.prototype = Object.assign( Object.create( Proxy.prototype ), {

        constructor: SAPProxy,


        // Returns whether the proxy is dynamic or not.
        isDynamic: function () {

            var body = this.shape.parent;
            return body.isDynamic && !body.sleeping;

        },

        update: function () {

            var te = this.aabb.elements;
            this.min[0].value = te[0];
            this.min[1].value = te[1];
            this.min[2].value = te[2];
            this.max[0].value = te[3];
            this.max[1].value = te[4];
            this.max[2].value = te[5];

            if( this.belongsTo == 1 && !this.isDynamic() || this.belongsTo == 2 && this.isDynamic() ){
                this.sap.removeProxy(this);
                this.sap.addProxy(this);
            }

        }

    });

    /**
     * A broad-phase collision detection algorithm using sweep and prune.
     * @author saharan
     * @author lo-th
     */

    function SAPBroadPhase () {

        BroadPhase.call( this);
        this.types = BR_SWEEP_AND_PRUNE;

        this.numElementsD = 0;
        this.numElementsS = 0;
        // dynamic proxies
        this.axesD = [
            new SAPAxis(),
            new SAPAxis(),
            new SAPAxis()
        ];
        // static or sleeping proxies
        this.axesS = [
            new SAPAxis(),
            new SAPAxis(),
            new SAPAxis()
        ];

        this.index1 = 0;
        this.index2 = 1;

    }

    SAPBroadPhase.prototype = Object.assign( Object.create( BroadPhase.prototype ), {

        constructor: SAPBroadPhase,

        createProxy: function ( shape ) {

            return new SAPProxy( this, shape );

        },

        addProxy: function ( proxy ) {

            var p = proxy;
            if(p.isDynamic()){
                this.axesD[0].addElements( p.min[0], p.max[0] );
                this.axesD[1].addElements( p.min[1], p.max[1] );
                this.axesD[2].addElements( p.min[2], p.max[2] );
                p.belongsTo = 1;
                this.numElementsD += 2;
            } else {
                this.axesS[0].addElements( p.min[0], p.max[0] );
                this.axesS[1].addElements( p.min[1], p.max[1] );
                this.axesS[2].addElements( p.min[2], p.max[2] );
                p.belongsTo = 2;
                this.numElementsS += 2;
            }

        },

        removeProxy: function ( proxy ) {

            var p = proxy;
            if ( p.belongsTo == 0 ) return;

            /*else if ( p.belongsTo == 1 ) {
             this.axesD[0].removeElements( p.min[0], p.max[0] );
             this.axesD[1].removeElements( p.min[1], p.max[1] );
             this.axesD[2].removeElements( p.min[2], p.max[2] );
             this.numElementsD -= 2;
             } else if ( p.belongsTo == 2 ) {
             this.axesS[0].removeElements( p.min[0], p.max[0] );
             this.axesS[1].removeElements( p.min[1], p.max[1] );
             this.axesS[2].removeElements( p.min[2], p.max[2] );
             this.numElementsS -= 2;
             }*/

            switch( p.belongsTo ){
                case 1:
                    this.axesD[0].removeElements( p.min[0], p.max[0] );
                    this.axesD[1].removeElements( p.min[1], p.max[1] );
                    this.axesD[2].removeElements( p.min[2], p.max[2] );
                    this.numElementsD -= 2;
                    break;
                case 2:
                    this.axesS[0].removeElements( p.min[0], p.max[0] );
                    this.axesS[1].removeElements( p.min[1], p.max[1] );
                    this.axesS[2].removeElements( p.min[2], p.max[2] );
                    this.numElementsS -= 2;
                    break;
            }

            p.belongsTo = 0;

        },

        collectPairs: function () {

            if( this.numElementsD == 0 ) return;

            var axis1 = this.axesD[this.index1];
            var axis2 = this.axesD[this.index2];

            axis1.sort();
            axis2.sort();

            var count1 = axis1.calculateTestCount();
            var count2 = axis2.calculateTestCount();
            var elementsD;
            var elementsS;
            if( count1 <= count2 ){// select the best axis
                axis2 = this.axesS[this.index1];
                axis2.sort();
                elementsD = axis1.elements;
                elementsS = axis2.elements;
            }else{
                axis1 = this.axesS[this.index2];
                axis1.sort();
                elementsD = axis2.elements;
                elementsS = axis1.elements;
                this.index1 ^= this.index2;
                this.index2 ^= this.index1;
                this.index1 ^= this.index2;
            }
            var activeD;
            var activeS;
            var p = 0;
            var q = 0;
            while( p < this.numElementsD ){
                var e1;
                var dyn;
                if (q == this.numElementsS ){
                    e1 = elementsD[p];
                    dyn = true;
                    p++;
                }else{
                    var d = elementsD[p];
                    var s = elementsS[q];
                    if( d.value < s.value ){
                        e1 = d;
                        dyn = true;
                        p++;
                    }else{
                        e1 = s;
                        dyn = false;
                        q++;
                    }
                }
                if( !e1.max ){
                    var s1 = e1.proxy.shape;
                    var min1 = e1.min1.value;
                    var max1 = e1.max1.value;
                    var min2 = e1.min2.value;
                    var max2 = e1.max2.value;

                    for( var e2 = activeD; e2 != null; e2 = e2.pair ) {// test for dynamic
                        var s2 = e2.proxy.shape;

                        this.numPairChecks++;
                        if( min1 > e2.max1.value || max1 < e2.min1.value || min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair( s1, s2 ) ) continue;
                        this.addPair( s1, s2 );
                    }
                    if( dyn ){
                        for( e2 = activeS; e2 != null; e2 = e2.pair ) {// test for static
                            s2 = e2.proxy.shape;

                            this.numPairChecks++;

                            if( min1 > e2.max1.value || max1 < e2.min1.value|| min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair(s1,s2) ) continue;
                            this.addPair( s1, s2 );
                        }
                        e1.pair = activeD;
                        activeD = e1;
                    }else{
                        e1.pair = activeS;
                        activeS = e1;
                    }
                }else{
                    var min = e1.pair;
                    if( dyn ){
                        if( min == activeD ){
                            activeD = activeD.pair;
                            continue;
                        }else{
                            e1 = activeD;
                        }
                    }else{
                        if( min == activeS ){
                            activeS = activeS.pair;
                            continue;
                        }else{
                            e1 = activeS;
                        }
                    }
                    do{
                        e2 = e1.pair;
                        if( e2 == min ){
                            e1.pair = e2.pair;
                            break;
                        }
                        e1 = e2;
                    }while( e1 != null );
                }
            }
            this.index2 = (this.index1|this.index2)^3;

        }

    });

    /**
     * A node of the dynamic bounding volume tree.
     * @author saharan
     */

    function DBVTNode(){

        // The first child node of this node.
        this.child1 = null;
        // The second child node of this node.
        this.child2 = null;
        //  The parent node of this tree.
        this.parent = null;
        // The proxy of this node. This has no value if this node is not leaf.
        this.proxy = null;
        // The maximum distance from leaf nodes.
        this.height = 0;
        // The AABB of this node.
        this.aabb = new AABB();

    }

    /**
     * A dynamic bounding volume tree for the broad-phase algorithm.
     *
     * @author saharan
     * @author lo-th
     */

    function DBVT(){

        // The root of the tree.
        this.root = null;
        this.freeNodes = [];
        this.freeNodes.length = 16384;
        this.numFreeNodes = 0;
        this.aabb = new AABB();

    }

    Object.assign( DBVT.prototype, {

        DBVT: true,

        moveLeaf: function( leaf ) {

            this.deleteLeaf( leaf );
            this.insertLeaf( leaf );

        },

        insertLeaf: function ( leaf ) {

            if(this.root == null){
                this.root = leaf;
                return;
            }
            var lb = leaf.aabb;
            var sibling = this.root;
            var oldArea;
            var newArea;
            while(sibling.proxy == null){ // descend the node to search the best pair
                var c1 = sibling.child1;
                var c2 = sibling.child2;
                var b = sibling.aabb;
                var c1b = c1.aabb;
                var c2b = c2.aabb;
                oldArea = b.surfaceArea();
                this.aabb.combine(lb,b);
                newArea = this.aabb.surfaceArea();
                var creatingCost = newArea*2;
                var incrementalCost = (newArea-oldArea)*2; // cost of creating a new pair with the node
                var discendingCost1 = incrementalCost;
                this.aabb.combine(lb,c1b);
                if(c1.proxy!=null){
                    // leaf cost = area(combined aabb)
                    discendingCost1+=this.aabb.surfaceArea();
                }else{
                    // node cost = area(combined aabb) - area(old aabb)
                    discendingCost1+=this.aabb.surfaceArea()-c1b.surfaceArea();
                }
                var discendingCost2=incrementalCost;
                this.aabb.combine(lb,c2b);
                if(c2.proxy!=null){
                    // leaf cost = area(combined aabb)
                    discendingCost2+=this.aabb.surfaceArea();
                }else{
                    // node cost = area(combined aabb) - area(old aabb)
                    discendingCost2+=this.aabb.surfaceArea()-c2b.surfaceArea();
                }
                if(discendingCost1<discendingCost2){
                    if(creatingCost<discendingCost1){
                        break;// stop descending
                    }else{
                        sibling = c1;// descend into first child
                    }
                }else{
                    if(creatingCost<discendingCost2){
                        break;// stop descending
                    }else{
                        sibling = c2;// descend into second child
                    }
                }
            }
            var oldParent = sibling.parent;
            var newParent;
            if(this.numFreeNodes>0){
                newParent = this.freeNodes[--this.numFreeNodes];
            }else{
                newParent = new DBVTNode();
            }

            newParent.parent = oldParent;
            newParent.child1 = leaf;
            newParent.child2 = sibling;
            newParent.aabb.combine(leaf.aabb,sibling.aabb);
            newParent.height = sibling.height+1;
            sibling.parent = newParent;
            leaf.parent = newParent;
            if(sibling == this.root){
                // replace root
                this.root = newParent;
            }else{
                // replace child
                if(oldParent.child1 == sibling){
                    oldParent.child1 = newParent;
                }else{
                    oldParent.child2 = newParent;
                }
            }
            // update whole tree
            do{
                newParent = this.balance(newParent);
                this.fix(newParent);
                newParent = newParent.parent;
            }while(newParent != null);
        },

        getBalance: function( node ) {

            if(node.proxy!=null)return 0;
            return node.child1.height-node.child2.height;

        },

        deleteLeaf: function( leaf ) {

            if(leaf == this.root){
                this.root = null;
                return;
            }
            var parent = leaf.parent;
            var sibling;
            if(parent.child1==leaf){
                sibling=parent.child2;
            }else{
                sibling=parent.child1;
            }
            if(parent==this.root){
                this.root=sibling;
                sibling.parent=null;
                return;
            }
            var grandParent = parent.parent;
            sibling.parent = grandParent;
            if(grandParent.child1 == parent ) {
                grandParent.child1 = sibling;
            }else{
                grandParent.child2 = sibling;
            }
            if(this.numFreeNodes<16384){
                this.freeNodes[this.numFreeNodes++] = parent;
            }
            do{
                grandParent = this.balance(grandParent);
                this.fix(grandParent);
                grandParent = grandParent.parent;
            }while( grandParent != null );

        },

        balance: function( node ) {

            var nh = node.height;
            if(nh<2){
                return node;
            }
            var p = node.parent;
            var l = node.child1;
            var r = node.child2;
            var lh = l.height;
            var rh = r.height;
            var balance = lh-rh;
            var t;// for bit operation

            //          [ N ]
            //         /     \
            //    [ L ]       [ R ]
            //     / \         / \
            // [L-L] [L-R] [R-L] [R-R]

            // Is the tree balanced?
            if(balance>1){
                var ll = l.child1;
                var lr = l.child2;
                var llh = ll.height;
                var lrh = lr.height;

                // Is L-L higher than L-R?
                if(llh>lrh){
                    // set N to L-R
                    l.child2 = node;
                    node.parent = l;

                    //          [ L ]
                    //         /     \
                    //    [L-L]       [ N ]
                    //     / \         / \
                    // [...] [...] [ L ] [ R ]

                    // set L-R
                    node.child1 = lr;
                    lr.parent = node;

                    //          [ L ]
                    //         /     \
                    //    [L-L]       [ N ]
                    //     / \         / \
                    // [...] [...] [L-R] [ R ]

                    // fix bounds and heights
                    node.aabb.combine( lr.aabb, r.aabb );
                    t = lrh-rh;
                    node.height=lrh-(t&t>>31)+1;
                    l.aabb.combine(ll.aabb,node.aabb);
                    t=llh-nh;
                    l.height=llh-(t&t>>31)+1;
                }else{
                    // set N to L-L
                    l.child1=node;
                    node.parent=l;

                    //          [ L ]
                    //         /     \
                    //    [ N ]       [L-R]
                    //     / \         / \
                    // [ L ] [ R ] [...] [...]

                    // set L-L
                    node.child1 = ll;
                    ll.parent = node;

                    //          [ L ]
                    //         /     \
                    //    [ N ]       [L-R]
                    //     / \         / \
                    // [L-L] [ R ] [...] [...]

                    // fix bounds and heights
                    node.aabb.combine(ll.aabb,r.aabb);
                    t = llh - rh;
                    node.height=llh-(t&t>>31)+1;

                    l.aabb.combine(node.aabb,lr.aabb);
                    t=nh-lrh;
                    l.height=nh-(t&t>>31)+1;
                }
                // set new parent of L
                if(p!=null){
                    if(p.child1==node){
                        p.child1=l;
                    }else{
                        p.child2=l;
                    }
                }else{
                    this.root=l;
                }
                l.parent=p;
                return l;
            }else if(balance<-1){
                var rl = r.child1;
                var rr = r.child2;
                var rlh = rl.height;
                var rrh = rr.height;

                // Is R-L higher than R-R?
                if( rlh > rrh ) {
                    // set N to R-R
                    r.child2 = node;
                    node.parent = r;

                    //          [ R ]
                    //         /     \
                    //    [R-L]       [ N ]
                    //     / \         / \
                    // [...] [...] [ L ] [ R ]

                    // set R-R
                    node.child2 = rr;
                    rr.parent = node;

                    //          [ R ]
                    //         /     \
                    //    [R-L]       [ N ]
                    //     / \         / \
                    // [...] [...] [ L ] [R-R]

                    // fix bounds and heights
                    node.aabb.combine(l.aabb,rr.aabb);
                    t = lh-rrh;
                    node.height = lh-(t&t>>31)+1;
                    r.aabb.combine(rl.aabb,node.aabb);
                    t = rlh-nh;
                    r.height = rlh-(t&t>>31)+1;
                }else{
                    // set N to R-L
                    r.child1 = node;
                    node.parent = r;
                    //          [ R ]
                    //         /     \
                    //    [ N ]       [R-R]
                    //     / \         / \
                    // [ L ] [ R ] [...] [...]

                    // set R-L
                    node.child2 = rl;
                    rl.parent = node;

                    //          [ R ]
                    //         /     \
                    //    [ N ]       [R-R]
                    //     / \         / \
                    // [ L ] [R-L] [...] [...]

                    // fix bounds and heights
                    node.aabb.combine(l.aabb,rl.aabb);
                    t=lh-rlh;
                    node.height=lh-(t&t>>31)+1;
                    r.aabb.combine(node.aabb,rr.aabb);
                    t=nh-rrh;
                    r.height=nh-(t&t>>31)+1;
                }
                // set new parent of R
                if(p!=null){
                    if(p.child1==node){
                        p.child1=r;
                    }else{
                        p.child2=r;
                    }
                }else{
                    this.root=r;
                }
                r.parent=p;
                return r;
            }
            return node;
        },

        fix: function ( node ) {

            var c1 = node.child1;
            var c2 = node.child2;
            node.aabb.combine( c1.aabb, c2.aabb );
            node.height = c1.height < c2.height ? c2.height+1 : c1.height+1;

        }

    });

    /**
     * A proxy for dynamic bounding volume tree broad-phase.
     * @author saharan
     */

    function DBVTProxy ( shape ) {

        Proxy.call( this, shape);
        // The leaf of the proxy.
        this.leaf = new DBVTNode();
        this.leaf.proxy = this;

    }

    DBVTProxy.prototype = Object.assign( Object.create( Proxy.prototype ), {

        constructor: DBVTProxy,

        update: function () {

        }

    });

    /**
     * A broad-phase algorithm using dynamic bounding volume tree.
     *
     * @author saharan
     * @author lo-th
     */

    function DBVTBroadPhase(){

        BroadPhase.call( this );

        this.types = BR_BOUNDING_VOLUME_TREE;

        this.tree = new DBVT();
        this.stack = [];
        this.leaves = [];
        this.numLeaves = 0;

    }

    DBVTBroadPhase.prototype = Object.assign( Object.create( BroadPhase.prototype ), {

        constructor: DBVTBroadPhase,

        createProxy: function ( shape ) {

            return new DBVTProxy( shape );

        },

        addProxy: function ( proxy ) {

            this.tree.insertLeaf( proxy.leaf );
            this.leaves.push( proxy.leaf );
            this.numLeaves++;

        },

        removeProxy: function ( proxy ) {

            this.tree.deleteLeaf( proxy.leaf );
            var n = this.leaves.indexOf( proxy.leaf );
            if ( n > -1 ) {
                this.leaves.splice(n,1);
                this.numLeaves--;
            }

        },

        collectPairs: function () {

            if ( this.numLeaves < 2 ) return;

            var leaf, margin = 0.1, i = this.numLeaves;

            while(i--){

                leaf = this.leaves[i];

                if ( leaf.proxy.aabb.intersectTestTwo( leaf.aabb ) ){

                    leaf.aabb.copy( leaf.proxy.aabb, margin );
                    this.tree.deleteLeaf( leaf );
                    this.tree.insertLeaf( leaf );
                    this.collide( leaf, this.tree.root );

                }
            }

        },

        collide: function ( node1, node2 ) {

            var stackCount = 2;
            var s1, s2, n1, n2, l1, l2;
            this.stack[0] = node1;
            this.stack[1] = node2;

            while( stackCount > 0 ){

                n1 = this.stack[--stackCount];
                n2 = this.stack[--stackCount];
                l1 = n1.proxy != null;
                l2 = n2.proxy != null;

                this.numPairChecks++;

                if( l1 && l2 ){
                    s1 = n1.proxy.shape;
                    s2 = n2.proxy.shape;
                    if ( s1 == s2 || s1.aabb.intersectTest( s2.aabb ) || !this.isAvailablePair( s1, s2 ) ) continue;

                    this.addPair(s1,s2);

                }else{

                    if ( n1.aabb.intersectTest( n2.aabb ) ) continue;

                    /*if(stackCount+4>=this.maxStack){// expand the stack
                     //this.maxStack<<=1;
                     this.maxStack*=2;
                     var newStack = [];// vector
                     newStack.length = this.maxStack;
                     for(var i=0;i<stackCount;i++){
                     newStack[i] = this.stack[i];
                     }
                     this.stack = newStack;
                     }*/

                    if( l2 || !l1 && (n1.aabb.surfaceArea() > n2.aabb.surfaceArea()) ){
                        this.stack[stackCount++] = n1.child1;
                        this.stack[stackCount++] = n2;
                        this.stack[stackCount++] = n1.child2;
                        this.stack[stackCount++] = n2;
                    }else{
                        this.stack[stackCount++] = n1;
                        this.stack[stackCount++] = n2.child1;
                        this.stack[stackCount++] = n1;
                        this.stack[stackCount++] = n2.child2;
                    }
                }
            }

        }

    });

    function CollisionDetector (){

        this.flip = false;

    }

    Object.assign( CollisionDetector.prototype, {

        CollisionDetector: true,

        detectCollision: function ( shape1, shape2, manifold ) {

            printError("CollisionDetector", "Inheritance error.");

        }

    } );

    /**
     * A collision detector which detects collisions between two boxes.
     * @author saharan
     */
    function BoxBoxCollisionDetector() {

        CollisionDetector.call( this );
        this.clipVertices1 = new Float32Array( 24 ); // 8 vertices x,y,z
        this.clipVertices2 = new Float32Array( 24 );
        this.used = new Float32Array( 8 );

        this.INF = 1/0;

    }

    BoxBoxCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: BoxBoxCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {
            // What you are doing
            // · I to prepare a separate axis of the fifteen
            //-Six in each of three normal vectors of the xyz direction of the box both
            // · Remaining nine 3x3 a vector perpendicular to the side of the box 2 and the side of the box 1
            // · Calculate the depth to the separation axis

            // Calculates the distance using the inner product and put the amount of embedment
            // · However a vertical separation axis and side to weight a little to avoid vibration
            // And end when there is a separate axis that is remote even one
            // · I look for separation axis with little to dent most
            // Men and if separation axis of the first six - end collision
            // Heng If it separate axis of nine other - side collision
            // Heng - case of a side collision
            // · Find points of two sides on which you made ​​the separation axis

            // Calculates the point of closest approach of a straight line consisting of separate axis points obtained, and the collision point
            //-Surface - the case of the plane crash
            //-Box A, box B and the other a box of better made ​​a separate axis
            // • The surface A and the plane that made the separation axis of the box A, and B to the surface the face of the box B close in the opposite direction to the most isolated axis

            // When viewed from the front surface A, and the cut part exceeding the area of the surface A is a surface B
            //-Plane B becomes the 3-8 triangle, I a candidate for the collision point the vertex of surface B
            // • If more than one candidate 5 exists, scraping up to four

            // For potential collision points of all, to examine the distance between the surface A
            // • If you were on the inside surface of A, and the collision point

            var b1;
            var b2;
            if(shape1.id<shape2.id){
                b1=(shape1);
                b2=(shape2);
            }else{
                b1=(shape2);
                b2=(shape1);
            }
            var V1 = b1.elements;
            var V2 = b2.elements;

            var D1 = b1.dimentions;
            var D2 = b2.dimentions;

            var p1=b1.position;
            var p2=b2.position;
            var p1x=p1.x;
            var p1y=p1.y;
            var p1z=p1.z;
            var p2x=p2.x;
            var p2y=p2.y;
            var p2z=p2.z;
            // diff
            var dx=p2x-p1x;
            var dy=p2y-p1y;
            var dz=p2z-p1z;
            // distance
            var w1=b1.halfWidth;
            var h1=b1.halfHeight;
            var d1=b1.halfDepth;
            var w2=b2.halfWidth;
            var h2=b2.halfHeight;
            var d2=b2.halfDepth;
            // direction

            // ----------------------------
            // 15 separating axes
            // 1~6: face
            // 7~f: edge
            // http://marupeke296.com/COL_3D_No13_OBBvsOBB.html
            // ----------------------------

            var a1x=D1[0];
            var a1y=D1[1];
            var a1z=D1[2];
            var a2x=D1[3];
            var a2y=D1[4];
            var a2z=D1[5];
            var a3x=D1[6];
            var a3y=D1[7];
            var a3z=D1[8];
            var d1x=D1[9];
            var d1y=D1[10];
            var d1z=D1[11];
            var d2x=D1[12];
            var d2y=D1[13];
            var d2z=D1[14];
            var d3x=D1[15];
            var d3y=D1[16];
            var d3z=D1[17];

            var a4x=D2[0];
            var a4y=D2[1];
            var a4z=D2[2];
            var a5x=D2[3];
            var a5y=D2[4];
            var a5z=D2[5];
            var a6x=D2[6];
            var a6y=D2[7];
            var a6z=D2[8];
            var d4x=D2[9];
            var d4y=D2[10];
            var d4z=D2[11];
            var d5x=D2[12];
            var d5y=D2[13];
            var d5z=D2[14];
            var d6x=D2[15];
            var d6y=D2[16];
            var d6z=D2[17];

            var a7x=a1y*a4z-a1z*a4y;
            var a7y=a1z*a4x-a1x*a4z;
            var a7z=a1x*a4y-a1y*a4x;
            var a8x=a1y*a5z-a1z*a5y;
            var a8y=a1z*a5x-a1x*a5z;
            var a8z=a1x*a5y-a1y*a5x;
            var a9x=a1y*a6z-a1z*a6y;
            var a9y=a1z*a6x-a1x*a6z;
            var a9z=a1x*a6y-a1y*a6x;
            var aax=a2y*a4z-a2z*a4y;
            var aay=a2z*a4x-a2x*a4z;
            var aaz=a2x*a4y-a2y*a4x;
            var abx=a2y*a5z-a2z*a5y;
            var aby=a2z*a5x-a2x*a5z;
            var abz=a2x*a5y-a2y*a5x;
            var acx=a2y*a6z-a2z*a6y;
            var acy=a2z*a6x-a2x*a6z;
            var acz=a2x*a6y-a2y*a6x;
            var adx=a3y*a4z-a3z*a4y;
            var ady=a3z*a4x-a3x*a4z;
            var adz=a3x*a4y-a3y*a4x;
            var aex=a3y*a5z-a3z*a5y;
            var aey=a3z*a5x-a3x*a5z;
            var aez=a3x*a5y-a3y*a5x;
            var afx=a3y*a6z-a3z*a6y;
            var afy=a3z*a6x-a3x*a6z;
            var afz=a3x*a6y-a3y*a6x;
            // right or left flags
            var right1;
            var right2;
            var right3;
            var right4;
            var right5;
            var right6;
            var right7;
            var right8;
            var right9;
            var righta;
            var rightb;
            var rightc;
            var rightd;
            var righte;
            var rightf;
            // overlapping distances
            var overlap1;
            var overlap2;
            var overlap3;
            var overlap4;
            var overlap5;
            var overlap6;
            var overlap7;
            var overlap8;
            var overlap9;
            var overlapa;
            var overlapb;
            var overlapc;
            var overlapd;
            var overlape;
            var overlapf;
            // invalid flags
            var invalid7=false;
            var invalid8=false;
            var invalid9=false;
            var invalida=false;
            var invalidb=false;
            var invalidc=false;
            var invalidd=false;
            var invalide=false;
            var invalidf=false;
            // temporary variables
            var len;
            var len1;
            var len2;
            var dot1;
            var dot2;
            var dot3;
            // try axis 1
            len=a1x*dx+a1y*dy+a1z*dz;
            right1=len>0;
            if(!right1)len=-len;
            len1=w1;
            dot1=a1x*a4x+a1y*a4y+a1z*a4z;
            dot2=a1x*a5x+a1y*a5y+a1z*a5z;
            dot3=a1x*a6x+a1y*a6y+a1z*a6z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len2=dot1*w2+dot2*h2+dot3*d2;
            overlap1=len-len1-len2;
            if(overlap1>0)return;
            // try axis 2
            len=a2x*dx+a2y*dy+a2z*dz;
            right2=len>0;
            if(!right2)len=-len;
            len1=h1;
            dot1=a2x*a4x+a2y*a4y+a2z*a4z;
            dot2=a2x*a5x+a2y*a5y+a2z*a5z;
            dot3=a2x*a6x+a2y*a6y+a2z*a6z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len2=dot1*w2+dot2*h2+dot3*d2;
            overlap2=len-len1-len2;
            if(overlap2>0)return;
            // try axis 3
            len=a3x*dx+a3y*dy+a3z*dz;
            right3=len>0;
            if(!right3)len=-len;
            len1=d1;
            dot1=a3x*a4x+a3y*a4y+a3z*a4z;
            dot2=a3x*a5x+a3y*a5y+a3z*a5z;
            dot3=a3x*a6x+a3y*a6y+a3z*a6z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len2=dot1*w2+dot2*h2+dot3*d2;
            overlap3=len-len1-len2;
            if(overlap3>0)return;
            // try axis 4
            len=a4x*dx+a4y*dy+a4z*dz;
            right4=len>0;
            if(!right4)len=-len;
            dot1=a4x*a1x+a4y*a1y+a4z*a1z;
            dot2=a4x*a2x+a4y*a2y+a4z*a2z;
            dot3=a4x*a3x+a4y*a3y+a4z*a3z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len1=dot1*w1+dot2*h1+dot3*d1;
            len2=w2;
            overlap4=(len-len1-len2)*1.0;
            if(overlap4>0)return;
            // try axis 5
            len=a5x*dx+a5y*dy+a5z*dz;
            right5=len>0;
            if(!right5)len=-len;
            dot1=a5x*a1x+a5y*a1y+a5z*a1z;
            dot2=a5x*a2x+a5y*a2y+a5z*a2z;
            dot3=a5x*a3x+a5y*a3y+a5z*a3z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len1=dot1*w1+dot2*h1+dot3*d1;
            len2=h2;
            overlap5=(len-len1-len2)*1.0;
            if(overlap5>0)return;
            // try axis 6
            len=a6x*dx+a6y*dy+a6z*dz;
            right6=len>0;
            if(!right6)len=-len;
            dot1=a6x*a1x+a6y*a1y+a6z*a1z;
            dot2=a6x*a2x+a6y*a2y+a6z*a2z;
            dot3=a6x*a3x+a6y*a3y+a6z*a3z;
            if(dot1<0)dot1=-dot1;
            if(dot2<0)dot2=-dot2;
            if(dot3<0)dot3=-dot3;
            len1=dot1*w1+dot2*h1+dot3*d1;
            len2=d2;
            overlap6=(len-len1-len2)*1.0;
            if(overlap6>0)return;
            // try axis 7
            len=a7x*a7x+a7y*a7y+a7z*a7z;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                a7x*=len;
                a7y*=len;
                a7z*=len;
                len=a7x*dx+a7y*dy+a7z*dz;
                right7=len>0;
                if(!right7)len=-len;
                dot1=a7x*a2x+a7y*a2y+a7z*a2z;
                dot2=a7x*a3x+a7y*a3y+a7z*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*h1+dot2*d1;
                dot1=a7x*a5x+a7y*a5y+a7z*a5z;
                dot2=a7x*a6x+a7y*a6y+a7z*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*h2+dot2*d2;
                overlap7=len-len1-len2;
                if(overlap7>0)return;
            }else{
                right7=false;
                overlap7=0;
                invalid7=true;
            }
            // try axis 8
            len=a8x*a8x+a8y*a8y+a8z*a8z;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                a8x*=len;
                a8y*=len;
                a8z*=len;
                len=a8x*dx+a8y*dy+a8z*dz;
                right8=len>0;
                if(!right8)len=-len;
                dot1=a8x*a2x+a8y*a2y+a8z*a2z;
                dot2=a8x*a3x+a8y*a3y+a8z*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*h1+dot2*d1;
                dot1=a8x*a4x+a8y*a4y+a8z*a4z;
                dot2=a8x*a6x+a8y*a6y+a8z*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*d2;
                overlap8=len-len1-len2;
                if(overlap8>0)return;
            }else{
                right8=false;
                overlap8=0;
                invalid8=true;
            }
            // try axis 9
            len=a9x*a9x+a9y*a9y+a9z*a9z;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                a9x*=len;
                a9y*=len;
                a9z*=len;
                len=a9x*dx+a9y*dy+a9z*dz;
                right9=len>0;
                if(!right9)len=-len;
                dot1=a9x*a2x+a9y*a2y+a9z*a2z;
                dot2=a9x*a3x+a9y*a3y+a9z*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*h1+dot2*d1;
                dot1=a9x*a4x+a9y*a4y+a9z*a4z;
                dot2=a9x*a5x+a9y*a5y+a9z*a5z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*h2;
                overlap9=len-len1-len2;
                if(overlap9>0)return;
            }else{
                right9=false;
                overlap9=0;
                invalid9=true;
            }
            // try axis 10
            len=aax*aax+aay*aay+aaz*aaz;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                aax*=len;
                aay*=len;
                aaz*=len;
                len=aax*dx+aay*dy+aaz*dz;
                righta=len>0;
                if(!righta)len=-len;
                dot1=aax*a1x+aay*a1y+aaz*a1z;
                dot2=aax*a3x+aay*a3y+aaz*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*d1;
                dot1=aax*a5x+aay*a5y+aaz*a5z;
                dot2=aax*a6x+aay*a6y+aaz*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*h2+dot2*d2;
                overlapa=len-len1-len2;
                if(overlapa>0)return;
            }else{
                righta=false;
                overlapa=0;
                invalida=true;
            }
            // try axis 11
            len=abx*abx+aby*aby+abz*abz;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                abx*=len;
                aby*=len;
                abz*=len;
                len=abx*dx+aby*dy+abz*dz;
                rightb=len>0;
                if(!rightb)len=-len;
                dot1=abx*a1x+aby*a1y+abz*a1z;
                dot2=abx*a3x+aby*a3y+abz*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*d1;
                dot1=abx*a4x+aby*a4y+abz*a4z;
                dot2=abx*a6x+aby*a6y+abz*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*d2;
                overlapb=len-len1-len2;
                if(overlapb>0)return;
            }else{
                rightb=false;
                overlapb=0;
                invalidb=true;
            }
            // try axis 12
            len=acx*acx+acy*acy+acz*acz;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                acx*=len;
                acy*=len;
                acz*=len;
                len=acx*dx+acy*dy+acz*dz;
                rightc=len>0;
                if(!rightc)len=-len;
                dot1=acx*a1x+acy*a1y+acz*a1z;
                dot2=acx*a3x+acy*a3y+acz*a3z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*d1;
                dot1=acx*a4x+acy*a4y+acz*a4z;
                dot2=acx*a5x+acy*a5y+acz*a5z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*h2;
                overlapc=len-len1-len2;
                if(overlapc>0)return;
            }else{
                rightc=false;
                overlapc=0;
                invalidc=true;
            }
            // try axis 13
            len=adx*adx+ady*ady+adz*adz;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                adx*=len;
                ady*=len;
                adz*=len;
                len=adx*dx+ady*dy+adz*dz;
                rightd=len>0;
                if(!rightd)len=-len;
                dot1=adx*a1x+ady*a1y+adz*a1z;
                dot2=adx*a2x+ady*a2y+adz*a2z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*h1;
                dot1=adx*a5x+ady*a5y+adz*a5z;
                dot2=adx*a6x+ady*a6y+adz*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*h2+dot2*d2;
                overlapd=len-len1-len2;
                if(overlapd>0)return;
            }else{
                rightd=false;
                overlapd=0;
                invalidd=true;
            }
            // try axis 14
            len=aex*aex+aey*aey+aez*aez;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                aex*=len;
                aey*=len;
                aez*=len;
                len=aex*dx+aey*dy+aez*dz;
                righte=len>0;
                if(!righte)len=-len;
                dot1=aex*a1x+aey*a1y+aez*a1z;
                dot2=aex*a2x+aey*a2y+aez*a2z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*h1;
                dot1=aex*a4x+aey*a4y+aez*a4z;
                dot2=aex*a6x+aey*a6y+aez*a6z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*d2;
                overlape=len-len1-len2;
                if(overlape>0)return;
            }else{
                righte=false;
                overlape=0;
                invalide=true;
            }
            // try axis 15
            len=afx*afx+afy*afy+afz*afz;
            if(len>1e-5){
                len=1/_Math.sqrt(len);
                afx*=len;
                afy*=len;
                afz*=len;
                len=afx*dx+afy*dy+afz*dz;
                rightf=len>0;
                if(!rightf)len=-len;
                dot1=afx*a1x+afy*a1y+afz*a1z;
                dot2=afx*a2x+afy*a2y+afz*a2z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len1=dot1*w1+dot2*h1;
                dot1=afx*a4x+afy*a4y+afz*a4z;
                dot2=afx*a5x+afy*a5y+afz*a5z;
                if(dot1<0)dot1=-dot1;
                if(dot2<0)dot2=-dot2;
                len2=dot1*w2+dot2*h2;
                overlapf=len-len1-len2;
                if(overlapf>0)return;
            }else{
                rightf=false;
                overlapf=0;
                invalidf=true;
            }
            // boxes are overlapping
            var depth=overlap1;
            var depth2=overlap1;
            var minIndex=0;
            var right=right1;
            if(overlap2>depth2){
                depth=overlap2;
                depth2=overlap2;
                minIndex=1;
                right=right2;
            }
            if(overlap3>depth2){
                depth=overlap3;
                depth2=overlap3;
                minIndex=2;
                right=right3;
            }
            if(overlap4>depth2){
                depth=overlap4;
                depth2=overlap4;
                minIndex=3;
                right=right4;
            }
            if(overlap5>depth2){
                depth=overlap5;
                depth2=overlap5;
                minIndex=4;
                right=right5;
            }
            if(overlap6>depth2){
                depth=overlap6;
                depth2=overlap6;
                minIndex=5;
                right=right6;
            }
            if(overlap7-0.01>depth2&&!invalid7){
                depth=overlap7;
                depth2=overlap7-0.01;
                minIndex=6;
                right=right7;
            }
            if(overlap8-0.01>depth2&&!invalid8){
                depth=overlap8;
                depth2=overlap8-0.01;
                minIndex=7;
                right=right8;
            }
            if(overlap9-0.01>depth2&&!invalid9){
                depth=overlap9;
                depth2=overlap9-0.01;
                minIndex=8;
                right=right9;
            }
            if(overlapa-0.01>depth2&&!invalida){
                depth=overlapa;
                depth2=overlapa-0.01;
                minIndex=9;
                right=righta;
            }
            if(overlapb-0.01>depth2&&!invalidb){
                depth=overlapb;
                depth2=overlapb-0.01;
                minIndex=10;
                right=rightb;
            }
            if(overlapc-0.01>depth2&&!invalidc){
                depth=overlapc;
                depth2=overlapc-0.01;
                minIndex=11;
                right=rightc;
            }
            if(overlapd-0.01>depth2&&!invalidd){
                depth=overlapd;
                depth2=overlapd-0.01;
                minIndex=12;
                right=rightd;
            }
            if(overlape-0.01>depth2&&!invalide){
                depth=overlape;
                depth2=overlape-0.01;
                minIndex=13;
                right=righte;
            }
            if(overlapf-0.01>depth2&&!invalidf){
                depth=overlapf;
                minIndex=14;
                right=rightf;
            }
            // normal
            var nx=0;
            var ny=0;
            var nz=0;
            // edge line or face side normal
            var n1x=0;
            var n1y=0;
            var n1z=0;
            var n2x=0;
            var n2y=0;
            var n2z=0;
            // center of current face
            var cx=0;
            var cy=0;
            var cz=0;
            // face side
            var s1x=0;
            var s1y=0;
            var s1z=0;
            var s2x=0;
            var s2y=0;
            var s2z=0;
            // swap b1 b2
            var swap=false;

            //_______________________________________

            if(minIndex==0){// b1.x * b2
                if(right){
                    cx=p1x+d1x; cy=p1y+d1y;  cz=p1z+d1z;
                    nx=a1x; ny=a1y; nz=a1z;
                }else{
                    cx=p1x-d1x; cy=p1y-d1y; cz=p1z-d1z;
                    nx=-a1x; ny=-a1y; nz=-a1z;
                }
                s1x=d2x; s1y=d2y; s1z=d2z;
                n1x=-a2x; n1y=-a2y; n1z=-a2z;
                s2x=d3x; s2y=d3y; s2z=d3z;
                n2x=-a3x; n2y=-a3y; n2z=-a3z;
            }
            else if(minIndex==1){// b1.y * b2
                if(right){
                    cx=p1x+d2x; cy=p1y+d2y; cz=p1z+d2z;
                    nx=a2x; ny=a2y; nz=a2z;
                }else{
                    cx=p1x-d2x; cy=p1y-d2y; cz=p1z-d2z;
                    nx=-a2x; ny=-a2y; nz=-a2z;
                }
                s1x=d1x; s1y=d1y; s1z=d1z;
                n1x=-a1x; n1y=-a1y; n1z=-a1z;
                s2x=d3x; s2y=d3y; s2z=d3z;
                n2x=-a3x; n2y=-a3y; n2z=-a3z;
            }
            else if(minIndex==2){// b1.z * b2
                if(right){
                    cx=p1x+d3x; cy=p1y+d3y; cz=p1z+d3z;
                    nx=a3x; ny=a3y; nz=a3z;
                }else{
                    cx=p1x-d3x; cy=p1y-d3y; cz=p1z-d3z;
                    nx=-a3x; ny=-a3y; nz=-a3z;
                }
                s1x=d1x; s1y=d1y; s1z=d1z;
                n1x=-a1x; n1y=-a1y; n1z=-a1z;
                s2x=d2x; s2y=d2y; s2z=d2z;
                n2x=-a2x; n2y=-a2y; n2z=-a2z;
            }
            else if(minIndex==3){// b2.x * b1
                swap=true;
                if(!right){
                    cx=p2x+d4x; cy=p2y+d4y; cz=p2z+d4z;
                    nx=a4x; ny=a4y; nz=a4z;
                }else{
                    cx=p2x-d4x; cy=p2y-d4y; cz=p2z-d4z;
                    nx=-a4x; ny=-a4y; nz=-a4z;
                }
                s1x=d5x; s1y=d5y; s1z=d5z;
                n1x=-a5x; n1y=-a5y; n1z=-a5z;
                s2x=d6x; s2y=d6y; s2z=d6z;
                n2x=-a6x; n2y=-a6y; n2z=-a6z;
            }
            else if(minIndex==4){// b2.y * b1
                swap=true;
                if(!right){
                    cx=p2x+d5x; cy=p2y+d5y; cz=p2z+d5z;
                    nx=a5x; ny=a5y; nz=a5z;
                }else{
                    cx=p2x-d5x; cy=p2y-d5y; cz=p2z-d5z;
                    nx=-a5x; ny=-a5y; nz=-a5z;
                }
                s1x=d4x; s1y=d4y; s1z=d4z;
                n1x=-a4x; n1y=-a4y; n1z=-a4z;
                s2x=d6x; s2y=d6y; s2z=d6z;
                n2x=-a6x; n2y=-a6y; n2z=-a6z;
            }
            else if(minIndex==5){// b2.z * b1
                swap=true;
                if(!right){
                    cx=p2x+d6x; cy=p2y+d6y; cz=p2z+d6z;
                    nx=a6x; ny=a6y; nz=a6z;
                }else{
                    cx=p2x-d6x; cy=p2y-d6y; cz=p2z-d6z;
                    nx=-a6x; ny=-a6y; nz=-a6z;
                }
                s1x=d4x; s1y=d4y; s1z=d4z;
                n1x=-a4x; n1y=-a4y; n1z=-a4z;
                s2x=d5x; s2y=d5y; s2z=d5z;
                n2x=-a5x; n2y=-a5y; n2z=-a5z;
            }
            else if(minIndex==6){// b1.x * b2.x
                nx=a7x; ny=a7y; nz=a7z;
                n1x=a1x; n1y=a1y; n1z=a1z;
                n2x=a4x; n2y=a4y; n2z=a4z;
            }
            else if(minIndex==7){// b1.x * b2.y
                nx=a8x; ny=a8y; nz=a8z;
                n1x=a1x; n1y=a1y; n1z=a1z;
                n2x=a5x; n2y=a5y; n2z=a5z;
            }
            else if(minIndex==8){// b1.x * b2.z
                nx=a9x; ny=a9y; nz=a9z;
                n1x=a1x; n1y=a1y; n1z=a1z;
                n2x=a6x; n2y=a6y; n2z=a6z;
            }
            else if(minIndex==9){// b1.y * b2.x
                nx=aax; ny=aay; nz=aaz;
                n1x=a2x; n1y=a2y; n1z=a2z;
                n2x=a4x; n2y=a4y; n2z=a4z;
            }
            else if(minIndex==10){// b1.y * b2.y
                nx=abx; ny=aby; nz=abz;
                n1x=a2x; n1y=a2y; n1z=a2z;
                n2x=a5x; n2y=a5y; n2z=a5z;
            }
            else if(minIndex==11){// b1.y * b2.z
                nx=acx; ny=acy; nz=acz;
                n1x=a2x; n1y=a2y; n1z=a2z;
                n2x=a6x; n2y=a6y; n2z=a6z;
            }
            else if(minIndex==12){// b1.z * b2.x
                nx=adx;  ny=ady; nz=adz;
                n1x=a3x; n1y=a3y; n1z=a3z;
                n2x=a4x; n2y=a4y; n2z=a4z;
            }
            else if(minIndex==13){// b1.z * b2.y
                nx=aex; ny=aey; nz=aez;
                n1x=a3x; n1y=a3y; n1z=a3z;
                n2x=a5x; n2y=a5y; n2z=a5z;
            }
            else if(minIndex==14){// b1.z * b2.z
                nx=afx; ny=afy; nz=afz;
                n1x=a3x; n1y=a3y; n1z=a3z;
                n2x=a6x; n2y=a6y; n2z=a6z;
            }

            //__________________________________________

            //var v;
            if(minIndex>5){
                if(!right){
                    nx=-nx; ny=-ny; nz=-nz;
                }
                var distance;
                var maxDistance;
                var vx;
                var vy;
                var vz;
                var v1x;
                var v1y;
                var v1z;
                var v2x;
                var v2y;
                var v2z;
                //vertex1;
                v1x=V1[0]; v1y=V1[1]; v1z=V1[2];
                maxDistance=nx*v1x+ny*v1y+nz*v1z;
                //vertex2;
                vx=V1[3]; vy=V1[4]; vz=V1[5];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex3;
                vx=V1[6]; vy=V1[7]; vz=V1[8];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex4;
                vx=V1[9]; vy=V1[10]; vz=V1[11];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex5;
                vx=V1[12]; vy=V1[13]; vz=V1[14];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex6;
                vx=V1[15]; vy=V1[16]; vz=V1[17];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex7;
                vx=V1[18]; vy=V1[19]; vz=V1[20];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex8;
                vx=V1[21]; vy=V1[22]; vz=V1[23];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance>maxDistance){
                    maxDistance=distance;
                    v1x=vx; v1y=vy; v1z=vz;
                }
                //vertex1;
                v2x=V2[0]; v2y=V2[1]; v2z=V2[2];
                maxDistance=nx*v2x+ny*v2y+nz*v2z;
                //vertex2;
                vx=V2[3]; vy=V2[4]; vz=V2[5];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex3;
                vx=V2[6]; vy=V2[7]; vz=V2[8];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex4;
                vx=V2[9]; vy=V2[10]; vz=V2[11];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex5;
                vx=V2[12]; vy=V2[13]; vz=V2[14];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex6;
                vx=V2[15]; vy=V2[16]; vz=V2[17];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex7;
                vx=V2[18]; vy=V2[19]; vz=V2[20];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                //vertex8;
                vx=V2[21]; vy=V2[22]; vz=V2[23];
                distance=nx*vx+ny*vy+nz*vz;
                if(distance<maxDistance){
                    maxDistance=distance;
                    v2x=vx; v2y=vy; v2z=vz;
                }
                vx=v2x-v1x; vy=v2y-v1y; vz=v2z-v1z;
                dot1=n1x*n2x+n1y*n2y+n1z*n2z;
                var t=(vx*(n1x-n2x*dot1)+vy*(n1y-n2y*dot1)+vz*(n1z-n2z*dot1))/(1-dot1*dot1);
                manifold.addPoint(v1x+n1x*t+nx*depth*0.5,v1y+n1y*t+ny*depth*0.5,v1z+n1z*t+nz*depth*0.5,nx,ny,nz,depth,false);
                return;
            }
            // now detect face-face collision...
            // target quad
            var q1x;
            var q1y;
            var q1z;
            var q2x;
            var q2y;
            var q2z;
            var q3x;
            var q3y;
            var q3z;
            var q4x;
            var q4y;
            var q4z;
            // search support face and vertex
            var minDot=1;
            var dot=0;
            var minDotIndex=0;
            if(swap){
                dot=a1x*nx+a1y*ny+a1z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=0;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=1;
                }
                dot=a2x*nx+a2y*ny+a2z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=2;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=3;
                }
                dot=a3x*nx+a3y*ny+a3z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=4;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=5;
                }

                if(minDotIndex==0){// x+ face
                    q1x=V1[0]; q1y=V1[1]; q1z=V1[2];//vertex1
                    q2x=V1[6]; q2y=V1[7]; q2z=V1[8];//vertex3
                    q3x=V1[9]; q3y=V1[10]; q3z=V1[11];//vertex4
                    q4x=V1[3]; q4y=V1[4]; q4z=V1[5];//vertex2
                }
                else if(minDotIndex==1){// x- face
                    q1x=V1[15]; q1y=V1[16]; q1z=V1[17];//vertex6
                    q2x=V1[21]; q2y=V1[22]; q2z=V1[23];//vertex8
                    q3x=V1[18]; q3y=V1[19]; q3z=V1[20];//vertex7
                    q4x=V1[12]; q4y=V1[13]; q4z=V1[14];//vertex5
                }
                else if(minDotIndex==2){// y+ face
                    q1x=V1[12]; q1y=V1[13]; q1z=V1[14];//vertex5
                    q2x=V1[0]; q2y=V1[1]; q2z=V1[2];//vertex1
                    q3x=V1[3]; q3y=V1[4]; q3z=V1[5];//vertex2
                    q4x=V1[15]; q4y=V1[16]; q4z=V1[17];//vertex6
                }
                else if(minDotIndex==3){// y- face
                    q1x=V1[21]; q1y=V1[22]; q1z=V1[23];//vertex8
                    q2x=V1[9]; q2y=V1[10]; q2z=V1[11];//vertex4
                    q3x=V1[6]; q3y=V1[7]; q3z=V1[8];//vertex3
                    q4x=V1[18]; q4y=V1[19]; q4z=V1[20];//vertex7
                }
                else if(minDotIndex==4){// z+ face
                    q1x=V1[12]; q1y=V1[13]; q1z=V1[14];//vertex5
                    q2x=V1[18]; q2y=V1[19]; q2z=V1[20];//vertex7
                    q3x=V1[6]; q3y=V1[7]; q3z=V1[8];//vertex3
                    q4x=V1[0]; q4y=V1[1]; q4z=V1[2];//vertex1
                }
                else if(minDotIndex==5){// z- face
                    q1x=V1[3]; q1y=V1[4]; q1z=V1[5];//vertex2
                    //2x=V1[6]; q2y=V1[7]; q2z=V1[8];//vertex4 !!!
                    q2x=V2[9]; q2y=V2[10]; q2z=V2[11];//vertex4
                    q3x=V1[21]; q3y=V1[22]; q3z=V1[23];//vertex8
                    q4x=V1[15]; q4y=V1[16]; q4z=V1[17];//vertex6
                }

            }else{
                dot=a4x*nx+a4y*ny+a4z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=0;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=1;
                }
                dot=a5x*nx+a5y*ny+a5z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=2;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=3;
                }
                dot=a6x*nx+a6y*ny+a6z*nz;
                if(dot<minDot){
                    minDot=dot;
                    minDotIndex=4;
                }
                if(-dot<minDot){
                    minDot=-dot;
                    minDotIndex=5;
                }

                //______________________________________________________

                if(minDotIndex==0){// x+ face
                    q1x=V2[0]; q1y=V2[1]; q1z=V2[2];//vertex1
                    q2x=V2[6]; q2y=V2[7]; q2z=V2[8];//vertex3
                    q3x=V2[9]; q3y=V2[10]; q3z=V2[11];//vertex4
                    q4x=V2[3]; q4y=V2[4]; q4z=V2[5];//vertex2
                }
                else if(minDotIndex==1){// x- face
                    q1x=V2[15]; q1y=V2[16]; q1z=V2[17];//vertex6
                    q2x=V2[21]; q2y=V2[22]; q2z=V2[23]; //vertex8
                    q3x=V2[18]; q3y=V2[19]; q3z=V2[20];//vertex7
                    q4x=V2[12]; q4y=V2[13]; q4z=V2[14];//vertex5
                }
                else if(minDotIndex==2){// y+ face
                    q1x=V2[12]; q1y=V2[13]; q1z=V2[14];//vertex5
                    q2x=V2[0]; q2y=V2[1]; q2z=V2[2];//vertex1
                    q3x=V2[3]; q3y=V2[4]; q3z=V2[5];//vertex2
                    q4x=V2[15]; q4y=V2[16]; q4z=V2[17];//vertex6
                }
                else if(minDotIndex==3){// y- face
                    q1x=V2[21]; q1y=V2[22]; q1z=V2[23];//vertex8
                    q2x=V2[9]; q2y=V2[10]; q2z=V2[11];//vertex4
                    q3x=V2[6]; q3y=V2[7]; q3z=V2[8];//vertex3
                    q4x=V2[18]; q4y=V2[19]; q4z=V2[20];//vertex7
                }
                else if(minDotIndex==4){// z+ face
                    q1x=V2[12]; q1y=V2[13]; q1z=V2[14];//vertex5
                    q2x=V2[18]; q2y=V2[19]; q2z=V2[20];//vertex7
                    q3x=V2[6]; q3y=V2[7]; q3z=V2[8];//vertex3
                    q4x=V2[0]; q4y=V2[1]; q4z=V2[2];//vertex1
                }
                else if(minDotIndex==5){// z- face
                    q1x=V2[3]; q1y=V2[4]; q1z=V2[5];//vertex2
                    q2x=V2[9]; q2y=V2[10]; q2z=V2[11];//vertex4
                    q3x=V2[21]; q3y=V2[22]; q3z=V2[23];//vertex8
                    q4x=V2[15]; q4y=V2[16]; q4z=V2[17];//vertex6
                }

            }
            // clip vertices
            var numClipVertices;
            var numAddedClipVertices;
            var index;
            var x1;
            var y1;
            var z1;
            var x2;
            var y2;
            var z2;
            this.clipVertices1[0]=q1x;
            this.clipVertices1[1]=q1y;
            this.clipVertices1[2]=q1z;
            this.clipVertices1[3]=q2x;
            this.clipVertices1[4]=q2y;
            this.clipVertices1[5]=q2z;
            this.clipVertices1[6]=q3x;
            this.clipVertices1[7]=q3y;
            this.clipVertices1[8]=q3z;
            this.clipVertices1[9]=q4x;
            this.clipVertices1[10]=q4y;
            this.clipVertices1[11]=q4z;
            numAddedClipVertices=0;
            x1=this.clipVertices1[9];
            y1=this.clipVertices1[10];
            z1=this.clipVertices1[11];
            dot1=(x1-cx-s1x)*n1x+(y1-cy-s1y)*n1y+(z1-cz-s1z)*n1z;

            //var i = 4;
            //while(i--){
            for(var i=0;i<4;i++){
                index=i*3;
                x2=this.clipVertices1[index];
                y2=this.clipVertices1[index+1];
                z2=this.clipVertices1[index+2];
                dot2=(x2-cx-s1x)*n1x+(y2-cy-s1y)*n1y+(z2-cz-s1z)*n1z;
                if(dot1>0){
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices2[index]=x2;
                        this.clipVertices2[index+1]=y2;
                        this.clipVertices2[index+2]=z2;
                    }else{
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices2[index]=x1+(x2-x1)*t;
                        this.clipVertices2[index+1]=y1+(y2-y1)*t;
                        this.clipVertices2[index+2]=z1+(z2-z1)*t;
                    }
                }else{
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices2[index]=x1+(x2-x1)*t;
                        this.clipVertices2[index+1]=y1+(y2-y1)*t;
                        this.clipVertices2[index+2]=z1+(z2-z1)*t;
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices2[index]=x2;
                        this.clipVertices2[index+1]=y2;
                        this.clipVertices2[index+2]=z2;
                    }
                }
                x1=x2;
                y1=y2;
                z1=z2;
                dot1=dot2;
            }

            numClipVertices=numAddedClipVertices;
            if(numClipVertices==0)return;
            numAddedClipVertices=0;
            index=(numClipVertices-1)*3;
            x1=this.clipVertices2[index];
            y1=this.clipVertices2[index+1];
            z1=this.clipVertices2[index+2];
            dot1=(x1-cx-s2x)*n2x+(y1-cy-s2y)*n2y+(z1-cz-s2z)*n2z;

            //i = numClipVertices;
            //while(i--){
            for(i=0;i<numClipVertices;i++){
                index=i*3;
                x2=this.clipVertices2[index];
                y2=this.clipVertices2[index+1];
                z2=this.clipVertices2[index+2];
                dot2=(x2-cx-s2x)*n2x+(y2-cy-s2y)*n2y+(z2-cz-s2z)*n2z;
                if(dot1>0){
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices1[index]=x2;
                        this.clipVertices1[index+1]=y2;
                        this.clipVertices1[index+2]=z2;
                    }else{
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices1[index]=x1+(x2-x1)*t;
                        this.clipVertices1[index+1]=y1+(y2-y1)*t;
                        this.clipVertices1[index+2]=z1+(z2-z1)*t;
                    }
                }else{
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices1[index]=x1+(x2-x1)*t;
                        this.clipVertices1[index+1]=y1+(y2-y1)*t;
                        this.clipVertices1[index+2]=z1+(z2-z1)*t;
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices1[index]=x2;
                        this.clipVertices1[index+1]=y2;
                        this.clipVertices1[index+2]=z2;
                    }
                }
                x1=x2;
                y1=y2;
                z1=z2;
                dot1=dot2;
            }

            numClipVertices=numAddedClipVertices;
            if(numClipVertices==0)return;
            numAddedClipVertices=0;
            index=(numClipVertices-1)*3;
            x1=this.clipVertices1[index];
            y1=this.clipVertices1[index+1];
            z1=this.clipVertices1[index+2];
            dot1=(x1-cx+s1x)*-n1x+(y1-cy+s1y)*-n1y+(z1-cz+s1z)*-n1z;

            //i = numClipVertices;
            //while(i--){
            for(i=0;i<numClipVertices;i++){
                index=i*3;
                x2=this.clipVertices1[index];
                y2=this.clipVertices1[index+1];
                z2=this.clipVertices1[index+2];
                dot2=(x2-cx+s1x)*-n1x+(y2-cy+s1y)*-n1y+(z2-cz+s1z)*-n1z;
                if(dot1>0){
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices2[index]=x2;
                        this.clipVertices2[index+1]=y2;
                        this.clipVertices2[index+2]=z2;
                    }else{
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices2[index]=x1+(x2-x1)*t;
                        this.clipVertices2[index+1]=y1+(y2-y1)*t;
                        this.clipVertices2[index+2]=z1+(z2-z1)*t;
                    }
                }else{
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices2[index]=x1+(x2-x1)*t;
                        this.clipVertices2[index+1]=y1+(y2-y1)*t;
                        this.clipVertices2[index+2]=z1+(z2-z1)*t;
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices2[index]=x2;
                        this.clipVertices2[index+1]=y2;
                        this.clipVertices2[index+2]=z2;
                    }
                }
                x1=x2;
                y1=y2;
                z1=z2;
                dot1=dot2;
            }

            numClipVertices=numAddedClipVertices;
            if(numClipVertices==0)return;
            numAddedClipVertices=0;
            index=(numClipVertices-1)*3;
            x1=this.clipVertices2[index];
            y1=this.clipVertices2[index+1];
            z1=this.clipVertices2[index+2];
            dot1=(x1-cx+s2x)*-n2x+(y1-cy+s2y)*-n2y+(z1-cz+s2z)*-n2z;

            //i = numClipVertices;
            //while(i--){
            for(i=0;i<numClipVertices;i++){
                index=i*3;
                x2=this.clipVertices2[index];
                y2=this.clipVertices2[index+1];
                z2=this.clipVertices2[index+2];
                dot2=(x2-cx+s2x)*-n2x+(y2-cy+s2y)*-n2y+(z2-cz+s2z)*-n2z;
                if(dot1>0){
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices1[index]=x2;
                        this.clipVertices1[index+1]=y2;
                        this.clipVertices1[index+2]=z2;
                    }else{
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices1[index]=x1+(x2-x1)*t;
                        this.clipVertices1[index+1]=y1+(y2-y1)*t;
                        this.clipVertices1[index+2]=z1+(z2-z1)*t;
                    }
                }else{
                    if(dot2>0){
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        t=dot1/(dot1-dot2);
                        this.clipVertices1[index]=x1+(x2-x1)*t;
                        this.clipVertices1[index+1]=y1+(y2-y1)*t;
                        this.clipVertices1[index+2]=z1+(z2-z1)*t;
                        index=numAddedClipVertices*3;
                        numAddedClipVertices++;
                        this.clipVertices1[index]=x2;
                        this.clipVertices1[index+1]=y2;
                        this.clipVertices1[index+2]=z2;
                    }
                }
                x1=x2;
                y1=y2;
                z1=z2;
                dot1=dot2;
            }

            numClipVertices=numAddedClipVertices;
            if(swap){
                var tb=b1;
                b1=b2;
                b2=tb;
            }
            if(numClipVertices==0)return;
            var flipped=b1!=shape1;
            if(numClipVertices>4){
                x1=(q1x+q2x+q3x+q4x)*0.25;
                y1=(q1y+q2y+q3y+q4y)*0.25;
                z1=(q1z+q2z+q3z+q4z)*0.25;
                n1x=q1x-x1;
                n1y=q1y-y1;
                n1z=q1z-z1;
                n2x=q2x-x1;
                n2y=q2y-y1;
                n2z=q2z-z1;
                var index1=0;
                var index2=0;
                var index3=0;
                var index4=0;
                var maxDot=-this.INF;
                minDot=this.INF;

                //i = numClipVertices;
                //while(i--){
                for(i=0;i<numClipVertices;i++){
                    this.used[i]=false;
                    index=i*3;
                    x1=this.clipVertices1[index];
                    y1=this.clipVertices1[index+1];
                    z1=this.clipVertices1[index+2];
                    dot=x1*n1x+y1*n1y+z1*n1z;
                    if(dot<minDot){
                        minDot=dot;
                        index1=i;
                    }
                    if(dot>maxDot){
                        maxDot=dot;
                        index3=i;
                    }
                }

                this.used[index1]=true;
                this.used[index3]=true;
                maxDot=-this.INF;
                minDot=this.INF;

                //i = numClipVertices;
                //while(i--){
                for(i=0;i<numClipVertices;i++){
                    if(this.used[i])continue;
                    index=i*3;
                    x1=this.clipVertices1[index];
                    y1=this.clipVertices1[index+1];
                    z1=this.clipVertices1[index+2];
                    dot=x1*n2x+y1*n2y+z1*n2z;
                    if(dot<minDot){
                        minDot=dot;
                        index2=i;
                    }
                    if(dot>maxDot){
                        maxDot=dot;
                        index4=i;
                    }
                }

                index=index1*3;
                x1=this.clipVertices1[index];
                y1=this.clipVertices1[index+1];
                z1=this.clipVertices1[index+2];
                dot=(x1-cx)*nx+(y1-cy)*ny+(z1-cz)*nz;
                if(dot<0) manifold.addPoint(x1,y1,z1,nx,ny,nz,dot,flipped);

                index=index2*3;
                x1=this.clipVertices1[index];
                y1=this.clipVertices1[index+1];
                z1=this.clipVertices1[index+2];
                dot=(x1-cx)*nx+(y1-cy)*ny+(z1-cz)*nz;
                if(dot<0) manifold.addPoint(x1,y1,z1,nx,ny,nz,dot,flipped);

                index=index3*3;
                x1=this.clipVertices1[index];
                y1=this.clipVertices1[index+1];
                z1=this.clipVertices1[index+2];
                dot=(x1-cx)*nx+(y1-cy)*ny+(z1-cz)*nz;
                if(dot<0) manifold.addPoint(x1,y1,z1,nx,ny,nz,dot,flipped);

                index=index4*3;
                x1=this.clipVertices1[index];
                y1=this.clipVertices1[index+1];
                z1=this.clipVertices1[index+2];
                dot=(x1-cx)*nx+(y1-cy)*ny+(z1-cz)*nz;
                if(dot<0) manifold.addPoint(x1,y1,z1,nx,ny,nz,dot,flipped);

            }else{
                //i = numClipVertices;
                //while(i--){
                for(i=0;i<numClipVertices;i++){
                    index=i*3;
                    x1=this.clipVertices1[index];
                    y1=this.clipVertices1[index+1];
                    z1=this.clipVertices1[index+2];
                    dot=(x1-cx)*nx+(y1-cy)*ny+(z1-cz)*nz;
                    if(dot<0)manifold.addPoint(x1,y1,z1,nx,ny,nz,dot,flipped);
                }
            }

        }

    });

    function BoxCylinderCollisionDetector (flip){

        CollisionDetector.call( this );
        this.flip = flip;

    }

    BoxCylinderCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: BoxCylinderCollisionDetector,

        getSep: function ( c1, c2, sep, pos, dep ) {

            var t1x;
            var t1y;
            var t1z;
            var t2x;
            var t2y;
            var t2z;
            var sup=new Vec3();
            var len;
            var p1x;
            var p1y;
            var p1z;
            var p2x;
            var p2y;
            var p2z;
            var v01x=c1.position.x;
            var v01y=c1.position.y;
            var v01z=c1.position.z;
            var v02x=c2.position.x;
            var v02y=c2.position.y;
            var v02z=c2.position.z;
            var v0x=v02x-v01x;
            var v0y=v02y-v01y;
            var v0z=v02z-v01z;
            if(v0x*v0x+v0y*v0y+v0z*v0z==0)v0y=0.001;
            var nx=-v0x;
            var ny=-v0y;
            var nz=-v0z;
            this.supportPointB(c1,-nx,-ny,-nz,sup);
            var v11x=sup.x;
            var v11y=sup.y;
            var v11z=sup.z;
            this.supportPointC(c2,nx,ny,nz,sup);
            var v12x=sup.x;
            var v12y=sup.y;
            var v12z=sup.z;
            var v1x=v12x-v11x;
            var v1y=v12y-v11y;
            var v1z=v12z-v11z;
            if(v1x*nx+v1y*ny+v1z*nz<=0){
                return false;
            }
            nx=v1y*v0z-v1z*v0y;
            ny=v1z*v0x-v1x*v0z;
            nz=v1x*v0y-v1y*v0x;
            if(nx*nx+ny*ny+nz*nz==0){
                sep.set( v1x-v0x, v1y-v0y, v1z-v0z ).normalize();
                pos.set( (v11x+v12x)*0.5, (v11y+v12y)*0.5, (v11z+v12z)*0.5 );
                return true;
            }
            this.supportPointB(c1,-nx,-ny,-nz,sup);
            var v21x=sup.x;
            var v21y=sup.y;
            var v21z=sup.z;
            this.supportPointC(c2,nx,ny,nz,sup);
            var v22x=sup.x;
            var v22y=sup.y;
            var v22z=sup.z;
            var v2x=v22x-v21x;
            var v2y=v22y-v21y;
            var v2z=v22z-v21z;
            if(v2x*nx+v2y*ny+v2z*nz<=0){
                return false;
            }
            t1x=v1x-v0x;
            t1y=v1y-v0y;
            t1z=v1z-v0z;
            t2x=v2x-v0x;
            t2y=v2y-v0y;
            t2z=v2z-v0z;
            nx=t1y*t2z-t1z*t2y;
            ny=t1z*t2x-t1x*t2z;
            nz=t1x*t2y-t1y*t2x;
            if(nx*v0x+ny*v0y+nz*v0z>0){
                t1x=v1x;
                t1y=v1y;
                t1z=v1z;
                v1x=v2x;
                v1y=v2y;
                v1z=v2z;
                v2x=t1x;
                v2y=t1y;
                v2z=t1z;
                t1x=v11x;
                t1y=v11y;
                t1z=v11z;
                v11x=v21x;
                v11y=v21y;
                v11z=v21z;
                v21x=t1x;
                v21y=t1y;
                v21z=t1z;
                t1x=v12x;
                t1y=v12y;
                t1z=v12z;
                v12x=v22x;
                v12y=v22y;
                v12z=v22z;
                v22x=t1x;
                v22y=t1y;
                v22z=t1z;
                nx=-nx;
                ny=-ny;
                nz=-nz;
            }
            var iterations=0;
            while(true){
                if(++iterations>100){
                    return false;
                }
                this.supportPointB(c1,-nx,-ny,-nz,sup);
                var v31x=sup.x;
                var v31y=sup.y;
                var v31z=sup.z;
                this.supportPointC(c2,nx,ny,nz,sup);
                var v32x=sup.x;
                var v32y=sup.y;
                var v32z=sup.z;
                var v3x=v32x-v31x;
                var v3y=v32y-v31y;
                var v3z=v32z-v31z;
                if(v3x*nx+v3y*ny+v3z*nz<=0){
                    return false;
                }
                if((v1y*v3z-v1z*v3y)*v0x+(v1z*v3x-v1x*v3z)*v0y+(v1x*v3y-v1y*v3x)*v0z<0){
                    v2x=v3x;
                    v2y=v3y;
                    v2z=v3z;
                    v21x=v31x;
                    v21y=v31y;
                    v21z=v31z;
                    v22x=v32x;
                    v22y=v32y;
                    v22z=v32z;
                    t1x=v1x-v0x;
                    t1y=v1y-v0y;
                    t1z=v1z-v0z;
                    t2x=v3x-v0x;
                    t2y=v3y-v0y;
                    t2z=v3z-v0z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    continue;
                }
                if((v3y*v2z-v3z*v2y)*v0x+(v3z*v2x-v3x*v2z)*v0y+(v3x*v2y-v3y*v2x)*v0z<0){
                    v1x=v3x;
                    v1y=v3y;
                    v1z=v3z;
                    v11x=v31x;
                    v11y=v31y;
                    v11z=v31z;
                    v12x=v32x;
                    v12y=v32y;
                    v12z=v32z;
                    t1x=v3x-v0x;
                    t1y=v3y-v0y;
                    t1z=v3z-v0z;
                    t2x=v2x-v0x;
                    t2y=v2y-v0y;
                    t2z=v2z-v0z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    continue;
                }
                var hit=false;
                while(true){
                    t1x=v2x-v1x;
                    t1y=v2y-v1y;
                    t1z=v2z-v1z;
                    t2x=v3x-v1x;
                    t2y=v3y-v1y;
                    t2z=v3z-v1z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    len=1/_Math.sqrt(nx*nx+ny*ny+nz*nz);
                    nx*=len;
                    ny*=len;
                    nz*=len;
                    if(nx*v1x+ny*v1y+nz*v1z>=0&&!hit){
                        var b0=(v1y*v2z-v1z*v2y)*v3x+(v1z*v2x-v1x*v2z)*v3y+(v1x*v2y-v1y*v2x)*v3z;
                        var b1=(v3y*v2z-v3z*v2y)*v0x+(v3z*v2x-v3x*v2z)*v0y+(v3x*v2y-v3y*v2x)*v0z;
                        var b2=(v0y*v1z-v0z*v1y)*v3x+(v0z*v1x-v0x*v1z)*v3y+(v0x*v1y-v0y*v1x)*v3z;
                        var b3=(v2y*v1z-v2z*v1y)*v0x+(v2z*v1x-v2x*v1z)*v0y+(v2x*v1y-v2y*v1x)*v0z;
                        var sum=b0+b1+b2+b3;
                        if(sum<=0){
                            b0=0;
                            b1=(v2y*v3z-v2z*v3y)*nx+(v2z*v3x-v2x*v3z)*ny+(v2x*v3y-v2y*v3x)*nz;
                            b2=(v3y*v2z-v3z*v2y)*nx+(v3z*v2x-v3x*v2z)*ny+(v3x*v2y-v3y*v2x)*nz;
                            b3=(v1y*v2z-v1z*v2y)*nx+(v1z*v2x-v1x*v2z)*ny+(v1x*v2y-v1y*v2x)*nz;
                            sum=b1+b2+b3;
                        }
                        var inv=1/sum;
                        p1x=(v01x*b0+v11x*b1+v21x*b2+v31x*b3)*inv;
                        p1y=(v01y*b0+v11y*b1+v21y*b2+v31y*b3)*inv;
                        p1z=(v01z*b0+v11z*b1+v21z*b2+v31z*b3)*inv;
                        p2x=(v02x*b0+v12x*b1+v22x*b2+v32x*b3)*inv;
                        p2y=(v02y*b0+v12y*b1+v22y*b2+v32y*b3)*inv;
                        p2z=(v02z*b0+v12z*b1+v22z*b2+v32z*b3)*inv;
                        hit=true;
                    }
                    this.supportPointB(c1,-nx,-ny,-nz,sup);
                    var v41x=sup.x;
                    var v41y=sup.y;
                    var v41z=sup.z;
                    this.supportPointC(c2,nx,ny,nz,sup);
                    var v42x=sup.x;
                    var v42y=sup.y;
                    var v42z=sup.z;
                    var v4x=v42x-v41x;
                    var v4y=v42y-v41y;
                    var v4z=v42z-v41z;
                    var separation=-(v4x*nx+v4y*ny+v4z*nz);
                    if((v4x-v3x)*nx+(v4y-v3y)*ny+(v4z-v3z)*nz<=0.01||separation>=0){
                        if(hit){
                            sep.set( -nx, -ny, -nz );
                            pos.set( (p1x+p2x)*0.5, (p1y+p2y)*0.5, (p1z+p2z)*0.5 );
                            dep.x=separation;
                            return true;
                        }
                        return false;
                    }
                    if(
                        (v4y*v1z-v4z*v1y)*v0x+
                        (v4z*v1x-v4x*v1z)*v0y+
                        (v4x*v1y-v4y*v1x)*v0z<0
                    ){
                        if(
                            (v4y*v2z-v4z*v2y)*v0x+
                            (v4z*v2x-v4x*v2z)*v0y+
                            (v4x*v2y-v4y*v2x)*v0z<0
                        ){
                            v1x=v4x;
                            v1y=v4y;
                            v1z=v4z;
                            v11x=v41x;
                            v11y=v41y;
                            v11z=v41z;
                            v12x=v42x;
                            v12y=v42y;
                            v12z=v42z;
                        }else{
                            v3x=v4x;
                            v3y=v4y;
                            v3z=v4z;
                            v31x=v41x;
                            v31y=v41y;
                            v31z=v41z;
                            v32x=v42x;
                            v32y=v42y;
                            v32z=v42z;
                        }
                    }else{
                        if(
                            (v4y*v3z-v4z*v3y)*v0x+
                            (v4z*v3x-v4x*v3z)*v0y+
                            (v4x*v3y-v4y*v3x)*v0z<0
                        ){
                            v2x=v4x;
                            v2y=v4y;
                            v2z=v4z;
                            v21x=v41x;
                            v21y=v41y;
                            v21z=v41z;
                            v22x=v42x;
                            v22y=v42y;
                            v22z=v42z;
                        }else{
                            v1x=v4x;
                            v1y=v4y;
                            v1z=v4z;
                            v11x=v41x;
                            v11y=v41y;
                            v11z=v41z;
                            v12x=v42x;
                            v12y=v42y;
                            v12z=v42z;
                        }
                    }
                }
            }
            //return false;
        },

        supportPointB: function( c, dx, dy, dz, out ) {

            var rot=c.rotation.elements;
            var ldx=rot[0]*dx+rot[3]*dy+rot[6]*dz;
            var ldy=rot[1]*dx+rot[4]*dy+rot[7]*dz;
            var ldz=rot[2]*dx+rot[5]*dy+rot[8]*dz;
            var w=c.halfWidth;
            var h=c.halfHeight;
            var d=c.halfDepth;
            var ox;
            var oy;
            var oz;
            if(ldx<0)ox=-w;
            else ox=w;
            if(ldy<0)oy=-h;
            else oy=h;
            if(ldz<0)oz=-d;
            else oz=d;
            ldx=rot[0]*ox+rot[1]*oy+rot[2]*oz+c.position.x;
            ldy=rot[3]*ox+rot[4]*oy+rot[5]*oz+c.position.y;
            ldz=rot[6]*ox+rot[7]*oy+rot[8]*oz+c.position.z;
            out.set( ldx, ldy, ldz );

        },

        supportPointC: function ( c, dx, dy, dz, out ) {

            var rot=c.rotation.elements;
            var ldx=rot[0]*dx+rot[3]*dy+rot[6]*dz;
            var ldy=rot[1]*dx+rot[4]*dy+rot[7]*dz;
            var ldz=rot[2]*dx+rot[5]*dy+rot[8]*dz;
            var radx=ldx;
            var radz=ldz;
            var len=radx*radx+radz*radz;
            var rad=c.radius;
            var hh=c.halfHeight;
            var ox;
            var oy;
            var oz;
            if(len==0){
                if(ldy<0){
                    ox=rad;
                    oy=-hh;
                    oz=0;
                }else{
                    ox=rad;
                    oy=hh;
                    oz=0;
                }
            }else{
                len=c.radius/_Math.sqrt(len);
                if(ldy<0){
                    ox=radx*len;
                    oy=-hh;
                    oz=radz*len;
                }else{
                    ox=radx*len;
                    oy=hh;
                    oz=radz*len;
                }
            }
            ldx=rot[0]*ox+rot[1]*oy+rot[2]*oz+c.position.x;
            ldy=rot[3]*ox+rot[4]*oy+rot[5]*oz+c.position.y;
            ldz=rot[6]*ox+rot[7]*oy+rot[8]*oz+c.position.z;
            out.set( ldx, ldy, ldz );

        },

        detectCollision: function( shape1, shape2, manifold ) {

            var b;
            var c;
            if(this.flip){
                b=shape2;
                c=shape1;
            }else{
                b=shape1;
                c=shape2;
            }
            var sep=new Vec3();
            var pos=new Vec3();
            var dep=new Vec3();

            if(!this.getSep(b,c,sep,pos,dep))return;
            var pbx=b.position.x;
            var pby=b.position.y;
            var pbz=b.position.z;
            var pcx=c.position.x;
            var pcy=c.position.y;
            var pcz=c.position.z;
            var bw=b.halfWidth;
            var bh=b.halfHeight;
            var bd=b.halfDepth;
            var ch=c.halfHeight;
            var r=c.radius;

            var D = b.dimentions;

            var nwx=D[0];//b.normalDirectionWidth.x;
            var nwy=D[1];//b.normalDirectionWidth.y;
            var nwz=D[2];//b.normalDirectionWidth.z;
            var nhx=D[3];//b.normalDirectionHeight.x;
            var nhy=D[4];//b.normalDirectionHeight.y;
            var nhz=D[5];//b.normalDirectionHeight.z;
            var ndx=D[6];//b.normalDirectionDepth.x;
            var ndy=D[7];//b.normalDirectionDepth.y;
            var ndz=D[8];//b.normalDirectionDepth.z;

            var dwx=D[9];//b.halfDirectionWidth.x;
            var dwy=D[10];//b.halfDirectionWidth.y;
            var dwz=D[11];//b.halfDirectionWidth.z;
            var dhx=D[12];//b.halfDirectionHeight.x;
            var dhy=D[13];//b.halfDirectionHeight.y;
            var dhz=D[14];//b.halfDirectionHeight.z;
            var ddx=D[15];//b.halfDirectionDepth.x;
            var ddy=D[16];//b.halfDirectionDepth.y;
            var ddz=D[17];//b.halfDirectionDepth.z;

            var ncx=c.normalDirection.x;
            var ncy=c.normalDirection.y;
            var ncz=c.normalDirection.z;
            var dcx=c.halfDirection.x;
            var dcy=c.halfDirection.y;
            var dcz=c.halfDirection.z;
            var nx=sep.x;
            var ny=sep.y;
            var nz=sep.z;
            var dotw=nx*nwx+ny*nwy+nz*nwz;
            var doth=nx*nhx+ny*nhy+nz*nhz;
            var dotd=nx*ndx+ny*ndy+nz*ndz;
            var dotc=nx*ncx+ny*ncy+nz*ncz;
            var right1=dotw>0;
            var right2=doth>0;
            var right3=dotd>0;
            var right4=dotc>0;
            if(!right1)dotw=-dotw;
            if(!right2)doth=-doth;
            if(!right3)dotd=-dotd;
            if(!right4)dotc=-dotc;
            var state=0;
            if(dotc>0.999){
                if(dotw>0.999){
                    if(dotw>dotc)state=1;
                    else state=4;
                }else if(doth>0.999){
                    if(doth>dotc)state=2;
                    else state=4;
                }else if(dotd>0.999){
                    if(dotd>dotc)state=3;
                    else state=4;
                }else state=4;
            }else{
                if(dotw>0.999)state=1;
                else if(doth>0.999)state=2;
                else if(dotd>0.999)state=3;
            }
            var cbx;
            var cby;
            var cbz;
            var ccx;
            var ccy;
            var ccz;
            var r00;
            var r01;
            var r02;
            var r10;
            var r11;
            var r12;
            var r20;
            var r21;
            var r22;
            var px;
            var py;
            var pz;
            var pd;
            var dot;
            var len;
            var tx;
            var ty;
            var tz;
            var td;
            var dx;
            var dy;
            var dz;
            var d1x;
            var d1y;
            var d1z;
            var d2x;
            var d2y;
            var d2z;
            var sx;
            var sy;
            var sz;
            var sd;
            var ex;
            var ey;
            var ez;
            var ed;
            var dot1;
            var dot2;
            var t1;
            var dir1x;
            var dir1y;
            var dir1z;
            var dir2x;
            var dir2y;
            var dir2z;
            var dir1l;
            var dir2l;
            if(state==0){
                //manifold.addPoint(pos.x,pos.y,pos.z,nx,ny,nz,dep.x,b,c,0,0,false);
                manifold.addPoint(pos.x,pos.y,pos.z,nx,ny,nz,dep.x,this.flip);
            }else if(state==4){
                if(right4){
                    ccx=pcx-dcx;
                    ccy=pcy-dcy;
                    ccz=pcz-dcz;
                    nx=-ncx;
                    ny=-ncy;
                    nz=-ncz;
                }else{
                    ccx=pcx+dcx;
                    ccy=pcy+dcy;
                    ccz=pcz+dcz;
                    nx=ncx;
                    ny=ncy;
                    nz=ncz;
                }
                var v1x;
                var v1y;
                var v1z;
                var v2x;
                var v2y;
                var v2z;
                var v3x;
                var v3y;
                var v3z;
                var v4x;
                var v4y;
                var v4z;

                dot=1;
                state=0;
                dot1=nwx*nx+nwy*ny+nwz*nz;
                if(dot1<dot){
                    dot=dot1;
                    state=0;
                }
                if(-dot1<dot){
                    dot=-dot1;
                    state=1;
                }
                dot1=nhx*nx+nhy*ny+nhz*nz;
                if(dot1<dot){
                    dot=dot1;
                    state=2;
                }
                if(-dot1<dot){
                    dot=-dot1;
                    state=3;
                }
                dot1=ndx*nx+ndy*ny+ndz*nz;
                if(dot1<dot){
                    dot=dot1;
                    state=4;
                }
                if(-dot1<dot){
                    dot=-dot1;
                    state=5;
                }
                var v = b.elements;
                switch(state){
                    case 0:
                        //v=b.vertex1;
                        v1x=v[0];//v.x;
                        v1y=v[1];//v.y;
                        v1z=v[2];//v.z;
                        //v=b.vertex3;
                        v2x=v[6];//v.x;
                        v2y=v[7];//v.y;
                        v2z=v[8];//v.z;
                        //v=b.vertex4;
                        v3x=v[9];//v.x;
                        v3y=v[10];//v.y;
                        v3z=v[11];//v.z;
                        //v=b.vertex2;
                        v4x=v[3];//v.x;
                        v4y=v[4];//v.y;
                        v4z=v[5];//v.z;
                        break;
                    case 1:
                        //v=b.vertex6;
                        v1x=v[15];//v.x;
                        v1y=v[16];//v.y;
                        v1z=v[17];//v.z;
                        //v=b.vertex8;
                        v2x=v[21];//v.x;
                        v2y=v[22];//v.y;
                        v2z=v[23];//v.z;
                        //v=b.vertex7;
                        v3x=v[18];//v.x;
                        v3y=v[19];//v.y;
                        v3z=v[20];//v.z;
                        //v=b.vertex5;
                        v4x=v[12];//v.x;
                        v4y=v[13];//v.y;
                        v4z=v[14];//v.z;
                        break;
                    case 2:
                        //v=b.vertex5;
                        v1x=v[12];//v.x;
                        v1y=v[13];//v.y;
                        v1z=v[14];//v.z;
                        //v=b.vertex1;
                        v2x=v[0];//v.x;
                        v2y=v[1];//v.y;
                        v2z=v[2];//v.z;
                        //v=b.vertex2;
                        v3x=v[3];//v.x;
                        v3y=v[4];//v.y;
                        v3z=v[5];//v.z;
                        //v=b.vertex6;
                        v4x=v[15];//v.x;
                        v4y=v[16];//v.y;
                        v4z=v[17];//v.z;
                        break;
                    case 3:
                        //v=b.vertex8;
                        v1x=v[21];//v.x;
                        v1y=v[22];//v.y;
                        v1z=v[23];//v.z;
                        //v=b.vertex4;
                        v2x=v[9];//v.x;
                        v2y=v[10];//v.y;
                        v2z=v[11];//v.z;
                        //v=b.vertex3;
                        v3x=v[6];//v.x;
                        v3y=v[7];//v.y;
                        v3z=v[8];//v.z;
                        //v=b.vertex7;
                        v4x=v[18];//v.x;
                        v4y=v[19];//v.y;
                        v4z=v[20];//v.z;
                        break;
                    case 4:
                        //v=b.vertex5;
                        v1x=v[12];//v.x;
                        v1y=v[13];//v.y;
                        v1z=v[14];//v.z;
                        //v=b.vertex7;
                        v2x=v[18];//v.x;
                        v2y=v[19];//v.y;
                        v2z=v[20];//v.z;
                        //v=b.vertex3;
                        v3x=v[6];//v.x;
                        v3y=v[7];//v.y;
                        v3z=v[8];//v.z;
                        //v=b.vertex1;
                        v4x=v[0];//v.x;
                        v4y=v[1];//v.y;
                        v4z=v[2];//v.z;
                        break;
                    case 5:
                        //v=b.vertex2;
                        v1x=v[3];//v.x;
                        v1y=v[4];//v.y;
                        v1z=v[5];//v.z;
                        //v=b.vertex4;
                        v2x=v[9];//v.x;
                        v2y=v[10];//v.y;
                        v2z=v[11];//v.z;
                        //v=b.vertex8;
                        v3x=v[21];//v.x;
                        v3y=v[22];//v.y;
                        v3z=v[23];//v.z;
                        //v=b.vertex6;
                        v4x=v[15];//v.x;
                        v4y=v[16];//v.y;
                        v4z=v[17];//v.z;
                        break;
                }
                pd=nx*(v1x-ccx)+ny*(v1y-ccy)+nz*(v1z-ccz);
                if(pd<=0)manifold.addPoint(v1x,v1y,v1z,-nx,-ny,-nz,pd,this.flip);
                pd=nx*(v2x-ccx)+ny*(v2y-ccy)+nz*(v2z-ccz);
                if(pd<=0)manifold.addPoint(v2x,v2y,v2z,-nx,-ny,-nz,pd,this.flip);
                pd=nx*(v3x-ccx)+ny*(v3y-ccy)+nz*(v3z-ccz);
                if(pd<=0)manifold.addPoint(v3x,v3y,v3z,-nx,-ny,-nz,pd,this.flip);
                pd=nx*(v4x-ccx)+ny*(v4y-ccy)+nz*(v4z-ccz);
                if(pd<=0)manifold.addPoint(v4x,v4y,v4z,-nx,-ny,-nz,pd,this.flip);
            }else{
                switch(state){
                    case 1:
                        if(right1){
                            cbx=pbx+dwx;
                            cby=pby+dwy;
                            cbz=pbz+dwz;
                            nx=nwx;
                            ny=nwy;
                            nz=nwz;
                        }else{
                            cbx=pbx-dwx;
                            cby=pby-dwy;
                            cbz=pbz-dwz;
                            nx=-nwx;
                            ny=-nwy;
                            nz=-nwz;
                        }
                        dir1x=nhx;
                        dir1y=nhy;
                        dir1z=nhz;
                        dir1l=bh;
                        dir2x=ndx;
                        dir2y=ndy;
                        dir2z=ndz;
                        dir2l=bd;
                        break;
                    case 2:
                        if(right2){
                            cbx=pbx+dhx;
                            cby=pby+dhy;
                            cbz=pbz+dhz;
                            nx=nhx;
                            ny=nhy;
                            nz=nhz;
                        }else{
                            cbx=pbx-dhx;
                            cby=pby-dhy;
                            cbz=pbz-dhz;
                            nx=-nhx;
                            ny=-nhy;
                            nz=-nhz;
                        }
                        dir1x=nwx;
                        dir1y=nwy;
                        dir1z=nwz;
                        dir1l=bw;
                        dir2x=ndx;
                        dir2y=ndy;
                        dir2z=ndz;
                        dir2l=bd;
                        break;
                    case 3:
                        if(right3){
                            cbx=pbx+ddx;
                            cby=pby+ddy;
                            cbz=pbz+ddz;
                            nx=ndx;
                            ny=ndy;
                            nz=ndz;
                        }else{
                            cbx=pbx-ddx;
                            cby=pby-ddy;
                            cbz=pbz-ddz;
                            nx=-ndx;
                            ny=-ndy;
                            nz=-ndz;
                        }
                        dir1x=nwx;
                        dir1y=nwy;
                        dir1z=nwz;
                        dir1l=bw;
                        dir2x=nhx;
                        dir2y=nhy;
                        dir2z=nhz;
                        dir2l=bh;
                        break;
                }
                dot=nx*ncx+ny*ncy+nz*ncz;
                if(dot<0)len=ch;
                else len=-ch;
                ccx=pcx+len*ncx;
                ccy=pcy+len*ncy;
                ccz=pcz+len*ncz;
                if(dotc>=0.999999){
                    tx=-ny;
                    ty=nz;
                    tz=nx;
                }else{
                    tx=nx;
                    ty=ny;
                    tz=nz;
                }
                len=tx*ncx+ty*ncy+tz*ncz;
                dx=len*ncx-tx;
                dy=len*ncy-ty;
                dz=len*ncz-tz;
                len=_Math.sqrt(dx*dx+dy*dy+dz*dz);
                if(len==0)return;
                len=r/len;
                dx*=len;
                dy*=len;
                dz*=len;
                tx=ccx+dx;
                ty=ccy+dy;
                tz=ccz+dz;
                if(dot<-0.96||dot>0.96){
                    r00=ncx*ncx*1.5-0.5;
                    r01=ncx*ncy*1.5-ncz*0.866025403;
                    r02=ncx*ncz*1.5+ncy*0.866025403;
                    r10=ncy*ncx*1.5+ncz*0.866025403;
                    r11=ncy*ncy*1.5-0.5;
                    r12=ncy*ncz*1.5-ncx*0.866025403;
                    r20=ncz*ncx*1.5-ncy*0.866025403;
                    r21=ncz*ncy*1.5+ncx*0.866025403;
                    r22=ncz*ncz*1.5-0.5;
                    px=tx;
                    py=ty;
                    pz=tz;
                    pd=nx*(px-cbx)+ny*(py-cby)+nz*(pz-cbz);
                    tx=px-pd*nx-cbx;
                    ty=py-pd*ny-cby;
                    tz=pz-pd*nz-cbz;
                    sd=dir1x*tx+dir1y*ty+dir1z*tz;
                    ed=dir2x*tx+dir2y*ty+dir2z*tz;
                    if(sd<-dir1l)sd=-dir1l;
                    else if(sd>dir1l)sd=dir1l;
                    if(ed<-dir2l)ed=-dir2l;
                    else if(ed>dir2l)ed=dir2l;
                    tx=sd*dir1x+ed*dir2x;
                    ty=sd*dir1y+ed*dir2y;
                    tz=sd*dir1z+ed*dir2z;
                    px=cbx+tx;
                    py=cby+ty;
                    pz=cbz+tz;
                    manifold.addPoint(px,py,pz,nx,ny,nz,pd,this.flip);
                    px=dx*r00+dy*r01+dz*r02;
                    py=dx*r10+dy*r11+dz*r12;
                    pz=dx*r20+dy*r21+dz*r22;
                    px=(dx=px)+ccx;
                    py=(dy=py)+ccy;
                    pz=(dz=pz)+ccz;
                    pd=nx*(px-cbx)+ny*(py-cby)+nz*(pz-cbz);
                    if(pd<=0){
                        tx=px-pd*nx-cbx;
                        ty=py-pd*ny-cby;
                        tz=pz-pd*nz-cbz;
                        sd=dir1x*tx+dir1y*ty+dir1z*tz;
                        ed=dir2x*tx+dir2y*ty+dir2z*tz;
                        if(sd<-dir1l)sd=-dir1l;
                        else if(sd>dir1l)sd=dir1l;
                        if(ed<-dir2l)ed=-dir2l;
                        else if(ed>dir2l)ed=dir2l;
                        tx=sd*dir1x+ed*dir2x;
                        ty=sd*dir1y+ed*dir2y;
                        tz=sd*dir1z+ed*dir2z;
                        px=cbx+tx;
                        py=cby+ty;
                        pz=cbz+tz;
                        //manifold.addPoint(px,py,pz,nx,ny,nz,pd,b,c,2,0,false);
                        manifold.addPoint(px,py,pz,nx,ny,nz,pd,this.flip);
                    }
                    px=dx*r00+dy*r01+dz*r02;
                    py=dx*r10+dy*r11+dz*r12;
                    pz=dx*r20+dy*r21+dz*r22;
                    px=(dx=px)+ccx;
                    py=(dy=py)+ccy;
                    pz=(dz=pz)+ccz;
                    pd=nx*(px-cbx)+ny*(py-cby)+nz*(pz-cbz);
                    if(pd<=0){
                        tx=px-pd*nx-cbx;
                        ty=py-pd*ny-cby;
                        tz=pz-pd*nz-cbz;
                        sd=dir1x*tx+dir1y*ty+dir1z*tz;
                        ed=dir2x*tx+dir2y*ty+dir2z*tz;
                        if(sd<-dir1l)sd=-dir1l;
                        else if(sd>dir1l)sd=dir1l;
                        if(ed<-dir2l)ed=-dir2l;
                        else if(ed>dir2l)ed=dir2l;
                        tx=sd*dir1x+ed*dir2x;
                        ty=sd*dir1y+ed*dir2y;
                        tz=sd*dir1z+ed*dir2z;
                        px=cbx+tx;
                        py=cby+ty;
                        pz=cbz+tz;
                        //manifold.addPoint(px,py,pz,nx,ny,nz,pd,b,c,3,0,false);
                        manifold.addPoint(px,py,pz,nx,ny,nz,pd,this.flip);
                    }
                }else{
                    sx=tx;
                    sy=ty;
                    sz=tz;
                    sd=nx*(sx-cbx)+ny*(sy-cby)+nz*(sz-cbz);
                    sx-=sd*nx;
                    sy-=sd*ny;
                    sz-=sd*nz;
                    if(dot>0){
                        ex=tx+dcx*2;
                        ey=ty+dcy*2;
                        ez=tz+dcz*2;
                    }else{
                        ex=tx-dcx*2;
                        ey=ty-dcy*2;
                        ez=tz-dcz*2;
                    }
                    ed=nx*(ex-cbx)+ny*(ey-cby)+nz*(ez-cbz);
                    ex-=ed*nx;
                    ey-=ed*ny;
                    ez-=ed*nz;
                    d1x=sx-cbx;
                    d1y=sy-cby;
                    d1z=sz-cbz;
                    d2x=ex-cbx;
                    d2y=ey-cby;
                    d2z=ez-cbz;
                    tx=ex-sx;
                    ty=ey-sy;
                    tz=ez-sz;
                    td=ed-sd;
                    dotw=d1x*dir1x+d1y*dir1y+d1z*dir1z;
                    doth=d2x*dir1x+d2y*dir1y+d2z*dir1z;
                    dot1=dotw-dir1l;
                    dot2=doth-dir1l;
                    if(dot1>0){
                        if(dot2>0)return;
                        t1=dot1/(dot1-dot2);
                        sx=sx+tx*t1;
                        sy=sy+ty*t1;
                        sz=sz+tz*t1;
                        sd=sd+td*t1;
                        d1x=sx-cbx;
                        d1y=sy-cby;
                        d1z=sz-cbz;
                        dotw=d1x*dir1x+d1y*dir1y+d1z*dir1z;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }else if(dot2>0){
                        t1=dot1/(dot1-dot2);
                        ex=sx+tx*t1;
                        ey=sy+ty*t1;
                        ez=sz+tz*t1;
                        ed=sd+td*t1;
                        d2x=ex-cbx;
                        d2y=ey-cby;
                        d2z=ez-cbz;
                        doth=d2x*dir1x+d2y*dir1y+d2z*dir1z;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }
                    dot1=dotw+dir1l;
                    dot2=doth+dir1l;
                    if(dot1<0){
                        if(dot2<0)return;
                        t1=dot1/(dot1-dot2);
                        sx=sx+tx*t1;
                        sy=sy+ty*t1;
                        sz=sz+tz*t1;
                        sd=sd+td*t1;
                        d1x=sx-cbx;
                        d1y=sy-cby;
                        d1z=sz-cbz;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }else if(dot2<0){
                        t1=dot1/(dot1-dot2);
                        ex=sx+tx*t1;
                        ey=sy+ty*t1;
                        ez=sz+tz*t1;
                        ed=sd+td*t1;
                        d2x=ex-cbx;
                        d2y=ey-cby;
                        d2z=ez-cbz;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }
                    dotw=d1x*dir2x+d1y*dir2y+d1z*dir2z;
                    doth=d2x*dir2x+d2y*dir2y+d2z*dir2z;
                    dot1=dotw-dir2l;
                    dot2=doth-dir2l;
                    if(dot1>0){
                        if(dot2>0)return;
                        t1=dot1/(dot1-dot2);
                        sx=sx+tx*t1;
                        sy=sy+ty*t1;
                        sz=sz+tz*t1;
                        sd=sd+td*t1;
                        d1x=sx-cbx;
                        d1y=sy-cby;
                        d1z=sz-cbz;
                        dotw=d1x*dir2x+d1y*dir2y+d1z*dir2z;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }else if(dot2>0){
                        t1=dot1/(dot1-dot2);
                        ex=sx+tx*t1;
                        ey=sy+ty*t1;
                        ez=sz+tz*t1;
                        ed=sd+td*t1;
                        d2x=ex-cbx;
                        d2y=ey-cby;
                        d2z=ez-cbz;
                        doth=d2x*dir2x+d2y*dir2y+d2z*dir2z;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        td=ed-sd;
                    }
                    dot1=dotw+dir2l;
                    dot2=doth+dir2l;
                    if(dot1<0){
                        if(dot2<0)return;
                        t1=dot1/(dot1-dot2);
                        sx=sx+tx*t1;
                        sy=sy+ty*t1;
                        sz=sz+tz*t1;
                        sd=sd+td*t1;
                    }else if(dot2<0){
                        t1=dot1/(dot1-dot2);
                        ex=sx+tx*t1;
                        ey=sy+ty*t1;
                        ez=sz+tz*t1;
                        ed=sd+td*t1;
                    }
                    if(sd<0){
                        //manifold.addPoint(sx,sy,sz,nx,ny,nz,sd,b,c,1,0,false);
                        manifold.addPoint(sx,sy,sz,nx,ny,nz,sd,this.flip);
                    }
                    if(ed<0){
                        //manifold.addPoint(ex,ey,ez,nx,ny,nz,ed,b,c,4,0,false);
                        manifold.addPoint(ex,ey,ez,nx,ny,nz,ed,this.flip);
                    }
                }
            }

        }

    });

    function CylinderCylinderCollisionDetector() {

        CollisionDetector.call( this );

    }

    CylinderCylinderCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: CylinderCylinderCollisionDetector,


        getSep: function ( c1, c2, sep, pos, dep ) {

            var t1x;
            var t1y;
            var t1z;
            var t2x;
            var t2y;
            var t2z;
            var sup=new Vec3();
            var len;
            var p1x;
            var p1y;
            var p1z;
            var p2x;
            var p2y;
            var p2z;
            var v01x=c1.position.x;
            var v01y=c1.position.y;
            var v01z=c1.position.z;
            var v02x=c2.position.x;
            var v02y=c2.position.y;
            var v02z=c2.position.z;
            var v0x=v02x-v01x;
            var v0y=v02y-v01y;
            var v0z=v02z-v01z;
            if(v0x*v0x+v0y*v0y+v0z*v0z==0)v0y=0.001;
            var nx=-v0x;
            var ny=-v0y;
            var nz=-v0z;
            this.supportPoint(c1,-nx,-ny,-nz,sup);
            var v11x=sup.x;
            var v11y=sup.y;
            var v11z=sup.z;
            this.supportPoint(c2,nx,ny,nz,sup);
            var v12x=sup.x;
            var v12y=sup.y;
            var v12z=sup.z;
            var v1x=v12x-v11x;
            var v1y=v12y-v11y;
            var v1z=v12z-v11z;
            if(v1x*nx+v1y*ny+v1z*nz<=0){
                return false;
            }
            nx=v1y*v0z-v1z*v0y;
            ny=v1z*v0x-v1x*v0z;
            nz=v1x*v0y-v1y*v0x;
            if(nx*nx+ny*ny+nz*nz==0){
                sep.set( v1x-v0x, v1y-v0y, v1z-v0z ).normalize();
                pos.set( (v11x+v12x)*0.5, (v11y+v12y)*0.5, (v11z+v12z)*0.5 );
                return true;
            }
            this.supportPoint(c1,-nx,-ny,-nz,sup);
            var v21x=sup.x;
            var v21y=sup.y;
            var v21z=sup.z;
            this.supportPoint(c2,nx,ny,nz,sup);
            var v22x=sup.x;
            var v22y=sup.y;
            var v22z=sup.z;
            var v2x=v22x-v21x;
            var v2y=v22y-v21y;
            var v2z=v22z-v21z;
            if(v2x*nx+v2y*ny+v2z*nz<=0){
                return false;
            }
            t1x=v1x-v0x;
            t1y=v1y-v0y;
            t1z=v1z-v0z;
            t2x=v2x-v0x;
            t2y=v2y-v0y;
            t2z=v2z-v0z;
            nx=t1y*t2z-t1z*t2y;
            ny=t1z*t2x-t1x*t2z;
            nz=t1x*t2y-t1y*t2x;
            if(nx*v0x+ny*v0y+nz*v0z>0){
                t1x=v1x;
                t1y=v1y;
                t1z=v1z;
                v1x=v2x;
                v1y=v2y;
                v1z=v2z;
                v2x=t1x;
                v2y=t1y;
                v2z=t1z;
                t1x=v11x;
                t1y=v11y;
                t1z=v11z;
                v11x=v21x;
                v11y=v21y;
                v11z=v21z;
                v21x=t1x;
                v21y=t1y;
                v21z=t1z;
                t1x=v12x;
                t1y=v12y;
                t1z=v12z;
                v12x=v22x;
                v12y=v22y;
                v12z=v22z;
                v22x=t1x;
                v22y=t1y;
                v22z=t1z;
                nx=-nx;
                ny=-ny;
                nz=-nz;
            }
            var iterations=0;
            while(true){
                if(++iterations>100){
                    return false;
                }
                this.supportPoint(c1,-nx,-ny,-nz,sup);
                var v31x=sup.x;
                var v31y=sup.y;
                var v31z=sup.z;
                this.supportPoint(c2,nx,ny,nz,sup);
                var v32x=sup.x;
                var v32y=sup.y;
                var v32z=sup.z;
                var v3x=v32x-v31x;
                var v3y=v32y-v31y;
                var v3z=v32z-v31z;
                if(v3x*nx+v3y*ny+v3z*nz<=0){
                    return false;
                }
                if((v1y*v3z-v1z*v3y)*v0x+(v1z*v3x-v1x*v3z)*v0y+(v1x*v3y-v1y*v3x)*v0z<0){
                    v2x=v3x;
                    v2y=v3y;
                    v2z=v3z;
                    v21x=v31x;
                    v21y=v31y;
                    v21z=v31z;
                    v22x=v32x;
                    v22y=v32y;
                    v22z=v32z;
                    t1x=v1x-v0x;
                    t1y=v1y-v0y;
                    t1z=v1z-v0z;
                    t2x=v3x-v0x;
                    t2y=v3y-v0y;
                    t2z=v3z-v0z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    continue;
                }
                if((v3y*v2z-v3z*v2y)*v0x+(v3z*v2x-v3x*v2z)*v0y+(v3x*v2y-v3y*v2x)*v0z<0){
                    v1x=v3x;
                    v1y=v3y;
                    v1z=v3z;
                    v11x=v31x;
                    v11y=v31y;
                    v11z=v31z;
                    v12x=v32x;
                    v12y=v32y;
                    v12z=v32z;
                    t1x=v3x-v0x;
                    t1y=v3y-v0y;
                    t1z=v3z-v0z;
                    t2x=v2x-v0x;
                    t2y=v2y-v0y;
                    t2z=v2z-v0z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    continue;
                }
                var hit=false;
                while(true){
                    t1x=v2x-v1x;
                    t1y=v2y-v1y;
                    t1z=v2z-v1z;
                    t2x=v3x-v1x;
                    t2y=v3y-v1y;
                    t2z=v3z-v1z;
                    nx=t1y*t2z-t1z*t2y;
                    ny=t1z*t2x-t1x*t2z;
                    nz=t1x*t2y-t1y*t2x;
                    len=1/_Math.sqrt(nx*nx+ny*ny+nz*nz);
                    nx*=len;
                    ny*=len;
                    nz*=len;
                    if(nx*v1x+ny*v1y+nz*v1z>=0&&!hit){
                        var b0=(v1y*v2z-v1z*v2y)*v3x+(v1z*v2x-v1x*v2z)*v3y+(v1x*v2y-v1y*v2x)*v3z;
                        var b1=(v3y*v2z-v3z*v2y)*v0x+(v3z*v2x-v3x*v2z)*v0y+(v3x*v2y-v3y*v2x)*v0z;
                        var b2=(v0y*v1z-v0z*v1y)*v3x+(v0z*v1x-v0x*v1z)*v3y+(v0x*v1y-v0y*v1x)*v3z;
                        var b3=(v2y*v1z-v2z*v1y)*v0x+(v2z*v1x-v2x*v1z)*v0y+(v2x*v1y-v2y*v1x)*v0z;
                        var sum=b0+b1+b2+b3;
                        if(sum<=0){
                            b0=0;
                            b1=(v2y*v3z-v2z*v3y)*nx+(v2z*v3x-v2x*v3z)*ny+(v2x*v3y-v2y*v3x)*nz;
                            b2=(v3y*v2z-v3z*v2y)*nx+(v3z*v2x-v3x*v2z)*ny+(v3x*v2y-v3y*v2x)*nz;
                            b3=(v1y*v2z-v1z*v2y)*nx+(v1z*v2x-v1x*v2z)*ny+(v1x*v2y-v1y*v2x)*nz;
                            sum=b1+b2+b3;
                        }
                        var inv=1/sum;
                        p1x=(v01x*b0+v11x*b1+v21x*b2+v31x*b3)*inv;
                        p1y=(v01y*b0+v11y*b1+v21y*b2+v31y*b3)*inv;
                        p1z=(v01z*b0+v11z*b1+v21z*b2+v31z*b3)*inv;
                        p2x=(v02x*b0+v12x*b1+v22x*b2+v32x*b3)*inv;
                        p2y=(v02y*b0+v12y*b1+v22y*b2+v32y*b3)*inv;
                        p2z=(v02z*b0+v12z*b1+v22z*b2+v32z*b3)*inv;
                        hit=true;
                    }
                    this.supportPoint(c1,-nx,-ny,-nz,sup);
                    var v41x=sup.x;
                    var v41y=sup.y;
                    var v41z=sup.z;
                    this.supportPoint(c2,nx,ny,nz,sup);
                    var v42x=sup.x;
                    var v42y=sup.y;
                    var v42z=sup.z;
                    var v4x=v42x-v41x;
                    var v4y=v42y-v41y;
                    var v4z=v42z-v41z;
                    var separation=-(v4x*nx+v4y*ny+v4z*nz);
                    if((v4x-v3x)*nx+(v4y-v3y)*ny+(v4z-v3z)*nz<=0.01||separation>=0){
                        if(hit){
                            sep.set( -nx, -ny, -nz );
                            pos.set( (p1x+p2x)*0.5, (p1y+p2y)*0.5, (p1z+p2z)*0.5 );
                            dep.x=separation;
                            return true;
                        }
                        return false;
                    }
                    if(
                        (v4y*v1z-v4z*v1y)*v0x+
                        (v4z*v1x-v4x*v1z)*v0y+
                        (v4x*v1y-v4y*v1x)*v0z<0
                    ){
                        if(
                            (v4y*v2z-v4z*v2y)*v0x+
                            (v4z*v2x-v4x*v2z)*v0y+
                            (v4x*v2y-v4y*v2x)*v0z<0
                        ){
                            v1x=v4x;
                            v1y=v4y;
                            v1z=v4z;
                            v11x=v41x;
                            v11y=v41y;
                            v11z=v41z;
                            v12x=v42x;
                            v12y=v42y;
                            v12z=v42z;
                        }else{
                            v3x=v4x;
                            v3y=v4y;
                            v3z=v4z;
                            v31x=v41x;
                            v31y=v41y;
                            v31z=v41z;
                            v32x=v42x;
                            v32y=v42y;
                            v32z=v42z;
                        }
                    }else{
                        if(
                            (v4y*v3z-v4z*v3y)*v0x+
                            (v4z*v3x-v4x*v3z)*v0y+
                            (v4x*v3y-v4y*v3x)*v0z<0
                        ){
                            v2x=v4x;
                            v2y=v4y;
                            v2z=v4z;
                            v21x=v41x;
                            v21y=v41y;
                            v21z=v41z;
                            v22x=v42x;
                            v22y=v42y;
                            v22z=v42z;
                        }else{
                            v1x=v4x;
                            v1y=v4y;
                            v1z=v4z;
                            v11x=v41x;
                            v11y=v41y;
                            v11z=v41z;
                            v12x=v42x;
                            v12y=v42y;
                            v12z=v42z;
                        }
                    }
                }
            }
            //return false;
        },

        supportPoint: function ( c, dx, dy, dz, out ) {

            var rot=c.rotation.elements;
            var ldx=rot[0]*dx+rot[3]*dy+rot[6]*dz;
            var ldy=rot[1]*dx+rot[4]*dy+rot[7]*dz;
            var ldz=rot[2]*dx+rot[5]*dy+rot[8]*dz;
            var radx=ldx;
            var radz=ldz;
            var len=radx*radx+radz*radz;
            var rad=c.radius;
            var hh=c.halfHeight;
            var ox;
            var oy;
            var oz;
            if(len==0){
                if(ldy<0){
                    ox=rad;
                    oy=-hh;
                    oz=0;
                }else{
                    ox=rad;
                    oy=hh;
                    oz=0;
                }
            }else{
                len=c.radius/_Math.sqrt(len);
                if(ldy<0){
                    ox=radx*len;
                    oy=-hh;
                    oz=radz*len;
                }else{
                    ox=radx*len;
                    oy=hh;
                    oz=radz*len;
                }
            }
            ldx=rot[0]*ox+rot[1]*oy+rot[2]*oz+c.position.x;
            ldy=rot[3]*ox+rot[4]*oy+rot[5]*oz+c.position.y;
            ldz=rot[6]*ox+rot[7]*oy+rot[8]*oz+c.position.z;
            out.set( ldx, ldy, ldz );

        },

        detectCollision: function ( shape1, shape2, manifold ) {

            var c1;
            var c2;
            if(shape1.id<shape2.id){
                c1=shape1;
                c2=shape2;
            }else{
                c1=shape2;
                c2=shape1;
            }
            var p1=c1.position;
            var p2=c2.position;
            var p1x=p1.x;
            var p1y=p1.y;
            var p1z=p1.z;
            var p2x=p2.x;
            var p2y=p2.y;
            var p2z=p2.z;
            var h1=c1.halfHeight;
            var h2=c2.halfHeight;
            var n1=c1.normalDirection;
            var n2=c2.normalDirection;
            var d1=c1.halfDirection;
            var d2=c2.halfDirection;
            var r1=c1.radius;
            var r2=c2.radius;
            var n1x=n1.x;
            var n1y=n1.y;
            var n1z=n1.z;
            var n2x=n2.x;
            var n2y=n2.y;
            var n2z=n2.z;
            var d1x=d1.x;
            var d1y=d1.y;
            var d1z=d1.z;
            var d2x=d2.x;
            var d2y=d2.y;
            var d2z=d2.z;
            var dx=p1x-p2x;
            var dy=p1y-p2y;
            var dz=p1z-p2z;
            var len;
            var c1x;
            var c1y;
            var c1z;
            var c2x;
            var c2y;
            var c2z;
            var tx;
            var ty;
            var tz;
            var sx;
            var sy;
            var sz;
            var ex;
            var ey;
            var ez;
            var depth1;
            var depth2;
            var dot;
            var t1;
            var t2;
            var sep=new Vec3();
            var pos=new Vec3();
            var dep=new Vec3();
            if(!this.getSep(c1,c2,sep,pos,dep))return;
            var dot1=sep.x*n1x+sep.y*n1y+sep.z*n1z;
            var dot2=sep.x*n2x+sep.y*n2y+sep.z*n2z;
            var right1=dot1>0;
            var right2=dot2>0;
            if(!right1)dot1=-dot1;
            if(!right2)dot2=-dot2;
            var state=0;
            if(dot1>0.999||dot2>0.999){
                if(dot1>dot2)state=1;
                else state=2;
            }
            var nx;
            var ny;
            var nz;
            var depth=dep.x;
            var r00;
            var r01;
            var r02;
            var r10;
            var r11;
            var r12;
            var r20;
            var r21;
            var r22;
            var px;
            var py;
            var pz;
            var pd;
            var a;
            var b;
            var e;
            var f;
            nx=sep.x;
            ny=sep.y;
            nz=sep.z;
            switch(state){
                case 0:
                    manifold.addPoint(pos.x,pos.y,pos.z,nx,ny,nz,depth,false);
                    break;
                case 1:
                    if(right1){
                        c1x=p1x+d1x;
                        c1y=p1y+d1y;
                        c1z=p1z+d1z;
                        nx=n1x;
                        ny=n1y;
                        nz=n1z;
                    }else{
                        c1x=p1x-d1x;
                        c1y=p1y-d1y;
                        c1z=p1z-d1z;
                        nx=-n1x;
                        ny=-n1y;
                        nz=-n1z;
                    }
                    dot=nx*n2x+ny*n2y+nz*n2z;
                    if(dot<0)len=h2;
                    else len=-h2;
                    c2x=p2x+len*n2x;
                    c2y=p2y+len*n2y;
                    c2z=p2z+len*n2z;
                    if(dot2>=0.999999){
                        tx=-ny;
                        ty=nz;
                        tz=nx;
                    }else{
                        tx=nx;
                        ty=ny;
                        tz=nz;
                    }
                    len=tx*n2x+ty*n2y+tz*n2z;
                    dx=len*n2x-tx;
                    dy=len*n2y-ty;
                    dz=len*n2z-tz;
                    len=_Math.sqrt(dx*dx+dy*dy+dz*dz);
                    if(len==0)break;
                    len=r2/len;
                    dx*=len;
                    dy*=len;
                    dz*=len;
                    tx=c2x+dx;
                    ty=c2y+dy;
                    tz=c2z+dz;
                    if(dot<-0.96||dot>0.96){
                        r00=n2x*n2x*1.5-0.5;
                        r01=n2x*n2y*1.5-n2z*0.866025403;
                        r02=n2x*n2z*1.5+n2y*0.866025403;
                        r10=n2y*n2x*1.5+n2z*0.866025403;
                        r11=n2y*n2y*1.5-0.5;
                        r12=n2y*n2z*1.5-n2x*0.866025403;
                        r20=n2z*n2x*1.5-n2y*0.866025403;
                        r21=n2z*n2y*1.5+n2x*0.866025403;
                        r22=n2z*n2z*1.5-0.5;
                        px=tx;
                        py=ty;
                        pz=tz;
                        pd=nx*(px-c1x)+ny*(py-c1y)+nz*(pz-c1z);
                        tx=px-pd*nx-c1x;
                        ty=py-pd*ny-c1y;
                        tz=pz-pd*nz-c1z;
                        len=tx*tx+ty*ty+tz*tz;
                        if(len>r1*r1){
                            len=r1/_Math.sqrt(len);
                            tx*=len;
                            ty*=len;
                            tz*=len;
                        }
                        px=c1x+tx;
                        py=c1y+ty;
                        pz=c1z+tz;
                        manifold.addPoint(px,py,pz,nx,ny,nz,pd,false);
                        px=dx*r00+dy*r01+dz*r02;
                        py=dx*r10+dy*r11+dz*r12;
                        pz=dx*r20+dy*r21+dz*r22;
                        px=(dx=px)+c2x;
                        py=(dy=py)+c2y;
                        pz=(dz=pz)+c2z;
                        pd=nx*(px-c1x)+ny*(py-c1y)+nz*(pz-c1z);
                        if(pd<=0){
                            tx=px-pd*nx-c1x;
                            ty=py-pd*ny-c1y;
                            tz=pz-pd*nz-c1z;
                            len=tx*tx+ty*ty+tz*tz;
                            if(len>r1*r1){
                                len=r1/_Math.sqrt(len);
                                tx*=len;
                                ty*=len;
                                tz*=len;
                            }
                            px=c1x+tx;
                            py=c1y+ty;
                            pz=c1z+tz;
                            manifold.addPoint(px,py,pz,nx,ny,nz,pd,false);
                        }
                        px=dx*r00+dy*r01+dz*r02;
                        py=dx*r10+dy*r11+dz*r12;
                        pz=dx*r20+dy*r21+dz*r22;
                        px=(dx=px)+c2x;
                        py=(dy=py)+c2y;
                        pz=(dz=pz)+c2z;
                        pd=nx*(px-c1x)+ny*(py-c1y)+nz*(pz-c1z);
                        if(pd<=0){
                            tx=px-pd*nx-c1x;
                            ty=py-pd*ny-c1y;
                            tz=pz-pd*nz-c1z;
                            len=tx*tx+ty*ty+tz*tz;
                            if(len>r1*r1){
                                len=r1/_Math.sqrt(len);
                                tx*=len;
                                ty*=len;
                                tz*=len;
                            }
                            px=c1x+tx;
                            py=c1y+ty;
                            pz=c1z+tz;
                            manifold.addPoint(px,py,pz,nx,ny,nz,pd,false);
                        }
                    }else{
                        sx=tx;
                        sy=ty;
                        sz=tz;
                        depth1=nx*(sx-c1x)+ny*(sy-c1y)+nz*(sz-c1z);
                        sx-=depth1*nx;
                        sy-=depth1*ny;
                        sz-=depth1*nz;
                        if(dot>0){
                            ex=tx+n2x*h2*2;
                            ey=ty+n2y*h2*2;
                            ez=tz+n2z*h2*2;
                        }else{
                            ex=tx-n2x*h2*2;
                            ey=ty-n2y*h2*2;
                            ez=tz-n2z*h2*2;
                        }
                        depth2=nx*(ex-c1x)+ny*(ey-c1y)+nz*(ez-c1z);
                        ex-=depth2*nx;
                        ey-=depth2*ny;
                        ez-=depth2*nz;
                        dx=c1x-sx;
                        dy=c1y-sy;
                        dz=c1z-sz;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        a=dx*dx+dy*dy+dz*dz;
                        b=dx*tx+dy*ty+dz*tz;
                        e=tx*tx+ty*ty+tz*tz;
                        f=b*b-e*(a-r1*r1);
                        if(f<0)break;
                        f=_Math.sqrt(f);
                        t1=(b+f)/e;
                        t2=(b-f)/e;
                        if(t2<t1){
                            len=t1;
                            t1=t2;
                            t2=len;
                        }
                        if(t2>1)t2=1;
                        if(t1<0)t1=0;
                        tx=sx+(ex-sx)*t1;
                        ty=sy+(ey-sy)*t1;
                        tz=sz+(ez-sz)*t1;
                        ex=sx+(ex-sx)*t2;
                        ey=sy+(ey-sy)*t2;
                        ez=sz+(ez-sz)*t2;
                        sx=tx;
                        sy=ty;
                        sz=tz;
                        len=depth1+(depth2-depth1)*t1;
                        depth2=depth1+(depth2-depth1)*t2;
                        depth1=len;
                        if(depth1<0) manifold.addPoint(sx,sy,sz,nx,ny,nz,pd,false);
                        if(depth2<0) manifold.addPoint(ex,ey,ez,nx,ny,nz,pd,false);

                    }
                    break;
                case 2:
                    if(right2){
                        c2x=p2x-d2x;
                        c2y=p2y-d2y;
                        c2z=p2z-d2z;
                        nx=-n2x;
                        ny=-n2y;
                        nz=-n2z;
                    }else{
                        c2x=p2x+d2x;
                        c2y=p2y+d2y;
                        c2z=p2z+d2z;
                        nx=n2x;
                        ny=n2y;
                        nz=n2z;
                    }
                    dot=nx*n1x+ny*n1y+nz*n1z;
                    if(dot<0)len=h1;
                    else len=-h1;
                    c1x=p1x+len*n1x;
                    c1y=p1y+len*n1y;
                    c1z=p1z+len*n1z;
                    if(dot1>=0.999999){
                        tx=-ny;
                        ty=nz;
                        tz=nx;
                    }else{
                        tx=nx;
                        ty=ny;
                        tz=nz;
                    }
                    len=tx*n1x+ty*n1y+tz*n1z;
                    dx=len*n1x-tx;
                    dy=len*n1y-ty;
                    dz=len*n1z-tz;
                    len=_Math.sqrt(dx*dx+dy*dy+dz*dz);
                    if(len==0)break;
                    len=r1/len;
                    dx*=len;
                    dy*=len;
                    dz*=len;
                    tx=c1x+dx;
                    ty=c1y+dy;
                    tz=c1z+dz;
                    if(dot<-0.96||dot>0.96){
                        r00=n1x*n1x*1.5-0.5;
                        r01=n1x*n1y*1.5-n1z*0.866025403;
                        r02=n1x*n1z*1.5+n1y*0.866025403;
                        r10=n1y*n1x*1.5+n1z*0.866025403;
                        r11=n1y*n1y*1.5-0.5;
                        r12=n1y*n1z*1.5-n1x*0.866025403;
                        r20=n1z*n1x*1.5-n1y*0.866025403;
                        r21=n1z*n1y*1.5+n1x*0.866025403;
                        r22=n1z*n1z*1.5-0.5;
                        px=tx;
                        py=ty;
                        pz=tz;
                        pd=nx*(px-c2x)+ny*(py-c2y)+nz*(pz-c2z);
                        tx=px-pd*nx-c2x;
                        ty=py-pd*ny-c2y;
                        tz=pz-pd*nz-c2z;
                        len=tx*tx+ty*ty+tz*tz;
                        if(len>r2*r2){
                            len=r2/_Math.sqrt(len);
                            tx*=len;
                            ty*=len;
                            tz*=len;
                        }
                        px=c2x+tx;
                        py=c2y+ty;
                        pz=c2z+tz;
                        manifold.addPoint(px,py,pz,-nx,-ny,-nz,pd,false);
                        px=dx*r00+dy*r01+dz*r02;
                        py=dx*r10+dy*r11+dz*r12;
                        pz=dx*r20+dy*r21+dz*r22;
                        px=(dx=px)+c1x;
                        py=(dy=py)+c1y;
                        pz=(dz=pz)+c1z;
                        pd=nx*(px-c2x)+ny*(py-c2y)+nz*(pz-c2z);
                        if(pd<=0){
                            tx=px-pd*nx-c2x;
                            ty=py-pd*ny-c2y;
                            tz=pz-pd*nz-c2z;
                            len=tx*tx+ty*ty+tz*tz;
                            if(len>r2*r2){
                                len=r2/_Math.sqrt(len);
                                tx*=len;
                                ty*=len;
                                tz*=len;
                            }
                            px=c2x+tx;
                            py=c2y+ty;
                            pz=c2z+tz;
                            manifold.addPoint(px,py,pz,-nx,-ny,-nz,pd,false);
                        }
                        px=dx*r00+dy*r01+dz*r02;
                        py=dx*r10+dy*r11+dz*r12;
                        pz=dx*r20+dy*r21+dz*r22;
                        px=(dx=px)+c1x;
                        py=(dy=py)+c1y;
                        pz=(dz=pz)+c1z;
                        pd=nx*(px-c2x)+ny*(py-c2y)+nz*(pz-c2z);
                        if(pd<=0){
                            tx=px-pd*nx-c2x;
                            ty=py-pd*ny-c2y;
                            tz=pz-pd*nz-c2z;
                            len=tx*tx+ty*ty+tz*tz;
                            if(len>r2*r2){
                                len=r2/_Math.sqrt(len);
                                tx*=len;
                                ty*=len;
                                tz*=len;
                            }
                            px=c2x+tx;
                            py=c2y+ty;
                            pz=c2z+tz;
                            manifold.addPoint(px,py,pz,-nx,-ny,-nz,pd,false);
                        }
                    }else{
                        sx=tx;
                        sy=ty;
                        sz=tz;
                        depth1=nx*(sx-c2x)+ny*(sy-c2y)+nz*(sz-c2z);
                        sx-=depth1*nx;
                        sy-=depth1*ny;
                        sz-=depth1*nz;
                        if(dot>0){
                            ex=tx+n1x*h1*2;
                            ey=ty+n1y*h1*2;
                            ez=tz+n1z*h1*2;
                        }else{
                            ex=tx-n1x*h1*2;
                            ey=ty-n1y*h1*2;
                            ez=tz-n1z*h1*2;
                        }
                        depth2=nx*(ex-c2x)+ny*(ey-c2y)+nz*(ez-c2z);
                        ex-=depth2*nx;
                        ey-=depth2*ny;
                        ez-=depth2*nz;
                        dx=c2x-sx;
                        dy=c2y-sy;
                        dz=c2z-sz;
                        tx=ex-sx;
                        ty=ey-sy;
                        tz=ez-sz;
                        a=dx*dx+dy*dy+dz*dz;
                        b=dx*tx+dy*ty+dz*tz;
                        e=tx*tx+ty*ty+tz*tz;
                        f=b*b-e*(a-r2*r2);
                        if(f<0)break;
                        f=_Math.sqrt(f);
                        t1=(b+f)/e;
                        t2=(b-f)/e;
                        if(t2<t1){
                            len=t1;
                            t1=t2;
                            t2=len;
                        }
                        if(t2>1)t2=1;
                        if(t1<0)t1=0;
                        tx=sx+(ex-sx)*t1;
                        ty=sy+(ey-sy)*t1;
                        tz=sz+(ez-sz)*t1;
                        ex=sx+(ex-sx)*t2;
                        ey=sy+(ey-sy)*t2;
                        ez=sz+(ez-sz)*t2;
                        sx=tx;
                        sy=ty;
                        sz=tz;
                        len=depth1+(depth2-depth1)*t1;
                        depth2=depth1+(depth2-depth1)*t2;
                        depth1=len;
                        if(depth1<0){
                            manifold.addPoint(sx,sy,sz,-nx,-ny,-nz,depth1,false);
                        }
                        if(depth2<0){
                            manifold.addPoint(ex,ey,ez,-nx,-ny,-nz,depth2,false);
                        }
                    }
                    break;
            }

        }

    });

    /**
     * A collision detector which detects collisions between sphere and box.
     * @author saharan
     */
    function SphereBoxCollisionDetector ( flip ) {

        CollisionDetector.call( this );
        this.flip = flip;

    }

    SphereBoxCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: SphereBoxCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {

            var s;
            var b;
            if(this.flip){
                s=(shape2);
                b=(shape1);
            }else{
                s=(shape1);
                b=(shape2);
            }

            var D = b.dimentions;

            var ps=s.position;
            var psx=ps.x;
            var psy=ps.y;
            var psz=ps.z;
            var pb=b.position;
            var pbx=pb.x;
            var pby=pb.y;
            var pbz=pb.z;
            var rad=s.radius;

            var hw=b.halfWidth;
            var hh=b.halfHeight;
            var hd=b.halfDepth;

            var dx=psx-pbx;
            var dy=psy-pby;
            var dz=psz-pbz;
            var sx=D[0]*dx+D[1]*dy+D[2]*dz;
            var sy=D[3]*dx+D[4]*dy+D[5]*dz;
            var sz=D[6]*dx+D[7]*dy+D[8]*dz;
            var cx;
            var cy;
            var cz;
            var len;
            var invLen;
            var overlap=0;
            if(sx>hw){
                sx=hw;
            }else if(sx<-hw){
                sx=-hw;
            }else{
                overlap=1;
            }
            if(sy>hh){
                sy=hh;
            }else if(sy<-hh){
                sy=-hh;
            }else{
                overlap|=2;
            }
            if(sz>hd){
                sz=hd;
            }else if(sz<-hd){
                sz=-hd;
            }else{
                overlap|=4;
            }
            if(overlap==7){
                // center of sphere is in the box
                if(sx<0){
                    dx=hw+sx;
                }else{
                    dx=hw-sx;
                }
                if(sy<0){
                    dy=hh+sy;
                }else{
                    dy=hh-sy;
                }
                if(sz<0){
                    dz=hd+sz;
                }else{
                    dz=hd-sz;
                }
                if(dx<dy){
                    if(dx<dz){
                        len=dx-hw;
                        if(sx<0){
                            sx=-hw;
                            dx=D[0];
                            dy=D[1];
                            dz=D[2];
                        }else{
                            sx=hw;
                            dx=-D[0];
                            dy=-D[1];
                            dz=-D[2];
                        }
                    }else{
                        len=dz-hd;
                        if(sz<0){
                            sz=-hd;
                            dx=D[6];
                            dy=D[7];
                            dz=D[8];
                        }else{
                            sz=hd;
                            dx=-D[6];
                            dy=-D[7];
                            dz=-D[8];
                        }
                    }
                }else{
                    if(dy<dz){
                        len=dy-hh;
                        if(sy<0){
                            sy=-hh;
                            dx=D[3];
                            dy=D[4];
                            dz=D[5];
                        }else{
                            sy=hh;
                            dx=-D[3];
                            dy=-D[4];
                            dz=-D[5];
                        }
                    }else{
                        len=dz-hd;
                        if(sz<0){
                            sz=-hd;
                            dx=D[6];
                            dy=D[7];
                            dz=D[8];
                        }else{
                            sz=hd;
                            dx=-D[6];
                            dy=-D[7];
                            dz=-D[8];
                        }
                    }
                }
                cx=pbx+sx*D[0]+sy*D[3]+sz*D[6];
                cy=pby+sx*D[1]+sy*D[4]+sz*D[7];
                cz=pbz+sx*D[2]+sy*D[5]+sz*D[8];
                manifold.addPoint(psx+rad*dx,psy+rad*dy,psz+rad*dz,dx,dy,dz,len-rad,this.flip);
            }else{
                cx=pbx+sx*D[0]+sy*D[3]+sz*D[6];
                cy=pby+sx*D[1]+sy*D[4]+sz*D[7];
                cz=pbz+sx*D[2]+sy*D[5]+sz*D[8];
                dx=cx-ps.x;
                dy=cy-ps.y;
                dz=cz-ps.z;
                len=dx*dx+dy*dy+dz*dz;
                if(len>0&&len<rad*rad){
                    len=_Math.sqrt(len);
                    invLen=1/len;
                    dx*=invLen;
                    dy*=invLen;
                    dz*=invLen;
                    manifold.addPoint(psx+rad*dx,psy+rad*dy,psz+rad*dz,dx,dy,dz,len-rad,this.flip);
                }
            }

        }

    });

    function SphereCylinderCollisionDetector ( flip ){

        CollisionDetector.call( this );
        this.flip = flip;

    }

    SphereCylinderCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: SphereCylinderCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {

            var s;
            var c;
            if( this.flip ){
                s = shape2;
                c = shape1;
            }else{
                s = shape1;
                c = shape2;
            }
            var ps = s.position;
            var psx = ps.x;
            var psy = ps.y;
            var psz = ps.z;
            var pc = c.position;
            var pcx = pc.x;
            var pcy = pc.y;
            var pcz = pc.z;
            var dirx = c.normalDirection.x;
            var diry = c.normalDirection.y;
            var dirz = c.normalDirection.z;
            var rads = s.radius;
            var radc = c.radius;
            var rad2 = rads + radc;
            var halfh = c.halfHeight;
            var dx = psx - pcx;
            var dy = psy - pcy;
            var dz = psz - pcz;
            var dot = dx * dirx + dy * diry + dz * dirz;
            if ( dot < -halfh - rads || dot > halfh + rads ) return;
            var cx = pcx + dot * dirx;
            var cy = pcy + dot * diry;
            var cz = pcz + dot * dirz;
            var d2x = psx - cx;
            var d2y = psy - cy;
            var d2z = psz - cz;
            var len = d2x * d2x + d2y * d2y + d2z * d2z;
            if ( len > rad2 * rad2 ) return;
            if ( len > radc * radc ) {
                len = radc / _Math.sqrt( len );
                d2x *= len;
                d2y *= len;
                d2z *= len;
            }
            if( dot < -halfh ) dot = -halfh;
            else if( dot > halfh ) dot = halfh;
            cx = pcx + dot * dirx + d2x;
            cy = pcy + dot * diry + d2y;
            cz = pcz + dot * dirz + d2z;
            dx = cx - psx;
            dy = cy - psy;
            dz = cz - psz;
            len = dx * dx + dy * dy + dz * dz;
            var invLen;
            if ( len > 0 && len < rads * rads ) {
                len = _Math.sqrt(len);
                invLen = 1 / len;
                dx *= invLen;
                dy *= invLen;
                dz *= invLen;
                ///result.addContactInfo(psx+dx*rads,psy+dy*rads,psz+dz*rads,dx,dy,dz,len-rads,s,c,0,0,false);
                manifold.addPoint( psx + dx * rads, psy + dy * rads, psz + dz * rads, dx, dy, dz, len - rads, this.flip );
            }

        }


    });

    /**
     * A collision detector which detects collisions between two spheres.
     * @author saharan
     */

    function SphereSphereCollisionDetector (){

        CollisionDetector.call( this );

    }

    SphereSphereCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: SphereSphereCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {

            var s1 = shape1;
            var s2 = shape2;
            var p1 = s1.position;
            var p2 = s2.position;
            var dx = p2.x - p1.x;
            var dy = p2.y - p1.y;
            var dz = p2.z - p1.z;
            var len = dx * dx + dy * dy + dz * dz;
            var r1 = s1.radius;
            var r2 = s2.radius;
            var rad = r1 + r2;
            if ( len > 0 && len < rad * rad ){
                len = _Math.sqrt( len );
                var invLen = 1 / len;
                dx *= invLen;
                dy *= invLen;
                dz *= invLen;
                manifold.addPoint( p1.x + dx * r1, p1.y + dy * r1, p1.z + dz * r1, dx, dy, dz, len - rad, false );
            }

        }

    });

    /**
     * A collision detector which detects collisions between two spheres.
     * @author saharan
     * @author lo-th
     */

    function SpherePlaneCollisionDetector ( flip ){

        CollisionDetector.call( this );

        this.flip = flip;

        this.n = new Vec3();
        this.p = new Vec3();

    }

    SpherePlaneCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: SpherePlaneCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {

            var n = this.n;
            var p = this.p;

            var s = this.flip ? shape2 : shape1;
            var pn = this.flip ? shape1 : shape2;
            var rad = s.radius;
            var len;

            n.sub( s.position, pn.position );
            //var h = _Math.dotVectors( pn.normal, n );

            n.x *= pn.normal.x;//+ rad;
            n.y *= pn.normal.y;
            n.z *= pn.normal.z;//+ rad;


            var len = n.lengthSq();

            if( len > 0 && len < rad * rad){//&& h > rad*rad ){


                len = _Math.sqrt( len );
                //len = _Math.sqrt( h );
                n.copy(pn.normal).negate();
                //n.scaleEqual( 1/len );

                //(0, -1, 0)

                //n.normalize();
                p.copy( s.position ).addScaledVector( n, rad );
                manifold.addPointVec( p, n, len - rad, this.flip );

            }

        }

    });

    /**
     * A collision detector which detects collisions between two spheres.
     * @author saharan
     * @author lo-th
     */

    function BoxPlaneCollisionDetector ( flip ){

        CollisionDetector.call( this );

        this.flip = flip;

        this.n = new Vec3();
        this.p = new Vec3();

        this.dix = new Vec3();
        this.diy = new Vec3();
        this.diz = new Vec3();

        this.cc = new Vec3();
        this.cc2 = new Vec3();

    }

    BoxPlaneCollisionDetector.prototype = Object.assign( Object.create( CollisionDetector.prototype ), {

        constructor: BoxPlaneCollisionDetector,

        detectCollision: function ( shape1, shape2, manifold ) {

            var n = this.n;
            var p = this.p;
            var cc = this.cc;

            var b = this.flip ? shape2 : shape1;
            var pn = this.flip ? shape1 : shape2;

            var D = b.dimentions;
            var hw = b.halfWidth;
            var hh = b.halfHeight;
            var hd = b.halfDepth;
            var len;
            var overlap = 0;

            this.dix.set( D[0], D[1], D[2] );
            this.diy.set( D[3], D[4], D[5] );
            this.diz.set( D[6], D[7], D[8] );

            n.sub( b.position, pn.position );

            n.x *= pn.normal.x;//+ rad;
            n.y *= pn.normal.y;
            n.z *= pn.normal.z;//+ rad;

            cc.set(
                _Math.dotVectors( this.dix, n ),
                _Math.dotVectors( this.diy, n ),
                _Math.dotVectors( this.diz, n )
            );


            if( cc.x > hw ) cc.x = hw;
            else if( cc.x < -hw ) cc.x = -hw;
            else overlap = 1;

            if( cc.y > hh ) cc.y = hh;
            else if( cc.y < -hh ) cc.y = -hh;
            else overlap |= 2;

            if( cc.z > hd ) cc.z = hd;
            else if( cc.z < -hd ) cc.z = -hd;
            else overlap |= 4;



            if( overlap === 7 ){

                // center of sphere is in the box

                n.set(
                    cc.x < 0 ? hw + cc.x : hw - cc.x,
                    cc.y < 0 ? hh + cc.y : hh - cc.y,
                    cc.z < 0 ? hd + cc.z : hd - cc.z
                );

                if( n.x < n.y ){
                    if( n.x < n.z ){
                        len = n.x - hw;
                        if( cc.x < 0 ){
                            cc.x = -hw;
                            n.copy( this.dix );
                        }else{
                            cc.x = hw;
                            n.subEqual( this.dix );
                        }
                    }else{
                        len = n.z - hd;
                        if( cc.z < 0 ){
                            cc.z = -hd;
                            n.copy( this.diz );
                        }else{
                            cc.z = hd;
                            n.subEqual( this.diz );
                        }
                    }
                }else{
                    if( n.y < n.z ){
                        len = n.y - hh;
                        if( cc.y < 0 ){
                            cc.y = -hh;
                            n.copy( this.diy );
                        }else{
                            cc.y = hh;
                            n.subEqual( this.diy );
                        }
                    }else{
                        len = n.z - hd;
                        if( cc.z < 0 ){
                            cc.z = -hd;
                            n.copy( this.diz );
                        }else{
                            cc.z = hd;
                            n.subEqual( this.diz );
                        }
                    }
                }

                p.copy( pn.position ).addScaledVector( n, 1 );
                manifold.addPointVec( p, n, len, this.flip );

            }

        }

    });

    //import { TetraShape } from '../collision/shape/TetraShape';

    /**
     * The class of physical computing world.
     * You must be added to the world physical all computing objects
     *
     * @author saharan
     * @author lo-th
     */

    // timestep, broadphase, iterations, worldscale, random, stat

    function World ( o ) {

        if( !(o instanceof Object) ) o = {};

        // this world scale defaut is 0.1 to 10 meters max for dynamique body
        this.scale = o.worldscale || 1;
        this.invScale = 1/this.scale;

        // The time between each step
        this.timeStep = o.timestep || 0.01666; // 1/60;
        this.timerate = this.timeStep * 1000;
        this.timer = null;

        this.preLoop = null;//function(){};
        this.postLoop = null;//function(){};

        // The number of iterations for constraint solvers.
        this.numIterations = o.iterations || 8;

        // It is a wide-area collision judgment that is used in order to reduce as much as possible a detailed collision judgment.
        switch( o.broadphase || 2 ){
            case 1: this.broadPhase = new BruteForceBroadPhase(); break;
            case 2: default: this.broadPhase = new SAPBroadPhase(); break;
            case 3: this.broadPhase = new DBVTBroadPhase(); break;
        }

        this.Btypes = ['None','BruteForce','Sweep & Prune', 'Bounding Volume Tree' ];
        this.broadPhaseType = this.Btypes[ o.broadphase || 2 ];

        // This is the detailed information of the performance.
        this.performance = null;
        this.isStat = o.info === undefined ? false : o.info;
        if( this.isStat ) this.performance = new InfoDisplay( this );

        /**
         * Whether the constraints randomizer is enabled or not.
         *
         * @property enableRandomizer
         * @type {Boolean}
         */
        this.enableRandomizer = o.random !== undefined ? o.random : true;

        // The rigid body list
        this.rigidBodies=null;
        // number of rigid body
        this.numRigidBodies=0;
        // The contact list
        this.contacts=null;
        this.unusedContacts=null;
        // The number of contact
        this.numContacts=0;
        // The number of contact points
        this.numContactPoints=0;
        //  The joint list
        this.joints=null;
        // The number of joints.
        this.numJoints=0;
        // The number of simulation islands.
        this.numIslands=0;


        // The gravity in the world.
        this.gravity = new Vec3(0,-9.8,0);
        if( o.gravity !== undefined ) this.gravity.fromArray( o.gravity );



        var numShapeTypes = 5;//4;//3;
        this.detectors=[];
        this.detectors.length = numShapeTypes;
        var i = numShapeTypes;
        while(i--){
            this.detectors[i]=[];
            this.detectors[i].length = numShapeTypes;
        }

        this.detectors[SHAPE_SPHERE][SHAPE_SPHERE] = new SphereSphereCollisionDetector();
        this.detectors[SHAPE_SPHERE][SHAPE_BOX] = new SphereBoxCollisionDetector(false);
        this.detectors[SHAPE_BOX][SHAPE_SPHERE] = new SphereBoxCollisionDetector(true);
        this.detectors[SHAPE_BOX][SHAPE_BOX] = new BoxBoxCollisionDetector();

        // CYLINDER add
        this.detectors[SHAPE_CYLINDER][SHAPE_CYLINDER] = new CylinderCylinderCollisionDetector();

        this.detectors[SHAPE_CYLINDER][SHAPE_BOX] = new BoxCylinderCollisionDetector(true);
        this.detectors[SHAPE_BOX][SHAPE_CYLINDER] = new BoxCylinderCollisionDetector(false);

        this.detectors[SHAPE_CYLINDER][SHAPE_SPHERE] = new SphereCylinderCollisionDetector(true);
        this.detectors[SHAPE_SPHERE][SHAPE_CYLINDER] = new SphereCylinderCollisionDetector(false);

        // PLANE add

        this.detectors[SHAPE_PLANE][SHAPE_SPHERE] = new SpherePlaneCollisionDetector(true);
        this.detectors[SHAPE_SPHERE][SHAPE_PLANE] = new SpherePlaneCollisionDetector(false);

        this.detectors[SHAPE_PLANE][SHAPE_BOX] = new BoxPlaneCollisionDetector(true);
        this.detectors[SHAPE_BOX][SHAPE_PLANE] = new BoxPlaneCollisionDetector(false);

        // TETRA add
        //this.detectors[SHAPE_TETRA][SHAPE_TETRA] = new TetraTetraCollisionDetector();


        this.randX = 65535;
        this.randA = 98765;
        this.randB = 123456789;

        this.islandRigidBodies = [];
        this.islandStack = [];
        this.islandConstraints = [];

    }

    Object.assign( World.prototype, {

        World: true,

        play: function(){

            if( this.timer !== null ) return;

            var _this = this;
            this.timer = setInterval( function(){ _this.step(); } , this.timerate );
            //this.timer = setInterval( this.loop.bind(this) , this.timerate );

        },

        stop: function(){

            if( this.timer === null ) return;

            clearInterval( this.timer );
            this.timer = null;

        },

        setGravity: function ( ar ) {

            this.gravity.fromArray( ar );

        },

        getInfo: function () {

            return this.isStat ? this.performance.show() : '';

        },

        // Reset the world and remove all rigid bodies, shapes, joints and any object from the world.
        clear:function(){

            this.stop();
            this.preLoop = null;
            this.postLoop = null;

            this.randX = 65535;

            while(this.joints!==null){
                this.removeJoint( this.joints );
            }
            while(this.contacts!==null){
                this.removeContact( this.contacts );
            }
            while(this.rigidBodies!==null){
                this.removeRigidBody( this.rigidBodies );
            }

        },
        /**
         * I'll add a rigid body to the world.
         * Rigid body that has been added will be the operands of each step.
         * @param  rigidBody  Rigid body that you want to add
         */
        addRigidBody:function( rigidBody ){

            if(rigidBody.parent){
                printError("World", "It is not possible to be added to more than one world one of the rigid body");
            }

            rigidBody.setParent( this );
            //rigidBody.awake();

            for(var shape = rigidBody.shapes; shape !== null; shape = shape.next){
                this.addShape( shape );
            }
            if(this.rigidBodies!==null)(this.rigidBodies.prev=rigidBody).next=this.rigidBodies;
            this.rigidBodies = rigidBody;
            this.numRigidBodies++;

        },
        /**
         * I will remove the rigid body from the world.
         * Rigid body that has been deleted is excluded from the calculation on a step-by-step basis.
         * @param  rigidBody  Rigid body to be removed
         */
        removeRigidBody:function( rigidBody ){

            var remove=rigidBody;
            if(remove.parent!==this)return;
            remove.awake();
            var js=remove.jointLink;
            while(js!=null){
                var joint=js.joint;
                js=js.next;
                this.removeJoint(joint);
            }
            for(var shape=rigidBody.shapes; shape!==null; shape=shape.next){
                this.removeShape(shape);
            }
            var prev=remove.prev;
            var next=remove.next;
            if(prev!==null) prev.next=next;
            if(next!==null) next.prev=prev;
            if(this.rigidBodies==remove) this.rigidBodies=next;
            remove.prev=null;
            remove.next=null;
            remove.parent=null;
            this.numRigidBodies--;

        },

        getByName: function( name ){

            var body = this.rigidBodies;
            while( body !== null ){
                if( body.name === name ) return body;
                body=body.next;
            }

            var joint = this.joints;
            while( joint !== null ){
                if( joint.name === name ) return joint;
                joint = joint.next;
            }

            return null;

        },

        /**
         * I'll add a shape to the world..
         * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
         * Shape will be added to the world automatically, please do not call from outside this method.
         * @param  shape  Shape you want to add
         */
        addShape:function ( shape ){

            if(!shape.parent || !shape.parent.parent){
                printError("World", "It is not possible to be added alone to shape world");
            }

            shape.proxy = this.broadPhase.createProxy(shape);
            shape.updateProxy();
            this.broadPhase.addProxy(shape.proxy);

        },

        /**
         * I will remove the shape from the world.
         * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
         * Shape will be added to the world automatically, please do not call from outside this method.
         * @param  shape  Shape you want to delete
         */
        removeShape: function ( shape ){

            this.broadPhase.removeProxy(shape.proxy);
            shape.proxy = null;

        },

        /**
         * I'll add a joint to the world.
         * Joint that has been added will be the operands of each step.
         * @param  shape Joint to be added
         */
        addJoint: function ( joint ) {

            if(joint.parent){
                printError("World", "It is not possible to be added to more than one world one of the joint");
            }
            if(this.joints!=null)(this.joints.prev=joint).next=this.joints;
            this.joints=joint;
            joint.setParent( this );
            this.numJoints++;
            joint.awake();
            joint.attach();

        },

        /**
         * I will remove the joint from the world.
         * Joint that has been added will be the operands of each step.
         * @param  shape Joint to be deleted
         */
        removeJoint: function ( joint ) {

            var remove=joint;
            var prev=remove.prev;
            var next=remove.next;
            if(prev!==null)prev.next=next;
            if(next!==null)next.prev=prev;
            if(this.joints==remove)this.joints=next;
            remove.prev=null;
            remove.next=null;
            this.numJoints--;
            remove.awake();
            remove.detach();
            remove.parent=null;

        },

        addContact: function ( s1, s2 ) {

            var newContact;
            if(this.unusedContacts!==null){
                newContact=this.unusedContacts;
                this.unusedContacts=this.unusedContacts.next;
            }else{
                newContact = new Contact();
            }
            newContact.attach(s1,s2);
            newContact.detector = this.detectors[s1.type][s2.type];
            if(this.contacts)(this.contacts.prev = newContact).next = this.contacts;
            this.contacts = newContact;
            this.numContacts++;

        },

        removeContact: function ( contact ) {

            var prev = contact.prev;
            var next = contact.next;
            if(next) next.prev = prev;
            if(prev) prev.next = next;
            if(this.contacts == contact) this.contacts = next;
            contact.prev = null;
            contact.next = null;
            contact.detach();
            contact.next = this.unusedContacts;
            this.unusedContacts = contact;
            this.numContacts--;

        },

        getContact: function ( b1, b2 ) {

            b1 = b1.constructor === RigidBody ? b1.name : b1;
            b2 = b2.constructor === RigidBody ? b2.name : b2;

            var n1, n2;
            var contact = this.contacts;
            while(contact!==null){
                n1 = contact.body1.name;
                n2 = contact.body2.name;
                if((n1===b1 && n2===b2) || (n2===b1 && n1===b2)){ if(contact.touching) return contact; else return null;}
                else contact = contact.next;
            }
            return null;

        },

        checkContact: function ( name1, name2 ) {

            var n1, n2;
            var contact = this.contacts;
            while(contact!==null){
                n1 = contact.body1.name || ' ';
                n2 = contact.body2.name || ' ';
                if((n1==name1 && n2==name2) || (n2==name1 && n1==name2)){ if(contact.touching) return true; else return false;}
                else contact = contact.next;
            }
            //return false;

        },

        callSleep: function( body ) {

            if( !body.allowSleep ) return false;
            if( body.linearVelocity.lengthSq() > 0.04 ) return false;
            if( body.angularVelocity.lengthSq() > 0.25 ) return false;
            return true;

        },

        /**
         * I will proceed only time step seconds time of World.
         */
        step: function () {

            var stat = this.isStat;

            if( stat ) this.performance.setTime( 0 );

            var body = this.rigidBodies;

            while( body !== null ){

                body.addedToIsland = false;

                if( body.sleeping ) body.testWakeUp();

                body = body.next;

            }



            //------------------------------------------------------
            //   UPDATE BROADPHASE CONTACT
            //------------------------------------------------------

            if( stat ) this.performance.setTime( 1 );

            this.broadPhase.detectPairs();

            var pairs = this.broadPhase.pairs;

            var i = this.broadPhase.numPairs;
            //do{
            while(i--){
                //for(var i=0, l=numPairs; i<l; i++){
                var pair = pairs[i];
                var s1;
                var s2;
                if(pair.shape1.id<pair.shape2.id){
                    s1 = pair.shape1;
                    s2 = pair.shape2;
                }else{
                    s1 = pair.shape2;
                    s2 = pair.shape1;
                }

                var link;
                if( s1.numContacts < s2.numContacts ) link = s1.contactLink;
                else link = s2.contactLink;

                var exists = false;
                while(link){
                    var contact = link.contact;
                    if( contact.shape1 == s1 && contact.shape2 == s2 ){
                        contact.persisting = true;
                        exists = true;// contact already exists
                        break;
                    }
                    link = link.next;
                }
                if(!exists){
                    this.addContact( s1, s2 );
                }
            }// while(i-- >0);

            if( stat ) this.performance.calcBroadPhase();

            //------------------------------------------------------
            //   UPDATE NARROWPHASE CONTACT
            //------------------------------------------------------

            // update & narrow phase
            this.numContactPoints = 0;
            contact = this.contacts;
            while( contact!==null ){
                if(!contact.persisting){
                    if ( contact.shape1.aabb.intersectTest( contact.shape2.aabb ) ) {
                        /*var aabb1=contact.shape1.aabb;
                         var aabb2=contact.shape2.aabb;
                         if(
                         aabb1.minX>aabb2.maxX || aabb1.maxX<aabb2.minX ||
                         aabb1.minY>aabb2.maxY || aabb1.maxY<aabb2.minY ||
                         aabb1.minZ>aabb2.maxZ || aabb1.maxZ<aabb2.minZ
                         ){*/
                        var next = contact.next;
                        this.removeContact(contact);
                        contact = next;
                        continue;
                    }
                }
                var b1 = contact.body1;
                var b2 = contact.body2;

                if( b1.isDynamic && !b1.sleeping || b2.isDynamic && !b2.sleeping ) contact.updateManifold();

                this.numContactPoints += contact.manifold.numPoints;
                contact.persisting = false;
                contact.constraint.addedToIsland = false;
                contact = contact.next;

            }

            if( stat ) this.performance.calcNarrowPhase();

            //------------------------------------------------------
            //   SOLVE ISLANDS
            //------------------------------------------------------

            var invTimeStep = 1 / this.timeStep;
            var joint;
            var constraint;

            for( joint = this.joints; joint !== null; joint = joint.next ){
                joint.addedToIsland = false;
            }


            // clear old island array
            this.islandRigidBodies = [];
            this.islandConstraints = [];
            this.islandStack = [];

            if( stat ) this.performance.setTime( 1 );

            this.numIslands = 0;

            // build and solve simulation islands

            for( var base = this.rigidBodies; base !== null; base = base.next ){

                if( base.addedToIsland || base.isStatic || base.sleeping ) continue;// ignore

                if( base.isLonely() ){// update single body
                    if( base.isDynamic ){
                        base.linearVelocity.addScaledVector( this.gravity, this.timeStep );
                        /*base.linearVelocity.x+=this.gravity.x*this.timeStep;
                         base.linearVelocity.y+=this.gravity.y*this.timeStep;
                         base.linearVelocity.z+=this.gravity.z*this.timeStep;*/
                    }
                    if( this.callSleep( base ) ) {
                        base.sleepTime += this.timeStep;
                        if( base.sleepTime > 0.5 ) base.sleep();
                        else base.updatePosition( this.timeStep );
                    }else{
                        base.sleepTime = 0;
                        base.updatePosition( this.timeStep );
                    }
                    this.numIslands++;
                    continue;
                }

                var islandNumRigidBodies = 0;
                var islandNumConstraints = 0;
                var stackCount = 1;
                // add rigid body to stack
                this.islandStack[0] = base;
                base.addedToIsland = true;

                // build an island
                do{
                    // get rigid body from stack
                    body = this.islandStack[--stackCount];
                    this.islandStack[stackCount] = null;
                    body.sleeping = false;
                    // add rigid body to the island
                    this.islandRigidBodies[islandNumRigidBodies++] = body;
                    if(body.isStatic) continue;

                    // search connections
                    for( var cs = body.contactLink; cs !== null; cs = cs.next ) {
                        var contact = cs.contact;
                        constraint = contact.constraint;
                        if( constraint.addedToIsland || !contact.touching ) continue;// ignore

                        // add constraint to the island
                        this.islandConstraints[islandNumConstraints++] = constraint;
                        constraint.addedToIsland = true;
                        var next = cs.body;

                        if(next.addedToIsland) continue;

                        // add rigid body to stack
                        this.islandStack[stackCount++] = next;
                        next.addedToIsland = true;
                    }
                    for( var js = body.jointLink; js !== null; js = js.next ) {
                        constraint = js.joint;

                        if(constraint.addedToIsland) continue;// ignore

                        // add constraint to the island
                        this.islandConstraints[islandNumConstraints++] = constraint;
                        constraint.addedToIsland = true;
                        next = js.body;
                        if( next.addedToIsland || !next.isDynamic ) continue;

                        // add rigid body to stack
                        this.islandStack[stackCount++] = next;
                        next.addedToIsland = true;
                    }
                } while( stackCount != 0 );

                // update velocities
                var gVel = new Vec3().addScaledVector( this.gravity, this.timeStep );
                /*var gx=this.gravity.x*this.timeStep;
                 var gy=this.gravity.y*this.timeStep;
                 var gz=this.gravity.z*this.timeStep;*/
                var j = islandNumRigidBodies;
                while (j--){
                    //or(var j=0, l=islandNumRigidBodies; j<l; j++){
                    body = this.islandRigidBodies[j];
                    if(body.isDynamic){
                        body.linearVelocity.addEqual(gVel);
                        /*body.linearVelocity.x+=gx;
                         body.linearVelocity.y+=gy;
                         body.linearVelocity.z+=gz;*/
                    }
                }

                // randomizing order
                if(this.enableRandomizer){
                    //for(var j=1, l=islandNumConstraints; j<l; j++){
                    j = islandNumConstraints;
                    while(j--){ if(j!==0){
                        var swap = (this.randX=(this.randX*this.randA+this.randB&0x7fffffff))/2147483648.0*j|0;
                        constraint = this.islandConstraints[j];
                        this.islandConstraints[j] = this.islandConstraints[swap];
                        this.islandConstraints[swap] = constraint;
                    }
                    }
                }

                // solve contraints

                j = islandNumConstraints;
                while(j--){
                    //for(j=0, l=islandNumConstraints; j<l; j++){
                    this.islandConstraints[j].preSolve( this.timeStep, invTimeStep );// pre-solve
                }
                var k = this.numIterations;
                while(k--){
                    //for(var k=0, l=this.numIterations; k<l; k++){
                    j = islandNumConstraints;
                    while(j--){
                        //for(j=0, m=islandNumConstraints; j<m; j++){
                        this.islandConstraints[j].solve();// main-solve
                    }
                }
                j = islandNumConstraints;
                while(j--){
                    //for(j=0, l=islandNumConstraints; j<l; j++){
                    this.islandConstraints[j].postSolve();// post-solve
                    this.islandConstraints[j] = null;// gc
                }

                // sleeping check

                var sleepTime = 10;
                j = islandNumRigidBodies;
                while(j--){
                    //for(j=0, l=islandNumRigidBodies;j<l;j++){
                    body = this.islandRigidBodies[j];
                    if( this.callSleep( body ) ){
                        body.sleepTime += this.timeStep;
                        if( body.sleepTime < sleepTime ) sleepTime = body.sleepTime;
                    }else{
                        body.sleepTime = 0;
                        sleepTime = 0;
                        continue;
                    }
                }
                if(sleepTime > 0.5){
                    // sleep the island
                    j = islandNumRigidBodies;
                    while(j--){
                        //for(j=0, l=islandNumRigidBodies;j<l;j++){
                        this.islandRigidBodies[j].sleep();
                        this.islandRigidBodies[j] = null;// gc
                    }
                }else{
                    // update positions
                    j = islandNumRigidBodies;
                    while(j--){
                        //for(j=0, l=islandNumRigidBodies;j<l;j++){
                        this.islandRigidBodies[j].updatePosition( this.timeStep );
                        this.islandRigidBodies[j] = null;// gc
                    }
                }
                this.numIslands++;
            }

            //------------------------------------------------------
            //   END SIMULATION
            //------------------------------------------------------

            if( stat ) this.performance.calcEnd();

            if( this.postLoop !== null ) this.postLoop();

        },

        // remove someting to world

        remove: function( obj ){

        },

        // add someting to world

        add: function( o ){

            o = o || {};

            var type = o.type || "box";
            if( type.constructor === String ) type = [ type ];
            var isJoint = type[0].substring( 0, 5 ) === 'joint' ? true : false;

            if( isJoint ) return this.initJoint( type[0], o );
            else return this.initBody( type, o );

        },

        initBody: function( type, o ){

            var invScale = this.invScale;

            // body dynamic or static
            var move = o.move || false;
            var kinematic = o.kinematic || false;

            // POSITION

            // body position
            var p = o.pos || [0,0,0];
            p = p.map( function(x) { return x * invScale; } );

            // shape position
            var p2 = o.posShape || [0,0,0];
            p2 = p2.map( function(x) { return x * invScale; } );

            // ROTATION

            // body rotation in degree
            var r = o.rot || [0,0,0];
            r = r.map( function(x) { return x * _Math.degtorad; } );

            // shape rotation in degree
            var r2 = o.rotShape || [0,0,0];
            r2 = r.map( function(x) { return x * _Math.degtorad; } );

            // SIZE

            // shape size
            var s = o.size === undefined ? [1,1,1] : o.size;
            if( s.length === 1 ){ s[1] = s[0]; }
            if( s.length === 2 ){ s[2] = s[0]; }
            s = s.map( function(x) { return x * invScale; } );



            // body physics settings
            var sc = new ShapeConfig();
            // The density of the shape.
            if( o.density !== undefined ) sc.density = o.density;
            // The coefficient of friction of the shape.
            if( o.friction !== undefined ) sc.friction = o.friction;
            // The coefficient of restitution of the shape.
            if( o.restitution !== undefined ) sc.restitution = o.restitution;
            // The bits of the collision groups to which the shape belongs.
            if( o.belongsTo !== undefined ) sc.belongsTo = o.belongsTo;
            // The bits of the collision groups with which the shape collides.
            if( o.collidesWith !== undefined ) sc.collidesWith = o.collidesWith;

            if(o.config !== undefined ){
                if( o.config[0] !== undefined ) sc.density = o.config[0];
                if( o.config[1] !== undefined ) sc.friction = o.config[1];
                if( o.config[2] !== undefined ) sc.restitution = o.config[2];
                if( o.config[3] !== undefined ) sc.belongsTo = o.config[3];
                if( o.config[4] !== undefined ) sc.collidesWith = o.config[4];
            }


            /* if(o.massPos){
             o.massPos = o.massPos.map(function(x) { return x * invScale; });
             sc.relativePosition.set( o.massPos[0], o.massPos[1], o.massPos[2] );
             }
             if(o.massRot){
             o.massRot = o.massRot.map(function(x) { return x * _Math.degtorad; });
             var q = new Quat().setFromEuler( o.massRot[0], o.massRot[1], o.massRot[2] );
             sc.relativeRotation = new Mat33().setQuat( q );//_Math.EulerToMatrix( o.massRot[0], o.massRot[1], o.massRot[2] );
             }*/

            var position = new Vec3( p[0], p[1], p[2] );
            var rotation = new Quat().setFromEuler( r[0], r[1], r[2] );

            // rigidbody
            var body = new RigidBody( position, rotation );
            //var body = new RigidBody( p[0], p[1], p[2], r[0], r[1], r[2], r[3], this.scale, this.invScale );

            // SHAPES

            var shape, n;

            for( var i = 0; i < type.length; i++ ){

                n = i * 3;

                if( p2[n] !== undefined ) sc.relativePosition.set( p2[n], p2[n+1], p2[n+2] );
                if( r2[n] !== undefined ) sc.relativeRotation.setQuat( new Quat().setFromEuler( r2[n], r2[n+1], r2[n+2] ) );

                switch( type[i] ){
                    case "sphere": shape = new Sphere( sc, s[n] ); break;
                    case "cylinder": shape = new Cylinder( sc, s[n], s[n+1] ); break;
                    case "box": shape = new Box( sc, s[n], s[n+1], s[n+2] ); break;
                    case "plane": shape = new Plane( sc ); break
                }

                body.addShape( shape );

            }

            // body can sleep or not
            if( o.neverSleep || kinematic) body.allowSleep = false;
            else body.allowSleep = true;

            body.isKinematic = kinematic;

            // body static or dynamic
            if( move ){

                if(o.massPos || o.massRot) body.setupMass( BODY_DYNAMIC, false );
                else body.setupMass( BODY_DYNAMIC, true );

                // body can sleep or not
                //if( o.neverSleep ) body.allowSleep = false;
                //else body.allowSleep = true;

            } else {

                body.setupMass( BODY_STATIC );

            }

            if( o.name !== undefined ) body.name = o.name;
            //else if( move ) body.name = this.numRigidBodies;

            // finaly add to physics world
            this.addRigidBody( body );

            // force sleep on not
            if( move ){
                if( o.sleep ) body.sleep();
                else body.awake();
            }

            return body;


        },

        initJoint: function( type, o ){

            //var type = type;
            var invScale = this.invScale;

            var axe1 = o.axe1 || [1,0,0];
            var axe2 = o.axe2 || [1,0,0];
            var pos1 = o.pos1 || [0,0,0];
            var pos2 = o.pos2 || [0,0,0];

            pos1 = pos1.map(function(x){ return x * invScale; });
            pos2 = pos2.map(function(x){ return x * invScale; });

            var min, max;
            if( type === "jointDistance" ){
                min = o.min || 0;
                max = o.max || 10;
                min = min * invScale;
                max = max * invScale;
            }else{
                min = o.min || 57.29578;
                max = o.max || 0;
                min = min * _Math.degtorad;
                max = max * _Math.degtorad;
            }

            var limit = o.limit || null;
            var spring = o.spring || null;
            var motor = o.motor || null;

            // joint setting
            var jc = new JointConfig();
            jc.scale = this.scale;
            jc.invScale = this.invScale;
            jc.allowCollision = o.collision || false;
            jc.localAxis1.set( axe1[0], axe1[1], axe1[2] );
            jc.localAxis2.set( axe2[0], axe2[1], axe2[2] );
            jc.localAnchorPoint1.set( pos1[0], pos1[1], pos1[2] );
            jc.localAnchorPoint2.set( pos2[0], pos2[1], pos2[2] );

            var b1 = null;
            var b2 = null;

            if( o.body1 === undefined || o.body2 === undefined ) return printError('World', "Can't add joint if attach rigidbodys not define !" );

            if ( o.body1.constructor === String ) { b1 = this.getByName( o.body1 ); }
            else if ( o.body1.constructor === Number ) { b1 = this.getByName( o.body1 ); }
            else if ( o.body1.constructor === RigidBody ) { b1 = o.body1; }

            if ( o.body2.constructor === String ) { b2 = this.getByName( o.body2 ); }
            else if ( o.body2.constructor === Number ) { b2 = this.getByName( o.body2 ); }
            else if ( o.body2.constructor === RigidBody ) { b2 = o.body2; }

            if( b1 === null || b2 === null ) return printError('World', "Can't add joint attach rigidbodys not find !" );

            jc.body1 = b1;
            jc.body2 = b2;

            var joint;
            switch( type ){
                case "jointDistance": joint = new DistanceJoint(jc, min, max);
                    if(spring !== null) joint.limitMotor.setSpring( spring[0], spring[1] );
                    if(motor !== null) joint.limitMotor.setMotor( motor[0], motor[1] );
                    break;
                case "jointHinge": case "joint": joint = new HingeJoint(jc, min, max);
                if(spring !== null) joint.limitMotor.setSpring( spring[0], spring[1] );// soften the joint ex: 100, 0.2
                if(motor !== null) joint.limitMotor.setMotor( motor[0], motor[1] );
                break;
                case "jointPrisme": joint = new PrismaticJoint(jc, min, max); break;
                case "jointSlide": joint = new SliderJoint(jc, min, max); break;
                case "jointBall": joint = new BallAndSocketJoint(jc); break;
                case "jointWheel": joint = new WheelJoint(jc);
                    if(limit !== null) joint.rotationalLimitMotor1.setLimit( limit[0], limit[1] );
                    if(spring !== null) joint.rotationalLimitMotor1.setSpring( spring[0], spring[1] );
                    if(motor !== null) joint.rotationalLimitMotor1.setMotor( motor[0], motor[1] );
                    break;
            }

            joint.name = o.name || '';
            // finaly add to physics world
            this.addJoint( joint );

            return joint;

        },


    } );

    // test version

    //export { RigidBody } from './core/RigidBody_X.js';
    //export { World } from './core/World_X.js';

    exports.Math = _Math;
    exports.Vec3 = Vec3;
    exports.Quat = Quat;
    exports.Mat33 = Mat33;
    exports.Shape = Shape;
    exports.Box = Box;
    exports.Sphere = Sphere;
    exports.Cylinder = Cylinder;
    exports.Plane = Plane;
    exports.Particle = Particle;
    exports.ShapeConfig = ShapeConfig;
    exports.LimitMotor = LimitMotor;
    exports.HingeJoint = HingeJoint;
    exports.BallAndSocketJoint = BallAndSocketJoint;
    exports.DistanceJoint = DistanceJoint;
    exports.PrismaticJoint = PrismaticJoint;
    exports.SliderJoint = SliderJoint;
    exports.WheelJoint = WheelJoint;
    exports.JointConfig = JointConfig;
    exports.RigidBody = RigidBody;
    exports.World = World;
    exports.REVISION = REVISION;
    exports.BR_NULL = BR_NULL;
    exports.BR_BRUTE_FORCE = BR_BRUTE_FORCE;
    exports.BR_SWEEP_AND_PRUNE = BR_SWEEP_AND_PRUNE;
    exports.BR_BOUNDING_VOLUME_TREE = BR_BOUNDING_VOLUME_TREE;
    exports.BODY_NULL = BODY_NULL;
    exports.BODY_DYNAMIC = BODY_DYNAMIC;
    exports.BODY_STATIC = BODY_STATIC;
    exports.BODY_KINEMATIC = BODY_KINEMATIC;
    exports.BODY_GHOST = BODY_GHOST;
    exports.SHAPE_NULL = SHAPE_NULL;
    exports.SHAPE_SPHERE = SHAPE_SPHERE;
    exports.SHAPE_BOX = SHAPE_BOX;
    exports.SHAPE_CYLINDER = SHAPE_CYLINDER;
    exports.SHAPE_PLANE = SHAPE_PLANE;
    exports.SHAPE_PARTICLE = SHAPE_PARTICLE;
    exports.SHAPE_TETRA = SHAPE_TETRA;
    exports.JOINT_NULL = JOINT_NULL;
    exports.JOINT_DISTANCE = JOINT_DISTANCE;
    exports.JOINT_BALL_AND_SOCKET = JOINT_BALL_AND_SOCKET;
    exports.JOINT_HINGE = JOINT_HINGE;
    exports.JOINT_WHEEL = JOINT_WHEEL;
    exports.JOINT_SLIDER = JOINT_SLIDER;
    exports.JOINT_PRISMATIC = JOINT_PRISMATIC;
    exports.AABB_PROX = AABB_PROX;
    exports.printError = printError;
    exports.InfoDisplay = InfoDisplay;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
/*
 * @author zz85 / https://github.com/zz85
 * @author mrdoob / http://mrdoob.com
 * Running this will allow you to drag three.js objects around the screen.
 */

THREE.DragControls = function ( _objects, _camera, _domElement ) {

    if ( _objects instanceof THREE.Camera ) {

        console.warn( 'THREE.DragControls: Constructor now expects ( objects, camera, domElement )' );
        var temp = _objects; _objects = _camera; _camera = temp;

    }

    var _plane = new THREE.Plane();
    var _raycaster = new THREE.Raycaster();

    var _mouse = new THREE.Vector2();
    var _offset = new THREE.Vector3();
    var _intersection = new THREE.Vector3();

    var _selected = null, _hovered = null;

    //

    var scope = this;

    function activate() {

        _domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
        _domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
        _domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );

    }

    function deactivate() {

        _domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        _domElement.removeEventListener( 'mousedown', onDocumentMouseDown, false );
        _domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );

    }

    function dispose() {

        deactivate();

    }

    function onDocumentMouseMove( event ) {

        event.preventDefault();

        var rect = _domElement.getBoundingClientRect();

        _mouse.x = ( (event.clientX - rect.left) / rect.width ) * 2 - 1;
        _mouse.y = - ( (event.clientY - rect.top) / rect.height ) * 2 + 1;

        _raycaster.setFromCamera( _mouse, _camera );

        if ( _selected && scope.enabled ) {

            if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

                _selected.position.copy( _intersection.sub( _offset ) );

            }

            scope.dispatchEvent( { type: 'drag', object: _selected } );

            return;

        }

        _raycaster.setFromCamera( _mouse, _camera );

        var intersects = _raycaster.intersectObjects( _objects );

        if ( intersects.length > 0 ) {

            var object = intersects[ 0 ].object;

            _plane.setFromNormalAndCoplanarPoint( _camera.getWorldDirection( _plane.normal ), object.position );

            if ( _hovered !== object ) {

                scope.dispatchEvent( { type: 'hoveron', object: object } );

                _domElement.style.cursor = 'pointer';
                _hovered = object;

            }

        } else {

            if ( _hovered !== null ) {

                scope.dispatchEvent( { type: 'hoveroff', object: _hovered } );

                _domElement.style.cursor = 'auto';
                _hovered = null;

            }

        }

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        _raycaster.setFromCamera( _mouse, _camera );

        var intersects = _raycaster.intersectObjects( _objects );

        if ( intersects.length > 0 ) {

            _selected = intersects[ 0 ].object;

            if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

                _offset.copy( _intersection ).sub( _selected.position );

            }

            _domElement.style.cursor = 'move';

            scope.dispatchEvent( { type: 'dragstart', object: _selected } );

        }


    }

    function onDocumentMouseUp( event ) {

        event.preventDefault();

        if ( _selected ) {

            scope.dispatchEvent( { type: 'dragend', object: _selected } );

            _selected = null;

        }

        _domElement.style.cursor = 'auto';

    }

    activate();

    // API

    this.enabled = true;

    this.activate = activate;
    this.deactivate = deactivate;
    this.dispose = dispose;

    // Backward compatibility

    this.setObjects = function () {

        console.error( 'THREE.DragControls: setObjects() has been removed.' );

    };

    this.on = function ( type, listener ) {

        console.warn( 'THREE.DragControls: on() has been deprecated. Use addEventListener() instead.' );
        scope.addEventListener( type, listener );

    };

    this.off = function ( type, listener ) {

        console.warn( 'THREE.DragControls: off() has been deprecated. Use removeEventListener() instead.' );
        scope.removeEventListener( type, listener );

    };

    this.notify = function ( type ) {

        console.error( 'THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead.' );
        scope.dispatchEvent( { type: type } );

    };

};

THREE.DragControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.DragControls.prototype.constructor = THREE.DragControls;
function dragStart ( event ) {
    controls.enabled = false;


    meshs.forEach(function(mesh, i) {
        if (mesh.uuid === event.object.uuid) {
            var body = bodys[i];

            meshPositionForOimo = {
                x:mesh.position.x * 0.01,
                y:mesh.position.y * 0.01,
                z:mesh.position.z * 0.01
            }
            body.position.copy(meshPositionForOimo);
            body.position.copy(meshPositionForOimo);
        }
    });

}

function dragEnd ( event ) { controls.enabled = true;
    meshs.forEach(function(mesh, i) {
        if (mesh.uuid === event.object.uuid) {
            var body = bodys[i];

            meshPositionForOimo = {
                x:mesh.position.x * 0.01,
                y:mesh.position.y * 0.01,
                z:mesh.position.z * 0.01
            }
            body.position.copy(meshPositionForOimo);
            body.position.copy(meshPositionForOimo);
        }
    });
}
function populate(gizmoType) {

    // geometrys
    gizmos['sphere'] = new THREE.BufferGeometry().fromGeometry( new THREE.SphereGeometry(1,16,10));
    gizmos['box'] = new THREE.BufferGeometry().fromGeometry( new THREE.BoxGeometry(1,1,1));

    // materials
    var materialType = 'MeshPhongMaterial';
    mats['sph']    = new THREE[materialType]( {shininess: 10, map: basicTexture(0), name:'sph', emissive: 0x787878, specular: 0x434343 } );
    mats['box']    = new THREE[materialType]( {shininess: 10, map: basicTexture(2), name:'box', emissive: 0x787878, specular: 0x434343  } );
    mats['ssph']   = new THREE[materialType]( {shininess: 10, map: basicTexture(1), name:'ssph' } );
    mats['sbox']   = new THREE[materialType]( {shininess: 10, map: basicTexture(3), name:'sbox' } );
    mats['ground'] = new THREE[materialType]( {shininess: 10, color:0x3D4143 } );

    var max = 11;

    clearMesh();
    world.clear();
    createPlateau();
    createGizmos(max, gizmoType);

}

function createPlateau() {
    addStaticBox([40, 40, 390], [-180,20,0], [0,0,0]);
    addStaticBox([40, 40, 390], [180,20,0], [0,0,0]);
    addStaticBox([400, 80, 400], [0,-40,0], [0,0,0]);
}

function addStaticBox(size, position, rotation) {
    var mesh = new THREE.Mesh( gizmos.box, mats.ground );
    mesh.scale.set( size[0], size[1], size[2] );
    mesh.position.set( position[0], position[1], position[2] );
    mesh.rotation.set( rotation[0]*ToRad, rotation[1]*ToRad, rotation[2]*ToRad );
    scene.add( mesh );
    grounds.push(mesh);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    world.add({size:size, pos:position, world:world});
}

function createGizmos(max, gizmoType) {

    if(gizmoType===1) type = 1
    else if(gizmoType===2) type = 2;

    //add object
    var x, y, z, scale, h, d;
    var i = max;

    while (i--){
        t = type;
        x = -100 + Math.random()*200;
        z = -100 + Math.random()*200;
        y = 100 + Math.random()*1000;
        scale = 10 + Math.random()*10;
        h = 10 + Math.random()*10;
        d = 10 + Math.random()*10;

        if(t===1){
            bodys[i] = world.add({type:'sphere', size:[scale*0.5], pos:[x,y,z], move:true, world:world});
            meshs[i] = new THREE.Mesh( gizmos.sphere, mats.sph );
            meshs[i].scale.set( scale*0.5, scale*0.5, scale*0.5 );
        } else if(t===2){
            bodys[i] = world.add({type:'box', size:[scale,h,d], pos:[x,y,z], move:true, world:world});
            meshs[i] = new THREE.Mesh( gizmos.box, mats.box );
            meshs[i].scale.set( scale, h, d );
        }

        meshs[i].castShadow = true;
        meshs[i].receiveShadow = true;

        scene.add( meshs[i] );
    }
}

function clearMesh(){
    var i=meshs.length;
    while (i--) scene.remove(meshs[ i ]);
    i = grounds.length;
    while (i--) scene.remove(grounds[ i ]);
    grounds = [];
    meshs = [];
    bodys=[];
}

// three var
var camera, scene, light, renderer, canvas, controls;
var meshs = [];
var grounds = [];

var antialias = true;

var gizmos = {};
var mats = {};

//oimo var
var world = null;
var bodys = [];

var fps = [0,0,0,0];
var ToRad = 0.0174532925199432957;
var type = 1;

init();
loop();

function init() {

    var n = navigator.userAgent;

    canvas = document.getElementById("canvas");

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set( 0, 160, 400 );

    controls = new THREE.OrbitControls( camera, canvas );
    controls.target.set(0, 20, 0);
    controls.maxPolarAngle = Math.PI/2;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
    controls.update();

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ canvas:canvas, precision: "mediump", antialias:antialias });
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene.add( new THREE.AmbientLight( 0x3D4143 ) );
    light = new THREE.DirectionalLight( 0xffffff , 1.4);
    light.position.set( 300, 1000, 500 );
    light.target.position.set( 0, 0, 0 );
    light.castShadow = true;
    var d = 300;
    light.shadow.camera = new THREE.OrthographicCamera( -d, d, d, -d,  500, 1600 );
    light.shadow.bias = 0.0001;
    light.shadow.mapSize.width = light.shadow.mapSize.height = 1024;
    scene.add( light );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;//THREE.BasicShadowMap;

    // background
    var buffgeoBack = new THREE.BufferGeometry();
    buffgeoBack.fromGeometry( new THREE.IcosahedronGeometry(3000,2) );
    var back = new THREE.Mesh( buffgeoBack, new THREE.MeshBasicMaterial( { map:gradTexture([[0.75,0.6,0.4,0.25], ['#000682','#0006a8','#0006cb', '#0006ef']]), side:THREE.BackSide, depthWrite: false, fog:false }  ));
    scene.add( back );

    window.addEventListener( 'resize', onWindowResize, false );

    initOimoPhysics();

    var dragControls = new THREE.DragControls( meshs, camera, renderer.domElement );
    dragControls.addEventListener('dragstart', dragStart);
    dragControls.addEventListener('dragend', dragEnd);

}

function loop() {
    updateOimoPhysics();
    renderer.render( scene, camera );
    requestAnimationFrame( loop );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function initOimoPhysics(){

    world = new OIMO.World({
        worldscale:100,
        gravity: [0,-9.8,0]
    } );
    populate(2);
}

function updateOimoPhysics() {
    if(world==null) return;

    world.step();

    var x, y, z, mesh, body, i = bodys.length;

    while (i--){
        body = bodys[i];
        mesh = meshs[i];

        if(!body.sleeping){

            mesh.position.copy(body.getPosition());
            mesh.quaternion.copy(body.getQuaternion());
            
            if(mesh.material.name === 'sbox') mesh.material = mats.box;
            if(mesh.material.name === 'ssph') mesh.material = mats.sph;
            if(mesh.material.name === 'scyl') mesh.material = mats.cyl;

            if(mesh.position.y<-100){
                x = -100 + Math.random()*200;
                z = -100 + Math.random()*200;
                y = 100 + Math.random()*1000;
                body.resetPosition(x,y,z);
            }
        } else {
            if(mesh.material.name === 'box') mesh.material = mats.sbox;
            if(mesh.material.name === 'sph') mesh.material = mats.ssph;
            if(mesh.material.name === 'cyl') mesh.material = mats.scyl;
        }
    }
}

function gradTexture(color) {
    var c = document.createElement("canvas");
    var ct = c.getContext("2d");
    var size = 1024;
    c.width = 16; c.height = size;
    var gradient = ct.createLinearGradient(0,0,0,size);
    var i = color[0].length;
    while(i--){ gradient.addColorStop(color[0][i],color[1][i]); }
    ct.fillStyle = gradient;
    ct.fillRect(0,0,16,size);
    var texture = new THREE.Texture(c);
    texture.needsUpdate = true;
    return texture;
}

function basicTexture(n) {
    var cacheUrl = 'assets/texture-water.gif';

    var image = new Image();
    image.src = cacheUrl;
    var texture = new THREE.Texture(image);
    texture.needsUpdate = true;

    return texture;
}
// var socket = new WebSocket('ws://'+window.location.host+'/server');
//
// socket.addEventListener('error', function (message) {
//     console.log("Socket connection error.");
// });
// socket.addEventListener('open', function (message) {
//     console.log("Socket connection open!");
//     socket.send('Hello mister server!');
// });
// socket.addEventListener('message', function (message) {
//     console.log("Server: " + message.data);
// });
