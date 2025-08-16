namespace $.$$ {
	
	function near( left: [ number, number ], right: [ number, number ] ) {
		if( Math.abs( right[0] - left[0] ) > 1 ) return false
		if( Math.abs( right[1] - left[1] ) > 1 ) return false
		return true
	}
	
	export class $hd_lines extends $.$hd_lines {
		
		@ $mol_mem
		free() {
			
			$mol_wire_solid()
			
			const size = this.size()
			const free = new Set< `${number},${number}` >()
			
			for( let row = 0; row < size; ++ row ) {
				for( let col = 0; col < size; ++ col ) {
					free.add( `${row},${col}` )
				}
			}
			
			return free
		}
		
		@ $mol_mem
		rows() {
			return Array.from( { length: this.size() }, (_, row )=> this.Row( row ) )
		}
		
		@ $mol_mem_key
		cells( row: number ) {
			return Array.from( { length: this.size() }, (_, col )=> this.Cell([ row, col ]) )
		}
		
		@ $mol_mem_key
		ball_kind( id: [ number, number ], next?: number ) {
			
			if( next !== undefined ) {
				if( next === 0 ) this.free().add( id.join(',') as `${number},${number}` )
				else this.free().delete( id.join(',') as `${number},${number}` )
			}
			
			return super.ball_kind( id, next )
		}
		
		@ $mol_mem_key
		ball_color( [ row, col ]: [ number, number ] ) {
			return this.kind_colors()[ this.ball_kind([ row, col ]) ]
		}
		
		@ $mol_action
		ball_grab( id: [ number, number ], event: PointerEvent ) {
			if( !this.ball_kind( id ) ) return
			this.cell_active( id, ! this.cell_active( id ) )
			;( event.target! as Element ).releasePointerCapture(event.pointerId)
		}
		
		@ $mol_action
		ball_drop( id: [ number, number ], event: PointerEvent ) {
			
			if( !this.ball_kind( id ) ) return
			
			this.cell_active( id, false )
			if( !this.check_lines( id ) ) {
				this.add_new( null )
			}
			
		}
		
		@ $mol_action
		ball_move( id: [ number, number ], event: Event ) {
			
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
		Score_pick() {
			return this.Score( this.score() )
		}
		
		@ $mol_action
		check_lines( id: [ number, number ] ) {
			
			const size = this.size()
			const edge = ( row: number, col: number )=> row < 0 || col < 0 || row >= size || col >= size || this.ball_kind([ row, col ]) !== kind
			
			const kind = this.ball_kind( id )
			if( !kind ) return
			
			let found = false
			
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
				
				this.score( this.score() + ( count - 4 ) ** ( count - 4 ) )
				found = true
				
			}
			
			walk( +0, +1 )
			walk( +1, +1 )
			walk( +1, +0 )
			walk( +1, -1 )
			
			return found
		}
		
		@ $mol_mem
		add_new( next?: null ) {
			
			const free = this.free()
			const vars = this.kind_colors().length - 1
			
			for( let i = 0; free.size && i < 3; ++i ) {
				
				const key = $mol_array_lottery([ ... free ])
				free.delete( key )
				
				const id = key.split( ',' ).map( Number ) as [ number, number ]
				const kind = Math.ceil( Math.random() * vars )
				
				this.ball_kind( id, kind )
				this.check_lines( id )
				
			}
			
		}
		
	}
}
