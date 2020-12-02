import { useState } from 'react';
import copy from 'copy-to-clipboard';

function useCopyClipboard() {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (text) => {
    if (typeof text === 'string') {
      copy(text.toString());
      setCopied(true);
    } else {
      setCopied(false);
      return;
    }
  };
  return [isCopied, handleCopy];
}

export default useCopyClipboard;
