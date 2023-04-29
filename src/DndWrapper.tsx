import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drag3Dmodel from "./components/3DModelDrag";

export function WrapperDnd() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Drag3Dmodel />
    </DndProvider>
  );
}
