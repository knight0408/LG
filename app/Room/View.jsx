import './Room';

<div className={Room}>

	<div className="left">
		<div id="roomone" className={"room " + (this.selectValue == 'roomOne' ? 'selected':'')}
				onClick={() => this.selectImg('roomOne')}
			 	onMouseOver={() => this.selectImg('roomOne')}>
			<div className="roomNormal">
			</div>
			<div className="roomSelected">
				<div className="roomLogo" id="roomlogoone">
				</div>
			</div>
		</div>
		<div id="roomtwo" className={"room " + (this.selectValue == 'roomTwo' ? 'selected':'')} 
				onClick={() => this.selectImg('roomTwo')} 
				onMouseOver={() => this.selectImg('roomTwo')}>
			<div className="roomNormal">
			</div>
			<div className="roomSelected">
				<div className="roomLogo" id="roomlogotwo">
				</div>
			</div>
		</div>
	</div>
	
	<div className="right">
		<div id="roomthree" className={"room " + (this.selectValue == 'roomThree' ? 'selected':'')} 
				onClick={() => this.selectImg('roomThree')} 
				onMouseOver={() => this.selectImg('roomThree')}>
			<div className="roomNormal">
			</div>
			<div className="roomSelected">
				<div className="roomLogo" id="roomlogothree">
				</div>
			</div>
		</div>
		<div id="roomfour" className={"room " + (this.selectValue == 'roomFour' ? 'selected':'')} 
				onClick={() => this.selectImg('roomFour')} 
				onMouseOver={() => this.selectImg('roomFour')}>
			<div className="roomNormal">
			</div>
			<div className="roomSelected">
				<div className="roomLogo" id="roomlogofour">
				</div>
			</div>
		</div>
	</div>
	
	<div className="okImg" onClick={this.selectBtnDown} ></div>
	
</div>