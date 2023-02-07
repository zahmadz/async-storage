"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[965],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2402:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s=void 0,c={unversionedId:"help/troubleshooting",id:"help/troubleshooting",title:"Troubleshooting",description:"Async await doesn't resolve",source:"@site/docs/help/Troubleshooting.md",sourceDirName:"help",slug:"/help/troubleshooting",permalink:"/async-storage/docs/help/troubleshooting",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/help/Troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Community Packages",permalink:"/async-storage/docs/debugging/communityPackages"}},u=[{value:"Async await doesn&#39;t resolve",id:"async-await-doesnt-resolve",children:[],level:2},{value:"iOS CocoaPods issues",id:"ios-cocoapods-issues",children:[],level:2},{value:"iOS fatal error: &#39;React/RCTBridgeModule.h&#39; file not found",id:"ios-fatal-error-reactrctbridgemoduleh-file-not-found",children:[],level:2},{value:"@RNC/AsyncStorage: NativeModule: AsyncStorage is null",id:"rncasyncstorage-nativemodule-asyncstorage-is-null",children:[{value:"iOS",id:"ios",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"async-await-doesnt-resolve"},"Async await doesn't resolve"),(0,a.kt)("p",null,"If you're having issues with ",(0,a.kt)("inlineCode",{parentName:"p"},"getItem()")," and friends not resolving, check if\n",(0,a.kt)("inlineCode",{parentName:"p"},"inlineRequires")," is enabled in ",(0,a.kt)("inlineCode",{parentName:"p"},"metro.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  transformer: {\n    getTransformOptions: async () => ({\n      transform: {\n        experimentalImportSupport: false,\n        inlineRequires: true,\n      },\n    }),\n  },\n};\n")),(0,a.kt)("p",null,"If disabling it resolves the issue, it's likely that you hit a circular import\nchain. You can try excluding ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-native-async-storage/async-storage")," from\nbeing inlined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," module.exports = {\n   transformer: {\n     getTransformOptions: async () => ({\n       transform: {\n         experimentalImportSupport: false,\n         inlineRequires: true,\n+        nonInlinedRequires: [\n+          \"@react-native-async-storage/async-storage\",\n+          'React',\n+          'react',\n+          'react-native',\n+        ],\n       },\n     }),\n   },\n };\n")),(0,a.kt)("p",null,"If this doesn't resolve the issue, you need to figure out what is causing the\ncyclic chain. There are tools, such as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/metro-plugin-cyclic-dependencies-detector#rnx-kitmetro-plugin-cyclic-dependencies-detector"},"@rnx-kit/metro-plugin-cyclic-dependencies-detector"),",\nthat can help you debug this."),(0,a.kt)("h2",{id:"ios-cocoapods-issues"},"[iOS]"," CocoaPods issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Delete the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," folder(s) from your project"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")),(0,a.kt)("li",{parentName:"ol"},"If you're using CocoaPods:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Make sure your ",(0,a.kt)("inlineCode",{parentName:"li"},"Podfile")," does ",(0,a.kt)("em",{parentName:"li"},"not")," have an entry for ",(0,a.kt)("inlineCode",{parentName:"li"},"RNCAsyncStorage"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pod install")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pod update RNCAsyncStorage")))),(0,a.kt)("li",{parentName:"ol"},"Open your Xcode project"),(0,a.kt)("li",{parentName:"ol"},"Press \u21e7\u2325\u2318K to clean your build folder"),(0,a.kt)("li",{parentName:"ol"},"Build and run your project")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that every time ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-native-async-storage/async-storage")," gets updated,\nyou must also run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," otherwise you'll still be using\nthe previous version.")),(0,a.kt)("h2",{id:"ios-fatal-error-reactrctbridgemoduleh-file-not-found"},"[iOS]"," fatal error: 'React/RCTBridgeModule.h' file not found"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"info In file included from /~/@react-native-async-storage/async-storage/ios/RNCAsyncStorage.m:8:\n/~/@react-native-async-storage/async-storage/ios/RNCAsyncStorage.h:8:9: fatal error: 'React/RCTBridgeModule.h' file not found\n\ninfo #import <React/RCTBridgeModule.h>\n             ^~~~~~~~~~~~~~~~~~~~~~~~~\n\ninfo 1 error generated.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure that you've run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," (see\nalso ",(0,a.kt)("a",{parentName:"p",href:"#ios-cocoapods-issues"},"CocoaPods issues"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," dependencies are ",(0,a.kt)("em",{parentName:"p"},"not")," removed from projects. Without\nthe target dependency set, Xcode may build things out of order and the React\nheaders will not be installed when AsyncStorage is built."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-Podfile"},'post_install do |installer|\n  installer.pods_project.targets.each do |target|\n    if target.name == "React"\n      target.remove_from_project\n    end\n  end\nend\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Try switching back to the legacy build system in Xcode. You can find it in\nFile > Project/Workspace Settings sheet."))),(0,a.kt)("h2",{id:"rncasyncstorage-nativemodule-asyncstorage-is-null"},"[@RNC/AsyncStorage]",": NativeModule: AsyncStorage is null"),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("p",null,"This error means that AsyncStorage was unable to find its native module. This\noccurs because AsyncStorage was not linked into the final app bundle."),(0,a.kt)("p",null,"Make sure that you've run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," (see\nalso ",(0,a.kt)("a",{parentName:"p",href:"#ios-cocoapods-issues"},"CocoaPods issues"),")."))}d.isMDXComponent=!0}}]);