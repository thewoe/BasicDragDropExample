//------------------------------------------------
// MORE COMPLEX CODE EXAMPLE WITH STYLING FOR ////
// DEMONSTRATION WHEN RUN USING NPM RUN DEV //////
//------------------------------------------------

import { Draggable, Droppable } from './DragAndDrop';
import './App.scss';

function App() {
  return (
    <div className="card fullWidth">
              <form>
                <div className="formInstructions">
                  <h1>Basic Drag and Drop Example</h1>
                  <p>Use the form below to propose students you would like to work with on the project.
                    <br/>
                    You can propose any number of students.
                    <br/>
                    <span className="advice">Drag names from the students list into the dotted pane.</span>
                  </p>
                </div>
                <main className="mylinks">
                  <div className="paneFavourites">
                    <h3>Students</h3>
                    <div className="formEntry">
                      <input defaultValue="Ahm"/>
                    </div>
                    <div className="draggableItems">
                      <Draggable id="01" className="name fav">Josh GHANBARIPOUR</Draggable>
                      <Draggable id="02" className="name fav">Max KENNEAVY</Draggable>
                      <Draggable id="03" className="name fav">Duc NGUYEN</Draggable>
                      <Draggable id="04" className="name">Ahmed ABDULLAHI</Draggable>
                      <Draggable id="05" className="name">Sajad AHMAD</Draggable>
                      <Draggable id="06" className="name">Sarah AHMAD</Draggable>
                      <Draggable id="07" className="name">Tasveer AHMAD</Draggable>
                      <Draggable id="08" className="name">Akthar AHMED</Draggable>
                      <Draggable id="09" className="name">Daniyal AHMED</Draggable>
                      <Draggable id="10" className="name">Ahmed AMAVASEE</Draggable>
                    </div>
                </div>
                  <div className="paneProposals">
                    <h3>Proposed members</h3>
                    <Droppable className="droppableRegion" />
                  </div>
                </main>
              </form>
    </div>
  )
}

export default App;