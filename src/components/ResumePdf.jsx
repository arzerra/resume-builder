// src/components/ResumePDF.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { fontSize: 20, marginBottom: 10, fontWeight: "bold" },
  section: { marginBottom: 10 },
  label: { fontWeight: "bold" }
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>{data.personal.name}</Text>

      {/* Personal Info */}
      <View style={styles.section}>
        <Text style={styles.label}>Personal Information</Text>
        <Text>{data.personal.email}</Text>
        <Text>{data.personal.phone}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.label}>Experience</Text>
        <Text>{data.experience}</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.label}>Education</Text>
        <Text>{data.education}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.label}>Skills</Text>
        <Text>{data.skills}</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.label}>Projects</Text>
        <Text>{data.projects}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
