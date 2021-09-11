export default function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  for(let i=0; i<members.length;i++){
    if(typeof members[i]!='string') delete members[i];
  }
  return members.map(i=>(i.trim())[0].toUpperCase()).sort().join('');
}