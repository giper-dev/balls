namespace $.$$ {
	
	const { url, linear_gradient } = $mol_style_func
	
	$mol_style_define( $gd_balls_catalog, {
		
		background: {
			size: [ 'cover' ],
			position: 'center',
			image: [
				[ linear_gradient( $mol_theme.spirit ) ],
				[ url( 'gd/balls/logo/back.jpg' ) ],
			]
		},
		
	} )
	
}
