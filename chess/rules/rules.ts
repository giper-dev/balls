namespace $ {

	const Size = 8
	
	const WaysFree = [] as number[][]
	
	const WaysPawn = [ [ $gd_balls_vector( +0, +1 ) ], [ $gd_balls_vector( +1, +1 ) ], [ $gd_balls_vector( -1, +1 ) ] ]
	
	const WaysRook = [
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( 0, +i ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( 0, -i ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( +i, 0 ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( -i, 0 ) ).slice(1),
	]
	
	const WaysKnight = [
		[ $gd_balls_vector( +1, +2 ) ], [ $gd_balls_vector( +1, -2 ) ],
		[ $gd_balls_vector( -1, +2 ) ], [ $gd_balls_vector( -1, -2 ) ],
		[ $gd_balls_vector( +2, +1 ) ], [ $gd_balls_vector( +2, -1 ) ],
		[ $gd_balls_vector( -2, +1 ) ], [ $gd_balls_vector( -2, -1 ) ],
	]
	
	const WaysBishop = [
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( +i, +i ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( +i, -i ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( -i, +i ) ).slice(1),
		Array.from( { length: Size }, ( _, i )=> $gd_balls_vector( -i, -i ) ).slice(1),
	]
	
	const WaysQueen = [ ... WaysRook, ... WaysBishop ]
	
	const WaysKing = [
		[ $gd_balls_vector( +0, +1 ) ], [ $gd_balls_vector( +1, +1 ) ], [ $gd_balls_vector( -1, +1 ) ],
		[ $gd_balls_vector( +1, +0 ) ], [ $gd_balls_vector( -1, +0 ) ],
		[ $gd_balls_vector( +0, -1 ) ], [ $gd_balls_vector( 1, -1 ) ], [ $gd_balls_vector( -1, -1 ) ],
	]
	
	export const $gd_balls_chess_rules = [ WaysFree, WaysPawn, WaysRook, WaysKnight, WaysBishop, WaysQueen, WaysKing, WaysFree ]

}
