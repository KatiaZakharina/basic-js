export default function sortByHeight(arr) {
  let sorted=arr.slice();
  for(let i=0; i<sorted.length; i++){
    if(sorted[i]==-1) {
      sorted.splice(i,1);
      i--;
    }
  }
  sorted=sorted.sort((a,b)=>{return a-b});

  for(let i=0,j=0; i<arr.length; i++){
    if(arr[i]!=-1){
       arr.splice(i, 1, sorted[j]);
       j++;
    }
  }
  return arr;
}
