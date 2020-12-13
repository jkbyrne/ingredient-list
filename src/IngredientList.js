//import datajson from "./data/ingredients.json";
import styled from 'styled-components'
import React, { useState, Fragment, Component } from 'react';
import Sidebar from "./Sidebar";
import Detail from "./Detail";

const ContentContainer = styled.div`display: flex; flex-flow:row;`;
const space = {
        "name": "Nothing",
        "dosage": "Infinity",
        "description": "Space is endless, and really, nothing all at the same time. You guys like easter eggs?",
        "imagePath": "http://jkbtxt.com/assets/external/assets/ritual/nothing.jpg",
        "foundIn": "Everything, really. You know atoms are mostly empty space?",
        "form": "Pure, refined, nothingness",
        "source": "Literally everything",
        "supplier": "The fabric of reality",
        "location": "Anywhere in the universe",
        "articles": [
          {
            "title": "A Universe From Nothing: Why There Is Something Rather than Nothing? Tell me!!",
            "link": "https://en.wikipedia.org/wiki/A_Universe_from_Nothing",
            "author": "Lawrence M. Krauss",
            "year": "2012"
          }
        ]
    }
const emptyObject = {
    name : "",
    dosage : "",
    description : "",
    imagePath : "",
    foundIn : "",
    form : "",
    source : "",
    supplier : "",
    location : "",
    articles : [{ title : "No Article Records", link : "/", author : "", year : "" }]
}

class IngredientList extends Component {

    constructor(props) {
        console.log("CONSTRUCTOR...", props);
        super(props);
        this.state = {
            ...this.props,
            selectedIdx : 0,
            articleIdx : 0,
            searchValue : "",
            mode : "browse"
        }
    }

    setSelectedIdx = (idx) => {
        this.setState({ selectedIdx : idx });
    }

    setArticle = (idx) => {
        this.setState({ articleIdx : idx });
    }
    
    setSearchValue = (value) => {
        console.log("setSearchValue", value);
        this.setState({ searchValue : value });
    }

    setMode = (imode) => {
        if(imode === "newingredient") {
            let nfo = JSON.parse(JSON.stringify(emptyObject));
            this.setState({ mode : imode, newIngredient : nfo });
        } else {
            this.setState({ mode : imode, newIngredient : null });
        }
    }

    formChangeHandler = (field, value) => {
        let tval = value;
        console.log(field, value);
        if(field === "imagePath") {
            tval = URL.createObjectURL(value[0]);
        }
        let nfo = JSON.parse(JSON.stringify(this.state.newIngredient));
        nfo[field] = tval;
        this.setState({ newIngredient : nfo });
    }

    saveNewIngredient = () => {
        let tdata = JSON.parse(JSON.stringify(this.state.data));
        tdata.push(JSON.parse(JSON.stringify(this.state.newIngredient)));
        console.log("data...", tdata);
        let nfo = JSON.parse(JSON.stringify(emptyObject));
        this.setState({ data : tdata, newIngredient : nfo });
    }

    deleteSelectedFromData = () => {
        let filteredData = this.state.data.filter( 
            item => Object.values(item).filter(
                xx => !Array.isArray(xx) 
                     && xx.toLowerCase().split(this.state.searchValue).length > 1).length > 0);
        let selIdx = this.state.selectedIdx;
        
        if(filteredData.length === 0) {
            filteredData = [space];
            selIdx = 0;
        }

        if(selIdx > filteredData.length) {
            selIdx = 0;
        }

        const itemName = filteredData[selIdx].name;
        console.log(itemName);
        const dataIndex = this.state.data.findIndex(item => item.name === itemName);
        console.log(dataIndex);
        let nd = JSON.parse(JSON.stringify(this.state.data));
        console.log(nd);
        nd.splice(dataIndex, 1);
        console.log(nd);
        this.setState({ data : nd });

    }

    render() {

        console.log("IngredientList", this.state, this.props);

        let filteredData = this.state.data.filter( 
            item => Object.values(item).filter(
                xx => !Array.isArray(xx) 
                     && xx.toLowerCase().split(this.state.searchValue).length > 1).length > 0);
        let selIdx = this.state.selectedIdx;
        
        if(filteredData.length === 0) {
            filteredData = [space];
            selIdx = 0;
        }

        if(selIdx >= filteredData.length) {
            selIdx = 0;
        }

        console.log("Ingredient list...", selIdx, filteredData.length, this.state.data, filteredData);

        if(this.state.mode === "newingredient") {
            selIdx = 0;
            filteredData = [this.state.newIngredient];
        }

        return (
        <ContentContainer>
            <Sidebar 
                data={this.state.data} 
                mode={this.state.mode}
                searchValue={this.state.searchValue}
                selectedIdx={this.state.selectedIdx}
                setSelectedIdx={this.setSelectedIdx}
                setSearchValue={this.setSearchValue}
                setArticle={this.setArticle}
                setMode={this.setMode}
            />
            <Detail {...filteredData[selIdx]} 
                mode={this.state.mode} 
                setArticle={this.setArticle}
                articlesLoop={this.props.articlesLoop}
                formChangeHandler={this.formChangeHandler}
                saveNewIngredient={this.saveNewIngredient}
                deleteSelectedFromData={this.deleteSelectedFromData}
                articleIdx={this.state.articleIdx}></Detail>
        </ContentContainer>);
    }

}

export default IngredientList;