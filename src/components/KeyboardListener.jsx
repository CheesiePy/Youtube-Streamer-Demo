import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * KeyboardListener component
 * listens for specified key events and invokes callbacks
 * can wrap children or be used standalone
 */
export default function KeyboardListener({
  keys = [],       // array of key strings to listen for (e.g. ['Enter', 'Escape'])
  onKeyDown,       // callback for keydown event
  onKeyUp,         // callback for keyup event
  children         // optional children to render inside listener
}) {
  useEffect(() => {
    // handler for keydown
    const handleKeyDown = (e) => {
      if (keys.includes(e.key) && typeof onKeyDown === 'function') {
        onKeyDown(e);
      }

      // alert the key pressed and the key code

      alert(`Key pressed: ${e.key}, Key code: ${e.keyCode}`);

    };
    
    // handler for keyup
    const handleKeyUp = (e) => {
      if (keys.includes(e.key) && typeof onKeyUp === 'function') {
        onKeyUp(e);
      }
    };


    // attach listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // cleanup on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keys, onKeyDown, onKeyUp]);

  // render children if provided, else null
  return children || null;
}

// prop type validation
KeyboardListener.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  children: PropTypes.node
};
