import './People';

<div className={People}>

	<div id="selectFemaleImgDiv" className="selectFemaleBg">

	</div>

	<div id="selectMaleImgDiv" className="selectMaleBg">

	</div>
	
	<div className="frontImg">
	
		<div className="left" onClick={() => this.selectImg('female')} onMouseOver={() => this.selectImg('female')}>
	
		</div>

		<div className="right" onClick={() => this.selectImg('male')} onMouseOver={() => this.selectImg('male')}>
	
		</div>

	</div>

	<div className="okImg" onClick={this.selectBtnDown} ></div>
		
	<img className="logoImg" src={module.src("../logo.png")}/>
	
</div>