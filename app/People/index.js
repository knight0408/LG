import './View';

export default class Second extends View {
	constructor() {
		super()
		this.selectValue = 'female';
	}

    selectImg(value) {
	    
	    this.selectValue = value;
	    
	    if(value == 'female'){
// 		    document.getElementById("selectImgDiv").style.backgroundImage="url(" + module.src('./select-female.png')+")";
			document.getElementById("selectFemaleImgDiv").style.opacity = 1.0;
			document.getElementById("selectMaleImgDiv").style.opacity = 0.0;
	    }else{
// 		    document.getElementById("selectImgDiv").style.backgroundImage="url(" + module.src('./select-male.png')+")";
			document.getElementById("selectFemaleImgDiv").style.opacity = 0.0;
			document.getElementById("selectMaleImgDiv").style.opacity = 1.0;
	    }   
    }
    
    selectBtnDown(){
	    document.location.hash = `room/${this.selectValue}`;
	    
    }
}