namespace $.$$ {
	export class $gd_balls_chess_game extends $.$gd_balls_chess_game {
		
		@ $mol_mem
		State( next?: $gd_balls_chess_state ): $gd_balls_chess_state {
			const val = this.$.$mol_state_local.value( '$gd_balls_chess:state', next && $mol_base64_encode( next ) )
			return val && new $gd_balls_chess_state( $mol_base64_decode( val ) ) || new $gd_balls_chess_state( super.State() )
		}
		
		score() {
			return this.State().ballance()
		}
		
		@ $mol_mem
		score_text() {
			return this.score().toLocaleString( 'en', { signDisplay: 'exceptZero' } )
		}
		
		@ $mol_mem_key
		ball_kind( id: [ number, number ], next?: number ) {
			
			const side = this.State().side()
			const coord =  $gd_balls_coord( ... id )
			const cell = this.State()[ coord ]
			const ways = this.State().movements()
			
			if( !ways.length ) {
				if( !cell ) return 0
				const cell_side = $gd_balls_chess_cell_side( cell )
				if( cell_side === side ) return cell_side ? -1 : -3
				else return cell_side ? 1 : 3
			}
			
			const active = this.active_cell()
			if( active.length ) {
				
				const active_coord = $gd_balls_coord( active[0], active[1] )
				const step = $gd_balls_step( active_coord, coord )
				
				if( !cell ) return ways.includes( step ) ? ( side ? -1 : -3 ) : 0
				
				if( ways.includes( step ) ) return $gd_balls_chess_cell_side( cell ) ? -1 : -3
				else return $gd_balls_chess_cell_side( cell ) ? 1 : 3
				
			} else {
				
				if( !cell ) return 0
				return $gd_balls_chess_cell_side( cell ) ? 1 : 3
				
			}
			
		}
		
		@ $mol_mem_key
		ball_mood( id: [ number, number ] ) {
			
			const cell = this.State()[ $gd_balls_coord( ... id ) ]
			if( !cell ) return ''
			
			return this.mood_smiles()[ $gd_balls_chess_cell_kind( cell ) ]
		}
		
		@ $mol_action
		ball_grab( id: [ number, number ], event: PointerEvent ) {
			
			;( event.target! as Element ).releasePointerCapture(event.pointerId)
			
			if( this.active_cell() ) this.ball_drop( this.active_cell() as any, event )
			
			const ways = this.State().movements()
			const coord =  $gd_balls_coord( ... id )
			if( !ways.some( step => $gd_balls_step_from( step ) === coord ) ) return
			
			const state = this.State()
			if( $gd_balls_chess_cell_side( state[ coord ] ) !== state.side() ) return
			
			this.cell_active( id, ! this.cell_active( id ) )
		}
		
		@ $mol_action
		ball_drop( id: [ number, number ], event: PointerEvent ) {
			
			const active = this.active_cell() as [ number, number ]
			if( !active.length ) return
			this.active_cell([])
			
			const coord =  $gd_balls_coord( ... id )
			const active_coord = $gd_balls_coord( active[0], active[1] )
			const step = $gd_balls_step( active_coord, coord )
			
			const ways = this.State().movements()
			if( !ways.includes( step ) ) return
			
			let state = this.State().move( step )
			
			const best = state.best()
			if( best.length ) state = state.move( $mol_array_lottery( best ) )
			
			this.State( state )
			
		}
		
		@ $mol_action
		restart() {
			this.State( new $gd_balls_chess_state( super.State() ) )
		}
		
		@ $mol_mem
		thinking() {
			this.$.$mol_state_time.now(0)
			const state = this.State()
			for( const way of state.movements() ) {
				state.move( way ).think()
			}
		}
		
	}
}
