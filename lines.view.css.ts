namespace $.$$ {
	
	$mol_style_define( $hd_lines, {
		
		Head: {
			justify: {
				content: 'space-between',
			},
		},
		
		Body: {
			display: 'flex',
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
		},
		
		Cell: {
			padding: '0.25vmin',
			flex: {
				basis: '9.5vmin',
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
