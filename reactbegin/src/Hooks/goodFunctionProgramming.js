const useNotifcation = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotifcation("can i steal your kimchi?", {
    body: "I love kimchi don't you?",
  });
  return (
    <div className="App" style={{ height: "1000px" }}>
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
};

//훅은 아니지만 좋은 function programming이다.
