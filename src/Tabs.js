import React, { useState, useEffect } from "react";
import "./styles.css";
const Tabs = ({ children }) => {
  const [tab, setTab] = useState([]);
  const [allTabs, setAllTabs] = useState([]);
  const [selectedTab, setSelected] = useState(0);
  useEffect(() => {
    let tabsContent = [];
    let gttabs = [];
    children.forEach((ele) => {
      let { title } = ele.props;
      gttabs.push(title);
      tabsContent.push(ele.props);
    });
    setTab([...tabsContent]);
    setAllTabs([...gttabs]);
  }, []);
  return (
    <div className="tabs-content">
      <div className="tabs__content">
        {allTabs.length > 0 &&
          allTabs.map((ele, index) => (
            <div key={index}>
              <button
                onClick={() => setSelected(index)}
                style={{ textTransform: "uppercase" }}
              >
                {ele}
              </button>
            </div>
          ))}
      </div>

      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        {tab?.length && tab[selectedTab].children}
      </div>
    </div>
  );
};
export default Tabs;
