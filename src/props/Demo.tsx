import React from "react";
type Color = { color: string; name: string };
type Props = {
  name: string;
  age: number;
  children: React.ReactNode;
  changeName: (e: React.MouseEvent<HTMLHeadElement>) => void;
  list: Color[];
  options: "A" | "B" | "C" | "D";
  style: React.CSSProperties;
  // list: { color: string; name: string }[];
};

function Demo({
  age,
  name,
  children,
  changeName,
  list,
  options,
  style,
}: Props) {
  return (
    <div style={style}>
      <h1 onClick={changeName}>{`${name}-${age}`}</h1>
      {list.map(({ color, name }) => (
        <p key={color} style={{ background: color }}>
          {name}
        </p>
      ))}
      {children}
    </div>
  );
}

export default Demo;
