import './Guide';

<div className={Guide}>
	
	<div className="left">
		<div className="guideImg">
		
		</div>
	</div>
	
	<div className="right">
		<div className="guideDiv">
			<div className="guideBtn">
				<div className={"button1 "+ (this.selectValue == 'button1' ? 'selected':'')}
				onClick={() => this.selectBtn('button1')}>
					<img className="button" src={module.src("./button1.png")}/>
					<img className="buttonSelected" src={module.src("./button1_p.png")}/>
				</div>
				<div className={"button2 "+ (this.selectValue == 'button2' ? 'selected':'')}
				onClick={() => this.selectBtn('button2')}>
					<img className="button" src={module.src("./button2.png")}/>
					<img className="buttonSelected" src={module.src("./button2_p.png")}/>
				</div>
				<div className={"button3 "+ (this.selectValue == 'button3' ? 'selected':'')}
				onClick={() => this.selectBtn('button3')}>
					<img className="button" src={module.src("./button3.png")}/>
					<img className="buttonSelected" src={module.src("./button3_p.png")}/>
				</div>
			</div>
			<div className="guideDetail">
				<img id="guideDetailImg" className="detail" src={module.src("./guideDetail1.png")}/>
			</div>
			<img className="guide_1" src={module.src("./guide_1.png")}/>
			<img className="guide_2" onClick={this.ok} src={module.src("./guide_2.png")}/>
		</div>
	</div>
	
	<img className="logoImg" src={module.src("../logo.png")}/>
	
</div>