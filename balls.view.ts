namespace $.$$ {
	
	function near( left: [ number, number ], right: [ number, number ] ) {
		if( Math.abs( right[0] - left[0] ) > 1 ) return false
		if( Math.abs( right[1] - left[1] ) > 1 ) return false
		return true
	}
	
	type Snapshot = Readonly<{
		score: number
		score_max: number
		kinds: readonly number[]
	}>
	
	export class $hd_balls extends $.$hd_balls {
		
		@ $mol_mem
		rows() {
			return Array.from( { length: this.size() }, (_, row )=> this.Row( row ) )
		}
		
		@ $mol_mem_key
		cells( row: number ) {
			return Array.from( { length: this.size() }, (_, col )=> this.Cell([ row, col ]) )
		}
		
		@ $mol_mem
		snapshot( next?: Snapshot ): Snapshot {
			return this.$.$mol_state_local.value( 'snapshot', next ) ?? { score: 0, score_max: 0, kinds: [] }
		}
		
		@ $mol_mem_key
		ball_kind( id: [ number, number ], next?: number ) {
			
			if( next !== undefined ) {
				const snapshot = $mol_mutable( this.snapshot() )
				snapshot.kinds[ id[0] * this.size() + id[1] ]( ()=> next )
				this.snapshot( snapshot() )
			}
			
			return this.snapshot().kinds[ id[0] * this.size() + id[1] ] ?? 0
			
		}
		
		@ $mol_mem_key
		ball_color( [ row, col ]: [ number, number ] ) {
			return this.kind_colors()[ this.ball_kind([ row, col ]) ]
		}
		
		@ $mol_mem_key
		ball_mood( [ row, col ]: [ number, number ] ) {
			
			const kind = this.ball_kind([ row, col ])
			if( !kind ) return ''
			
			let mood = 0
			const size = this.size()
			
			const nears = [
				[ row-1, col-1 ], [ row-1, col ], [ row-1, col+1 ],
				[ row, col-1 ],                   [ row, col+1 ],
				[ row+1, col-1 ], [ row+1, col ], [ row+1, col+1 ],
			]
			
			for( const [ r, c ] of nears ) {
				
				if( r < 0 ) continue
				if( c < 0 ) continue
				if( r >= size ) continue
				if( c >= size ) continue
				
				if( this.ball_kind([ r, c ]) !== kind ) continue
				++ mood
				
			}
			
			return this.mood_smiles()[ mood ]
		}
		
		@ $mol_action
		ball_grab( id: [ number, number ], event: PointerEvent ) {
			if( this.active_cell() ) this.ball_drop( this.active_cell() as any, event )
			if( !this.ball_kind( id ) ) return
			this.cell_active( id, ! this.cell_active( id ) )
			;( event.target! as Element ).releasePointerCapture(event.pointerId)
		}
		
		@ $mol_action
		ball_drop( id: [ number, number ], event: PointerEvent ) {
			
			this.active_cell([])
			
			if( !this.ball_kind( id ) ) return
			
			if( !this.check_lines( id ) ) {
				this.add_new( null )
			}
			
		}
		
		@ $mol_action
		ball_move( id: [ number, number ], event: PointerEvent ) {
			
			if( !event.buttons ) return
			
			const active = this.active_cell() as [ number, number ]
			if( !active.length ) return
			if( this.ball_kind( id ) ) return
			if( !near( active, id ) ) return
			
			this.ball_kind( id, this.ball_kind( active ) )
			this.ball_kind( active, 0 )
			this.active_cell( id )
			
			event.preventDefault()
		}
		
		@ $mol_mem_key
		cell_active( id: [ number, number ], next?: boolean ) {
			if( next === undefined ) return $mol_compare_deep( this.active_cell(), id )
			if( next ) this.active_cell( id )
			else this.active_cell( [] )
			return next
		}
		
		@ $mol_mem
		score( next?: number ){
			
			const { score, score_max, kinds } = this.snapshot()
			if( next === undefined ) return score
			
			this.snapshot({
				score: next,
				score_max: Math.max( next, score_max ),
				kinds: kinds,
			})
			
			return next
		}
		
		score_max() {
			return this.snapshot().score_max
		}
		
		@ $mol_mem
		score_text() {
			const score = this.score()
			const max = this.score_max()
			if( score === max ) return `${score}!`
			else return `${score} / ${max}`
		}
		
		@ $mol_mem
		Score_pick() {
			return this.Score( this.score() )
		}
		
		@ $mol_action
		check_lines( id: [ number, number ] ) {
			
			const size = this.size()
			const edge = ( row: number, col: number )=> row < 0 || col < 0 || row >= size || col >= size || this.ball_kind([ row, col ]) !== kind
			
			const kind = this.ball_kind( id )
			if( !kind ) return
			
			let total = 0
			
			const walk = ( row_step: number, col_step: number )=> {
				
				let count = -1
				let [ row, col ] = id
				
				do {
					++ count
					row += row_step
					col += col_step
				} while( !edge( row, col ) )
				
				;[ row, col ] = id
				do {
					++ count
					row -= row_step
					col -= col_step
				} while( !edge( row, col ) )
				
				if( count < 5 ) return
				
				for( let  i = 0; i < count; ++ i ) {
					row += row_step
					col += col_step
					this.ball_kind( [ row, col ], 0 )
				}
				
				total += count
				
			}
			
			walk( +0, +1 )
			walk( +1, +1 )
			walk( +1, +0 )
			walk( +1, -1 )
			
			if( !total  ) return false
			
			total -= 5
			this.score( this.score() + 2 ** total )
			
			return true
		}
		
		@ $mol_mem
		add_new( next?: null ) {
			
			if( next === undefined && this.snapshot().kinds.length ) return
			
			const vars = this.kind_colors().length - 1
			const size = this.size()
			
			for( let i = 0; i < 3; ++i ) {
				
				const snapshot = this.snapshot().kinds
				const free = [] as [ number, number ][]
				
				for( let row = 0; row < size; ++ row ) {
					for( let col = 0; col < size; ++ col ) {
						if( snapshot[ row * size + col ] ) continue
						free.push([ row, col ])
					}
				}
				
				if( !free.length ) return
				
				const id = $mol_array_lottery([ ... free ])
				const kind = Math.ceil( Math.random() * vars )
				
				this.ball_kind( id, kind )
				this.check_lines( id )
				
			}
			
			return
		}
		
		@ $mol_action
		restart() {
			
			const { score_max } = this.snapshot()
			
			this.snapshot({
				score: 0,
				score_max,
				kinds: [],
			})
			
			this.active_cell([])
			
			this.add_new( null )
			
		}
		
	}
}
