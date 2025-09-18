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
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
    color: "#444",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
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
    marginBottom: 1,
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
      {data.education.map((edu, index) => (
        <View key={index} style={[styles.flexRow, styles.section]}>
          <View>
            <Text style={styles.textBold}>{edu.school}</Text>
            <Text style={styles.text}>{edu.course}</Text>
          </View>
          <View>
            <Text style={styles.text}>{edu.year}</Text>
          </View>
        </View>
      ))}


      {/* EXPERIENCE */}
      <Text style={styles.sectionTitle}>Experience</Text>
      {data.experience && data.experience.length > 0 ? (
        data.experience.map((exp, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.flexRow}>
              <View>
                <Text style={styles.textBold}>{exp.company}</Text>
                <Text style={styles.text}>{exp.role}</Text>
              </View>
              <View>
                <Text style={styles.text}>{exp.year}</Text>
              </View>
            </View>
            {exp.description ? (
              <Text style={styles.text}>{exp.description}</Text>
            ) : null}
          </View>
        ))
      ) : (
        <Text style={styles.text}>No experience added</Text>
      )}

      {/* SKILLS */}
      <Text style={styles.sectionTitle}>Skills</Text>
      {data.skills && data.skills.length > 0 ? (
        <Text style={styles.text}>{data.skills.join(", ")}</Text>
      ) : (
        <Text style={styles.text}>No skills added</Text>
      )}


      {/* PROJECTS */}
      <Text style={styles.sectionTitle}>Projects</Text>
      {data.projects && data.projects.length > 0 ? (
        data.projects.map((proj, index) => (
          <View key={index} style={styles.section}>
            {/* Top row: Name + Tags */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
              {/* Left side: name */}
              <View>
                <Text style={styles.textBold}>{proj.name}</Text>
              </View>

              {/* Right side: tags */}
              <View style={{ maxWidth: 150, textAlign: "right" }}>
                <Text style={styles.text}>
                  {proj.tags && proj.tags.length > 0 ? proj.tags.join(", ") : ""}
                </Text>
              </View>
            </View>

            {/* Description below (full width) */}
            {proj.description ? (
              <Text style={[styles.text, { marginTop: 4, textAlign: "justify" }]}>
                {proj.description}
              </Text>
            ) : null}
          </View>
        ))
      ) : (
        <Text style={styles.text}>No projects added</Text>
      )}


       {/* CERTIFICATES */}
      <Text style={styles.sectionTitle}>Certificates</Text>
      {data.certificates && data.certificates.length > 0 ? (
        data.certificates.map((cert, index) => (
          <View key={index} style={[styles.section]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={styles.textBold}>{cert.name}</Text>
                <Text style={styles.text}>{cert.issuer}</Text>
              </View>
              <Text style={styles.text}>{cert.year}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.text}>No certificates added</Text>
      )}






    </Page>
  </Document>
);

export default ResumePDF;
