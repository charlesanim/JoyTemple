
		Amplitude.init({
			"songs": [
				{
					"name": "Risin' High (feat Raashan Ahmad)",
					"artist": "Ancient Astronauts",
					"album": "We Are to Answer",
					"url": "/songs/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
				},
				{
					"name": "The Gun",
					"artist": "Lorn",
					"album": "Ask The Dust",
					"url": "/songs/08 The Gun.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
				},
				{
					"name": "Anvil",
					"artist": "Lorn",
					"album": "Anvil",
					"url": "/songs/LORN - ANVIL.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/anvil.jpg"
				},
				{
					"name": "I Came Running",
					"artist": "Ancient Astronauts",
					"album": "We Are to Answer",
					"url": "/songs/ICameRunning-AncientAstronauts.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
				},
				{
					"name": "First Snow",
					"artist": "Emancipator",
					"album": "Soon It Will Be Cold Enough",
					"url": "/songs/FirstSnow-Emancipator.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
				},
				{
					"name": "Terrain",
					"artist": "pg.lost",
					"album": "Key",
					"url": "/songs/Terrain-pglost.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/key.jpg"
				},
				{
					"name": "Vorel",
					"artist": "Russian Circles",
					"album": "Guidance",
					"url": "/songs/Vorel-RussianCircles.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/guidance.jpg"
				},
				{
					"name": "Intro / Sweet Glory",
					"artist": "Jimkata",
					"album": "Die Digital",
					"url": "/songs/IntroSweetGlory-Jimkata.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/die-digital.jpg"
				},
				{
					"name": "Offcut #6",
					"artist": "Little People",
					"album": "We Are But Hunks of Wood Remixes",
					"url": "/songs/Offcut6-LittlePeople.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
				},
				{
					"name": "Dusk To Dawn",
					"artist": "Emancipator",
					"album": "Dusk To Dawn",
					"url": "/songs/DuskToDawn-Emancipator.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
				},
				{
					"name": "Anthem",
					"artist": "Emancipator",
					"album": "Soon It Will Be Cold Enough",
					"url": "/songs/Anthem-Emancipator.mp3",
					"cover_art_url": "/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
				}
			]
		});

		$(document).ready(function(){
			adjustPlayerHeights();

			$(window).on('resize', function(){
				adjustPlayerHeights();
			});

			$('.bandcamp-link').on('click', function( e ){

				e.stopPropagation();
			});

			jQuery('.song').on('mouseover', function(){
				jQuery(this).css('background-color', '#00A0FF');
				jQuery(this).find('.song-meta-data .song-title').css('color', '#FFFFFF');
				jQuery(this).find('.song-meta-data .song-artist').css('color', '#FFFFFF');
				if( !jQuery(this).hasClass('amplitude-active-song-container') ){
					jQuery(this).find('.play-button-container').css('display', 'block');
				}
				jQuery(this).find('img.bandcamp-grey').css('display', 'none');
				jQuery(this).find('img.bandcamp-white').css('display', 'block');
				jQuery(this).find('.song-duration').css('color', '#FFFFFF');
			});

			jQuery('.song').on('mouseout', function(){
				jQuery(this).css('background-color', '#FFFFFF');
				jQuery(this).find('.song-meta-data .song-title').css('color', '#272726');
				jQuery(this).find('.song-meta-data .song-artist').css('color', '#607D8B');
				jQuery(this).find('.play-button-container').css('display', 'none');
				jQuery(this).find('img.bandcamp-grey').css('display', 'block');
				jQuery(this).find('img.bandcamp-white').css('display', 'none');
				jQuery(this).find('.song-duration').css('color', '#607D8B');
			});

			jQuery('.song').on('click', function(){
				jQuery(this).find('.play-button-container').css('display', 'none');
			});
		});

		function adjustPlayerHeights(){
			if( Foundation.MediaQuery.atLeast('medium') ) {
				$('#amplitude-right').css('max-height', $('#amplitude-left').height()+'px');
			}else{
				$('#amplitude-right').css('max-height', 'initial' );
			}
		}
