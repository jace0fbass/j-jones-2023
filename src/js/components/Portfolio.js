import React, { useState} from "react";
import ProjRender from "./ProjRender";
import ProjCardData from "../../ProjCardData";

export default function Portfolio() {
  const [projList, setProjList] = useState(ProjCardData);

  return (
    <div id="portCards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projList.map((project) => (
          <ProjRender
            id={project.id}
            title={project.title}
            desc={project.description}
            tech={project.data}
            imageRoute={project.imageRoute}
            alt={project.alt}
            link={project.deployedLink}
            repo={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
