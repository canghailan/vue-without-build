(function() {
	var slice = Array.prototype.slice;
	var handler = {
		js: function(json) {
			return json;
		},
		html: function(html) {
			return {
				template: html
			};
		}
	};

	VueBrowserLoader = {
		install: function(Vue, options) {
			Vue.load = function(component) {
				var resources = slice.call(arguments, 1);
				if(resources.length == 0) {
					resources = ['js', 'html'];
				}
				return function(resolve, reject) {
					var loading = resources.map(function(e) {
						return SystemJS.import(component + '.' + e);
					});
					Promise.all(loading).then(function(loaded) {
						var vue = {};
						for(var i = 0; i < resources.length; i++) {
							Object.assign(vue, handler[resources[i]](loaded[i]));
						}
						return vue;
					}).then(resolve, reject);
				};
			}
		}
	};
	
	Vue.use(VueBrowserLoader);
})();