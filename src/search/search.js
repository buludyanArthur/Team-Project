import React, {useState} from "react";
const teamDatas = [
    "mary",
    "bella",
    "artur",
    "laura",
    "rob"
  ];


  function SearchBar() {
    const [teams, setTeams] = useState(teamDatas);
    const [search, setSearch] = useState("");
  
    return (
      <div className='test'>
        <input
          onChange={e => {
            const test = teamDatas.filter(team => {
              return team.toLowerCase().includes(e.target.value.toLowerCase());
            });
            console.log("test: ", test);
  
            setTeams(test);
            setSearch(e.target.value);
          }}
          type="text"
          value={search}
        />
        {teams.map(team => (
          <p key={team}>{team}</p>
        ))}
      </div>
    );
  }
export default SearchBar