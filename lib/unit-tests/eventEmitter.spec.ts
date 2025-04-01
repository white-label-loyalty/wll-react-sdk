import { EventEmitter } from '../utils/eventEmitter';

describe('EventEmitter', () => {
  let eventEmitter: EventEmitter;

  beforeEach(() => {
    eventEmitter = new EventEmitter();
  });

  test('subscribes to events and receives notifications', () => {
    const callback = jest.fn();
    const eventType = 'TEST_EVENT';

    eventEmitter.on(eventType, callback);
    eventEmitter.emit(eventType);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('passes data to event callbacks', () => {
    const callback = jest.fn();
    const eventType = 'TEST_EVENT';
    const testData = { id: '123', value: 'test' };

    eventEmitter.on(eventType, callback);
    eventEmitter.emit(eventType, testData);

    expect(callback).toHaveBeenCalledWith(testData);
  });

  test('supports multiple subscribers for the same event', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const eventType = 'TEST_EVENT';

    eventEmitter.on(eventType, callback1);
    eventEmitter.on(eventType, callback2);
    eventEmitter.emit(eventType);

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test('unsubscribes from events correctly', () => {
    const callback = jest.fn();
    const eventType = 'TEST_EVENT';

    const unsubscribe = eventEmitter.on(eventType, callback);
    eventEmitter.emit(eventType);
    expect(callback).toHaveBeenCalledTimes(1);

    unsubscribe();
    eventEmitter.emit(eventType);
    expect(callback).toHaveBeenCalledTimes(1); // Still just once
  });

  test('clears all event listeners', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const eventType1 = 'TEST_EVENT_1';
    const eventType2 = 'TEST_EVENT_2';

    eventEmitter.on(eventType1, callback1);
    eventEmitter.on(eventType2, callback2);

    eventEmitter.clear();

    eventEmitter.emit(eventType1);
    eventEmitter.emit(eventType2);

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
  });

  test('handles events with no subscribers', () => {
    const eventType = 'UNSUBSCRIBED_EVENT';

    expect(() => {
      eventEmitter.emit(eventType);
    }).not.toThrow();
  });
});
