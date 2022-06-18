import { Timestamp } from 'firebase/firestore';

export const transformLastOpenedData = (timestamp: Timestamp) => {
  const date = timestamp.toDate();

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
