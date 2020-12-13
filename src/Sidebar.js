import styled from 'styled-components'
import React, { Fragment, Component } from 'react';
import {ReactComponent as LocationDot} from "./assets/images/locationdot.svg";
import {ReactComponent as IconPlus} from "./assets/images/icon-plus.svg";
import {ReactComponent as CaretRight} from "./assets/images/Caret-Right.svg";
import TextField from '@material-ui/core/TextField';

const colorHL = "#142B6F";
const color = "#3B4C7F";
const colorBB = "#9FAFC9";

const SidebarS = styled.div``;
const SideHeader = styled.div``;
const SideBody = styled.div`
                border-right:1px solid ${colorHL};
            `;

const IngredientButton = styled.div`
                width:275px;
                height:116px;
                padding-top:13px;
                padding-bottom:16px;
                padding-right:24px;
                padding-left:19px;
                background: ${ props => props.selected ? colorHL : "white" };
                border-bottom: ${ props => (props.selected || props.selectedMo) ? "0" : `1px solid ${ colorHL }` };
                border-radius: ${ props => props.selected ? "10px 0px 0px 10px" : "0"};
                position: relative;
                box-sizing: border-box;
            `;
  
const IName = styled.div`
                font-family: Circular Bold;
                font-size: ${ props => props.isDetail ? "64px" : "30px" };
                color: ${ props => props.selected ? "white" : colorHL };
            `;
const Dosage = styled.div`
                font-family: Circular Medium;
                font-size: ${props => props.isDetail ? "16px" : "14px" };
                color: ${ props => props.selected ? "white" : color };
            `;
const Origin = styled.div`position: absolute; bottom: 16px;`;
const OriginText = styled.span`
                font-family: Dutch; 
                font-size: 13px; 
                margin-left: 12px;
                color: ${ props => props.selected ? "white" : color };
            `;
const CRHolderButton = styled.div`position:absolute;right:25px;top:48px;cursor:pointer;`;

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.props
        }

    }

    render() {

        console.log("RENDER SIDEBAR...", this.props, this.state);

        const {
            selectedIdx, searchValue,
            mode, setMode, setArticle, setSelectedIdx
        } = this.props;

        return (
            <SidebarS>
                <SideHeader>
                    <TextField id="standard-search" label="Search" 
                        value={searchValue} style={{ marginBottom: "8px", position: "relative",
                        left: "18px" }}
                        onChange={(evt)=>{this.props.setSearchValue(evt.target.value)}} />
                </SideHeader>
                <SideBody>
                    {
                    this.props.data.filter( 
                            item => Object.values(item).filter(xx => !Array.isArray(xx) && xx.toLowerCase().split(searchValue).length > 1).length > 0
                        ).map(
                        (item, idx) =>
                        <IngredientButton 
                        selected={selectedIdx === idx} key={"IG_BTN_" + idx}
                        selectedMo={selectedIdx - 1 === idx}
                        onClick={()=>{setMode("browse"); setArticle(0); setSelectedIdx(idx)}}>
                        <Fragment>{console.log(idx)}</Fragment>
                        <IName selected={selectedIdx === idx} isDetail={false}>{item.name}</IName>
                        <Dosage selected={selectedIdx === idx}>{item.dosage}</Dosage>
                        <Origin>
                            <LocationDot fill={selectedIdx === idx ? "white" : colorHL} width={"13px"} height={"13px"} />
                            <OriginText selected={selectedIdx === idx}>{item.location}</OriginText>
                        </Origin>
                        <CRHolderButton>
                            <CaretRight fill={selectedIdx === idx ? "white" : colorHL}></CaretRight>
                        </CRHolderButton>
                        </IngredientButton>
                    )
                    }
                    <IngredientButton 
                        selectedMo={true} 
                        selected={mode==="newingredient"} 
                        onClick={()=>{this.props.setMode("newingredient"); this.props.setArticle(0); this.props.setSelectedIdx(null);}}>
                    <IconPlus></IconPlus>
                    </IngredientButton>
                </SideBody>
            </SidebarS>
        );
    }
}

export default Sidebar;