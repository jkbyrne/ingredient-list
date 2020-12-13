import React, { Fragment, Component } from 'react';
import styled from 'styled-components'
import {ReactComponent as CaretRight} from "./assets/images/Caret-Right.svg";
import {ReactComponent as CaretLeft} from "./assets/images/Caret-Left.svg";
import cmask from "./assets/images/mask.svg";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const colorHL = "#142B6F";
const color = "#3B4C7F";
const colorBB = "#9FAFC9";

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

const DeleteButton = styled.div`font-family: Circular;position:absolute; top:5px;right:5px;font-size:15px;`;

const DetailContainer = styled.div`padding-left:37px;padding-top:45px;padding-right:7px;position:relative;`;
const DetailHead = styled.div``;
const DetailImage = styled.img`width:160px;height:160px;float:left;mask-image:url(${cmask})`;
const DetailName = styled.div`float:left;padding-top:47px;padding-left:22px;`;
const Clear = styled.div`clear:both;width:100%;`;
const Description = styled.div`font-family: Circular Medium; color : ${ color }; font-size:22px;margin-top:20px;margin-bottom:10px`;

const Stats = styled.div``;
const Stat = styled.div`margin-bottom:5px;`;
const StatTitle = styled.span`font-family: Circular Bold; color : ${ color };margin-right:15px;`;
const StatInfo = styled.span`font-family: Dutch Italic; color : ${ color }`;
const ResearchContainer = styled.div`
                position:absolute; top:621px; max-width:450px; min-width:300px; width:100%;
                padding-top:14px; left: 117px;
                border-top:1px solid ${ colorHL };
            `;
const ResearchTitle = styled.div`width:225px;margin:auto;margin-bottom:35px;`;
const ReadSome = styled.span`font-family: Circular Medium; color : ${ color };margin-right:5px;font-size:24px;`;
const Research = styled.span`font-family: Dutch Italic; color : ${ color };font-size:24px;`;

const CRHolder = styled.div`position:absolute;right:0;top:78px;cursor:pointer;`;
const CLHolder = styled.div`position:absolute;left:0;top:78px;cursor:pointer;`;

const ResearchCarosel = styled.div`width:100%;`
const ResearchArticle = styled.div`width:90%;margin:auto;`;
const ArticleLink = styled.a`font-family: Circular; font-size: 16px; color: ${ color }; width:100%; text-align:center`;
const ArticleAttribution = styled.div`font-family: Dutch Italic; color: ${ color }; font-size: 14px;margin-top:5px`;

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    render() {

        const {
            name, dosage, imagePath, description, foundIn, form, source, supplier,
            location, articleIdx, articles, setArticle, articlesLoop, mode,
            formChangeHandler, saveNewIngredient, deleteSelectedFromData
        } = this.props;

        console.log("DETAIL VIEW", this.props);

        return (
            <DetailContainer>
                <Fragment>
                    {mode === "newingredient"
                    ?(<Fragment>
                        <div style={{width: "100%"}}>
                            <div>
                                <TextField id="outlined-full-width-name" 
                                    label="Ingredient Name"
                                    style={{ margin: 8 }}
                                    placeholder="Name"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={name}
                                    onChange={(e)=>formChangeHandler("name", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-search" 
                                    label="Dosage" 
                                    value={dosage}
                                    style={{ margin: 8 }}
                                    placeholder="Dosage"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("dosage", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-description" label={"Description"} value={description}
                                    style={{ margin: 8 }}
                                    placeholder="Description"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("description", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-foundIn" label={"Found In"} value={foundIn} 
                                    style={{ margin: 8 }}
                                    placeholder="Found In"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("foundIn", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-form" label={"Form"} value={form} 
                                    style={{ margin: 8 }}
                                    placeholder="Forn"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("form", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-source" label={"Source"} value={source} 
                                    style={{ margin: 8 }}
                                    placeholder="Source"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("source", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-supplier" label={"Supplier"} value={supplier} 
                                    style={{ margin: 8 }}
                                    placeholder="Supplier"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("supplier", e.target.value)}></TextField></div>
                            <div><TextField id="outlined-full-width-location" label={"Location"} value={location} 
                                    style={{ margin: 8 }}
                                    placeholder="Location"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e)=>formChangeHandler("location", e.target.value)}></TextField></div>
                                    
                            <div>
                                <input
                                    accept="image/*"
                                    style={{display:"none"}}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={(e)=>formChangeHandler("imagePath", e.target.files)}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                            <Button variant="contained" 
                                color="primary" component="span" style={{marginTop:"15px"}} 
                                onClick={()=>{saveNewIngredient()}}>
                                Save Ingredient
                            </Button>
                        </div>

                    </Fragment>)
                    :(<Fragment>
                        <Fragment>{name !== "Nothing"
                            ?<DeleteButton onClick={deleteSelectedFromData}>X</DeleteButton>
                            :""}
                        </Fragment>
                        <DetailHead>
                        <DetailImage src={imagePath}/>
                        <DetailName>
                            <IName isDetail={true}>{name}</IName>
                            <Dosage isDetail={true}>{dosage}</Dosage>
                        </DetailName>
                        </DetailHead>
                        <Clear></Clear>
                        <Description>{description}</Description>
                        <Stats>
                        <Stat>
                            <StatTitle>Found In</StatTitle><StatInfo>{foundIn}</StatInfo>
                        </Stat>
                        <Stat>
                            <StatTitle>Form</StatTitle><StatInfo>{form}</StatInfo>
                        </Stat>
                        <Stat>
                            <StatTitle>Source</StatTitle><StatInfo>{source}</StatInfo>
                        </Stat>
                        <Stat>
                            <StatTitle>Supplier</StatTitle><StatInfo>{supplier}</StatInfo>
                        </Stat>
                        <Stat>
                            <StatTitle>Final Location of Manufacturing</StatTitle><StatInfo>{location}</StatInfo>
                        </Stat>
                        </Stats>
                        <ResearchContainer>
                        <ResearchTitle>
                            <ReadSome>Read some</ReadSome>
                            <Research>Research</Research>
                        </ResearchTitle>
                        <ResearchCarosel>
                            <Fragment>
                            {articles.length > 1 
                            ? (<CLHolder><CaretLeft
                                onClick={()=>{ 
                                    articlesLoop
                                    ?((articleIdx > 0)?setArticle(articleIdx-1):setArticle(articles.length-1))
                                    :((articleIdx > 0)?setArticle(articleIdx-1):setArticle(0))
                                }}
                            ></CaretLeft></CLHolder>) 
                            : "" }
                            </Fragment>
                            <ResearchArticle>
                            <ArticleLink href={articles[articleIdx].link} target="_blank">
                                {articles[articleIdx].title}
                            </ArticleLink>
                            <ArticleAttribution>
                                {articles[articleIdx].author} - {articles[articleIdx].year}
                            </ArticleAttribution>
                            </ResearchArticle>
                            <Fragment>
                            {articles.length > 1 
                            ? (<CRHolder><CaretRight 
                                    onClick={()=>{ 
                                    articlesLoop
                                    ?((articleIdx === articles.length - 1)?setArticle(0):setArticle(articleIdx+1))
                                    :((articleIdx === articles.length - 1)?setArticle(articleIdx):setArticle(articleIdx+1))
                                    }}></CaretRight></CRHolder>) 
                            : "" }
                            </Fragment>
                        </ResearchCarosel>
                        </ResearchContainer>
                    </Fragment>)
                    }
                </Fragment>
            </DetailContainer>
        );
    }
}

export default Detail;