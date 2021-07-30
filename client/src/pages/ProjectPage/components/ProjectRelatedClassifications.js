import React from 'react'
import '../../../styles/Styles.css'

const ProjectRelatedClassifications = ({
   projectPrimaryName,
   projectSecondaryName,
   projectTertiaryName
}) => {
   return (
      <div className="border-bottom border-top">
         <u className="force-left">Classifications</u>
         <p>{projectPrimaryName}</p>
         <p>{projectSecondaryName}</p>
         <p>{projectTertiaryName}</p>
      </div>
   )
}

export default ProjectRelatedClassifications
