import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = ({ navigateToHome, navigateToSearch, navigateToAbout, navigateToCart }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navButton} onPress={navigateToHome}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/bc75/9a41/093cba2766d54158bd7ef8985600558b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKiLAn~4GA2YX6nD9TUlY4r0YZi2xP2M6hlpOYpUk4NN4sx6ZQuCx801N7LqVXPKzx813IyTPq7sw9yjk~aF3P7wIEfGwmnxqS18RN1WmaUjtcMGZrC7k~pNPLizSEAIa2EJE8k-egIO~oTkJiHrO-9Lh8qlbwnq3x3wLahRFbpp5plmhbPOVFqc4fxdEPiBotgpQJx5wLwlU07XFaJEC0uMH34K4wQXGoRvZw0sSscItGmlIVTazB6qwRSRh0k8SMDMbp89hKRl1pUhgnKAWM56DRgZpKQXdGntddfj-fLAwHhrGU4V2S-upZKensaO9vZ~R6aQMx0uc9w3~j6QVA__' }}
          style={styles.ImageIcon}
          testID="home-icon"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={navigateToSearch}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/4645/2069/6b2d6a281f1a2f82508b74260a6738c7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPi7GSBgEBXa2wsnTdk7-fOIJTROl~xKdUR4b2lBjV0ydAfHOhahN2BkNSfVZ-QkhOsNPV-zZoKRIGs47CMvctgcV5MAPifnL41fiuBvEslf9lXJ8IiemeCYLM8LDL91tSggy-dS~t-LXxtlykc7jln-V7ViTZo6wYlmNiNmnQ59nyR-Xyrfy3fbgvlxylyxnx2J53HsPJ0TVDFs~HJl1EHFbVkQN6h7QNtv2fZ5tdPy5zEH9m8rvZ8kYSY1~RR5Nb-gMWPdI7vg75CoSE9QxLjbV-R5Rl3J2Hw3RugSAxNvd~aJfQuxi77vxT~cI38wP4jGGbbi3AL1umGifLBl2g__' }}
          style={styles.ImageIcon}
          testID="search-icon"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={navigateToAbout}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/4638/0370/b4b18fe4ba44e55e0971903eecb28a52?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLrLgjf-Ll2t8ixqdbMolYHN22K7WgSXw-MvcQILapC5kblDpFKD3id18Txb32jRtLpbN1RqE0B7pwIYrp1KvV44kZP1PXsZSj7ER-3rkWTY6mk1SWDUFCzFjV4hF4pzWH8wmWhKkIeG~qnpBBmAJmBC5ukD~I~ukM972mNwo-sbOvV9CK5MKyBZmQuQPh9TrnFS9dXPCx8aUwNf5CPcZdspszeMB0SqGhD~JPH8jg8lskLErwNwpTqqTSHPoqTUx~45fkA9W7bLDXOmQ~yy8vq7kIsHoJvJr8LRFj5lnoJIiFNBYfOF2jO9quLFmGuE1exI97V~IBkGGiyHqyfoqw__' }}
          style={styles.ImageIcon}
          testID="about-icon"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/eb03/3734/664d84745e68b838e30e3291bcfbdefe?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lnO--tkzGALpex21VEJ65JnRCbz57t1TPFzFuOiAeS-N~JBIYpTclT53Ew20yna-W2mNmUO5bAL1bpMWfRvS~oniW-~MYiu37IlKjElwn6DlgmF0A~bNCCkN1hrSlOmTyW-VzJOdW~hnl3LgHqChuupwyNDWWFLqXNjARpNBLvxUV8A1JYsZR8xcTuPHUy-1CGmfgZwqdtKWoTru4lAwCllbZ6ZR4c7SsMkdbLA4x5PQx1X4Qm6NK1XfE1D9mqkOHZ-KRPxp0TOy5hTmL3S3tY0lSq8dCeocQgSdhDWRV2wgpEyEOqmhEuPduNRlBO6Ono9zzqxfb4JS9rWmSF-Jiw__' }}
          style={styles.ImageIcon}
          testID="order-history-icon"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={navigateToCart}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/5cc6/9145/5f3f5f290b99696ca0ae5646763d9d2b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ou9hnBVXPOCsIR4uXFTMr9glagNQ9eSvGlWLNWsvX7lNGdmurXgfUSRN3-3n6dgOJvuJY01kjlM9uva~SVuvRQOLfsMCkAGNus7oh7MwxdoqmZ8N60jUQzi12O00nPF~ctN0vySLM8tT6Pw3sQB-vkr3NOrhbl3G6L4gjzn3SktTCKvzDd~Nu4oZ0RmYF2UO0tGpO9IwO0A2XhTs4DD4~qBowTmDbG4k-FPH18OlKKKH~nhlPWnxcjV0jveBzlJDR8dunROPjpAsDPmis1G89K5Np3tqNoH34wj~Eh0CSnSZ1OM2f2wgQ0fR0ivPN5uV0qbc4xLdIwCNdagaCF-zkg__' }}
          style={styles.ImageIcon}
          testID="cart-icon"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  ImageIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Footer;



