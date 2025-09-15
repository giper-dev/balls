namespace $.$$ {
	
	const { url, linear_gradient, radial_gradient } = $mol_style_func
	
	$mol_style_define( $gd_balls, {
		
		background: {
			size: [ 'cover' ],
			position: 'center',
			image: [
				[ linear_gradient( $mol_theme.spirit ) ],
				[ url( 'gd/balls/logo/back.jpg' ) ],
			]
		},
		
		Game: {
			
			flex: {
				basis: '100vh',
				grow: 1,
			},
		
			Head: {
				justify: {
					content: 'space-between',
				},
			},
			
			Title: {
				flex: {
					grow: 0,
				},
			},
			
		},
		
		Score: {
			color: $mol_theme.special,
			font: {
				weight: 'bold',
			},
		},
		
		Board: {
			margin: 'auto',
			flex: {
				direction: 'column',
			},
			userSelect: 'none',
			touchAction: 'none',
			width: '88vmin',
		},
		
		Cell: {
			padding: '0.25vmin',
			flex: {
				basis: '11vmin',
			},
			aspectRatio: 1,
			cursor: 'grab',
			align: {
				items: 'stretch',
			},
			justify: {
				items: 'stretch',
			},
			'::before': {
				content: '""',
				display: 'block',
				width: '100%',
				height: '100%',
				border: {
					radius: '50%',
				},
				background: {
					image: [[ radial_gradient(' circle at 50% 125%, transparent, oklch( 0 0 0 / .25 ) ') ]],
				},
				gridArea: '1/1',
			}
		},
		
		Ball: {
			flex: {
				grow: 1,
			},
		},
		
	} )
	
}
