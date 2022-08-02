import { useEffect, useState } from "react";


const useCounter = (arg) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
			if (arg === 'forward') {
				setCounter((prevCounter) => prevCounter + 1);
			}
			if (arg === 'backword') {
				setCounter((prevCounter) => prevCounter - 1);
			}
    }, 1000);

    return () => clearInterval(interval);
  }, [arg]);

	return counter;
};

export default useCounter;
