import './View';

export default class Room extends View {
	
	constructor() {
		super()
		this.selectValue = 'button1';
	}
	
	componentWillMount() {
		this.people = this.props.params.people;
		this.room = this.props.params.room;
	}
	
	selectBtn(value) {
	    
	    this.selectValue = value;

	    switch(this.selectValue){
		    case 'button1':
		    	document.getElementById("guideDetailImg").src = module.src("./guideDetail1.png");
		    break;
		    case 'button2':
		    	document.getElementById("guideDetailImg").src = module.src("./guideDetail2.png");
		    break;
		    case 'button3':
		    	document.getElementById("guideDetailImg").src = module.src("./guideDetail3.png");
		    break;
	    }
	    
	    this.forceUpdate();
	    return; 
    }
    
    ok(){
	    console.log(this.people);
		console.log(this.room);
    }
}