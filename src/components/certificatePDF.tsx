import {
  Document,
  Image,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { use, useEffect, useState } from "react";

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
      backgroundColor: "#ffffff",
      padding: 50,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
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
    },
    boldText: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "justify",
      lineHeight: 1.5,
      marginBottom: 10,
    },
    signature: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 1,
      padding: 30,
    },
    signatureImage: {
      width: 106,
      height: 50,
      backgroundColor: "white",
    },
  });

  console.log("props", props);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Certificate of Completion</Text>
        {props.photo && <Image style={styles.image} src={props.photo} />}
        <Text style={styles.text}>
          This certificate is awarded to{" "}
          <Text
            style={styles.boldText}
          >{`${props.name} ${props.surname}`}</Text>{" "}
          for completing the Mood Checker survey on{" "}
          <Text
            style={styles.boldText}
          >{`${props.dateOfSurvey}, ${props.timeOfSurvey}`}</Text>
          .
        </Text>
        <Text style={styles.text}>
          According to our system,{" "}
          <Text style={styles.boldText}>{props.name}</Text> was feeling{" "}
          <Text style={styles.boldText}>{props.discoveredMood}</Text> during the
          survey. <Text style={styles.boldText}>{props.name}</Text> also
          indicated that they were feeling{" "}
          <Text style={styles.boldText}>{props.predictedMood}</Text> at the time
          of the check.
        </Text>
        <Text style={styles.text}>
          We hereby certify that this person completed the survey fairly and
          that the results of the survey are valid.
        </Text>
        <View style={styles.signature}>
          <Text style={styles.text}>Quality controller Mr. J. Smith: </Text>
          <Image style={styles.signatureImage} src="signature.png" />
        </View>
      </Page>
    </Document>
  );
};

const CertificatePDF = (props: CertificateProps) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <PDFDownloadLink
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
