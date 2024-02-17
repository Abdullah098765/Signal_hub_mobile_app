import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useGetData from '../../../hooks/useGetData';
function CareereInfoListItem({ title, iconName, color,user_id }) {
      const { getCounts } = useGetData()

      const [count, setCount] = useState(null);
      useEffect(() => {
            async function effect() {
                  const _count = await getCounts(title, user_id)
                  setCount(_count)
                
            }
            effect()

      }, []);

      return <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
                  <View style={styles.gridItemContent}>
                        <View style={[styles.iconContainer, { borderWidth: 1, borderColor: color }]}>
                              <Ionicons name={iconName} color={color} size={22} />
                        </View>
                        <View style={styles.textContainer}>
                              <Text style={[styles.textBold, { color: color }]}>{title === "All" ? "Total Signals" : title + " Signals"}</Text>
                              <Text style={styles.textSecondary}>Lifetime</Text>
                        </View>
                        <Text style={[styles.statText, { color: color }]}>{count !== null ? count : <ActivityIndicator color={color} />}</Text>
                  </View>
            </View>
      </View>
}


const Careere = ({ user }) => {

    
      const careerInfoItems = [
            { title: "All", color: '#111827', iconName: "bar-chart-outline" },
            { title: "Good", color: "darkgreen", iconName: "checkmark" },
            { title: "Neutral", color: "rgb(37, 99, 235)", iconName: "remove" },
            { title: "Bad", color: "darkred", iconName: "close" },
            { title: "Active", color: "green", iconName: "radio-outline" },
      ];

      return (
            <View style={styles.container}>

                  <Text style={styles.title}>Careere</Text>
                  {careerInfoItems.map((item, index) => (
                        <CareereInfoListItem
                        user_id={user._id}
                              key={index}
                              title={item.title}
                              color={item.color}
                              iconName={item.iconName}
                        />
                  ))}
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'gray' }]}>
                                          <Ionicons name={"chatbox-ellipses-outline"} color={"gray"} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>{"Reviews"}</Text>
                                          <Text style={styles.textSecondary}>Lifetime</Text>
                                    </View>
                                    <Text style={[styles.statText, { color: "gray" }]}>{user?.reviews?.length || 0}</Text>
                              </View>
                        </View>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 8,
            margin: 5,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
      },
      title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
      },
      gridContainer: {
            marginTop: 15,
      },
      gridItem: {
            padding: 15,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ddd',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
      },
      gridItemContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginBottom: 10,
      },
      iconContainer: {
            width: 40,
            height: 40,
            backgroundColor: '#d8d8d8',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',

      },

      textContainer: {
            flex: 1,
            marginLeft: 10,
            alignContent: "center",
            // alignItems:"center",
            justifyContent: "center"
      },
      textBold: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
      },
      textSecondary: {
            fontSize: 12,
            color: '#666',
      },
      statContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      },
      circle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#4a90e2',
            justifyContent: 'center',
            alignItems: 'center',
      },
      statTextContainer: {
            flex: 1,
            alignItems: 'flex-end',
      },
      statText: {
            fontSize: 24,
            fontWeight: 'bold',
      },
});

export default Careere;
