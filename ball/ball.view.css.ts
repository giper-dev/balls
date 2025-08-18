namespace $.$$ {
	
	$mol_style_define( $hd_balls_ball, {
		
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
		
		'[hd_balls_ball_ghost]': {
			true : {
				transform: 'scale(.5)',
				transition: 'none',
			}
		},
		
	} )
	
}
