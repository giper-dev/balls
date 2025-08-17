namespace $.$$ {
	
	$mol_style_define( $hd_lines, {
		
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
			padding: '1vmin',
			flex: {
				direction: 'column',
			},
			align: {
				self: 'stretch',
				items: 'center',
			},
			justify: {
				content: 'center',
			},
			userSelect: 'none',
		},
		
		Row: {
			// flexBasis: '9vmin',
			// flex: {
			// 	// basis: '10vmin',
			// 	// grow: 1,
			// },
		},
		
		Cell: {
			padding: '0.25vmin',
			flex: {
				basis: '9vmin',
				// grow: 1,
			},
			background: {
				color: $mol_theme.card,
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
