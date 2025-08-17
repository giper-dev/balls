namespace $.$$ {
	export class $hd_lines_ball extends $.$hd_lines_ball {
		
		@ $mol_mem
		image() {
			if( !this.color() ) return 'radial-gradient( circle at 50% 125%, transparent, rgba( 0, 0, 0, 0.25 ) )'
			return `radial-gradient( circle at 50% 25%, rgba( 255, 255, 255 ), ${ this.color() } 3%, rgba( 0, 0, 0, 0.75 ) 90% )`
		}
		
	}
}
