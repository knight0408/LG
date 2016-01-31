import './View';

export default class Room extends View {
	
	constructor() {
		super()
		this.selectValue = 'roomOne';
	}

	componentWillMount() {
		this.people = this.props.params.people;
	}
	
    selectImg(value) {
	    
	    this.selectValue = value;
	    this.forceUpdate();
	    return; 
    }
    
    selectBtnDown(){
 
		document.location.hash = `guide/${this.people}/${this.selectValue}`;
    }
}