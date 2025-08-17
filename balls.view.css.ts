namespace $.$$ {
	
	$mol_style_define( $hd_balls, {
		
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
		},
		
		Ball: {
			flex: {
				grow: 1,
			},
			touchAction: 'none',
		},
		
	} )
	
}
