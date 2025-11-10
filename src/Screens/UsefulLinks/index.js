import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import { styles } from './style';
import CurvedView from '../../Components/CurvedView';
import RobotoRegular from '../../Components/RobotoRegular';
import { icons } from '../../Assets';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';
import Loader from '../../Components/Loader';

const UsefulLinks = () => {
  const [linksData, setLinksData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.general.getLinks);
      console.log(res, 'API response for useful links');

      const apiData = res?.data?.useFullLinks || [];
      setLinksData(apiData);
    } catch (error) {
      console.log('Error fetching useful links:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TopView name={'Useful Links'} />

      <CurvedView>
        <View style={styles.usefulLinksContainer}>
          {loading ? (
            <Loader containerStyle={{ marginTop: 20 }} />
          ) : (
            linksData.map((item, index) => {
              return (
                <View key={item.linkId} style={styles.usefulCard}>
                  <Image style={styles.icon} source={icons.usefulCardIcon} />

                  <RobotoRegular style={styles.linkText} name={item.linkName} />

                  <Image
                    style={styles.ArrowIcon}
                    source={icons.arrowDirection}
                  />
                </View>
              );
            })
          )}
        </View>
      </CurvedView>
    </View>
  );
};

export default UsefulLinks;
