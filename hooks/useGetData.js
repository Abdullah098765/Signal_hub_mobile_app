const useGetData = () => {

      const getCounts = async (type, pId) => {

            try {
                  // Replace 'yourId' with the actual value of _id

                  const response = await fetch('https://signal-hub.vercel.app/api/get-profile-signal-data', {
                        method: 'POST',
                        body: JSON.stringify({
                              currentprofileRoute: type,
                              _id: pId,
                              page: 1,
                              isOnlyCount: true
                        }),
                  });

                  if (response.ok) {
                        const data = await response.json();
                        if (!data[0]) {
                              return 0
                        }
                        else return data[0].count
                  } else {
                        console.error('Error fetching data');
                  }
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };
      const getProfileSignals = async (setIsSignalsLoading, currentprofileRoute, user_id, page, setSignals, setiseSignalsEnd, signals) => {
            setIsSignalsLoading(true)

            try {
                  // Replace 'yourId' with the actual value of _id

                  const response = await fetch('https://signal-hub.vercel.app/api/get-profile-signal-data', {
                        method: 'POST',
                        body: JSON.stringify({
                              currentprofileRoute,
                              _id: user_id,
                              page: page,
                              isOnlyCount: false
                        }),
                  });

                  if (response.ok) {
                        const data = await response.json();
                        if (!signals) {
                              setSignals([])
                        }
                        if (Array.isArray(data)) {
                              setSignals(prevSignals => {
                                    // Concatenate the new data to the existing signals array
                                    if (data.length === 0) { setiseSignalsEnd(true) }
                                    const updatedSignals = [...prevSignals, ...data];

                                    // Use a set to efficiently remove duplicates based on a specific condition
                                    const uniqueSignals = Array.from(new Set(updatedSignals.map(signal => signal._id)))
                                          .map(_id => updatedSignals.find(signal => signal._id === _id));

                                    return uniqueSignals;
                              });
                              setIsSignalsLoading(false)

                        } else {
                              setIsSignalsLoading(false)
                              // Handle the case where the data is not an array, log an error, or take appropriate action.
                        }
                        console.log(data);
                        setIsSignalsLoading(false)

                  } else {
                        console.error('Error fetching data');
                  }
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };
      return {
            getCounts,
            getProfileSignals
      }
}


export default useGetData;
