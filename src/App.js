import datajson from "./data/ingredients.json";
import styled from 'styled-components'
import React, { useState, Fragment } from 'react';
import IngredientList from "./IngredientList";

function App() {

  let articlesLoop = true;

  const colorHL = "#142B6F";

  const Top = styled.div`margin:auto;width:100%;max-width:850px;`

  const PrettyTitle = styled.div`
                  margin-left:275px;
                `;
  const ItalicTitle = styled.span`
                        font-family: Dutch Italic;
                        font-size: 40px;
                        color: ${ colorHL }
                      `;
  const BoldTitle = styled.span`
                            font-family: Circular Bold;
                            font-size: 40px;
                            color: ${ colorHL }
                          `;

  return (
    <div className="App">
      <Top>
        <PrettyTitle>
          <ItalicTitle>Essential</ItalicTitle><BoldTitle>Ingredients</BoldTitle>
        </PrettyTitle>
        <IngredientList articlesLoop={articlesLoop} data={datajson}>

        </IngredientList>
      </Top>
    </div>
  );
}

export default App;