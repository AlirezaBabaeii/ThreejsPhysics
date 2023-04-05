import ProxyFunction from "./proxy";

export default function A() {
  const handelChange = (value: string) => {
    const data = Number.parseInt(value);
    // console.log(data);
    ProxyFunction({ data: data, type: "A" });
  };
  return (
    <input type={"number"} onChange={(e) => handelChange(e.target.value)} />
  );
}
