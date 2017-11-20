$().extend('serialize', function () {
	for (var i = 0; i < this.elements.length; i++) {
			var obj = {};
			var box = this.elements[i];
			for (var j = 0; j < box.elements.length; j++) {
				var form = box.elements[j];
				switch (form.type) {
					case undefined :
					case 'reset':
					case 'submit':
					case 'file':
					case 'button':
						break;
					case 'radio':
					case 'checkbox':
						if (!form.selected) break;
					case 'select-one':
					case 'selected-mutiple':
						for (var k = 0; k < form.options.length; k++) {
							var option = form.options[k];
							if (option.selected) {
								var optValue = '';
								if (option.hasAttribute) {
									optValue = (option.hasAttribute('value') ? option.value : option.text);
								} else {
									optValue = (option.attributes('value') ? option.value : option.text );
								}
								obj[form.name] = optValue;
							}
						}
						break;
						default :
						obj[form.name] = form.value;
				}
			}
			return obj;
		}
		//var obj = {};
		return this;
});