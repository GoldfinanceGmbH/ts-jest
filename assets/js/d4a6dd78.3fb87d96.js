"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5504],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),f=o,d=b["".concat(s,".").concat(f)]||b[f]||u[f]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return b}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),l=["components"],i={title:"Babel Config option"},s=void 0,p={unversionedId:"getting-started/options/babelConfig",id:"version-27.0/getting-started/options/babelConfig",isDocsHomePage:!1,title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/versioned_docs/version-27.0/getting-started/options/babelConfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/babelConfig",permalink:"/ts-jest/docs/27.0/getting-started/options/babelConfig",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/babelConfig.md",tags:[],version:"27.0",frontMatter:{title:"Babel Config option"}},c=[{value:"Examples",id:"examples",children:[{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",children:[],level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",children:[],level:4},{value:"Inline compiler options",id:"inline-compiler-options",children:[],level:4}],level:3}],u={toc:c};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."),(0,r.kt)("p",null,"The option is ",(0,r.kt)("inlineCode",{parentName:"p"},"babelConfig")," and it works pretty much as the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig")," option, except that it is disabled by default. Here is the possible values it can take:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false"),": the default, disables the use of Babel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),": enables Babel processing. ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-jest")," will try to find a ",(0,r.kt)("inlineCode",{parentName:"li"},".babelrc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".babelrc.js"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file or a ",(0,r.kt)("inlineCode",{parentName:"li"},"babel")," section in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file of your project and use it as the config to pass to ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-jest")," processor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ ... }"),": inline ",(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/next/options"},"Babel options"),". You can also set this to an empty object (",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),") so that the default Babel config file is not used.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"use-default-babelrc-file"},"Use default ",(0,r.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: true,\n    },\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": true\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"path-to-a-babelrc-file"},"Path to a ",(0,r.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,r.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<rootDir>")," in the path, or use an absolute path (this last one is strongly not recommended)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: 'babelrc.test.js',\n    },\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// OR jest.config.js with require for babelrc\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: require('./babelrc.test.js'),\n    },\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": "babelrc.test.js"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/options"},"Babel options")," to know what can be used there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: {\n        comments: false,\n        plugins: ['@babel/plugin-transform-for-of'],\n      },\n    },\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": {\n          "comments": false,\n          "plugins": ["@babel/plugin-transform-for-of"]\n        }\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);