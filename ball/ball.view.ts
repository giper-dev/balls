namespace $.$$ {
	export class $hd_lines_ball extends $.$hd_lines_ball {
		
		@ $mol_mem
		image() {
			if( !this.color() ) return 'radial-gradient( circle at 50% 125%, transparent, oklch( 0 0 0 / .25 ) )'
			return `radial-gradient( circle at 50% 25%, oklch( 1 0 0 ), ${ this.color() } 3%, oklch( 0 0 0 / .75 ) 90% )`
		}
		
	}
}
