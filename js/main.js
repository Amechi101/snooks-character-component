"use strict";


const characterComponent = (function CharacterComponent() {
	const rootDir = '../img/character_assets';

	const characterCanvas = document.getElementById("characterComponent");
	const characterCanvasContex = characterCanvas.getContext('2d');
	
	characterCanvas.style.width = '100%';
 	characterCanvas.style.height = '100%';
 	
 	const characterCanvasWidth = characterCanvas.width = characterCanvas.offsetWidth; 
	const characterCanvasHeight = characterCanvas.height = characterCanvas.offsetHeight;

	const characterState = {};

	function init() {
		
		//load character assets
		loadCharacterAsset('body');
		loadCharacterAsset('face');
		loadCharacterAsset('eyes');
		loadCharacterAsset('glasses');
		loadCharacterAsset('hairstyles');
		loadCharacterAsset('headwears');
		loadCharacterAsset('lips');
		loadCharacterAsset('noses');
		loadCharacterAsset('shirts');
		loadCharacterAsset('skirts');
		loadCharacterAsset('eyebrows');
		loadCharacterAsset('dresses');

		return;
	}
	
	/**
	 * Load the character asset
	 *
	 * @param {String} assetType - assets on character (e.g. body, eyes, etc...)
	 * 
	 * @return {void}
	 */
	function loadCharacterAsset( assetType ) {
		console.log(assetType, 'load asset');
	
		characterState[assetType] = new Image();
		characterState[assetType].src = characterAssetUrl( assetType );

		var characterImage = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve( characterState[assetType] );
			}, 1000);
		});

		characterImage.then(( image ) => {
			drawCharacterAsset( image );
		}).catch((error) => console.error(error));

	  	return;
	}

	/**
	 * Draw Character asset on canvas
	 * 
	 * @return {void}
	 */
	function drawCharacterAsset( image ) {
		console.log(image, 'Draw character asset image!');

		characterCanvasContex.drawImage(image, 0, 0, characterCanvasWidth, characterCanvasHeight);

		return;
	}

	/**
	 * Creates Resource URL for character asset
	 *
	 * @param {String} assetType - assets on character (e.g. body, eyes, etc...)
	 * @param {Number} assetVariation - variant of an asset type (e.g. different structures of eye assets)
	 * @param {String} assetColor - difference colors of an asset type
	 *
	 * @return {String} Character Asset URL
	 */
	function characterAssetUrl(assetType='', assetVariation=1, assetColor='a') {
		if( assetType === 'body' ) {
	  		return `${rootDir}/${assetType}/${assetType}_${assetColor}.png`;
	  	} else{
	  		return `${rootDir}/${assetType}/0${assetVariation}/${assetType}_0${assetVariation}_${assetColor}.png`;
	  	}
	}

	return { init };
})();

characterComponent.init();


