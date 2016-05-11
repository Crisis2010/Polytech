// ==UserScript==
// @name           AutoUpdateComments
// @version        2.0
// @updateURL	   https://github.com/NikitaCartes/Tabun/raw/master/AutoUpdateComments.user.js
// @downloadURL    https://github.com/NikitaCartes/Tabun/raw/master/AutoUpdateComments.user.js
// @grant none
// @author         NikitaCartes и ультрапуся Farxial
// @description    Автоматическое обновление комментариев
// @include        https://tabun.everypony.ru/talk/read/*
// @include        http://tabun.everypony.ru/talk/read/*
// @include        https://tabun.everypony.ru/blog/*
// @include        http://tabun.everypony.ru/blog/*
// @require        http://code.jquery.com/jquery.min.js
// ==/UserScript==


$(document).ready(function(){
	var loc = location.pathname.match(/^\/(blog|talk)(\/([\w\-]+)|read)?\/(\d+)/);
	if(loc !== null) {
		var targetType = loc[1] === "blog" ? "topic" : loc[1];
		var targetID = loc[4];
		var targetPath = targetType+targetID;	
		var updateCommentsButton = document.getElementById("update-comments");
		
		var NewButtonNCS = document.createElement('a');
		NewButtonNCS.id="NewButtonNCS";
		NewButtonNCS.onclick=updateCommentsButton.onclick;
		NewButtonNCS.innerHTML='<a><span align="center"><img src="https://cdn.everypony.ru/storage/00/44/24/2016/05/11/09c85c66fa.png" width="20"></span></a>';
		update.insertBefore(NewButtonNCS, update.children[0]);
		
		if(updateCommentsButton != null) {
			updateCommentsButton.onclick = function(e) {
				ls.comments.load(targetID, targetType, false);
				return false;
			}
		}
	}
	var LoadButtonNCS = document.getElementById("update-comments");
	setTimeout(function run() {LoadButtonNCS.click();setTimeout(run, 10000);}, 10000);
});
