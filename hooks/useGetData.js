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
      return {
            getCounts
      }
}


export default useGetData;
