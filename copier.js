		function cp(txt)
		{
			if (! navigator.userAgent.match (/ipad|ipod|iphone/i))
			{
				var			a					= document.createElement ('textarea');
				a.style.position				= 'fixed';
				a.style.left					= '-100%';
				a.value							= txt;
				a.selectionStart				= 0;
				a.selectionEnd					= a.value.length;

				document.body.appendChild		(a);
				copy_element_to_clip			(a);
				document.body.removeChild		(a);
			}

			// Add emoji to box
			var				e					= document.getElementById ('copybuf');
			e.value								+= txt;
		}
		function copy_element_to_clip(box)
		{
			box.readOnly						= true;
			box.select							( );
			document.execCommand				('copy');
			box.readOnly						= false;
		}
		function areacopy_sub(erase_sw)
		{
			var 	a 							= document.activeElement;
			var 	box							= document.getElementById ('copybuf');
			copy_element_to_clip				(box);
			a.focus								( );
			if (erase_sw)
			{
				box.value						= '';
			}
		}
		function areaerase()
		{
			areacopy_sub						(true);	// erase = true
		}
		function areacopy()
		{
			areacopy_sub						(false);	// erase = false
		}
		function jmpl(location)
		{
			var		old_name					= document.getElementById (location).getAttribute('name');
			document.getElementById				(location).setAttribute('name', location);
			window.location.hash				= location;
			var		ret							= window.scrollBy (0, -62);
			document.getElementById				(location).setAttribute('name', old_name);
		}
		function jmphome()
		{
			window.location.hash				= '';
		    document.body.scrollTop				= 0; // For Chrome, Safari and Opera
		    document.documentElement.scrollTop	= 0; // For IE and Firefox
		}
