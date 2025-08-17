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
		
		Body: {
			display: 'flex',
			flex: {
				direction: 'row',
			},
			align: {
				items: 'safe center',
			},
			justify: {
				content: 'safe center',
			},
		},
		
		Board: {
			// margin: 'auto',
			// align: {
			// 	self: 'center',
			// },
			// justify: {
			// 	self: 'center',
			// },
			flex: {
				direction: 'column',
			},
			userSelect: 'none',
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
