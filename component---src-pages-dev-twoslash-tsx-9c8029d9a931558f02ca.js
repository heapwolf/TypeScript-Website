(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/wcJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("ERkP"),r=n.n(a),i=n("rAX/"),l=function(e){var t=e.children,n=e.hideOnTouch;return Object(a.useEffect)((function(){if(Object(i.a)()){for(var e=document.getElementById("touch-suppressible");e.firstChild;)e.removeChild(e.firstChild);if(n)return;var t=document.createElement("h4");t.textContent="Section best on a computer";var a=document.createElement("p");a.textContent="This part of the site does not run well on a touch-oriented browser. We recommend switching to a computer to carry on.",e.appendChild(t),e.appendChild(a)}}),[]),r.a.createElement("div",{id:"touch-suppressible"},t)}},"73Cn":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("ERkP"),r=n("Wbzz"),i=function(e){var t=function(t){return e.active&&e.active.toLowerCase()===t?"active":""};return a.createElement("nav",{className:"navbar-sub dev-tools"},a.createElement("ul",{className:"nav"},a.createElement("li",{className:"name"},a.createElement("h3",null,"Developer Tools")),a.createElement("li",{style:{display:"none"}},a.createElement("a",{className:t("compiler api"),href:Object(r.withPrefix)("/dev/compiler")},"Compiler API")),a.createElement("li",null,a.createElement("a",{className:t("sandbox"),href:Object(r.withPrefix)("/dev/sandbox")},"Sandbox")),a.createElement("li",null,a.createElement("a",{className:t("twoslash"),href:Object(r.withPrefix)("/dev/twoslash")},"Twoslash")),a.createElement("li",null,a.createElement("a",{className:t("typescript vfs"),href:Object(r.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),a.createElement("li",null,a.createElement("a",{className:t("playground plugins"),href:Object(r.withPrefix)("/dev/playground-plugins")},"Playground Plugins")),a.createElement("li",null,a.createElement("a",{className:t("bug workbench"),href:Object(r.withPrefix)("/dev/bug-workbench")},"Bug Workbench"))))}},GLLS:function(e,t,n){"use strict";n.r(t),function(e){var a=n("a1TR"),r=n.n(a),i=(n("3yYM"),n("Ab9Y")),l=n("ERkP"),o=n.n(l),s=n("9Dj+"),c=n("Wbzz"),d=n("D2bS"),u=n("cMbP"),m=n("qkVo"),p=n("rwV4"),h=(n("pzji"),n("GO2c")),f=n("73Cn"),g=n("rAX/"),v=n("/wcJ"),b=function(t){return Object(l.useEffect)((function(){if(!Object(g.a)()){var t=document.createElement("script");t.src=Object(c.withPrefix)("/js/vs.loader.js"),t.async=!0,t.onload=function(){var t=e.require;t.config({paths:{vs:"https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",sandbox:Object(c.withPrefix)("/js/sandbox")},ignoreDuplicateModules:["vs/editor/editor.main"]}),t(["vs/editor/editor.main","vs/language/typescript/tsWorker","sandbox/index"],function(){var n=Object(i.a)(r.a.mark((function n(a,l,o){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(["vs/language/typescript/lib/typescriptServices"],function(){var t=Object(i.a)(r.a.mark((function t(n){var i,l,s,c,h,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.ts,a&&i&&o?null===(l=document.getElementById("loader").parentNode)||void 0===l||l.removeChild(document.getElementById("loader")):console.error("Error: main",!!a,"ts",!!i,"sandbox",!!o),document.getElementById("monaco-editor-embed").style.display="block",t.next=6,o.createTypeScriptSandbox({text:E[0].code,compilerOptions:{},domID:"monaco-editor-embed",supportTwoslashCompilerOptions:!0},a,i);case 6:return(s=t.sent).editor.focus(),window.sandbox=s,t.next=11,Object(u.a)({target:3},"3.7.3",!0,i,s.lzstring);case 11:c=t.sent,h=function(){var e=s.getText();c.set("index.ts",e);try{var t=Object(d.a)(e,"tsx",{tsModule:i,lzstringModule:s.lzstring,fsMap:c}),n=t.code.split("\n").map((function(e){return[{content:e}]})),a=Object(m.a)(n,{},t,{}),r=document.getElementById("twoslash-results");for(document.getElementById("twoslash-failure").style.display="none",document.getElementById("twoslash-results").innerHTML=a;r.firstChild;)r.removeChild(r.firstChild);var l=document.createElement("p");l.innerText=t.extension,l.className="extension";var o=document.createElement("div");o.innerHTML=a;var u=document.createElement("a");u.innerText="Playground",u.href=t.playgroundURL,r.appendChild(l),r.appendChild(o),r.appendChild(u)}catch(E){var p=E,h=document.getElementById("twoslash-failure");if(!h)return;for(h.style.display="block";h.firstChild;)h.removeChild(h.firstChild);var f=document.createElement("div");f.className="err-content";var g=document.createElement("h3");g.textContent="Exception Raised";var v=document.createElement("p"),b=p.name.startsWith("Error")?p.name.split("Error")[1]:p.name;v.textContent=b+p.message.split("## Code")[0],f.appendChild(g),f.appendChild(v),h.appendChild(f),console.log(E)}},f=Object(p.debounce)(h,500),s.editor.onDidChangeModelContent(f),h(),setTimeout((function(){document.querySelectorAll("#example-buttons .disabled").forEach((function(e){e.classList.remove("disabled")})),document.querySelectorAll(".html-code").forEach((function(e){s.monaco.editor.colorize(e.textContent||"","html",{tabSize:2}).then((function(t){e.innerHTML=t}))})),document.querySelectorAll(".ts-code").forEach((function(e){s.monaco.editor.colorize(e.textContent||"","typescript",{tabSize:2}).then((function(t){e.innerHTML=t}))}))}),300);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}())},document.body.appendChild(t)}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:"Developers - Twoslash Code Samples",description:"Learn about the TypeScript code sample library twoslash. Used for transpiling, providing hover to identifiers and compiler-driven error states.",lang:"en"},o.a.createElement("div",{id:"dev"},o.a.createElement(f.a,{active:"twoslash"}),o.a.createElement("div",{className:"raised content main-content-block"},o.a.createElement("div",{className:"split-fifty"},o.a.createElement("div",null,o.a.createElement("h1",{style:{marginTop:"20px"}},"TypeScript Twoslash"),o.a.createElement("p",null,"A markup format for TypeScript code, ideal for creating self-contained code samples which let the TypeScript compiler do the extra leg-work."),o.a.createElement("p",null,"If you know TypeScript, you basically know twoslash."),o.a.createElement("p",null,"Twoslash adds the ability to declare tsconfig options inline, split a sample into multiple files and a few other useful commands. You can see the full API"," ",o.a.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher"},"inside the README"))),o.a.createElement("div",{style:{paddingTop:"4.5rem"}},o.a.createElement("p",null,"The Twoslash markup language helps with:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Enforcing accurate errors from a TypeScript code sample, and leaving the messaging to the compiler"),o.a.createElement("li",null,"Splitting a code sample to hide distracting code"),o.a.createElement("li",null,"Declaratively highlighting symbols in your code sample"),o.a.createElement("li",null,"Replacing code with the results of transpilation to different files, or ancillary files like .d.ts or .map files"),o.a.createElement("li",null,"Handle multi-file imports in a single code sample"),o.a.createElement("li",null,"Creating a playground link for the code"))))),o.a.createElement("div",{className:"raised content main-content-block",style:{maxWidth:"90%"}},o.a.createElement("div",{className:"fivehundred",style:{flex:1}},o.a.createElement(v.a,null,o.a.createElement("h3",{style:{marginTop:"0"}},"Markup"),o.a.createElement("p",{id:"exampleBlurb"},E[0].blurb),o.a.createElement("div",{id:"loader"},o.a.createElement("div",{className:"lds-grid"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("p",{id:"loading-message",role:"status"},"Downloading Sandbox...")),o.a.createElement("div",{style:{height:"300px",display:"none"},id:"monaco-editor-embed"}),o.a.createElement("div",{id:"example-buttons"},E.map((function(e){return o.a.createElement("div",{className:"button disabled",onClick:function(t){t.target.classList.contains("disabled")||(document.getElementById("exampleBlurb").innerText=e.blurb,window.sandbox.setText(e.code))}},e.name)}))))),o.a.createElement("div",{style:{paddingLeft:"20px",borderLeft:"1px solid gray",position:"relative",flex:1,overflow:"auto"}},o.a.createElement(v.a,null,o.a.createElement("h3",{style:{marginTop:"0"}},"Results"),o.a.createElement("div",{id:"twoslash-results"}),o.a.createElement("div",{id:"twoslash-failure"})))),o.a.createElement("div",{className:"raised main-content-block"},o.a.createElement("h2",null,"Usage"),o.a.createElement("p",null,"Twoslash's usage guide is available on the npm README at"," ",o.a.createElement("a",{href:"https://www.npmjs.com/package/@typescript/twoslash"},o.a.createElement("code",null,"@typescript/twoslash")),".")))))};t.default=function(e){return o.a.createElement(h.a,{locale:"en"},o.a.createElement(b,e))};var E=[{name:"Highlights runtime types",blurb:"See how TS Twoslash will grab the highlight information for identifiers in your code",code:"// @errors: 2532\ndeclare const quantumString: string | undefined;\n\n// Right now this string is in two states, hover below to see\nquantumString\n  \nif (quantumString) {\n  // However, in here we now have a different type\n  // you can verify by hovering below\n  quantumString.length;\n}\n    "},{name:"Show Errors",blurb:"Twoslash will help highlight compiler error messages",code:"// @errors: 7006\nfunction fn(s) {\n  console.log(s.subtr(3))\n}\n\nfn(42)"},{name:"Set Compiler Flags",blurb:"You can define compiler flags inline in a code sample which are removed from the output",code:"// @noImplicitAny: false\n// This will not throw because of the noImplicitAny\nfunction fn(s) {\n  console.log(s.subtr(3))\n}\n\nfn(42);"},{name:"Trims code",blurb:"You can write code to help it compile in the sample which is hidden in the output",code:'interface IdLabel {id: number, /* some fields */ }\ninterface NameLabel {name: string, /* other fields */ }\ntype NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;\n// This comment should not be included\n\n// ---cut---\nfunction createLabel<T extends number | string>(idOrName: T): NameOrId<T> {\n  throw "unimplemented"\n}\n\nlet a = createLabel("typescript");'},{name:"Show the JS",blurb:"Use @showEmit to show the JS files",code:"// @showEmit\nexport function getStringLength(value: string) {\n  return value\n}\n"},{name:"Show the DTS",blurb:"Use @showEmittedFile to set the d.ts file to be the result code",code:"// @declaration: true\n// @showEmit\n// @showEmittedFile: index.d.ts\n/**\n * Gets the length of a string\n * @param value a string\n */\nexport function getStringLength(value: string) {\n  return value\n}\n"},{name:"Highlights",blurb:"Highlight some code in the editor",code:'function greet(person: string, date: Date) {\n  console.log(`Hello ${person}, today is ${date.toDateString()}!`);\n}\n\ngreet("Maddison", new Date());\n//                ^^^^^^^^^^\n'}]}.call(this,n("fRV1"))},pzji:function(e,t,n){},qkVo:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("t8gp");function r(e,t){var n=[],a=!1;e.forEach((function(e){"lsp"===e.classes?(n.push({text:"⇍/data-lsp⇏",index:e.end}),n.push({text:"⇍data-lsp lsp=⇯"+(e.lsp||"")+"⇯⇏",index:e.begin})):"err"===e.classes?a=!0:"query"===e.classes&&(n.push({text:"⇍/data-highlight⇏",index:e.end}),n.push({text:"⇍data-highlight'⇏",index:e.begin}))}));var r=(" "+t).slice(1);return n.sort((function(e,t){return t.index-e.index})).forEach((function(e){var t,n,a,i;t=r,n=e.index,a=0,i=e.text,r=t.slice(0,n)+i+t.slice(n+Math.abs(a))})),a&&(r="⇍data-err⇏"+r+"⇍/data-err⇏"),i(l(r))}var i=function(e){return e.replace(/⇍/g,"<").replace(/⇏/g,">").replace(/⇯/g,"'")};function l(e){var t={"<":"lt",'"':"quot","'":"apos","&":"amp","\r":"#10","\n":"#13"};return e.toString().replace(/[<"'\r\n&]/g,(function(e){return"&"+t[e]+";"}))}function o(e,t,n,i){var o,c="",d=(o=i,!!Object.keys(o).find((function(e){return!!e.includes("-")||NaN!==parseInt(e)}))),u=function(e){var t=[];return Object.keys(e).find((function(e){if(NaN!==parseInt(e)&&t.push(parseInt(e)),e.includes("-"))for(var n=e.split("-"),a=n[0],r=n[1],i=parseInt(r)+1,l=parseInt(a);l<i;l++)t.push(l)})),function(e){return t.includes(e)}}(i),m=t.bg||"#fff",p=t.fg||"black";c+='<pre class="shiki twoslash lsp" style="background-color: '+m+"; color: "+p+'">',t.langId&&(c+='<div class="language-id">'+t.langId+"</div>"),c+="<div class='code-container'><code>";var h,f=s(n.errors,(function(e){return e.line}))||new Map,g=s(n.staticQuickInfos,(function(e){return e.line}))||new Map,v=s(n.queries,(function(e){return e.line-1}))||new Map,b=0;e.forEach((function(t,n){var i=f.get(n)||[],o=g.get(n)||[],s=v.get(n)||[];if(0===t.length&&0===n)b+=1;else if(0===t.length)b+=1,c+="\n";else{var m=d?u(n)?" highlight":" dim":"";c+="<div class='line"+m+"'>";var p=0;t.forEach((function(e){var t="",n=function(t){return function(n){return t<=n.character&&t+e.content.length>=n.character+n.length}},d=i.filter(n(p)),u=o.filter(n(p)),m=s.filter(n(p)),h=[].concat(Object(a.a)(d),Object(a.a)(u),Object(a.a)(m)).sort((function(e,t){return(e.start||0)-(t.start||0)}));h.length?t+=r(h.map((function(e){var t={begin:e.start-b,end:e.start+e.length-b};return t.begin<0||t.end,"renderedMessage"in e&&(t.classes="err"),"kind"in e&&(t.classes=e.kind),"targetString"in e&&(t.classes="lsp",t.lsp=l(e.text)),t})),e.content):t+=e.content.replace(/</g,"⇍").replace(/>/g,"⇏").replace(/'/g,"⇯");c+='<span style="color: '+e.color+'">'+t+"</span>",p+=e.content.length,b+=e.content.length})),c+="</div>",b+=1}if(i.length){var h=i.map((function(e){return function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}(e.renderedMessage)})).join("</br>"),E=i.map((function(e){return e.code})).join("<br/>");c+='<span class="error"><span>'+h+'</span><span class="code">'+E+"</span></span>",c+='<span class="error-behind">'+h+"</span>"}s.length&&(s.forEach((function(t){switch(t.kind){case"query":var a,r,i,l=(null===(a=(e[n-1]||[])[0])||void 0===a?void 0:a.content)||"",o=l.slice(0,(null===(r=/\S/.exec(l))||void 0===r?void 0:r.index)||0),s=o+"//"+"".padStart(t.offset-2-o.length),d=null===(i=t.text)||void 0===i?void 0:i.split("\n").map((function(e,t){return 0!==t?s+e:e})).join("\n");c+="<span class='query'>"+s+"^ = "+d+"</span>";break;case"completions":if(t.completions){var u=t.completions.filter((function(e){return e.name.startsWith(t.completionsPrefix||"____")})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){var n,a,r=e.name.substr((null===(n=t.completionsPrefix)||void 0===n?void 0:n.length)||0),i="<span><span class='result-found'>"+(t.completionsPrefix||"")+"</span>"+r+"<span>";return"<li class='"+((null===(a=e.kindModifiers)||void 0===a?void 0:a.split(",").includes("deprecated"))?"deprecated":"")+"'>"+i+"</li>"})).join("");c+="".padStart(t.offset)+"<span class='inline-completions'><ul class='dropdown'>"+u+"</ul></span>"}else c+="<span class='query'>//"+"".padStart(t.offset-2)+"^ - No completions found</span>"}})),c+="\n")})),h=c.replace(/\n*$/,""),c=h.replace(/⇍/g,"&lt;").replace(/⇏/g,"&gt;").replace(/⇯/g,"&apos;");var E="<a href='"+n.playgroundURL+"'>Try</a>";return c+="</code>"+E+"</div></pre>"}function s(e,t){var n=new Map;return e.forEach((function(e){var a=t(e),r=n.get(a);r?r.push(e):n.set(a,[e])})),n}},"rAX/":function(e,t,n){"use strict";function a(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var t="undefined"!=typeof window&&window.matchMedia&&matchMedia("(pointer:coarse)");if(t&&"(pointer:coarse)"===t.media)e=!!t.matches;else if("orientation"in window)e=!0;else{var n=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(n)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(n)}}return e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-dev-twoslash-tsx-9c8029d9a931558f02ca.js.map