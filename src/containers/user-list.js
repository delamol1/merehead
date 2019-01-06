import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPage } from "../actions/index"


class UserList extends Component {

    renderList() {
        console.log(this.props)
        const { currentPage } = this.props;
        const indexOfLastTodo = currentPage * 5;
        const indexOfFirstTodo = indexOfLastTodo - 5;
        const currentTodos = this.props.users.slice(indexOfFirstTodo, indexOfLastTodo);
        return currentTodos.map((user) => {
            return (
                <div className="users"
                    key={user.id}> <strong>Name:</strong> {user.name} {user.surname} <br /> <strong>Description:</strong> {user.name} {user.desc} </div>
            )
        })
    }

    renderNumbers() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.users.length / 5); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={() => this.props.selectPage({ number })}
                >
                    {number}
                </li>
            );
        });
    }

    render() {

        return (
            <div>
                {this.renderList()}
                <ul className="pageNumbers">
                {this.renderNumbers()}
                </ul>
               
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        currentPage: state.currentPage
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectPage: selectPage }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);




