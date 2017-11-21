angular.module('appShots')
.filter('removeHTMLTags', function() {
	return function(text) {
		if(text){
			return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
		}
	};
})
.filter('readMore',function(){
	return function(text, length, end){
		if(text){
			if(isNaN(length)) length = 50;
			if (end === undefined) end = "...";
			if(text.length <= length) return text;
			else return String(text).substring(0, length) + end;
		}

	};
});
