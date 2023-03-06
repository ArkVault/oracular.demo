"use strict";var __awaiter=this&&this.__awaiter||function(e,o,a,c){return new(a=a||Promise)(function(r,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function n(e){try{s(c.throw(e))}catch(e){t(e)}}function s(e){var t;e.done?r(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(i,n)}s((c=c.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(i,n){var s,o,a,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(r){return function(e){var t=[r,e];if(s)throw new TypeError("Generator is already executing.");for(;c;)try{if(s=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,o=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=n.call(i,c)}catch(e){t=[6,e],o=0}finally{s=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.zipApp=exports.download=void 0,require("path")),fs=require("fs-extra"),AdmZip=require("adm-zip"),fetch=require("cross-fetch"),child_process_1=require("child_process"),i18n_utils_1=(require("isomorphic-form-data"),require("../../../global"),require("../i18n-utils")),utils_1=require("../../utils"),utils_2=require("./utils"),downloadTimes=0,prodDistFolder="dist-prod",isReleasePackage=fs.existsSync(path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER,"widgets/widgets-info-existed.json"));function download(o,a){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,s;return __generator(this,function(e){switch(e.label){case 0:return[4,(0,utils_1.checkToken)(o.query.token)];case 1:if(!e.sent())return o.body="Please log in.",[2];t=o.params.appId,r=o.query.locale||"en",e.label=2;case 2:return e.trys.push([2,4,,5]),[4,createZipForApp(t,r,null)];case 3:return(n=e.sent(),s=n.message,i=n.fileName,n=n.zip,s)?(o.body=s,[2]):(i&&(o.response.set("Content-disposition","attachment; filename="+i+".zip"),o.body=n.toBuffer()),[3,5]);case 4:return s=e.sent(),console.error(s),[3,5];case 5:return[4,a()];case 6:return e.sent(),[2]}})})}function zipApp(i,n,s){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),fs.existsSync(n)?(console.log("".concat(n," exists, please use a new name.")),[2]):[4,createZipForApp(i,"en",s)];case 1:return(t=e.sent(),r=t.message,t=t.zip,r)?(console.log(r),[2]):(t&&t.writeZip(n,function(e){e?console.error(e):console.log("Done.")}),[3,3]);case 2:return r=e.sent(),console.error(r),[3,3];case 3:return[2]}})})}function createZipForApp(m,g,y){var b;return __awaiter(this,void 0,void 0,function(){var t,r,i,n,s,o,a,c,u,p,l,f,h,d,j,_;return __generator(this,function(e){switch(e.label){case 0:return(r=path.join(utils_2.SERVER_PATH,"temp"),t=path.join(utils_2.SERVER_PATH,"public/apps",m),r=path.join(r,m),fs.existsSync(t))?(s=(n=JSON).parse,[4,fs.readFile(path.join(t,"config.json"),"utf-8")]):[2,(0,i18n_utils_1.getMessage)("notFound",g).then(function(e){return{message:e,fileName:null,zip:null}})];case 1:return i=s.apply(n,[e.sent()]),c=(a=JSON).parse,[4,fs.readFile(path.join(t,"info.json"),"utf-8")];case 2:return(o=c.apply(a,[e.sent()]),u=path.join(t,"download-times.json"),fs.existsSync(u))?(l=parseInt,[4,fs.readFile(u,"utf-8")]):[3,4];case 3:return p=l.apply(void 0,[e.sent()]),[3,5];case 4:p=0,e.label=5;case 5:return downloadTimes=p,downloadTimes++,!0===i.__not_publish?[2,(0,i18n_utils_1.getMessage)("notPublished",g).then(function(e){return{message:e,fileName:null,zip:null}})]:[4,fs.pathExists(r)];case 6:return e.sent()?[4,fs.remove(r)]:[3,8];case 7:e.sent(),e.label=8;case 8:return[4,fs.ensureDir(r)];case 9:return e.sent(),[4,compileWidgets(i)];case 10:return e.sent(),[4,copyAppCode(r,i,o.title)];case 11:return e.sent(),h=(f=JSON).parse,[4,fs.readFile((0,utils_1.getBuilderSettingFilePath)(),"utf-8")];case 12:return d=h.apply(f,[e.sent()]),null!=(b=d.devEnv[global.hostEnv])&&b.isWebTier?i.attributes.isWebTier=!0:i.attributes.isWebTier=!1,i.attributes.clientId=y||"",i.attributes.title=o.title,i.attributes.description=o.snippet,i.attributes.type=o.type,i.attributes.thumbnail=(null==o?void 0:o.thumbnail)||null,d=path.join(r,getCDNString()),[4,fs.writeFile(path.join(d,"config.json"),JSON.stringify(i,null,2),"utf-8")];case 13:return e.sent(),[4,fs.copy(path.join(t,"resources"),path.join(d,"resources"))];case 14:return(e.sent(),fs.existsSync(path.join(t,"thumbnail")))?[4,fs.copy(path.join(t,"thumbnail"),path.join(d,"thumbnail"))]:[3,16];case 15:e.sent(),e.label=16;case 16:return(j=new AdmZip).addLocalFolder(r),_=encodeURI(o.title),fs.writeFileSync(u,downloadTimes+"","utf-8"),[2,Promise.resolve({message:null,fileName:_,zip:j})]}})})}function copyAppCode(s,o,a){return __awaiter(this,void 0,void 0,function(){var t,r,i,n;return __generator(this,function(e){switch(e.label){case 0:return t=path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER),r=path.join(utils_2.CLIENT_PATH,prodDistFolder),[4,fs.copy(path.join(t,"experience/index.html"),path.join(s,"index.html"))];case 1:return e.sent(),[4,fs.copy(path.join(t,"experience/web.config"),path.join(s,"web.config"))];case 2:return e.sent(),[4,fixIndexFile(path.join(s,"index.html"),a)];case 3:return(e.sent(),"production"===process.env.NODE_ENV&&fs.existsSync(path.join(t,"service-worker.prod.js")))?[4,fs.copy(path.join(t,"service-worker.prod.js"),path.join(s,"service-worker.js"))]:[3,5];case 4:return e.sent(),[3,7];case 5:return[4,fs.copy(path.join(t,"service-worker.js"),path.join(s,"service-worker.js"))];case 6:e.sent(),e.label=7;case 7:return i=path.join(s,getCDNString()),[4,fs.copy(path.join(t,"experience/index.js"),path.join(i,"index.js"))];case 8:return e.sent(),[4,fs.copy(path.join(t,"experience/assets"),path.join(i,"assets"))];case 9:return e.sent(),[4,fs.copy(path.join(t,"service-worker-registration.js"),path.join(i,"service-worker-registration.js"))];case 10:return e.sent(),[4,fixServiceWorkerFile(path.join(i,"service-worker-registration.js"))];case 11:return e.sent(),[4,fs.copy(path.join(t,"jimu-core"),path.join(i,"jimu-core"))];case 12:return e.sent(),[4,fs.copy(path.join(t,"jimu-ui"),path.join(i,"jimu-ui"))];case 13:return e.sent(),[4,fs.copy(path.join(t,"jimu-layouts"),path.join(i,"jimu-layouts"))];case 14:return e.sent(),[4,fs.copy(path.join(t,"jimu-arcgis"),path.join(i,"jimu-arcgis"))];case 15:return e.sent(),[4,fs.copy(path.join(t,"jimu-theme"),path.join(i,"jimu-theme"))];case 16:return e.sent(),[4,fs.copy(path.join(t,"jimu-for-builder"),path.join(i,"jimu-for-builder"))];case 17:return e.sent(),[4,fs.copy(path.join(t,"calcite-components"),path.join(i,"calcite-components"))];case 18:return e.sent(),[4,fs.copy(path.join(t,o.theme),path.join(i,o.theme))];case 19:return e.sent(),[4,fs.pathExists(path.join(t,"arcgis-charts"))];case 20:return e.sent()?[4,fs.copy(path.join(t,"arcgis-charts"),path.join(i,"arcgis-charts"))]:[3,22];case 21:e.sent(),e.label=22;case 22:return n=(0,utils_2.getWidgetsUriFromAppConfig)(o),[4,Promise.all(n.coreWidgetsUri.map(function(e){return fs.copy(path.join(t,e),path.join(i,e))}).concat(n.customWidgetsUri.map(function(e){return"production"===process.env.NODE_ENV&&isReleasePackage?fs.copy(path.join(r,e),path.join(i,e)):fs.copy(path.join(t,e),path.join(i,e))})))];case 23:return(e.sent(),fs.existsSync(path.join(t,utils_2.WIDGET_INFO_PATH)))?[4,fs.copy(path.join(t,utils_2.WIDGET_INFO_PATH),path.join(i,utils_2.WIDGET_INFO_PATH))]:[3,25];case 24:e.sent(),e.label=25;case 25:return fs.existsSync(path.join(t,utils_2.WIDGET_CHUNKS_PATH))?[4,fs.copy(path.join(t,utils_2.WIDGET_CHUNKS_PATH),path.join(i,utils_2.WIDGET_CHUNKS_PATH))]:[3,27];case 26:e.sent(),e.label=27;case 27:return[4,Promise.all(n.coreWidgetsUri.concat(n.customWidgetsUri).map(function(e){var t=path.join(i,e,"src"),e=path.join(i,e,"tests"),r=[];return fs.existsSync(t)&&r.push(fs.remove(t)),fs.existsSync(e)&&r.push(fs.remove(e)),Promise.all(r)}))];case 28:return e.sent(),[2]}})})}function compileWidgets(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return"production"!==process.env.NODE_ENV||!isReleasePackage||0===(0,utils_2.getWidgetsUriFromAppConfig)(t).customWidgetsUri.length?[2,Promise.resolve()]:((0,child_process_1.execSync)("npm run build:prod",{cwd:utils_2.CLIENT_PATH}),[2])})})}function fixIndexFile(r,i){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fs.readFile(r,"utf-8")];case 1:return t=(t=e.sent()).replace(/<base.*\/>/,'<base href="./'.concat(getCDNString(),'/"/>')).replace('"isOutOfExb": false','"isOutOfExb": true').replace('"isDevEdition": false','"isDevEdition": true').replace('"useStructuralUrl": true','"useStructuralUrl": false').replace(/"buildNumber": ".*"/,'"buildNumber": "'.concat(downloadTimes,'"')).replace('"appFolderName": "experience"','"appFolderName": "."').replace('<script src="../jimu-core/init.js"><\/script>','<script src="./jimu-core/init.js"><\/script>').replace("<title>Experience</title>","<title>".concat(i,"</title>")),[4,fs.writeFile(r,t,"utf-8")];case 2:return e.sent(),[2]}})})}function fixServiceWorkerFile(r){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fs.readFile(r,"utf-8")];case 1:return t=(t=e.sent()).replace("register(window.jimuConfig.mountPath + 'service-worker.js')","register('../../service-worker.js')"),[4,fs.writeFile(r,t,"utf-8")];case 2:return e.sent(),[2]}})})}function getCDNString(){return"cdn/".concat(downloadTimes)}global.fetch=fetch,exports.download=download,exports.zipApp=zipApp;