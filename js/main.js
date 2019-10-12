"use strict";

// @TODO: 
// 


const characterComponent = (function CharacterComponent() {
	const rootDir = '../img/character_assets';

	const characterCanvas = document.getElementById("characterComponent");
	const characterCanvasContex = characterCanvas.getContext('2d');
	
	characterCanvas.style.width = '100%';
 	characterCanvas.style.height = '100%';
 	
 	const characterCanvasWidth = characterCanvas.width = characterCanvas.offsetWidth; 
	const characterCanvasHeight = characterCanvas.height = characterCanvas.offsetHeight;

	const characterState = {};
	const characterAssets = [
		'body', 
		'face', 
		'eyes',
		'glasses',
		'hairstyle',
		'headwear',
		'lips',
		'nose',
		'eyebrows',
		'pants',
		'skirt',
		'shirt',
		'dress',
		'boots'
	];

	console.log(characterAssets.length, 'total number of character assets');

	function init() {
		
		//load character assets
		characterAssets.forEach(( assetType, layerPosition ) => {
			loadCharacterAsset( assetType, layerPosition ); 
		});
		
		return;
	}
	
	/**
	 * Load the character asset
	 *
	 * @param {String} assetType - assets on character (e.g. body, eyes, etc...)
	 * @param {Number} layerPosition - layer position of assets to build character (e.g. body, eyes, etc...)
	 * 
	 * @return {void}
	 */
	function loadCharacterAsset( assetType, layerPosition ) {
		console.log(assetType, 'load asset');

		characterState[assetType] = {};

		characterState[assetType]['position'] = layerPosition;


		characterState[assetType]['image'] = new Image();
		characterState[assetType]['image'].src = characterAssetUrl( assetType );

		var characterImage = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve( characterState[assetType]['image'] );
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
	 * @param {String} assetVariation - variant of an asset type (e.g. different structures of eye assets)
	 * @param {String} assetColor - difference colors of an asset type
	 *
	 * @return {String} Character Asset URL
	 */
	function characterAssetUrl(assetType='', assetVariation='01', assetColor='a') {

		if( assetType === 'body' ) {
	  		return `${rootDir}/${assetType}/${assetType}_${assetColor}.png`;
	  	} else{
	  		return `${rootDir}/${assetType}/${assetVariation}/${assetType}_${assetVariation}_${assetColor}.png`;
	  	}
	}


	console.log(characterState);

	return { init };
})();

characterComponent.init();


