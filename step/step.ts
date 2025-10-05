namespace $ {
	
	export const $gd_balls_step = ( from: number, to: number )=> ( to << 8 ) | from
	export const $gd_balls_step_from = ( pos: number )=> pos & 0b1111_1111
	export const $gd_balls_step_to = ( pos: number )=> pos >> 8
	export const $gd_balls_step_str = ( step: number )=> $gd_balls_coord_str( $gd_balls_step_from( step ) ) + '' + $gd_balls_coord_str( $gd_balls_step_to( step ) )
	export const $gd_balls_step_parse = ( str: string )=> $gd_balls_step( $gd_balls_coord_parse( str.slice( 0, 2 ) ), $gd_balls_coord_parse( str.slice( 2, 4 ) ) )
	
}
