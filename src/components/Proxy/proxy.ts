enum typeObject {
  A = "A",
  B = "B",
}

type PropsType = {
  data: number;
  type: typeObject | `${typeObject}`;
};

let obj = {
  A: null,
  B: null,
};
const SetObject = ({ data, type }: PropsType) => {
  obj = { ...obj, [type]: data };
  return obj;
};

export default function ProxyFunction({ data, type }: PropsType) {
  console.log(SetObject({ data: data, type: type }));
}
