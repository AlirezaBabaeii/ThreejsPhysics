import ProxyFunction from "./proxy";

export default function B() {
  const handelChange = (value: string) => {
    const data = Number.parseInt(value);
    ProxyFunction({ data: data, type: "B" });
  };

  return (
    <input type={"number"} onChange={(e) => handelChange(e.target.value)} />
  );
}
