import React, { useState} from "react";
import ProjRender from "./ProjRender";
import ProjCardData from "../../ProjCardData";

export default function Portfolio() {
  const [projList, setProjList] = useState(ProjCardData);

  return (
    <div id="portCards">
      <div id="projCol" className="row row-cols-1 row-cols-md-3 g-4">
        {projList.map((project) => (
          <ProjRender
            id={project.id}
            title={project.title}
            description={project.description}
            skills={project.skills}
            imageRoute={project.imageRoute}
            alt={project.alt}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
