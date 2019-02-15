import React from 'react';
import ReactDOM from 'react-dom';

class Myform extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputVal: '',
			SelectVal : 'mango',
			RadioVal : 'male',
			checkVal : []
		}
		this.handleText = this.handleText.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.handleChkbox = this.handleChkbox.bind(this);
	}
	
	handleText(data){
		this.setState({ inputVal : data });
	}
	handleSelect(data){
		this.setState({ SelectVal : data });
	}
	handleRadio(data){
		this.setState({ RadioVal : data });
	}
	handleChkbox(data, isChecked){
		if(isChecked){
			var checkValArr = this.state.checkVal.slice();    
			checkValArr.push(data);   
			this.setState({checkVal:checkValArr});
		}else{
			const oldArr = this.state.checkVal;
			var filtered = oldArr.filter(function(elem){
				return elem !== data;
			})
			this.setState({ checkVal: filtered });
		}
	}
	
	handleSubmit(){
		alert('Form Submitted');
		console.log(this.state);
	}
	
	render(){
		return(
			<div>
				<Inputtext inputVal={this.state.inputVal} handleTextPrnt ={this.handleText} />
				<InputSelect inputVal={this.state.SelectVal} handleSelectPrnt ={this.handleSelect} />
				<InputRadio inputVal={this.state.RadioVal} handleRadioPrnt ={this.handleRadio} />
				<InputCheck inputVal={this.state.checkVal} handleChkboxPrnt ={this.handleChkbox} />
				<Buttonsubmit handleSubmitPrnt ={this.handleSubmit} />
			</div>
		)
	}
}
class FormLabel extends React.Component {
	render(){
		return(
			<div className="label">
				<label>{this.props.labelName}  </label> 
			</div>
		)
	}
}
class Inputtext extends React.Component{
	handleTextChng(e){
		this.props.handleTextPrnt(e.target.value);
	}
	render(){
		return(
			<div className="form_div">
				<FormLabel labelName="Text box : " />
				<div className="input_div">
					<input type="text" value={this.props.inputVal} onChange={this.handleTextChng.bind(this)} className="width-100" />
				</div>
			</div>
		)
	}
}
class InputSelect extends React.Component{
	handleSelectChng(e){
		this.props.handleSelectPrnt(e.target.value);
	}
	render(){
		return(
			<div className="form_div">
				<FormLabel labelName="Select box : " />
				<div className="input_div">
					<select value={this.props.inputVal} onChange={this.handleSelectChng.bind(this)} className="width-100" >
						<option value="banana">Banana</option>
						<option value="mango">Mango</option>
						<option value="grapes">Grapes</option>
						<option value="orange">Orange</option>
					</select>
				</div>
			</div>
		)
	}
}
class InputRadio extends React.Component{
	handleSelectChng(e){
		this.props.handleRadioPrnt(e.target.value);
	}
	render(){
		return(
			<div className="form_div">
				<FormLabel labelName="Radio button : " />
				<div className="input_div" onChange={this.handleSelectChng.bind(this)}>
					<input type="radio" name="gender" value="male" defaultChecked={this.props.inputVal === 'male'} /> Male
					<input type="radio" name="gender" value="female" defaultChecked={this.props.inputVal === 'female'} /> Female
				</div>
			</div>
		)
	}
}
class InputCheck extends React.Component{
	handleChkboxChng(e){
		console.log(e.target.checked)
		this.props.handleChkboxPrnt(e.target.value, e.target.checked);
	}
	render(){
		return(
			<div className="form_div">
				<FormLabel labelName="Check box : " />
				<div className="input_div" onChange={this.handleChkboxChng.bind(this)}>
				  <input type="checkbox" name="vehicle1" value="bike" /> have bike
				  <input type="checkbox" name="vehicle2" value="car" /> have car
				</div>
			</div>
		)
	}
}

class Buttonsubmit extends React.Component{
	handleSubmitBtn(){
		this.props.handleSubmitPrnt();
	}
	render(){
		return(
			<div className="form_div">
				<FormLabel labelName=" " />
				<div className="input_div" onClick={this.handleSubmitBtn.bind(this)}>
				  <input type="submit" name="submit" value="Submit" /> 
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Myform />, document.getElementById('root'));

