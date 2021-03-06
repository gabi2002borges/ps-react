import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithShadow1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.limpar}>Limpar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(194,42,31,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  limpar: {
    color: "rgba(255,255,255,1)",
    fontSize: 14
  }
});

export default MaterialButtonWithShadow1;
