import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TextInput from '../inputs/inputContentCard';
import ButtonAddCard from '../buttons/buttonCard/buttonAddCard';
import {createNewCard} from '../../firebase/card';

const Add = styled.div`
    height: 60px;
    width: 210px;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding: 5px;
    margin-top: 20px;
    background: rgb(226, 228, 230);
`

const Close = styled.span`
    color: black;
    float: left;
    margin-left: 5px;
    margin-top: 0px;
    font-size: 23px;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

class FormAddCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }

    onChangeContent = (content) => {
        this.setState({content});
    }

    onAddCard = () => {
        createNewCard(this.props.id, this.props.idList, this.state.content, this.props.indexAdd);
        this.setState({content: ""});
        this.props.onAddorCancel();
    }

    render() {
        return (
            <Add>
                <div>
                    <TextInput
                        content={this.state.content}
                        onChangeContent={this.onChangeContent}
                        onAddCard={this.onAddCard}/>
                    <div>
                        <ButtonAddCard
                            content={this.state.content}
                            onAddCard={this.onAddCard}/>
                        <Close onClick={this.props.onAddorCancel}>
                            &times;
                        </Close>
                    </div>
                </div>
            </Add>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id,
    }
}

export default connect(mapStateToProps)(FormAddCard);