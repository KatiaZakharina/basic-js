export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  try {
    date instanceof Date;
    date.toDateString();
    return seasons[~~(((date.getMonth() + 1) % 12) / 3)];
  } catch (e) {
    throw new Error('Invalid date!');
  }
}
