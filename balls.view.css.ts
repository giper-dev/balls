namespace $.$$ {
	
	const { url, linear_gradient } = $mol_style_func
	
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
			border: {
				radius: $mol_gap.round,
			},
			cursor: 'grab',
		},
		
		Ball: {
			flex: {
				grow: 1,
			},
		},
		
	} )
	
}
