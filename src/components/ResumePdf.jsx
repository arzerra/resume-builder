// src/components/ResumePDF.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Times-Roman",
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
    marginBottom: 8,
    textAlign: "center",
    color: "#444",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
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
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 1,
  },
  textItalic: {
    fontSize: 13,
    fontStyle: "italic",
    marginBottom: 2,
  },
  text: {
    fontSize: 12,
    marginBottom: 2,
    textAlign: "justify",
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
                <Text style={styles.textItalic}>{exp.role}</Text>
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
              <View>
                <Text style={styles.textBold}>{proj.name}</Text>
              </View>

              <View style={{ maxWidth: 150, textAlign: "right" }}>
                <Text style={styles.text}>
                  {proj.tags && proj.tags.length > 0 ? proj.tags.join(", ") : ""}
                </Text>
              </View>
            </View>

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
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 4 }}>
          {data.certificates.map((cert, index) => (
            <View
              key={index}
              style={{
                width: "50%",
                paddingRight: 8,
                marginBottom: 6,
                borderBottom: "1pt solid #ccc",
                paddingBottom: 4,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <View>
                  <Text style={styles.textBold}>{cert.name}</Text>
                  <Text style={[styles.text, { fontStyle: "italic" }]}>
                    {cert.issuer}
                  </Text>
                </View>
                <Text style={styles.text}>{cert.year}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.text}>No certificates added</Text>
      )}

    </Page>
  </Document>
);

export default ResumePDF;
