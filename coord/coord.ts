namespace $ {
	
	export const $gd_balls_coord = ( row: number, col: number )=> ( row << 3 ) | col
	export const $gd_balls_coord_row = ( pos: number )=> pos >> 3
	export const $gd_balls_coord_col = ( pos: number )=> pos & 0b111
	export const $gd_balls_coord_str = ( pos: number )=> 'abcdefgh'[ $gd_balls_coord_col( pos ) ] + ( $gd_balls_coord_row( pos ) + 1 )
	export const $gd_balls_coord_parse = ( str: string )=> $gd_balls_coord( Number( str[1] ) - 1, str.charCodeAt(0) - 97 )
	
}
