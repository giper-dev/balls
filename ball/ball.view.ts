namespace $.$$ {
	export class $hd_balls_ball extends $.$hd_balls_ball {
		
		@ $mol_mem
		color() {
			return this.colors()[ Math.abs( this.kind() ) ]
		}
		
		@ $mol_mem
		ghost() {
			return this.kind() < 0
		}
		
		@ $mol_mem
		image() {
			if( this.kind() === 0 ) return 'radial-gradient( circle at 50% 125%, transparent, oklch( 0 0 0 / .25 ) )'
			return `radial-gradient( circle at 50% 25%, oklch( 1 0 0 ), ${ this.color() } 3%, oklch( 0 0 0 / .75 ) 90% )`
		}
		
	}
}
