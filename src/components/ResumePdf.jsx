// src/components/ResumePDF.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Times-Roman", // closest to serif
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 4,
  },
  subHeader: {
    fontSize: 10,
    marginBottom: 12,
    textAlign: "center",
    color: "#444",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 2,
  },
  section: {
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textBold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 11,
    marginBottom: 2,
  },
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* PERSONAL */}
      <Text style={styles.header}>{data.personal.name || "Your Name"}</Text>
      <Text style={styles.subHeader}>
        {[data.personal.phone, data.personal.email, data.personal.location]
          .filter(Boolean)
          .join(" • ")}
      </Text>

      {/* EDUCATION */}
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={[styles.flexRow, styles.section]}>
        <View>
          <Text style={styles.textBold}>{data.education.school}</Text>
          <Text style={styles.text}>{data.education.course}</Text>
        </View>
        <View>
          <Text style={styles.textBold}>{data.education.year}</Text>
        </View>
      </View>

      {/* EXPERIENCE */}
      <Text style={styles.sectionTitle}>Experience</Text>
      <Text style={styles.text}>{data.experience}</Text>

      {/* SKILLS */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>{data.skills}</Text>

      {/* PROJECTS */}
      <Text style={styles.sectionTitle}>Projects</Text>
      <Text style={styles.text}>{data.projects}</Text>
    </Page>
  </Document>
);

export default ResumePDF;
