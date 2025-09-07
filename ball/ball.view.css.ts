namespace $.$$ {
	
	$mol_style_define( $gd_balls_ball, {
		
		border: {
			radius: '50%',
		},
		
		align: {
			items: 'center',
		},
		
		justify: {
			content: 'center',
		},
		
		color: 'black',
		
		font: {
			weight: 'bold',
			size: '3vmin',
			family: 'monospace',
		},
		
		'[gd_balls_ball_ghost]': {
			true : {
				transform: 'scale(.5)',
				transition: 'none',
				box: {
					shadow: [{
						x: 0,
						y: 0,
						blur: 0,
						spread: '5vmin',
						color: $mol_style_func.hsla( 0, 0, 0, .25 ),
					}]
				},
			}
		},
		
	} )
	
}
