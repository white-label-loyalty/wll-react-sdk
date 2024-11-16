import { NavigationType } from '../types/navigation';

export const parseNavigationLink = (
  link: string
): { type: NavigationType; target: string } => {
  let result: { type: NavigationType; target: string };
  if (
    link.startsWith('http://') ||
    link.startsWith('https://') ||
    link.startsWith('mailto:')
  ) {
    result = { type: 'external', target: link };
  } else if (link.startsWith('#')) {
    result = { type: 'modal', target: link.slice(1) };
  } else {
    result = { type: 'internal', target: link };
  }
  return result;
};
