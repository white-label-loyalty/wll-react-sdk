/**
 * Type definition for event callback functions
 * @typedef {function} EventCallback
 * @param {any} [data] - Optional data passed with the event
 */
export type EventCallback = (data?: any) => void;

/**
 * Supported event types for the SDK event system
 * @typedef {string} EventTypes
 */
export type EventTypes =
  | 'GROUP_DATA_CHANGED'
  | 'SECTION_DATA_CHANGED'
  | 'TILE_DATA_CHANGED'
  | string;

/**
 * A simple event emitter for handling SDK events
 * Provides a pub-sub mechanism for components to communicate
 */
export class EventEmitter {
  /**
   * Map of event types to arrays of callback functions
   * @private
   */
  private events: Map<EventTypes, EventCallback[]> = new Map();

  /**
   * Subscribe to an event
   * @param {EventTypes} event - The event type to subscribe to
   * @param {EventCallback} callback - The callback function to execute when the event is emitted
   * @returns {Function} An unsubscribe function that removes this callback when called
   */
  on(event: EventTypes, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    this.events.get(event)?.push(callback);

    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  /**
   * Emit an event with optional data
   * @param {EventTypes} event - The event type to emit
   * @param {any} [data] - Optional data to pass to the event callbacks
   */
  emit(event: EventTypes, data?: any): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  /**
   * Remove all event listeners
   * Use this method to clean up when the event emitter is no longer needed
   */
  clear(): void {
    this.events.clear();
  }
}

/**
 * Singleton instance of the EventEmitter for use throughout the SDK
 */
export const sdkEventEmitter = new EventEmitter();
