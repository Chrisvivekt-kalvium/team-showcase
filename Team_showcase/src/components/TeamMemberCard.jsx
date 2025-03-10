import React from 'react'

function TeamMemberCard({Team_Member, Job_Title}) {
  return (
    <div>
        <p>{Team_Member}</p>
        <p>{Job_Title}</p>
    </div>
  )
}

export default TeamMemberCard
