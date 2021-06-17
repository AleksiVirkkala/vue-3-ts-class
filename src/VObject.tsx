
type ComponentType = VObject | JSX.Element

export default class VObject {

	constructor(parent?: VObject) {
		if (parent) {
			this.parent = parent
			parent.addChild(this)
		}
	}

	parent?: VObject
	children: ComponentType[] = []
	
	addChild(component: ComponentType): ThisType<VObject> {
		this.children.push(component)
		return this
	}

	render(): JSX.Element {
		return (
		<>
			{ this.children.map(child => {
					if (child instanceof VObject) {
						return child.render()
					}
					return child
			})}
		</>)
	}
}