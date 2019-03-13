import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component{

    // padrão de data
    state = {

        users:[
          {nome:"Roberto", idade:18, isEditing:false},
          {nome:"erisom", idade:22, isEditing:false},
          {nome:"mario", idade:21, isEditing:false}

        ]
      }
      // referenciado ao novo usuario
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });
      }

      // onde preciona o botão edita

      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // Variaveis referente ao user i, nome e ano
      updateUser = (i, nome, idade) => {
        let users = this.state.users;
        users[i].nome = nome;
        users[i].idade = idade;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // refente ao app.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">//className e como se fosse uma classe no JAVA
                <h1>CADASTRO</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;
