import React, { Component, createRef, useState } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions, TouchableHighlight, FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LinearGradient from "react-native-linear-gradient";
import PagerView from "react-native-pager-view";
import AppColors from "../config/colors";


const window = Dimensions.get("window");


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };

    this.viewPagerRef = createRef();
  }


  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          style={styles.fadedLayer}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["rgba(9, 25, 69, 1)", "rgba(9, 25, 69, 1)", "rgba(42, 59, 106, 1)"]}>

          <View
            style={styles.contentLayer}>
            <Text style={styles.headerText}>Hello Jane,</Text>

            <Text style={styles.subHeaderText}>What brings you here Today?</Text>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
              }}>

              <TouchableHighlight
                activeOpacity={1}
                style={[
                  this.state.selectedIndex == 0 ?
                    styles.activeHeaderButton
                    : styles.inactiveHeaderButton,
                  { marginEnd: 12 },
                ]}
                underlayColor={
                  this.state.selectedIndex == 0 ?
                    AppColors.pictonBlue :
                    AppColors.MediumTurquoise
                }
                onPress={() => {

                  this.viewPagerRef.current.setPage(0);
                  this.setState({ selectedIndex: 0 });
                }}>

                <Text
                  style={styles.headerButtonText}>
                  Venting Out
                </Text>

              </TouchableHighlight>


              <TouchableHighlight
                activeOpacity={1}
                onPress={() => {
                }}
                style={[
                  this.state.selectedIndex == 1 ?
                    styles.activeHeaderButton
                    : styles.inactiveHeaderButton,
                  , { marginStart: 12 }]}
                underlayColor={
                  this.state.selectedIndex == 1 ?
                    AppColors.pictonBlue :
                    AppColors.MediumTurquoise
                }
                onPress={() => {

                  this.viewPagerRef.current.setPage(1);

                  this.setState({ selectedIndex: 1 });
                }}>
                <Text
                  style={styles.headerButtonText}>
                  Calming
                </Text>

              </TouchableHighlight>

            </View>


            <PagerView
              style={styles.pagerView}
              ref={this.viewPagerRef}
              scrollEnabled={false}
              initialPage={0}>

              <View
                style={styles.container}>
                <FlatList
                  data={[
                    { title: "Voic It Out", imagePath: require("../../assets/voice_it_out.gif") },
                    { title: "Dummy Chat", imagePath: require("../../assets/dummy_chat.gif") },
                  ]}
                  renderItem={({ item }) =>

                    <View
                      style={styles.card}>

                      <ImageBackground
                        source={item.imagePath}
                        style={styles.cardImage}>
                        <View style={styles.fadedItemLayer}>


                          <Text style={styles.subHeaderItemText}>There are many variations of passages of Lorem Ipsum
                            available</Text>

                          <Text style={styles.headerItemText}>{item.title} </Text>


                        </View>
                      </ImageBackground>
                    </View>
                  }
                />
              </View>

              <View
                style={styles.container}>
                <FlatList
                  style={{
                    paddingBottom: 200,
                  }}
                  data={[
                    { title: "Meditation", imagePath: require("../../assets/meditation.gif") },
                    { title: "Breathing", imagePath: require("../../assets/breathing.gif") },

                  ]}
                  renderItem={({ item }) =>

                    <View
                      style={styles.card}>

                      <ImageBackground
                        source={item.imagePath}
                        style={styles.cardImage}>
                        <View style={styles.fadedItemLayer}>


                          <Text style={styles.subHeaderItemText}>There are many variations of passages of Lorem Ipsum
                            available</Text>

                          <Text style={styles.headerItemText}>{item.title} </Text>


                        </View>
                      </ImageBackground>
                    </View>
                  }
                />
              </View>

            </PagerView>

          </View>


        </LinearGradient>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  fadedLayer: {
    width: "100%",
    height: "100%",
  },
  contentLayer: {
    height: "100%",
    marginStart: 20,
    marginEnd: 20,
  },
  headerText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "700",
    marginTop: window.height * 0.1,
  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",
    marginTop: window.height * 0.02,
  },
  pagerView: {
    height: "100%",
    width: "100%",
    marginTop: 20,
    backgroundColor: Colors.transparent,
  },

  activeHeaderButton: {
    flex: 1,
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: AppColors.pictonBlue,
  },
  inactiveHeaderButton: {
    flex: 1,
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: AppColors.MediumTurquoise,
  },
  headerButtonText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 14,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.transparent,
  },
  card: {
    height: 225,
    paddingTop: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 15,
    resizeMode: "stretch",
  },
  fadedItemLayer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    flexDirection: "column-reverse",
  },
  headerItemText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "700",
    marginStart: 24,
    marginBottom: 12,
  },
  subHeaderItemText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "400",
    marginStart: 24,
    marginBottom: 20,
  },

});

export default HomeScreen;
