import { useState } from "react";
export default function TopBar() {
  const [homeCount, setHomeCount] = useState(0);
  const [networkCount, setNetworkCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [notificationsCount, setNotificationsCount] = useState(0);
  return (
    <>
      <div
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 50px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            style={{ width: 40, height: 40, marginRight: 5 }}
          />
          <input
            type="text"
            placeholder="🔍Search"
            style={{ background: "#e4e0e1", border: "none", borderRadius: 2 }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
              alt=""
              style={{ width: 40, height: 40, marginRight: 10 }}
            />{" "}
            {homeCount}
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11439/11439777.png"
              alt=""
              style={{ width: 40, height: 40, marginRight: 10 }}
            />{" "}
            {networkCount}
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png"
              alt=""
              style={{ width: 40, height: 40, marginRight: 10 }}
            />{" "}
            {jobsCount}
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/739/739235.png"
              alt=""
              style={{ width: 40, height: 40, marginRight: 10 }}
            />{" "}
            {messageCount}
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png"
              alt=""
              style={{ width: 40, height: 40, marginRight: 5 }}
            />{" "}
            {notificationsCount}
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => setHomeCount(homeCount + 1)}>
          changeHomeCount
        </button>
        <button onClick={() => setNetworkCount(networkCount + 1)}>
          changeNetworkCount
        </button>
        <button onClick={() => setJobsCount(jobsCount + 1)}>
          changeJobsCount
        </button>
        <button onClick={() => setMessageCount(messageCount + 1)}>
          changeMessageCount
        </button>
        <button onClick={() => setNotificationsCount(notificationsCount + 1)}>
          changeNotificationCount
        </button>
      </div>
    </>
  );
}
