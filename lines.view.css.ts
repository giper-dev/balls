namespace $.$$ {
	
	$mol_style_define( $hd_lines, {
		
		Score: {
			color: $mol_theme.special,
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
			flexBasis: 'min(11vw,9vh)',
			flex: {
				// basis: '10vmin',
				// grow: 1,
			},
		},
		
		Cell: {
			padding: '0.5vmin',
			flex: {
				// basis: '2rem',
				// grow: 1,
			},
			// background: {
			// 	color: $mol_theme.card,
			// },
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
