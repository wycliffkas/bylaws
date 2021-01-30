import React, { useState } from "react";
import { Link } from "react-scroll";
import { TOC } from "../services/toc";

const TableContents = () => {
  const [collapsedSections, setCollapsedSections] = useState([]);

  const togglePanel = (id) => {
    const index = collapsedSections.indexOf(id);

    if (index > -1) {
      setCollapsedSections(collapsedSections.filter((section) => section !== id));
    } else {
      setCollapsedSections([...collapsedSections, id]);
    }
  };

  return (
    <div className="main">
      <h5>Table of Contents</h5>
      <ul>
        {TOC.map((item, index) => (
          <>
            <li className="main-section" key={index}>
              <Link
                activeclass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => togglePanel(item.id)}
              >
                {item.title}
              </Link>
            </li>
            <ul>
              {collapsedSections.includes(item.id)
                ? ""
                : item.children.map((item, index) => (
                    <li key={index}>
                      <Link
                        activeclass="active"
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TableContents;
