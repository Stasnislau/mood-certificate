import {
  Document,
  Image,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

interface CertificateProps {
  name: string;
  surname: string;
  predictedMood: string;
  discoveredMood: string;
  dateOfSurvey: string;
  photo: string | undefined;
  timeOfSurvey: string;
}

const Certificate = (props: CertificateProps) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      padding: 50,
      fontFamily: "Helvetica",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
      fontFamily: "Times-Bold",
      color: "#FF5A5F",
    },
    image: {
      width: "100%",
      marginBottom: 20,
    },
    text: {
      fontSize: 14,
      textAlign: "justify",
      lineHeight: 1.5,
      marginBottom: 10,
      fontFamily: "Times-Roman",
    },
    boldText: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "justify",
      lineHeight: 1.5,
      marginBottom: 10,
      fontFamily: "Times-Bold",
    },
    signature: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: "#ccc",
    },
    signatureText: {
      fontSize: 12,
      fontFamily: "Times-Roman",
    },
    signatureImage: {
      width: 106,
      height: 50,
      backgroundColor: "white",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Mood Certificate</Text>
        {props.photo && <Image style={styles.image} src={props.photo} />}
        <Text style={styles.text}>
          This certificate is awarded to{" "}
          <Text style={styles.boldText}>
            {`${props.name} ${props.surname}`}
          </Text>{" "}
          for successfully completing the Mood Checker survey on{" "}
          <Text style={styles.boldText}>
            {`${props.dateOfSurvey}, ${props.timeOfSurvey}`}
          </Text>
          .
        </Text>
        <Text style={styles.text}>
          Our system detected that during the survey,{" "}
          <Text style={styles.boldText}>{props.name}</Text> was feeling{" "}
          <Text style={styles.boldText}>{props.discoveredMood}</Text>.
          Additionally, they reported feeling{" "}
          <Text style={styles.boldText}>{props.predictedMood}</Text>.
        </Text>
        <Text style={styles.text}>
          We hereby certify that this person completed the survey fairly and
          that the results are valid.
        </Text>
        <View style={styles.signature}>
          <Text style={styles.signatureText}>
            Quality controller: Mr. J. Smith
          </Text>
          <Image style={styles.signatureImage} src="signature.png" />
        </View>
      </Page>
    </Document>
  );
};

const CertificatePDF = (props: CertificateProps) => {
  const styles = StyleSheet.create({
    link: {
      textDecoration: "none",
      color: "#fff",
    },
  });
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <PDFDownloadLink
      style={styles.link}
      document={<Certificate {...props} />}
      fileName="certificate.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};

export default CertificatePDF;
