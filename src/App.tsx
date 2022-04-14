import React, { useCallback } from "react";
import "./App.css";

const Heading = (props: { title: string }) => <h2>{props.title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="innerBox">{children}</div>
);

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);
  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello World</Box>
      <List items={["one", "two", "three"]} onClick={onListClick} />
    </div>
  );
}

export default App;
