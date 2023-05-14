import { Document, Page, View, Text, Link, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 40,
    },
    section: {
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 30,
      marginBottom: 10,
    },
    socialIcons: {
      flexDirection: 'row',
      marginTop: 10,
    },
    icon: {
      marginRight: 20,
      width: 30,
      height: 30,
    },
    link: {
      color: 'blue',
    },
    social: {
      textAlign: 'center',
    }
  });
  
  const insta = "https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png"
  const fb = "https://www.facebook.com/images/fb_icon_325x325.png"
  const tiktok = "https://static.vecteezy.com/system/resources/previews/006/057/996/original/tiktok-logo-on-transparent-background-free-vector.jpg"
  
  const youtube = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
  
  export const PDFContent = () => (
    <Document style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" style={styles.profilePicture} />
          <Text style={{ color: '#334155', fontSize: 18, fontWeight: 'bold', marginBottom: 20, opacity: 1 }}>Raquel Watson</Text>
          <Text style={{ color: "#94a3b8", marginBottom: 10, opacity: 1, textTransform: 'uppercase' }}>Los Angeles, California</Text>
          <Text style={{ color: '#475569', marginBottom: 10, textDecoration: 'none' }}>Software Developer</Text>
          <Text style={{ color: '#475569', marginBottom: 15 }}>Google</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.socialIcons}>
            <Link src="https://www.instagram.com/" style={styles.link} target="_blank">
              <Image src={insta} style={styles.icon} />
            </Link>
            <Link src="https://www.facebook.com/" style={styles.link} target="_blank">
            <Image src={fb} style={styles.icon} />
            </Link>
            <Link src="https://www.youtube.com/" style={styles.link} target="_blank">
            <Image src={youtube} style={styles.icon} />
            </Link>
            <Link src="https://www.tiktok.com/" style={styles.link} target="_blank">
            <Image src={tiktok} style={styles.icon} />
            </Link>
          </View>
        </View>
        <View>
          <Text style={{ marginBottom: 10 }}>I am a passionate and dedicated software developer with a keen interest in solving complex problems through coding. With a solid foundation in Programming Technologies, I enjoy creating efficient and innovative solutions that exceed expectations. Collaborative by nature, I thrive in team environments where I can contribute my skills and continuously learn from others.</Text>
        </View>
      </Page>
    </Document>
  );
  