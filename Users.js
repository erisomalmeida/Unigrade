import React, { Component } from 'react';

class Users extends Component{

    //chama a atualização do app.js
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.nome.value, this.idade.value);
    }

    render(){ //metodo render retorna uma "descrição" do que vc quiser renderizar

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (

                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.nome = val}} required defaultValue={user.nome}/></td>
                    <td><input type="number" ref={(val) => {this.idade = val}} required defaultValue={user.idade}/></td>
                    <td>
                    <input type="button" value="Atualizar" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>

            ) : (

                <tr  key={index}>
                    <td>{user.nome}</td>
                    <td>{user.idade}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Editar</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Deletar</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;
