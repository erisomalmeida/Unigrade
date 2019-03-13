import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        nome:null,
        idade:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="nome" autoComplete="off" placeholder="Entre com seu nome" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="idade" autoComplete="off" type="number" required placeholder="Entre com sua idade" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Adicionar" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;
