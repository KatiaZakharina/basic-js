export default function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
//   try {
//     date.parse();
//  }
//  catch (e) {
//   throw new Error('Invalid date!'); 
//  }
}
