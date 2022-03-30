import React, { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine); //2개를 onChange하나로 사용해서 실행 하느게 더 좋을것
    }
    setStatus(navigator.onLine); //내가 온라인 상태라면 이벤트리스너 때문에 바뀌고, setStatus의navigator.onLine이 setStatus의navigator.offline으로 바뀐다
  };
  useEffect(() => {
    window.addEventListener("online", handleChange); //온라인이면 handlechange
    window.addEventListener("offline", handleChange); //오프라인이면 handlechange
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }; //uncomponentwillunmount일떄 청소 해주 필요가 있다.했던걸 모두 지우는것 (근데 no-unused-expressions가뜬다.=> return을 안해줘서뜨는것)
  }, []);
  return status;
};

export const Network = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "Wejust went online" : "we are offline");
  };
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};
