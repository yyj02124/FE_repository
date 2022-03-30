import { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentIndex: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
}; //커스텀 훅(커스텀 컴포넌트 가져오는거마냥 가져오면 안된다.)

export const Hooks = () => {
  const { currentIndex, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentIndex.content}</div>
      test
    </div>
  );
}; //컴포넌트
