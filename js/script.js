
(function($) {

	$.fn.PreViewTube = function(opts) {

		//Defaults
		var settings = $.extend({
			'interval' : 500,
			'mode' : 'hover'
		}, opts);

		//Iteramos sobre los elementos coincidentes
		return this.each(function() {

			var $this = $(this);

			var loop;

			// obtenemos la fuente de la imagen
			var imgSrc = $this.attr("src");
			// obtenemos el nombre del archivo
			var fileName = imgSrc.match(/(\w*)\.jpg$/);

			// obtenemos el numero de la imagen
			if(fileName[1] == 'default') {
				// Hacemos que por defecto el valor sea 1
				var num = 1;
			} else {
				var num = parseInt(fileName[1]);
			}

			// Declaramos un loop
			var infiniteLoop = null;

			// Comprobamos el modo hover / constante
			if(settings.mode == 'constant') {

				loop = setInterval(function() {
					// loop - 1, 2, 3
					if(num == 3) {
						num = 0;
					} else {
						num++;
					}
					
					$this.attr("src", imgSrc.replace(/(\d\.jpg|\w*\.jpg)$/, +num + '.jpg'));

				}, settings.interval);
				

			} else {// modo hover

				$this.hover(function() {

					loop = setInterval(function() {
						// loop - 1, 2, 3
						if(num == 3) {
							num = 0;
						} else {
							num++;
						}
						
						$this.attr("src", imgSrc.replace(/(\d\.jpg|\w*\.jpg)$/, +num + '.jpg'));

					}, settings.interval);

				}, function() {
					// Al retirarl el mouse
					// Detenemos el loop
					clearInterval(loop);

				});
			}

		});
	};
})(jQuery);
