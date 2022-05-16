import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#C70404',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: Dimensions.get('window').height,
    },
    containerHead: {
        flex: 1,
        backgroundColor: '#C70404',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: Dimensions.get('window').height - 92,
    },
    containerHead2: {
        flex: 1,
        backgroundColor: '#C70404',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: Dimensions.get('window').height - 123,
    },
    cat: {
        paddingTop: 30, paddingBottom: 0, paddingHorizontal: 20, width: '100%', flex : 1, alignItems: 'center'
    },
    catimg: {
        paddingTop: 30, paddingBottom: 0, paddingHorizontal: 20, marginHorizontal: 'auto' ,width: Dimensions.get('window').width,
    },
    catdetails: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width,
    },
    // detail: {
    //     width: '100%',
    //     backgroundColor: '#000',
    //     color: '#fff',
    // },
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#C70404',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    JCbetween: {
        flex: 1,
        justifyContent: 'space-between',
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
    },
    btn: {
        borderWidth: 1,
        backgroundColor: "#000",
        borderColor: "#000",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",
        width: Dimensions.get('window').width - 40,
    },
    Row:{
        width:Dimensions.get('window').width,
        justifyContent:"space-evenly",
        flexDirection:"row"
    },
    BoxDash: {
        borderWidth: 1,
        backgroundColor: "#000",
        borderColor: "#000",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center",
        height:100,
        width: (Dimensions.get('window').width - 40)/2,
    },
    btn1: {
        borderWidth: 1,
        backgroundColor: "#000",
        borderColor: "#000",
        // paddingHorizontal: 16,
        // paddingVertical: 14,
        // borderRadius: 30,
        alignItems: "center",
        // width: Dimensions.get('window').width - 40,
        width: Dimensions.get('window').width,
    },
    input: {
        fontSize: 16,
        color: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: "#000",
        borderRadius: 30,
        width: Dimensions.get('window').width - 40,
    },
    h1: {
        fontSize: 28,
        color: "#fff",
        fontWeight : '700',
        textAlign: 'center',
    },
    h2: {
        fontSize: 22,
        color: "#fff",
        fontWeight : '700',
        textAlign: 'center',
    },
    p: {
        fontSize: 16,
        color: "#fff",
        textAlign: 'center',
    },
    bold: {
        fontWeight: '700',
    },
    mb10: {
        marginBottom: 10,
    },
    mb20: {
        marginBottom: 20,
    },
    mt20: {
        marginTop: 20,
    },
    ml20: {
        marginLeft: 20,
    },
    pb20: {
        paddingBottom: 20,
    },
    py20: {
        paddingVertical: 20,
    },
    pt20: {
        paddingTop: 20,
    },
    mxH100: {
        maxHeight: '100%'
    },
      map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
});
export { styles }