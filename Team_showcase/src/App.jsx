import TeamMemberCard from './components/TeamMemberCard'
import './App.css'

function App() {
  const team = [
    {
      id:1,
      Team_Member: 'Samuel A',
      Job_Title: 'Frontend Developer',
    },
    {
      id:2,
      Team_Member:'Aadhya',
      Job_Title: 'Backend Developer',
    },
    {
      id:3,
      Team_Member: 'Advith',
      Job_Title: 'Cyber Security',
    },
    {
      id:4,
      Team_Member: 'Arav',
      Job_Title: 'Full Stack Developer',
    }
  ]
 

  return (
    <>
    <div>
      <h1>Team Members</h1>
      {team.map((Data)=> (
          <TeamMemberCard key={Data.id} Team_Member={Data.Team_Member} Job_Title={Data.Job_Title}/>
        ))}
    </div>
    </>
  )
}

export default App
