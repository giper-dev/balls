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
		
		willChange: 'transform',
		
		box: {
			shadow: [{
				inset: true,
				x: 0,
				y: 0,
				blur: '1vmin',
				spread: 0,
				color: $mol_style_func.hsla( 0, 0, 0, .25 ),
			}]
		},
		
		'[gd_balls_ball_state]': {
			empty: {
				transform: 'scale(0)',
			},
			ghost: {
				transform: 'scale(.5)',
			},
			active: {
				zIndex: 1,
			},
		},
		
		'@starting-style': {
			transform: 'scale3d(0, 0, 0)',
		},
		
	} )
	
}
