import { NavigationType } from '../types/navigation';
import { parseNavigationLink } from '../utils/navigationHelpers';

describe('parseNavigationLink', () => {
  describe('External Links', () => {
    it('parses http links as external', () => {
      const result = parseNavigationLink('http://example.com');
      expect(result).toEqual({
        type: 'external' as NavigationType,
        target: 'http://example.com',
      });
    });

    it('parses https links as external', () => {
      const result = parseNavigationLink('https://example.com');
      expect(result).toEqual({
        type: 'external' as NavigationType,
        target: 'https://example.com',
      });
    });

    it('parses mailto links as external', () => {
      const result = parseNavigationLink('mailto:test@example.com');
      expect(result).toEqual({
        type: 'external' as NavigationType,
        target: 'mailto:test@example.com',
      });
    });

    it('handles complex external URLs', () => {
      const complexUrl =
        'https://example.com/path?param1=value1&param2=value2#section';
      const result = parseNavigationLink(complexUrl);
      expect(result).toEqual({
        type: 'external' as NavigationType,
        target: complexUrl,
      });
    });
  });

  describe('Modal Links', () => {
    it('parses hash links as modal', () => {
      const result = parseNavigationLink('#modal-id');
      expect(result).toEqual({
        type: 'modal' as NavigationType,
        target: 'modal-id',
      });
    });

    it('handles empty hash', () => {
      const result = parseNavigationLink('#');
      expect(result).toEqual({
        type: 'modal' as NavigationType,
        target: '',
      });
    });
  });

  describe('Internal Links', () => {
    it('parses relative paths as internal', () => {
      const result = parseNavigationLink('/some/path');
      expect(result).toEqual({
        type: 'internal' as NavigationType,
        target: '/some/path',
      });
    });

    it('parses root path as internal', () => {
      const result = parseNavigationLink('/');
      expect(result).toEqual({
        type: 'internal' as NavigationType,
        target: '/',
      });
    });

    it('parses paths with query parameters as internal', () => {
      const result = parseNavigationLink('/path?param=value');
      expect(result).toEqual({
        type: 'internal' as NavigationType,
        target: '/path?param=value',
      });
    });

    it('handles empty string as internal', () => {
      const result = parseNavigationLink('');
      expect(result).toEqual({
        type: 'internal' as NavigationType,
        target: '',
      });
    });
  });
});
