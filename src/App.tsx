import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyup = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : `Nothing was pressed yet`}
      </p>
    </div>
  );
};
