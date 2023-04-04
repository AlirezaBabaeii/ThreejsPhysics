import { useEffect, useState } from "react";

const RandomidStram = (): number => Math.floor(Math.random() * 10);

const Randomid = (): number => Math.floor(Math.random() * 150);

const RandomPos = (): number => Math.floor(Math.random() * 100);

type typeDataItem = {
  id: number;
  name: string;
  pos: number;
};

const useStreamData = (data: typeDataItem): number => {
  const [pos, setPos] = useState<number>(data.pos);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data.id === RandomidStram()) {
        setPos(RandomPos());
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [data.id]);

  return pos;
};

const useInitilaizObject = (): typeDataItem[] => {
  const [state, setState] = useState<typeDataItem[]>([
    { id: 1, name: "a", pos: 1 },
    { id: 2, name: "b", pos: 2 },
    { id: 3, name: "c", pos: 3 },
    { id: 4, name: "d", pos: 4 },
    { id: 4, name: "d", pos: 5 },
    { id: 4, name: "e", pos: 6 },
    { id: 4, name: "f", pos: 7 },
    { id: 4, name: "g", pos: 8 },
    { id: 4, name: "h", pos: 9 },
    { id: 4, name: "i", pos: 10 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState: typeDataItem[]) => [
        ...prevState,
        { id: Randomid(), name: `a ${Randomid()}`, pos: RandomPos() },
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return state;
};

const StreamComponent = (): JSX.Element => {
  const data: typeDataItem[] = useInitilaizObject();
  console.log("re-render-main ");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.map((item: typeDataItem) => {
        return <Model key={item.id} props={item} />;
      })}
    </div>
  );
};

type typeComponentProps = {
  props: typeDataItem;
};

export default StreamComponent;

const Model = ({ props }: typeComponentProps): JSX.Element => {
  const pos: number = useStreamData(props);

  console.log("re-render", props.id);

  return (
    <div style={{ border: "2px solid red", width: "100px", height: "60px" }}>
      <li>id: {props.id}</li>
      <li>name: {props.name}</li>
      <li>pos: {pos}</li>
    </div>
  );
};
