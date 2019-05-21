var color = "blue";
if($.cookie("myPortalSkin")){
    color = $.cookie("myPortalSkin");
}
if(color=="blue"){
    JSLoader.loadStyleSheet(basePath +"js/bootstrap/css/bootstrap.min.css");
    JSLoader.loadStyleSheet(basePath +"css/skins/other-blue.css");
}else{
    JSLoader.loadStyleSheet(basePath +"js/bootstrap/css/bootstrap.min."+color+".css");
    JSLoader.loadStyleSheet(basePath +"css/skins/other-"+color+".css");
}
JSLoader.loadStyleSheet(basePath +"css/main.css");