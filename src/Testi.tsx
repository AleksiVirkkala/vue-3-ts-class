import VObject from './VObject'
import TestiSub from './TestiSub'
export default class Testi extends VObject {
	render() {
		return (
			<>
			<h3>Moi</h3>
			<ul>
				{ super.render() }
			</ul>
			</>
		)
	}
}