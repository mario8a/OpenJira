import { formatDistanceToNow } from 'date-fns';

export const getFormateDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date);

  return fromNow;
}