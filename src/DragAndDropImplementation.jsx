//------------------------------------------------
// BASIC STRIPPED BACK IMPLEMENTATION OF /////////
// DRAGGABLE AND DROPPABLE COMPONENTS ////////////
//------------------------------------------------


import { Draggable, Droppable } from './DragAndDrop';

function GroupMembersProposalPage() {
  return (
    <>
        <h3>Students</h3>
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
        <div className="paneProposals">
            <h3>Proposed members</h3>
            <Droppable className="droppableRegion" />
        </div>
    </>
  )
}

export default GroupMembersProposalPage;