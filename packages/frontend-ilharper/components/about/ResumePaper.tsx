import React from 'react'
import { ResumeCore } from './ResumeCore'

const ResumePaper: React.FC = (props) => (
  <div>
    <style jsx>{`
      #paper {
        box-shadow: black 0 0 18px;
        max-width: min(80vw, 900px);
        margin: 36px;
        padding: 24px 0;
      }
    `}</style>
    <div id="paper">
      <ResumeCore />
    </div>
  </div>
)

export { ResumePaper }
